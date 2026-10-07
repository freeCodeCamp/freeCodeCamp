type Fn = (...arg: any[]) => any;
type MaybePromise<T> = T | Promise<T>;
type RequiredDeep<Type, U extends Record<string, unknown> | Fn | undefined = undefined> = Type extends Fn ? Type : Type extends Record<string, any> ? {
    [Key in keyof Type]-?: NonNullable<Type[Key]> extends NonNullable<U> ? NonNullable<Type[Key]> : RequiredDeep<NonNullable<Type[Key]>, U>;
} : Type;
/**
 * @fixme Remove this once TS 5.4 is the lowest supported version.
 * Because "NoInfer" is a built-in type utility there.
 */
type NoInfer<T> = [T][T extends any ? 0 : never];

export type { MaybePromise, NoInfer, RequiredDeep };
