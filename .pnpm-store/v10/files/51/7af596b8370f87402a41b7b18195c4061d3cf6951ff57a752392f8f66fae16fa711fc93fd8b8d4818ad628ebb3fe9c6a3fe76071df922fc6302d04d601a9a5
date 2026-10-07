"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUtf8 = exports.fromUtf8 = void 0;
const pureJs_1 = require("./pureJs");
const whatwgEncodingApi_1 = require("./whatwgEncodingApi");
const fromUtf8 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
exports.fromUtf8 = fromUtf8;
const toUtf8 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
exports.toUtf8 = toUtf8;
