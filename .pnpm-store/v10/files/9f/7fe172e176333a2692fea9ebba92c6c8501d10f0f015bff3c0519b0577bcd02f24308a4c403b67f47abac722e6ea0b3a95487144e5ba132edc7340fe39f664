import type { Attributes } from '../common/Attributes';
import type { TimeInput } from '../common/Time';
import type { Link } from './link';
import type { SpanKind } from './span_kind';
/**
 * Options needed for span creation
 *
 * @since 1.0.0
 */
export interface SpanOptions {
    /**
     * The SpanKind of a span
     * @default {@link SpanKind.INTERNAL}
     */
    kind?: SpanKind;
    /** A span's attributes */
    attributes?: Attributes;
    /** {@link Link}s span to other spans */
    links?: Link[];
    /** A manually specified start time for the created `Span` object. */
    startTime?: TimeInput;
    /** The new span should be a root span. (Ignore parent from context). */
    root?: boolean;
}
//# sourceMappingURL=SpanOptions.d.ts.map