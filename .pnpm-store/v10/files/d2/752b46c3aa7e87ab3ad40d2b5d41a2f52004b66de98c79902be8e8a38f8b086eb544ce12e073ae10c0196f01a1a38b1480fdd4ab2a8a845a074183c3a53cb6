"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EsLintIssueFactory_1 = require("../issue/EsLintIssueFactory");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const minimatch_1 = __importDefault(require("minimatch"));
const glob_1 = __importDefault(require("glob"));
const isOldCLIEngine = (eslint) => eslint.resolveFileGlobPatterns !== undefined;
function createEsLintReporter(configuration) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { CLIEngine, ESLint } = require('eslint');
    const eslint = ESLint
        ? new ESLint(configuration.options)
        : new CLIEngine(configuration.options);
    let isInitialRun = true;
    let isInitialGetFiles = true;
    const lintResults = new Map();
    const includedGlobPatterns = resolveFileGlobPatterns(configuration.files);
    const includedFiles = new Set();
    function isFileIncluded(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return (!path.includes('node_modules') &&
                includedGlobPatterns.some((pattern) => minimatch_1.default(path, pattern)) &&
                !(yield eslint.isPathIgnored(path)));
        });
    }
    function getFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            if (isInitialGetFiles) {
                isInitialGetFiles = false;
                const resolvedGlobs = yield Promise.all(includedGlobPatterns.map((globPattern) => new Promise((resolve) => {
                    glob_1.default(globPattern, (error, resolvedFiles) => {
                        if (error) {
                            // fail silently
                            resolve([]);
                        }
                        else {
                            resolve(resolvedFiles || []);
                        }
                    });
                })));
                for (const resolvedGlob of resolvedGlobs) {
                    for (const resolvedFile of resolvedGlob) {
                        if (yield isFileIncluded(resolvedFile)) {
                            includedFiles.add(resolvedFile);
                        }
                    }
                }
            }
            return Array.from(includedFiles);
        });
    }
    function getDirs() {
        return includedGlobPatterns || [];
    }
    function getExtensions() {
        return configuration.options.extensions || [];
    }
    // Copied from the eslint 6 implementation, as it's not available in eslint 8
    function resolveFileGlobPatterns(globPatterns) {
        if (configuration.options.globInputPaths === false) {
            return globPatterns.filter(Boolean);
        }
        const extensions = getExtensions().map((ext) => ext.replace(/^\./u, ''));
        const dirSuffix = `/**/*.{${extensions.join(',')}}`;
        return globPatterns.filter(Boolean).map((globPattern) => {
            const resolvedPath = path_1.default.resolve(configuration.options.cwd || '', globPattern);
            const newPath = directoryExists(resolvedPath)
                ? globPattern.replace(/[/\\]$/u, '') + dirSuffix
                : globPattern;
            return path_1.default.normalize(newPath).replace(/\\/gu, '/');
        });
    }
    // Copied from the eslint 6 implementation, as it's not available in eslint 8
    function directoryExists(resolvedPath) {
        try {
            return fs_extra_1.default.statSync(resolvedPath).isDirectory();
        }
        catch (error) {
            if (error && error.code === 'ENOENT') {
                return false;
            }
            throw error;
        }
    }
    return {
        getReport: ({ changedFiles = [], deletedFiles = [] }) => __awaiter(this, void 0, void 0, function* () {
            return {
                getDependencies() {
                    return __awaiter(this, void 0, void 0, function* () {
                        for (const changedFile of changedFiles) {
                            if (yield isFileIncluded(changedFile)) {
                                includedFiles.add(changedFile);
                            }
                        }
                        for (const deletedFile of deletedFiles) {
                            includedFiles.delete(deletedFile);
                        }
                        return {
                            files: (yield getFiles()).map((file) => path_1.default.normalize(file)),
                            dirs: getDirs().map((dir) => path_1.default.normalize(dir)),
                            excluded: [],
                            extensions: getExtensions(),
                        };
                    });
                },
                getIssues() {
                    return __awaiter(this, void 0, void 0, function* () {
                        // cleanup old results
                        for (const changedFile of changedFiles) {
                            lintResults.delete(changedFile);
                        }
                        for (const deletedFile of deletedFiles) {
                            lintResults.delete(deletedFile);
                        }
                        // get reports
                        const lintReports = [];
                        if (isInitialRun) {
                            const lintReport = yield (isOldCLIEngine(eslint)
                                ? Promise.resolve(eslint.executeOnFiles(includedGlobPatterns))
                                : eslint.lintFiles(includedGlobPatterns).then((results) => ({ results })));
                            lintReports.push(lintReport);
                            isInitialRun = false;
                        }
                        else {
                            // we need to take care to not lint files that are not included by the configuration.
                            // the eslint engine will not exclude them automatically
                            const changedAndIncludedFiles = [];
                            for (const changedFile of changedFiles) {
                                if (yield isFileIncluded(changedFile)) {
                                    changedAndIncludedFiles.push(changedFile);
                                }
                            }
                            if (changedAndIncludedFiles.length) {
                                const lintReport = yield (isOldCLIEngine(eslint)
                                    ? Promise.resolve(eslint.executeOnFiles(changedAndIncludedFiles))
                                    : eslint.lintFiles(changedAndIncludedFiles).then((results) => ({ results })));
                                lintReports.push(lintReport);
                            }
                        }
                        // output fixes if `fix` option is provided
                        if (configuration.options.fix) {
                            yield Promise.all(lintReports.map((lintReport) => isOldCLIEngine(eslint)
                                ? CLIEngine.outputFixes(lintReport)
                                : ESLint.outputFixes(lintReport.results)));
                        }
                        // store results
                        for (const lintReport of lintReports) {
                            for (const lintResult of lintReport.results) {
                                lintResults.set(lintResult.filePath, lintResult);
                            }
                        }
                        // get actual list of previous and current reports
                        const results = Array.from(lintResults.values());
                        return EsLintIssueFactory_1.createIssuesFromEsLintResults(results);
                    });
                },
                close() {
                    return __awaiter(this, void 0, void 0, function* () {
                        // do nothing
                    });
                },
            };
        }),
    };
}
exports.createEsLintReporter = createEsLintReporter;
