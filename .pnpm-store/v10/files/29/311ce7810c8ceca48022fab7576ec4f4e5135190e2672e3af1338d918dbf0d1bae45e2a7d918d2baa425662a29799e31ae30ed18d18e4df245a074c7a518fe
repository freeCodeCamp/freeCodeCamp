import { type EscapeSequence } from './types/escape-sequence.js';
type AddSlashesOptions = {
    /**
     * Indicate which characters should be encoded and how.
     *
     * - Return `false` to leave the character unencoded.
     * - Return `true` to encode the character to its default escape sequence.
     * - Return a string to provide a custom escape sequence.
     */
    readonly getEscaped?: (char: string) => EscapeSequence | boolean;
};
/**
 * Encode characters as escape sequences.
 *
 * By default, the following characters are encoded:
 *
 * - `\b` Backspace
 * - `\f` Linefeed
 * - `\n` Newline
 * - `\r` Carriage Return
 * - `\t` Tab
 * - `\v` Vertical Tab
 * - `\0` Null
 * - `"` Double quote
 * - `\` Backslash
 *
 * Use the `getEscaped` option to encode additional characters or to override
 * the default escapes.
 */
declare const addSlashes: (str: string, options?: AddSlashesOptions) => string;
export { type AddSlashesOptions, addSlashes };
