/**
 * @internal
 *
 * A set of instructions for multiple keys.
 * The aim is to provide a concise yet readable way to map and filter values
 * onto a target object.
 *
 * @example
 * ```javascript
 * const example: ObjectMappingInstructions = {
 *   lazyValue1: [, () => 1],
 *   lazyValue2: [, () => 2],
 *   lazyValue3: [, () => 3],
 *   lazyConditionalValue1: [() => true, () => 4],
 *   lazyConditionalValue2: [() => true, () => 5],
 *   lazyConditionalValue3: [true, () => 6],
 *   lazyConditionalValue4: [false, () => 44],
 *   lazyConditionalValue5: [() => false, () => 55],
 *   lazyConditionalValue6: ["", () => 66],
 *   simpleValue1: [, 7],
 *   simpleValue2: [, 8],
 *   simpleValue3: [, 9],
 *   conditionalValue1: [() => true, 10],
 *   conditionalValue2: [() => true, 11],
 *   conditionalValue3: [{}, 12],
 *   conditionalValue4: [false, 110],
 *   conditionalValue5: [() => false, 121],
 *   conditionalValue6: ["", 132],
 * };
 *
 * const exampleResult: Record<string, any> = {
 *   lazyValue1: 1,
 *   lazyValue2: 2,
 *   lazyValue3: 3,
 *   lazyConditionalValue1: 4,
 *   lazyConditionalValue2: 5,
 *   lazyConditionalValue3: 6,
 *   simpleValue1: 7,
 *   simpleValue2: 8,
 *   simpleValue3: 9,
 *   conditionalValue1: 10,
 *   conditionalValue2: 11,
 *   conditionalValue3: 12,
 * };
 * ```
 */
export type ObjectMappingInstructions = Record<string, ObjectMappingInstruction>;
/**
 * @internal
 *
 * A variant of the object mapping instruction for the `take` function.
 * In this case, the source value is provided to the value function, turning it
 * from a supplier into a mapper.
 */
export type SourceMappingInstructions = Record<string, ValueMapper | SourceMappingInstruction>;
/**
 * @internal
 *
 * An instruction set for assigning a value to a target object.
 */
export type ObjectMappingInstruction = LazyValueInstruction | ConditionalLazyValueInstruction | SimpleValueInstruction | ConditionalValueInstruction | UnfilteredValue;
/**
 * @internal
 *
 * non-array
 */
export type UnfilteredValue = any;
/**
 * @internal
 */
export type LazyValueInstruction = [FilterStatus, ValueSupplier];
/**
 * @internal
 */
export type ConditionalLazyValueInstruction = [FilterStatusSupplier, ValueSupplier];
/**
 * @internal
 */
export type SimpleValueInstruction = [FilterStatus, Value];
/**
 * @internal
 */
export type ConditionalValueInstruction = [ValueFilteringFunction, Value];
/**
 * @internal
 */
export type SourceMappingInstruction = [(ValueFilteringFunction | FilterStatus)?, ValueMapper?, string?];
/**
 * @internal
 *
 * Filter is considered passed if
 * 1. It is a boolean true.
 * 2. It is not undefined and is itself truthy.
 * 3. It is undefined and the corresponding _value_ is neither null nor undefined.
 */
export type FilterStatus = boolean | unknown | void;
/**
 * @internal
 *
 * Supplies the filter check but not against any value as input.
 */
export type FilterStatusSupplier = () => boolean;
/**
 * @internal
 *
 * Filter check with the given value.
 */
export type ValueFilteringFunction = (value: any) => boolean;
/**
 * @internal
 *
 * Supplies the value for lazy evaluation.
 */
export type ValueSupplier = () => any;
/**
 * @internal
 *
 * A function that maps the source value to the target value.
 * Defaults to pass-through with nullish check.
 */
export type ValueMapper = (value: any) => any;
/**
 * @internal
 *
 * A non-function value.
 */
export type Value = any;
/**
 * @internal
 * Internal/Private, for codegen use only.
 *
 * Transfer a set of keys from [instructions] to [target].
 *
 * For each instruction in the record, the target key will be the instruction key.
 * The target assignment will be conditional on the instruction's filter.
 * The target assigned value will be supplied by the instructions as an evaluable function or non-function value.
 *
 * @see ObjectMappingInstructions for an example.
 */
export declare function map(target: any, filter: (value: any) => boolean, instructions: Record<string, ValueSupplier | Value>): typeof target;
/**
 * @internal
 */
export declare function map(instructions: ObjectMappingInstructions): any;
/**
 * @internal
 */
export declare function map(target: any, instructions: ObjectMappingInstructions): typeof target;
/**
 * Convert a regular object `{ k: v }` to `{ k: [, v] }` mapping instruction set with default
 * filter.
 *
 * @internal
 */
export declare const convertMap: (target: any) => Record<string, any>;
/**
 * @param source - original object with data.
 * @param instructions - how to map the data.
 * @returns new object mapped from the source object.
 * @internal
 */
export declare const take: (source: any, instructions: SourceMappingInstructions) => any;
