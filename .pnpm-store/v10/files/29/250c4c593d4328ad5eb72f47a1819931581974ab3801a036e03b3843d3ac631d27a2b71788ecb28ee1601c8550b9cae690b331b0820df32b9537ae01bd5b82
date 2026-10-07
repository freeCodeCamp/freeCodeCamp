"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakLines = breakLines;
exports.readlineWidth = readlineWidth;
const cli_width_1 = __importDefault(require("cli-width"));
const wrap_ansi_1 = __importDefault(require("wrap-ansi"));
const hook_engine_ts_1 = require("./hook-engine.js");
/**
 * Force line returns at specific width. This function is ANSI code friendly and it'll
 * ignore invisible codes during width calculation.
 * @param {string} content
 * @param {number} width
 * @return {string}
 */
function breakLines(content, width) {
    return content
        .split('\n')
        .flatMap((line) => (0, wrap_ansi_1.default)(line, width, { trim: false, hard: true })
        .split('\n')
        .map((str) => str.trimEnd()))
        .join('\n');
}
/**
 * Returns the width of the active readline, or 80 as default value.
 * @returns {number}
 */
function readlineWidth() {
    return (0, cli_width_1.default)({ defaultWidth: 80, output: (0, hook_engine_ts_1.readline)().output });
}
