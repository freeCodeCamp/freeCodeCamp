import { SetComplement, DeepReadonly } from './mapped-types';
/**
 * $Keys
 * @desc Get the union type of all the keys in an object type `T`
 * @see https://flow.org/en/docs/types/utilities/#toc-keys
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: "name" | "age" | "visible"
 *   type PropsKeys = $Keys<Props>;
 */
export declare type $Keys<T extends object> = keyof T;
/**
 * $Values
 * @desc Get the union type of all the values in an object type `T`
 * @see https://flow.org/en/docs/types/utilities/#toc-values
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: string | number | boolean
 *   type PropsValues = $Values<Props>;
 */
export declare type $Values<T extends object> = T[keyof T];
/**
 * $ReadOnly
 * @desc Get the read-only version of a given object type `T` (it works on nested data structure)
 * @see https://flow.org/en/docs/types/utilities/#toc-readonly
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: Readonly<{ name: string; age: number; visible: boolean; }>
 *   type ReadOnlyProps = $ReadOnly<Props>;
 */
export declare type $ReadOnly<T extends object> = DeepReadonly<T>;
/**
 * $Diff
 * @desc Get the set difference of a given object types `T` and `U` (`T \ U`)
 * @see https://flow.org/en/docs/types/utilities/#toc-diff
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type RequiredProps = Diff<Props, DefaultProps>;
 */
export declare type $Diff<T extends U, U extends object> = Pick<T, SetComplement<keyof T, keyof U>>;
/**
 * $PropertyType
 * @desc Get the type of property of an object at a given key `K`
 * @see https://flow.org/en/docs/types/utilities/#toc-propertytype
 * @example
 *   // Expect: string;
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NameType = $PropertyType<Props, 'name'>;
 *
 *   // Expect: boolean
 *   type Tuple = [boolean, number];
 *   type A = $PropertyType<Tuple, '0'>;
 *   // Expect: number
 *   type B = $PropertyType<Tuple, '1'>;
 */
export declare type $PropertyType<T extends object, K extends keyof T> = T[K];
/**
 * $ElementType
 * @desc Get the type of elements inside of array, tuple or object of type `T`, that matches the given index type `K`
 * @see https://flow.org/en/docs/types/utilities/#toc-elementtype
 * @example
 *   // Expect: string;
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NameType = $ElementType<Props, 'name'>;
 *
 *   // Expect: boolean
 *   type Tuple = [boolean, number];
 *   type A = $ElementType<Tuple, '0'>;
 *   // Expect: number
 *   type B = $ElementType<Tuple, '1'>;
 *
 *   // Expect: boolean
 *   type Arr = boolean[];
 *   type ItemsType = $ElementType<Arr, number>;
 *
 *   // Expect: number
 *   type Obj = { [key: string]: number };
 *   type ValuesType = $ElementType<Obj, string>;
 */
export declare type $ElementType<T extends {
    [P in K & any]: any;
}, K extends keyof T | number> = T[K];
/**
 * $Call
 * @desc Get the return type from a given typeof expression
 * @see https://flow.org/en/docs/types/utilities/#toc-call
 * @example
 *   // Common use-case
 *   const add = (amount: number) => ({ type: 'ADD' as 'ADD', payload: amount });
 *   type AddAction = $Call<typeof add>; // { type: 'ADD'; payload: number }
 *
 *   // Examples migrated from Flow docs
 *   type ExtractPropType<T extends { prop: any }> = (arg: T) => T['prop'];
 *   type Obj = { prop: number };
 *   type PropType = $Call<ExtractPropType<Obj>>; // number
 *
 *   type ExtractReturnType<T extends () => any> = (arg: T) => ReturnType<T>;
 *   type Fn = () => number;
 *   type FnReturnType = $Call<ExtractReturnType<Fn>>; // number
 */
export declare type $Call<Fn extends (...args: any[]) => any> = Fn extends (arg: any) => infer RT ? RT : never;
/**
 * $Shape
 * @desc Copies the shape of the type supplied, but marks every field optional.
 * @see https://flow.org/en/docs/types/utilities/#toc-shape
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *
 *   // Expect: Partial<Props>
 *   type PartialProps = $Shape<Props>;
 */
export declare type $Shape<T extends object> = Partial<T>;
/**
 * $NonMaybeType
 * @desc Excludes null and undefined from T
 * @see https://flow.org/en/docs/types/utilities/#toc-nonmaybe
 * @example
 *   type MaybeName = string | null;
 *
 *   // Expect: string
 *   type Name = $NonMaybeType<MaybeName>;
 */
export declare type $NonMaybeType<T> = NonNullable<T>;
/**
 * Class
 * @desc Represents constructor of type T
 * @see https://flow.org/en/docs/types/utilities/#toc-class
 * @example
 *   class Store {}
 *   function makeStore(storeClass: Class<Store>): Store {
 *     return new storeClass();
 *   }
 */
export declare type Class<T> = new (...args: any[]) => T;
/**
 * mixed
 * @desc An arbitrary type that could be anything
 * @see https://flow.org/en/docs/types/mixed
 * @example
 *
 * function stringify(value: mixed) {
 *     // ...
 *   }
 *
 *   stringify("foo");
 *   stringify(3.14);
 *   stringify(null);
 *   stringify({});
 */
export declare type mixed = unknown;
