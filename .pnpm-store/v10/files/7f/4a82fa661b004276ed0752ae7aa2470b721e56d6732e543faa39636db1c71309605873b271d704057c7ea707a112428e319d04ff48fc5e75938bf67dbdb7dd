/* Determine browser vs node environment by testing the default top level context. Solution courtesy of: https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser */
const isBrowserEnvironment = (function() {
    // eslint-disable-next-line no-undef
    return (typeof window !== "undefined") && (this === window);
}).call();

if (isBrowserEnvironment) {
  // Web version of reading a wasm file into an array buffer.

  let mappingsWasm = null;

  module.exports = function readWasm() {
    if (typeof mappingsWasm === "string") {
      return fetch(mappingsWasm)
        .then(response => response.arrayBuffer());
    }
    if (mappingsWasm instanceof ArrayBuffer) {
      return Promise.resolve(mappingsWasm);
    }
    throw new Error("You must provide the string URL or ArrayBuffer contents " +
                    "of lib/mappings.wasm by calling " +
                    "SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) " +
                    "before using SourceMapConsumer");
  };

  module.exports.initialize = input => mappingsWasm = input;
} else {
  // Node version of reading a wasm file into an array buffer.
  const fs = require("fs");
  const path = require("path");

  module.exports = function readWasm() {
    return new Promise((resolve, reject) => {
      const wasmPath = path.join(__dirname, "mappings.wasm");
      fs.readFile(wasmPath, null, (error, data) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(data.buffer);
      });
    });
  };

  module.exports.initialize = _ => {
    console.debug("SourceMapConsumer.initialize is a no-op when running in node.js");
  };
}
