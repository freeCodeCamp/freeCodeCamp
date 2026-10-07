export declare const FOLD_FLOW = "flow";
export declare const FOLD_BLOCK = "block";
export declare const FOLD_QUOTED = "quoted";
/**
 * `'block'` prevents more-indented lines from being folded;
 * `'quoted'` allows for `\` escapes, including escaped newlines
 */
export type FoldMode = 'flow' | 'block' | 'quoted';
export interface FoldOptions {
    /**
     * Accounts for leading contents on the first line, defaulting to
     * `indent.length`
     */
    indentAtStart?: number;
    /** Default: `80` */
    lineWidth?: number;
    /**
     * Allow highly indented lines to stretch the line width or indent content
     * from the start.
     *
     * Default: `20`
     */
    minContentWidth?: number;
    /** Called once if the text is folded */
    onFold?: () => void;
    /** Called once if any line of text exceeds lineWidth characters */
    onOverflow?: () => void;
}
/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 */
export declare function foldFlowLines(text: string, indent: string, mode?: FoldMode, { indentAtStart, lineWidth, minContentWidth, onFold, onOverflow }?: FoldOptions): string;
