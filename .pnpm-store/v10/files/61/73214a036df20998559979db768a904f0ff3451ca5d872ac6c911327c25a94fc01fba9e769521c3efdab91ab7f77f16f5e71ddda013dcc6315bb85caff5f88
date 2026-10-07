"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extname = void 0;
const path_1 = __importDefault(require("path"));
const REGEXP = {
    lowercase: /^[a-z]+$/,
    'lowercase-with-number': /^[a-z][a-z0-9]*$/,
    UPPERCASE: /^[A-Z]+$/,
    UPPERCASE_WITH_NUMBER: /^[A-Z][A-Z0-9]*$/,
};
exports.extname = {
    meta: {
        type: 'suggestion',
        schema: [
            {
                enum: ['lowercase', 'lowercase-with-number', 'UPPERCASE', 'UPPERCASE_WITH_NUMBER'],
                default: 'lowercase',
            },
        ],
        deprecated: true,
    },
    create: context => {
        var _a;
        const style = (_a = context.options[0]) !== null && _a !== void 0 ? _a : 'lowercase';
        const regex = REGEXP[style];
        return {
            Program: node => {
                const [, ...extnames] = path_1.default.basename(context.getFilename()).split('.');
                if (!extnames.every(ext => regex.test(ext))) {
                    context.report({ node, message: `File extension must be ${style}.` });
                }
            },
        };
    },
};
