"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createControlledWatchCompilerHost(typescript, parsedCommandLine, system, createProgram, reportDiagnostic, reportWatchStatus, afterProgramCreate, hostExtensions = []) {
    const baseWatchCompilerHost = typescript.createWatchCompilerHost(parsedCommandLine.fileNames, parsedCommandLine.options, system, createProgram, reportDiagnostic, reportWatchStatus, parsedCommandLine.projectReferences);
    let controlledWatchCompilerHost = Object.assign(Object.assign({}, baseWatchCompilerHost), { createProgram(rootNames, options, compilerHost, oldProgram, configFileParsingDiagnostics, projectReferences) {
            hostExtensions.forEach((hostExtension) => {
                if (compilerHost && hostExtension.extendCompilerHost) {
                    compilerHost = hostExtension.extendCompilerHost(compilerHost, parsedCommandLine);
                }
            });
            return baseWatchCompilerHost.createProgram(rootNames, options, compilerHost, oldProgram, configFileParsingDiagnostics, projectReferences);
        },
        afterProgramCreate(program) {
            if (afterProgramCreate) {
                afterProgramCreate(program);
            }
        },
        onWatchStatusChange() {
            // do nothing
        }, watchFile: system.watchFile, watchDirectory: system.watchDirectory, setTimeout: system.setTimeout, clearTimeout: system.clearTimeout, fileExists: system.fileExists, readFile: system.readFile, directoryExists: system.directoryExists, getDirectories: system.getDirectories, realpath: system.realpath });
    hostExtensions.forEach((hostExtension) => {
        if (hostExtension.extendWatchCompilerHost) {
            controlledWatchCompilerHost = hostExtension.extendWatchCompilerHost(controlledWatchCompilerHost, parsedCommandLine);
        }
    });
    return controlledWatchCompilerHost;
}
exports.createControlledWatchCompilerHost = createControlledWatchCompilerHost;
