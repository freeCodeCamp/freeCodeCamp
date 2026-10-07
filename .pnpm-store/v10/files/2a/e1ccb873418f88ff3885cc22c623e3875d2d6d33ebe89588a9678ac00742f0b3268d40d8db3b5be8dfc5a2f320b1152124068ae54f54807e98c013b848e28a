import deepEqual = require("deep-eql");
import { AssertionError as ImportedAssertionError } from "assertion-error";

declare global {
    namespace Chai {
        export type Message = string | (() => string);
        export type ObjectProperty = string | symbol | number;

        export interface PathInfo {
            parent: object;
            name: string;
            value?: any;
            exists: boolean;
        }

        export interface Constructor<T> {
            new(...args: any[]): T;
        }

        export interface ErrorConstructor {
            new(...args: any[]): Error;
        }

        export interface ChaiUtils {
            addChainableMethod(
                // object to define the method on, e.g. chai.Assertion.prototype
                ctx: object,
                // method name
                name: string,
                // method itself; any arguments
                method: (...args: any[]) => void,
                // called when property is accessed
                chainingBehavior?: () => void,
            ): void;
            overwriteChainableMethod(
                ctx: object,
                name: string,
                method: (...args: any[]) => void,
                chainingBehavior?: () => void,
            ): void;
            addLengthGuard(
                fn: Function,
                assertionName: string,
                isChainable: boolean,
            ): void;
            addMethod(ctx: object, name: string, method: Function): void;
            addProperty(ctx: object, name: string, getter: () => any): void;
            overwriteMethod(ctx: object, name: string, method: Function): void;
            overwriteProperty(ctx: object, name: string, getter: (this: AssertionStatic, _super: any) => any): void;
            compareByInspect(a: object, b: object): -1 | 1;
            expectTypes(obj: object, types: string[]): void;
            flag(obj: object, key: string, value?: any): any;
            getActual(obj: object, args: AssertionArgs): any;
            getProperties(obj: object): string[];
            getEnumerableProperties(obj: object): string[];
            getOwnEnumerablePropertySymbols(obj: object): symbol[];
            getOwnEnumerableProperties(obj: object): Array<string | symbol>;
            getMessage(errorLike: Error | string): string;
            getMessage(obj: any, args: AssertionArgs): string;
            inspect(obj: any, showHidden?: boolean, depth?: number, colors?: boolean): string;
            isProxyEnabled(): boolean;
            objDisplay(obj: object): void;
            proxify(obj: object, nonChainableMethodName: string): object;
            test(obj: object, args: AssertionArgs): boolean;
            transferFlags(assertion: Assertion, obj: object, includeAll?: boolean): void;
            compatibleInstance(thrown: Error, errorLike: Error | ErrorConstructor): boolean;
            compatibleConstructor(thrown: Error, errorLike: Error | ErrorConstructor): boolean;
            compatibleMessage(thrown: Error, errMatcher: string | RegExp): boolean;
            getConstructorName(constructorFn: Function): string;
            getFuncName(constructorFn: Function): string | null;

            // Reexports from pathval:
            hasProperty(obj: object | undefined | null, name: ObjectProperty): boolean;
            getPathInfo(obj: object, path: string): PathInfo;
            getPathValue(obj: object, path: string): object | undefined;

            eql: typeof deepEqual;
        }

        export type ChaiPlugin = (chai: ChaiStatic, utils: ChaiUtils) => void;

        export interface ChaiStatic {
            expect: ExpectStatic;
            should(): Should;
            /**
             * Provides a way to extend the internals of Chai
             */
            use(fn: ChaiPlugin): ChaiStatic;
            util: ChaiUtils;
            assert: AssertStatic;
            config: Config;
            Assertion: AssertionStatic;
            AssertionError: typeof AssertionError;
            version: string;
        }

        export interface ExpectStatic {
            (val: any, message?: string): Assertion;
            fail(message?: string): never;
            fail(actual: any, expected: any, message?: string, operator?: Operator): never;
        }

        export interface AssertStatic extends Assert {
        }

        // chai.Assertion.prototype.assert arguments
        export type AssertionArgs = [
            any, // expression to be tested
            Message, // message or function that returns message to display if expression fails
            Message, // negatedMessage or function that returns negatedMessage to display if expression fails
            any?, // expected value
            any?, // actual value
            boolean?, // showDiff, when set to `true`, assert will display a diff in addition to the message if expression fails
        ];

        export interface AssertionPrototype {
            assert(...args: AssertionArgs): void;
            _obj: any;
        }

        export interface AssertionStatic extends AssertionPrototype {
            prototype: AssertionPrototype;

            new(target: any, message?: string, ssfi?: Function, lockSsfi?: boolean): Assertion;

            // Deprecated properties:
            includeStack: boolean;
            showDiff: boolean;

            // Partials of functions on ChaiUtils:
            addProperty(name: string, getter: (this: AssertionStatic) => any): void;
            addMethod(name: string, method: (this: AssertionStatic, ...args: any[]) => any): void;
            addChainableMethod(
                name: string,
                method: (this: AssertionStatic, ...args: any[]) => void,
                chainingBehavior?: () => void,
            ): void;
            overwriteProperty(name: string, getter: (this: AssertionStatic, _super: any) => any): void;
            overwriteMethod(name: string, method: (this: AssertionStatic, ...args: any[]) => any): void;
            overwriteChainableMethod(
                name: string,
                method: (this: AssertionStatic, ...args: any[]) => void,
                chainingBehavior?: () => void,
            ): void;
        }

        export type Operator = string; // "==" | "===" | ">" | ">=" | "<" | "<=" | "!=" | "!==";

        export type OperatorComparable = boolean | null | number | string | undefined | Date;

        export interface ShouldAssertion {
            equal(value1: any, value2: any, message?: string): void;
            Throw: ShouldThrow;
            throw: ShouldThrow;
            exist(value: any, message?: string): void;
        }

        export interface Should extends ShouldAssertion {
            not: ShouldAssertion;
            fail(message?: string): never;
            fail(actual: any, expected: any, message?: string, operator?: Operator): never;
        }

        export interface ShouldThrow {
            (actual: Function, expected?: string | RegExp, message?: string): void;
            (actual: Function, constructor: Error | Function, expected?: string | RegExp, message?: string): void;
        }

        export interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            not: Assertion;
            deep: Deep;
            ordered: Ordered;
            nested: Nested;
            own: Own;
            any: KeyFilter;
            all: KeyFilter;
            a: Assertion;
            an: Assertion;
            include: Include;
            includes: Include;
            contain: Include;
            contains: Include;
            ok: Assertion;
            true: Assertion;
            false: Assertion;
            null: Assertion;
            undefined: Assertion;
            NaN: Assertion;
            exist: Assertion;
            empty: Assertion;
            arguments: Assertion;
            Arguments: Assertion;
            finite: Assertion;
            equal: Equal;
            equals: Equal;
            eq: Equal;
            eql: Equal;
            eqls: Equal;
            containSubset: ContainSubset;
            property: Property;
            ownProperty: Property;
            haveOwnProperty: Property;
            ownPropertyDescriptor: OwnPropertyDescriptor;
            haveOwnPropertyDescriptor: OwnPropertyDescriptor;
            length: Length;
            lengthOf: Length;
            match: Match;
            matches: Match;
            string(string: string, message?: string): Assertion;
            keys: Keys;
            key(string: string): Assertion;
            throw: Throw;
            throws: Throw;
            Throw: Throw;
            respondTo: RespondTo;
            respondsTo: RespondTo;
            itself: Assertion;
            satisfy: Satisfy;
            satisfies: Satisfy;
            closeTo: CloseTo;
            approximately: CloseTo;
            members: Members;
            increase: PropertyChange;
            increases: PropertyChange;
            decrease: PropertyChange;
            decreases: PropertyChange;
            change: PropertyChange;
            changes: PropertyChange;
            extensible: Assertion;
            sealed: Assertion;
            frozen: Assertion;
            oneOf: OneOf;
        }

        export interface LanguageChains {
            to: Assertion;
            be: Assertion;
            been: Assertion;
            is: Assertion;
            that: Assertion;
            which: Assertion;
            and: Assertion;
            has: Assertion;
            have: Assertion;
            with: Assertion;
            at: Assertion;
            of: Assertion;
            same: Assertion;
            but: Assertion;
            does: Assertion;
        }

        export interface NumericComparison {
            above: NumberComparer;
            gt: NumberComparer;
            greaterThan: NumberComparer;
            least: NumberComparer;
            gte: NumberComparer;
            greaterThanOrEqual: NumberComparer;
            below: NumberComparer;
            lt: NumberComparer;
            lessThan: NumberComparer;
            most: NumberComparer;
            lte: NumberComparer;
            lessThanOrEqual: NumberComparer;
            within(start: number, finish: number, message?: string): Assertion;
            within(start: Date, finish: Date, message?: string): Assertion;
        }

        export interface NumberComparer {
            (value: number | Date, message?: string): Assertion;
        }

        export interface TypeComparison {
            (type: string, message?: string): Assertion;
            instanceof: InstanceOf;
            instanceOf: InstanceOf;
        }

        export interface InstanceOf {
            (constructor: any, message?: string): Assertion;
        }

        export interface CloseTo {
            (expected: number, delta: number, message?: string): Assertion;
        }

        export interface Nested {
            include: Include;
            includes: Include;
            contain: Include;
            contains: Include;
            property: Property;
            members: Members;
        }

        export interface Own {
            include: Include;
            includes: Include;
            contain: Include;
            contains: Include;
            property: Property;
        }

        export interface Deep extends KeyFilter {
            be: Assertion;
            equal: Equal;
            equals: Equal;
            eq: Equal;
            include: Include;
            includes: Include;
            contain: Include;
            contains: Include;
            property: Property;
            ordered: Ordered;
            nested: Nested;
            oneOf: OneOf;
            own: Own;
        }

        export interface Ordered {
            members: Members;
        }

        export interface KeyFilter {
            keys: Keys;
            members: Members;
        }

        export interface Equal {
            (value: any, message?: string): Assertion;
        }

        export interface ContainSubset {
            (expected: any): Assertion;
        }

        export interface Property {
            (name: string | symbol, value: any, message?: string): Assertion;
            (name: string | symbol, message?: string): Assertion;
        }

        export interface OwnPropertyDescriptor {
            (name: string | symbol, descriptor: PropertyDescriptor, message?: string): Assertion;
            (name: string | symbol, message?: string): Assertion;
        }

        export interface Length extends LanguageChains, NumericComparison {
            (length: number, message?: string): Assertion;
        }

        export interface Include {
            (value: any, message?: string): Assertion;
            keys: Keys;
            deep: Deep;
            ordered: Ordered;
            members: Members;
            any: KeyFilter;
            all: KeyFilter;
            oneOf: OneOf;
        }

        export interface OneOf {
            (list: readonly unknown[], message?: string): Assertion;
        }

        export interface Match {
            (regexp: RegExp, message?: string): Assertion;
        }

        export interface Keys {
            (...keys: string[]): Assertion;
            (keys: readonly any[] | Object): Assertion;
        }

        export interface Throw {
            (expected?: string | RegExp, message?: string): Assertion;
            (constructor: Error | Function, expected?: string | RegExp, message?: string): Assertion;
        }

        export interface RespondTo {
            (method: string, message?: string): Assertion;
        }

        export interface Satisfy {
            (matcher: Function, message?: string): Assertion;
        }

        export interface Members {
            (set: readonly any[], message?: string): Assertion;
        }

        export interface PropertyChange {
            (object: Object, property?: string, message?: string): DeltaAssertion;
        }

        export interface DeltaAssertion extends Assertion {
            by(delta: number, msg?: string): Assertion;
        }

        export interface Assert {
            /**
             * @param expression    Expression to test for truthiness.
             * @param message    Message to display on error.
             */
            (expression: any, message?: string): asserts expression;

            /**
             * Throws a failure.
             *
             * @param message    Message to display on error.
             * @remarks Node.js assert module-compatible.
             */
            fail(message?: string): never;

            /**
             * Throws a failure.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message    Message to display on error.
             * @param operator   Comparison operator, if not strict equality.
             * @remarks Node.js assert module-compatible.
             */
            fail<T>(actual: T, expected: T, message?: string, operator?: Operator): never;

            /**
             * Asserts that object is truthy.
             *
             * @param object   Object to test.
             * @param message    Message to display on error.
             */
            isOk(value: unknown, message?: string): asserts value;

            /**
             * Asserts that object is truthy.
             *
             * @param object   Object to test.
             * @param message    Message to display on error.
             */
            ok(value: unknown, message?: string): asserts value;

            /**
             * Asserts that object is falsy.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param message    Message to display on error.
             */
            isNotOk<T>(value: T, message?: string): void;

            /**
             * Asserts that object is falsy.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param message    Message to display on error.
             */
            notOk<T>(value: T, message?: string): void;

            /**
             * Asserts non-strict equality (==) of actual and expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            equal<T>(actual: T, expected: T, message?: string): void;

            /**
             * Asserts non-strict inequality (!=) of actual and expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            notEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Asserts strict equality (===) of actual and expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            strictEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Asserts strict inequality (!==) of actual and expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            notStrictEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Asserts that actual is deeply equal to expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            deepEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Asserts that actual is not deeply equal to expected.
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            notDeepEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Alias to deepEqual
             *
             * T   Type of the objects.
             * @param actual   Actual value.
             * @param expected   Potential expected value.
             * @param message   Message to display on error.
             */
            deepStrictEqual<T>(actual: T, expected: T, message?: string): void;

            /**
             * Partially matches actual and expected.
             *
             * @param actual   Actual value.
             * @param expected   Potential subset of the value.
             * @param message   Message to display on error.
             */
            containSubset(val: any, exp: any, msg?: string): void;

            /**
             * Partially matches actual and expected.
             *
             * @param actual   Actual value.
             * @param expected   Potential subset of the value.
             * @param message   Message to display on error.
             */
            containsSubset(val: any, exp: any, msg?: string): void;

            /**
             * No partial match between actual and expected exists.
             *
             * @param actual   Actual value.
             * @param expected   Potential subset of the value.
             * @param message   Message to display on error.
             */
            doesNotContainSubset(val: any, exp: any, msg?: string): void;

            /**
             * Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
             *
             * @param valueToCheck   Actual value.
             * @param valueToBeAbove   Minimum Potential expected value.
             * @param message   Message to display on error.
             */
            isAbove(valueToCheck: number, valueToBeAbove: number, message?: string): void;

            /**
             * Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
             *
             * @param valueToCheck   Actual value.
             * @param valueToBeAtLeast   Minimum Potential expected value.
             * @param message   Message to display on error.
             */
            isAtLeast(valueToCheck: number, valueToBeAtLeast: number, message?: string): void;

            /**
             * Asserts valueToCheck is strictly less than (<) valueToBeBelow.
             *
             * @param valueToCheck   Actual value.
             * @param valueToBeBelow   Minimum Potential expected value.
             * @param message   Message to display on error.
             */
            isBelow(valueToCheck: number, valueToBeBelow: number, message?: string): void;

            /**
             * Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
             *
             * @param valueToCheck   Actual value.
             * @param valueToBeAtMost   Minimum Potential expected value.
             * @param message   Message to display on error.
             */
            isAtMost(valueToCheck: number, valueToBeAtMost: number, message?: string): void;

            /**
             * Asserts that value is true.
             *
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isTrue(value: unknown, message?: string): asserts value is true;

            /**
             * Asserts that value is false.
             *
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isFalse(value: unknown, message?: string): asserts value is false;

            /**
             * Asserts that value is not true.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotTrue<T>(value: T, message?: string): asserts value is Exclude<T, true>;

            /**
             * Asserts that value is not false.
             *
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotFalse<T>(value: T, message?: string): asserts value is Exclude<T, false>;

            /**
             * Asserts that value is null.
             *
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNull(value: unknown, message?: string): asserts value is null;

            /**
             * Asserts that value is not null.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotNull<T>(value: T, message?: string): asserts value is Exclude<T, null>;

            /**
             * Asserts that value is NaN.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNaN<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not NaN.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotNaN<T>(value: T, message?: string): void;

            /**
             * Asserts that the target is neither null nor undefined.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message    Message to display on error.
             */
            exists<T>(value: T, message?: string): asserts value is NonNullable<T>;

            /**
             * Asserts that the target is either null or undefined.
             *
             * @param value   Actual value.
             * @param message    Message to display on error.
             */
            notExists(value: unknown, message?: string): asserts value is
                | null
                | undefined;

            /**
             * Asserts that value is undefined.
             *
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isUndefined(value: unknown, message?: string): asserts value is undefined;

            /**
             * Asserts that value is not undefined.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isDefined<T>(value: T, message?: string): asserts value is Exclude<T, undefined>;

            /**
             * Asserts that value is a function.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isFunction<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not a function.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotFunction<T>(value: T, message?: string): void;

            /**
             * Asserts that value is an object of type 'Object'
             * (as revealed by Object.prototype.toString).
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             * @remarks The assertion does not match subclassed objects.
             */
            isObject<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not an object of type 'Object'
             * (as revealed by Object.prototype.toString).
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotObject<T>(value: T, message?: string): void;

            /**
             * Asserts that value is an array.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isArray<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not an array.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotArray<T>(value: T, message?: string): void;

            /**
             * Asserts that value is a string.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isString<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not a string.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotString<T>(value: T, message?: string): void;

            /**
             * Asserts that value is a number.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNumber<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not a number.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotNumber<T>(value: T, message?: string): void;

            /**
             * Asserts that value is a finite number.
             * Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
             *
             * T   Type of value
             * @param value    Actual value
             * @param message   Message to display on error.
             */
            isFinite<T>(value: T, message?: string): void;

            /**
             * Asserts that value is a boolean.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isBoolean<T>(value: T, message?: string): void;

            /**
             * Asserts that value is not a boolean.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param message   Message to display on error.
             */
            isNotBoolean<T>(value: T, message?: string): void;

            /**
             * Asserts that value's type is name, as determined by Object.prototype.toString.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param name   Potential expected type name of value.
             * @param message   Message to display on error.
             */
            typeOf<T>(value: T, name: string, message?: string): void;

            /**
             * Asserts that value's type is not name, as determined by Object.prototype.toString.
             *
             * T   Type of value.
             * @param value   Actual value.
             * @param name   Potential expected type name of value.
             * @param message   Message to display on error.
             */
            notTypeOf<T>(value: T, name: string, message?: string): void;

            /**
             * Asserts that value is an instance of constructor.
             *
             * T   Expected type of value.
             * @param value   Actual value.
             * @param constructor   Potential expected contructor of value.
             * @param message   Message to display on error.
             */
            instanceOf<T>(
                value: unknown,
                constructor: Constructor<T>,
                message?: string,
            ): asserts value is T;

            /**
             * Asserts that value is not an instance of constructor.
             *
             * T   Type of value.
             * U   Type that value shouldn't be an instance of.
             * @param value   Actual value.
             * @param constructor   Potential expected contructor of value.
             * @param message   Message to display on error.
             */
            notInstanceOf<T, U>(value: T, type: Constructor<U>, message?: string): asserts value is Exclude<T, U>;

            /**
             * Asserts that haystack includes needle.
             *
             * @param haystack   Container string.
             * @param needle   Potential substring of haystack.
             * @param message   Message to display on error.
             */
            include(haystack: string, needle: string, message?: string): void;

            /**
             * Asserts that haystack includes needle.
             *
             * T   Type of values in haystack.
             * @param haystack   Container array, set or map.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            include<T>(
                haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
                needle: T,
                message?: string,
            ): void;

            /**
             * Asserts that haystack includes needle.
             *
             * T   Type of values in haystack.
             * @param haystack   WeakSet container.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            include<T extends object>(haystack: WeakSet<T>, needle: T, message?: string): void;

            /**
             * Asserts that haystack includes needle.
             *
             * T   Type of haystack.
             * @param haystack   Object.
             * @param needle   Potential subset of the haystack's properties.
             * @param message   Message to display on error.
             */
            include<T>(haystack: T, needle: Partial<T>, message?: string): void;

            /**
             * Asserts that haystack does not include needle.
             *
             * @param haystack   Container string.
             * @param needle   Potential substring of haystack.
             * @param message   Message to display on error.
             */
            notInclude(haystack: string, needle: string, message?: string): void;

            /**
             * Asserts that haystack does not include needle.
             *
             * T   Type of values in haystack.
             * @param haystack   Container array, set or map.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            notInclude<T>(
                haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
                needle: T,
                message?: string,
            ): void;

            /**
             * Asserts that haystack does not include needle.
             *
             * T   Type of values in haystack.
             * @param haystack   WeakSet container.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            notInclude<T extends object>(haystack: WeakSet<T>, needle: T, message?: string): void;

            /**
             * Asserts that haystack does not include needle.
             *
             * T   Type of haystack.
             * @param haystack   Object.
             * @param needle   Potential subset of the haystack's properties.
             * @param message   Message to display on error.
             */
            notInclude<T>(haystack: T, needle: Partial<T>, message?: string): void;

            /**
             * Asserts that haystack includes needle. Deep equality is used.
             *
             * @param haystack   Container string.
             * @param needle   Potential substring of haystack.
             * @param message   Message to display on error.
             *
             * @deprecated Does not have any effect on string. Use {@link Assert#include} instead.
             */
            deepInclude(haystack: string, needle: string, message?: string): void;

            /**
             * Asserts that haystack includes needle. Deep equality is used.
             *
             * T   Type of values in haystack.
             * @param haystack   Container array, set or map.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            deepInclude<T>(
                haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
                needle: T,
                message?: string,
            ): void;

            /**
             * Asserts that haystack includes needle. Deep equality is used.
             *
             * T   Type of haystack.
             * @param haystack   Object.
             * @param needle   Potential subset of the haystack's properties.
             * @param message   Message to display on error.
             */
            deepInclude<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string): void;

            /**
             * Asserts that haystack does not include needle. Deep equality is used.
             *
             * @param haystack   Container string.
             * @param needle   Potential substring of haystack.
             * @param message   Message to display on error.
             *
             * @deprecated Does not have any effect on string. Use {@link Assert#notInclude} instead.
             */
            notDeepInclude(haystack: string, needle: string, message?: string): void;

            /**
             * Asserts that haystack does not include needle. Deep equality is used.
             *
             * T   Type of values in haystack.
             * @param haystack   Container array, set or map.
             * @param needle   Potential value contained in haystack.
             * @param message   Message to display on error.
             */
            notDeepInclude<T>(
                haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>,
                needle: T,
                message?: string,
            ): void;

            /**
             * Asserts that haystack does not include needle. Deep equality is used.
             *
             * T   Type of haystack.
             * @param haystack   Object.
             * @param needle   Potential subset of the haystack's properties.
             * @param message   Message to display on error.
             */
            notDeepInclude<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object.
             *
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
             * Can be used to assert the inclusion of a subset of properties in an object.
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            nestedInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object.
             *
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
             * Can be used to assert the inclusion of a subset of properties in an object.
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            notNestedInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality
             *
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
             * Can be used to assert the inclusion of a subset of properties in an object.
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            deepNestedInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ does not include ‘needle’. Can be used to assert the absence of a subset of properties in an object while checking for deep equality.
             *
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.Asserts that ‘haystack’ includes ‘needle’.
             * Can be used to assert the inclusion of a subset of properties in an object.
             * Enables the use of dot- and bracket-notation for referencing nested properties.
             * ‘[]’ and ‘.’ in property names can be escaped using double backslashes.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            notDeepNestedInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            ownInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            notOwnInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            deepOwnInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that ‘haystack’ includes ‘needle’. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.
             *
             * @param haystack
             * @param needle
             * @param message   Message to display on error.
             */
            notDeepOwnInclude(haystack: any, needle: any, message?: string): void;

            /**
             * Asserts that value matches the regular expression regexp.
             *
             * @param value   Actual value.
             * @param regexp   Potential match of value.
             * @param message   Message to display on error.
             */
            match(value: string, regexp: RegExp, message?: string): void;

            /**
             * Asserts that value does not match the regular expression regexp.
             *
             * @param value   Actual value.
             * @param regexp   Potential match of value.
             * @param message   Message to display on error.
             */
            notMatch(expected: any, regexp: RegExp, message?: string): void;

            /**
             * Asserts that object has a property named by property.
             *
             * T   Type of object.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param message   Message to display on error.
             */
            property<T>(object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that object does not have a property named by property.
             *
             * T   Type of object.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param message   Message to display on error.
             */
            notProperty<T>(object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that object has a property named by property, which can be a string
             * using dot- and bracket-notation for deep reference.
             *
             * T   Type of object.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param message   Message to display on error.
             */
            deepProperty<T>(object: T, property: string, message?: string): void;

            /**
             * Asserts that object does not have a property named by property, which can be a
             * string using dot- and bracket-notation for deep reference.
             *
             * T   Type of object.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param message   Message to display on error.
             */
            notDeepProperty<T>(object: T, property: string, message?: string): void;

            /**
             * Asserts that object has a property named by property with value given by value.
             *
             * T   Type of object.
             * V   Type of value.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param value   Potential expected property value.
             * @param message   Message to display on error.
             */
            propertyVal<T, V>(object: T, property: string, /* keyof T */ value: V, message?: string): void;

            /**
             * Asserts that object has a property named by property with value given by value.
             *
             * T   Type of object.
             * V   Type of value.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param value   Potential expected property value.
             * @param message   Message to display on error.
             */
            notPropertyVal<T, V>(object: T, property: string, /* keyof T */ value: V, message?: string): void;

            /**
             * Asserts that object has a property named by property, which can be a string
             * using dot- and bracket-notation for deep reference.
             *
             * T   Type of object.
             * V   Type of value.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param value   Potential expected property value.
             * @param message   Message to display on error.
             */
            deepPropertyVal<T, V>(object: T, property: string, value: V, message?: string): void;

            /**
             * Asserts that object does not have a property named by property, which can be a
             * string using dot- and bracket-notation for deep reference.
             *
             * T   Type of object.
             * V   Type of value.
             * @param object   Container object.
             * @param property   Potential contained property of object.
             * @param value   Potential expected property value.
             * @param message   Message to display on error.
             */
            notDeepPropertyVal<T, V>(object: T, property: string, value: V, message?: string): void;

            /**
             * Asserts that object has a length property with the expected value.
             *
             * T   Type of object.
             * @param object   Container object.
             * @param length   Potential expected length of object.
             * @param message   Message to display on error.
             */
            lengthOf<T extends { readonly length?: number | undefined } | { readonly size?: number | undefined }>(
                object: T,
                length: number,
                message?: string,
            ): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errMsgMatcher   Expected error message matcher.
             * @param ignored   Ignored parameter.
             * @param message   Message to display on error.
             */
            throw(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errorLike   Expected error constructor or error instance.
             * @param errMsgMatcher   Expected error message matcher.
             * @param message   Message to display on error.
             */
            throw(
                fn: () => void,
                errorLike?: ErrorConstructor | Error | null,
                errMsgMatcher?: RegExp | string | null,
                message?: string,
            ): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errMsgMatcher   Expected error message matcher.
             * @param ignored   Ignored parameter.
             * @param message   Message to display on error.
             */
            throws(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errorLike   Expected error constructor or error instance.
             * @param errMsgMatcher   Expected error message matcher.
             * @param message   Message to display on error.
             */
            throws(
                fn: () => void,
                errorLike?: ErrorConstructor | Error | null,
                errMsgMatcher?: RegExp | string | null,
                message?: string,
            ): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errMsgMatcher   Expected error message matcher.
             * @param ignored   Ignored parameter.
             * @param message   Message to display on error.
             */
            Throw(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;

            /**
             * Asserts that fn will throw an error.
             *
             * @param fn   Function that may throw.
             * @param errorLike   Expected error constructor or error instance.
             * @param errMsgMatcher   Expected error message matcher.
             * @param message   Message to display on error.
             */
            Throw(
                fn: () => void,
                errorLike?: ErrorConstructor | Error | null,
                errMsgMatcher?: RegExp | string | null,
                message?: string,
            ): void;

            /**
             * Asserts that fn will not throw an error.
             *
             * @param fn   Function that may throw.
             * @param errMsgMatcher   Expected error message matcher.
             * @param ignored   Ignored parameter.
             * @param message   Message to display on error.
             */
            doesNotThrow(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;

            /**
             * Asserts that fn will not throw an error.
             *
             * @param fn   Function that may throw.
             * @param errorLike   Expected error constructor or error instance.
             * @param errMsgMatcher   Expected error message matcher.
             * @param message   Message to display on error.
             */
            doesNotThrow(
                fn: () => void,
                errorLike?: ErrorConstructor | Error | null,
                errMsgMatcher?: RegExp | string | null,
                message?: string,
            ): void;

            /**
             * Compares two values using operator.
             *
             * @param val1   Left value during comparison.
             * @param operator   Comparison operator.
             * @param val2   Right value during comparison.
             * @param message   Message to display on error.
             */
            operator(val1: OperatorComparable, operator: Operator, val2: OperatorComparable, message?: string): void;

            /**
             * Asserts that the target is equal to expected, to within a +/- delta range.
             *
             * @param actual   Actual value
             * @param expected   Potential expected value.
             * @param delta   Maximum differenced between values.
             * @param message   Message to display on error.
             */
            closeTo(actual: number, expected: number, delta: number, message?: string): void;

            /**
             * Asserts that the target is equal to expected, to within a +/- delta range.
             *
             * @param actual   Actual value
             * @param expected   Potential expected value.
             * @param delta   Maximum differenced between values.
             * @param message   Message to display on error.
             */
            approximately(act: number, exp: number, delta: number, message?: string): void;

            /**
             * Asserts that set1 and set2 have the same members. Order is not take into account.
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            sameMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that set1 and set2 have the same members using deep equality checking.
             * Order is not take into account.
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            sameDeepMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that `set1` and `set2` don't have the same members in any order.
             * Uses a deep equality check.
             *
             *  T   Type of set values.
             * @param set1
             * @param set2
             * @param message
             */
            notSameDeepMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that set1 and set2 have the same members in the same order.
             * Uses a strict equality check (===).
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            sameOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that set1 and set2 don’t have the same members in the same order.
             * Uses a strict equality check (===).
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            notSameOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that set1 and set2 have the same members in the same order.
             * Uses a deep equality check.
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            sameDeepOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that set1 and set2 don’t have the same members in the same order.
             * Uses a deep equality check.
             *
             * T   Type of set values.
             * @param set1   Actual set of values.
             * @param set2   Potential expected set of values.
             * @param message   Message to display on error.
             */
            notSameDeepOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;

            /**
             * Asserts that subset is included in superset in the same order beginning with the first element in superset.
             * Uses a strict equality check (===).
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            includeOrderedMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset isn’t included in superset in the same order beginning with the first element in superset.
             * Uses a strict equality check (===).
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            notIncludeOrderedMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset is included in superset in the same order beginning with the first element in superset.
             * Uses a deep equality check.
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            includeDeepOrderedMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset isn’t included in superset in the same order beginning with the first element in superset.
             * Uses a deep equality check.
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            notIncludeDeepOrderedMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset is included in superset. Order is not take into account.
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            includeMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset isn’t included in superset in any order.
             * Uses a strict equality check (===). Duplicates are ignored.
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential not contained set of values.
             * @param message   Message to display on error.
             */
            notIncludeMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that subset is included in superset using deep equality checking.
             * Order is not take into account.
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            includeDeepMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that `subset` isn't included in `superset` in any order. Uses a
             * deep equality check. Duplicates are ignored.
             *
             * assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
             *
             * T   Type of set values.
             * @param superset   Actual set of values.
             * @param subset   Potential contained set of values.
             * @param message   Message to display on error.
             */
            notIncludeDeepMembers<T>(superset: T[], subset: T[], message?: string): void;

            /**
             * Asserts that non-object, non-array value inList appears in the flat array list.
             *
             * T   Type of list values.
             * @param inList   Value expected to be in the list.
             * @param list   List of values.
             * @param message   Message to display on error.
             */
            oneOf<T>(inList: T, list: T[], message?: string): void;

            /**
             * Asserts that a function changes the value of a property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected to be modified.
             * @param message   Message to display on error.
             */
            changes<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function changes the value of a property by an amount (delta).
             *
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */
            changesBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            changesBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts that a function does not change the value of a property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected not to be modified.
             * @param message   Message to display on error.
             */
            doesNotChange<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function increases an object property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected to be increased.
             * @param message   Message to display on error.
             */
            increases<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
             *
             * T   Type of object or function.
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */
            increasesBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            increasesBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts that a function does not increase an object property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected not to be increased.
             * @param message   Message to display on error.
             */
            doesNotIncrease<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
             *
             * T   Type of object or function.
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */

            increasesButNotBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            increasesButNotBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts that a function decreases an object property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected to be decreased.
             * @param message   Message to display on error.
             */
            decreases<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
             *
             * T   Type of object or function.
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */

            decreasesBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            decreasesBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts that a function does not decrease an object property.
             *
             * T   Type of object.
             * @param modifier   Function to run.
             * @param object   Container object.
             * @param property   Property of object expected not to be decreased.
             * @param message   Message to display on error.
             */
            doesNotDecrease<T>(modifier: Function, object: T, property: string, /* keyof T */ message?: string): void;

            /**
             * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
             *
             * T   Type of object or function.
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */

            doesNotDecreaseBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            doesNotDecreaseBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
             *
             * T   Type of object or function.
             * @param modifier function
             * @param object or getter function
             * @param property name _optional_
             * @param change amount (delta)
             * @param message _optional_
             */

            decreasesButNotBy<T>(
                modifier: Function,
                object: T,
                property: string,
                /* keyof T */ change: number,
                message?: string,
            ): void;
            decreasesButNotBy<T>(modifier: Function, object: T, change: number, message?: string): void;

            /**
             * Asserts if value is not a false value, and throws if it is a true value.
             *
             * T   Type of object.
             * @param object   Actual value.
             * @param message   Message to display on error.
             * @remarks This is added to allow for chai to be a drop-in replacement for
             *          Node’s assert class.
             */
            ifError<T>(object: T, message?: string): void;

            /**
             * Asserts that object is extensible (can have new properties added to it).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isExtensible<T>(object: T, message?: string): void;

            /**
             * Asserts that object is extensible (can have new properties added to it).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            extensible<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not extensible.
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isNotExtensible<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not extensible.
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            notExtensible<T>(object: T, message?: string): void;

            /**
             * Asserts that object is sealed (can have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isSealed<T>(object: T, message?: string): void;

            /**
             * Asserts that object is sealed (can have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            sealed<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not sealed.
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isNotSealed<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not sealed.
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            notSealed<T>(object: T, message?: string): void;

            /**
             * Asserts that object is frozen (cannot have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isFrozen<T>(object: T, message?: string): void;

            /**
             * Asserts that object is frozen (cannot have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            frozen<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not frozen (cannot have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isNotFrozen<T>(object: T, message?: string): void;

            /**
             * Asserts that object is not frozen (cannot have new properties added to it
             * and its existing properties cannot be removed).
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            notFrozen<T>(object: T, message?: string): void;

            /**
             * Asserts that the target does not contain any values. For arrays and
             * strings, it checks the length property. For Map and Set instances, it
             * checks the size property. For non-function objects, it gets the count
             * of own enumerable string keys.
             *
             * T   Type of object
             * @param object   Actual value.
             * @param message   Message to display on error.
             */
            isEmpty<T>(object: T, message?: string): void;

            /**
             * Asserts that the target contains values. For arrays and strings, it checks
             * the length property. For Map and Set instances, it checks the size property.
             * For non-function objects, it gets the count of own enumerable string keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param message    Message to display on error.
             */
            isNotEmpty<T>(object: T, message?: string): void;

            /**
             * Asserts that `object` has at least one of the `keys` provided.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            hasAnyKeys<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string): void;

            /**
             * Asserts that `object` has all and only all of the `keys` provided.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            hasAllKeys<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string): void;

            /**
             * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            containsAllKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that `object` has none of the `keys` provided.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            doesNotHaveAnyKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that `object` does not have at least one of the `keys` provided.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            doesNotHaveAllKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that `object` has at least one of the `keys` provided.
             * Since Sets and Maps can have objects as keys you can use this assertion to perform
             * a deep comparison.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            hasAnyDeepKeys<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string): void;

            /**
             * Asserts that `object` has all and only all of the `keys` provided.
             * Since Sets and Maps can have objects as keys you can use this assertion to perform
             * a deep comparison.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            hasAllDeepKeys<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string): void;

            /**
             * Asserts that `object` contains all of the `keys` provided.
             * Since Sets and Maps can have objects as keys you can use this assertion to perform
             * a deep comparison.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            containsAllDeepKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that `object` contains all of the `keys` provided.
             * Since Sets and Maps can have objects as keys you can use this assertion to perform
             * a deep comparison.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            doesNotHaveAnyDeepKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that `object` contains all of the `keys` provided.
             * Since Sets and Maps can have objects as keys you can use this assertion to perform
             * a deep comparison.
             * You can also provide a single object instead of a `keys` array and its keys
             * will be used as the expected set of keys.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param keys   Keys to check
             * @param message    Message to display on error.
             */
            doesNotHaveAllDeepKeys<T>(
                object: T,
                keys: Array<Object | string> | { [key: string]: any },
                message?: string,
            ): void;

            /**
             * Asserts that object has a direct or inherited property named by property,
             * which can be a string using dot- and bracket-notation for nested reference.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param message    Message to display on error.
             */
            nestedProperty<T>(object: T, property: string, message?: string): void;

            /**
             * Asserts that object does not have a property named by property,
             * which can be a string using dot- and bracket-notation for nested reference.
             * The property cannot exist on the object nor anywhere in its prototype chain.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param message    Message to display on error.
             */
            notNestedProperty<T>(object: T, property: string, message?: string): void;

            /**
             * Asserts that object has a property named by property with value given by value.
             * property can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param value    Value to test.
             * @param message    Message to display on error.
             */
            nestedPropertyVal<T>(object: T, property: string, value: any, message?: string): void;

            /**
             * Asserts that object does not have a property named by property with value given by value.
             * property can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param value    Value to test.
             * @param message    Message to display on error.
             */
            notNestedPropertyVal<T>(object: T, property: string, value: any, message?: string): void;

            /**
             * Asserts that object has a property named by property with a value given by value.
             * property can use dot- and bracket-notation for nested reference. Uses a deep equality check.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param value    Value to test.
             * @param message    Message to display on error.
             */
            deepNestedPropertyVal<T>(object: T, property: string, value: any, message?: string): void;

            /**
             * Asserts that object does not have a property named by property with value given by value.
             * property can use dot- and bracket-notation for nested reference. Uses a deep equality check.
             *
             * T   Type of object.
             * @param object   Object to test.
             * @param property    Property to test.
             * @param value    Value to test.
             * @param message    Message to display on error.
             */
            notDeepNestedPropertyVal<T>(object: T, property: string, value: any, message?: string): void;
        }

        export interface Config {
            /**
             * Default: false
             */
            includeStack: boolean;

            /**
             * Default: true
             */
            showDiff: boolean;

            /**
             * Default: 40
             */
            truncateThreshold: number;

            /**
             * Default: true
             */
            useProxy: boolean;

            /**
             * Default: ['then', 'catch', 'inspect', 'toJSON']
             */
            proxyExcludedKeys: string[];

            deepEqual: <L, R>(expected: L, actual: R) => void;
        }

        export type { ImportedAssertionError as AssertionError };
    }
}

export function use(fn: Chai.ChaiPlugin): Chai.ChaiStatic;

export const util: Chai.ChaiUtils;
export const config: Chai.Config;
export const Assertion: Chai.AssertionStatic;
export const AssertionError: typeof ImportedAssertionError;
export function should(): Chai.Should;
export function Should(): Chai.Should;
export const assert: Chai.AssertStatic;
export const expect: Chai.ExpectStatic;
