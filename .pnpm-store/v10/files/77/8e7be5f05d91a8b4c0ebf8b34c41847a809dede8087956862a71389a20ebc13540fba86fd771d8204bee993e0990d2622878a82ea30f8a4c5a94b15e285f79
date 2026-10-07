
/**
 * This file consists only of basic types used in multiple places.
 * For types with javascript, create separate files by themselves.
 */

export type Mode = "math" | "text";

// LaTeX argument type.
//   - "size": A size-like thing, such as "1em" or "5ex"
//   - "color": An html color, like "#abc" or "blue"
//   - "url": An url string, in which "\" will be ignored
//   -        if it precedes [#$%&~_^\{}]
//   - "raw": A string, allowing single character, percent sign,
//            and nested braces
//   - "original": The same type as the environment that the
//                 function being parsed is in (e.g. used for the
//                 bodies of functions like \textcolor where the
//                 first argument is special and the second
//                 argument is parsed normally)
//   - Mode: Node group parsed in given mode.
export type ArgType = "color" | "size" | "url" | "raw" | "original" | "hbox" |
    "primitive" | Mode;

// LaTeX display style.
export type StyleStr = "text" | "display" | "script" | "scriptscript";

// Allowable token text for "break" arguments in parser.
export type BreakToken = "]" | "}" | "\\endgroup" | "$" | "\\)" | "\\\\" | "\\end" |
    "EOF";

// Math font variants.
export type FontVariant = "bold" | "bold-italic" | "bold-sans-serif" |
    "double-struck" | "fraktur" | "italic" | "monospace" | "normal" | "sans-serif" |
    "sans-serif-bold-italic" | "sans-serif-italic" | "script";
