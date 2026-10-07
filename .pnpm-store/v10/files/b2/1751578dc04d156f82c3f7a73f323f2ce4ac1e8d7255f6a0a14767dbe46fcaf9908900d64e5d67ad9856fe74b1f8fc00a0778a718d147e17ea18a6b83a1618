"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryToLoadFromExportSync = exports.tryToLoadFromExport = void 0;
const exports_js_1 = require("./exports.js");
/**
 * @internal
 */
async function tryToLoadFromExport(rawFilePath) {
    try {
        const filepath = ensureFilepath(rawFilePath);
        const mod = await Promise.resolve(`${filepath}`).then(s => __importStar(require(s)));
        return await (0, exports_js_1.pickExportFromModule)({ module: mod, filepath });
    }
    catch (e) {
        throw new Error(`Unable to load from file "${rawFilePath}": ${e.stack || e.message}`);
    }
}
exports.tryToLoadFromExport = tryToLoadFromExport;
/**
 * @internal
 */
function tryToLoadFromExportSync(rawFilePath) {
    try {
        const filepath = ensureFilepath(rawFilePath);
        const mod = require(filepath);
        return (0, exports_js_1.pickExportFromModuleSync)({ module: mod, filepath });
    }
    catch (e) {
        throw new Error(`Unable to load from file "${rawFilePath}": ${e.stack || e.message}`);
    }
}
exports.tryToLoadFromExportSync = tryToLoadFromExportSync;
/**
 * @internal
 */
function ensureFilepath(filepath) {
    if (typeof require !== 'undefined' && require.cache) {
        filepath = require.resolve(filepath);
        if (require.cache[filepath]) {
            delete require.cache[filepath];
        }
    }
    return filepath;
}
