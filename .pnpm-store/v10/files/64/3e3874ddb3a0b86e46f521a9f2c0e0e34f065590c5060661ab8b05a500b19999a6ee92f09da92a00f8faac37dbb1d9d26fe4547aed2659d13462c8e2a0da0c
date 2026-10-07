"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTokenLocation = calculateTokenLocation;
const get_line_info_1 = require("./get-line-info");
function calculateTokenLocation(source, range) {
    return {
        start: (0, get_line_info_1.getLineInfo)(source, range[0]),
        end: (0, get_line_info_1.getLineInfo)(source, range[1]),
    };
}
