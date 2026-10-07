// Based on https://github.com/octet-stream/form-data/blob/2d0f0dc371517444ce1f22cdde13f51995d0953a/lib/FormData.ts (MIT)
/// <reference types="node" />

import { File } from 'buffer'
import { SpecIterableIterator } from './fetch'

/**
 * A `string` or `File` that represents a single value from a set of `FormData` key-value pairs.
 */
declare type FormDataEntryValue = string | File

/**
 * Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using fetch().
 */
export declare class FormData {
  /**
   * Appends a new value onto an existing key inside a FormData object,
   * or adds the key if it does not already exist.
   *
   * The difference between `set()` and `append()` is that if the specified key already exists, `set()` will overwrite all existing values with the new one, whereas `append()` will append the new value onto the end of the existing set of values.
   *
   * @param name The name of the field whose data is contained in `value`.
   * @param value The field's value. This can be [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
    or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). If none of these are specified the value is converted to a string.
   * @param fileName The filename reported to the server, when a Blob or File is passed as the second parameter. The default filename for Blob objects is "blob". The default filename for File objects is the file's filename.
   */
  append (name: string, value: unknown, fileName?: string): void

  /**
   * Set a new value for an existing key inside FormData,
   * or add the new field if it does not already exist.
   *
   * @param name The name of the field whose data is contained in `value`.
   * @param value The field's value. This can be [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
    or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). If none of these are specified the value is converted to a string.
   * @param fileName The filename reported to the server, when a Blob or File is passed as the second parameter. The default filename for Blob objects is "blob". The default filename for File objects is the file's filename.
   *
   */
  set (name: string, value: unknown, fileName?: string): void

  /**
   * Returns the first value associated with a given key from within a `FormData` object.
   * If you expect multiple values and want all of them, use the `getAll()` method instead.
   *
   * @param {string} name A name of the value you want to retrieve.
   *
   * @returns A `FormDataEntryValue` containing the value. If the key doesn't exist, the method returns null.
   */
  get (name: string): FormDataEntryValue | null

  /**
   * Returns all the values associated with a given key from within a `FormData` object.
   *
   * @param {string} name A name of the value you want to retrieve.
   *
   * @returns An array of `FormDataEntryValue` whose key matches the value passed in the `name` parameter. If the key doesn't exist, the method returns an empty list.
   */
  getAll (name: string): FormDataEntryValue[]

  /**
   * Returns a boolean stating whether a `FormData` object contains a certain key.
   *
   * @param name A string representing the name of the key you want to test for.
   *
   * @return A boolean value.
   */
  has (name: string): boolean

  /**
   * Deletes a key and its value(s) from a `FormData` object.
   *
   * @param name The name of the key you want to delete.
   */
  delete (name: string): void

  /**
   * Executes given callback function for each field of the FormData instance
   */
  forEach: (
    callbackfn: (value: FormDataEntryValue, key: string, iterable: FormData) => void,
    thisArg?: unknown
  ) => void

  /**
   * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through all keys contained in this `FormData` object.
   * Each key is a `string`.
   */
  keys: () => SpecIterableIterator<string>

  /**
   * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through all values contained in this object `FormData` object.
   * Each value is a [`FormDataValue`](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEntryValue).
   */
  values: () => SpecIterableIterator<FormDataEntryValue>

  /**
   * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through the `FormData` key/value pairs.
   * The key of each pair is a string; the value is a [`FormDataValue`](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEntryValue).
   */
  entries: () => SpecIterableIterator<[string, FormDataEntryValue]>

  /**
   * An alias for FormData#entries()
   */
  [Symbol.iterator]: () => SpecIterableIterator<[string, FormDataEntryValue]>

  readonly [Symbol.toStringTag]: string
}
