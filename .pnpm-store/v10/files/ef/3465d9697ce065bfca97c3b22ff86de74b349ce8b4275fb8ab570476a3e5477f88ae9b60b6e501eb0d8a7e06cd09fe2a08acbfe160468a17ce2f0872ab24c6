import Span from './span';
import SpanContext from './span_context';
/**
 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
 *
 * See the exported childOf() and followsFrom() functions at the package level.
 */
export default class Reference {
    protected _type: string;
    protected _referencedContext: SpanContext;
    /**
     * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
     *         REFERENCE_FOLLOWS_FROM).
     */
    type(): string;
    /**
     * @return {SpanContext} The SpanContext being referred to (e.g., the
     *         parent in a REFERENCE_CHILD_OF Reference).
     */
    referencedContext(): SpanContext;
    /**
     * Initialize a new Reference instance.
     *
     * @param {string} type - the Reference type constant (e.g.,
     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
     * @param {SpanContext} referencedContext - the SpanContext being referred
     *        to. As a convenience, a Span instance may be passed in instead
     *        (in which case its .context() is used here).
     */
    constructor(type: string, referencedContext: SpanContext | Span);
}
//# sourceMappingURL=reference.d.ts.map