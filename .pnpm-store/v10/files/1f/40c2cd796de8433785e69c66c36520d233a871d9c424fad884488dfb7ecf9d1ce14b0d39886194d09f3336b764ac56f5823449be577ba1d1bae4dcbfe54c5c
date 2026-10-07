"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOpenTagName = parseOpenTagName;
const constants_1 = require("../constants");
function parseOpenTagName(openTagStartTokenContent) {
    const match = openTagStartTokenContent.match(constants_1.OPEN_TAG_NAME_PATTERN);
    if (match === null) {
        throw new Error("Unable to parse open tag name.\n" +
            `${openTagStartTokenContent} does not match pattern of opening tag.`);
    }
    return match[1].toLowerCase();
}
