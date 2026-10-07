import * as Puny from './_puny.mjs';
// ------------------------------------------------------------------
// Unicode General Category Helper (RFC 5892)
// ------------------------------------------------------------------
function IsNonspacingMark(cp) {
    return /\p{Mn}/u.test(String.fromCodePoint(cp));
}
function IsSpacingCombiningMark(cp) {
    return /\p{Mc}/u.test(String.fromCodePoint(cp));
}
function IsEnclosingMark(cp) {
    return /\p{Me}/u.test(String.fromCodePoint(cp));
}
function IsCombiningMark(cp) {
    return IsNonspacingMark(cp) || IsSpacingCombiningMark(cp) || IsEnclosingMark(cp);
}
// ------------------------------------------------------------------
// RFC 5892 §2.6 DISALLOWED exceptions
//
// https://tools.ietf.org/html/rfc5892#section-2.6
// ------------------------------------------------------------------
const RFC5892_DISALLOWED = new Set([
    0x0640, // ARABIC TATWEEL
    0x07fa, // NKO LAJANYALAN
    0x302e, // HANGUL SINGLE DOT TONE MARK
    0x302f, // HANGUL DOUBLE DOT TONE MARK
    0x3031, // VERTICAL KANA REPEAT MARK
    0x3032, // VERTICAL KANA REPEAT WITH VOICED ITERATION MARK
    0x3033, // VERTICAL KANA REPEAT MARK UPPER HALF
    0x3034, // VERTICAL KANA REPEAT WITH VOICED ITERATION MARK UPPER HALF
    0x3035, // VERTICAL KANA REPEAT MARK LOWER HALF
    0x303b // VERTICAL IDEOGRAPHIC ITERATION MARK
]);
// ------------------------------------------------------------------
// A set of Virama (halant) code points used to validate CONTEXTJ
// rules (RFC 5892 Appendix A.1). These characters allow a subsequent
// Zero Width Joiner (U+200D) to be valid in a label.
// ------------------------------------------------------------------
const VIRAMA_CPS = new Set([
    0x094d,
    0x09cd,
    0x0a4d,
    0x0acd,
    0x0b4d,
    0x0bcd,
    0x0c4d,
    0x0ccd,
    0x0d3b,
    0x0d3c,
    0x0d4d,
    0x0dca,
    0x1b44,
    0x1baa,
    0x1bab,
    0xa9c0,
    0x11046,
    0x1107f,
    0x110b9,
    0x11133,
    0x11134,
    0x111c0,
    0x11235,
    0x1134d,
    0x11442,
    0x114c2,
    0x115bf,
    0x1163f,
    0x116b6,
    0x11c3f,
    0x11d44,
    0x11d45
]);
// ------------------------------------------------------------------
// Guards for CONTEXTO rules (RFC 5892 Appendix A)
// ------------------------------------------------------------------
function IsGreek(cp) {
    return /\p{Script=Greek}/u.test(String.fromCodePoint(cp));
}
function IsHebrew(cp) {
    return /\p{Script=Hebrew}/u.test(String.fromCodePoint(cp));
}
function IsHiragana(cp) {
    return /\p{Script=Hiragana}/u.test(String.fromCodePoint(cp));
}
function IsKatakana(cp) {
    return /\p{Script=Katakana}/u.test(String.fromCodePoint(cp));
}
function IsHan(cp) {
    return /\p{Script=Han}/u.test(String.fromCodePoint(cp));
}
function IsArabicIndicDigit(cp) {
    return cp >= 0x0660 && cp <= 0x0669;
}
function IsExtendedArabicIndicDigit(cp) {
    return cp >= 0x06f0 && cp <= 0x06f9;
}
function IsVirama(cp) {
    return VIRAMA_CPS.has(cp);
}
// ------------------------------------------------------------------
// IsUnicodeLabel
// ------------------------------------------------------------------
function IsUnicodeLabel(value) {
    if (value.length === 0)
        return false;
    // Use spread to handle surrogate pairs and provide O(1) neighbor access
    const cps = [...value].map((c) => c.codePointAt(0));
    const len = cps.length;
    // RFC 5891 §4.2.3.2: Hyphen rules
    if (cps[0] === 0x2d || cps[len - 1] === 0x2d)
        return false;
    if (len >= 4 && cps[2] === 0x2d && cps[3] === 0x2d)
        return false;
    // RFC 5891 §4.2.3.2 - Must not begin with a combining mark
    if (IsCombiningMark(cps[0]))
        return false;
    let hasJapanese = false;
    let hasArabicIndic = false;
    let hasExtendedArabicIndic = false;
    for (let i = 0; i < len; i++) {
        const cp = cps[i];
        // 1. DISALLOWED exceptions
        if (RFC5892_DISALLOWED.has(cp))
            return false;
        // 2. Collect Flags
        if (IsHiragana(cp) || IsKatakana(cp) || IsHan(cp))
            hasJapanese = true;
        if (IsArabicIndicDigit(cp))
            hasArabicIndic = true;
        if (IsExtendedArabicIndicDigit(cp))
            hasExtendedArabicIndic = true;
        // 3. CONTEXTO / CONTEXTJ Neighbor Rules
        const prev = cps[i - 1], next = cps[i + 1];
        switch (cp) {
            case 0x00b7:
                if (prev !== 0x006c || next !== 0x006c)
                    return false;
                break; // MIDDLE DOT (Catalan)
            case 0x0375:
                if (next === undefined || !IsGreek(next))
                    return false;
                break; // Greek KERAIA
            case 0x05f3:
            case 0x05f4:
                if (prev === undefined || !IsHebrew(prev))
                    return false;
                break; // Hebrew GERESH
            case 0x200d:
                if (prev === undefined || !IsVirama(prev))
                    return false;
                break; // ZWJ
            case 0x30fb: /* Checked at end via hasJapanese */
                break; // KATAKANA MIDDLE DOT
        }
    }
    // 4. Global Context Validations (Post-loop)
    // RFC 5892 Appendix A.7 - Katakana Middle Dot requirement
    if (value.includes('\u30fb') && !hasJapanese)
        return false;
    // RFC 5892 Appendix A.8/A.9 - Mixing Arabic Digits
    if (hasArabicIndic && hasExtendedArabicIndic)
        return false;
    return true;
}
// ------------------------------------------------------------------
// IsAsciiLabel
// ------------------------------------------------------------------
function IsAsciiLabel(value) {
    // Must not start or end with a hyphen
    if (value.charCodeAt(0) === 45 || value.charCodeAt(value.length - 1) === 45)
        return false;
    // RFC 5891 §4.2.3.1 : "--" at positions 3-4 is reserved for A-labels only
    if (value.length >= 4 && value.charCodeAt(2) === 45 && value.charCodeAt(3) === 45)
        return false;
    // All characters must be alphanumeric or hyphen
    for (let i = 0; i < value.length; i++) {
        const ch = value.charCodeAt(i);
        if (!((ch >= 97 && ch <= 122) || // a-z
            (ch >= 65 && ch <= 90) || // A-Z
            (ch >= 48 && ch <= 57) || // 0-9
            ch === 45 // '-'
        ))
            return false;
    }
    return true;
}
// ------------------------------------------------------------------
// IsPunyLabel
// ------------------------------------------------------------------
function IsPuny(value) {
    return value.toLowerCase().startsWith('xn--');
}
function IsPunyLabel(value) {
    try {
        return IsUnicodeLabel(Puny.Decode(value.slice(4)));
    }
    catch {
        return false; // invalid punycode encoding
    }
}
// ------------------------------------------------------------------
// IsIdnLabel
// ------------------------------------------------------------------
export function IsIdnLabel(value) {
    if (value.length === 0 || value.length > 63)
        return false;
    return IsPuny(value) ? IsPunyLabel(value) : IsUnicodeLabel(value);
}
// ------------------------------------------------------------------
// IsLabel
// ------------------------------------------------------------------
export function IsLabel(value) {
    if (value.length === 0 || value.length > 63)
        return false;
    return IsPuny(value) ? IsPunyLabel(value) : IsAsciiLabel(value);
}
