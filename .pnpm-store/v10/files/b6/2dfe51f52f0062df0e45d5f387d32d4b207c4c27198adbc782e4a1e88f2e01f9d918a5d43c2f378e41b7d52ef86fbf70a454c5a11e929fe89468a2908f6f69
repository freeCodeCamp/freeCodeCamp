import _ = require("../index");
import { uniqueSymbol } from "./common";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assign
         */
        assign<TObject>(object: TObject): TObject;
        /**
         * @see _.assign
         */
        assign(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.assign
         */
        assign<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assign
         */
        assign(): Object<T>;
        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assign
         */
        assign<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assign
         */
        assign(): ObjectChain<T>;
        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignIn
         */
        assignIn<TObject>(object: TObject): TObject;
        /**
         * @see _.assignIn
         */
        assignIn<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignIn
         */
        assignIn(): Object<T>;
        /**
         * @see _.assignIn
         */
        assignIn<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignIn
         */
        assignIn(): ObjectChain<T>;
        /**
         * @see _.assignIn
         */
        assignIn(...otherArgs: any[]): ObjectChain<any>;
    }
    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;
    interface LoDashStatic {
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        assignInWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject>(object: TObject): TObject;
        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignInWith
         */
        assignInWith(): Object<T>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignInWith
         */
        assignInWith(): ObjectChain<T>;
        /**
         * @see _.assignInWith
         */
        assignInWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.assign` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignWith
         */
        assignWith<TObject>(object: TObject): TObject;
        /**
         * @see _.assignWith
         */
        assignWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignWith
         */
        assignWith(): Object<T>;
        /**
         * @see _.assignWith
         */
        assignWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignWith
         */
        assignWith(): ObjectChain<T>;
        /**
         * @see _.assignWith
         */
        assignWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, ...props: PropertyPath[]): T[];
        /**
         * @see _.at
         */
        at<T extends object>(object: T | null | undefined, ...props: Array<Many<keyof T>>): Array<T[keyof T]>;
    }
    interface Object<T> {
        /**
         * @see _.at
         */
        at(...props: Array<Many<keyof T>>): Collection<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.at
         */
        at(...props: PropertyPath[]): Collection<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.at
         */
        at(...props: Array<Many<keyof T>>): CollectionChain<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.at
         */
        at(...props: PropertyPath[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates an object that inherits from the given prototype object. If a properties object is provided its own
         * enumerable properties are assigned to the created object.
         *
         * @param prototype The object to inherit from.
         * @param properties The properties to assign to the object.
         * @return Returns the new object.
         */
        create<T extends object, U extends object>(prototype: T, properties?: U): T & U;
    }
    interface Object<T> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): Object<T & U>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): ObjectChain<T & U>;
    }
    interface LoDashStatic {
        /**
         * Assigns own enumerable properties of source object(s) to the destination object for all destination
         * properties that resolve to undefined. Once a property is set, additional values of the same property are
         * ignored.
         *
         * Note: This method mutates object.
         *
         * @param object The destination object.
         * @param sources The source objects.
         * @return The destination object.
         */
        defaults<TObject, TSource>(object: TObject, source: TSource): NonNullable<TSource & TObject>;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): NonNullable<TSource2 & TSource1 & TObject>;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): NonNullable<TSource3 & TSource2 & TSource1 & TObject>;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & TObject>;
        /**
         * @see _.defaults
         */
        defaults<TObject>(object: TObject): NonNullable<TObject>;
        /**
         * @see _.defaults
         */
        defaults(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(source: TSource): Object<NonNullable<TSource & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<NonNullable<TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<NonNullable<TSource3 & TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults(): Object<NonNullable<T>>;
        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(source: TSource): ObjectChain<NonNullable<TSource & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<NonNullable<TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<NonNullable<TSource3 & TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & T>>;
        /**
         * @see _.defaults
         */
        defaults(): ObjectChain<NonNullable<T>>;
        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         */
        defaultsDeep(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.defaultsDeep
         */
        defaultsDeep(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.defaultsDeep
         */
        defaultsDeep(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.toPairs
         */
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.entries
         */
        entries(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        /**
         * @see _.entries
         */
        entries(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.entries
         */
        entries(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.entries
         */
        entries(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.entries
         */
        entries(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.entriesIn
         */
        entriesIn(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.extend
         */
        extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.extend
         */
        extend<TObject>(object: TObject): TObject;
        /**
         * @see _.extend
         */
        extend<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.extend
         */
        extend<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extend
         */
        extend(): Object<T>;
        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.extend
         */
        extend<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extend
         */
        extend(): ObjectChain<T>;
        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.extendWith
         */
        extendWith<TObject>(object: TObject): TObject;
        /**
         * @see _.extendWith
         */
        extendWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extendWith
         */
        extendWith(): Object<T>;
        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extendWith
         */
        extendWith(): ObjectChain<T>;
        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the key of the first element predicate returns truthy for
         * instead of the element itself.
         *
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @return Returns the key of the matched element, else undefined.
         */
        findKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey(predicate?: ObjectIteratee<TValue>): StringNullableChain;
    }
    interface LoDashStatic {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
         *
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @return Returns the key of the matched element, else undefined.
         */
        findLastKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey(predicate?: ObjectIteratee<TValue>): StringNullableChain;
    }
    interface LoDashStatic {
        /**
         * Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The
         * iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
         * exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forIn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forIn
         */
        forIn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * This method is like _.forIn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forInRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forInRight
         */
        forInRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forOwn
         */
        forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * Creates an array of function property names from own enumerable properties
         * of `object`.
         *
         * @category Object
         * @param object The object to inspect.
         * @returns Returns the new array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functions(new Foo);
         * // => ['a', 'b']
         */
        functions(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of function property names from own and inherited
         * enumerable properties of `object`.
         *
         * @category Object
         * @param object The object to inspect.
         * @returns Returns the new array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functionsIn(new Foo);
         * // => ['a', 'b', 'c']
         */
        functionsIn<T extends {}>(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): CollectionChain<string>;
    }

    type GetFieldTypeOfArrayLikeByKey<T extends unknown[], K> =
        K extends number ? T[K]
        : K extends `${infer N extends number}` ? T[N]
        : K extends keyof T ? T[K] : undefined;

    type GetFieldTypeOfStringByKey<T extends string, K> =
        K extends number ? T[K]
        : K extends `${infer N extends number}` ? T[N]
        : K extends keyof T ? T[K]
        : undefined;

    type GetFieldTypeOfNarrowedByKey<T, K> =
        T extends unknown[] ? GetFieldTypeOfArrayLikeByKey<T, K>
        : T extends string ? GetFieldTypeOfStringByKey<T, K>
        : K extends keyof T ? T[K]
        : K extends number
            ? `${K}` extends keyof T ? T[`${K}`] : undefined
        : K extends `${infer N extends number}`
            ? N extends keyof T ? T[N] : undefined
        : undefined;

    /** Internal. Assumes P is a dot-delimited path. */
    type GetFieldTypeOfNarrowedByDotPath<T, P> =
        P extends `${infer L}.${infer R}`
        ? GetFieldType<GetFieldTypeOfNarrowedByKey<T, L>, R, 'DotPath'>
        : GetFieldTypeOfNarrowedByKey<T, P>;

    /** Internal. This is a piece of GetFieldTypeOfNarrowedByLKR logic,
     *  assuming that Lc isn't to be ignored, and does not end with dot. */
    type GetFieldTypeOfNarrowedByLcKR<T, Lc, K, R> =
        '' extends R
            ? GetFieldType<GetFieldTypeOfNarrowedByDotPath<T, Lc>, K, 'Key'>
        : R extends `.${infer Rc}`
            ? GetFieldType<GetFieldType<GetFieldTypeOfNarrowedByDotPath<T, Lc>, K, 'Key'>, Rc>
            : GetFieldType<GetFieldType<GetFieldTypeOfNarrowedByDotPath<T, Lc>, K, 'Key'>, R>

    /** Internal. Assumes T has been narrowed; L is a dot-delimited path,
     *  and should be ignored if an empty string; K is a key name; and R is
     *  a dot-delimetered path, to be ignored if an empty string. Also if
     *  L has a tail dot, or R has a front dot, these dots should be discarded,
     *  however when L or R is just a dot, they should be interpreted as empty
     *  key name (rather than ignored). */
    type GetFieldTypeOfNarrowedByLKR<T, L, K, R> =
        '' extends L
        ? '' extends R
            ? GetFieldTypeOfNarrowedByKey<T, K>
            : R extends `.${infer Rc}`
                ? GetFieldType<GetFieldTypeOfNarrowedByKey<T, K>, Rc>
                : GetFieldType<GetFieldTypeOfNarrowedByKey<T, K>, R>
        : L extends `${infer Lc}.`
            ? GetFieldTypeOfNarrowedByLcKR<T, Lc, K, R>
            : GetFieldTypeOfNarrowedByLcKR<T, L, K, R>

    /** Internal. Assumes T has been narrowed. */
    type GetFieldTypeOfNarrowed<T, X, XT extends 'DotPath' | 'Key' | 'Path'> =
        XT extends 'Key' ? GetFieldTypeOfNarrowedByKey<T, X>
        : XT extends 'DotPath' ? GetFieldTypeOfNarrowedByDotPath<T, X>
        : X extends `${infer L}['${infer K}']${infer R}`
            ? GetFieldTypeOfNarrowedByLKR<T, L, K, R>
        : X extends `${infer L}["${infer K}"]${infer R}`
            ? GetFieldTypeOfNarrowedByLKR<T, L, K, R>
        : X extends `${infer L}[${infer K}]${infer R}`
            ? GetFieldTypeOfNarrowedByLKR<T, L, K, R>
        : GetFieldTypeOfNarrowedByDotPath<T, X>;

    /** Internal. Assumes T has been narrowed to an object type. */
    type GetFieldTypeOfObject<T, X, XT extends 'DotPath' | 'Key' | 'Path'> =
        Extract<T, unknown[]> extends never
        ? GetFieldTypeOfNarrowed<T, X, XT>
        : GetFieldTypeOfNarrowed<Exclude<T, unknown[]>, X, XT>
            | GetFieldTypeOfNarrowed<Extract<T, unknown[]>, X, XT>;

    /** Internal. Assumes T has been narrowed to a primitive type. */
    type GetFieldTypeOfPrimitive<T, X, XT extends 'DotPath' | 'Key' | 'Path'> =
        Extract<T, string> extends never
        ? T extends never ? never : undefined
        : (Exclude<T, string> extends never ? never : undefined)
            | GetFieldTypeOfNarrowed<Extract<T, string>, X, XT>;

    /**
     * Deduces the type of value at the path P of type T,
     * so that _.get<T, P>(t: T, p: P): GetFieldType<T, P>.
     * XT specifies the exact meaning of X:
     * - 'Path' (default) - X is a path type to be fully parsed;
     * - 'DotPath - X is a dot-delimitered path, without square (indexing) brackets;
     * - 'Key' - X is a simple key, and needs no parsing.
     */
    type GetFieldType<T, X, XT extends 'DotPath' | 'Key' | 'Path' = 'Path'> =
        Extract<T, object> extends never
        ? GetFieldTypeOfPrimitive<T, X, XT>
        : GetFieldTypeOfPrimitive<Exclude<T, object>, X, XT>
            | GetFieldTypeOfObject<Extract<T, object>, X, XT>;

    interface LoDashStatic {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(object: TObject | null | undefined, path: TKey | [TKey]): TObject[TKey] | undefined;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject | null | undefined, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2];
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>>(object: TObject | null | undefined, path: [TKey1, TKey2]): NonNullable<TObject[TKey1]>[TKey2] | undefined;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>, TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2], defaultValue: TDefault): Exclude<NonNullable<TObject[TKey1]>[TKey2], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3];
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>, TKey3 extends keyof NonNullable<NonNullable<TObject[TKey1]>[TKey2]>>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3]): NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3] | undefined;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>, TKey3 extends keyof NonNullable<NonNullable<TObject[TKey1]>[TKey2]>, TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3], defaultValue: TDefault): Exclude<NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4];
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>, TKey3 extends keyof NonNullable<NonNullable<TObject[TKey1]>[TKey2]>, TKey4 extends keyof NonNullable<NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3]>>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4]): NonNullable<NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3]>[TKey4] | undefined;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof NonNullable<TObject[TKey1]>, TKey3 extends keyof NonNullable<NonNullable<TObject[TKey1]>[TKey2]>, TKey4 extends keyof NonNullable<NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3]>, TDefault>(object: TObject | null | undefined, path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): Exclude<NonNullable<NonNullable<NonNullable<TObject[TKey1]>[TKey2]>[TKey3]>[TKey4], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<T>(object: NumericDictionary<T>, path: number): T;
        /**
         * @see _.get
         */
        get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined;
        /**
         * @see _.get
         */
        get<T, TDefault>(object: NumericDictionary<T> | null | undefined, path: number, defaultValue: TDefault): T | TDefault;
        /**
         * @see _.get
         */
        get<TDefault>(object: null | undefined, path: PropertyPath, defaultValue: TDefault): TDefault;
        /**
         * @see _.get
         */
        get(object: null | undefined, path: PropertyPath): undefined;
        /**
         * @see _.get
         */
        get<TObject, TPath extends string>(data: TObject, path: TPath): string extends TPath ? any : GetFieldType<TObject, TPath>;
        /**
         * @see _.get
         */
        get<TObject, TPath extends string, TDefault = GetFieldType<TObject, TPath>>(data: TObject, path: TPath, defaultValue: TDefault): Exclude<GetFieldType<TObject, TPath>, null | undefined> | TDefault;
         /**
         * @see _.get
         */
         get(object: any, path: PropertyPath, defaultValue?: any): any;
    }
    interface String {
        /**
         * @see _.get
         */
        get(path: number | number[]): string;
        /**
         * @see _.get
         */
        get(path: number | number[], defaultValue: string): string;
    }
    interface Object<T> {
        /**
         * @see _.get
         */
        get<TKey extends keyof T>(path: TKey | [TKey]): T[TKey];
        /**
         * @see _.get
         */
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): Exclude<T[TKey], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(path: [TKey1, TKey2]): T[TKey1][TKey2];
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TDefault>(path: [TKey1, TKey2], defaultValue: TDefault): Exclude<T[TKey1][TKey2], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(path: [TKey1, TKey2, TKey3]): T[TKey1][TKey2][TKey3];
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TDefault>(path: [TKey1, TKey2, TKey3], defaultValue: TDefault): Exclude<T[TKey1][TKey2][TKey3], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TKey4 extends keyof T[TKey1][TKey2][TKey3]>(path: [TKey1, TKey2, TKey3, TKey4]): T[TKey1][TKey2][TKey3][TKey4];
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TKey4 extends keyof T[TKey1][TKey2][TKey3], TDefault>(path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<TPath extends string>(path: TPath): string extends TPath ? any : GetFieldType<T, TPath>;
        /**
         * @see _.get
         */
        get<TPath extends string, TDefault = GetFieldType<T, TPath>>(path: TPath, defaultValue: TDefault): Exclude<GetFieldType<T, TPath>, null | undefined> | TDefault;
        /**
         * @see _.get
         */
        get(path: PropertyPath, defaultValue?: any): any;
    }
    interface Collection<T> {
        /**
         * @see _.get
         */
        get(path: number): T;
        /**
         * @see _.get
         */
        get<TDefault>(path: number, defaultValue: TDefault): T | TDefault;
    }
    interface StringChain {
        /**
         * @see _.get
         */
        get(path: number | number[]): StringChain;
        /**
         * @see _.get
         */
        get(path: number | number[], defaultValue: string): StringChain;
    }
    interface StringNullableChain {
        /**
         * @see _.get
         */
        get(path: number | number[]): StringNullableChain;
        /**
         * @see _.get
         */
        get(path: number | number[], defaultValue: string): StringChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.get
         */
        get<TKey extends keyof T>(path: TKey | [TKey]): ExpChain<T[TKey]>;
        /**
         * @see _.get
         */
        get<TKey extends keyof T>(path: TKey | [TKey], defaultValue: never[]): T[TKey] extends any[] ? ExpChain<Exclude<T[TKey], undefined>> : ExpChain<Exclude<T[TKey], undefined> | never[]>;
        /**
         * @see _.get
         */
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): ExpChain<Exclude<T[TKey], undefined> | TDefault>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(path: [TKey1, TKey2]): ExpChain<T[TKey1][TKey2]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1]>(path: [TKey1, TKey2], defaultValue: never[]): T[TKey1][TKey2] extends any[] ? ExpChain<Exclude<T[TKey1][TKey2], undefined>> : ExpChain<Exclude<T[TKey1][TKey2], undefined> | never[]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TDefault>(path: [TKey1, TKey2], defaultValue: TDefault): ExpChain<Exclude<T[TKey1][TKey2], undefined> | TDefault>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(path: [TKey1, TKey2, TKey3]): ExpChain<T[TKey1][TKey2][TKey3]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2]>(path: [TKey1, TKey2, TKey3], defaultValue: never[]): T[TKey1][TKey2][TKey3] extends any[] ? ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined>> : ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined> | never[]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TDefault>(path: [TKey1, TKey2, TKey3], defaultValue: TDefault): ExpChain<Exclude<T[TKey1][TKey2][TKey3], undefined> | TDefault>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TKey4 extends keyof T[TKey1][TKey2][TKey3]>(path: [TKey1, TKey2, TKey3, TKey4]): ExpChain<T[TKey1][TKey2][TKey3][TKey4]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TKey4 extends keyof T[TKey1][TKey2][TKey3]>(path: [TKey1, TKey2, TKey3, TKey4], defaultValue: never[]): T[TKey1][TKey2][TKey3][TKey4] extends any[] ? ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined>> : ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | never[]>;
        /**
         * @see _.get
         */
        get<TKey1 extends keyof T, TKey2 extends keyof T[TKey1], TKey3 extends keyof T[TKey1][TKey2], TKey4 extends keyof T[TKey1][TKey2][TKey3], TDefault>(path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): ExpChain<Exclude<T[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault>;
        /**
         * @see _.get
         */
        get<TPath extends string>(path: TPath): string extends TPath ? LoDashExplicitWrapper<any> : ExpChain<GetFieldType<T, TPath>>;
        /**
         * @see _.get
         */
        get<TPath extends string, TDefault = GetFieldType<T, TPath>>(path: TPath, defaultValue: TDefault): ExpChain<Exclude<GetFieldType<T, TPath>, null | undefined> | TDefault>;
        /**
         * @see _.get
         */
        get(path: PropertyPath, defaultValue?: any): LoDashExplicitWrapper<any>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.get
         */
        get(path: number): ExpChain<T>;
        /**
         * @see _.get
         */
        get<TDefault>(path: number, defaultValue: TDefault): ExpChain<T | TDefault>;
    }
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        has<T, K extends PropertyName>(object: T, path: K): object is T & { [P in K]: P extends keyof T ? T[P] : Record<string, unknown> extends T ? T[keyof T] : unknown} & {[uniqueSymbol]: unknown};
        has<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b.c');
         * // => true
         *
         * _.hasIn(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        hasIn<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
         * subsequent values overwrite property assignments of previous values unless multiValue is true.
         *
         * @param object The object to invert.
         * @param multiValue Allow multiple values per key.
         * @return Returns the new inverted object.
         */
        invert(object: object): Dictionary<string>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): Object<Dictionary<string>>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): ObjectChain<Dictionary<string>>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        invertBy<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, interatee?: ValueIteratee<T>): Dictionary<string[]>;
        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(object: T | null | undefined, interatee?: ValueIteratee<T[keyof T]>): Dictionary<string[]>;
    }
    interface String {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>;
    }
    interface Collection<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T>): Object<Dictionary<string[]>>;
    }
    interface Object<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<string[]>>;
    }
    interface StringChain {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface StringNullableChain {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<string[]>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<string[]>>;
    }
    interface LoDashStatic {
        /**
        * Invokes the method at path of object.
        * @param object The object to query.
        * @param path The path of the method to invoke.
        * @param args The arguments to invoke the method with.
         */
        invoke(object: any, path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invoke
         */
        invoke(path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invoke
         */
        invoke(path: PropertyPath, ...args: any[]): LoDashExplicitWrapper<any>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        keys(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        keysIn(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new mapped object.
         */
        mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>;
        /**
         * @see _.mapKeys
         */
        mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ListIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ObjectIteratee<T>): Object<Dictionary<T[keyof T]>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ListIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ObjectIteratee<T>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
        /**
        * Creates an object with the same keys as object and values generated by running each own
        * enumerable property of object through iteratee. The iteratee function is
        * invoked with three arguments: (value, key, object).
        *
        * @param object The object to iterate over.
        * @param iteratee  The function invoked per iteration.
        * @return Returns the new mapped object.
         */
        mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>;
        /**
         * @see _.mapValues
         */
        mapValues<T, TResult>(array: T[], callback: ArrayIterator<T, TResult>): NumericDictionary<TResult>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(obj: T | null | undefined, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult };
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: object): Dictionary<boolean>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean };
        /**
         * @see _.mapValues
         */
        mapValues<T, TKey extends keyof T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: TKey): Dictionary<T[TKey]>;
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: string): Dictionary<any>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any };
        /**
         * @see _.mapValues
         */
        mapValues(obj: string | null | undefined): NumericDictionary<string>;
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T): T;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined): PartialObject<T>;
    }
    interface String {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: StringIterator<TResult>): Object<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<NumericDictionary<string>>;
    }
    interface Collection<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ArrayIterator<T, TResult>): NumericDictionary<TResult>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T>(iteratee: TKey): Object<Dictionary<T[TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): Object<Dictionary<boolean>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): Object<Dictionary<any>>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): Object<{ [P in keyof T]: TResult }>;
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): Object<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): Object<{ [P in keyof T]: boolean }>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): Object<Dictionary<T[keyof T][TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): Object<{ [P in keyof T]: any }>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<T>;
    }
    interface StringChain {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<NumericDictionary<string>>;
    }
    interface StringNullableChain {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<NumericDictionary<string>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ArrayIterator<T, TResult>): ObjectChain<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T>(iteratee: TKey): ObjectChain<Dictionary<T[TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): ObjectChain<Dictionary<boolean>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): ObjectChain<Dictionary<any>>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): ObjectChain<{ [P in keyof T]: TResult }>;
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ObjectChain<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): ObjectChain<{ [P in keyof T]: boolean }>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ObjectChain<Dictionary<T[keyof T][TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): ObjectChain<{ [P in keyof T]: any }>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<T>;
    }
    interface LoDashStatic {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [source] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.merge
         */
        merge(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.merge
         */
        merge(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.merge
         */
        merge(...otherArgs: any[]): ObjectChain<any>;
    }
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any, stack: any): any; }["bivariantHack"];
    // TODO: Probably should just put all these methods on Object and forget about it.
    // oh, except for Collection<any> I GUESS
    interface LoDashStatic {
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with six arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param source The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         *     return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.mergeWith(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.mergeWith
         */
        mergeWith(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Object<T & TSource>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.mergeWith
         */
        mergeWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.mergeWith
         */
        mergeWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        omit<T extends object, K extends PropertyName[]>(
            object: T | null | undefined,
            ...paths: K
        ): Pick<T, Exclude<keyof T, K[number]>>;
        /**
         * @see _.omit
         */
        omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
        /**
         * @see _.omit
         */
        omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.omit
         */
        omit<K extends keyof T>(...paths: Array<Many<K>>): Object<Omit<T, K>>;
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName | IterateeShorthand<T>>>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.omit
         */
        omit<K extends keyof T>(...paths: Array<Many<K>>): ObjectChain<Omit<T, K>>;
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        /**
         * @see _.omitBy
         */
        omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
        /**
         * @see _.pick
         */
        pick<T>(object: T | null | undefined, ...props: Array<Many<PropertyPath>>): PartialObject<T>;
    }
    interface Object<T> {
        /**
         * @see _.pick
         */
        pick<U extends keyof T>(...props: Array<Many<U>>): Object<Pick<T, U>>;
        /**
         * @see _.pick
         */
        pick(...props: Array<Many<PropertyPath>>): Object<PartialObject<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.pick
         */
        pick<U extends keyof T>(...props: Array<Many<U>>): ObjectChain<Pick<T, U>>;
        /**
         * @see _.pick
         */
        pick(...props: Array<Many<PropertyPath>>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
        /**
         * @see _.pickBy
         */
        pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        /**
         * @see _.pickBy
         */
        pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Object<Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): Object<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): Object<T extends Dictionary<unknown> ? Dictionary<T[keyof T]> : T extends NumericDictionary<unknown> ? NumericDictionary<T[keyof T]> : PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ObjectChain<Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): ObjectChain<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ObjectChain<T extends Dictionary<unknown> ? Dictionary<T[keyof T]> : T extends NumericDictionary<unknown> ? NumericDictionary<T[keyof T]> : PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
         * of its parent object and its result is returned.
         *
         * @param object The object to query.
         * @param path The path of the property to resolve.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        result<TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): ExpChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
         * missing index properties while objects are created for all other missing properties. Use _.setWith to
         * customize path creation.
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @return Returns object.
         */
        set<T extends object>(object: T, path: PropertyPath, value: any): T;
        /**
         * @see _.set
         */
        set<TResult>(object: object, path: PropertyPath, value: any): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(path: PropertyPath, value: any): this;
        /**
         * @see _.set
         */
        set<TResult>(path: PropertyPath, value: any): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(path: PropertyPath, value: any): this;
        /**
         * @see _.set
         */
        set<TResult>(path: PropertyPath, value: any): ExpChain<TResult>;
    }
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;
    interface LoDashStatic {
        /**
         * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
         * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
         * invoked with three arguments: (nsValue, key, nsObject).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @param customizer The function to customize assigned values.
         * @return Returns object.
         */
        setWith<T extends object>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): T;
        /**
         * @see _.setWith
         */
        setWith<T extends object, TResult>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        /**
         * @see _.setWith
         */
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        /**
         * @see _.setWith
         */
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ExpChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.toPairs
         */
        toPairs(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.toPairsIn
         */
        toPairsIn(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(object: readonly T[], iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): TResult;
        /**
         * @see _.transform
         */
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, string, TResult>, accumulator?: TResult): TResult;
        /**
         * @see _.transform
         */
        transform<T extends object, TResult>(object: T, iteratee: MemoVoidDictionaryIterator<T[keyof T], keyof T, TResult>, accumulator?: TResult): TResult;
        /**
         * @see _.transform
         */
        transform(object: any[]): any[];
        /**
         * @see _.transform
         */
        transform(object: object): Dictionary<any>;
    }
    interface Collection<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ImpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): Collection<any>;
    }
    interface Object<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], string, TResult>, accumulator?: TResult): ImpChain<TResult>;
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], keyof T, TResult>, accumulator?: TResult): ImpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): ImpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ExpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): CollectionChain<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], string, TResult>, accumulator?: TResult): ExpChain<TResult>;
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], keyof T, TResult>, accumulator?: TResult): ExpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): ExpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface LoDashStatic {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        unset(object: any, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): Primitive<boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        update(object: object, path: PropertyPath, updater: (value: any) => any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(path: PropertyPath, updater: (value: any) => any): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(path: PropertyPath, updater: (value: any) => any): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * This method is like `_.update` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @since 4.6.0
         * @category Object
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.updateWith(object, '[0][1]', _.constant('a'), Object);
         * // => { '0': { '1': 'a' } }
         */
        updateWith<T extends object>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): T;
        /**
         * @see _.updateWith
         */
        updateWith<T extends object, TResult>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface Object<T> {
        /**
         * @see _.updateWith
         */
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        /**
         * @see _.updateWith
         */
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.updateWith
         */
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        /**
         * @see _.updateWith
         */
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): ObjectChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        /**
         * @see _.values
         */
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        /**
         * @see _.values
         */
        values(object: any): any[];
    }
    interface String {
        /**
         * @see _.values
         */
        values(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.values
         */
        values(): Collection<T[keyof T]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.values
         */
        values(): CollectionChain<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.values
         */
        values(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.values
         */
        values(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.valuesIn
         */
        valuesIn(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.valuesIn
         */
        valuesIn(): CollectionChain<string>;
    }
    interface StringNullableChain {
        /**
         * @see _.valuesIn
         */
        valuesIn(): CollectionChain<string>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn(): CollectionChain<T[keyof T]>;
    }
}
