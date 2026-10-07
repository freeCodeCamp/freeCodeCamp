"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tapable_1 = require("tapable");
const compilerHookMap = new WeakMap();
function createForkTsCheckerWebpackPluginHooks() {
    return {
        start: new tapable_1.AsyncSeriesWaterfallHook([
            'change',
            'compilation',
        ]),
        waiting: new tapable_1.SyncHook(['compilation']),
        canceled: new tapable_1.SyncHook(['compilation']),
        error: new tapable_1.SyncHook(['error', 'compilation']),
        issues: new tapable_1.SyncWaterfallHook([
            'issues',
            'compilation',
        ]),
    };
}
function forwardForkTsCheckerWebpackPluginHooks(source, target) {
    source.start.tapPromise('ForkTsCheckerWebpackPlugin', target.start.promise);
    source.waiting.tap('ForkTsCheckerWebpackPlugin', target.waiting.call);
    source.canceled.tap('ForkTsCheckerWebpackPlugin', target.canceled.call);
    source.error.tap('ForkTsCheckerWebpackPlugin', target.error.call);
    source.issues.tap('ForkTsCheckerWebpackPlugin', target.issues.call);
}
function getForkTsCheckerWebpackPluginHooks(compiler) {
    let hooks = compilerHookMap.get(compiler);
    if (hooks === undefined) {
        hooks = createForkTsCheckerWebpackPluginHooks();
        compilerHookMap.set(compiler, hooks);
        // proxy hooks for multi-compiler
        if ('compilers' in compiler) {
            compiler.compilers.forEach((childCompiler) => {
                const childHooks = getForkTsCheckerWebpackPluginHooks(childCompiler);
                if (hooks) {
                    forwardForkTsCheckerWebpackPluginHooks(childHooks, hooks);
                }
            });
        }
    }
    return hooks;
}
exports.getForkTsCheckerWebpackPluginHooks = getForkTsCheckerWebpackPluginHooks;
