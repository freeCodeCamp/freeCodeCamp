import type * as TSESLint from '../../ts-eslint';
import type { TSESTree } from '../../ts-estree';
declare const ReferenceTrackerREAD: unique symbol;
declare const ReferenceTrackerCALL: unique symbol;
declare const ReferenceTrackerCONSTRUCT: unique symbol;
declare const ReferenceTrackerESM: unique symbol;
interface ReferenceTracker {
    /**
     * Iterate the references that the given `traceMap` determined.
     * This method starts to search from global variables.
     *
     * @see {@link https://eslint-community.github.io/eslint-utils/api/scope-utils.html#tracker-iterateglobalreferences}
     */
    iterateGlobalReferences<T>(traceMap: ReferenceTracker.TraceMap<T>): IterableIterator<ReferenceTracker.FoundReference<T>>;
    /**
     * Iterate the references that the given `traceMap` determined.
     * This method starts to search from `require()` expression.
     *
     * @see {@link https://eslint-community.github.io/eslint-utils/api/scope-utils.html#tracker-iteratecjsreferences}
     */
    iterateCjsReferences<T>(traceMap: ReferenceTracker.TraceMap<T>): IterableIterator<ReferenceTracker.FoundReference<T>>;
    /**
     * Iterate the references that the given `traceMap` determined.
     * This method starts to search from `import`/`export` declarations.
     *
     * @see {@link https://eslint-community.github.io/eslint-utils/api/scope-utils.html#tracker-iterateesmreferences}
     */
    iterateEsmReferences<T>(traceMap: ReferenceTracker.TraceMap<T>): IterableIterator<ReferenceTracker.FoundReference<T>>;
}
interface ReferenceTrackerStatic {
    new (globalScope: TSESLint.Scope.Scope, options?: {
        /**
         * The mode which determines how the `tracker.iterateEsmReferences()` method scans CommonJS modules.
         * If this is `"strict"`, the method binds CommonJS modules to the default export. Otherwise, the method binds
         * CommonJS modules to both the default export and named exports. Optional. Default is `"strict"`.
         */
        mode?: 'strict' | 'legacy';
        /**
         * The name list of Global Object. Optional. Default is `["global", "globalThis", "self", "window"]`.
         */
        globalObjectNames?: readonly string[];
    }): ReferenceTracker;
    readonly READ: typeof ReferenceTrackerREAD;
    readonly CALL: typeof ReferenceTrackerCALL;
    readonly CONSTRUCT: typeof ReferenceTrackerCONSTRUCT;
    readonly ESM: typeof ReferenceTrackerESM;
}
declare namespace ReferenceTracker {
    type READ = ReferenceTrackerStatic['READ'];
    type CALL = ReferenceTrackerStatic['CALL'];
    type CONSTRUCT = ReferenceTrackerStatic['CONSTRUCT'];
    type ESM = ReferenceTrackerStatic['ESM'];
    type ReferenceType = READ | CALL | CONSTRUCT;
    type TraceMap<T = any> = Record<string, TraceMapElement<T>>;
    interface TraceMapElement<T> {
        [ReferenceTrackerREAD]?: T;
        [ReferenceTrackerCALL]?: T;
        [ReferenceTrackerCONSTRUCT]?: T;
        [ReferenceTrackerESM]?: true;
        [key: string]: TraceMapElement<T>;
    }
    interface FoundReference<T = any> {
        node: TSESTree.Node;
        path: readonly string[];
        type: ReferenceType;
        info: T;
    }
}
/**
 * The tracker for references. This provides reference tracking for global variables, CommonJS modules, and ES modules.
 *
 * @see {@link https://eslint-community.github.io/eslint-utils/api/scope-utils.html#referencetracker-class}
 */
declare const ReferenceTracker: ReferenceTrackerStatic;
export { ReferenceTracker };
//# sourceMappingURL=ReferenceTracker.d.ts.map