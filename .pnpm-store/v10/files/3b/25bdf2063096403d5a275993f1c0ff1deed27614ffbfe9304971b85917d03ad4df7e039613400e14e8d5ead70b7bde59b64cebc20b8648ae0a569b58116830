"use strict";

const STRIP_FILENAME_RE = /^[^:]+: /;
const format = err => {
  if (err instanceof SyntaxError) {
    err.name = "SyntaxError";
    err.message = err.message.replace(STRIP_FILENAME_RE, "");
    err.hideStack = true;
  } else if (err instanceof TypeError) {
    err.name = null;
    err.message = err.message.replace(STRIP_FILENAME_RE, "");
    err.hideStack = true;
  }
  return err;
};
class LoaderError extends Error {
  constructor(err) {
    super();
    const {
      name,
      message,
      codeFrame,
      hideStack
    } = format(err);
    this.name = "BabelLoaderError";
    this.message = `${name ? `${name}: ` : ""}${message}\n\n${codeFrame}\n`;
    this.hideStack = hideStack;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = LoaderError;