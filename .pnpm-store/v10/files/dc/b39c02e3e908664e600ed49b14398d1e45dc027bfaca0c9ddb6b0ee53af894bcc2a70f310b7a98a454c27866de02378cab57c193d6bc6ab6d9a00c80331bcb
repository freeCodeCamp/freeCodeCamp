"use strict";

exports.__esModule = true;
exports.getTermProgram = getTermProgram;
function getTermProgram() {
  const {
    TERM_PROGRAM,
    WT_SESSION
  } = process.env;
  if (TERM_PROGRAM) {
    return TERM_PROGRAM;
  } else if (WT_SESSION) {
    // https://github.com/microsoft/terminal/issues/1040
    return `WindowsTerminal`;
  }
  return undefined;
}