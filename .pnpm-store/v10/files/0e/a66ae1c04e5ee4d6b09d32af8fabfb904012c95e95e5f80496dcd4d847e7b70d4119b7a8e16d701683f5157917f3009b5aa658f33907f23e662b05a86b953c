"use strict";

const fs = require("fs");

const path = require("path");
/** @typedef {import("webpack").Compiler} Compiler */

/** @typedef {import("webpack").MultiCompiler} MultiCompiler */

/** @typedef {import("webpack").Compilation} Compilation */

/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */

/** @typedef {import("../index.js").ServerResponse} ServerResponse */

/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 */


function setupWriteToDisk(context) {
  /**
   * @type {Compiler[]}
   */
  const compilers =
  /** @type {MultiCompiler} */
  context.compiler.compilers || [context.compiler];

  for (const compiler of compilers) {
    compiler.hooks.emit.tap("DevMiddleware",
    /**
     * @param {Compilation} compilation
     */
    compilation => {
      // @ts-ignore
      if (compiler.hasWebpackDevMiddlewareAssetEmittedCallback) {
        return;
      }

      compiler.hooks.assetEmitted.tapAsync("DevMiddleware", (file, info, callback) => {
        /**
         * @type {string}
         */
        let targetPath;
        /**
         * @type {Buffer}
         */

        let content; // webpack@5

        if (info.compilation) {
          ({
            targetPath,
            content
          } = info);
        } else {
          let targetFile = file;
          const queryStringIdx = targetFile.indexOf("?");

          if (queryStringIdx >= 0) {
            targetFile = targetFile.slice(0, queryStringIdx);
          }

          let {
            outputPath
          } = compiler;
          outputPath = compilation.getPath(outputPath, {}); // @ts-ignore

          content = info;
          targetPath = path.join(outputPath, targetFile);
        }

        const {
          writeToDisk: filter
        } = context.options;
        const allowWrite = filter && typeof filter === "function" ? filter(targetPath) : true;

        if (!allowWrite) {
          return callback();
        }

        const dir = path.dirname(targetPath);
        const name = compiler.options.name ? `Child "${compiler.options.name}": ` : "";
        return fs.mkdir(dir, {
          recursive: true
        }, mkdirError => {
          if (mkdirError) {
            context.logger.error(`${name}Unable to write "${dir}" directory to disk:\n${mkdirError}`);
            return callback(mkdirError);
          }

          return fs.writeFile(targetPath, content, writeFileError => {
            if (writeFileError) {
              context.logger.error(`${name}Unable to write "${targetPath}" asset to disk:\n${writeFileError}`);
              return callback(writeFileError);
            }

            context.logger.log(`${name}Asset written to disk: "${targetPath}"`);
            return callback();
          });
        });
      }); // @ts-ignore

      compiler.hasWebpackDevMiddlewareAssetEmittedCallback = true;
    });
  }
}

module.exports = setupWriteToDisk;