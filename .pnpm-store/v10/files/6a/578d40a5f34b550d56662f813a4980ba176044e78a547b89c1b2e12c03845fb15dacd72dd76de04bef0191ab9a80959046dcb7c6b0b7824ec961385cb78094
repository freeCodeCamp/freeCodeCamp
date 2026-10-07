"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtNameFromFilePath = void 0;
const getExtNameFromFilePath = (filePath) => {
    const partials = filePath.split('.');
    let ext = '.' + partials.pop();
    if (partials.length > 1 && partials[partials.length - 1] === 'flow') {
        ext = '.' + partials.pop() + ext;
    }
    return ext;
};
exports.getExtNameFromFilePath = getExtNameFromFilePath;
