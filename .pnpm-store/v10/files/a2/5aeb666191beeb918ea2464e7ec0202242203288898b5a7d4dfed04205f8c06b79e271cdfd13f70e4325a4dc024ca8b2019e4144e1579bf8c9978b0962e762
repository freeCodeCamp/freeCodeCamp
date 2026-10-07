"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  config: () => config,
  t: () => t
});
module.exports = __toCommonJS(main_exports);

// src/node/reader.ts
var import_fs = require("fs");
var import_promises = require("fs/promises");
async function readFileFromUri(uri) {
  if (uri.protocol === "file:") {
    return await (0, import_promises.readFile)(uri, "utf8");
  }
  if (uri.protocol === "http:" || uri.protocol === "https:") {
    const res = await fetch(uri.toString(), {
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept": "application/json"
      },
      redirect: "follow"
    });
    if (!res.ok) {
      let error = `Unexpected ${res.status} response while trying to read ${uri}`;
      try {
        error += `: ${await res.text()}`;
      } catch {
      }
      throw new Error(error);
    }
    const decoded = await res.text();
    return decoded;
  }
  throw new Error("Unsupported protocol");
}
function readFileFromFsPath(fsPath) {
  return (0, import_fs.readFileSync)(fsPath, "utf8");
}

// src/main.ts
var bundle;
function config(config2) {
  if ("contents" in config2) {
    if (typeof config2.contents === "string") {
      bundle = JSON.parse(config2.contents);
    } else {
      bundle = config2.contents;
    }
    return;
  }
  if ("fsPath" in config2) {
    const fileContent = readFileFromFsPath(config2.fsPath);
    const content = JSON.parse(fileContent);
    bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
    return;
  }
  if (config2.uri) {
    let uri = config2.uri;
    if (typeof config2.uri === "string") {
      uri = new URL(config2.uri);
    }
    return new Promise((resolve, reject) => {
      readFileFromUri(uri).then((uriContent) => {
        try {
          const content = JSON.parse(uriContent);
          bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
          resolve();
        } catch (err) {
          reject(err);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
function t(...args) {
  const firstArg = args[0];
  let key;
  let message;
  let formatArgs;
  if (typeof firstArg === "string") {
    key = firstArg;
    message = firstArg;
    args.splice(0, 1);
    formatArgs = !args || typeof args[0] !== "object" ? args : args[0];
  } else if (firstArg instanceof Array) {
    const replacements = args.slice(1);
    if (firstArg.length !== replacements.length + 1) {
      throw new Error("expected a string as the first argument to l10n.t");
    }
    let str = firstArg[0];
    for (let i = 1; i < firstArg.length; i++) {
      str += `{${i - 1}}` + firstArg[i];
    }
    return t(str, ...replacements);
  } else {
    message = firstArg.message;
    key = message;
    if (firstArg.comment && firstArg.comment.length > 0) {
      key += `/${Array.isArray(firstArg.comment) ? firstArg.comment.join("") : firstArg.comment}`;
    }
    formatArgs = firstArg.args ?? {};
  }
  const messageFromBundle = bundle?.[key];
  if (!messageFromBundle) {
    return format(message, formatArgs);
  }
  if (typeof messageFromBundle === "string") {
    return format(messageFromBundle, formatArgs);
  }
  if (messageFromBundle.comment) {
    return format(messageFromBundle.message, formatArgs);
  }
  return format(message, formatArgs);
}
var _format2Regexp = /{([^}]+)}/g;
function format(template, values) {
  if (Object.keys(values).length === 0) {
    return template;
  }
  return template.replace(_format2Regexp, (match, group) => values[group] ?? match);
}
function isBuiltinExtension(json) {
  return !!(typeof json?.contents?.bundle === "object" && typeof json?.version === "string");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  t
});
