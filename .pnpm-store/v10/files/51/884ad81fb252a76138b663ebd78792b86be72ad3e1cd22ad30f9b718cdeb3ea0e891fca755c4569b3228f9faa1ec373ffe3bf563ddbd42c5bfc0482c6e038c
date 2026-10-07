"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyze = analyze;
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
const referencer_1 = require("./referencer");
const ScopeManager_1 = require("./ScopeManager");
const DEFAULT_OPTIONS = {
    childVisitorKeys: visitor_keys_1.visitorKeys,
    emitDecoratorMetadata: false,
    globalReturn: false,
    impliedStrict: false,
    jsxFragmentName: null,
    jsxPragma: 'React',
    lib: ['es2018'],
    sourceType: 'script',
};
/**
 * Takes an AST and returns the analyzed scopes.
 */
function analyze(tree, providedOptions) {
    const options = {
        childVisitorKeys: providedOptions?.childVisitorKeys ?? DEFAULT_OPTIONS.childVisitorKeys,
        emitDecoratorMetadata: false,
        globalReturn: providedOptions?.globalReturn ?? DEFAULT_OPTIONS.globalReturn,
        impliedStrict: providedOptions?.impliedStrict ?? DEFAULT_OPTIONS.impliedStrict,
        jsxFragmentName: providedOptions?.jsxFragmentName ?? DEFAULT_OPTIONS.jsxFragmentName,
        jsxPragma: 
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        providedOptions?.jsxPragma === undefined
            ? DEFAULT_OPTIONS.jsxPragma
            : providedOptions.jsxPragma,
        lib: providedOptions?.lib ?? ['esnext'],
        sourceType: providedOptions?.sourceType ?? DEFAULT_OPTIONS.sourceType,
    };
    // ensure the option is lower cased
    options.lib = options.lib.map(l => l.toLowerCase());
    const scopeManager = new ScopeManager_1.ScopeManager(options);
    const referencer = new referencer_1.Referencer(options, scopeManager);
    referencer.visit(tree);
    return scopeManager;
}
//# sourceMappingURL=analyze.js.map