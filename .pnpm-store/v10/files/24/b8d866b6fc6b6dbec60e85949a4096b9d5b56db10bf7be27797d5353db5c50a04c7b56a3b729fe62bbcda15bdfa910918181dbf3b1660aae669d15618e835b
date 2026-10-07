"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raise = raise;
function raise(position, message) {
    const errorMessage = message +
        " (" +
        position.loc.start.line +
        ":" +
        position.loc.start.column +
        ")";
    const error = new SyntaxError(errorMessage);
    error.pos = position.range[0];
    error.loc = position.loc;
    error.raiseAt = position.range[0];
    throw error;
}
