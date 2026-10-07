/**
 * Generated instances having a method [cloneMethod]
 * will be automatically cloned whenever necessary
 *
 * This is pretty useful for statefull generated values.
 * For instance, whenever you use a Stream you directly impact it.
 * Implementing [cloneMethod] on the generated Stream would force
 * the framework to clone it whenever it has to re-use it
 * (mainly required for chrinking process)
 *
 * @remarks Since 1.8.0
 * @public
 */
export declare const cloneMethod: unique symbol;
/**
 * Object instance that should be cloned from one generation/shrink to another
 * @remarks Since 2.15.0
 * @public
 */
export interface WithCloneMethod<T> {
    [cloneMethod]: () => T;
}
/**
 * Check if an instance has to be clone
 * @remarks Since 2.15.0
 * @public
 */
export declare function hasCloneMethod<T>(instance: T | WithCloneMethod<T>): instance is WithCloneMethod<T>;
/**
 * Clone an instance if needed
 * @remarks Since 2.15.0
 * @public
 */
export declare function cloneIfNeeded<T>(instance: T): T;
