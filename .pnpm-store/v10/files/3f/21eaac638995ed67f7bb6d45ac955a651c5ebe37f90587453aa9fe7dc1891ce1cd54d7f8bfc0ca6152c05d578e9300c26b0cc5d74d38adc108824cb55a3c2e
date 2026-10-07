"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
/**
 * It handles most of the logic required to process embedded TypeScript code (like in Vue components or MDX)
 *
 * @param embeddedExtensions List of file extensions that should be treated as an embedded TypeScript source
 *                           (for example ['.vue'])
 * @param getEmbeddedSource  Function that returns embedded TypeScript source text and extension that this file
 *                           would have if it would be a regular TypeScript file
 */
function createTypeScriptEmbeddedExtension({ embeddedExtensions, getEmbeddedSource, }) {
    const embeddedSourceCache = new Map();
    function getCachedEmbeddedSource(fileName) {
        if (!embeddedSourceCache.has(fileName)) {
            embeddedSourceCache.set(fileName, getEmbeddedSource(fileName));
        }
        return embeddedSourceCache.get(fileName);
    }
    function parsePotentiallyEmbeddedFileName(fileName) {
        const extension = path_1.extname(fileName);
        const embeddedFileName = fileName.slice(0, fileName.length - extension.length);
        const embeddedExtension = path_1.extname(embeddedFileName);
        return {
            extension,
            embeddedFileName,
            embeddedExtension,
        };
    }
    function createEmbeddedFileExists(fileExists) {
        return function embeddedFileExists(fileName) {
            const { embeddedExtension, embeddedFileName, extension } = parsePotentiallyEmbeddedFileName(fileName);
            if (embeddedExtensions.includes(embeddedExtension) && fileExists(embeddedFileName)) {
                const embeddedSource = getCachedEmbeddedSource(embeddedFileName);
                return !!(embeddedSource && embeddedSource.extension === extension);
            }
            return fileExists(fileName);
        };
    }
    function createEmbeddedReadFile(readFile) {
        return function embeddedReadFile(fileName, encoding) {
            const { embeddedExtension, embeddedFileName, extension } = parsePotentiallyEmbeddedFileName(fileName);
            if (embeddedExtensions.includes(embeddedExtension)) {
                const embeddedSource = getCachedEmbeddedSource(embeddedFileName);
                if (embeddedSource && embeddedSource.extension === extension) {
                    return embeddedSource.sourceText;
                }
            }
            return readFile(fileName, encoding);
        };
    }
    return {
        extendIssues(issues) {
            return issues.map((issue) => {
                if (issue.file) {
                    const { embeddedExtension, embeddedFileName } = parsePotentiallyEmbeddedFileName(issue.file);
                    if (embeddedExtensions.includes(embeddedExtension)) {
                        return Object.assign(Object.assign({}, issue), { file: embeddedFileName });
                    }
                }
                return issue;
            });
        },
        extendWatchCompilerHost(host) {
            return Object.assign(Object.assign({}, host), { watchFile(fileName, callback, poolingInterval) {
                    const { embeddedExtension, embeddedFileName } = parsePotentiallyEmbeddedFileName(fileName);
                    if (embeddedExtensions.includes(embeddedExtension)) {
                        return host.watchFile(embeddedFileName, (innerFileName, eventKind) => {
                            embeddedSourceCache.delete(embeddedFileName);
                            return callback(fileName, eventKind);
                        }, poolingInterval);
                    }
                    else {
                        return host.watchFile(fileName, callback, poolingInterval);
                    }
                }, readFile: createEmbeddedReadFile(host.readFile), fileExists: createEmbeddedFileExists(host.fileExists) });
        },
        extendCompilerHost(host) {
            return Object.assign(Object.assign({}, host), { readFile: createEmbeddedReadFile(host.readFile), fileExists: createEmbeddedFileExists(host.fileExists) });
        },
        extendParseConfigFileHost(host) {
            return Object.assign(Object.assign({}, host), { readDirectory(rootDir, extensions, excludes, includes, depth) {
                    return host
                        .readDirectory(rootDir, [...extensions, ...embeddedExtensions], excludes, includes, depth)
                        .map((fileName) => {
                        const isEmbeddedFile = embeddedExtensions.some((embeddedExtension) => fileName.endsWith(embeddedExtension));
                        if (isEmbeddedFile) {
                            const embeddedSource = getCachedEmbeddedSource(fileName);
                            return embeddedSource ? `${fileName}${embeddedSource.extension}` : fileName;
                        }
                        else {
                            return fileName;
                        }
                    });
                } });
        },
        extendDependencies(dependencies) {
            return Object.assign(Object.assign({}, dependencies), { files: dependencies.files.map((fileName) => {
                    const { embeddedExtension, embeddedFileName, extension, } = parsePotentiallyEmbeddedFileName(fileName);
                    if (embeddedExtensions.includes(embeddedExtension)) {
                        const embeddedSource = getCachedEmbeddedSource(embeddedFileName);
                        if (embeddedSource && embeddedSource.extension === extension) {
                            return embeddedFileName;
                        }
                    }
                    return fileName;
                }), extensions: [...dependencies.extensions, ...embeddedExtensions] });
        },
    };
}
exports.createTypeScriptEmbeddedExtension = createTypeScriptEmbeddedExtension;
