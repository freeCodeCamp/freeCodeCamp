"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extension = void 0;
const path_1 = __importDefault(require("path"));
const get_default_allowed_extensions_1 = require("../utils/get-default-allowed-extensions");
exports.extension = {
    meta: {
        type: 'suggestion',
        messages: {
            invalidExtension: 'The file extension is invalid. Allowed extensions are `{{ extensions }}`',
        },
        schema: [],
    },
    create: context => {
        const allowedExtensions = (0, get_default_allowed_extensions_1.getAllowedExtensions)(context);
        return {
            Program: node => {
                const filename = path_1.default.basename(context.getFilename());
                if (!allowedExtensions.some(ext => filename.endsWith(ext))) {
                    context.report({
                        node,
                        messageId: 'invalidExtension',
                        data: { extensions: allowedExtensions.join(',') },
                    });
                }
            },
        };
    },
};
