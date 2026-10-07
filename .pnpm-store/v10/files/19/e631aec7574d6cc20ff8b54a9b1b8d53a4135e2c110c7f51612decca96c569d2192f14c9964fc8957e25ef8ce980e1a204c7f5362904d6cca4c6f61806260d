"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
// This is a workaround for ESLint's requirement to consume shareable configurations from package names prefixed
// with "eslint-config".
//
// To remove this requirement, add this line to the top of your project's .eslintrc.js file:
//
//    require("@rushstack/eslint-patch/custom-config-package-names");
//
const _patch_base_1 = require("./_patch-base");
if (!_patch_base_1.configArrayFactory.__loadExtendedShareableConfigPatched) {
    _patch_base_1.configArrayFactory.__loadExtendedShareableConfigPatched = true;
    // eslint-disable-next-line @typescript-eslint/typedef
    const originalLoadExtendedShareableConfig = _patch_base_1.configArrayFactory.prototype._loadExtendedShareableConfig;
    // Common between ESLint versions
    // https://github.com/eslint/eslintrc/blob/242d569020dfe4f561e4503787b99ec016337457/lib/config-array-factory.js#L910
    _patch_base_1.configArrayFactory.prototype._loadExtendedShareableConfig = function (extendName) {
        const originalResolve = _patch_base_1.ModuleResolver.resolve;
        try {
            _patch_base_1.ModuleResolver.resolve = function (moduleName, relativeToPath) {
                try {
                    return originalResolve.call(this, moduleName, relativeToPath);
                }
                catch (e) {
                    // Only change the name we resolve if we cannot find the normalized module, since it is
                    // valid to rely on the normalized package name. Use the originally provided module path
                    // instead of the normalized module path.
                    if ((e === null || e === void 0 ? void 0 : e.code) === 'MODULE_NOT_FOUND' &&
                        moduleName !== extendName &&
                        moduleName === _patch_base_1.Naming.normalizePackageName(extendName, 'eslint-config')) {
                        return originalResolve.call(this, extendName, relativeToPath);
                    }
                    else {
                        throw e;
                    }
                }
            };
            return originalLoadExtendedShareableConfig.apply(this, arguments);
        }
        finally {
            _patch_base_1.ModuleResolver.resolve = originalResolve;
        }
    };
}
//# sourceMappingURL=custom-config-package-names.js.map