Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticAttributes = require('../semanticAttributes.js');

const DEFAULT_BASE_URL = "thismessage:/";
function isURLObjectRelative(url) {
  return "isRelative" in url;
}
function parseStringToURLObject(url, urlBase) {
  const isRelative = url.indexOf("://") <= 0 && url.indexOf("//") !== 0;
  const base = urlBase ?? (isRelative ? DEFAULT_BASE_URL : void 0);
  try {
    if ("canParse" in URL && !URL.canParse(url, base)) {
      return void 0;
    }
    const fullUrlObject = new URL(url, base);
    if (isRelative) {
      return {
        isRelative,
        pathname: fullUrlObject.pathname,
        search: fullUrlObject.search,
        hash: fullUrlObject.hash
      };
    }
    return fullUrlObject;
  } catch {
  }
  return void 0;
}
function getSanitizedUrlStringFromUrlObject(url) {
  if (isURLObjectRelative(url)) {
    return url.pathname;
  }
  const newUrl = new URL(url);
  newUrl.search = "";
  newUrl.hash = "";
  if (["80", "443"].includes(newUrl.port)) {
    newUrl.port = "";
  }
  if (newUrl.password) {
    newUrl.password = "%filtered%";
  }
  if (newUrl.username) {
    newUrl.username = "%filtered%";
  }
  return newUrl.toString();
}
function getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName) {
  const method = request?.method?.toUpperCase() ?? "GET";
  const route = routeName ? routeName : urlObject ? kind === "client" ? getSanitizedUrlStringFromUrlObject(urlObject) : urlObject.pathname : "/";
  return `${method} ${route}`;
}
function getHttpSpanDetailsFromUrlObject(urlObject, kind, spanOrigin, request, routeName) {
  const attributes = {
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: spanOrigin,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
  };
  if (routeName) {
    attributes[kind === "server" ? "http.route" : "url.template"] = routeName;
    attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
  }
  if (request?.method) {
    attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = request.method.toUpperCase();
  }
  if (urlObject) {
    if (urlObject.search) {
      attributes["url.query"] = urlObject.search;
    }
    if (urlObject.hash) {
      attributes["url.fragment"] = urlObject.hash;
    }
    if (urlObject.pathname) {
      attributes["url.path"] = urlObject.pathname;
      if (urlObject.pathname === "/") {
        attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
      }
    }
    if (!isURLObjectRelative(urlObject)) {
      attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_URL_FULL] = urlObject.href;
      if (urlObject.port) {
        attributes["url.port"] = urlObject.port;
      }
      if (urlObject.protocol) {
        attributes["url.scheme"] = urlObject.protocol;
      }
      if (urlObject.hostname) {
        attributes[kind === "server" ? "server.address" : "url.domain"] = urlObject.hostname;
      }
    }
  }
  return [getHttpSpanNameFromUrlObject(urlObject, kind, request, routeName), attributes];
}
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment
    // everything minus origin
  };
}
function stripUrlQueryAndFragment(urlPath) {
  return urlPath.split(/[?#]/, 1)[0];
}
function getSanitizedUrlString(url) {
  const { protocol, host, path } = url;
  const filteredHost = host?.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
  return `${protocol ? `${protocol}://` : ""}${filteredHost}${path}`;
}
function stripDataUrlContent(url, includeDataPrefix = true) {
  if (url.startsWith("data:")) {
    const match = url.match(/^data:([^;,]+)/);
    const mimeType = match ? match[1] : "text/plain";
    const isBase64 = url.includes(";base64,");
    const dataStart = url.indexOf(",");
    let dataPrefix = "";
    if (includeDataPrefix && dataStart !== -1) {
      const data = url.slice(dataStart + 1);
      dataPrefix = data.length > 10 ? `${data.slice(0, 10)}... [truncated]` : data;
    }
    return `data:${mimeType}${isBase64 ? ",base64" : ""}${dataPrefix ? `,${dataPrefix}` : ""}`;
  }
  return url;
}

exports.getHttpSpanDetailsFromUrlObject = getHttpSpanDetailsFromUrlObject;
exports.getSanitizedUrlString = getSanitizedUrlString;
exports.getSanitizedUrlStringFromUrlObject = getSanitizedUrlStringFromUrlObject;
exports.isURLObjectRelative = isURLObjectRelative;
exports.parseStringToURLObject = parseStringToURLObject;
exports.parseUrl = parseUrl;
exports.stripDataUrlContent = stripDataUrlContent;
exports.stripUrlQueryAndFragment = stripUrlQueryAndFragment;
//# sourceMappingURL=url.js.map
