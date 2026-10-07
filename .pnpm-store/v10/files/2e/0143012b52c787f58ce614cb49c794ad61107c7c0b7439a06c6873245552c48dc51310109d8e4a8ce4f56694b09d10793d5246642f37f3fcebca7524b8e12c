"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCloseTagName = parseCloseTagName;
const constants_1 = require("../constants");
function parseCloseTagName(closeTagTokenContent) {
    const match = closeTagTokenContent.match(constants_1.CLOSE_TAG_NAME_PATTERN);
    if (match === null) {
        throw new Error("Unable to parse close tag name.\n" +
            `${closeTagTokenContent} does not match pattern of closing tag.`);
    }
    return match[1].trim().toLowerCase();
}
