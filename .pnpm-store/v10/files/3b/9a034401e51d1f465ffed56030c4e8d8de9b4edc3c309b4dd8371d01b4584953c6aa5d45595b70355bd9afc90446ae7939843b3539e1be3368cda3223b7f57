"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION = void 0;
exports.validateDefaultProjectForFilesGlob = validateDefaultProjectForFilesGlob;
exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION = `

Having many files run with the default project is known to cause performance issues and slow down linting.

See https://tseslint.com/allowdefaultproject-glob-too-wide
`;
function validateDefaultProjectForFilesGlob(allowDefaultProject) {
    if (!allowDefaultProject?.length) {
        return;
    }
    for (const glob of allowDefaultProject) {
        if (glob === '*') {
            throw new Error(`allowDefaultProject contains the overly wide '*'.${exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION}`);
        }
        if (glob.includes('**')) {
            throw new Error(`allowDefaultProject glob '${glob}' contains a disallowed '**'.${exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION}`);
        }
    }
}
