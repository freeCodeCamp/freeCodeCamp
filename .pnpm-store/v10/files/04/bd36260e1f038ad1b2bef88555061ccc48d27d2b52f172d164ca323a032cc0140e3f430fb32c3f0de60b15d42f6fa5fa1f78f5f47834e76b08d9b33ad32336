"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noIndex = void 0;
const path_1 = __importDefault(require("path"));
exports.noIndex = {
    meta: {
        type: 'suggestion',
        schema: [],
    },
    create: context => {
        return {
            Program: node => {
                const extname = path_1.default.extname(context.getFilename());
                const basename = path_1.default.basename(context.getFilename(), extname);
                if (basename.toLowerCase() === 'index') {
                    context.report({ node, message: `Filename ${basename}${extname} is not allowed.` });
                }
            },
        };
    },
};
