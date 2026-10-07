"use strict";

const MIMEType = require("whatwg-mimetype");

const PRIVILEGED_NO_CORS_REQUEST = new Set(["range"]);
function isPrivilegedNoCORSRequest(name) {
  return PRIVILEGED_NO_CORS_REQUEST.has(name.toLowerCase());
}

const NO_CORS_SAFELISTED_REQUEST = new Set([
  `accept`,
  `accept-language`,
  `content-language`,
  `content-type`
]);
function isNoCORSSafelistedRequest(name) {
  return NO_CORS_SAFELISTED_REQUEST.has(name.toLowerCase());
}

const FORBIDDEN = new Set([
  `accept-charset`,
  `accept-encoding`,
  `access-control-request-headers`,
  `access-control-request-method`,
  `connection`,
  `content-length`,
  `cookie`,
  `cookie2`,
  `date`,
  `dnt`,
  `expect`,
  `host`,
  `keep-alive`,
  `origin`,
  `referer`,
  `te`,
  `trailer`,
  `transfer-encoding`,
  `upgrade`,
  `via`
]);
function isForbidden(name) {
  name = name.toLowerCase();
  return (
    FORBIDDEN.has(name) || name.startsWith("proxy-") || name.startsWith("sec-")
  );
}

const FORBIDDEN_RESPONSE = new Set(["set-cookie", "set-cookie2"]);
function isForbiddenResponse(name) {
  return FORBIDDEN_RESPONSE.has(name.toLowerCase());
}

const CORS_UNSAFE_BYTE = /[\x00-\x08\x0A-\x1F"():<>?@[\\\]{}\x7F]/;
function isCORSWhitelisted(name, value) {
  name = name.toLowerCase();
  switch (name) {
    case "accept":
      if (value.match(CORS_UNSAFE_BYTE)) {
        return false;
      }
      break;
    case "accept-language":
    case "content-language":
      if (value.match(/[^\x30-\x39\x41-\x5A\x61-\x7A *,\-.;=]/)) {
        return false;
      }
      break;
    case "content-type": {
      if (value.match(CORS_UNSAFE_BYTE)) {
        return false;
      }
      const mimeType = MIMEType.parse(value);
      if (mimeType === null) {
        return false;
      }
      if (
        ![
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain"
        ].includes(mimeType.essence)
      ) {
        return false;
      }
      break;
    }
    default:
      return false;
  }
  if (Buffer.from(value).length > 128) {
    return false;
  }
  return true;
}

module.exports = {
  isPrivilegedNoCORSRequest,
  isNoCORSSafelistedRequest,
  isForbidden,
  isForbiddenResponse,
  isCORSWhitelisted
};
