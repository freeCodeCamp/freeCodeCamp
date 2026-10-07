"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CodeFrameFormatter_1 = require("./CodeFrameFormatter");
const BasicFormatter_1 = require("./BasicFormatter");
// declare function implementation
function createFormatter(type, options) {
    if (typeof type === 'function') {
        return type;
    }
    if (typeof type === 'undefined' || type === 'basic') {
        return BasicFormatter_1.createBasicFormatter();
    }
    if (type === 'codeframe') {
        return CodeFrameFormatter_1.createCodeFrameFormatter(options);
    }
    throw new Error(`Unknown "${type}" formatter. Available types are: "basic", "codeframe" or a custom function.`);
}
exports.createFormatter = createFormatter;
