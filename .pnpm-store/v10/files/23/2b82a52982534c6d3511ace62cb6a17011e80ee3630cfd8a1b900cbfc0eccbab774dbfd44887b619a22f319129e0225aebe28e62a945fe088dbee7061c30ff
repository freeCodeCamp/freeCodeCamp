import { type EscapeSequence } from './types/escape-sequence.js';
type RemoveSlashesOptions = {
    readonly getUnescaped?: (sequence: EscapeSequence, code: number | null) => boolean | string;
};
/**
 * Remove one layer of slashes, decoding any Javascript escape sequences into
 * their corresponding characters (eg. `\\n` would become a newline).
 *
 * Use the `getUnescaped` option to customize escape sequence decoding.
 */
declare const removeSlashes: (source: string, options?: RemoveSlashesOptions) => string;
/**
 * @deprecated Use {@link removeSlashes} instead.
 */
declare const stripSlashes: (source: string, options?: RemoveSlashesOptions) => string;
export { removeSlashes, stripSlashes };
