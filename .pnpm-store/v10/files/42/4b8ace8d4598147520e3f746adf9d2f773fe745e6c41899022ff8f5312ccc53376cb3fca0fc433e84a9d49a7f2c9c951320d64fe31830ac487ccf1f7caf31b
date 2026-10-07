import _ = require("../index");
declare module "../index" {
    // chain
    interface LoDashStatic {
        /**
         * Creates a lodash object that wraps value with explicit method chaining enabled.
         *
         * @param value The value to wrap.
         * @return Returns the new lodash wrapper instance.
         */
        chain<TrapAny extends { __lodashAnyHack: any }>(value: TrapAny): CollectionChain<any> & FunctionChain<any> & ObjectChain<any> & PrimitiveChain<any> & StringChain;
        /**
         * @see _.chain
         */
        chain<T extends null | undefined>(value: T): PrimitiveChain<T>;
        /**
         * @see _.chain
         */
        chain<T extends string>(value: T): StringChain<T>;
        /**
         * @see _.chain
         */
        chain(value: string | null | undefined): StringNullableChain;
        /**
         * @see _.chain
         */
        chain<T extends (...args: any[]) => any>(value: T): FunctionChain<T>;
        /**
         * @see _.chain
         */
        chain<T = any>(value: List<T> | null | undefined): CollectionChain<T>;
        /**
         * @see _.chain
         */
        chain<T extends object>(value: T | null | undefined): ObjectChain<T>;
        /**
         * @see _.chain
         */
        chain<T>(value: T): PrimitiveChain<T>;
    }
    interface Collection<T> {
        /**
         * @see _.chain
         */
        chain(): CollectionChain<T>;
    }
    interface String {
        /**
         * @see _.chain
         */
        chain<T extends string>(): StringChain<T>;
    }
    interface Object<T> {
        /**
         * @see _.chain
         */
        chain(): ObjectChain<T>;
    }
    interface Primitive<T> {
        /**
         * @see _.chain
         */
        chain(): PrimitiveChain<T>;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.chain
         */
        chain(): FunctionChain<T>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chain
         */
        chain(): this;
    }
    // prototype.commit
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.commit
         */
        commit(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.commit
         */
        commit(): this;
    }
    // prototype.plant
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant(value: unknown): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant(value: unknown): this;
    }
    // prototype.reverse
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.reverse
         */
        reverse(): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.reverse
         */
        reverse(): this;
    }
    // prototype.toJSON
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toJSON
         */
        toJSON(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toJSON
         */
        toJSON(): TValue;
    }
    // prototype.toString
    interface LoDashWrapper<TValue> {
        /**
         * @see _.toString
         */
        toString(): string;
    }
    // prototype.value
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.value
         */
        value(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.value
         */
        value(): TValue;
    }
    // prototype.valueOf
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.valueOf
         */
        valueOf(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.valueOf
         */
        valueOf(): TValue;
    }
    // tap
    interface LoDashStatic {
        /**
         * This method invokes interceptor and returns value. The interceptor is invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @return Returns value.
         */
        tap<T>(value: T, interceptor: (value: T) => void): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(interceptor: (value: TValue) => void): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(interceptor: (value: TValue) => void): this;
    }
    // thru
    interface LoDashStatic {
        /**
         * This method is like _.tap except that it returns the result of interceptor.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @return Returns the result of interceptor.
         */
        thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): ExpChain<TResult>;
    }
}
