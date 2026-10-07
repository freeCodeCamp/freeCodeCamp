import { promises as fsPromises } from "fs";
const { readFile } = fsPromises;
const filePromisesHash = {};
export const slurpFile = (path, options) => {
    if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};
