"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slurpFile = void 0;
const fs_1 = require("fs");
const { readFile } = fs_1.promises;
const filePromisesHash = {};
const slurpFile = (path, options) => {
    if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
exports.slurpFile = slurpFile;
