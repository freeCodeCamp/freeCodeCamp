export interface HeaderValue {
    value: string;
    params?: { [key: string]: string } | undefined;
}

export interface ParsedHeaderValue extends HeaderValue {
    params: { [key: string]: string };
}

export interface ParsedHeaderParam {
    key: string;
    value: string;
}

/** Checks if a value is plaintext string (uses only printable 7bit chars) */
export function isPlainText(value: string): boolean;

/**
 * Checks if a multi line string containes lines longer than the selected value.
 *
 * Useful when detecting if a mail message needs any processing at all –
 * if only plaintext characters are used and lines are short, then there is
 * no need to encode the values in any way. If the value is plaintext but has
 * longer lines then allowed, then use format=flowed
 */
export function hasLongerLines(str: string, lineLength: number): boolean;

/** Encodes a string or an Buffer to an UTF-8 MIME Word (rfc2047) */
export function encodeWord(data: Buffer | string, mimeWordEncoding?: "Q" | "B", maxLength?: number): string;

/** Finds word sequences with non ascii text and converts these to mime words */
export function encodeWords(value: string, mimeWordEncoding?: "Q" | "B", maxLength?: number): string;

/**
 * Joins parsed header value together as 'value; param1=value1; param2=value2'
 * PS: We are following RFC 822 for the list of special characters that we need to keep in quotes.
 *      Refer: https://www.w3.org/Protocols/rfc1341/4_Content-Type.html
 */
export function buildHeaderValue(structured: HeaderValue): string;

/**
 * Encodes a string or an Buffer to an UTF-8 Parameter Value Continuation encoding (rfc2231)
 * Useful for splitting long parameter values.
 *
 * For example
 * ```
 *     title="unicode string"
 * ```
 * becomes
 * ```
 *     title*0*=utf-8''unicode
 *     title*1*=%20string
 * ```
 */
export function buildHeaderParam(key: string, data: Buffer | string, maxLength?: number): ParsedHeaderParam[];

/**
 * Parses a header value with key=value arguments into a structured
 * object.
 *
 * ```
 *   parseHeaderValue('content-type: text/plain; CHARSET='UTF-8') ->
 *   {
 *     'value': 'text/plain',
 *     'params': {
 *       'charset': 'UTF-8'
 *     }
 *   }
 * ```
 */
export function parseHeaderValue(str: string): ParsedHeaderValue;

/** Returns file extension for a content type string. If no suitable extensions are found, 'bin' is used as the default extension */
export function detectExtension(mimeType: string): string;

/** Returns content type for a file extension. If no suitable content types are found, 'application/octet-stream' is used as the default content type */
export function detectMimeType(extension: string): string;

/** Folds long lines, useful for folding header lines (afterSpace=false) and flowed text (afterSpace=true) */
export function foldLines(str: string, lineLength?: number, afterSpace?: boolean): string;

/** Splits a mime encoded string. Needed for dividing mime words into smaller chunks */
export function splitMimeEncodedString(str: string, maxlen?: number): string[];

export function encodeURICharComponent(chr: string): string;

export function safeEncodeURIComponent(str: string): string;
