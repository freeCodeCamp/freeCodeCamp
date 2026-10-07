/**
 * This file holds a list of all no-argument functions and single-character
 * symbols (like 'a' or ';').
 *
 * For each of the symbols, there are three properties they can have:
 * - font (required): the font to be used for this symbol. Either "main" (the
     normal font), or "ams" (the ams fonts).
 * - group (required): the ParseNode group type the symbol should have (i.e.
     "textord", "mathord", etc).
     See https://github.com/KaTeX/KaTeX/wiki/Examining-TeX#group-types
 * - replace: the character that this symbol or function should be
 *   replaced with (i.e. "\phi" has a replace value of "\u03d5", the phi
 *   character in the main font).
 *
 * The outermost map in the table indicates what mode the symbols should be
 * accepted in (e.g. "math" or "text").
 */

import type {Mode} from "./types";

type Font = "main" | "ams";
// Some of these have a "-token" suffix since these are also used as `ParseNode`
// types for raw text tokens, and we want to avoid conflicts with higher-level
// `ParseNode` types. These `ParseNode`s are constructed within `Parser` by
// looking up the `symbols` map.
export const ATOMS = {
    "bin": 1,
    "close": 1,
    "inner": 1,
    "open": 1,
    "punct": 1,
    "rel": 1,
};
export const NON_ATOMS = {
    "accent-token": 1,
    "mathord": 1,
    "op-token": 1,
    "spacing": 1,
    "textord": 1,
};

export type Atom = keyof typeof ATOMS;
export type NonAtom = keyof typeof NON_ATOMS;
export type Group = Atom | NonAtom;

type CharInfoMap = Record<string, {font: Font, group: Group, replace: string | null | undefined}>;

const symbols: Record<Mode, CharInfoMap> = {
    "math": {},
    "text": {},
};
export default symbols;

/** `acceptUnicodeChar = true` is only applicable if `replace` is set. */
export function defineSymbol(
    mode: Mode,
    font: Font,
    group: Group,
    replace: string | null | undefined,
    name: string,
    acceptUnicodeChar?: boolean,
) {
    symbols[mode][name] = {font, group, replace};

    if (acceptUnicodeChar && replace) {
        symbols[mode][replace] = symbols[mode][name];
    }
}

// Some abbreviations for commonly used strings.
// This helps minify the code, and also spotting typos using jshint.

// modes:
const math = "math";
const text = "text";

// fonts:
const main = "main";
const ams = "ams";

// groups:
const accent = "accent-token";
const bin = "bin";
const close = "close";
const inner = "inner";
const mathord = "mathord";
const op = "op-token";
const open = "open";
const punct = "punct";
const rel = "rel";
const spacing = "spacing";
const textord = "textord";

// Now comes the symbol table

// Relation Symbols
defineSymbol(math, main, rel, "\u2261", "\\equiv", true);
defineSymbol(math, main, rel, "\u227a", "\\prec", true);
defineSymbol(math, main, rel, "\u227b", "\\succ", true);
defineSymbol(math, main, rel, "\u223c", "\\sim", true);
defineSymbol(math, main, rel, "\u22a5", "\\perp");
defineSymbol(math, main, rel, "\u2aaf", "\\preceq", true);
defineSymbol(math, main, rel, "\u2ab0", "\\succeq", true);
defineSymbol(math, main, rel, "\u2243", "\\simeq", true);
defineSymbol(math, main, rel, "\u2223", "\\mid", true);
defineSymbol(math, main, rel, "\u226a", "\\ll", true);
defineSymbol(math, main, rel, "\u226b", "\\gg", true);
defineSymbol(math, main, rel, "\u224d", "\\asymp", true);
defineSymbol(math, main, rel, "\u2225", "\\parallel");
defineSymbol(math, main, rel, "\u22c8", "\\bowtie", true);
defineSymbol(math, main, rel, "\u2323", "\\smile", true);
defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq", true);
defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq", true);
defineSymbol(math, main, rel, "\u2250", "\\doteq", true);
defineSymbol(math, main, rel, "\u2322", "\\frown", true);
defineSymbol(math, main, rel, "\u220b", "\\ni", true);
defineSymbol(math, main, rel, "\u221d", "\\propto", true);
defineSymbol(math, main, rel, "\u22a2", "\\vdash", true);
defineSymbol(math, main, rel, "\u22a3", "\\dashv", true);
defineSymbol(math, main, rel, "\u220b", "\\owns");

// Punctuation
defineSymbol(math, main, punct, "\u002e", "\\ldotp");
defineSymbol(math, main, punct, "\u22c5", "\\cdotp");
// The KaTeX fonts do not contain U+00B7. Use the centered dot glyph at U+22C5
// in both modes, but keep math-mode punctuation spacing only in math mode.
defineSymbol(math, main, punct, "\u22c5", "\u00b7");
defineSymbol(text, main, textord, "\u22c5", "\u00b7");

// Misc Symbols
defineSymbol(math, main, textord, "\u0023", "\\#");
defineSymbol(text, main, textord, "\u0023", "\\#");
defineSymbol(math, main, textord, "\u0026", "\\&");
defineSymbol(text, main, textord, "\u0026", "\\&");
defineSymbol(math, main, textord, "\u2135", "\\aleph", true);
defineSymbol(math, main, textord, "\u2200", "\\forall", true);
defineSymbol(math, main, textord, "\u210f", "\\hbar", true);
defineSymbol(math, main, textord, "\u2203", "\\exists", true);
defineSymbol(math, main, textord, "\u2207", "\\nabla", true);
defineSymbol(math, main, textord, "\u266d", "\\flat", true);
defineSymbol(math, main, textord, "\u2113", "\\ell", true);
defineSymbol(math, main, textord, "\u266e", "\\natural", true);
defineSymbol(math, main, textord, "\u2663", "\\clubsuit", true);
defineSymbol(math, main, textord, "\u2118", "\\wp", true);
defineSymbol(math, main, textord, "\u266f", "\\sharp", true);
defineSymbol(math, main, textord, "\u2662", "\\diamondsuit", true);
defineSymbol(math, main, textord, "\u211c", "\\Re", true);
defineSymbol(math, main, textord, "\u2661", "\\heartsuit", true);
defineSymbol(math, main, textord, "\u2111", "\\Im", true);
defineSymbol(math, main, textord, "\u2660", "\\spadesuit", true);
defineSymbol(math, main, textord, "\u00a7", "\\S", true);
defineSymbol(text, main, textord, "\u00a7", "\\S");
defineSymbol(math, main, textord, "\u00b6", "\\P", true);
defineSymbol(text, main, textord, "\u00b6", "\\P");

// Math and Text
defineSymbol(math, main, textord, "\u2020", "\\dag");
defineSymbol(text, main, textord, "\u2020", "\\dag");
defineSymbol(text, main, textord, "\u2020", "\\textdagger");
defineSymbol(math, main, textord, "\u2021", "\\ddag");
defineSymbol(text, main, textord, "\u2021", "\\ddag");
defineSymbol(text, main, textord, "\u2021", "\\textdaggerdbl");

// Large Delimiters
defineSymbol(math, main, close, "\u23b1", "\\rmoustache", true);
defineSymbol(math, main, open, "\u23b0", "\\lmoustache", true);
defineSymbol(math, main, close, "\u27ef", "\\rgroup", true);
defineSymbol(math, main, open, "\u27ee", "\\lgroup", true);

// Binary Operators
defineSymbol(math, main, bin, "\u2213", "\\mp", true);
defineSymbol(math, main, bin, "\u2296", "\\ominus", true);
defineSymbol(math, main, bin, "\u228e", "\\uplus", true);
defineSymbol(math, main, bin, "\u2293", "\\sqcap", true);
defineSymbol(math, main, bin, "\u2217", "\\ast");
defineSymbol(math, main, bin, "\u2294", "\\sqcup", true);
defineSymbol(math, main, bin, "\u25ef", "\\bigcirc", true);
defineSymbol(math, main, bin, "\u2219", "\\bullet", true);
defineSymbol(math, main, bin, "\u2021", "\\ddagger");
defineSymbol(math, main, bin, "\u2240", "\\wr", true);
defineSymbol(math, main, bin, "\u2a3f", "\\amalg");
defineSymbol(math, main, bin, "\u0026", "\\And");  // from amsmath

// Arrow Symbols
defineSymbol(math, main, rel, "\u27f5", "\\longleftarrow", true);
defineSymbol(math, main, rel, "\u21d0", "\\Leftarrow", true);
defineSymbol(math, main, rel, "\u27f8", "\\Longleftarrow", true);
defineSymbol(math, main, rel, "\u27f6", "\\longrightarrow", true);
defineSymbol(math, main, rel, "\u21d2", "\\Rightarrow", true);
defineSymbol(math, main, rel, "\u27f9", "\\Longrightarrow", true);
defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow", true);
defineSymbol(math, main, rel, "\u27f7", "\\longleftrightarrow", true);
defineSymbol(math, main, rel, "\u21d4", "\\Leftrightarrow", true);
defineSymbol(math, main, rel, "\u27fa", "\\Longleftrightarrow", true);
defineSymbol(math, main, rel, "\u21a6", "\\mapsto", true);
defineSymbol(math, main, rel, "\u27fc", "\\longmapsto", true);
defineSymbol(math, main, rel, "\u2197", "\\nearrow", true);
defineSymbol(math, main, rel, "\u21a9", "\\hookleftarrow", true);
defineSymbol(math, main, rel, "\u21aa", "\\hookrightarrow", true);
defineSymbol(math, main, rel, "\u2198", "\\searrow", true);
defineSymbol(math, main, rel, "\u21bc", "\\leftharpoonup", true);
defineSymbol(math, main, rel, "\u21c0", "\\rightharpoonup", true);
defineSymbol(math, main, rel, "\u2199", "\\swarrow", true);
defineSymbol(math, main, rel, "\u21bd", "\\leftharpoondown", true);
defineSymbol(math, main, rel, "\u21c1", "\\rightharpoondown", true);
defineSymbol(math, main, rel, "\u2196", "\\nwarrow", true);
defineSymbol(math, main, rel, "\u21cc", "\\rightleftharpoons", true);

// AMS Negated Binary Relations
defineSymbol(math, ams, rel, "\u226e", "\\nless", true);
// Symbol names preceded by "@" each have a corresponding macro.
defineSymbol(math, ams, rel, "\ue010", "\\@nleqslant");
defineSymbol(math, ams, rel, "\ue011", "\\@nleqq");
defineSymbol(math, ams, rel, "\u2a87", "\\lneq", true);
defineSymbol(math, ams, rel, "\u2268", "\\lneqq", true);
defineSymbol(math, ams, rel, "\ue00c", "\\@lvertneqq");
defineSymbol(math, ams, rel, "\u22e6", "\\lnsim", true);
defineSymbol(math, ams, rel, "\u2a89", "\\lnapprox", true);
defineSymbol(math, ams, rel, "\u2280", "\\nprec", true);
// unicode-math maps \u22e0 to \npreccurlyeq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u22e0", "\\npreceq", true);
defineSymbol(math, ams, rel, "\u22e8", "\\precnsim", true);
defineSymbol(math, ams, rel, "\u2ab9", "\\precnapprox", true);
defineSymbol(math, ams, rel, "\u2241", "\\nsim", true);
defineSymbol(math, ams, rel, "\ue006", "\\@nshortmid");
defineSymbol(math, ams, rel, "\u2224", "\\nmid", true);
defineSymbol(math, ams, rel, "\u22ac", "\\nvdash", true);
defineSymbol(math, ams, rel, "\u22ad", "\\nvDash", true);
defineSymbol(math, ams, rel, "\u22ea", "\\ntriangleleft");
defineSymbol(math, ams, rel, "\u22ec", "\\ntrianglelefteq", true);
defineSymbol(math, ams, rel, "\u228a", "\\subsetneq", true);
defineSymbol(math, ams, rel, "\ue01a", "\\@varsubsetneq");
defineSymbol(math, ams, rel, "\u2acb", "\\subsetneqq", true);
defineSymbol(math, ams, rel, "\ue017", "\\@varsubsetneqq");
defineSymbol(math, ams, rel, "\u226f", "\\ngtr", true);
defineSymbol(math, ams, rel, "\ue00f", "\\@ngeqslant");
defineSymbol(math, ams, rel, "\ue00e", "\\@ngeqq");
defineSymbol(math, ams, rel, "\u2a88", "\\gneq", true);
defineSymbol(math, ams, rel, "\u2269", "\\gneqq", true);
defineSymbol(math, ams, rel, "\ue00d", "\\@gvertneqq");
defineSymbol(math, ams, rel, "\u22e7", "\\gnsim", true);
defineSymbol(math, ams, rel, "\u2a8a", "\\gnapprox", true);
defineSymbol(math, ams, rel, "\u2281", "\\nsucc", true);
// unicode-math maps \u22e1 to \nsucccurlyeq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u22e1", "\\nsucceq", true);
defineSymbol(math, ams, rel, "\u22e9", "\\succnsim", true);
defineSymbol(math, ams, rel, "\u2aba", "\\succnapprox", true);
// unicode-math maps \u2246 to \simneqq. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u2246", "\\ncong", true);
defineSymbol(math, ams, rel, "\ue007", "\\@nshortparallel");
defineSymbol(math, ams, rel, "\u2226", "\\nparallel", true);
defineSymbol(math, ams, rel, "\u22af", "\\nVDash", true);
defineSymbol(math, ams, rel, "\u22eb", "\\ntriangleright");
defineSymbol(math, ams, rel, "\u22ed", "\\ntrianglerighteq", true);
defineSymbol(math, ams, rel, "\ue018", "\\@nsupseteqq");
defineSymbol(math, ams, rel, "\u228b", "\\supsetneq", true);
defineSymbol(math, ams, rel, "\ue01b", "\\@varsupsetneq");
defineSymbol(math, ams, rel, "\u2acc", "\\supsetneqq", true);
defineSymbol(math, ams, rel, "\ue019", "\\@varsupsetneqq");
defineSymbol(math, ams, rel, "\u22ae", "\\nVdash", true);
defineSymbol(math, ams, rel, "\u2ab5", "\\precneqq", true);
defineSymbol(math, ams, rel, "\u2ab6", "\\succneqq", true);
defineSymbol(math, ams, rel, "\ue016", "\\@nsubseteqq");
defineSymbol(math, ams, bin, "\u22b4", "\\unlhd");
defineSymbol(math, ams, bin, "\u22b5", "\\unrhd");

// AMS Negated Arrows
defineSymbol(math, ams, rel, "\u219a", "\\nleftarrow", true);
defineSymbol(math, ams, rel, "\u219b", "\\nrightarrow", true);
defineSymbol(math, ams, rel, "\u21cd", "\\nLeftarrow", true);
defineSymbol(math, ams, rel, "\u21cf", "\\nRightarrow", true);
defineSymbol(math, ams, rel, "\u21ae", "\\nleftrightarrow", true);
defineSymbol(math, ams, rel, "\u21ce", "\\nLeftrightarrow", true);

// AMS Misc
defineSymbol(math, ams, rel, "\u25b3", "\\vartriangle");
defineSymbol(math, ams, textord, "\u210f", "\\hslash");
defineSymbol(math, ams, textord, "\u25bd", "\\triangledown");
defineSymbol(math, ams, textord, "\u25ca", "\\lozenge");
defineSymbol(math, ams, textord, "\u24c8", "\\circledS");
defineSymbol(math, ams, textord, "\u00ae", "\\circledR");
defineSymbol(text, ams, textord, "\u00ae", "\\circledR");
defineSymbol(math, ams, textord, "\u2221", "\\measuredangle", true);
defineSymbol(math, ams, textord, "\u2204", "\\nexists");
defineSymbol(math, ams, textord, "\u2127", "\\mho");
defineSymbol(math, ams, textord, "\u2132", "\\Finv", true);
defineSymbol(math, ams, textord, "\u2141", "\\Game", true);
defineSymbol(math, ams, textord, "\u2035", "\\backprime");
defineSymbol(math, ams, textord, "\u25b2", "\\blacktriangle");
defineSymbol(math, ams, textord, "\u25bc", "\\blacktriangledown");
defineSymbol(math, ams, textord, "\u25a0", "\\blacksquare");
defineSymbol(math, ams, textord, "\u29eb", "\\blacklozenge");
defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle", true);
defineSymbol(math, ams, textord, "\u2201", "\\complement", true);
// unicode-math maps U+F0 to \matheth. We map to AMS function \eth
defineSymbol(math, ams, textord, "\u00f0", "\\eth", true);
defineSymbol(text, main, textord, "\u00f0", "\u00f0");
defineSymbol(math, ams, textord, "\u2571", "\\diagup");
defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
defineSymbol(math, ams, textord, "\u25a1", "\\square");
defineSymbol(math, ams, textord, "\u25a1", "\\Box");
defineSymbol(math, ams, textord, "\u25ca", "\\Diamond");
// unicode-math maps U+A5 to \mathyen. We map to AMS function \yen
defineSymbol(math, ams, textord, "\u00a5", "\\yen", true);
defineSymbol(text, ams, textord, "\u00a5", "\\yen", true);
defineSymbol(math, ams, textord, "\u2713", "\\checkmark", true);
defineSymbol(text, ams, textord, "\u2713", "\\checkmark");

// AMS Hebrew
defineSymbol(math, ams, textord, "\u2136", "\\beth", true);
defineSymbol(math, ams, textord, "\u2138", "\\daleth", true);
defineSymbol(math, ams, textord, "\u2137", "\\gimel", true);

// AMS Greek
defineSymbol(math, ams, textord, "\u03dd", "\\digamma", true);
defineSymbol(math, ams, textord, "\u03f0", "\\varkappa");

// AMS Delimiters
defineSymbol(math, ams, open, "\u250c", "\\@ulcorner", true);
defineSymbol(math, ams, close, "\u2510", "\\@urcorner", true);
defineSymbol(math, ams, open, "\u2514", "\\@llcorner", true);
defineSymbol(math, ams, close, "\u2518", "\\@lrcorner", true);

// AMS Binary Relations
defineSymbol(math, ams, rel, "\u2266", "\\leqq", true);
defineSymbol(math, ams, rel, "\u2a7d", "\\leqslant", true);
defineSymbol(math, ams, rel, "\u2a95", "\\eqslantless", true);
defineSymbol(math, ams, rel, "\u2272", "\\lesssim", true);
defineSymbol(math, ams, rel, "\u2a85", "\\lessapprox", true);
defineSymbol(math, ams, rel, "\u224a", "\\approxeq", true);
defineSymbol(math, ams, bin, "\u22d6", "\\lessdot");
defineSymbol(math, ams, rel, "\u22d8", "\\lll", true);
defineSymbol(math, ams, rel, "\u2276", "\\lessgtr", true);
defineSymbol(math, ams, rel, "\u22da", "\\lesseqgtr", true);
defineSymbol(math, ams, rel, "\u2a8b", "\\lesseqqgtr", true);
defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq", true);
defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq", true);
defineSymbol(math, ams, rel, "\u223d", "\\backsim", true);
defineSymbol(math, ams, rel, "\u22cd", "\\backsimeq", true);
defineSymbol(math, ams, rel, "\u2ac5", "\\subseteqq", true);
defineSymbol(math, ams, rel, "\u22d0", "\\Subset", true);
defineSymbol(math, ams, rel, "\u228f", "\\sqsubset", true);
defineSymbol(math, ams, rel, "\u227c", "\\preccurlyeq", true);
defineSymbol(math, ams, rel, "\u22de", "\\curlyeqprec", true);
defineSymbol(math, ams, rel, "\u227e", "\\precsim", true);
defineSymbol(math, ams, rel, "\u2ab7", "\\precapprox", true);
defineSymbol(math, ams, rel, "\u22b2", "\\vartriangleleft");
defineSymbol(math, ams, rel, "\u22b4", "\\trianglelefteq");
defineSymbol(math, ams, rel, "\u22a8", "\\vDash", true);
defineSymbol(math, ams, rel, "\u22aa", "\\Vvdash", true);
defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
defineSymbol(math, ams, rel, "\u224f", "\\bumpeq", true);
defineSymbol(math, ams, rel, "\u224e", "\\Bumpeq", true);
defineSymbol(math, ams, rel, "\u2267", "\\geqq", true);
defineSymbol(math, ams, rel, "\u2a7e", "\\geqslant", true);
defineSymbol(math, ams, rel, "\u2a96", "\\eqslantgtr", true);
defineSymbol(math, ams, rel, "\u2273", "\\gtrsim", true);
defineSymbol(math, ams, rel, "\u2a86", "\\gtrapprox", true);
defineSymbol(math, ams, bin, "\u22d7", "\\gtrdot");
defineSymbol(math, ams, rel, "\u22d9", "\\ggg", true);
defineSymbol(math, ams, rel, "\u2277", "\\gtrless", true);
defineSymbol(math, ams, rel, "\u22db", "\\gtreqless", true);
defineSymbol(math, ams, rel, "\u2a8c", "\\gtreqqless", true);
defineSymbol(math, ams, rel, "\u2256", "\\eqcirc", true);
defineSymbol(math, ams, rel, "\u2257", "\\circeq", true);
defineSymbol(math, ams, rel, "\u225c", "\\triangleq", true);
defineSymbol(math, ams, rel, "\u223c", "\\thicksim");
defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
defineSymbol(math, ams, rel, "\u2ac6", "\\supseteqq", true);
defineSymbol(math, ams, rel, "\u22d1", "\\Supset", true);
defineSymbol(math, ams, rel, "\u2290", "\\sqsupset", true);
defineSymbol(math, ams, rel, "\u227d", "\\succcurlyeq", true);
defineSymbol(math, ams, rel, "\u22df", "\\curlyeqsucc", true);
defineSymbol(math, ams, rel, "\u227f", "\\succsim", true);
defineSymbol(math, ams, rel, "\u2ab8", "\\succapprox", true);
defineSymbol(math, ams, rel, "\u22b3", "\\vartriangleright");
defineSymbol(math, ams, rel, "\u22b5", "\\trianglerighteq");
defineSymbol(math, ams, rel, "\u22a9", "\\Vdash", true);
defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
defineSymbol(math, ams, rel, "\u226c", "\\between", true);
defineSymbol(math, ams, rel, "\u22d4", "\\pitchfork", true);
defineSymbol(math, ams, rel, "\u221d", "\\varpropto");
defineSymbol(math, ams, rel, "\u25c0", "\\blacktriangleleft");
// unicode-math says that \therefore is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(math, ams, rel, "\u2234", "\\therefore", true);
defineSymbol(math, ams, rel, "\u220d", "\\backepsilon");
defineSymbol(math, ams, rel, "\u25b6", "\\blacktriangleright");
// unicode-math says that \because is a mathord atom.
// We kept the amssymb atom type, which is rel.
defineSymbol(math, ams, rel, "\u2235", "\\because", true);
defineSymbol(math, ams, rel, "\u22d8", "\\llless");
defineSymbol(math, ams, rel, "\u22d9", "\\gggtr");
defineSymbol(math, ams, bin, "\u22b2", "\\lhd");
defineSymbol(math, ams, bin, "\u22b3", "\\rhd");
defineSymbol(math, ams, rel, "\u2242", "\\eqsim", true);
defineSymbol(math, main, rel, "\u22c8", "\\Join");
defineSymbol(math, ams, rel, "\u2251", "\\Doteq", true);

// AMS Binary Operators
defineSymbol(math, ams, bin, "\u2214", "\\dotplus", true);
defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
defineSymbol(math, ams, bin, "\u22d2", "\\Cap", true);
defineSymbol(math, ams, bin, "\u22d3", "\\Cup", true);
defineSymbol(math, ams, bin, "\u2a5e", "\\doublebarwedge", true);
defineSymbol(math, ams, bin, "\u229f", "\\boxminus", true);
defineSymbol(math, ams, bin, "\u229e", "\\boxplus", true);
defineSymbol(math, ams, bin, "\u22c7", "\\divideontimes", true);
defineSymbol(math, ams, bin, "\u22c9", "\\ltimes", true);
defineSymbol(math, ams, bin, "\u22ca", "\\rtimes", true);
defineSymbol(math, ams, bin, "\u22cb", "\\leftthreetimes", true);
defineSymbol(math, ams, bin, "\u22cc", "\\rightthreetimes", true);
defineSymbol(math, ams, bin, "\u22cf", "\\curlywedge", true);
defineSymbol(math, ams, bin, "\u22ce", "\\curlyvee", true);
defineSymbol(math, ams, bin, "\u229d", "\\circleddash", true);
defineSymbol(math, ams, bin, "\u229b", "\\circledast", true);
defineSymbol(math, ams, bin, "\u22c5", "\\centerdot");
defineSymbol(math, ams, bin, "\u22ba", "\\intercal", true);
defineSymbol(math, ams, bin, "\u22d2", "\\doublecap");
defineSymbol(math, ams, bin, "\u22d3", "\\doublecup");
defineSymbol(math, ams, bin, "\u22a0", "\\boxtimes", true);

// AMS Arrows
// Note: unicode-math maps \u21e2 to their own function \rightdasharrow.
// We'll map it to AMS function \dashrightarrow. It produces the same atom.
defineSymbol(math, ams, rel, "\u21e2", "\\dashrightarrow", true);
// unicode-math maps \u21e0 to \leftdasharrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21e0", "\\dashleftarrow", true);
defineSymbol(math, ams, rel, "\u21c7", "\\leftleftarrows", true);
defineSymbol(math, ams, rel, "\u21c6", "\\leftrightarrows", true);
defineSymbol(math, ams, rel, "\u21da", "\\Lleftarrow", true);
defineSymbol(math, ams, rel, "\u219e", "\\twoheadleftarrow", true);
defineSymbol(math, ams, rel, "\u21a2", "\\leftarrowtail", true);
defineSymbol(math, ams, rel, "\u21ab", "\\looparrowleft", true);
defineSymbol(math, ams, rel, "\u21cb", "\\leftrightharpoons", true);
defineSymbol(math, ams, rel, "\u21b6", "\\curvearrowleft", true);
// unicode-math maps \u21ba to \acwopencirclearrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21ba", "\\circlearrowleft", true);
defineSymbol(math, ams, rel, "\u21b0", "\\Lsh", true);
defineSymbol(math, ams, rel, "\u21c8", "\\upuparrows", true);
defineSymbol(math, ams, rel, "\u21bf", "\\upharpoonleft", true);
defineSymbol(math, ams, rel, "\u21c3", "\\downharpoonleft", true);
defineSymbol(math, main, rel, "\u22b6", "\\origof", true); // not in font
defineSymbol(math, main, rel, "\u22b7", "\\imageof", true); // not in font
defineSymbol(math, ams, rel, "\u22b8", "\\multimap", true);
defineSymbol(math, ams, rel, "\u21ad", "\\leftrightsquigarrow", true);
defineSymbol(math, ams, rel, "\u21c9", "\\rightrightarrows", true);
defineSymbol(math, ams, rel, "\u21c4", "\\rightleftarrows", true);
defineSymbol(math, ams, rel, "\u21a0", "\\twoheadrightarrow", true);
defineSymbol(math, ams, rel, "\u21a3", "\\rightarrowtail", true);
defineSymbol(math, ams, rel, "\u21ac", "\\looparrowright", true);
defineSymbol(math, ams, rel, "\u21b7", "\\curvearrowright", true);
// unicode-math maps \u21bb to \cwopencirclearrow. We'll use the AMS synonym.
defineSymbol(math, ams, rel, "\u21bb", "\\circlearrowright", true);
defineSymbol(math, ams, rel, "\u21b1", "\\Rsh", true);
defineSymbol(math, ams, rel, "\u21ca", "\\downdownarrows", true);
defineSymbol(math, ams, rel, "\u21be", "\\upharpoonright", true);
defineSymbol(math, ams, rel, "\u21c2", "\\downharpoonright", true);
defineSymbol(math, ams, rel, "\u21dd", "\\rightsquigarrow", true);
defineSymbol(math, ams, rel, "\u21dd", "\\leadsto");
defineSymbol(math, ams, rel, "\u21db", "\\Rrightarrow", true);
defineSymbol(math, ams, rel, "\u21be", "\\restriction");

defineSymbol(math, main, textord, "\u2018", "`");
defineSymbol(math, main, textord, "$", "\\$");
defineSymbol(text, main, textord, "$", "\\$");
defineSymbol(text, main, textord, "$", "\\textdollar");
defineSymbol(math, main, textord, "%", "\\%");
defineSymbol(text, main, textord, "%", "\\%");
defineSymbol(math, main, textord, "_", "\\_");
defineSymbol(text, main, textord, "_", "\\_");
defineSymbol(text, main, textord, "_", "\\textunderscore");
defineSymbol(math, main, textord, "\u2220", "\\angle", true);
defineSymbol(math, main, textord, "\u221e", "\\infty", true);
defineSymbol(math, main, textord, "\u2032", "\\prime");
defineSymbol(math, main, textord, "\u25b3", "\\triangle");
defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
defineSymbol(math, main, textord, "\u039b", "\\Lambda", true);
defineSymbol(math, main, textord, "\u039e", "\\Xi", true);
defineSymbol(math, main, textord, "\u03a0", "\\Pi", true);
defineSymbol(math, main, textord, "\u03a3", "\\Sigma", true);
defineSymbol(math, main, textord, "\u03a5", "\\Upsilon", true);
defineSymbol(math, main, textord, "\u03a6", "\\Phi", true);
defineSymbol(math, main, textord, "\u03a8", "\\Psi", true);
defineSymbol(math, main, textord, "\u03a9", "\\Omega", true);
defineSymbol(math, main, textord, "A", "\u0391");
defineSymbol(math, main, textord, "B", "\u0392");
defineSymbol(math, main, textord, "E", "\u0395");
defineSymbol(math, main, textord, "Z", "\u0396");
defineSymbol(math, main, textord, "H", "\u0397");
defineSymbol(math, main, textord, "I", "\u0399");
defineSymbol(math, main, textord, "K", "\u039A");
defineSymbol(math, main, textord, "M", "\u039C");
defineSymbol(math, main, textord, "N", "\u039D");
defineSymbol(math, main, textord, "O", "\u039F");
defineSymbol(math, main, textord, "P", "\u03A1");
defineSymbol(math, main, textord, "T", "\u03A4");
defineSymbol(math, main, textord, "X", "\u03A7");
defineSymbol(math, main, textord, "\u00ac", "\\neg", true);
defineSymbol(math, main, textord, "\u00ac", "\\lnot");
defineSymbol(math, main, textord, "\u22a4", "\\top");
defineSymbol(math, main, textord, "\u22a5", "\\bot");
defineSymbol(math, main, textord, "\u2205", "\\emptyset");
defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
defineSymbol(math, main, mathord, "\u03b1", "\\alpha", true);
defineSymbol(math, main, mathord, "\u03b2", "\\beta", true);
defineSymbol(math, main, mathord, "\u03b3", "\\gamma", true);
defineSymbol(math, main, mathord, "\u03b4", "\\delta", true);
defineSymbol(math, main, mathord, "\u03f5", "\\epsilon", true);
defineSymbol(math, main, mathord, "\u03b6", "\\zeta", true);
defineSymbol(math, main, mathord, "\u03b7", "\\eta", true);
defineSymbol(math, main, mathord, "\u03b8", "\\theta", true);
defineSymbol(math, main, mathord, "\u03b9", "\\iota", true);
defineSymbol(math, main, mathord, "\u03ba", "\\kappa", true);
defineSymbol(math, main, mathord, "\u03bb", "\\lambda", true);
defineSymbol(math, main, mathord, "\u03bc", "\\mu", true);
defineSymbol(math, main, mathord, "\u03bd", "\\nu", true);
defineSymbol(math, main, mathord, "\u03be", "\\xi", true);
defineSymbol(math, main, mathord, "\u03bf", "\\omicron", true);
defineSymbol(math, main, mathord, "\u03c0", "\\pi", true);
defineSymbol(math, main, mathord, "\u03c1", "\\rho", true);
defineSymbol(math, main, mathord, "\u03c3", "\\sigma", true);
defineSymbol(math, main, mathord, "\u03c4", "\\tau", true);
defineSymbol(math, main, mathord, "\u03c5", "\\upsilon", true);
defineSymbol(math, main, mathord, "\u03d5", "\\phi", true);
defineSymbol(math, main, mathord, "\u03c7", "\\chi", true);
defineSymbol(math, main, mathord, "\u03c8", "\\psi", true);
defineSymbol(math, main, mathord, "\u03c9", "\\omega", true);
defineSymbol(math, main, mathord, "\u03b5", "\\varepsilon", true);
defineSymbol(math, main, mathord, "\u03d1", "\\vartheta", true);
defineSymbol(math, main, mathord, "\u03d6", "\\varpi", true);
defineSymbol(math, main, mathord, "\u03f1", "\\varrho", true);
defineSymbol(math, main, mathord, "\u03c2", "\\varsigma", true);
defineSymbol(math, main, mathord, "\u03c6", "\\varphi", true);
defineSymbol(math, main, bin, "\u2217", "*", true);
defineSymbol(math, main, bin, "+", "+");
defineSymbol(math, main, bin, "\u2212", "-", true);
defineSymbol(math, main, bin, "\u22c5", "\\cdot", true);
defineSymbol(math, main, bin, "\u2218", "\\circ", true);
defineSymbol(math, main, bin, "\u00f7", "\\div", true);
defineSymbol(math, main, bin, "\u00b1", "\\pm", true);
defineSymbol(math, main, bin, "\u00d7", "\\times", true);
defineSymbol(math, main, bin, "\u2229", "\\cap", true);
defineSymbol(math, main, bin, "\u222a", "\\cup", true);
defineSymbol(math, main, bin, "\u2216", "\\setminus", true);
defineSymbol(math, main, bin, "\u2227", "\\land");
defineSymbol(math, main, bin, "\u2228", "\\lor");
defineSymbol(math, main, bin, "\u2227", "\\wedge", true);
defineSymbol(math, main, bin, "\u2228", "\\vee", true);
defineSymbol(math, main, textord, "\u221a", "\\surd");
defineSymbol(math, main, open, "\u27e8", "\\langle", true);
defineSymbol(math, main, open, "\u2223", "\\lvert");
defineSymbol(math, main, open, "\u2225", "\\lVert");
defineSymbol(math, main, close, "?", "?");
defineSymbol(math, main, close, "!", "!");
defineSymbol(math, main, close, "\u27e9", "\\rangle", true);
defineSymbol(math, main, close, "\u2223", "\\rvert");
defineSymbol(math, main, close, "\u2225", "\\rVert");
defineSymbol(math, main, rel, "=", "=");
defineSymbol(math, main, rel, ":", ":");
defineSymbol(math, main, rel, "\u2248", "\\approx", true);
defineSymbol(math, main, rel, "\u2245", "\\cong", true);
defineSymbol(math, main, rel, "\u2265", "\\ge");
defineSymbol(math, main, rel, "\u2265", "\\geq", true);
defineSymbol(math, main, rel, "\u2190", "\\gets");
defineSymbol(math, main, rel, ">", "\\gt", true);
defineSymbol(math, main, rel, "\u2208", "\\in", true);
defineSymbol(math, main, rel, "\ue020", "\\@not");
defineSymbol(math, main, rel, "\u2282", "\\subset", true);
defineSymbol(math, main, rel, "\u2283", "\\supset", true);
defineSymbol(math, main, rel, "\u2286", "\\subseteq", true);
defineSymbol(math, main, rel, "\u2287", "\\supseteq", true);
defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq", true);
defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq", true);
defineSymbol(math, main, rel, "\u22a8", "\\models");
defineSymbol(math, main, rel, "\u2190", "\\leftarrow", true);
defineSymbol(math, main, rel, "\u2264", "\\le");
defineSymbol(math, main, rel, "\u2264", "\\leq", true);
defineSymbol(math, main, rel, "<", "\\lt", true);
defineSymbol(math, main, rel, "\u2192", "\\rightarrow", true);
defineSymbol(math, main, rel, "\u2192", "\\to");
defineSymbol(math, ams, rel, "\u2271", "\\ngeq", true);
defineSymbol(math, ams, rel, "\u2270", "\\nleq", true);
defineSymbol(math, main, spacing, "\u00a0", "\\ ");
defineSymbol(math, main, spacing, "\u00a0", "\\space");
// Ref: LaTeX Source 2e: \DeclareRobustCommand{\nobreakspace}{%
defineSymbol(math, main, spacing, "\u00a0", "\\nobreakspace");
defineSymbol(text, main, spacing, "\u00a0", "\\ ");
defineSymbol(text, main, spacing, "\u00a0", " ");
defineSymbol(text, main, spacing, "\u00a0", "\\space");
defineSymbol(text, main, spacing, "\u00a0", "\\nobreakspace");
defineSymbol(math, main, spacing, null, "\\nobreak");
defineSymbol(math, main, spacing, null, "\\allowbreak");
defineSymbol(math, main, punct, ",", ",");
defineSymbol(math, main, punct, ";", ";");
defineSymbol(math, ams, bin, "\u22bc", "\\barwedge", true);
defineSymbol(math, ams, bin, "\u22bb", "\\veebar", true);
defineSymbol(math, main, bin, "\u2299", "\\odot", true);
defineSymbol(math, main, bin, "\u2295", "\\oplus", true);
defineSymbol(math, main, bin, "\u2297", "\\otimes", true);
defineSymbol(math, main, textord, "\u2202", "\\partial", true);
defineSymbol(math, main, bin, "\u2298", "\\oslash", true);
defineSymbol(math, ams, bin, "\u229a", "\\circledcirc", true);
defineSymbol(math, ams, bin, "\u22a1", "\\boxdot", true);
defineSymbol(math, main, bin, "\u25b3", "\\bigtriangleup");
defineSymbol(math, main, bin, "\u25bd", "\\bigtriangledown");
defineSymbol(math, main, bin, "\u2020", "\\dagger");
defineSymbol(math, main, bin, "\u22c4", "\\diamond");
defineSymbol(math, main, bin, "\u22c6", "\\star");
defineSymbol(math, main, bin, "\u25c3", "\\triangleleft");
defineSymbol(math, main, bin, "\u25b9", "\\triangleright");
defineSymbol(math, main, open, "{", "\\{");
defineSymbol(text, main, textord, "{", "\\{");
defineSymbol(text, main, textord, "{", "\\textbraceleft");
defineSymbol(math, main, close, "}", "\\}");
defineSymbol(text, main, textord, "}", "\\}");
defineSymbol(text, main, textord, "}", "\\textbraceright");
defineSymbol(math, main, open, "{", "\\lbrace");
defineSymbol(math, main, close, "}", "\\rbrace");
defineSymbol(math, main, open, "[", "\\lbrack", true);
defineSymbol(text, main, textord, "[", "\\lbrack", true);
defineSymbol(math, main, close, "]", "\\rbrack", true);
defineSymbol(text, main, textord, "]", "\\rbrack", true);
defineSymbol(math, main, open, "(", "\\lparen", true);
defineSymbol(math, main, close, ")", "\\rparen", true);
defineSymbol(text, main, textord, "<", "\\textless", true); // in T1 fontenc
defineSymbol(text, main, textord, ">", "\\textgreater", true); // in T1 fontenc
defineSymbol(math, main, open, "\u230a", "\\lfloor", true);
defineSymbol(math, main, close, "\u230b", "\\rfloor", true);
defineSymbol(math, main, open, "\u2308", "\\lceil", true);
defineSymbol(math, main, close, "\u2309", "\\rceil", true);
defineSymbol(math, main, textord, "\\", "\\backslash");
defineSymbol(math, main, textord, "\u2223", "|");
defineSymbol(math, main, textord, "\u2223", "\\vert");
defineSymbol(text, main, textord, "|", "\\textbar", true); // in T1 fontenc
defineSymbol(math, main, textord, "\u2225", "\\|");
defineSymbol(math, main, textord, "\u2225", "\\Vert");
defineSymbol(text, main, textord, "\u2225", "\\textbardbl");
defineSymbol(text, main, textord, "~", "\\textasciitilde");
defineSymbol(text, main, textord, "\\", "\\textbackslash");
defineSymbol(text, main, textord, "^", "\\textasciicircum");
defineSymbol(math, main, rel, "\u2191", "\\uparrow", true);
defineSymbol(math, main, rel, "\u21d1", "\\Uparrow", true);
defineSymbol(math, main, rel, "\u2193", "\\downarrow", true);
defineSymbol(math, main, rel, "\u21d3", "\\Downarrow", true);
defineSymbol(math, main, rel, "\u2195", "\\updownarrow", true);
defineSymbol(math, main, rel, "\u21d5", "\\Updownarrow", true);
defineSymbol(math, main, op, "\u2210", "\\coprod");
defineSymbol(math, main, op, "\u22c1", "\\bigvee");
defineSymbol(math, main, op, "\u22c0", "\\bigwedge");
defineSymbol(math, main, op, "\u2a04", "\\biguplus");
defineSymbol(math, main, op, "\u22c2", "\\bigcap");
defineSymbol(math, main, op, "\u22c3", "\\bigcup");
defineSymbol(math, main, op, "\u222b", "\\int");
defineSymbol(math, main, op, "\u222b", "\\intop");
defineSymbol(math, main, op, "\u222c", "\\iint");
defineSymbol(math, main, op, "\u222d", "\\iiint");
defineSymbol(math, main, op, "\u220f", "\\prod");
defineSymbol(math, main, op, "\u2211", "\\sum");
defineSymbol(math, main, op, "\u2a02", "\\bigotimes");
defineSymbol(math, main, op, "\u2a01", "\\bigoplus");
defineSymbol(math, main, op, "\u2a00", "\\bigodot");
defineSymbol(math, main, op, "\u222e", "\\oint");
defineSymbol(math, main, op, "\u222f", "\\oiint");
defineSymbol(math, main, op, "\u2230", "\\oiiint");
defineSymbol(math, main, op, "\u2a06", "\\bigsqcup");
defineSymbol(math, main, op, "\u222b", "\\smallint");
defineSymbol(text, main, inner, "\u2026", "\\textellipsis");
defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
defineSymbol(text, main, inner, "\u2026", "\\ldots", true);
defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
defineSymbol(math, main, inner, "\u22ef", "\\@cdots", true);
defineSymbol(math, main, inner, "\u22f1", "\\ddots", true);
// \vdots is a macro that uses one of these two symbols (with made-up names):
defineSymbol(math, main, textord, "\u22ee", "\\varvdots");
defineSymbol(text, main, textord, "\u22ee", "\\varvdots");
defineSymbol(math, main, accent, "\u02ca", "\\acute");
defineSymbol(math, main, accent, "\u02cb", "\\grave");
defineSymbol(math, main, accent, "\u00a8", "\\ddot");
defineSymbol(math, main, accent, "\u007e", "\\tilde");
defineSymbol(math, main, accent, "\u02c9", "\\bar");
defineSymbol(math, main, accent, "\u02d8", "\\breve");
defineSymbol(math, main, accent, "\u02c7", "\\check");
defineSymbol(math, main, accent, "\u005e", "\\hat");
defineSymbol(math, main, accent, "\u20d7", "\\vec");
defineSymbol(math, main, accent, "\u02d9", "\\dot");
defineSymbol(math, main, accent, "\u02da", "\\mathring");
// \imath and \jmath should be invariant to \mathrm, \mathbf, etc., so use PUA
defineSymbol(math, main, mathord, "\ue131", "\\@imath");
defineSymbol(math, main, mathord, "\ue237", "\\@jmath");
defineSymbol(math, main, textord, "\u0131", "\u0131");
defineSymbol(math, main, textord, "\u0237", "\u0237");
defineSymbol(text, main, textord, "\u0131", "\\i", true);
defineSymbol(text, main, textord, "\u0237", "\\j", true);
defineSymbol(text, main, textord, "\u00df", "\\ss", true);
defineSymbol(text, main, textord, "\u00e6", "\\ae", true);
defineSymbol(text, main, textord, "\u0153", "\\oe", true);
defineSymbol(text, main, textord, "\u00f8", "\\o", true);
defineSymbol(text, main, textord, "\u00c6", "\\AE", true);
defineSymbol(text, main, textord, "\u0152", "\\OE", true);
defineSymbol(text, main, textord, "\u00d8", "\\O", true);
defineSymbol(text, main, accent, "\u02ca", "\\'"); // acute
defineSymbol(text, main, accent, "\u02cb", "\\`"); // grave
defineSymbol(text, main, accent, "\u02c6", "\\^"); // circumflex
defineSymbol(text, main, accent, "\u02dc", "\\~"); // tilde
defineSymbol(text, main, accent, "\u02c9", "\\="); // macron
defineSymbol(text, main, accent, "\u02d8", "\\u"); // breve
defineSymbol(text, main, accent, "\u02d9", "\\."); // dot above
defineSymbol(text, main, accent, "\u00b8", "\\c"); // cedilla
defineSymbol(text, main, accent, "\u02da", "\\r"); // ring above
defineSymbol(text, main, accent, "\u02c7", "\\v"); // caron
defineSymbol(text, main, accent, "\u00a8", '\\"'); // diaeresis
defineSymbol(text, main, accent, "\u02dd", "\\H"); // double acute
defineSymbol(text, main, accent, "\u25ef", "\\textcircled"); // \bigcirc glyph

// These ligatures are detected and created in Parser.js's `formLigatures`.
export const ligatures = {
    "--": true,
    "---": true,
    "``": true,
    "''": true,
};

defineSymbol(text, main, textord, "\u2013", "--", true);
defineSymbol(text, main, textord, "\u2013", "\\textendash");
defineSymbol(text, main, textord, "\u2014", "---", true);
defineSymbol(text, main, textord, "\u2014", "\\textemdash");
defineSymbol(text, main, textord, "\u2018", "`", true);
defineSymbol(text, main, textord, "\u2018", "\\textquoteleft");
defineSymbol(text, main, textord, "\u2019", "'", true);
defineSymbol(text, main, textord, "\u2019", "\\textquoteright");
defineSymbol(text, main, textord, "\u201c", "``", true);
defineSymbol(text, main, textord, "\u201c", "\\textquotedblleft");
defineSymbol(text, main, textord, "\u201d", "''", true);
defineSymbol(text, main, textord, "\u201d", "\\textquotedblright");
//  \degree from gensymb package
defineSymbol(math, main, textord, "\u00b0", "\\degree", true);
defineSymbol(text, main, textord, "\u00b0", "\\degree");
// \textdegree from inputenc package
defineSymbol(text, main, textord, "\u00b0", "\\textdegree", true);
// TODO: In LaTeX, \pounds can generate a different character in text and math
// mode, but among our fonts, only Main-Regular defines this character "163".
defineSymbol(math, main, textord, "\u00a3", "\\pounds");
defineSymbol(math, main, textord, "\u00a3", "\\mathsterling", true);
defineSymbol(text, main, textord, "\u00a3", "\\pounds");
defineSymbol(text, main, textord, "\u00a3", "\\textsterling", true);
defineSymbol(math, ams, textord, "\u2720", "\\maltese");
defineSymbol(text, ams, textord, "\u2720", "\\maltese");

// There are lots of symbols which are the same, so we add them in afterwards.
// All of these are textords in math mode
const mathTextSymbols = "0123456789/@.\"";
for (let i = 0; i < mathTextSymbols.length; i++) {
    const ch = mathTextSymbols.charAt(i);
    defineSymbol(math, main, textord, ch, ch);
}

// All of these are textords in text mode
const textSymbols = "0123456789!@*()-=+\";:?/.,";
for (let i = 0; i < textSymbols.length; i++) {
    const ch = textSymbols.charAt(i);
    defineSymbol(text, main, textord, ch, ch);
}

// All of these are textords in text mode, and mathords in math mode
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < letters.length; i++) {
    const ch = letters.charAt(i);
    defineSymbol(math, main, mathord, ch, ch);
    defineSymbol(text, main, textord, ch, ch);
}

// Blackboard bold and script letters in Unicode range
defineSymbol(math, ams, textord, "C", "\u2102");  // blackboard bold
defineSymbol(text, ams, textord, "C", "\u2102");
defineSymbol(math, ams, textord, "H", "\u210D");
defineSymbol(text, ams, textord, "H", "\u210D");
defineSymbol(math, ams, textord, "N", "\u2115");
defineSymbol(text, ams, textord, "N", "\u2115");
defineSymbol(math, ams, textord, "P", "\u2119");
defineSymbol(text, ams, textord, "P", "\u2119");
defineSymbol(math, ams, textord, "Q", "\u211A");
defineSymbol(text, ams, textord, "Q", "\u211A");
defineSymbol(math, ams, textord, "R", "\u211D");
defineSymbol(text, ams, textord, "R", "\u211D");
defineSymbol(math, ams, textord, "Z", "\u2124");
defineSymbol(text, ams, textord, "Z", "\u2124");
defineSymbol(math, main, mathord, "h", "\u210E");  // italic h, Planck constant
defineSymbol(text, main, mathord, "h", "\u210E");

// The next loop loads wide (surrogate pair) characters.
// We support some letters in the Unicode range U+1D400 to U+1D7FF,
// Mathematical Alphanumeric Symbols.
// Some editors do not deal well with wide characters. So don't write the
// string into this file. Instead, create the string from the surrogate pair.
let wideChar = "";
for (let i = 0; i < letters.length; i++) {
    const ch = letters.charAt(i);

    // The hex numbers in the next line are a surrogate pair.
    // 0xD835 is the high surrogate for all letters in the range we support.
    // 0xDC00 is the low surrogate for bold A.
    wideChar = String.fromCharCode(0xD835, 0xDC00 + i);  // A-Z a-z bold
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDC34 + i);  // A-Z a-z italic
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDC68 + i);  // A-Z a-z bold italic
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDD04 + i);  // A-Z a-z Fraktur
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDD6C + i);  // A-Z a-z bold Fraktur
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDDA0 + i);  // A-Z a-z sans-serif
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDDD4 + i);  // A-Z a-z sans bold
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDE08 + i);  // A-Z a-z sans italic
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDE70 + i);  // A-Z a-z monospace
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    if (i < 26) {
        // KaTeX fonts have only capital letters for blackboard bold and script.
        // See exception for k below.
        wideChar = String.fromCharCode(0xD835, 0xDD38 + i); // A-Z double struck
        defineSymbol(math, main, mathord, ch, wideChar);
        defineSymbol(text, main, textord, ch, wideChar);

        wideChar = String.fromCharCode(0xD835, 0xDC9C + i); // A-Z script
        defineSymbol(math, main, mathord, ch, wideChar);
        defineSymbol(text, main, textord, ch, wideChar);
    }

    // TODO: Add bold script when it is supported by a KaTeX font.
}
// "k" is the only double struck lower case letter in the KaTeX fonts.
wideChar = String.fromCharCode(0xD835, 0xDD5C);   // k double struck
defineSymbol(math, main, mathord, "k", wideChar);
defineSymbol(text, main, textord, "k", wideChar);

// Next, some wide character numerals
for (let i = 0; i < 10; i++) {
    const ch = i.toString();

    wideChar = String.fromCharCode(0xD835, 0xDFCE + i);  // 0-9 bold
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDFE2 + i);  // 0-9 sans serif
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDFEC + i);  // 0-9 bold sans
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);

    wideChar = String.fromCharCode(0xD835, 0xDFF6 + i);  // 0-9 monospace
    defineSymbol(math, main, mathord, ch, wideChar);
    defineSymbol(text, main, textord, ch, wideChar);
}

// We add these Latin-1 letters as symbols for backwards-compatibility,
// but they are not actually in the font, nor are they supported by the
// Unicode accent mechanism, so they fall back to Times font and look ugly.
// TODO(edemaine): Fix this.
export const extraLatin = "\u00d0\u00de\u00fe";
for (let i = 0; i < extraLatin.length; i++) {
    const ch = extraLatin.charAt(i);
    defineSymbol(math, main, mathord, ch, ch);
    defineSymbol(text, main, textord, ch, ch);
}
