"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function createBasicFormatter() {
    return function basicFormatter(issue) {
        return chalk_1.default.grey(issue.code + ': ') + issue.message;
    };
}
exports.createBasicFormatter = createBasicFormatter;
