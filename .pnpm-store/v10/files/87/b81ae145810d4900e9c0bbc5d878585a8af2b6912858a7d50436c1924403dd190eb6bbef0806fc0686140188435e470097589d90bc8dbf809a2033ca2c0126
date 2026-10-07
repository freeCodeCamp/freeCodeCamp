"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectProgram = createProjectProgram;
const debug_1 = __importDefault(require("debug"));
const node_utils_1 = require("../node-utils");
const createProjectProgramError_1 = require("./createProjectProgramError");
const shared_1 = require("./shared");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:create-program:createProjectProgram');
/**
 * @param parseSettings Internal settings for parsing the file
 * @returns If found, the source file corresponding to the code and the containing program
 */
function createProjectProgram(parseSettings, programsForProjects) {
    log('Creating project program for: %s', parseSettings.filePath);
    const astAndProgram = (0, node_utils_1.firstDefined)(programsForProjects, currentProgram => (0, shared_1.getAstFromProgram)(currentProgram, parseSettings.filePath));
    if (!astAndProgram) {
        throw new Error((0, createProjectProgramError_1.createProjectProgramError)(parseSettings, programsForProjects).join('\n'));
    }
    return astAndProgram;
}
//# sourceMappingURL=createProjectProgram.js.map