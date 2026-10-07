"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapString = void 0;
const slice_ansi_1 = __importDefault(require("slice-ansi"));
const string_width_1 = __importDefault(require("string-width"));
/**
 * Creates an array of strings split into groups the length of size.
 * This function works with strings that contain ASCII characters.
 *
 * wrapText is different from would-be "chunk" implementation
 * in that whitespace characters that occur on a chunk size limit are trimmed.
 *
 */
const wrapString = (subject, size) => {
    let subjectSlice = subject;
    const chunks = [];
    do {
        chunks.push((0, slice_ansi_1.default)(subjectSlice, 0, size));
        subjectSlice = (0, slice_ansi_1.default)(subjectSlice, size).trim();
    } while ((0, string_width_1.default)(subjectSlice));
    return chunks;
};
exports.wrapString = wrapString;
//# sourceMappingURL=wrapString.js.map