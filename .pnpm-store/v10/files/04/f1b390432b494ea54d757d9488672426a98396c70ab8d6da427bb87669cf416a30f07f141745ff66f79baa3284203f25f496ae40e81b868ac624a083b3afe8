import type { SerializedStreamedSpan } from '../../types/span';
/**
 * Estimates the serialized byte size of a {@link SerializedStreamedSpan}.
 *
 * Uses 2 bytes per character as a UTF-16 approximation, and 8 bytes per number.
 * The estimate is intentionally conservative and may be slightly lower than the
 * actual byte size on the wire.
 * We compensate for this by setting the span buffers internal limit well below the limit
 * of how large an actual span v2 envelope may be.
 */
export declare function estimateSerializedSpanSizeInBytes(span: SerializedStreamedSpan): number;
//# sourceMappingURL=estimateSize.d.ts.map