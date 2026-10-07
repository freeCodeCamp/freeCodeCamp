"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function castToArray(value) {
    if (!value) {
        return [];
    }
    else if (!Array.isArray(value)) {
        return [value];
    }
    else {
        return value;
    }
}
function createEsLintReporterConfiguration(compiler, options) {
    const filesPatterns = (typeof options === 'object' ? castToArray(options.files) : []).map((filesPattern) => 
    // ensure that `filesPattern` is an absolute path
    path_1.isAbsolute(filesPattern)
        ? filesPattern
        : path_1.join(compiler.options.context || process.cwd(), filesPattern));
    return Object.assign(Object.assign({ enabled: !!options &&
            typeof options !== 'boolean' &&
            filesPatterns.length > 0 && // enable by default if files are provided
            options.enabled !== false, memoryLimit: 2048 }, (typeof options === 'object' ? options : {})), { files: filesPatterns, options: Object.assign({ cwd: compiler.options.context || process.cwd(), extensions: ['.ts', '.tsx', '.js', '.jsx'] }, (typeof options === 'object' ? options.options || {} : {})) });
}
exports.createEsLintReporterConfiguration = createEsLintReporterConfiguration;
