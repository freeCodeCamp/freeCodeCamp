/**
 * Type used to strongly type instances of depth identifier while keeping internals
 * what they contain internally
 *
 * @remarks Since 2.25.0
 * @public
 */
export type DepthIdentifier = {} & DepthContext;
/**
 * Instance of depth, can be used to alter the depth perceived by an arbitrary
 * or to bias your own arbitraries based on the current depth
 *
 * @remarks Since 2.25.0
 * @public
 */
export type DepthContext = {
    /**
     * Current depth (starts at 0, continues with 1, 2...).
     * Only made of integer values superior or equal to 0.
     *
     * Remark: Whenever altering the `depth` during a `generate`, please make sure to ALWAYS
     * reset it to its original value before you leave the `generate`. Otherwise the execution
     * will imply side-effects that will potentially impact the following runs and make replay
     * of the issue barely impossible.
     */
    depth: number;
};
/**
 * Get back the requested DepthContext
 * @remarks Since 2.25.0
 * @public
 */
export declare function getDepthContextFor(contextMeta: DepthContext | DepthIdentifier | string | undefined): DepthContext;
/**
 * Create a new and unique instance of DepthIdentifier
 * that can be shared across multiple arbitraries if needed
 * @public
 */
export declare function createDepthIdentifier(): DepthIdentifier;
