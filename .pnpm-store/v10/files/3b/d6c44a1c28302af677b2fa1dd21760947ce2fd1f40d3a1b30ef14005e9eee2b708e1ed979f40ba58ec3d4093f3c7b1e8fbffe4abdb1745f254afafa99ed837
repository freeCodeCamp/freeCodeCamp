/**
 * Lazy String holder for JSON typed contents.
 */
interface StringWrapper {
    new (arg: any): String;
}
/**
 * Because of https://github.com/microsoft/tslib/issues/95,
 * TS 'extends' shim doesn't support extending native types like String.
 * So here we create StringWrapper that duplicate everything from String
 * class including its prototype chain. So we can extend from here.
 *
 * @internal
 */
export declare const StringWrapper: StringWrapper;
/**
 * @internal
 */
export declare class LazyJsonString extends StringWrapper {
    deserializeJSON(): any;
    toJSON(): string;
    static fromObject(object: any): LazyJsonString;
}
export {};
