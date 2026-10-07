import { Key } from "./Key";

/**
 * Represents the return of a key-related operation that may or may not have
 * been completed.
 *
 * @see https://msdn.microsoft.com/en-us/library/dn302314(v=vs.85).aspx
 */
export interface KeyOperation {
  oncomplete: (event: Event) => void;
  onerror: (event: Event) => void;
  readonly result: Key | undefined;
}
