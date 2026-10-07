"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativePath = void 0;
const getRelativePath = (pathA, pathB) => {
    let i = 0;
    for (; i < pathA.length && i < pathB.length; i++) {
        if (pathA[i] !== pathB[i])
            break;
    }
    return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
exports.getRelativePath = getRelativePath;
