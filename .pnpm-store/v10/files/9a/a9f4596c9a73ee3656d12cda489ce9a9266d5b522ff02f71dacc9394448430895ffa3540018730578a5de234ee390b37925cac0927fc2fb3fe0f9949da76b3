"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseForESLint = exports.parse = void 0;
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const typescript_estree_1 = require("@typescript-eslint/typescript-estree");
const debug_1 = __importDefault(require("debug"));
const typescript_1 = require("typescript");
const log = (0, debug_1.default)('typescript-eslint:parser:parser');
function validateBoolean(value, fallback = false) {
    if (typeof value !== 'boolean') {
        return fallback;
    }
    return value;
}
const LIB_FILENAME_REGEX = /lib\.(.+)\.d\.[cm]?ts$/;
function getLib(compilerOptions) {
    var _a;
    if (compilerOptions.lib) {
        return compilerOptions.lib.reduce((acc, lib) => {
            const match = LIB_FILENAME_REGEX.exec(lib.toLowerCase());
            if (match) {
                acc.push(match[1]);
            }
            return acc;
        }, []);
    }
    const target = (_a = compilerOptions.target) !== null && _a !== void 0 ? _a : typescript_1.ScriptTarget.ES5;
    // https://github.com/microsoft/TypeScript/blob/ae582a22ee1bb052e19b7c1bc4cac60509b574e0/src/compiler/utilitiesPublic.ts#L13-L36
    switch (target) {
        case typescript_1.ScriptTarget.ESNext:
            return ['esnext.full'];
        case typescript_1.ScriptTarget.ES2022:
            return ['es2022.full'];
        case typescript_1.ScriptTarget.ES2021:
            return ['es2021.full'];
        case typescript_1.ScriptTarget.ES2020:
            return ['es2020.full'];
        case typescript_1.ScriptTarget.ES2019:
            return ['es2019.full'];
        case typescript_1.ScriptTarget.ES2018:
            return ['es2018.full'];
        case typescript_1.ScriptTarget.ES2017:
            return ['es2017.full'];
        case typescript_1.ScriptTarget.ES2016:
            return ['es2016.full'];
        case typescript_1.ScriptTarget.ES2015:
            return ['es6'];
        default:
            return ['lib'];
    }
}
function parse(code, options) {
    return parseForESLint(code, options).ast;
}
exports.parse = parse;
function parseForESLint(code, options) {
    if (!options || typeof options !== 'object') {
        options = {};
    }
    else {
        options = Object.assign({}, options);
    }
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    // if sourceType is not provided by default eslint expect that it will be set to "script"
    if (options.sourceType !== 'module' && options.sourceType !== 'script') {
        options.sourceType = 'script';
    }
    if (typeof options.ecmaFeatures !== 'object') {
        options.ecmaFeatures = {};
    }
    const parserOptions = {};
    Object.assign(parserOptions, options, {
        jsx: validateBoolean(options.ecmaFeatures.jsx),
    });
    const analyzeOptions = {
        ecmaVersion: options.ecmaVersion === 'latest' ? 1e8 : options.ecmaVersion,
        globalReturn: options.ecmaFeatures.globalReturn,
        jsxPragma: options.jsxPragma,
        jsxFragmentName: options.jsxFragmentName,
        lib: options.lib,
        sourceType: options.sourceType,
    };
    /**
     * Allow the user to suppress the warning from typescript-estree if they are using an unsupported
     * version of TypeScript
     */
    const warnOnUnsupportedTypeScriptVersion = validateBoolean(options.warnOnUnsupportedTypeScriptVersion, true);
    if (!warnOnUnsupportedTypeScriptVersion) {
        parserOptions.loggerFn = false;
    }
    const { ast, services } = (0, typescript_estree_1.parseAndGenerateServices)(code, parserOptions);
    ast.sourceType = options.sourceType;
    let emitDecoratorMetadata = options.emitDecoratorMetadata === true;
    if (services.hasFullTypeInformation) {
        // automatically apply the options configured for the program
        const compilerOptions = services.program.getCompilerOptions();
        if (analyzeOptions.lib == null) {
            analyzeOptions.lib = getLib(compilerOptions);
            log('Resolved libs from program: %o', analyzeOptions.lib);
        }
        if (analyzeOptions.jsxPragma === undefined &&
            compilerOptions.jsxFactory != null) {
            // in case the user has specified something like "preact.h"
            const factory = compilerOptions.jsxFactory.split('.')[0].trim();
            analyzeOptions.jsxPragma = factory;
            log('Resolved jsxPragma from program: %s', analyzeOptions.jsxPragma);
        }
        if (analyzeOptions.jsxFragmentName === undefined &&
            compilerOptions.jsxFragmentFactory != null) {
            // in case the user has specified something like "preact.Fragment"
            const fragFactory = compilerOptions.jsxFragmentFactory
                .split('.')[0]
                .trim();
            analyzeOptions.jsxFragmentName = fragFactory;
            log('Resolved jsxFragmentName from program: %s', analyzeOptions.jsxFragmentName);
        }
        if (compilerOptions.emitDecoratorMetadata === true) {
            emitDecoratorMetadata = true;
        }
    }
    if (emitDecoratorMetadata) {
        analyzeOptions.emitDecoratorMetadata = true;
    }
    const scopeManager = (0, scope_manager_1.analyze)(ast, analyzeOptions);
    return { ast, services, scopeManager, visitorKeys: typescript_estree_1.visitorKeys };
}
exports.parseForESLint = parseForESLint;
//# sourceMappingURL=parser.js.map