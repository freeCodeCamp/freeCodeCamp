/**
 * Generate a unique id that is consistent, deterministic, and fast while resulting in predictably short hashes.
 *
 * Some characteristics for this id:
 *
 * - The value of the `id` should not mean anything (it is "ours")
 * - The value does not need to be encrypted
 * - The value must be unique within our system (as little collision risk as possible on small ascii inputs)
 * - The value needs to be deterministic (same input always results in same output)
 * - The conversion needs to be fast
 * - The result should be predictably short as it may be used in urls
 *
 * High level this step is meant to prevent people from using our `id` to have meaning in their site and it's meant
 * to make sure the id ends up being short, whatever the input size was.
 *
 * Note: UUID is relatively slow because it calls into the native crypto library to generate SHA-1 hashes.
 *       We do need the low collision rate of SHA-1 so we use a local (global) cache to speed up repetitive calls
 *
 * @param {String | Number} id - A string of arbitrary length
 * @param {String} namespace - Namespace to use for UUID
 *
 * @return {String} - UUID
 */
export declare function createNodeId(id: string | number, namespace: string): string;
