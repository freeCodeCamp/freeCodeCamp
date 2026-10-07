import type { Scope } from '../scope';
import type { Span } from '../types/span';
declare const SCOPE_SPAN_FIELD = "_sentrySpan";
type ScopeWithMaybeSpan = Scope & {
    [SCOPE_SPAN_FIELD]?: Span;
};
/**
 * Set the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
export declare function _setSpanForScope(scope: Scope, span: Span | undefined): void;
/**
 * Get the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
export declare function _getSpanForScope(scope: ScopeWithMaybeSpan): Span | undefined;
export {};
//# sourceMappingURL=spanOnScope.d.ts.map