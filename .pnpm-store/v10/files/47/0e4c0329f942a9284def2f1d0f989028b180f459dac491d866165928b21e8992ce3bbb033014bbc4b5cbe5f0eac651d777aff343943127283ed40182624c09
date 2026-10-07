"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearProgramCache = exports.clearCaches = void 0;
const getWatchProgramsForProjects_1 = require("./create-program/getWatchProgramsForProjects");
const parser_1 = require("./parser");
const createParseSettings_1 = require("./parseSettings/createParseSettings");
const resolveProjectList_1 = require("./parseSettings/resolveProjectList");
/**
 * Clears all of the internal caches.
 * Generally you shouldn't need or want to use this.
 * Examples of intended uses:
 * - In tests to reset parser state to keep tests isolated.
 * - In custom lint tooling that iteratively lints one project at a time to prevent OOMs.
 */
function clearCaches() {
    (0, parser_1.clearProgramCache)();
    (0, getWatchProgramsForProjects_1.clearWatchCaches)();
    (0, createParseSettings_1.clearTSConfigMatchCache)();
    (0, resolveProjectList_1.clearGlobCache)();
}
exports.clearCaches = clearCaches;
// TODO - delete this in next major
exports.clearProgramCache = clearCaches;
//# sourceMappingURL=clear-caches.js.map