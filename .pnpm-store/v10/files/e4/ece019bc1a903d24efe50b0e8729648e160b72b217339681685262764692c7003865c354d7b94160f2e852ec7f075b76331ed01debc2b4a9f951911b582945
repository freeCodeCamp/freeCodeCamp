"use strict";

const path = require("path");

function isUrlRequest(url) {
  // An URL is not an request if

  // 1. Allow `data URI`
  if (/^data:/i.test(url)) {
    return true;
  }

  // 2. It's an absolute url and it is not `windows` path like `C:\dir\file`
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !path.win32.isAbsolute(url)) {
    return false;
  }

  // 3. It's a protocol-relative
  if (/^\/\//.test(url)) {
    return false;
  }

  // 4. It's some kind of url for a template
  if (/^#/.test(url)) {
    return false;
  }

  return true;
}

module.exports = isUrlRequest;
