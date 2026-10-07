/**
 * Interface representing a weak reference to an object.
 * This matches the standard WeakRef interface but is defined here
 * because WeakRef is not available in ES2020 type definitions.
 */
interface WeakRefLike<T extends object> {
    deref(): T | undefined;
}
/**
 * A wrapper type that represents either a WeakRef-like object or a direct reference.
 * Used for optional weak referencing in environments where WeakRef may not be available.
 */
export type MaybeWeakRef<T extends object> = WeakRefLike<T> | T;
/**
 * Creates a weak reference to an object if WeakRef is available,
 * otherwise returns the object directly.
 *
 * This is useful for breaking circular references while maintaining
 * compatibility with environments that don't support WeakRef (e.g., older browsers).
 *
 * @param value - The object to create a weak reference to
 * @returns A WeakRef wrapper if available, or the original object as fallback
 */
export declare function makeWeakRef<T extends object>(value: T): MaybeWeakRef<T>;
/**
 * Resolves a potentially weak reference, returning the underlying object
 * or undefined if the reference has been garbage collected.
 *
 * @param ref - A MaybeWeakRef or undefined
 * @returns The referenced object, or undefined if GC'd or ref was undefined
 */
export declare function derefWeakRef<T extends object>(ref: MaybeWeakRef<T> | undefined): T | undefined;
export {};
//# sourceMappingURL=weakRef.d.ts.map
