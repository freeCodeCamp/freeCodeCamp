"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const code_frame_1 = require("@babel/code-frame");
const BasicFormatter_1 = require("./BasicFormatter");
function createCodeFrameFormatter(options) {
    const basicFormatter = BasicFormatter_1.createBasicFormatter();
    return function codeFrameFormatter(issue) {
        const source = issue.file && fs_extra_1.default.existsSync(issue.file) && fs_extra_1.default.readFileSync(issue.file, 'utf-8');
        let frame = '';
        if (source && issue.location) {
            frame = code_frame_1.codeFrameColumns(source, issue.location, Object.assign({ highlightCode: true }, (options || {})))
                .split('\n')
                .map((line) => '  ' + line)
                .join(os_1.default.EOL);
        }
        const lines = [basicFormatter(issue)];
        if (frame) {
            lines.push(frame);
        }
        return lines.join(os_1.default.EOL);
    };
}
exports.createCodeFrameFormatter = createCodeFrameFormatter;
