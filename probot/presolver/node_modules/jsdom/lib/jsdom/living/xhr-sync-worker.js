"use strict";
/* eslint-disable no-process-exit */
const util = require("util");
const { JSDOM } = require("../../..");
const tough = require("tough-cookie");
const xhrSymbols = require("./xmlhttprequest-symbols.js");

const dom = new JSDOM();
const xhr = new dom.window.XMLHttpRequest();

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
  xhr[xhrSymbols.flag] = flag;
  const properties = xhr[xhrSymbols.properties];
  properties.readyState = xhr.OPENED;
  try {
    xhr.addEventListener("loadend", () => {
      if (properties.error) {
        properties.error = properties.error.stack || util.inspect(properties.error);
      }
      process.stdout.write(JSON.stringify({ properties }), () => {
        process.exit(0);
      });
    }, false);
    xhr.send(flag.body);
  } catch (error) {
    properties.error += error.stack || util.inspect(error);
    process.stdout.write(JSON.stringify({ properties }), () => {
      process.exit(0);
    });
  }
});
