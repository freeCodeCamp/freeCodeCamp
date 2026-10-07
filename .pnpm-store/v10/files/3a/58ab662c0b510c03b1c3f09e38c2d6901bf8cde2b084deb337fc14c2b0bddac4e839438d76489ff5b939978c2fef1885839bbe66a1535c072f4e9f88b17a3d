import type { FileLike } from "../FileLike.js";
/**
 * Check if given object is `File`.
 *
 * Note that this function will return `false` for Blob, because the FormDataEncoder expects FormData to return File when a value is binary data.
 *
 * @param value an object to test
 *
 * @api public
 *
 * This function will return `true` for FileAPI compatible `File` objects:
 *
 * ```
 * import {createReadStream} from "node:fs"
 *
 * import {isFile} from "form-data-encoder"
 *
 * isFile(new File(["Content"], "file.txt")) // -> true
 * ```
 *
 * However, if you pass a Node.js `Buffer` or `ReadStream`, it will return `false`:
 *
 * ```js
 * import {isFile} from "form-data-encoder"
 *
 * isFile(Buffer.from("Content")) // -> false
 * isFile(createReadStream("path/to/a/file.txt")) // -> false
 * ```
 */
export declare const isFile: (value: unknown) => value is FileLike;
/**
 * @deprecated use `isFile` instead
  */
export declare const isFileLike: (value: unknown) => value is FileLike;
