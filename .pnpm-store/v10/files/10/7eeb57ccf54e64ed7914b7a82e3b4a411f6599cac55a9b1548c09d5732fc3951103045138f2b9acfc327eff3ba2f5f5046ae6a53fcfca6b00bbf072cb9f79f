import type { Attributes } from '@opentelemetry/api';
import type { RawResourceAttribute } from './types';
/**
 * An interface that represents a resource. A Resource describes the entity for which signals (metrics or trace) are
 * collected.
 *
 * This interface is NOT user-implementable. Valid ways to obtain a {@link Resource} are by using either of these functions
 *  - {@link resourceFromAttributes}
 *  - {@link emptyResource}
 *  - {@link defaultResource}
 *  - {@link detectResources}
 */
export interface Resource {
    /**
     * Check if async attributes have resolved. This is useful to avoid awaiting
     * waitForAsyncAttributes (which will introduce asynchronous behavior) when not necessary.
     *
     * @returns true if the resource "attributes" property is not yet settled to its final value
     */
    readonly asyncAttributesPending?: boolean;
    /**
     * @returns the Resource's attributes.
     */
    readonly attributes: Attributes;
    /**
     * @returns the Resource's schema URL or undefined if not set.
     */
    readonly schemaUrl?: string;
    /**
     * Returns a promise that will never be rejected. Resolves when all async attributes have finished being added to
     * this Resource's attributes. This is useful in exporters to block until resource detection
     * has finished.
     */
    waitForAsyncAttributes?(): Promise<void>;
    /**
     * Returns a new, merged {@link Resource} by merging the current Resource
     * with the other Resource. In case of a collision, other Resource takes
     * precedence.
     *
     * @param other the Resource that will be merged with this.
     * @returns the newly merged Resource.
     */
    merge(other: Resource | null): Resource;
    getRawAttributes(): RawResourceAttribute[];
}
//# sourceMappingURL=Resource.d.ts.map