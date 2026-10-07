// Type definitions for ErrorStackParser v2.1.0
// Project: https://github.com/stacktracejs/error-stack-parser
// Definitions by: Eric Wendelin <https://www.eriwen.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import StackFrame = require("stackframe");

declare namespace ErrorStackParser {
    export type {StackFrame};
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    export function parse(error: Error): StackFrame[];
}

export = ErrorStackParser;
