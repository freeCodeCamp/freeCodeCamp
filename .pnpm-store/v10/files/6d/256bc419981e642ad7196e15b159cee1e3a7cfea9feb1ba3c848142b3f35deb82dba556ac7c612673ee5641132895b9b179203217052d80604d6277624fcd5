import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
         * iteratee is invoked with one argument: (value).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the composed aggregate object.
         */
        countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>;
        /**
         * @see _.countBy
         */
        countBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<number>;
    }
    interface Object<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<number>>;
    }
    interface String {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<string>): Object<Dictionary<number>>;
    }
    interface Collection<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T>): Object<Dictionary<number>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<number>>;
    }
    interface StringChain {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>;
    }
    interface StringNullableChain {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<number>>;
    }
    interface LoDashStatic {
        /**
         * @see _.forEach
         */
        each: LoDashStatic['forEach'];
    }
    interface String {
        /**
         * @see _.each
         */
        each: String['forEach'];
    }
    interface Collection<T> {
        /**
         * @see _.each
         */
        each: Collection<T>['forEach'];
    }
    interface Object<T> {
        /**
         * @see _.each
         */
        each: Object<T>['forEach'];
    }
    interface StringChain {
        /**
         * @see _.each
         */
        each: StringChain['forEach'];
    }
    interface StringNullableChain {
        /**
         * @see _.each
         */
        each: StringNullableChain['forEach'];
    }
    interface CollectionChain<T> {
        /**
         * @see _.each
         */
        each: CollectionChain<T>['forEach'];
    }
    interface ObjectChain<T> {
        /**
         * @see _.each
         */
        each: ObjectChain<T>['forEach'];
    }
    interface LoDashStatic {
        /**
         * @see _.forEachRight
         */
        eachRight: LoDashStatic["forEachRight"];
    }
    interface String {
        /**
         * @see _.eachRight
         */
        eachRight: String['forEachRight'];
    }
    interface Collection<T> {
        /**
         * @see _.eachRight
         */
        eachRight: Collection<T>['forEachRight'];
    }
    interface Object<T> {
        /**
         * @see _.eachRight
         */
        eachRight: Object<T>['forEachRight'];
    }
    interface StringChain {
        /**
         * @see _.eachRight
         */
        eachRight: StringChain['forEachRight'];
    }
    interface StringNullableChain {
        /**
         * @see _.eachRight
         */
        eachRight: StringNullableChain['forEachRight'];
    }
    interface CollectionChain<T> {
        /**
         * @see _.eachRight
         */
        eachRight: CollectionChain<T>['forEachRight'];
    }
    interface ObjectChain<T> {
        /**
         * @see _.eachRight
         */
        eachRight: ObjectChain<T>['forEachRight'];
    }
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns true if all elements pass the predicate check, else false.
         */
        every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        /**
         * @see _.every
         */
        every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.every
         */
        every(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        /**
         * @see _.every
         */
        every(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        /**
         * @see _.every
         */
        every(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.every
         */
        every(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
         * predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns the new filtered array.
         */
        filter(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        /**
         * @see _.filter
         */
        filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[];
        /**
         * @see _.filter
         */
        filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>): S[];
        /**
         * @see _.filter
         */
        filter<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.filter
         */
        filter(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.filter
         */
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): Collection<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.filter
         */
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): Collection<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.filter
         */
        filter(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.filter
         */
        filter(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.filter
         */
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): CollectionChain<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.filter
         */
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): CollectionChain<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning the first element predicate returns truthy for.
         * The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the matched element, else undefined.
         */
        find<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        /**
         * @see _.find
         */
        find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        /**
         * @see _.find
         */
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.find
         */
        find< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.find
         */
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.find
         */
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.find
         */
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.find except that it iterates over elements of a collection from
         * right to left.
         * @param collection Searches for a value in this list.
         * @param predicate The function called per iteration.
         * @param fromIndex The index to search from.
         * @return The found element, else undefined.
         */
        findLast<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        /**
         * @see _.findLast
         */
        findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        flatMap<T>(collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined): T[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined): any[];
        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>>): TResult[];
        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, Many<TResult>>): TResult[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined, iteratee: string): any[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        /**
         * @see _.flatMap
         */
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMap
         */
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.flatMap
         */
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDeep([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        flatMapDeep<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(collection: object | null | undefined, iteratee: string): any[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results up to `depth` times.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @param [depth=1] The maximum recursion depth.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDepth([1, 2], duplicate, 2);
         * // => [[1, 1], [2, 2]]
         */
        flatMapDepth<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(collection: object | null | undefined, iteratee: string, depth?: number): any[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(collection: object | null | undefined, iteratee: object, depth?: number): boolean[];
    }
    interface String {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked with three arguments:
         * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
         * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
         *
         * @alias _.each
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         */
        forEach<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        /**
         * @see _.forEach
         */
        forEach(collection: string, iteratee?: StringIterator<any>): string;
        /**
         * @see _.forEach
         */
        forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        /**
         * @see _.forEach
         */
        forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forEach
         */
        forEach<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        /**
         * @see _.forEach
         */
        forEach<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        /**
         * @see _.forEach
         */
        forEach<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        /**
         * @see _.forEach
         */
        forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: StringIterator<any>): StringChain;
    }
    interface StringNullableChain {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: StringIterator<any>): StringNullableChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         */
        forEachRight<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        /**
         * @see _.forEachRight
         */
        forEachRight(collection: string, iteratee?: StringIterator<any>): string;
        /**
         * @see _.forEachRight
         */
        forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forEachRight
         */
        forEachRight<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        /**
         * @see _.forEachRight
         */
        forEachRight<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        /**
         * @see _.forEachRight
         */
        forEachRight<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: StringIterator<any>): StringChain;
    }
    interface StringNullableChain {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: StringIterator<any>): StringNullableChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
         * key. The iteratee is invoked with one argument: (value).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the composed aggregate object.
         */
        groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>;
        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<Array<T[keyof T]>>;
    }
    interface String {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>;
    }
    interface Collection<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T>): Object<Dictionary<T[]>>;
    }
    interface Object<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<Array<T[keyof T]>>>;
    }
    interface StringChain {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface StringNullableChain {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<T[]>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<Array<T[keyof T]>>>;
    }
    interface LoDashStatic {
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        includes<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number): boolean;
    }
    interface Object<T> {
        /**
         * @see _.includes
         */
        includes(target: T[keyof T], fromIndex?: number): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.includes
         */
        includes(target: T, fromIndex?: number): boolean;
    }
    interface String {
        /**
         * @see _.includes
         */
        includes(target: string, fromIndex?: number): boolean;
    }
    interface ObjectChain<T> {
        /**
         * @see _.includes
         */
        includes(target: T[keyof T], fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.includes
         */
        includes(target: T, fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface StringChain {
        /**
         * @see _.includes
         */
        includes(target: string, fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
        * Invokes the method named by methodName on each element in the collection returning
        * an array of the results of each invoked method. Additional arguments will be provided
        * to each invoked method. If methodName is a function it will be invoked for, and this
        * bound to, each element in the collection.
        * @param collection The collection to iterate over.
        * @param methodName The name of the method to invoke.
        * @param args Arguments to invoke the method with.
         */
        invokeMap(collection: object | null | undefined, methodName: string, ...args: any[]): any[];
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(collection: object | null | undefined, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invokeMap
         */
        invokeMap(methodName: string, ...args: any[]): Collection<any>;
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): Collection<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invokeMap
         */
        invokeMap(methodName: string, ...args: any[]): CollectionChain<any>;
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): CollectionChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the last element responsible for generating the key. The
         * iteratee function is invoked with one argument: (value).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the composed aggregate object.
         */
        keyBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>;
        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Dictionary<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Object<Dictionary<string>>;
    }
    interface Collection<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Object<Dictionary<T[keyof T]>>;
    }
    interface StringChain {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>;
    }
    interface StringNullableChain {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of values by running each element in collection through iteratee. The iteratee is
         * invoked with three arguments: (value, index|key, collection).
         *
         * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
         * _.reject, and _.some.
         *
         * The guarded methods are:
         * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
         * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
         * sample, some, sum, uniq, and words
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new mapped array.
         */
        map<T extends readonly [unknown, ...unknown[]], TResult>(collection: T, iteratee: TupleIterator<T, TResult>): { [K in keyof T]: TResult };
        /**
         * @see _.map
         */
        map<T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        /**
         * @see _.map
         */
        map<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T, K extends keyof T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: K): Array<T[K]>;
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string): any[];
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object): boolean[];
    }

    interface String {
        /**
         * @see _.map
         */
        map<TResult>(iteratee: StringIterator<TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T>(key: K): Collection<T[K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ListIterator<T, TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): Collection<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.map
         */
        map(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T[keyof T]>(key: K): Collection<T[keyof T][K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ObjectIterator<T, TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): Collection<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.map
         */
        map(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.map
         */
        map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.map
         */
        map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T>(key: K): CollectionChain<T[K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ListIterator<T, TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): CollectionChain<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.map
         */
        map(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T[keyof T]>(key: K): CollectionChain<T[keyof T][K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ObjectIterator<T, TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): CollectionChain<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.map
         */
        map(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): T[];
        /**
         * @see _.orderBy
         */
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): T[];
        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ListIterator<T, NotVoid> | PropertyName | PartialShallow<T>>, orders?: Many<boolean|"asc"|"desc">): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ListIterator<T, NotVoid> | PropertyName | PartialShallow<T>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
        * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
        * while the second of which contains elements predicate returns falsey for.
        * The predicate is invoked with three arguments: (value, index|key, collection).
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @return Returns the array of grouped elements.
         */
        partition<T, U extends T>(collection: List<T> | null | undefined, callback: ValueIteratorTypeGuard<T, U>): [U[], Array<Exclude<T, U>>];
        /**
         * @see _.partition
         */
        partition<T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]];
        /**
         * @see _.partition
         */
        partition<T extends object>(collection: T | null | undefined, callback: ValueIteratee<T[keyof T]>): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface String {
        /**
         * @see _.partition
         */
        partition(callback: StringIterator<NotVoid>): LoDashImplicitWrapper<[string[], string[]]>;
    }
    interface Collection<T> {
        /**
         * @see _.partition
         */
        partition<U extends T>(callback: ValueIteratorTypeGuard<T, U>): LoDashImplicitWrapper<[U[], Array<Exclude<T, U>>]>;
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T>): LoDashImplicitWrapper<[T[], T[]]>;
    }
    interface Object<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T[keyof T]>): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface StringChain {
        /**
         * @see _.partition
         */
        partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>;
    }
    interface StringNullableChain {
        /**
         * @see _.partition
         */
        partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.partition
         */
        partition<U extends T>(callback: ValueIteratorTypeGuard<T, U>): LoDashExplicitWrapper<[U[], Array<Exclude<T, U>>]>;
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T>): LoDashExplicitWrapper<[T[], T[]]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T[keyof T]>): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface LoDashStatic {
        /**
        * Reduces a collection to a value which is the accumulated result of running each
        * element in the collection through the callback, where each successive callback execution
        * consumes the return value of the previous execution. If accumulator is not provided the
        * first element of the collection will be used as the initial accumulator value. The callback
        * is invoked with four arguments: (accumulator, value, index|key, collection).
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return Returns the accumulated value.
         */
        reduce<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        /**
         * @see _.reduce
         */
        reduce<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        /**
         * @see _.reduce
         */
        reduce<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
         */
        reduceRight<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        /**
         * @see _.reduceRight
         */
        reduceRight<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        /**
         * @see _.reduceRight
         */
        reduceRight<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns the new filtered array.
         */
        reject(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        /**
         * @see _.reject
         */
        reject<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        /**
         * @see _.reject
         */
        reject<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.reject
         */
        reject(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.reject
         */
        reject(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.reject
         */
        reject(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * Gets a random element from collection.
         *
         * @param collection The collection to sample.
         * @return Returns the random element.
         */
        sample<T>(collection: readonly [T, ...T[]]): T;
        /**
         * @see _.sample
         */
        sample<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T | undefined;
        /**
         * @see _.sample
         */
        sample<T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
    }
    interface String {
        /**
         * @see _.sample
         */
        sample(): string | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.sample
         */
        sample(): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.sample
         */
        sample(): T[keyof T] | undefined;
    }
    interface StringChain {
        /**
         * @see _.sample
         */
        sample(): StringNullableChain;
    }
    interface StringNullableChain {
        /**
         * @see _.sample
         */
        sample(): StringNullableChain;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sample
         */
        sample(): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sample
         */
        sample(): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        sampleSize<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number): T[];
        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(collection: T | null | undefined, n?: number): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
         *
         * @param collection The collection to shuffle.
         * @return Returns the new shuffled array.
         */
        shuffle<T>(collection: List<T> | null | undefined): T[];
        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * Gets the size of collection by returning its length for array-like values or the number of own enumerable
         * properties for objects.
         *
         * @param collection The collection to inspect.
         * @return Returns the size of collection.
         */
        size(collection: object | string | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
         * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns true if any element passes the predicate check, else false.
         */
        some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        /**
         * @see _.some
         */
        some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.some
         */
        some(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        /**
         * @see _.some
         */
        some(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        /**
         * @see _.some
         */
        some(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.some
         */
        some(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection through each iteratee. This method
         * performs a stable sort, that is, it preserves the original sort order of
         * equal elements. The iteratees are invoked with one argument: (value).
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]]
         *  The iteratees to sort by, specified individually or in arrays.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 34 }
         * ];
         *
         * _.sortBy(users, function(o) { return o.user; });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         *
         * _.sortBy(users, ['user', 'age']);
         * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
         *
         * _.sortBy(users, 'user', function(o) {
         *   return Math.floor(o.age / 10);
         * });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        sortBy<T>(collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>>): T[];
        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(collection: T | null | undefined, ...iteratees: Array<Many<ObjectIteratee<T>>>): Array<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): CollectionChain<T[keyof T]>;
    }
}
