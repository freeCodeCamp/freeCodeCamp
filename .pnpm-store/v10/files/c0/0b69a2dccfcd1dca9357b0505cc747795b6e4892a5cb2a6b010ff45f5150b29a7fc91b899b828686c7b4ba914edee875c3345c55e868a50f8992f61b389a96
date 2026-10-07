"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
exports.parseForESLint = parseForESLint;
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const typescript_estree_1 = require("@typescript-eslint/typescript-estree");
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
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
    if (compilerOptions.lib) {
        return compilerOptions.lib
            .map(lib => LIB_FILENAME_REGEX.exec(lib.toLowerCase())?.[1])
            .filter((lib) => !!lib);
    }
    const defaultTarget = typescript_estree_1.typescriptVersionIsAtLeast['6.0']
        ? typescript_1.ScriptTarget.LatestStandard
        : typescript_1.ScriptTarget.ES5; // eslint-disable-line @typescript-eslint/no-deprecated -- Deprecated in TS 6 but we support TS < 6
    const target = compilerOptions.target ?? defaultTarget;
    // https://github.com/microsoft/TypeScript/blob/35ff23d4b0cc715691323ebe54f523c16fe6e3a5/src/compiler/utilitiesPublic.ts#L312-L346
    switch (target) {
        case typescript_1.ScriptTarget.ES2015:
            return ['es6'];
        case typescript_1.ScriptTarget.ES2016:
            return ['es2016.full'];
        case typescript_1.ScriptTarget.ES2017:
            return ['es2017.full'];
        case typescript_1.ScriptTarget.ES2018:
            return ['es2018.full'];
        case typescript_1.ScriptTarget.ES2019:
            return ['es2019.full'];
        case typescript_1.ScriptTarget.ES2020:
            return ['es2020.full'];
        case typescript_1.ScriptTarget.ES2021:
            return ['es2021.full'];
        case typescript_1.ScriptTarget.ES2022:
            return ['es2022.full'];
        case typescript_1.ScriptTarget.ES2023:
            return ['es2023.full'];
        case typescript_1.ScriptTarget.ES2024:
            return ['es2024.full'];
        case typescript_1.ScriptTarget.ES2025:
            return ['es2025.full'];
        case typescript_1.ScriptTarget.ESNext:
            return ['esnext.full'];
        default:
            return ['lib'];
    }
}
function parse(code, options) {
    return parseForESLint(code, options).ast;
}
function parseForESLint(code, parserOptions) {
    if (!parserOptions || typeof parserOptions !== 'object') {
        parserOptions = {};
    }
    else {
        parserOptions = { ...parserOptions };
    }
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    // if sourceType is not provided by default eslint expect that it will be set to "script"
    if (parserOptions.sourceType !== 'module' &&
        parserOptions.sourceType !== 'script') {
        parserOptions.sourceType = 'script';
    }
    if (typeof parserOptions.ecmaFeatures !== 'object') {
        parserOptions.ecmaFeatures = {};
    }
    if (parserOptions.onUnsupportedTypeScriptVersion != null &&
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- read for backwards compatibility
        parserOptions.warnOnUnsupportedTypeScriptVersion != null) {
        throw new Error('Cannot use both the `onUnsupportedTypeScriptVersion` and the deprecated `warnOnUnsupportedTypeScriptVersion` options. Please use only `onUnsupportedTypeScriptVersion`.');
    }
    const onUnsupportedTypeScriptVersion = parserOptions.onUnsupportedTypeScriptVersion ??
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- read for backwards compatibility
        (validateBoolean(parserOptions.warnOnUnsupportedTypeScriptVersion, true)
            ? 'warn'
            : 'ignore');
    const tsestreeOptions = {
        jsx: validateBoolean(parserOptions.ecmaFeatures.jsx),
        ...parserOptions,
        onUnsupportedTypeScriptVersion,
        // Override errorOnTypeScriptSyntacticAndSemanticIssues and set it to false to prevent use from user config
        // https://github.com/typescript-eslint/typescript-eslint/issues/8681#issuecomment-2000411834
        errorOnTypeScriptSyntacticAndSemanticIssues: false,
        // comment, loc, range, and tokens should always be set for ESLint usage
        // https://github.com/typescript-eslint/typescript-eslint/issues/8347
        comment: true,
        loc: true,
        range: true,
        tokens: true,
    };
    const analyzeOptions = {
        globalReturn: parserOptions.ecmaFeatures.globalReturn,
        jsxFragmentName: parserOptions.jsxFragmentName,
        jsxPragma: parserOptions.jsxPragma,
        lib: parserOptions.lib,
        sourceType: parserOptions.sourceType,
    };
    const { ast, services } = (0, typescript_estree_1.parseAndGenerateServices)(code, tsestreeOptions);
    ast.sourceType = parserOptions.sourceType;
    if (services.program) {
        // automatically apply the options configured for the program
        const compilerOptions = services.program.getCompilerOptions();
        if (analyzeOptions.lib == null) {
            analyzeOptions.lib = getLib(compilerOptions);
            log('Resolved libs from program: %o', analyzeOptions.lib);
        }
        if (
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        analyzeOptions.jsxPragma === undefined &&
            compilerOptions.jsxFactory != null) {
            // in case the user has specified something like "preact.h"
            const factory = compilerOptions.jsxFactory.split('.')[0].trim();
            analyzeOptions.jsxPragma = factory;
            log('Resolved jsxPragma from program: %s', analyzeOptions.jsxPragma);
        }
        if (
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        analyzeOptions.jsxFragmentName === undefined &&
            compilerOptions.jsxFragmentFactory != null) {
            // in case the user has specified something like "preact.Fragment"
            const fragFactory = compilerOptions.jsxFragmentFactory
                .split('.')[0]
                .trim();
            analyzeOptions.jsxFragmentName = fragFactory;
            log('Resolved jsxFragmentName from program: %s', analyzeOptions.jsxFragmentName);
        }
    }
    const scopeManager = (0, scope_manager_1.analyze)(ast, analyzeOptions);
    // if not defined - override from the parserOptions
    services.emitDecoratorMetadata ??=
        parserOptions.emitDecoratorMetadata === true;
    services.experimentalDecorators ??=
        parserOptions.experimentalDecorators === true;
    services.isolatedDeclarations ??= parserOptions.isolatedDeclarations === true;
    return { ast, scopeManager, services, visitorKeys: visitor_keys_1.visitorKeys };
}
//# sourceMappingURL=parser.js.map