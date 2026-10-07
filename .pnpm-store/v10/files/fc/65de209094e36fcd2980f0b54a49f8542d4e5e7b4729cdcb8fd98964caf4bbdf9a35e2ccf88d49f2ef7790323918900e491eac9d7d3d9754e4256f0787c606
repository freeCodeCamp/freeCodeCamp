"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptModuleDeclaration = void 0;
const path_1 = __importDefault(require("path"));
const compareFilenameAndModuleName = (filename, moduleName) => filename.includes(moduleName.toLowerCase());
const getModuleName = (identifier) => identifier.type === 'Literal'
    ? identifier.value.split(new RegExp(`[${path_1.default.sep}*!]`))[0]
    : identifier.name;
const getAbsoluteFilename = (context) => path_1.default.resolve(context.getFilename());
exports.typescriptModuleDeclaration = {
    meta: {
        type: 'suggestion',
        messages: {
            invalidFilename: 'The filename/dirname does not include the declared module name. We recommend renaming to `{{ filename }}`.',
        },
        schema: [],
    },
    defaultOptions: [],
    create: context => {
        const moduleIdentifiers = new Set();
        return {
            TSModuleDeclaration: node => {
                var _a;
                if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === 'Program')
                    moduleIdentifiers.add(node.id);
            },
            'Program:exit': () => {
                if (moduleIdentifiers.size !== 1)
                    return;
                const moduleIdentifier = [...moduleIdentifiers][0];
                const moduleName = getModuleName(moduleIdentifier);
                if (!compareFilenameAndModuleName(getAbsoluteFilename(context), moduleName)) {
                    context.report({
                        node: moduleIdentifier,
                        messageId: 'invalidFilename',
                        data: { filename: `${moduleName}.d.ts` },
                    });
                }
            },
        };
    },
};
