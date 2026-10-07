/**
 * @public
 *
 * Transforms any members of the object T having type FromType
 * to ToType. This applies only to exact type matches.
 *
 * This is for the case where FromType is a union and only those fields
 * matching the same union should be transformed.
 */
export type Transform<T, FromType, ToType> = ConditionalRecursiveTransformExact<T, FromType, ToType>;
/**
 * @internal
 *
 * Returns ToType if T matches exactly with FromType.
 */
type TransformExact<T, FromType, ToType> = [T] extends [FromType] ? ([FromType] extends [T] ? ToType : T) : T;
/**
 * @internal
 *
 * Applies TransformExact to members of an object recursively.
 */
type RecursiveTransformExact<T, FromType, ToType> = T extends Function ? T : T extends object ? {
    [key in keyof T]: [T[key]] extends [FromType] ? [FromType] extends [T[key]] ? ToType : ConditionalRecursiveTransformExact<T[key], FromType, ToType> : ConditionalRecursiveTransformExact<T[key], FromType, ToType>;
} : TransformExact<T, FromType, ToType>;
/**
 * @internal
 *
 * Same as RecursiveTransformExact but does not assign to an object
 * unless there is a matching transformed member.
 */
type ConditionalRecursiveTransformExact<T, FromType, ToType> = [T] extends [
    RecursiveTransformExact<T, FromType, ToType>
] ? [RecursiveTransformExact<T, FromType, ToType>] extends [T] ? T : RecursiveTransformExact<T, FromType, ToType> : RecursiveTransformExact<T, FromType, ToType>;
export {};
