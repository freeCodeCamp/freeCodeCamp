import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * The opposite of _.before; this method creates a function that invokes func once it’s called n or more times.
         *
         * @param n The number of calls before func is invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        after<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Primitive<T> {
        /**
         * @see _.after
         */
        after<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.after
         */
        after<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        ary(func: (...args: any[]) => any, n?: number): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.ary
         */
        ary(n?: number): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.ary
         */
        ary(n?: number): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes func, with the this binding and arguments of the created function, while
         * it’s called less than n times. Subsequent calls to the created function return the result of the last func
         * invocation.
         *
         * @param n The number of calls at which func is no longer invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        before<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Primitive<T> {
        /**
         * @see _.before
         */
        before<TFunc extends (...args: any[]) => any>(func: TFunc): Function<TFunc>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.before
         */
        before<TFunc extends (...args: any[]) => any>(func: TFunc): FunctionChain<TFunc>;
    }
    interface FunctionBind {
        /**
         * @see _.placeholder
         */
        placeholder: __;
        (func: (...args: any[]) => any, thisArg: any, ...partials: any[]): (...args: any[]) => any;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        bind: FunctionBind;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(thisArg: any, ...partials: any[]): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(thisArg: any, ...partials: any[]): FunctionChain<(...args: any[]) => any>;
    }
    interface FunctionBindKey {
        placeholder: __;
        (object: object, key: string, ...partials: any[]): (...args: any[]) => any;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        bindKey: FunctionBindKey;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(key: string, ...partials: any[]): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bindKey
         */
        bindKey(key: string, ...partials: any[]): FunctionChain<(...args: any[]) => any>;
    }
    interface Curry {
        <T1, R>(func: (t1: T1) => R, arity?: number): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface LoDashStatic {
        curry: Curry;
    }
    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: __, t2: T2): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2): R;
    }
    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2): CurriedFunction2<T1, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2): CurriedFunction3<T1, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T2, T4, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction2<T1, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: __, t2: T2): CurriedFunction4<T1, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction4<T1, T2, T4, T5, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction3<T2, T4, T5, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction3<T1, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction4<T1, T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction3<T2, T3, T5, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction3<T1, T3, T5, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction3<T1, T2, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction2<T3, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction2<T2, T5, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction2<T1, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: __, t2: __, t3: __, t4: __, t5: T5): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction3<T1, T3, T4, R>;
        (t1: __, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction2<T1, T4, R>;
        (t1: __, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface RightCurriedFunction1<T1, R> {
        (): RightCurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface RightCurriedFunction2<T1, T2, R> {
        (): RightCurriedFunction2<T1, T2, R>;
        (t2: T2): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }
    interface RightCurriedFunction3<T1, T2, T3, R> {
        (): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: __): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface RightCurriedFunction4<T1, T2, T3, T4, R> {
        (): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: __): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: __, t4: __): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: __): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4, t5: __): RightCurriedFunction4<T1, T2, T3, T5, R>;
        (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __, t5: __): RightCurriedFunction4<T1, T2, T4, T5, R>;
        (t3: T3, t4: T4, t5: __): RightCurriedFunction3<T1, T2, T5, R>;
        (t3: T3, t4: __, t5: T5): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction4<T1, T3, T4, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction3<T1, T4, T5, R>;
        (t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction3<T1, T3, T5, R>;
        (t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T1, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: __): RightCurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: __): RightCurriedFunction3<T2, T4, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: __): RightCurriedFunction3<T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction2<T3, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T2, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.curry
         */
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? Function<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? Function<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? Function<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? Function<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? Function<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.curry
         */
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? FunctionChain<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? FunctionChain<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? FunctionChain<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? FunctionChain<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? FunctionChain<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            FunctionChain<(...args: any[]) => any>;
    }
    interface CurryRight {
        <T1, R>(func: (t1: T1) => R, arity?: number): RightCurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): RightCurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): RightCurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): RightCurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface LoDashStatic {
        curryRight: CurryRight;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.curryRight
         */
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? Function<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? Function<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? Function<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? Function<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? Function<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.curryRight
         */
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? FunctionChain<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? FunctionChain<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? FunctionChain<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? FunctionChain<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? FunctionChain<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            FunctionChain<(...args: any[]) => any>;
    }
    interface DebounceSettings {
        /**
         * @see _.leading
         */
        leading?: boolean | undefined;
        /**
         * @see _.maxWait
         */
        maxWait?: number | undefined;
        /**
         * @see _.trailing
         */
        trailing?: boolean | undefined;
    }
    interface DebounceSettingsLeading extends DebounceSettings {
        leading: true;
    }
    interface DebouncedFunc<T extends (...args: any[]) => any> {
        /**
         * Call the original function, but applying the debounce rules.
         *
         * If the debounced function can be run immediately, this calls it and returns its return
         * value.
         *
         * Otherwise, it returns the return value of the last invocation, or undefined if the debounced
         * function was not invoked yet.
         */
        (...args: Parameters<T>): ReturnType<T> | undefined;

        /**
         * Throw away any pending invocation of the debounced function.
         */
        cancel(): void;

        /**
         * If there is a pending invocation of the debounced function, invoke it immediately and return
         * its return value.
         *
         * Otherwise, return the value from the last invocation, or undefined if the debounced function
         * was never invoked.
         */
        flush(): ReturnType<T> | undefined;
    }
    interface DebouncedFuncLeading<T extends (...args: any[]) => any> extends DebouncedFunc<T> {
        (...args: Parameters<T>): ReturnType<T>;
        flush(): ReturnType<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        debounce<T extends (...args: any) => any>(func: T, wait: number | undefined, options: DebounceSettingsLeading): DebouncedFuncLeading<T>;
        debounce<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings): DebouncedFunc<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.debounce
         */
        debounce(
            wait: number | undefined,
            options: DebounceSettingsLeading
        ): T extends (...args: any[]) => any ? Function<DebouncedFuncLeading<T>> : never;
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): T extends (...args: any[]) => any ? Function<DebouncedFunc<T>> : never;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.debounce
         */
        debounce(
            wait: number | undefined,
            options: DebounceSettingsLeading
        ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFuncLeading<T>> : never;
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFunc<T>> : never;
    }
    interface LoDashStatic {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        defer(func: (...args: any[]) => any, ...args: any[]): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): Primitive<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
         *
         * @param func The function to delay.
         * @param wait The number of milliseconds to delay invocation.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        delay(func: (...args: any[]) => any, wait: number, ...args: any[]): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(wait: number, ...args: any[]): Primitive<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(wait: number, ...args: any[]): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with arguments reversed.
         *
         * @category Function
         * @param func The function to flip arguments for.
         * @returns Returns the new function.
         * @example
         *
         * var flipped = _.flip(function() {
         *   return _.toArray(arguments);
         * });
         *
         * flipped('a', 'b', 'c', 'd');
         * // => ['d', 'c', 'b', 'a']
         */
        flip<T extends (...args: any) => any>(func: T): T;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.flip
         */
        flip(): this;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.flip
         */
        flip(): this;
    }
    interface MemoizedFunction {
        /**
         * @see _.cache
         */
        cache: MapCache;
    }
    interface LoDashStatic {
        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         *
         * @param func The function to have its output memoized.
         * @param resolver The function to resolve the cache key.
         * @return Returns the new memoizing function.
         */
        memoize: {
            <T extends (...args: any) => any>(func: T, resolver?: (...args: Parameters<T>) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): Function<T & MemoizedFunction>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): FunctionChain<T & MemoizedFunction>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         *
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        negate<T extends any[]>(predicate: (...args: T) => boolean): (...args: T) => boolean;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.negate
         */
        negate(): Function<(...args: Parameters<T>) => boolean>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.negate
         */
        negate(): FunctionChain<(...args: Parameters<T>) => boolean>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         *
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        once<T extends (...args: any) => any>(func: T): T;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.once
         */
        once(): Function<T>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.once
         */
        once(): FunctionChain<T>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        overArgs(func: (...args: any[]) => any, ...transforms: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
        * Creates a function that, when called, invokes func with any additional partial arguments
        * prepended to those provided to the new function. This method is similar to _.bind except
        * it does not alter the this binding.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
         */
        partial: Partial;
    }
    type __ = LoDashStatic;
    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
    interface Partial {
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: __, arg2: T2): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, plc2: __, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, plc3: __, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <TS extends any[], R>(func: (...ts: TS) => R): (...ts: TS) => R;
        <TS extends any[], T1, R>(func: (t1: T1, ...ts: TS) => R, arg1: T1): (...ts: TS) => R;
        <TS extends any[], T1, T2, R>(func: (t1: T1, t2: T2, ...ts: TS) => R, t1: T1, t2: T2): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3, ...ts: TS) => R, t1: T1, t2: T2, t3: T3): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: TS) => R, t1: T1, t2: T2, t3: T3, t4: T4): (...ts: TS) => R;
        placeholder: __;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.partial
         */
        partial<T2>(plc1: __, arg2: T2): Function<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): Function<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): Function<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): Function<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): Function<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): Function<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): Function<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2>(arg1: T1, arg2: T2): Function<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1>(arg1: T1): Function<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial(): Function<T extends (...ts: any[]) => any ? T : any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.partial
         */
        partial<T2>(plc1: __, arg2: T2): FunctionChain<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): FunctionChain<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3>(plc1: __, plc2: __, arg3: T3): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): FunctionChain<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1, T2>(arg1: T1, arg2: T2): FunctionChain<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial<T1>(arg1: T1): FunctionChain<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        /**
         * @see _.partial
         */
        partial(): FunctionChain<T extends (...ts: any[]) => any ? T : any>;
    }
    interface LoDashStatic {
        /**
        * This method is like _.partial except that partial arguments are appended to those provided
        * to the new function.
        * @param func The function to partially apply arguments to.
        * @param args Arguments to be partially applied.
        * @return The new partially applied function.
         */
        partialRight: PartialRight;
    }
    interface PartialRight {
        <R>(func: Function0<R>): Function0<R>;
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        <T1, T2, R>(func: Function2<T1, T2, R>): Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: __): Function1<T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg2: T2): Function1<T1, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, plc3: __): Function2<T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, plc3: __): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: __): Function1<T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, plc4: __): Function3<T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, plc4: __): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, plc4: __): Function2<T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, plc4: __): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, plc4: __): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, plc4: __): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Function1<T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>;
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
        placeholder: __;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __): Function<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2): Function<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): Function<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __): Function<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): Function<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3): Function<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): Function<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3): Function<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): Function<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): Function<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): Function<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3, plc4: __): Function<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): Function<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): Function<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): Function<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T4>(arg4: T4): Function<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): Function<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): Function<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3, T4>(arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): Function<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): Function<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<TS extends any[]>(...ts: TS): Function<T extends (...args: TS) => infer R ? () => R : any>;
        /**
         * @see _.partialRight
         */
        partialRight(): Function<T extends (...ts: any[]) => any ? T : any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __): FunctionChain<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2): FunctionChain<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): FunctionChain<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __): FunctionChain<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): FunctionChain<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3): FunctionChain<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): FunctionChain<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3): FunctionChain<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): FunctionChain<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3>(arg3: T3, plc4: __): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): FunctionChain<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T4>(arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): FunctionChain<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T3, T4>(arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): FunctionChain<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        /**
         * @see _.partialRight
         */
        partialRight<TS extends any[]>(...ts: TS): FunctionChain<T extends (...args: TS) => infer R ? () => R : any>;
        /**
         * @see _.partialRight
         */
        partialRight(): FunctionChain<T extends (...ts: any[]) => any ? T : any>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with arguments arranged according to the specified indexes where the
         * argument value at the first index is provided as the first argument, the argument value at the second index
         * is provided as the second argument, and so on.
         * @param func The function to rearrange arguments for.
         * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
         * @return Returns the new function.
         */
        rearg(func: (...args: any[]) => any, ...indexes: Array<Many<number>>): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.rearg
         */
        rearg(...indexes: Array<Many<number>>): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        rest(func: (...args: any[]) => any, start?: number): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.rest
         */
        rest(start?: number): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.rest
         */
        rest(start?: number): FunctionChain<(...args: any[]) => any>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         *
         * Note: This method is based on the spread operator.
         *
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        spread<TResult>(func: (...args: any[]) => TResult, start?: number): (...args: any[]) => TResult;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.spread
         */
        spread(start?: number): Function<(...args: any[]) => ReturnType<T>>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.spread
         */
        spread(start?: number): FunctionChain<(...args: any[]) => ReturnType<T>>;
    }
    interface ThrottleSettings {
        /**
         * @see _.leading
         */
        leading?: boolean | undefined;
        /**
         * @see _.trailing
         */
        trailing?: boolean | undefined;
    }
    type ThrottleSettingsLeading = (ThrottleSettings & { leading: true }) | Omit<ThrottleSettings, 'leading'>
    interface LoDashStatic {
        /**
         * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
         * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
         * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
         * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
         * the the throttled function is invoked more than once during the wait timeout.
         *
         * @param func The function to throttle.
         * @param wait The number of milliseconds to throttle invocations to.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new throttled function.
         */
        throttle<T extends (...args: any) => any>(func: T, wait?: number, options?: ThrottleSettingsLeading): DebouncedFuncLeading<T>;
        throttle<T extends (...args: any) => any>(func: T, wait?: number, options?: ThrottleSettings): DebouncedFunc<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettingsLeading
        ): T extends (...args: any[]) => any ? Function<DebouncedFuncLeading<T>> : never;
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): T extends (...args: any[]) => any ? Function<DebouncedFunc<T>> : never;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettingsLeading
        ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFuncLeading<T>> : never;
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): T extends (...args: any[]) => any ? FunctionChain<DebouncedFunc<T>> : never;
    }
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @category Function
         * @param func The function to cap arguments for.
         * @returns Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.unary
         */
        unary(): Function<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.unary
         */
        unary(): FunctionChain<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface LoDashStatic {
        /**
         * Creates a function that provides value to the wrapper function as its first argument. Any additional
         * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
         * invoked with the this binding of the created function.
         *
         * @param value The value to wrap.
         * @param wrapper The wrapper function.
         * @return Returns the new function.
         */
        wrap<T, TArgs, TResult>(value: T, wrapper: (value: T, ...args: TArgs[]) => TResult): (...args: TArgs[]) => TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): Function<(...args: TArgs[]) => TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): FunctionChain<(...args: TArgs[]) => TResult>;
    }
}
