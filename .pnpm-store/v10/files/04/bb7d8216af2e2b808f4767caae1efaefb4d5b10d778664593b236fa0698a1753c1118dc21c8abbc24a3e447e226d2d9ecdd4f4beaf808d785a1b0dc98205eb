"use strict";
const util = require("util");
const { JSDOM } = require("../../../..");
const { READY_STATES } = require("./xhr-utils");
const idlUtils = require("../generated/utils");
const tough = require("tough-cookie");

const dom = new JSDOM();
const xhr = new dom.window.XMLHttpRequest();
const xhrImpl = idlUtils.implForWrapper(xhr);

const chunks = [];

process.stdin.on("data", chunk => {
  chunks.push(chunk);
});

process.stdin.on("end", () => {
  const buffer = Buffer.concat(chunks);

  const flag = JSON.parse(buffer.toString());
  if (flag.body && flag.body.type === "Buffer" && flag.body.data) {
    flag.body = Buffer.from(flag.body.data);
  }
  if (flag.cookieJar) {
    flag.cookieJar = tough.CookieJar.fromJSON(flag.cookieJar);
  }

  flag.synchronous = false;
  Object.assign(xhrImpl.flag, flag);
  const { properties } = xhrImpl;
  xhrImpl.readyState = READY_STATES.OPENED;
  try {
    xhr.addEventListener("loadend", () => {
      if (properties.error) {
        properties.error = properties.error.stack || util.inspect(properties.error);
      }
      process.stdout.write(JSON.stringify({
        responseURL: xhrImpl.responseURL,
        status: xhrImpl.status,
        statusText: xhrImpl.statusText,
        properties
      }), () => {
        process.exit(0);
      });
    }, false);
    xhr.send(flag.body);
  } catch (error) {
    properties.error += error.stack || util.inspect(error);
    process.stdout.write(JSON.stringify({
      responseURL: xhrImpl.responseURL,
      status: xhrImpl.status,
      statusText: xhrImpl.statusText,
      properties
    }), () => {
      process.exit(0);
    });
  }
});
