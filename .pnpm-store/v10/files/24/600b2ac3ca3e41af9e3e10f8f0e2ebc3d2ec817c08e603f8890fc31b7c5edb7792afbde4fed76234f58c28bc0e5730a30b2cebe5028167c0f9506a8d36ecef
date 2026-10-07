type ObjectLike = Record<PropertyKey, any>;
/**
 * Performs an Object assign using the Left and Right object types. We track this operation as it
 * creates a new GC handle per assignment.
 */
export type TAssign<Left extends ObjectLike, Right extends ObjectLike, Assigned extends ObjectLike = Omit<Left, keyof Right> & Right> = {
    [Key in keyof Assigned]: Assigned[Key];
} & {};
/**
 * Performs an Object assign using the Left and Right object types. We track this operation as it
 * creates a new GC handle per assignment.
 */
export declare function Assign<Left extends ObjectLike, Right extends ObjectLike>(left: Left, right: Right): TAssign<Left, Right>;
export {};
