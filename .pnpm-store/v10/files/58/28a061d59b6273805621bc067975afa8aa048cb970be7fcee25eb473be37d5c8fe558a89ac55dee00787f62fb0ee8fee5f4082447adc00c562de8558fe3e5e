import { MockInstance } from '@vitest/spy';
import { Formatter } from 'tinyrainbow';
import { StandardSchemaV1 } from '@standard-schema/spec';
import { diff, printDiffOrStringify } from '@vitest/utils/diff';
export { DiffOptions } from '@vitest/utils/diff';
import { stringify } from '@vitest/utils/display';
import * as chai from 'chai';
export { chai };

interface AsymmetricMatcherInterface {
	asymmetricMatch: (other: unknown, customTesters?: Array<Tester>) => boolean;
	toString: () => string;
	getExpectedType?: () => string;
	toAsymmetricMatcher?: () => string;
}
declare abstract class AsymmetricMatcher<
	T,
	State extends MatcherState = MatcherState
> implements AsymmetricMatcherInterface {
	protected sample: T;
	protected inverse: boolean;
	$$typeof: symbol;
	constructor(sample: T, inverse?: boolean);
	protected getMatcherContext(expect?: Chai.ExpectStatic): State;
	abstract asymmetricMatch(other: unknown, customTesters?: Array<Tester>): boolean;
	abstract toString(): string;
	getExpectedType?(): string;
	toAsymmetricMatcher?(): string;
}
declare class StringContaining extends AsymmetricMatcher<string> {
	constructor(sample: string, inverse?: boolean);
	asymmetricMatch(other: string): boolean;
	toString(): string;
	getExpectedType(): string;
}
declare class Anything extends AsymmetricMatcher<void> {
	asymmetricMatch(other: unknown): boolean;
	toString(): string;
	toAsymmetricMatcher(): string;
}
declare class ObjectContaining extends AsymmetricMatcher<Record<string | symbol | number, unknown>> {
	constructor(sample: Record<string, unknown>, inverse?: boolean);
	getPrototype(obj: object): any;
	hasProperty(obj: object | null, property: string | symbol): boolean;
	getProperties(obj: object): (string | symbol)[];
	asymmetricMatch(other: any, customTesters?: Array<Tester>): boolean;
	toString(): string;
	getExpectedType(): string;
}
declare class ArrayContaining<T = unknown> extends AsymmetricMatcher<Array<T>> {
	constructor(sample: Array<T>, inverse?: boolean);
	asymmetricMatch(other: Array<T>, customTesters?: Array<Tester>): boolean;
	toString(): string;
	getExpectedType(): string;
}
declare class Any extends AsymmetricMatcher<any> {
	constructor(sample: unknown);
	fnNameFor(func: Function): string;
	asymmetricMatch(other: unknown): boolean;
	toString(): string;
	getExpectedType(): string;
	toAsymmetricMatcher(): string;
}
declare class StringMatching extends AsymmetricMatcher<RegExp> {
	constructor(sample: string | RegExp, inverse?: boolean);
	asymmetricMatch(other: string): boolean;
	toString(): string;
	getExpectedType(): string;
}
declare class SchemaMatching extends AsymmetricMatcher<StandardSchemaV1<unknown, unknown>> {
	private result;
	constructor(sample: StandardSchemaV1<unknown, unknown>, inverse?: boolean);
	asymmetricMatch(other: unknown): boolean;
	toString(): string;
	getExpectedType(): string;
	toAsymmetricMatcher(): string;
}
declare const JestAsymmetricMatchers: ChaiPlugin;

declare function matcherHint(matcherName: string, received?: string, expected?: string, options?: MatcherHintOptions): string;
declare function printReceived(object: unknown): string;
declare function printExpected(value: unknown): string;
declare function getMatcherUtils(): {
	EXPECTED_COLOR: Formatter;
	RECEIVED_COLOR: Formatter;
	INVERTED_COLOR: Formatter;
	BOLD_WEIGHT: Formatter;
	DIM_COLOR: Formatter;
	diff: typeof diff;
	matcherHint: typeof matcherHint;
	printReceived: typeof printReceived;
	printExpected: typeof printExpected;
	printDiffOrStringify: typeof printDiffOrStringify;
	printWithType: typeof printWithType;
};
declare function printWithType<T>(name: string, value: T, print: (value: T) => string): string;
declare function addCustomEqualityTesters(newTesters: Array<Tester>): void;

/**
* Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
*/

type ChaiPlugin = Chai.ChaiPlugin;
type Tester = (this: TesterContext, a: any, b: any, customTesters: Array<Tester>) => boolean | undefined;
interface TesterContext {
	equals: (a: unknown, b: unknown, customTesters?: Array<Tester>, strictCheck?: boolean) => boolean;
}

interface MatcherHintOptions {
	comment?: string;
	expectedColor?: Formatter;
	isDirectExpectCall?: boolean;
	isNot?: boolean;
	promise?: string;
	receivedColor?: Formatter;
	secondArgument?: string;
	secondArgumentColor?: Formatter;
}
interface MatcherState {
	customTesters: Array<Tester>;
	assertionCalls: number;
	currentTestName?: string;
	/**
	* @deprecated exists only in types
	*/
	dontThrow?: () => void;
	/**
	* @deprecated exists only in types
	*/
	error?: Error;
	equals: (a: unknown, b: unknown, customTesters?: Array<Tester>, strictCheck?: boolean) => boolean;
	/**
	* @deprecated exists only in types
	*/
	expand?: boolean;
	expectedAssertionsNumber?: number | null;
	expectedAssertionsNumberErrorGen?: (() => Error) | null;
	isExpectingAssertions?: boolean;
	isExpectingAssertionsError?: Error | null;
	isNot: boolean;
	promise: string;
	/**
	* @deprecated exists only in types
	*/
	suppressedErrors: Array<Error>;
	testPath?: string;
	utils: ReturnType<typeof getMatcherUtils> & {
		diff: typeof diff;
		stringify: typeof stringify;
		iterableEquality: Tester;
		subsetEquality: Tester;
	};
	soft?: boolean;
	poll?: boolean;
	/**
	* The same assertion instance that chai plugins receive.
	* @experimental
	* @see {@link https://www.chaijs.com/guide/plugins/} Core Plugin Concepts
	*/
	readonly assertion: Assertion;
}
interface SyncExpectationResult {
	pass: boolean;
	message: () => string;
	actual?: any;
	expected?: any;
	meta?: object;
}
type AsyncExpectationResult = Promise<SyncExpectationResult>;
type ExpectationResult = SyncExpectationResult | AsyncExpectationResult;
interface RawMatcherFn<
	T extends MatcherState = MatcherState,
	E extends Array<any> = Array<any>
> {
	(this: T, received: any, ...expected: E): ExpectationResult;
}
interface Matchers<T = any> {}
type MatchersObject<T extends MatcherState = MatcherState> = Record<string, RawMatcherFn<T>> & ThisType<T> & { [K in keyof Matchers<T>]? : RawMatcherFn<T, Parameters<Matchers<T>[K]>> };
interface ExpectStatic extends Chai.ExpectStatic, Matchers, AsymmetricMatchersContaining {
	<T>(actual: T, message?: string): Assertion<T>;
	extend: (expects: MatchersObject) => void;
	anything: () => any;
	any: (constructor: unknown) => any;
	getState: () => MatcherState;
	setState: (state: Partial<MatcherState>) => void;
	not: AsymmetricMatchersContaining;
}
interface CustomMatcher {
	/**
	* Checks that a value satisfies a custom matcher function.
	*
	* @param matcher - A function returning a boolean based on the custom condition
	* @param message - Optional custom error message on failure
	*
	* @example
	* expect(age).toSatisfy(val => val >= 18, 'Age must be at least 18');
	* expect(age).toEqual(expect.toSatisfy(val => val >= 18, 'Age must be at least 18'));
	*/
	toSatisfy: (matcher: (value: any) => boolean, message?: string) => any;
	/**
	* Matches if the received value is one of the values in the expected array or set.
	*
	* @example
	* expect(1).toBeOneOf([1, 2, 3])
	* expect('foo').toBeOneOf([expect.any(String)])
	* expect({ a: 1 }).toEqual({ a: expect.toBeOneOf(['1', '2', '3']) })
	*/
	toBeOneOf: <T>(sample: Array<T> | Set<T>) => any;
}
interface AsymmetricMatchersContaining extends CustomMatcher {
	/**
	* Matches if the received string contains the expected substring.
	*
	* @example
	* expect('I have an apple').toEqual(expect.stringContaining('apple'));
	* expect({ a: 'test string' }).toEqual({ a: expect.stringContaining('test') });
	*/
	stringContaining: (expected: string) => any;
	/**
	* Matches if the received object contains all properties of the expected object.
	*
	* @example
	* expect({ a: '1', b: 2 }).toEqual(expect.objectContaining({ a: '1' }))
	*/
	objectContaining: <T = any>(expected: DeeplyAllowMatchers<T>) => any;
	/**
	* Matches if the received array contains all elements in the expected array.
	*
	* @example
	* expect(['a', 'b', 'c']).toEqual(expect.arrayContaining(['b', 'a']));
	*/
	arrayContaining: <T = unknown>(expected: Array<DeeplyAllowMatchers<T>>) => any;
	/**
	* Matches if the received string or regex matches the expected pattern.
	*
	* @example
	* expect('hello world').toEqual(expect.stringMatching(/^hello/));
	* expect('hello world').toEqual(expect.stringMatching('hello'));
	*/
	stringMatching: (expected: string | RegExp) => any;
	/**
	* Matches if the received number is within a certain precision of the expected number.
	*
	* @example
	* expect(10.45).toEqual(expect.closeTo(10.5, 1));
	* expect(5.11).toEqual(expect.closeTo(5.12)); // with default precision
	*/
	closeTo: (expected: number, precision?: number) => any;
	/**
	* Matches if the received value validates against a Standard Schema.
	*
	* @param schema - A Standard Schema V1 compatible schema object
	*
	* @example
	* expect(user).toEqual(expect.schemaMatching(z.object({ name: z.string() })))
	* expect(['hello', 'world']).toEqual([expect.schemaMatching(z.string()), expect.schemaMatching(z.string())])
	*/
	schemaMatching: (schema: unknown) => any;
}
type WithAsymmetricMatcher<T> = T | AsymmetricMatcher<unknown>;
type DeeplyAllowMatchers<T> = T extends Array<infer Element> ? WithAsymmetricMatcher<T> | DeeplyAllowMatchers<Element>[] : T extends object ? WithAsymmetricMatcher<T> | { [K in keyof T] : DeeplyAllowMatchers<T[K]> } : WithAsymmetricMatcher<T>;
interface JestAssertion<T = any> extends jest.Matchers<void, T>, CustomMatcher {
	/**
	* Used when you want to check that two objects have the same value.
	* This matcher recursively checks the equality of all fields, rather than checking for object identity.
	*
	* @example
	* expect(user).toEqual({ name: 'Alice', age: 30 });
	*/
	toEqual: <E>(expected: E) => void;
	/**
	* Use to test that objects have the same types as well as structure.
	*
	* @example
	* expect(user).toStrictEqual({ name: 'Alice', age: 30 });
	*/
	toStrictEqual: <E>(expected: E) => void;
	/**
	* Checks that a value is what you expect. It calls `Object.is` to compare values.
	* Don't use `toBe` with floating-point numbers.
	*
	* @example
	* expect(result).toBe(42);
	* expect(status).toBe(true);
	*/
	toBe: <E>(expected: E) => void;
	/**
	* Check that a string matches a regular expression.
	*
	* @example
	* expect(message).toMatch(/hello/);
	* expect(greeting).toMatch('world');
	*/
	toMatch: (expected: string | RegExp) => void;
	/**
	* Used to check that a JavaScript object matches a subset of the properties of an object
	*
	* @example
	* expect(user).toMatchObject({
	*   name: 'Alice',
	*   address: { city: 'Wonderland' }
	* });
	*/
	toMatchObject: <E extends object | any[]>(expected: E) => void;
	/**
	* Used when you want to check that an item is in a list.
	* For testing the items in the list, this uses `===`, a strict equality check.
	*
	* @example
	* expect(items).toContain('apple');
	* expect(numbers).toContain(5);
	*/
	toContain: <E>(item: E) => void;
	/**
	* Used when you want to check that an item is in a list.
	* For testing the items in the list, this matcher recursively checks the
	* equality of all fields, rather than checking for object identity.
	*
	* @example
	* expect(items).toContainEqual({ name: 'apple', quantity: 1 });
	*/
	toContainEqual: <E>(item: E) => void;
	/**
	* Use when you don't care what a value is, you just want to ensure a value
	* is true in a boolean context. In JavaScript, there are six falsy values:
	* `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
	*
	* @example
	* expect(user.isActive).toBeTruthy();
	*/
	toBeTruthy: () => void;
	/**
	* When you don't care what a value is, you just want to
	* ensure a value is false in a boolean context.
	*
	* @example
	* expect(user.isActive).toBeFalsy();
	*/
	toBeFalsy: () => void;
	/**
	* For comparing floating point numbers.
	*
	* @example
	* expect(score).toBeGreaterThan(10);
	*/
	toBeGreaterThan: (num: number | bigint) => void;
	/**
	* For comparing floating point numbers.
	*
	* @example
	* expect(score).toBeGreaterThanOrEqual(10);
	*/
	toBeGreaterThanOrEqual: (num: number | bigint) => void;
	/**
	* For comparing floating point numbers.
	*
	* @example
	* expect(score).toBeLessThan(10);
	*/
	toBeLessThan: (num: number | bigint) => void;
	/**
	* For comparing floating point numbers.
	*
	* @example
	* expect(score).toBeLessThanOrEqual(10);
	*/
	toBeLessThanOrEqual: (num: number | bigint) => void;
	/**
	* Used to check that a variable is NaN.
	*
	* @example
	* expect(value).toBeNaN();
	*/
	toBeNaN: () => void;
	/**
	* Used to check that a variable is undefined.
	*
	* @example
	* expect(value).toBeUndefined();
	*/
	toBeUndefined: () => void;
	/**
	* This is the same as `.toBe(null)` but the error messages are a bit nicer.
	* So use `.toBeNull()` when you want to check that something is null.
	*
	* @example
	* expect(value).toBeNull();
	*/
	toBeNull: () => void;
	/**
	* Used to check that a variable is nullable (null or undefined).
	*
	* @example
	* expect(value).toBeNullable();
	*/
	toBeNullable: () => void;
	/**
	* Ensure that a variable is not undefined.
	*
	* @example
	* expect(value).toBeDefined();
	*/
	toBeDefined: () => void;
	/**
	* Ensure that an object is an instance of a class.
	* This matcher uses `instanceof` underneath.
	*
	* @example
	* expect(new Date()).toBeInstanceOf(Date);
	*/
	toBeInstanceOf: <E>(expected: E) => void;
	/**
	* Used to check that an object has a `.length` property
	* and it is set to a certain numeric value.
	*
	* @example
	* expect([1, 2, 3]).toHaveLength(3);
	* expect('hello').toHaveLength(5);
	*/
	toHaveLength: (length: number) => void;
	/**
	* Use to check if a property at the specified path exists on an object.
	* For checking deeply nested properties, you may use dot notation or an array containing
	* the path segments for deep references.
	*
	* Optionally, you can provide a value to check if it matches the value present at the path
	* on the target object. This matcher uses 'deep equality' (like `toEqual()`) and recursively checks
	* the equality of all fields.
	*
	* @example
	* expect(user).toHaveProperty('address.city', 'New York');
	* expect(config).toHaveProperty(['settings', 'theme'], 'dark');
	*/
	toHaveProperty: <E>(property: string | (string | number)[], value?: E) => void;
	/**
	* Using exact equality with floating point numbers is a bad idea.
	* Rounding means that intuitive things fail.
	* The default for `numDigits` is 2.
	*
	* @example
	* expect(price).toBeCloseTo(9.99, 2);
	*/
	toBeCloseTo: (number: number, numDigits?: number) => void;
	/**
	* Ensures that a mock function is called an exact number of times.
	*
	* Also under the alias `expect.toBeCalledTimes`.
	*
	* @example
	* expect(mockFunc).toHaveBeenCalledTimes(2);
	*/
	toHaveBeenCalledTimes: (times: number) => void;
	/**
	* Ensures that a mock function is called an exact number of times.
	*
	* Alias for `expect.toHaveBeenCalledTimes`.
	*
	* @example
	* expect(mockFunc).toBeCalledTimes(2);
	* @deprecated Use `toHaveBeenCalledTimes` instead
	*/
	toBeCalledTimes: (times: number) => void;
	/**
	* Ensures that a mock function is called.
	*
	* Also under the alias `expect.toBeCalled`.
	*
	* @example
	* expect(mockFunc).toHaveBeenCalled();
	*/
	toHaveBeenCalled: () => void;
	/**
	* Ensures that a mock function is called.
	*
	* Alias for `expect.toHaveBeenCalled`.
	*
	* @example
	* expect(mockFunc).toBeCalled();
	* @deprecated Use `toHaveBeenCalled` instead
	*/
	toBeCalled: () => void;
	/**
	* Ensure that a mock function is called with specific arguments.
	*
	* Also under the alias `expect.toBeCalledWith`.
	*
	* @example
	* expect(mockFunc).toHaveBeenCalledWith('arg1', 42);
	*/
	toHaveBeenCalledWith: <E extends any[]>(...args: E) => void;
	/**
	* Ensure that a mock function is called with specific arguments.
	*
	* Alias for `expect.toHaveBeenCalledWith`.
	*
	* @example
	* expect(mockFunc).toBeCalledWith('arg1', 42);
	* @deprecated Use `toHaveBeenCalledWith` instead
	*/
	toBeCalledWith: <E extends any[]>(...args: E) => void;
	/**
	* Ensure that a mock function is called with specific arguments on an Nth call.
	*
	* Also under the alias `expect.nthCalledWith`.
	*
	* @example
	* expect(mockFunc).toHaveBeenNthCalledWith(2, 'secondArg');
	*/
	toHaveBeenNthCalledWith: <E extends any[]>(n: number, ...args: E) => void;
	/**
	* If you have a mock function, you can use `.toHaveBeenLastCalledWith`
	* to test what arguments it was last called with.
	*
	* Also under the alias `expect.lastCalledWith`.
	*
	* @example
	* expect(mockFunc).toHaveBeenLastCalledWith('lastArg');
	*/
	toHaveBeenLastCalledWith: <E extends any[]>(...args: E) => void;
	/**
	* Used to test that a function throws when it is called.
	*
	* Also under the alias `expect.toThrowError`.
	*
	* @example
	* expect(() => functionWithError()).toThrow('Error message');
	* expect(() => parseJSON('invalid')).toThrow(SyntaxError);
	* expect(() => { throw 42 }).toThrow(42);
	*/
	toThrow: (expected?: any) => void;
	/**
	* Used to test that a function throws when it is called.
	*
	* Alias for `expect.toThrow`.
	*
	* @example
	* expect(() => functionWithError()).toThrowError('Error message');
	* expect(() => parseJSON('invalid')).toThrowError(SyntaxError);
	* expect(() => { throw 42 }).toThrowError(42);
	* @deprecated Use `toThrow` instead
	*/
	toThrowError: (expected?: any) => void;
	/**
	* Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
	*
	* Alias for `expect.toHaveReturned`.
	*
	* @example
	* expect(mockFunc).toReturn();
	* @deprecated Use `toHaveReturned` instead
	*/
	toReturn: () => void;
	/**
	* Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
	*
	* Also under the alias `expect.toReturn`.
	*
	* @example
	* expect(mockFunc).toHaveReturned();
	*/
	toHaveReturned: () => void;
	/**
	* Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
	* Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
	*
	* Alias for `expect.toHaveReturnedTimes`.
	*
	* @example
	* expect(mockFunc).toReturnTimes(3);
	* @deprecated Use `toHaveReturnedTimes` instead
	*/
	toReturnTimes: (times: number) => void;
	/**
	* Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
	* Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
	*
	* Also under the alias `expect.toReturnTimes`.
	*
	* @example
	* expect(mockFunc).toHaveReturnedTimes(3);
	*/
	toHaveReturnedTimes: (times: number) => void;
	/**
	* Use to ensure that a mock function returned a specific value.
	*
	* Alias for `expect.toHaveReturnedWith`.
	*
	* @example
	* expect(mockFunc).toReturnWith('returnValue');
	* @deprecated Use `toHaveReturnedWith` instead
	*/
	toReturnWith: <E>(value: E) => void;
	/**
	* Use to ensure that a mock function returned a specific value.
	*
	* Also under the alias `expect.toReturnWith`.
	*
	* @example
	* expect(mockFunc).toHaveReturnedWith('returnValue');
	*/
	toHaveReturnedWith: <E>(value: E) => void;
	/**
	* Use to test the specific value that a mock function last returned.
	* If the last call to the mock function threw an error, then this matcher will fail
	* no matter what value you provided as the expected return value.
	*
	* Also under the alias `expect.lastReturnedWith`.
	*
	* @example
	* expect(mockFunc).toHaveLastReturnedWith('lastValue');
	*/
	toHaveLastReturnedWith: <E>(value: E) => void;
	/**
	* Use to test the specific value that a mock function returned for the nth call.
	* If the nth call to the mock function threw an error, then this matcher will fail
	* no matter what value you provided as the expected return value.
	*
	* Also under the alias `expect.nthReturnedWith`.
	*
	* @example
	* expect(mockFunc).toHaveNthReturnedWith(2, 'nthValue');
	*/
	toHaveNthReturnedWith: <E>(nthCall: number, value: E) => void;
}
type VitestAssertion<
	A,
	T
> = { [K in keyof A] : A[K] extends Chai.Assertion ? Assertion<T> : A[K] extends (...args: any[]) => any ? A[K] : VitestAssertion<A[K], T> } & ((type: string, message?: string) => Assertion);
type Promisify<O> = { [K in keyof O] : O[K] extends (...args: infer A) => infer R ? Promisify<O[K]> & ((...args: A) => Promise<R>) : O[K] };
type PromisifyAssertion<T> = Promisify<Assertion<T>>;
interface Assertion<T = any> extends VitestAssertion<Chai.Assertion, T>, JestAssertion<T>, ChaiMockAssertion, Matchers<T> {
	/**
	* Ensures a value is of a specific type.
	*
	* @example
	* expect(value).toBeTypeOf('string');
	* expect(number).toBeTypeOf('number');
	*/
	toBeTypeOf: (expected: "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined") => void;
	/**
	* Asserts that a mock function was called exactly once.
	*
	* @example
	* expect(mockFunc).toHaveBeenCalledOnce();
	*/
	toHaveBeenCalledOnce: () => void;
	/**
	* Ensure that a mock function is called with specific arguments and called
	* exactly once.
	*
	* @example
	* expect(mockFunc).toHaveBeenCalledExactlyOnceWith('arg1', 42);
	*/
	toHaveBeenCalledExactlyOnceWith: <E extends any[]>(...args: E) => void;
	/**
	* This assertion checks if a `Mock` was called before another `Mock`.
	* @param mock - A mock function created by `vi.spyOn` or `vi.fn`
	* @param failIfNoFirstInvocation - Fail if the first mock was never called
	* @example
	* const mock1 = vi.fn()
	* const mock2 = vi.fn()
	*
	* mock1()
	* mock2()
	* mock1()
	*
	* expect(mock1).toHaveBeenCalledBefore(mock2)
	*/
	toHaveBeenCalledBefore: (mock: MockInstance, failIfNoFirstInvocation?: boolean) => void;
	/**
	* This assertion checks if a `Mock` was called after another `Mock`.
	* @param mock - A mock function created by `vi.spyOn` or `vi.fn`
	* @param failIfNoFirstInvocation - Fail if the first mock was never called
	* @example
	* const mock1 = vi.fn()
	* const mock2 = vi.fn()
	*
	* mock2()
	* mock1()
	* mock2()
	*
	* expect(mock1).toHaveBeenCalledAfter(mock2)
	*/
	toHaveBeenCalledAfter: (mock: MockInstance, failIfNoFirstInvocation?: boolean) => void;
	/**
	* Checks that a promise resolves successfully at least once.
	*
	* @example
	* await expect(promise).toHaveResolved();
	*/
	toHaveResolved: () => void;
	/**
	* Checks that a promise resolves to a specific value.
	*
	* @example
	* await expect(promise).toHaveResolvedWith('success');
	*/
	toHaveResolvedWith: <E>(value: E) => void;
	/**
	* Ensures a promise resolves a specific number of times.
	*
	* @example
	* expect(mockAsyncFunc).toHaveResolvedTimes(3);
	*/
	toHaveResolvedTimes: (times: number) => void;
	/**
	* Asserts that the last resolved value of a promise matches an expected value.
	*
	* @example
	* await expect(mockAsyncFunc).toHaveLastResolvedWith('finalResult');
	*/
	toHaveLastResolvedWith: <E>(value: E) => void;
	/**
	* Ensures a specific value was returned by a promise on the nth resolution.
	*
	* @example
	* await expect(mockAsyncFunc).toHaveNthResolvedWith(2, 'secondResult');
	*/
	toHaveNthResolvedWith: <E>(nthCall: number, value: E) => void;
	/**
	* Verifies that a promise resolves.
	*
	* @example
	* await expect(someAsyncFunc).resolves.toBe(42);
	*/
	resolves: PromisifyAssertion<T>;
	/**
	* Verifies that a promise rejects.
	*
	* @example
	* await expect(someAsyncFunc).rejects.toThrow('error');
	*/
	rejects: PromisifyAssertion<T>;
}
/**
* Chai-style assertions for spy/mock testing.
* These provide sinon-chai compatible assertion names that delegate to Jest-style implementations.
*/
interface ChaiMockAssertion {
	/**
	* Checks that a spy was called at least once.
	* Chai-style equivalent of `toHaveBeenCalled`.
	*
	* @example
	* expect(spy).to.have.been.called
	*/
	readonly called: Assertion;
	/**
	* Checks that a spy was called a specific number of times.
	* Chai-style equivalent of `toHaveBeenCalledTimes`.
	*
	* @example
	* expect(spy).to.have.callCount(3)
	*/
	callCount: (count: number) => void;
	/**
	* Checks that a spy was called with specific arguments at least once.
	* Chai-style equivalent of `toHaveBeenCalledWith`.
	*
	* @example
	* expect(spy).to.have.been.calledWith('arg1', 'arg2')
	*/
	calledWith: <E extends any[]>(...args: E) => void;
	/**
	* Checks that a spy was called exactly once.
	* Chai-style equivalent of `toHaveBeenCalledOnce`.
	*
	* @example
	* expect(spy).to.have.been.calledOnce
	*/
	readonly calledOnce: Assertion;
	/**
	* Checks that a spy was called exactly once with specific arguments.
	* Chai-style equivalent of `toHaveBeenCalledExactlyOnceWith`.
	*
	* @example
	* expect(spy).to.have.been.calledOnceWith('arg1', 'arg2')
	*/
	calledOnceWith: <E extends any[]>(...args: E) => void;
	/**
	* Checks that the last call to a spy was made with specific arguments.
	* Chai-style equivalent of `toHaveBeenLastCalledWith`.
	*
	* @example
	* expect(spy).to.have.been.lastCalledWith('arg1', 'arg2')
	*/
	lastCalledWith: <E extends any[]>(...args: E) => void;
	/**
	* Checks that the nth call to a spy was made with specific arguments.
	* Chai-style equivalent of `toHaveBeenNthCalledWith`.
	*
	* @example
	* expect(spy).to.have.been.nthCalledWith(2, 'arg1', 'arg2')
	*/
	nthCalledWith: <E extends any[]>(n: number, ...args: E) => void;
	/**
	* Checks that a spy returned a specific value at least once.
	* Chai-style equivalent of `toHaveReturnedWith`.
	*
	* @example
	* expect(spy).to.have.returned('value')
	*/
	returned: <E>(value: E) => void;
	/**
	* Checks that a spy returned a specific value at least once.
	* Chai-style equivalent of `toHaveReturnedWith`.
	*
	* @example
	* expect(spy).to.have.returnedWith('value')
	*/
	returnedWith: <E>(value: E) => void;
	/**
	* Checks that a spy returned successfully a specific number of times.
	* Chai-style equivalent of `toHaveReturnedTimes`.
	*
	* @example
	* expect(spy).to.have.returnedTimes(3)
	*/
	returnedTimes: (count: number) => void;
	/**
	* Checks that the last return value of a spy matches the expected value.
	* Chai-style equivalent of `toHaveLastReturnedWith`.
	*
	* @example
	* expect(spy).to.have.lastReturnedWith('value')
	*/
	lastReturnedWith: <E>(value: E) => void;
	/**
	* Checks that the nth return value of a spy matches the expected value.
	* Chai-style equivalent of `toHaveNthReturnedWith`.
	*
	* @example
	* expect(spy).to.have.nthReturnedWith(2, 'value')
	*/
	nthReturnedWith: <E>(n: number, value: E) => void;
	/**
	* Checks that a spy was called before another spy.
	* Chai-style equivalent of `toHaveBeenCalledBefore`.
	*
	* @example
	* expect(spy1).to.have.been.calledBefore(spy2)
	*/
	calledBefore: (mock: MockInstance, failIfNoFirstInvocation?: boolean) => void;
	/**
	* Checks that a spy was called after another spy.
	* Chai-style equivalent of `toHaveBeenCalledAfter`.
	*
	* @example
	* expect(spy1).to.have.been.calledAfter(spy2)
	*/
	calledAfter: (mock: MockInstance, failIfNoFirstInvocation?: boolean) => void;
	/**
	* Checks that a spy was called exactly twice.
	* Chai-style equivalent of `toHaveBeenCalledTimes(2)`.
	*
	* @example
	* expect(spy).to.have.been.calledTwice
	*/
	readonly calledTwice: Assertion;
	/**
	* Checks that a spy was called exactly three times.
	* Chai-style equivalent of `toHaveBeenCalledTimes(3)`.
	*
	* @example
	* expect(spy).to.have.been.calledThrice
	*/
	readonly calledThrice: Assertion;
}
declare global {
	namespace jest {
		interface Matchers<
			R,
			T = {}
		> {}
	}
}

declare const ChaiStyleAssertions: ChaiPlugin;

declare const MATCHERS_OBJECT: unique symbol;
declare const JEST_MATCHERS_OBJECT: unique symbol;
declare const GLOBAL_EXPECT: unique symbol;
declare const ASYMMETRIC_MATCHERS_OBJECT: unique symbol;

declare const customMatchers: MatchersObject;

declare const JestChaiExpect: ChaiPlugin;

declare const JestExtend: ChaiPlugin;

declare function equals(a: unknown, b: unknown, customTesters?: Array<Tester>, strictCheck?: boolean): boolean;
declare function isAsymmetric(obj: any): obj is AsymmetricMatcher<any>;
declare function hasAsymmetric(obj: any, seen?: Set<any>): boolean;
declare function isError(value: unknown): value is Error;
declare function isA(typeName: string, value: unknown): boolean;
declare function fnNameFor(func: Function): string;
declare function hasProperty(obj: object | null, property: string): boolean;
declare function isImmutableUnorderedKeyed(maybeKeyed: any): boolean;
declare function isImmutableUnorderedSet(maybeSet: any): boolean;
declare function iterableEquality(a: any, b: any, customTesters?: Array<Tester>, aStack?: Array<any>, bStack?: Array<any>): boolean | undefined;
declare function subsetEquality(object: unknown, subset: unknown, customTesters?: Array<Tester>): boolean | undefined;
declare function typeEquality(a: any, b: any): boolean | undefined;
declare function arrayBufferEquality(a: unknown, b: unknown): boolean | undefined;
declare function sparseArrayEquality(a: unknown, b: unknown, customTesters?: Array<Tester>): boolean | undefined;
declare function generateToBeMessage(deepEqualityName: string, expected?: string, actual?: string): string;
declare function pluralize(word: string, count: number): string;
declare function getObjectKeys(object: object): Array<string | symbol>;
declare function getObjectSubset(object: any, subset: any, customTesters: Array<Tester>): {
	subset: any;
	stripped: number;
};
/**
* Detects if an object is a Standard Schema V1 compatible schema
*/
declare function isStandardSchema(obj: any): obj is StandardSchemaV1;

declare function getState<State extends MatcherState = MatcherState>(expect: ExpectStatic): State;
declare function setState<State extends MatcherState = MatcherState>(state: Partial<State>, expect: ExpectStatic): void;

declare function createAssertionMessage(util: Chai.ChaiUtils, assertion: Chai.Assertion, hasArgs: boolean): string;
declare function recordAsyncExpect(_test: any, promise: Promise<any>, assertion: string, error: Error, isSoft?: boolean): Promise<any>;
/** wrap assertion function to support `expect.soft` and provide assertion name as `_name` */
declare function wrapAssertion(utils: Chai.ChaiUtils, name: string, fn: (this: Chai.AssertionStatic & Assertion, ...args: any[]) => void | PromiseLike<void>): (this: Chai.AssertionStatic & Assertion, ...args: any[]) => void | PromiseLike<void>;

export { ASYMMETRIC_MATCHERS_OBJECT, Any, Anything, ArrayContaining, AsymmetricMatcher, ChaiStyleAssertions, GLOBAL_EXPECT, JEST_MATCHERS_OBJECT, JestAsymmetricMatchers, JestChaiExpect, JestExtend, MATCHERS_OBJECT, ObjectContaining, SchemaMatching, StringContaining, StringMatching, addCustomEqualityTesters, arrayBufferEquality, createAssertionMessage, customMatchers, equals, fnNameFor, generateToBeMessage, getObjectKeys, getObjectSubset, getState, hasAsymmetric, hasProperty, isA, isAsymmetric, isError, isImmutableUnorderedKeyed, isImmutableUnorderedSet, isStandardSchema, iterableEquality, pluralize, recordAsyncExpect, setState, sparseArrayEquality, subsetEquality, typeEquality, wrapAssertion };
export type { Assertion, AsymmetricMatcherInterface, AsymmetricMatchersContaining, AsyncExpectationResult, ChaiMockAssertion, ChaiPlugin, DeeplyAllowMatchers, ExpectStatic, ExpectationResult, JestAssertion, MatcherHintOptions, MatcherState, Matchers, MatchersObject, PromisifyAssertion, RawMatcherFn, SyncExpectationResult, Tester, TesterContext };
