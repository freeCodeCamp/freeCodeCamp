"use strict";
const fs = require("fs");
const { EventEmitter } = require("events");
const { URL } = require("whatwg-url");
const parseDataURL = require("data-urls");
const DOMException = require("domexception/webidl2js-wrapper");

const ProgressEvent = require("../generated/ProgressEvent");

const agentFactory = require("../helpers/agent-factory");
const Request = require("../helpers/http-request");
const FormData = require("form-data");
const { fireAnEvent } = require("../helpers/events");

const headerListSeparatorRegexp = /,[ \t]*/;
const simpleMethods = new Set(["GET", "HEAD", "POST"]);
const simpleHeaders = new Set(["accept", "accept-language", "content-language", "content-type"]);
const preflightHeaders = new Set([
  "access-control-expose-headers",
  "access-control-allow-headers",
  "access-control-allow-credentials",
  "access-control-allow-origin"
]);

const READY_STATES = exports.READY_STATES = Object.freeze({
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
});

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

function dispatchError(xhr) {
  const errMessage = xhr.properties.error;
  requestErrorSteps(xhr, "error", DOMException.create(xhr._globalObject, [errMessage, "NetworkError"]));

  if (xhr._ownerDocument) {
    const error = new Error(errMessage);
    error.type = "XMLHttpRequest"; // TODO this should become "resource loading" when XHR goes through resource loader

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
  const forbiddenHeaders = acah.has("*") ?
  [] :
  Object.keys(flag.requestHeaders).filter(header => {
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
  const { flag, properties, upload } = xhr;

  xhr.readyState = READY_STATES.DONE;
  properties.send = false;

  setResponseToNetworkError(xhr);

  if (flag.synchronous) {
    throw exception;
  }

  fireAnEvent("readystatechange", xhr);

  if (!properties.uploadComplete) {
    properties.uploadComplete = true;

    if (properties.uploadListener) {
      fireAnEvent(event, upload, ProgressEvent, { loaded: 0, total: 0, lengthComputable: false });
      fireAnEvent("loadend", upload, ProgressEvent, { loaded: 0, total: 0, lengthComputable: false });
    }
  }

  fireAnEvent(event, xhr, ProgressEvent, { loaded: 0, total: 0, lengthComputable: false });
  fireAnEvent("loadend", xhr, ProgressEvent, { loaded: 0, total: 0, lengthComputable: false });
}

function setResponseToNetworkError(xhr) {
  const { properties } = xhr;

  properties.responseBuffer =
    properties.responseCache =
    properties.responseTextCache =
    properties.responseXMLCache = null;

  properties.responseHeaders = {};
  xhr.status = 0;
  xhr.statusText = "";
}

// return a "request" client object or an event emitter matching the same behaviour for unsupported protocols
// the callback should be called with a "request" response object or an event emitter matching the same behaviour too
function createClient(xhr) {
  const { flag, properties } = xhr;
  const urlObj = new URL(flag.uri);
  const uri = urlObj.href;
  const ucMethod = flag.method.toUpperCase();

  const { requestManager } = flag;

  if (urlObj.protocol === "file:") {
    const response = new EventEmitter();
    response.statusCode = 200;
    response.rawHeaders = [];
    response.headers = {};
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

    process.nextTick(() => client.emit("response", response, urlObj.href));

    return client;
  }

  if (urlObj.protocol === "data:") {
    const response = new EventEmitter();

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
      client.emit("response", response, urlObj.href);
      process.nextTick(() => {
        response.emit("data", buffer);
        client.emit("data", buffer);
        response.emit("end");
        client.emit("end");
      });
    });

    return client;
  }
  const agents = agentFactory(flag.proxy, flag.strictSSL);
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

  const options = { rejectUnauthorized: flag.strictSSL, agents, followRedirects: true };
  if (flag.auth) {
    options.user = flag.auth.user || "";
    options.pass = flag.auth.pass || "";
  }
  if (flag.cookieJar && (!crossOrigin || flag.withCredentials)) {
    options.cookieJar = flag.cookieJar;
  }

  const { body } = flag;
  const hasBody = body !== undefined &&
                  body !== null &&
                  body !== "" &&
                  !(ucMethod === "HEAD" || ucMethod === "GET");

  if (hasBody && getRequestHeader(flag.requestHeaders, "content-type") === null) {
    requestHeaders["Content-Type"] = "text/plain;charset=UTF-8";
  }

  function doRequest() {
    try {
      let requestBody = body;
      let len = 0;
      if (hasBody) {
        if (flag.formData) {
          // TODO: implement https://html.spec.whatwg.org/#multipart-form-data
          // directly instead of using an external library
          requestBody = new FormData();
          for (const entry of body) {
            requestBody.append(entry.name, entry.value, entry.options);
          }
          len = requestBody.getLengthSync();
          requestHeaders["Content-Type"] = `multipart/form-data; boundary=${requestBody.getBoundary()}`;
        } else {
          if (typeof body === "string") {
            len = Buffer.byteLength(body);
          } else {
            len = body.length;
          }
          requestBody = Buffer.isBuffer(requestBody) ? requestBody : Buffer.from(requestBody);
        }
        requestHeaders["Content-Length"] = len;
      }
      requestHeaders["Accept-Encoding"] = "gzip, deflate";
      const requestClient = new Request(uri, options, { method: flag.method, headers: requestHeaders });
      if (hasBody) {
        if (flag.formData) {
          requestBody.on("error", err => {
            requestClient.emit("error", err);
            requestClient.abort();
          });
          requestClient.pipeRequest(requestBody);
        } else {
          requestClient.write(requestBody);
        }
      }
      return requestClient;
    } catch (e) {
      const eventEmitterclient = new EventEmitter();
      process.nextTick(() => eventEmitterclient.emit("error", e));
      eventEmitterclient.end = () => {};
      return eventEmitterclient;
    }
  }

  let client;

  const nonSimpleHeaders = Object.keys(flag.requestHeaders)
    .filter(header => !simpleHeaders.has(header.toLowerCase()));

  if (crossOrigin && (!simpleMethods.has(ucMethod) || nonSimpleHeaders.length > 0 || properties.uploadListener)) {
    client = new EventEmitter();

    const preflightRequestHeaders = {};
    for (const header in requestHeaders) {
      // the only existing request headers the cors spec allows on the preflight request are Origin and Referer
      const lcHeader = header.toLowerCase();
      if (lcHeader === "origin" || lcHeader === "referer") {
        preflightRequestHeaders[header] = requestHeaders[header];
      }
    }

    preflightRequestHeaders["Access-Control-Request-Method"] = flag.method;
    if (nonSimpleHeaders.length > 0) {
      preflightRequestHeaders["Access-Control-Request-Headers"] = nonSimpleHeaders.join(", ");
    }

    preflightRequestHeaders["User-Agent"] = flag.userAgent;

    flag.preflight = true;

    const rejectUnauthorized = flag.strictSSL;
    const preflightClient = new Request(
      uri,
      { agents, followRedirects: false },
      { method: "OPTIONS", headers: preflightRequestHeaders, rejectUnauthorized }
    );

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
      // Set request gzip option right before headers are set
      const realClient = doRequest();
      realClient.on("response", (...args) => client.emit("response", ...args));
      realClient.on("data", chunk => client.emit("data", chunk));
      realClient.on("end", () => client.emit("end"));
      realClient.on("abort", () => client.emit("abort"));
      realClient.on("request", req => {
        client.headers = realClient.headers;
        client.emit("request", req);
      });
      realClient.on("redirect", (...args) => {
        client.emit("redirect", ...args);
      });
      realClient.on("error", err => {
        client.emit("error", err);
      });
      client.abort = () => {
        realClient.abort();
      };
      setImmediate(() => realClient.end());
    });

    preflightClient.on("error", err => {
      client.emit("error", err);
    });

    client.abort = () => {
      preflightClient.abort();
    };
    setImmediate(() => preflightClient.end());
  } else {
    client = doRequest();
    setImmediate(() => client.end());
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
exports.getRequestHeader = getRequestHeader;
exports.updateRequestHeader = updateRequestHeader;
exports.dispatchError = dispatchError;
exports.validCORSHeaders = validCORSHeaders;
exports.requestErrorSteps = requestErrorSteps;
exports.setResponseToNetworkError = setResponseToNetworkError;
exports.createClient = createClient;
