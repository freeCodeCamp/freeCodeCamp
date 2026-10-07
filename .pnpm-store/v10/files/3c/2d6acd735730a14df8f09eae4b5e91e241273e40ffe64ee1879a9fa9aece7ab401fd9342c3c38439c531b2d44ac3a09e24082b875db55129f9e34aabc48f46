"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCandidateTSConfigRootDir = addCandidateTSConfigRootDir;
exports.clearCandidateTSConfigRootDirs = clearCandidateTSConfigRootDirs;
exports.getInferredTSConfigRootDir = getInferredTSConfigRootDir;
const candidateTSConfigRootDirs = new Set();
function addCandidateTSConfigRootDir(candidate) {
    candidateTSConfigRootDirs.add(candidate);
}
function clearCandidateTSConfigRootDirs() {
    candidateTSConfigRootDirs.clear();
}
function getInferredTSConfigRootDir() {
    const entries = [...candidateTSConfigRootDirs];
    switch (entries.length) {
        case 0:
            return process.cwd();
        case 1:
            return entries[0];
        default:
            throw new Error([
                'No tsconfigRootDir was set, and multiple candidate TSConfigRootDirs are present:',
                ...entries.map(candidate => ` - ${candidate}`),
                "You'll need to explicitly set tsconfigRootDir in your parser options.",
                'See: https://tseslint.com/parser-tsconfigrootdir',
            ].join('\n'));
    }
}
