"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeFilePath = describeFilePath;
const node_path_1 = __importDefault(require("node:path"));
function describeFilePath(filePath, tsconfigRootDir) {
    // If the TSConfig root dir is a parent of the filePath, use
    // `<tsconfigRootDir>` as a prefix for the path.
    const relative = node_path_1.default.relative(tsconfigRootDir, filePath);
    if (relative && !relative.startsWith('..') && !node_path_1.default.isAbsolute(relative)) {
        return `<tsconfigRootDir>/${relative}`;
    }
    // Root-like Mac/Linux (~/*, ~*) or Windows (C:/*, /) paths that aren't
    // relative to the TSConfig root dir should be fully described.
    // This avoids strings like <tsconfigRootDir>/../../../../repo/file.ts.
    // https://github.com/typescript-eslint/typescript-eslint/issues/6289
    if (/^[(\w+:)\\/~]/.test(filePath)) {
        return filePath;
    }
    // Similarly, if the relative path would contain a lot of ../.., then
    // ignore it and print the file path directly.
    if (/\.\.[/\\]\.\./.test(relative)) {
        return filePath;
    }
    // Lastly, since we've eliminated all special cases, we know the cleanest
    // path to print is probably the prefixed relative one.
    return `<tsconfigRootDir>/${relative}`;
}
//# sourceMappingURL=describeFilePath.js.map