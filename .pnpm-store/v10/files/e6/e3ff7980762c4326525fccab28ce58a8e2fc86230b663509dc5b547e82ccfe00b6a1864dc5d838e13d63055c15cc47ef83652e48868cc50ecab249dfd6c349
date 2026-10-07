"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCode = exports.gqlPluckFromCodeStringSync = exports.gqlPluckFromCodeString = void 0;
const tslib_1 = require("tslib");
const config_js_1 = tslib_1.__importDefault(require("./config.js"));
const parser_1 = require("@babel/parser");
const extname_js_1 = require("./libs/extname.js");
const visitor_js_1 = tslib_1.__importDefault(require("./visitor.js"));
const traverse_1 = tslib_1.__importDefault(require("@babel/traverse"));
const utils_js_1 = require("./utils.js");
const graphql_1 = require("graphql");
function getDefault(module) {
    return module.default || module;
}
const traverse = getDefault(traverse_1.default);
const supportedExtensions = [
    '.js',
    '.mjs',
    '.cjs',
    '.jsx',
    '.ts',
    '.mts',
    '.cts',
    '.tsx',
    '.flow',
    '.flow.js',
    '.flow.jsx',
    '.vue',
    '.svelte',
];
// tslint:disable-next-line: no-implicit-dependencies
function parseWithVue(vueTemplateCompiler, fileData) {
    const { descriptor } = vueTemplateCompiler.parse(fileData);
    return descriptor.script || descriptor.scriptSetup
        ? vueTemplateCompiler.compileScript(descriptor, { id: Date.now().toString() }).content
        : '';
}
// tslint:disable-next-line: no-implicit-dependencies
function parseWithSvelte(svelte2tsx, fileData) {
    const fileInTsx = svelte2tsx.svelte2tsx(fileData);
    return fileInTsx.code;
}
/**
 * Asynchronously plucks GraphQL template literals from a single file.
 *
 * Supported file extensions include: `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, `.mts`, `.cts`, `.tsx`, `.flow`, `.flow.js`, `.flow.jsx`, `.vue`, `.svelte`
 *
 * @param filePath Path to the file containing the code. Required to detect the file type
 * @param code The contents of the file being parsed.
 * @param options Additional options for determining how a file is parsed.
 */
const gqlPluckFromCodeString = async (filePath, code, options = {}) => {
    validate({ code, options });
    const fileExt = extractExtension(filePath);
    if (fileExt === '.vue') {
        code = await pluckVueFileScript(code);
    }
    else if (fileExt === '.svelte') {
        code = await pluckSvelteFileScript(code);
    }
    return parseCode({ code, filePath, options }).map(t => new graphql_1.Source(t.content, filePath, t.loc.start));
};
exports.gqlPluckFromCodeString = gqlPluckFromCodeString;
/**
 * Synchronously plucks GraphQL template literals from a single file
 *
 * Supported file extensions include: `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, `.mjs`, `.cjs`, `.tsx`, `.flow`, `.flow.js`, `.flow.jsx`, `.vue`, `.svelte`
 *
 * @param filePath Path to the file containing the code. Required to detect the file type
 * @param code The contents of the file being parsed.
 * @param options Additional options for determining how a file is parsed.
 */
const gqlPluckFromCodeStringSync = (filePath, code, options = {}) => {
    validate({ code, options });
    const fileExt = extractExtension(filePath);
    if (fileExt === '.vue') {
        code = pluckVueFileScriptSync(code);
    }
    else if (fileExt === '.svelte') {
        code = pluckSvelteFileScriptSync(code);
    }
    return parseCode({ code, filePath, options }).map(t => new graphql_1.Source(t.content, filePath, t.loc.start));
};
exports.gqlPluckFromCodeStringSync = gqlPluckFromCodeStringSync;
function parseCode({ code, filePath, options, }) {
    const out = { returnValue: null };
    const ast = (0, parser_1.parse)(code, (0, config_js_1.default)(filePath, code, options));
    const visitor = (0, visitor_js_1.default)(code, out, options);
    traverse(ast, visitor);
    return out.returnValue || [];
}
exports.parseCode = parseCode;
function validate({ code, options }) {
    if (typeof code !== 'string') {
        throw TypeError('Provided code must be a string');
    }
    if (!(options instanceof Object)) {
        throw TypeError(`Options arg must be an object`);
    }
}
function extractExtension(filePath) {
    const fileExt = (0, extname_js_1.getExtNameFromFilePath)(filePath);
    if (fileExt) {
        if (!supportedExtensions.includes(fileExt)) {
            throw TypeError(`Provided file type must be one of ${supportedExtensions.join(', ')} `);
        }
    }
    return fileExt;
}
const MissingVueTemplateCompilerError = new Error((0, utils_js_1.freeText)(`
    GraphQL template literals cannot be plucked from a Vue template code without having the "@vue/compiler-sfc" package installed.
    Please install it and try again.

    Via NPM:

        $ npm install @vue/compiler-sfc

    Via Yarn:

        $ yarn add @vue/compiler-sfc
  `));
const MissingSvelteTemplateCompilerError = new Error((0, utils_js_1.freeText)(`
    GraphQL template literals cannot be plucked from a Svelte template code without having the "svelte2tsx" & "svelte" package installed.
    Please install it and try again.

    Via NPM:

        $ npm install svelte2tsx svelte

    Via Yarn:

        $ yarn add svelte2tsx svelte
  `));
async function pluckVueFileScript(fileData) {
    let vueTemplateCompiler;
    try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        vueTemplateCompiler = await Promise.resolve().then(() => tslib_1.__importStar(require('@vue/compiler-sfc')));
    }
    catch (e) {
        throw MissingVueTemplateCompilerError;
    }
    return parseWithVue(vueTemplateCompiler, fileData);
}
function pluckVueFileScriptSync(fileData) {
    let vueTemplateCompiler;
    try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        vueTemplateCompiler = require('@vue/compiler-sfc');
    }
    catch (e) {
        throw MissingVueTemplateCompilerError;
    }
    return parseWithVue(vueTemplateCompiler, fileData);
}
async function pluckSvelteFileScript(fileData) {
    let svelte2tsx;
    try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        svelte2tsx = await Promise.resolve().then(() => tslib_1.__importStar(require('svelte2tsx')));
    }
    catch (e) {
        throw MissingSvelteTemplateCompilerError;
    }
    return parseWithSvelte(svelte2tsx, fileData);
}
function pluckSvelteFileScriptSync(fileData) {
    let svelte2tsx;
    try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        svelte2tsx = require('svelte2tsx');
    }
    catch (e) {
        throw MissingSvelteTemplateCompilerError;
    }
    return parseWithSvelte(svelte2tsx, fileData);
}
