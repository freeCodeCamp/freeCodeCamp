"use strict";
/* eslint-disable @typescript-eslint/no-require-imports */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTs = exports.loadTsSync = exports.loadYaml = exports.loadJson = exports.loadJs = exports.loadJsSync = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
let importFresh;
const loadJsSync = function loadJsSync(filepath) {
    if (importFresh === undefined) {
        importFresh = require('import-fresh');
    }
    return importFresh(filepath);
};
exports.loadJsSync = loadJsSync;
const loadJs = async function loadJs(filepath) {
    try {
        const { href } = (0, url_1.pathToFileURL)(filepath);
        return (await import(href)).default;
    }
    catch (error) {
        return (0, exports.loadJsSync)(filepath, '');
    }
};
exports.loadJs = loadJs;
let parseJson;
const loadJson = function loadJson(filepath, content) {
    if (parseJson === undefined) {
        parseJson = require('parse-json');
    }
    try {
        return parseJson(content);
    }
    catch (error) {
        error.message = `JSON Error in ${filepath}:\n${error.message}`;
        throw error;
    }
};
exports.loadJson = loadJson;
let yaml;
const loadYaml = function loadYaml(filepath, content) {
    if (yaml === undefined) {
        yaml = require('js-yaml');
    }
    try {
        return yaml.load(content);
    }
    catch (error) {
        error.message = `YAML Error in ${filepath}:\n${error.message}`;
        throw error;
    }
};
exports.loadYaml = loadYaml;
let typescript;
const loadTsSync = function loadTsSync(filepath, content) {
    /* istanbul ignore next -- @preserve */
    if (typescript === undefined) {
        typescript = require('typescript');
    }
    const compiledFilepath = `${filepath.slice(0, -2)}cjs`;
    try {
        const config = resolveTsConfig(path_1.default.dirname(filepath)) ?? {};
        config.compilerOptions = {
            ...config.compilerOptions,
            module: typescript.ModuleKind.NodeNext,
            moduleResolution: typescript.ModuleResolutionKind.NodeNext,
            target: typescript.ScriptTarget.ES2022,
            noEmit: false,
        };
        content = typescript.transpileModule(content, config).outputText;
        (0, fs_1.writeFileSync)(compiledFilepath, content);
        return (0, exports.loadJsSync)(compiledFilepath, content).default;
    }
    catch (error) {
        error.message = `TypeScript Error in ${filepath}:\n${error.message}`;
        throw error;
    }
    finally {
        if ((0, fs_1.existsSync)(compiledFilepath)) {
            (0, fs_1.rmSync)(compiledFilepath);
        }
    }
};
exports.loadTsSync = loadTsSync;
const loadTs = async function loadTs(filepath, content) {
    if (typescript === undefined) {
        typescript = (await import('typescript')).default;
    }
    const compiledFilepath = `${filepath.slice(0, -2)}mjs`;
    try {
        const config = resolveTsConfig(path_1.default.dirname(filepath)) ?? {};
        config.compilerOptions = {
            ...config.compilerOptions,
            module: typescript.ModuleKind.ES2022,
            moduleResolution: typescript.ModuleResolutionKind.Bundler,
            target: typescript.ScriptTarget.ES2022,
            noEmit: false,
        };
        content = typescript.transpileModule(content, config).outputText;
        await (0, promises_1.writeFile)(compiledFilepath, content);
        const { href } = (0, url_1.pathToFileURL)(compiledFilepath);
        return (await import(href)).default;
    }
    catch (error) {
        error.message = `TypeScript Error in ${filepath}:\n${error.message}`;
        throw error;
    }
    finally {
        if ((0, fs_1.existsSync)(compiledFilepath)) {
            await (0, promises_1.rm)(compiledFilepath);
        }
    }
};
exports.loadTs = loadTs;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveTsConfig(directory) {
    const filePath = typescript.findConfigFile(directory, (fileName) => {
        return typescript.sys.fileExists(fileName);
    });
    if (filePath !== undefined) {
        const { config, error } = typescript.readConfigFile(filePath, (path) => typescript.sys.readFile(path));
        if (error) {
            throw new Error(`Error in ${filePath}: ${error.messageText.toString()}`);
        }
        return config;
    }
    return;
}
//# sourceMappingURL=loaders.js.map