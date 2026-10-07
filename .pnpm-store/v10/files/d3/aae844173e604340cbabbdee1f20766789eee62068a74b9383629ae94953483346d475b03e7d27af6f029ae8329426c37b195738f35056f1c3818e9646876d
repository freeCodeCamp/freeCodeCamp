"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitName = void 0;
/*
 * Split the file/variable name written in camelCase, kebab-case, PascalCase, and snake_case.
 */
const splitName = (name) => {
    return name
        .replace(/_/g, '-')
        .replace(/([a-z0-9])([A-Z])|([A-Z])([A-Z])(?=[a-z])/g, '$1$3-$2$4')
        .toLowerCase()
        .split('-');
};
exports.splitName = splitName;
