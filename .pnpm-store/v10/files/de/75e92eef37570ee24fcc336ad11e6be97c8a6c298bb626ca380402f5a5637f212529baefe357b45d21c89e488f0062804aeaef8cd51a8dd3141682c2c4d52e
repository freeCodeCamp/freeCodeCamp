"use strict";

const path = require("path");

const memfs = require("memfs");
/** @typedef {import("webpack").MultiCompiler} MultiCompiler */

/** @typedef {import("../index.js").IncomingMessage} IncomingMessage */

/** @typedef {import("../index.js").ServerResponse} ServerResponse */

/**
 * @template {IncomingMessage} Request
 * @template {ServerResponse} Response
 * @param {import("../index.js").Context<Request, Response>} context
 */


function setupOutputFileSystem(context) {
  let outputFileSystem;

  if (context.options.outputFileSystem) {
    const {
      outputFileSystem: outputFileSystemFromOptions
    } = context.options; // Todo remove when we drop webpack@4 support

    if (typeof outputFileSystemFromOptions.join !== "function") {
      throw new Error("Invalid options: options.outputFileSystem.join() method is expected");
    } // Todo remove when we drop webpack@4 support
    // @ts-ignore


    if (typeof outputFileSystemFromOptions.mkdirp !== "function") {
      throw new Error("Invalid options: options.outputFileSystem.mkdirp() method is expected");
    }

    outputFileSystem = outputFileSystemFromOptions;
  } else {
    outputFileSystem = memfs.createFsFromVolume(new memfs.Volume()); // TODO: remove when we drop webpack@4 support
    // @ts-ignore

    outputFileSystem.join = path.join.bind(path);
  }

  const compilers =
  /** @type {MultiCompiler} */
  context.compiler.compilers || [context.compiler];

  for (const compiler of compilers) {
    compiler.outputFileSystem = outputFileSystem;
  } // @ts-ignore
  // eslint-disable-next-line no-param-reassign


  context.outputFileSystem = outputFileSystem;
}

module.exports = setupOutputFileSystem;