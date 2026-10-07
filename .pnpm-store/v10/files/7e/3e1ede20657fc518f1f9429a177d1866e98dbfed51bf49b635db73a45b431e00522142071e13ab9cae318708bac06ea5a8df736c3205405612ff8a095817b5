import type { Scope } from '../scope';
import type { Span } from '../types/span';
/** Store the scope & isolation scope for a span, which can the be used when it is finished. */
export declare function setCapturedScopesOnSpan(span: Span | undefined, scope: Scope, isolationScope: Scope): void;
/**
 * Grabs the scope and isolation scope off a span that were active when the span was started.
 * If WeakRef was used and scopes have been garbage collected, returns undefined for those scopes.
 */
export declare function getCapturedScopesOnSpan(span: Span): {
    scope?: Scope;
    isolationScope?: Scope;
};
//# sourceMappingURL=utils.d.ts.map