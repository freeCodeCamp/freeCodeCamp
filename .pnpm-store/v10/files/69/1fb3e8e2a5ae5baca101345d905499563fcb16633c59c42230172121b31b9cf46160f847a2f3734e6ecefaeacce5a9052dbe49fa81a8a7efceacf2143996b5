"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertTypeScriptVueExtensionSupport(configuration) {
    // We need to import template compiler for vue lazily because it cannot be included it
    // as direct dependency because it is an optional dependency of fork-ts-checker-webpack-plugin.
    // Since its version must not mismatch with user-installed Vue.js,
    // we should let the users install template compiler for vue by themselves.
    const compilerName = configuration.compiler;
    try {
        require(compilerName);
    }
    catch (error) {
        throw new Error([
            `Could not initialize '${compilerName}'. When you use 'typescript.extensions.vue' option, make sure to install '${compilerName}' and that the version matches that of 'vue'.`,
            `Error details: ${error.message}`,
        ].join('\n'));
    }
}
exports.assertTypeScriptVueExtensionSupport = assertTypeScriptVueExtensionSupport;
