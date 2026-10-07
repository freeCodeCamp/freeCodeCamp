/**
 * Wrap words to a specified length.
 */
export = wrap;

declare function wrap(str: string, options?: wrap.IOptions): string;

declare namespace wrap {
    export interface IOptions {

        /**
         * The width of the text before wrapping to a new line.
         * @default ´50´
         */
        width?: number;

        /**
         * The string to use at the beginning of each line.
         * @default ´  ´ (two spaces)
         */
        indent?: string;

        /**
         * The string to use at the end of each line.
         * @default ´\n´
         */
        newline?: string;

        /**
         * An escape function to run on each line after splitting them.
         * @default (str: string) => string;
         */
        escape?: (str: string) => string;

        /**
         * Trim trailing whitespace from the returned string.
         * This option is included since .trim() would also strip
         * the leading indentation from the first line.
         * @default true
         */
        trim?: boolean;

        /**
         * Break a word between any two letters when the word is longer
         * than the specified width.
         * @default false
         */
        cut?: boolean;
    }
}
