//#region src/glossary.d.ts
type HeadersList = Array<[string, string | string[]]>;
type FlatHeadersList = [string, string][];
type HeadersObject = Record<string, string | string[]>;
type FlatHeadersObject = Record<string, string>;
//#endregion
//#region src/Headers.d.ts
declare const NORMALIZED_HEADERS: unique symbol;
declare const RAW_HEADER_NAMES: unique symbol;
declare class Headers$1 {
  private [NORMALIZED_HEADERS];
  private [RAW_HEADER_NAMES];
  constructor(init?: HeadersInit | HeadersObject | HeadersList);
  [Symbol.toStringTag]: string;
  [Symbol.iterator](): Generator<[string, string], any, any>;
  keys(): Generator<string>;
  values(): Generator<string>;
  entries(): Generator<[string, string]>;
  /**
   * Returns a boolean stating whether a `Headers` object contains a certain header.
   */
  has(name: string): boolean;
  /**
   * Returns a `ByteString` sequence of all the values of a header with a given name.
   */
  get(name: string): string | null;
  /**
   * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  set(name: string, value: string): void;
  /**
   * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  append(name: string, value: string): void;
  /**
   * Deletes a header from the `Headers` object.
   */
  delete(name: string): void;
  /**
   * Traverses the `Headers` object,
   * calling the given callback for each header.
   */
  forEach<ThisArg = this>(callback: (this: ThisArg, value: string, name: string, parent: this) => void, thisArg?: ThisArg): void;
  /**
   * Returns an array containing the values
   * of all Set-Cookie headers associated
   * with a response
   */
  getSetCookie(): string[];
}
//#endregion
//#region src/getRawHeaders.d.ts
/**
 * Returns the object of all raw headers.
 */
declare function getRawHeaders(headers: Headers): Record<string, string>;
//#endregion
//#region src/transformers/headersToString.d.ts
/**
 * Converts a given `Headers` instance to its string representation.
 */
declare function headersToString(headers: Headers): string;
//#endregion
//#region src/transformers/headersToList.d.ts
declare function headersToList(headers: Headers): HeadersList;
//#endregion
//#region src/transformers/headersToObject.d.ts
/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
declare function headersToObject(headers: Headers): HeadersObject;
//#endregion
//#region src/transformers/stringToHeaders.d.ts
/**
 * Converts a string representation of headers (i.e. from XMLHttpRequest)
 * to a new `Headers` instance.
 */
declare function stringToHeaders(str: string): Headers$1;
//#endregion
//#region src/transformers/listToHeaders.d.ts
declare function listToHeaders(list: HeadersList): Headers$1;
//#endregion
//#region src/transformers/objectToHeaders.d.ts
/**
 * Converts a given headers object to a new `Headers` instance.
 */
declare function objectToHeaders(headersObject: Record<string, string | string[] | undefined>): Headers$1;
//#endregion
//#region src/transformers/reduceHeadersObject.d.ts
/**
 * Reduces given headers object instnace.
 */
declare function reduceHeadersObject<R>(headers: HeadersObject, reducer: (headers: R, name: string, value: string | string[]) => R, initialState: R): R;
//#endregion
//#region src/transformers/flattenHeadersList.d.ts
declare function flattenHeadersList(list: HeadersList): FlatHeadersList;
//#endregion
//#region src/transformers/flattenHeadersObject.d.ts
declare function flattenHeadersObject(headersObject: HeadersObject): FlatHeadersObject;
//#endregion
export { type FlatHeadersList, type FlatHeadersObject, Headers$1 as Headers, type HeadersList, type HeadersObject, flattenHeadersList, flattenHeadersObject, getRawHeaders, headersToList, headersToObject, headersToString, listToHeaders, objectToHeaders, reduceHeadersObject, stringToHeaders };
//# sourceMappingURL=index.d.cts.map