export type HighlightedParts = {
    value: string;
    isHighlighted: boolean;
};
export type AtLeastOne<TTarget, TMapped = {
    [Key in keyof TTarget]: Pick<TTarget, Key>;
}> = Partial<TTarget> & TMapped[keyof TMapped];
export type Expand<T> = T extends infer O ? {
    [K in keyof O]: O[K];
} : never;
export type RequiredKeys<TObject, TKeys extends keyof TObject> = Expand<Required<Pick<TObject, TKeys>> & Omit<TObject, TKeys>>;
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
/**
 * Make certain keys of an object optional.
 */
export type PartialKeys<TObj, TKeys extends keyof TObj> = Omit<TObj, TKeys> & Partial<Pick<TObj, TKeys>>;
