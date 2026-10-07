declare module 'shallow-equal' {
  type primitives =
    | string
    | number
    | boolean
    | bigint
    | undefined
    | symbol
    | null;
  export function shallowEqualArrays(arr1: primitives[], arr2: primitives[]): boolean;

  interface primitiveObject {
    [key: string]: primitives;
  }
  export function shallowEqualObjects(
    obj1: primitiveObject | undefined,
    obj2: primitiveObject | undefined
  ): boolean;
}
