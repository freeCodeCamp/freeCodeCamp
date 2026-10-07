/**
 * Tests to see if the object is an ES2015 (ES6) Promise
 * @see {@link https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects}
 * @param value the object to test
 */
export function isPromise(value: any): value is PromiseLike<any> {
  return !!value && typeof (<any>value).subscribe !== 'function' && typeof (value as any).then === 'function';
}
