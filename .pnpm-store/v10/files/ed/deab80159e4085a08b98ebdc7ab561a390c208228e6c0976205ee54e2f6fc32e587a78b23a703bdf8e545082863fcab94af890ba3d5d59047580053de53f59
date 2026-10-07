"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeForTemplateString = escapeForTemplateString;
exports.escapeForMultilineComments = escapeForMultilineComments;
function escapeForTemplateString(originalText) {
    return originalText.replace(/([$`\\])/g, '\\$1').replace(/\r/g, '\\r');
}
function escapeForMultilineComments(originalText) {
    return originalText.replace(/\*\//g, '*\\/');
}
