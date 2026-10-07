"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const substract_1 = __importDefault(require("../utils/array/substract"));
const unique_1 = __importDefault(require("../utils/array/unique"));
// we ignore package.json file because of https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/674
const IGNORED_FILES = ['package.json'];
const isIgnoredFile = (file) => IGNORED_FILES.some((ignoredFile) => file.endsWith(`/${ignoredFile}`) || file.endsWith(`\\${ignoredFile}`));
const compilerFilesChangeMap = new WeakMap();
function getFilesChange(compiler) {
    const { changedFiles = [], deletedFiles = [] } = compilerFilesChangeMap.get(compiler) || {
        changedFiles: [],
        deletedFiles: [],
    };
    return {
        changedFiles: changedFiles.filter((changedFile) => !isIgnoredFile(changedFile)),
        deletedFiles: deletedFiles.filter((deletedFile) => !isIgnoredFile(deletedFile)),
    };
}
exports.getFilesChange = getFilesChange;
function updateFilesChange(compiler, change) {
    compilerFilesChangeMap.set(compiler, aggregateFilesChanges([getFilesChange(compiler), change]));
}
exports.updateFilesChange = updateFilesChange;
function clearFilesChange(compiler) {
    compilerFilesChangeMap.delete(compiler);
}
exports.clearFilesChange = clearFilesChange;
/**
 * Computes aggregated files change based on the subsequent files changes.
 *
 * @param changes List of subsequent files changes
 * @returns Files change that represents all subsequent changes as a one event
 */
function aggregateFilesChanges(changes) {
    let changedFiles = [];
    let deletedFiles = [];
    for (const change of changes) {
        changedFiles = unique_1.default(substract_1.default(changedFiles, change.deletedFiles).concat(change.changedFiles || []));
        deletedFiles = unique_1.default(substract_1.default(deletedFiles, change.changedFiles).concat(change.deletedFiles || []));
    }
    return {
        changedFiles,
        deletedFiles,
    };
}
exports.aggregateFilesChanges = aggregateFilesChanges;
