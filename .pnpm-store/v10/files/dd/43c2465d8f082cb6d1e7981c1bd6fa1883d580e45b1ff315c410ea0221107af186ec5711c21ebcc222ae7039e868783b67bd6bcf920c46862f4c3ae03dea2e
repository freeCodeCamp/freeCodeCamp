export interface IReadOnlyMap<T, U> {
    readonly entries: Map<T, U>['entries'];

    readonly get: Map<T, U>['get'];

    readonly has: Map<T, U>['has'];

    readonly keys: Map<T, U>['keys'];

    readonly size: Map<T, U>['size'];

    readonly values: Map<T, U>['values'];

    /*
     * The signature of forEach() differs from the signature Map's forEach() function because the callback receives a IReadOnlyMap as third
     * argument.
     */
    forEach(callback: (value: U, key: T, map: IReadOnlyMap<T, U>) => void, thisArg?: any): void;

    // @todo Symbol.iterator
}
