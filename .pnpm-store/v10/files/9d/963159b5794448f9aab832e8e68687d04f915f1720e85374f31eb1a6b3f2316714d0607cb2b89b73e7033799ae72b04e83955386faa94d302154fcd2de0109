"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ControlledWatchCompilerHost_1 = require("./ControlledWatchCompilerHost");
function createControlledWatchSolutionBuilderHost(typescript, parsedCommandLine, system, createProgram, reportDiagnostic, reportWatchStatus, reportSolutionBuilderStatus, afterProgramCreate, afterProgramEmitAndDiagnostics, hostExtensions = []) {
    const controlledWatchCompilerHost = ControlledWatchCompilerHost_1.createControlledWatchCompilerHost(typescript, parsedCommandLine, system, createProgram, reportDiagnostic, reportWatchStatus, afterProgramCreate, hostExtensions);
    let controlledWatchSolutionBuilderHost = Object.assign(Object.assign({}, controlledWatchCompilerHost), { reportDiagnostic(diagnostic) {
            if (reportDiagnostic) {
                reportDiagnostic(diagnostic);
            }
        },
        reportSolutionBuilderStatus(diagnostic) {
            if (reportSolutionBuilderStatus) {
                reportSolutionBuilderStatus(diagnostic);
            }
        },
        afterProgramEmitAndDiagnostics(program) {
            if (afterProgramEmitAndDiagnostics) {
                afterProgramEmitAndDiagnostics(program);
            }
        },
        createDirectory(path) {
            system.createDirectory(path);
        },
        writeFile(path, data) {
            system.writeFile(path, data);
        },
        getModifiedTime(fileName) {
            return system.getModifiedTime(fileName);
        },
        setModifiedTime(fileName, date) {
            system.setModifiedTime(fileName, date);
        },
        deleteFile(fileName) {
            system.deleteFile(fileName);
        },
        getParsedCommandLine(fileName) {
            return typescript.getParsedCommandLineOfConfigFile(fileName, { skipLibCheck: true }, Object.assign(Object.assign({}, system), { onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
                    if (reportDiagnostic) {
                        reportDiagnostic(diagnostic);
                    }
                } }));
        } });
    hostExtensions.forEach((hostExtension) => {
        if (hostExtension.extendWatchSolutionBuilderHost) {
            controlledWatchSolutionBuilderHost = hostExtension.extendWatchSolutionBuilderHost(controlledWatchSolutionBuilderHost, parsedCommandLine);
        }
    });
    return controlledWatchSolutionBuilderHost;
}
exports.createControlledWatchSolutionBuilderHost = createControlledWatchSolutionBuilderHost;
