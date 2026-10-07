import type { Mapping } from "@mischnic/json-sourcemap";
/** These positions are 1-based (so <code>1</code> is the first line/column) */
export declare type DiagnosticHighlightLocation = {
    readonly line: number;
    readonly column: number;
};
export declare type DiagnosticSeverity = "error" | "warn" | "info";
/**
 * Note: A tab character is always counted as a single character
 * This is to prevent any mismatch of highlighting across machines
 */
export declare type DiagnosticCodeHighlight = {
    /** Location of the first character that should get highlighted for this highlight. */
    start: DiagnosticHighlightLocation;
    /** Location of the last character that should get highlighted for this highlight. */
    end: DiagnosticHighlightLocation;
    /** A message that should be displayed at this location in the code (optional). */
    message?: string;
};
/**
 * Describes how to format a code frame.
 * A code frame is a visualization of a piece of code with a certain amount of
 * code highlights that point to certain chunk(s) inside the code.
 */
export declare type DiagnosticCodeFrame = {
    /**
     * The contents of the source file.
     *
     * If no code is passed, it will be read in from filePath, remember that
     * the asset's current code could be different from the input contents.
     *
     */
    code?: string;
    /** Path to the file this code frame is about (optional, absolute or relative to the project root) */
    filePath?: string;
    /** Language of the file this code frame is about (optional) */
    language?: string;
    codeHighlights: Array<DiagnosticCodeHighlight>;
};
/**
 * A style agnostic way of emitting errors, warnings and info.
 * Reporters are responsible for rendering the message, codeframes, hints, ...
 */
export declare type Diagnostic = {
    /** This is the message you want to log. */
    message: string;
    /** Name of plugin or file that threw this error */
    origin?: string;
    /** A stacktrace of the error (optional) */
    stack?: string;
    /** Name of the error (optional) */
    name?: string;
    /** A code frame points to a certain location(s) in the file this diagnostic is linked to (optional) */
    codeFrames?: Array<DiagnosticCodeFrame> | null | undefined;
    /** An optional list of strings that suggest ways to resolve this issue */
    hints?: Array<string>;
    /** @private */
    skipFormatting?: boolean;
    /** A URL to documentation to learn more about the diagnostic. */
    documentationURL?: string;
};
export interface PrintableError extends Error {
    fileName?: string;
    filePath?: string;
    codeFrame?: string;
    highlightedCodeFrame?: string;
    loc?: {
        column: number;
        line: number;
    } | null | undefined;
    source?: string;
}
export declare type DiagnosticWithoutOrigin = Diagnostic & {
    origin?: string;
};
/** Something that can be turned into a diagnostic. */
export declare type Diagnostifiable = Diagnostic | Array<Diagnostic> | ThrowableDiagnostic | PrintableError | Error | string;
/** Normalize the given value into a diagnostic. */
export declare function anyToDiagnostic(input: Diagnostifiable): Array<Diagnostic>;
/** Normalize the given error into a diagnostic. */
export declare function errorToDiagnostic(error: ThrowableDiagnostic | PrintableError | string, defaultValues?: {
    origin?: string | null | undefined;
    filePath?: string | null | undefined;
}): Array<Diagnostic>;
declare type ThrowableDiagnosticOpts = {
    diagnostic: Diagnostic | Array<Diagnostic>;
};
/**
 * An error wrapper around a diagnostic that can be <code>throw</code>n (e.g. to signal a
 * build error).
 */
export default class ThrowableDiagnostic extends Error {
    diagnostics: Array<Diagnostic>;
    constructor(opts: ThrowableDiagnosticOpts);
}
/**
 * Turns a list of positions in a JSON5 file with messages into a list of diagnostics.
 * Uses <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>.
 *
 * @param code the JSON code
 * @param ids A list of JSON keypaths (<code>key: "/some/parent/child"</code>) with corresponding messages, \
 * <code>type</code> signifies whether the key of the value in a JSON object should be highlighted.
 */
export declare function generateJSONCodeHighlights(data: string | {
    data: unknown;
    pointers: Record<string, Mapping>;
}, ids: Array<{
    key: string;
    type?: ("key" | null | undefined) | "value";
    message?: string;
}>): Array<DiagnosticCodeHighlight>;
/**
 * Converts entries in <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>'s
 * <code>result.pointers</code> array.
 */
export declare function getJSONSourceLocation(pos: Mapping, type?: ("key" | null | undefined) | "value"): {
    start: DiagnosticHighlightLocation;
    end: DiagnosticHighlightLocation;
};
/** Sanitizes object keys before using them as <code>key</code> in generateJSONCodeHighlights */
export declare function encodeJSONKeyComponent(component: string): string;
export declare function escapeMarkdown(s: string): string;
declare type TemplateInput = any;
export declare function md(strings: Array<string>, ...params: Array<TemplateInput>): string;
export declare namespace md {
    var bold: (s: any) => any;
    var italic: (s: any) => any;
    var underline: (s: any) => any;
    var strikethrough: (s: any) => any;
}
export {};
