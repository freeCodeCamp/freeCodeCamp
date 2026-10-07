"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
// This is a workaround for https://github.com/eslint/eslint/issues/3458
//
// To correct how ESLint searches for plugin packages, add this line to the top of your project's .eslintrc.js file:
//
//    require("@rushstack/eslint-patch/modern-module-resolution");
//
const _patch_base_1 = require("./_patch-base");
// error: "The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received ''"
const isInvalidImporterPath = (ex) => (ex === null || ex === void 0 ? void 0 : ex.code) === 'ERR_INVALID_ARG_VALUE';
if (!_patch_base_1.configArrayFactory.__loadPluginPatched) {
    _patch_base_1.configArrayFactory.__loadPluginPatched = true;
    // eslint-disable-next-line @typescript-eslint/typedef
    const originalLoadPlugin = _patch_base_1.configArrayFactory.prototype._loadPlugin;
    if (_patch_base_1.ESLINT_MAJOR_VERSION === 6) {
        // ESLint 6.x
        // https://github.com/eslint/eslint/blob/9738f8cc864d769988ccf42bb70f524444df1349/lib/cli-engine/config-array-factory.js#L915
        _patch_base_1.configArrayFactory.prototype._loadPlugin = function (name, importerPath, importerName) {
            const originalResolve = _patch_base_1.ModuleResolver.resolve;
            try {
                _patch_base_1.ModuleResolver.resolve = function (moduleName, relativeToPath) {
                    try {
                        // resolve using importerPath instead of relativeToPath
                        return originalResolve.call(this, moduleName, importerPath);
                    }
                    catch (e) {
                        if ((0, _patch_base_1.isModuleResolutionError)(e) || isInvalidImporterPath(e)) {
                            return originalResolve.call(this, moduleName, relativeToPath);
                        }
                        throw e;
                    }
                };
                return originalLoadPlugin.apply(this, arguments);
            }
            finally {
                _patch_base_1.ModuleResolver.resolve = originalResolve;
            }
        };
    }
    else {
        // ESLint 7.x || 8.x
        // https://github.com/eslint/eslintrc/blob/242d569020dfe4f561e4503787b99ec016337457/lib/config-array-factory.js#L1023
        _patch_base_1.configArrayFactory.prototype._loadPlugin = function (name, ctx) {
            const originalResolve = _patch_base_1.ModuleResolver.resolve;
            try {
                _patch_base_1.ModuleResolver.resolve = function (moduleName, relativeToPath) {
                    try {
                        // resolve using ctx.filePath instead of relativeToPath
                        return originalResolve.call(this, moduleName, ctx.filePath);
                    }
                    catch (e) {
                        if ((0, _patch_base_1.isModuleResolutionError)(e) || isInvalidImporterPath(e)) {
                            return originalResolve.call(this, moduleName, relativeToPath);
                        }
                        throw e;
                    }
                };
                return originalLoadPlugin.apply(this, arguments);
            }
            finally {
                _patch_base_1.ModuleResolver.resolve = originalResolve;
            }
        };
    }
}
//# sourceMappingURL=modern-module-resolution.js.map