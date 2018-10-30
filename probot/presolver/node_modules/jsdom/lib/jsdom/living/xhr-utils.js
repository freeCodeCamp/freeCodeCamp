"use strict";
const request = require("request");
const { EventEmitter } = require("events");
const Event = require("./generated/Event");
const ProgressEvent = require("./generated/ProgressEvent");
const fs = require("fs");
const { URL } = require("whatwg-url");
const parseDataURL = require("data-urls");

const DOMException = require("domexception");
const xhrSymbols = require("./xmlhttprequest-symbols");

const headerListSeparatorRegexp = /,[ \t]*/;
const simpleMethods = new Set(["GET", "HEAD", "POST"]);
const simpleHeaders = new Set(["accept", "accept-language", "content-language", "content-type"]);
const preflightHeaders = new Set([
  "access-control-expose-headers",
  "access-control-allow-headers",
  "access-control-allow-credentials",
  "access-control-allow-origin"
]);

function wrapCookieJarForRequest(cookieJar) {
  const jarWrapper = request.jar();
  jarWrapper._jar = cookieJar;
  return jarWrapper;
}

function getRequestHeader(requestHeaders, header) {
  const lcHeader = header.toLowerCase();
  const keys = Object.keys(requestHeaders);
  let n = keys.length;
  while (n--) {
    const key = keys[n];
    if (key.toLowerCase() === lcHeader) {
      return requestHeaders[key];
    }
  }
  return null;
}

function updateRequestHeader(requestHeaders, header, newValue) {
  const lcHeader = header.toLowerCase();
  const keys = Object.keys(requestHeaders);
  let n = keys.length;
  while (n--) {
    const key = keys[n];
    if (key.toLowerCase() === lcHeader) {
      requestHeaders[key] = newValue;
    }
  }
}

function mergeHeaders(lhs, rhs) {
  const rhsParts = rhs.split(",");
  const lhsParts = lhs.split(",");
  return rhsParts.concat(lhsParts.filter(p => rhsParts.indexOf(p) < 0)).join(",");
}

function dispatchError(xhr) {
  const errMessage = xhr[xhrSymbols.properties].error;
  requestErrorSteps(xhr, "error", new DOMException(errMessage, "NetworkError"));

  if (xhr._ownerDocument) {
    const error = new Error(errMessage);
    error.type = "XMLHttpRequest";

    xhr._ownerDocument._defaultView._virtualConsole.emit("jsdomError", error);
  }
}

function validCORSHeaders(xhr, response, flag, properties, origin) {
  const acaoStr = response.headers["access-control-allow-origin"];
  const acao = acaoStr ? acaoStr.trim() : null;
  if (acao !== "*" && acao !== origin) {
    properties.error = "Cross origin " + origin + " forbidden";
    dispatchError(xhr);
    return false;
  }
  const acacStr = response.headers["access-control-allow-credentials"];
  const acac = acacStr ? acacStr.trim() : null;
  if (flag.withCredentials && acac !== "true") {
    properties.error = "Credentials forbidden";
    dispatchError(xhr);
    return false;
  }
  return true;
}

function validCORSPreflightHeaders(xhr, response, flag, properties) {
  if (!validCORSHeaders(xhr, response, flag, properties, properties.origin)) {
    return false;
  }
  const acahStr = response.headers["access-control-allow-headers"];
  const acah = new Set(acahStr ? acahStr.trim().toLowerCase().split(headerListSeparatorRegexp) : []);
  const forbiddenHeaders = Object.keys(flag.requestHeaders).filter(header => {
    const lcHeader = header.toLowerCase();
    return !simpleHeaders.has(lcHeader) && !acah.has(lcHeader);
  });
  if (forbiddenHeaders.length > 0) {
    properties.error = "Headers " + forbiddenHeaders + " forbidden";
    dispatchError(xhr);
    return false;
  }
  return true;
}

function requestErrorSteps(xhr, event, exception) {
  const properties = xhr[xhrSymbols.properties];
  const flag = xhr[xhrSymbols.flag];

  properties.readyState = xhr.DONE;
  properties.send = false;

  setResponseToNetworkError(xhr);

  if (flag.synchronous) {
    throw exception;
  }

  xhr.dispatchEvent(Event.create(["readystatechange"]));

  if (!properties.uploadComplete) {
    properties.uploadComplete = true;

    if (properties.uploadListener) {
      xhr.upload.dispatchEvent(ProgressEvent.create([event, { loaded: 0, total: 0, lengthComputable: false }]));
      xhr.upload.dispatchEvent(ProgressEvent.create(["loadend", { loaded: 0, total: 0, lengthComputable: false }]));
    }
  }

  xhr.dispatchEvent(ProgressEvent.create([event, { loaded: 0, total: 0, lengthComputable: false }]));
  xhr.dispatchEvent(ProgressEvent.create(["loadend", { loaded: 0, total: 0, lengthComputable: false }]));
}

function setResponseToNetworkError(xhr) {
  const properties = xhr[xhrSymbols.properties];
  properties.responseCache = properties.responseTextCache = properties.responseXMLCache = null;
  properties.responseHeaders = {};
  properties.status = 0;
  properties.statusText = "";
}

// return a "request" client object or an event emitter matching the same behaviour for unsupported protocols
// the callback should be called with a "request" response object or an event emitter matching the same behaviour too
function createClient(xhr) {
  const flag = xhr[xhrSymbols.flag];
  const properties = xhr[xhrSymbols.properties];
  const urlObj = new URL(flag.uri);
  const uri = urlObj.href;
  const ucMethod = flag.method.toUpperCase();

  const { requestManager } = flag;

  if (urlObj.protocol === "file:") {
    const response = new EventEmitter();
    response.statusCode = 200;
    response.rawHeaders = [];
    response.headers = {};
    response.request = { uri: urlObj };
    const filePath = urlObj.pathname
      .replace(/^file:\/\//, "")
      .replace(/^\/([a-z]):\//i, "$1:/")
      .replace(/%20/g, " ");

    const client = new EventEmitter();

    const readableStream = fs.createReadStream(filePath, { encoding: null });

    readableStream.on("data", chunk => {
      response.emit("data", chunk);
      client.emit("data", chunk);
    });

    readableStream.on("end", () => {
      response.emit("end");
      client.emit("end");
    });

    readableStream.on("error", err => {
      response.emit("error", err);
      client.emit("error", err);
    });

    client.abort = function () {
      readableStream.destroy();
      client.emit("abort");
    };

    if (requestManager) {
      const req = {
        abort() {
          properties.abortError = true;
          xhr.abort();
        }
      };
      requestManager.add(req);
      const rmReq = requestManager.remove.bind(requestManager, req);
      client.on("abort", rmReq);
      client.on("error", rmReq);
      client.on("end", rmReq);
    }

    process.nextTick(() => client.emit("response", response));

    return client;
  }

  if (urlObj.protocol === "data:") {
    const response = new EventEmitter();

    response.request = { uri: urlObj };

    const client = new EventEmitter();

    let buffer;
    try {
      const parsed = parseDataURL(uri);
      const contentType = parsed.mimeType.toString();
      buffer = parsed.body;
      response.statusCode = 200;
      response.rawHeaders = ["Content-Type", contentType];
      response.headers = { "content-type": contentType };
    } catch (err) {
      process.nextTick(() => client.emit("error", err));
      return client;
    }

    client.abort = () => {
      // do nothing
    };

    process.nextTick(() => {
      client.emit("response", response);
      process.nextTick(() => {
        response.emit("data", buffer);
        client.emit("data", buffer);
        response.emit("end");
        client.emit("end");
      });
    });

    return client;
  }

  const requestHeaders = {};

  for (const header in flag.requestHeaders) {
    requestHeaders[header] = flag.requestHeaders[header];
  }

  if (getRequestHeader(flag.requestHeaders, "referer") === null) {
    requestHeaders.Referer = flag.referrer;
  }
  if (getRequestHeader(flag.requestHeaders, "user-agent") === null) {
    requestHeaders["User-Agent"] = flag.userAgent;
  }
  if (getRequestHeader(flag.requestHeaders, "accept-language") === null) {
    requestHeaders["Accept-Language"] = "en";
  }
  if (getRequestHeader(flag.requestHeaders, "accept") === null) {
    requestHeaders.Accept = "*/*";
  }

  const crossOrigin = flag.origin !== urlObj.origin;
  if (crossOrigin) {
    requestHeaders.Origin = flag.origin;
  }

  const options = {
    uri,
    method: flag.method,
    headers: requestHeaders,
    gzip: true,
    maxRedirects: 21,
    followAllRedirects: true,
    encoding: null,
    pool: flag.pool,
    agentOptions: flag.agentOptions,
    strictSSL: flag.strictSSL
  };
  if (flag.auth) {
    options.auth = {
      user: flag.auth.user || "",
      pass: flag.auth.pass || "",
      sendImmediately: false
    };
  }
  if (flag.cookieJar && (!crossOrigin || flag.withCredentials)) {
    options.jar = wrapCookieJarForRequest(flag.cookieJar);
  }

  if (flag.proxy) {
    options.proxy = flag.proxy;
  }

  const { body } = flag;
  const hasBody = body !== undefined &&
                  body !== null &&
                  body !== "" &&
                  !(ucMethod === "HEAD" || ucMethod === "GET");

  if (hasBody && !flag.formData) {
    options.body = body;
  }

  if (hasBody && getRequestHeader(flag.requestHeaders, "content-type") === null) {
    requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
  }

  function doRequest() {
    try {
      const client = request(options);

      if (hasBody && flag.formData) {
        const form = client.form();
        for (const entry of body) {
          form.append(entry.name, entry.value, entry.options);
        }
      }

      return client;
    } catch (e) {
      const client = new EventEmitter();
      process.nextTick(() => client.emit("error", e));
      return client;
    }
  }

  let client;

  const nonSimpleHeaders = Object.keys(flag.requestHeaders)
    .filter(header => !simpleHeaders.has(header.toLowerCase()));

  if (crossOrigin && (!simpleMethods.has(ucMethod) || nonSimpleHeaders.length > 0 || properties.uploadListener)) {
    client = new EventEmitter();

    const preflightRequestHeaders = [];
    for (const header in requestHeaders) {
      // the only existing request headers the cors spec allows on the preflight request are Origin and Referrer
      const lcHeader = header.toLowerCase();
      if (lcHeader === "origin" || lcHeader === "referrer") {
        preflightRequestHeaders[header] = requestHeaders[header];
      }
    }

    preflightRequestHeaders["Access-Control-Request-Method"] = flag.method;
    if (nonSimpleHeaders.length > 0) {
      preflightRequestHeaders["Access-Control-Request-Headers"] = nonSimpleHeaders.join(", ");
    }

    preflightRequestHeaders["User-Agent"] = flag.userAgent;

    flag.preflight = true;

    const preflightOptions = {
      uri,
      method: "OPTIONS",
      headers: preflightRequestHeaders,
      followRedirect: false,
      encoding: null,
      pool: flag.pool,
      agentOptions: flag.agentOptions,
      strictSSL: flag.strictSSL
    };

    if (flag.proxy) {
      preflightOptions.proxy = flag.proxy;
    }

    const preflightClient = request(preflightOptions);

    preflightClient.on("response", resp => {
      // don't send the real request if the preflight request returned an error
      if (resp.statusCode < 200 || resp.statusCode > 299) {
        client.emit("error", new Error("Response for preflight has invalid HTTP status code " + resp.statusCode));
        return;
      }
      // don't send the real request if we aren't allowed to use the headers
      if (!validCORSPreflightHeaders(xhr, resp, flag, properties)) {
        setResponseToNetworkError(xhr);
        return;
      }
      const realClient = doRequest();
      realClient.on("response", res => {
        for (const header in resp.headers) {
          if (preflightHeaders.has(header)) {
            res.headers[header] = Object.prototype.hasOwnProperty.call(res.headers, header) ?
                                  mergeHeaders(res.headers[header], resp.headers[header]) :
                                  resp.headers[header];
          }
        }
        client.emit("response", res);
      });
      realClient.on("data", chunk => client.emit("data", chunk));
      realClient.on("end", () => client.emit("end"));
      realClient.on("abort", () => client.emit("abort"));
      realClient.on("request", req => {
        client.headers = realClient.headers;
        client.emit("request", req);
      });
      realClient.on("redirect", () => {
        client.response = realClient.response;
        client.emit("redirect");
      });
      realClient.on("error", err => client.emit("error", err));
      client.abort = () => {
        realClient.abort();
      };
    });

    preflightClient.on("error", err => client.emit("error", err));

    client.abort = () => {
      preflightClient.abort();
    };
  } else {
    client = doRequest();
  }

  if (requestManager) {
    const req = {
      abort() {
        properties.abortError = true;
        xhr.abort();
      }
    };
    requestManager.add(req);
    const rmReq = requestManager.remove.bind(requestManager, req);
    client.on("abort", rmReq);
    client.on("error", rmReq);
    client.on("end", rmReq);
  }

  return client;
}

exports.headerListSeparatorRegexp = headerListSeparatorRegexp;
exports.simpleHeaders = simpleHeaders;
exports.preflightHeaders = preflightHeaders;
exports.wrapCookieJarForRequest = wrapCookieJarForRequest;
exports.getRequestHeader = getRequestHeader;
exports.updateRequestHeader = updateRequestHeader;
exports.dispatchError = dispatchError;
exports.validCORSHeaders = validCORSHeaders;
exports.requestErrorSteps = requestErrorSteps;
exports.setResponseToNetworkError = setResponseToNetworkError;
exports.createClient = createClient;
