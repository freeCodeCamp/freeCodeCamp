declare class InvariantError extends Error {
    readonly message: string;
    name: string;
    constructor(message: string, ...positionals: any[]);
}
interface CustomErrorConstructor {
    new (message: string): Error;
}
interface CustomErrorFactory {
    (message: string): Error;
}
declare type CustomError = CustomErrorConstructor | CustomErrorFactory;
declare type Invariant = {
    (predicate: unknown, message: string, ...positionals: any[]): asserts predicate;
    as(ErrorConstructor: CustomError, predicate: unknown, message: string, ...positionals: unknown[]): asserts predicate;
};
declare const invariant: Invariant;

declare function format(message: string, ...positionals: any[]): string;

export { CustomError, CustomErrorConstructor, CustomErrorFactory, InvariantError, format, invariant };
