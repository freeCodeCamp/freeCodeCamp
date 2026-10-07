import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         *
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): TResult | Error;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): ExpChain<TResult | Error>;
    }

    interface LoDashStatic {
        /**
         * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
         * specified as individual arguments or as arrays of method names. If no method names are provided all
         * enumerable function properties, own and inherited, of object are bound.
         *
         * Note: This method does not set the "length" property of bound functions.
         *
         * @param object The object to bind and assign the bound methods to.
         * @param methodNames The object method names to bind, specified as individual method names or arrays of
         * method names.
         * @return Returns object.
         */
        bindAll<T>(object: T, ...methodNames: Array<Many<string>>): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }

    interface LoDashStatic {
        /**
         * Creates a function that iterates over `pairs` and invokes the corresponding
         * function of the first predicate to return truthy. The predicate-function
         * pairs are invoked with the `this` binding and arguments of the created
         * function.
         *
         * @since 4.0.0
         * @category Util
         * @param pairs The predicate-function pairs.
         * @returns Returns the new composite function.
         * @example
         *
         * var func = _.cond([
         *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
         *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
         *   [_.stubTrue,                      _.constant('no match')]
         * ]);
         *
         * func({ 'a': 1, 'b': 2 });
         * // => 'matches A'
         *
         * func({ 'a': 0, 'b': 1 });
         * // => 'matches B'
         *
         * func({ 'a': '1', 'b': '2' });
         * // => 'no match'
         */
        cond<R>(pairs: Array<CondPairNullary<R>>): () => R;
        cond<T, R>(pairs: Array<CondPairUnary<T, R>>): (Target: T) => R;
    }

    type ConformsPredicateObject<T> = {
        [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any
    };
    interface LoDashStatic {
        /**
         * Creates a function that invokes the predicate properties of `source` with the corresponding
         * property values of a given object, returning true if all predicates return truthy, else false.
         */
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms(): Function<(value: ConformsPredicateObject<TValue>) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms(): FunctionChain<(value: ConformsPredicateObject<TValue>) => boolean>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        constant<T>(value: T): () => T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): Function<() => TValue>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): FunctionChain<() => TValue>;
    }

    interface LoDashStatic {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;
        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo(defaultValue: TValue): TValue;
        /**
         * @see _.defaultTo
         */
        defaultTo<TDefault>(defaultValue: TDefault): TValue extends null | undefined ? TDefault : TValue | TDefault;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo(defaultValue: TValue): ExpChain<TValue>;
        /**
         * @see _.defaultTo
         */
        defaultTo<TDefault>(defaultValue: TDefault): ExpChain<TValue extends null | undefined ? TDefault : TValue | TDefault>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that returns the result of invoking the provided functions with the this binding of the
         * created function, where each successive invocation is supplied the return value of the previous.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (...args: A) => R7;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): (...args: A) => any;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (...args: A) => R6;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (...args: A) => R5;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (...args: A) => R4;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T extends (...arg: any) => any> {
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Function<(...args: Parameters<T>) => R7>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): Function<(...args: Parameters<T>) => any>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Function<(...args: Parameters<T>) => R6>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Function<(...args: Parameters<T>) => R5>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Function<(...args: Parameters<T>) => R4>;
        /**
         * @see _.flow
         */
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): Function<(...args: Parameters<T>) => R3>;
        /**
         * @see _.flow
         */
        flow<R2>(f2: (a: ReturnType<T>) => R2): Function<(...args: Parameters<T>) => R2>;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): FunctionChain<(...args: Parameters<T>) => R7>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): FunctionChain<(...args: Parameters<T>) => any>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): FunctionChain<(...args: Parameters<T>) => R6>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): FunctionChain<(...args: Parameters<T>) => R5>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): FunctionChain<(...args: Parameters<T>) => R4>;
        /**
         * @see _.flow
         */
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): FunctionChain<(...args: Parameters<T>) => R3>;
        /**
         * @see _.flow
         */
        flow<R2>(f2: (a: ReturnType<T>) => R2): FunctionChain<(...args: Parameters<T>) => R2>;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * This method is like _.flow except that it creates a function that invokes the provided functions from right
         * to left.
         *
         * @param funcs Functions to invoke.
         * @return Returns the new function.
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R7;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R6;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R5;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R4;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R3;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T> {
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * This method returns the first argument provided to it.
         *
         * @param value Any value.
         * @return Returns value.
         */
        identity<T>(value: T): T;
        /**
         * @see _.identity
         */
        identity(): undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): this;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with the arguments of the created
         * function. If `func` is a property name the created callback returns the
         * property value for a given element. If `func` is an object the created
         * callback returns `true` for elements that contain the equivalent object properties, otherwise it returns `false`.
         *
         * @category Util
         * @param [func=_.identity] The value to convert to a callback.
         * @returns Returns the callback.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * // create custom iteratee shorthands
         * _.iteratee = _.wrap(_.iteratee, function(callback, func) {
         *   var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
         *   return !p ? callback(func) : function(object) {
         *     return (p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3]);
         *   };
         * });
         *
         * _.filter(users, 'age > 36');
         * // => [{ 'user': 'fred', 'age': 40 }]
         */
        iteratee<TFunction extends (...args: any[]) => any>(func: TFunction): TFunction;
        /**
         * @see _.iteratee
         */
        iteratee(func: symbol | number | string | object): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<T>;
    }
    interface Collection<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: object) => boolean>;
    }
    interface Object<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: T) => boolean>;
    }
    interface String {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: object) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: object) => boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: T) => boolean>;
    }
    interface StringChain {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: object) => any>;
    }
    interface StringNullableChain {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: object) => any>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that performs a deep comparison between a given object and source, returning true if the
         * given object has equivalent property values, else false.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties. For comparing a single own
         * or inherited property value see _.matchesProperty.
         *
         * @param source The object of property values to match.
         * @return Returns the new function.
         */
        matches<T>(source: T): (value: any) => boolean;
        /**
         * @see _.matches
         */
        matches<T, V>(source: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): Function<(value: V) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): FunctionChain<(value: V) => boolean>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that compares the property value of path on a given object to value.
         *
         * Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects, regexes, and
         * strings. Objects are compared by their own, not inherited, enumerable properties.
         *
         * @param path The path of the property to get.
         * @param srcValue The value to match.
         * @return Returns the new function.
         */
        matchesProperty<T>(path: PropertyPath, srcValue: T): (value: any) => boolean;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(path: PropertyPath, srcValue: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(srcValue: SrcValue): Function<(value: any) => boolean>;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): Function<(value: Value) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(srcValue: SrcValue): FunctionChain<(value: any) => boolean>;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): FunctionChain<(value: Value) => boolean>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
         * to the invoked method.
         *
         * @param path The path of the method to invoke.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        method(path: PropertyPath, ...args: any[]): (object: any) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): Function<(object: any) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): FunctionChain<(object: any) => any>;
    }

    interface LoDashStatic {
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         *
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        methodOf(object: object, ...args: any[]): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(...args: any[]): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(...args: any[]): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface MixinOptions {
        /**
         * @see _.chain
         */
        chain?: boolean | undefined;
    }
    interface LoDashStatic {
        /**
         * Adds all own enumerable function properties of a source object to the destination object. If object is a
         * function then methods are added to its prototype as well.
         *
         * Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
         * the original.
         *
         * @param object The destination object.
         * @param source The object of functions to add.
         * @param options The options object.
         * @param options.chain Specify whether the functions added are chainable.
         * @return Returns object.
         */
        mixin<TObject>(object: TObject, source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): TObject;
        /**
         * @see _.mixin
         */
        mixin<TResult>(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        /**
         * @see _.mixin
         */
        mixin(options?: MixinOptions): LoDashImplicitWrapper<LoDashStatic>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        /**
         * @see _.mixin
         */
        mixin(options?: MixinOptions): LoDashExplicitWrapper<LoDashStatic>;
    }

    interface LoDashStatic {
        /**
         * Reverts the _ variable to its previous value and returns a reference to the lodash function.
         *
         * @return Returns the lodash function.
         */
        noConflict(): typeof _;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): LoDashExplicitWrapper<typeof _>;
    }

    interface LoDashStatic {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        noop(...args: any[]): void;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): PrimitiveChain<undefined>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        nthArg(n?: number): (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes iteratees with the arguments provided to the created function and returns
         * their results.
         *
         * @param iteratees The iteratees to invoke.
         * @return Returns the new function.
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }
    interface Collection<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): Function<(...args: any[]) => TResult[]>;
    }
    interface Function<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): Function<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): FunctionChain<(...args: any[]) => TResult[]>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): FunctionChain<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that checks if all of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        overEvery<T, Result1 extends T, Result2 extends T>(...predicates: [
            (arg: T) => arg is Result1,
            (arg: T) => arg is Result2
        ]): (arg: T) => arg is Result1 & Result2;
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Collection<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>;
    }
    interface Function<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args:  TArgs[]) => boolean>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        overSome<T, Result1 extends T, Result2 extends T>(...predicates: [
            (arg: T) => arg is Result1,
            (arg: T) => arg is Result2
        ]): (arg: T) => arg is Result1 | Result2;
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Collection<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>;
    }
    interface Function<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: TArgs[]) => boolean>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): Function<(obj: TObj) => TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): FunctionChain<(obj: TObj) => TResult>;
    }

    interface LoDashStatic {
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         *
         * @param object The object to query.
         * @return Returns the new function.
         */
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashStatic {
        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         *
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @return Returns a new range array.
         */
        range(start: number, end?: number, step?: number): number[];
        /**
         * @see _.range
         */
        range(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(end?: number, step?: number): Collection<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(end?: number, step?: number): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        rangeRight(start: number, end?: number, step?: number): number[];
        /**
         * @see _.rangeRight
         */
        rangeRight(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(end?: number, step?: number): Collection<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(end?: number, step?: number): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        runInContext(context?: object): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.runInContext
         */
        runInContext(): LoDashStatic;
    }

    interface LoDashStatic {
        /**
         * This method returns a new empty array.
         *
         * @returns Returns the new empty array.
         */
        stubArray(): any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): any[];
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): CollectionChain<any>;
    }

    interface LoDashStatic {
        /**
         * This method returns `false`.
         *
         * @returns Returns `false`.
         */
        stubFalse(): false;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): false;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): PrimitiveChain<false>;
    }

    interface LoDashStatic {
        /**
         * This method returns a new empty object.
         *
         * @returns Returns the new empty object.
         */
        stubObject(): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): LoDashExplicitWrapper<any>;
    }

    interface LoDashStatic {
        /**
         * This method returns an empty string.
         *
         * @returns Returns the empty string.
         */
        stubString(): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): StringChain;
    }

    interface LoDashStatic {
        /**
         * This method returns `true`.
         *
         * @returns Returns `true`.
         */
        stubTrue(): true;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): true;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): PrimitiveChain<true>;
    }

    interface LoDashStatic {
        /**
         * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
         * is invoked with one argument; (index).
         *
         * @param n The number of times to invoke iteratee.
         * @param iteratee The function invoked per iteration.
         * @return Returns the array of results.
         */
        times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
        /**
         * @see _.times
         */
        times(n: number): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(iteratee: (num: number) => TResult): TResult[];
        /**
         * @see _.times
         */
        times(): number[];
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(iteratee: (num: number) => TResult): CollectionChain<TResult>;
        /**
         * @see _.times
         */
        times(): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * Converts `value` to a property path array.
         *
         * @category Util
         * @param value The value to convert.
         * @returns Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         *
         * var path = ['a', 'b', 'c'],
         *     newPath = _.toPath(path);
         *
         * console.log(newPath);
         * // => ['a', 'b', 'c']
         *
         * console.log(path === newPath);
         * // => false
         */
        toPath(value: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): CollectionChain<string>;
    }

    interface LoDashStatic {
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         *
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        uniqueId(prefix?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): StringChain;
    }

    // stubTrue

    interface LoDashStatic {
        /**
         * This method returns true.
         *
         * @return Returns true.
         */
        stubTrue(): true;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): true;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): LoDashExplicitWrapper<true>;
    }

    // stubFalse

    interface LoDashStatic {
        /**
         * This method returns false.
         *
         * @return Returns false.
         */
        stubFalse(): false;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): false;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): LoDashExplicitWrapper<false>;
    }
}
