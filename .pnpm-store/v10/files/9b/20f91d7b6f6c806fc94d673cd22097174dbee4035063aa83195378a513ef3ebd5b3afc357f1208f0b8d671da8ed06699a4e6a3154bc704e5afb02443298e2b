/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// allow-any-unicode-comment-file
/**
 * Gets alternative Korean characters for the character code. This will return the ascii
 * character code(s) that a Hangul character may have been input with using a qwerty layout.
 *
 * This only aims to cover modern (not archaic) Hangul syllables.
 *
 * @param code The character code to get alternate characters for
 */
function getKoreanAltChars(code) {
    const result = disassembleKorean(code);
    if (result && result.length > 0) {
        return new Uint32Array(result);
    }
    return undefined;
}
let codeBufferLength = 0;
const codeBuffer = new Uint32Array(10);
function disassembleKorean(code) {
    codeBufferLength = 0;
    // Initial consonants (초성)
    getCodesFromArray(code, modernConsonants, 4352 /* HangulRangeStartCode.InitialConsonant */);
    if (codeBufferLength > 0) {
        return codeBuffer.subarray(0, codeBufferLength);
    }
    // Vowels (중성)
    getCodesFromArray(code, modernVowels, 4449 /* HangulRangeStartCode.Vowel */);
    if (codeBufferLength > 0) {
        return codeBuffer.subarray(0, codeBufferLength);
    }
    // Final consonants (종성)
    getCodesFromArray(code, modernFinalConsonants, 4520 /* HangulRangeStartCode.FinalConsonant */);
    if (codeBufferLength > 0) {
        return codeBuffer.subarray(0, codeBufferLength);
    }
    // Hangul Compatibility Jamo
    getCodesFromArray(code, compatibilityJamo, 12593 /* HangulRangeStartCode.CompatibilityJamo */);
    if (codeBufferLength) {
        return codeBuffer.subarray(0, codeBufferLength);
    }
    // Hangul Syllables
    if (code >= 0xAC00 && code <= 0xD7A3) {
        const hangulIndex = code - 0xAC00;
        const vowelAndFinalConsonantProduct = hangulIndex % 588;
        // 0-based starting at 0x1100
        const initialConsonantIndex = Math.floor(hangulIndex / 588);
        // 0-based starting at 0x1161
        const vowelIndex = Math.floor(vowelAndFinalConsonantProduct / 28);
        // 0-based starting at 0x11A8
        // Subtract 1 as the standard algorithm uses the 0 index to represent no
        // final consonant
        const finalConsonantIndex = vowelAndFinalConsonantProduct % 28 - 1;
        if (initialConsonantIndex < modernConsonants.length) {
            getCodesFromArray(initialConsonantIndex, modernConsonants, 0);
        }
        else if (4352 /* HangulRangeStartCode.InitialConsonant */ + initialConsonantIndex - 12593 /* HangulRangeStartCode.CompatibilityJamo */ < compatibilityJamo.length) {
            getCodesFromArray(4352 /* HangulRangeStartCode.InitialConsonant */ + initialConsonantIndex, compatibilityJamo, 12593 /* HangulRangeStartCode.CompatibilityJamo */);
        }
        if (vowelIndex < modernVowels.length) {
            getCodesFromArray(vowelIndex, modernVowels, 0);
        }
        else if (4449 /* HangulRangeStartCode.Vowel */ + vowelIndex - 12593 /* HangulRangeStartCode.CompatibilityJamo */ < compatibilityJamo.length) {
            getCodesFromArray(4449 /* HangulRangeStartCode.Vowel */ + vowelIndex - 12593 /* HangulRangeStartCode.CompatibilityJamo */, compatibilityJamo, 12593 /* HangulRangeStartCode.CompatibilityJamo */);
        }
        if (finalConsonantIndex >= 0) {
            if (finalConsonantIndex < modernFinalConsonants.length) {
                getCodesFromArray(finalConsonantIndex, modernFinalConsonants, 0);
            }
            else if (4520 /* HangulRangeStartCode.FinalConsonant */ + finalConsonantIndex - 12593 /* HangulRangeStartCode.CompatibilityJamo */ < compatibilityJamo.length) {
                getCodesFromArray(4520 /* HangulRangeStartCode.FinalConsonant */ + finalConsonantIndex - 12593 /* HangulRangeStartCode.CompatibilityJamo */, compatibilityJamo, 12593 /* HangulRangeStartCode.CompatibilityJamo */);
            }
        }
        if (codeBufferLength > 0) {
            return codeBuffer.subarray(0, codeBufferLength);
        }
    }
    return undefined;
}
function getCodesFromArray(code, array, arrayStartIndex) {
    // Verify the code is within the array's range
    if (code >= arrayStartIndex && code < arrayStartIndex + array.length) {
        addCodesToBuffer(array[code - arrayStartIndex]);
    }
}
function addCodesToBuffer(codes) {
    // NUL is ignored, this is used for archaic characters to avoid using a Map
    // for the data
    if (codes === 0 /* AsciiCode.NUL */) {
        return;
    }
    // Number stored in format: OptionalThirdCode << 16 | OptionalSecondCode << 8 | Code
    codeBuffer[codeBufferLength++] = codes & 0xFF;
    if (codes >> 8) {
        codeBuffer[codeBufferLength++] = (codes >> 8) & 0xFF;
    }
    if (codes >> 16) {
        codeBuffer[codeBufferLength++] = (codes >> 16) & 0xFF;
    }
}
/**
 * Hangul Jamo - Modern consonants #1
 *
 * Range U+1100..U+1112
 *
 * |        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
 * |--------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
 * | U+110x | ᄀ | ᄁ | ᄂ | ᄃ | ᄄ | ᄅ | ᄆ | ᄇ | ᄈ | ᄉ | ᄊ | ᄋ | ᄌ | ᄍ | ᄎ | ᄏ |
 * | U+111x | ᄐ | ᄑ | ᄒ |
 */
const modernConsonants = new Uint8Array([
    114 /* AsciiCode.r */, // ㄱ
    82 /* AsciiCode.R */, // ㄲ
    115 /* AsciiCode.s */, // ㄴ
    101 /* AsciiCode.e */, // ㄷ
    69 /* AsciiCode.E */, // ㄸ
    102 /* AsciiCode.f */, // ㄹ
    97 /* AsciiCode.a */, // ㅁ
    113 /* AsciiCode.q */, // ㅂ
    81 /* AsciiCode.Q */, // ㅃ
    116 /* AsciiCode.t */, // ㅅ
    84 /* AsciiCode.T */, // ㅆ
    100 /* AsciiCode.d */, // ㅇ
    119 /* AsciiCode.w */, // ㅈ
    87 /* AsciiCode.W */, // ㅉ
    99 /* AsciiCode.c */, // ㅊ
    122 /* AsciiCode.z */, // ㅋ
    120 /* AsciiCode.x */, // ㅌ
    118 /* AsciiCode.v */, // ㅍ
    103 /* AsciiCode.g */, // ㅎ
]);
/**
 * Hangul Jamo - Modern Vowels
 *
 * Range U+1161..U+1175
 *
 * |        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
 * |--------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
 * | U+116x |   | ᅡ | ᅢ | ᅣ | ᅤ | ᅥ | ᅦ | ᅧ | ᅨ | ᅩ | ᅪ | ᅫ | ᅬ | ᅭ | ᅮ | ᅯ |
 * | U+117x | ᅰ | ᅱ | ᅲ | ᅳ | ᅴ | ᅵ |
 */
const modernVowels = new Uint16Array([
    107 /* AsciiCode.k */, //  -> ㅏ
    111 /* AsciiCode.o */, //  -> ㅐ
    105 /* AsciiCode.i */, //  -> ㅑ
    79 /* AsciiCode.O */, //  -> ㅒ
    106 /* AsciiCode.j */, //  -> ㅓ
    112 /* AsciiCode.p */, //  -> ㅔ
    117 /* AsciiCode.u */, //  -> ㅕ
    80 /* AsciiCode.P */, //  -> ㅖ
    104 /* AsciiCode.h */, //  -> ㅗ
    27496 /* AsciiCodeCombo.hk */, //  -> ㅘ
    28520 /* AsciiCodeCombo.ho */, //  -> ㅙ
    27752 /* AsciiCodeCombo.hl */, //  -> ㅚ
    121 /* AsciiCode.y */, //  -> ㅛ
    110 /* AsciiCode.n */, //  -> ㅜ
    27246 /* AsciiCodeCombo.nj */, //  -> ㅝ
    28782 /* AsciiCodeCombo.np */, //  -> ㅞ
    27758 /* AsciiCodeCombo.nl */, //  -> ㅟ
    98 /* AsciiCode.b */, //  -> ㅠ
    109 /* AsciiCode.m */, //  -> ㅡ
    27757 /* AsciiCodeCombo.ml */, //  -> ㅢ
    108 /* AsciiCode.l */, //  -> ㅣ
]);
/**
 * Hangul Jamo - Modern Consonants #2
 *
 * Range U+11A8..U+11C2
 *
 * |        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
 * |--------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
 * | U+11Ax |   |   |   |   |   |   |   |   | ᆨ | ᆩ | ᆪ | ᆫ | ᆬ | ᆭ | ᆮ | ᆯ |
 * | U+11Bx | ᆰ | ᆱ | ᆲ | ᆳ | ᆴ | ᆵ | ᆶ | ᆷ | ᆸ | ᆹ | ᆺ | ᆻ | ᆼ | ᆽ | ᆾ | ᆿ |
 * | U+11Cx | ᇀ | ᇁ | ᇂ |
 */
const modernFinalConsonants = new Uint16Array([
    114 /* AsciiCode.r */, // ㄱ
    82 /* AsciiCode.R */, // ㄲ
    29810 /* AsciiCodeCombo.rt */, // ㄳ
    115 /* AsciiCode.s */, // ㄴ
    30579 /* AsciiCodeCombo.sw */, // ㄵ
    26483 /* AsciiCodeCombo.sg */, // ㄶ
    101 /* AsciiCode.e */, // ㄷ
    102 /* AsciiCode.f */, // ㄹ
    29286 /* AsciiCodeCombo.fr */, // ㄺ
    24934 /* AsciiCodeCombo.fa */, // ㄻ
    29030 /* AsciiCodeCombo.fq */, // ㄼ
    29798 /* AsciiCodeCombo.ft */, // ㄽ
    30822 /* AsciiCodeCombo.fx */, // ㄾ
    30310 /* AsciiCodeCombo.fv */, // ㄿ
    26470 /* AsciiCodeCombo.fg */, // ㅀ
    97 /* AsciiCode.a */, // ㅁ
    113 /* AsciiCode.q */, // ㅂ
    29809 /* AsciiCodeCombo.qt */, // ㅄ
    116 /* AsciiCode.t */, // ㅅ
    84 /* AsciiCode.T */, // ㅆ
    100 /* AsciiCode.d */, // ㅇ
    119 /* AsciiCode.w */, // ㅈ
    99 /* AsciiCode.c */, // ㅊ
    122 /* AsciiCode.z */, // ㅋ
    120 /* AsciiCode.x */, // ㅌ
    118 /* AsciiCode.v */, // ㅍ
    103 /* AsciiCode.g */, // ㅎ
]);
/**
 * Hangul Compatibility Jamo
 *
 * Range U+3131..U+318F
 *
 * This includes range includes archaic jamo which we don't consider, these are
 * given the NUL character code in order to be ignored.
 *
 * |        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
 * |--------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
 * | U+313x |   | ㄱ | ㄲ | ㄳ | ㄴ | ㄵ | ㄶ | ㄷ | ㄸ | ㄹ | ㄺ | ㄻ | ㄼ | ㄽ | ㄾ | ㄿ |
 * | U+314x | ㅀ | ㅁ | ㅂ | ㅃ | ㅄ | ㅅ | ㅆ | ㅇ | ㅈ | ㅉ | ㅊ | ㅋ | ㅌ | ㅍ | ㅎ | ㅏ |
 * | U+315x | ㅐ | ㅑ | ㅒ | ㅓ | ㅔ | ㅕ | ㅖ | ㅗ | ㅘ | ㅙ | ㅚ | ㅛ | ㅜ | ㅝ | ㅞ | ㅟ |
 * | U+316x | ㅠ | ㅡ | ㅢ | ㅣ | HF | ㅥ | ㅦ | ㅧ | ㅨ | ㅩ | ㅪ | ㅫ | ㅬ | ㅭ | ㅮ | ㅯ |
 * | U+317x | ㅰ | ㅱ | ㅲ | ㅳ | ㅴ | ㅵ | ㅶ | ㅷ | ㅸ | ㅹ | ㅺ | ㅻ | ㅼ | ㅽ | ㅾ | ㅿ |
 * | U+318x | ㆀ | ㆁ | ㆂ | ㆃ | ㆄ | ㆅ | ㆆ | ㆇ | ㆈ | ㆉ | ㆊ | ㆋ | ㆌ | ㆍ | ㆎ |
 */
const compatibilityJamo = new Uint16Array([
    114 /* AsciiCode.r */, // ㄱ
    82 /* AsciiCode.R */, // ㄲ
    29810 /* AsciiCodeCombo.rt */, // ㄳ
    115 /* AsciiCode.s */, // ㄴ
    30579 /* AsciiCodeCombo.sw */, // ㄵ
    26483 /* AsciiCodeCombo.sg */, // ㄶ
    101 /* AsciiCode.e */, // ㄷ
    69 /* AsciiCode.E */, // ㄸ
    102 /* AsciiCode.f */, // ㄹ
    29286 /* AsciiCodeCombo.fr */, // ㄺ
    24934 /* AsciiCodeCombo.fa */, // ㄻ
    29030 /* AsciiCodeCombo.fq */, // ㄼ
    29798 /* AsciiCodeCombo.ft */, // ㄽ
    30822 /* AsciiCodeCombo.fx */, // ㄾ
    30310 /* AsciiCodeCombo.fv */, // ㄿ
    26470 /* AsciiCodeCombo.fg */, // ㅀ
    97 /* AsciiCode.a */, // ㅁ
    113 /* AsciiCode.q */, // ㅂ
    81 /* AsciiCode.Q */, // ㅃ
    29809 /* AsciiCodeCombo.qt */, // ㅄ
    116 /* AsciiCode.t */, // ㅅ
    84 /* AsciiCode.T */, // ㅆ
    100 /* AsciiCode.d */, // ㅇ
    119 /* AsciiCode.w */, // ㅈ
    87 /* AsciiCode.W */, // ㅉ
    99 /* AsciiCode.c */, // ㅊ
    122 /* AsciiCode.z */, // ㅋ
    120 /* AsciiCode.x */, // ㅌ
    118 /* AsciiCode.v */, // ㅍ
    103 /* AsciiCode.g */, // ㅎ
    107 /* AsciiCode.k */, // ㅏ
    111 /* AsciiCode.o */, // ㅐ
    105 /* AsciiCode.i */, // ㅑ
    79 /* AsciiCode.O */, // ㅒ
    106 /* AsciiCode.j */, // ㅓ
    112 /* AsciiCode.p */, // ㅔ
    117 /* AsciiCode.u */, // ㅕ
    80 /* AsciiCode.P */, // ㅖ
    104 /* AsciiCode.h */, // ㅗ
    27496 /* AsciiCodeCombo.hk */, // ㅘ
    28520 /* AsciiCodeCombo.ho */, // ㅙ
    27752 /* AsciiCodeCombo.hl */, // ㅚ
    121 /* AsciiCode.y */, // ㅛ
    110 /* AsciiCode.n */, // ㅜ
    27246 /* AsciiCodeCombo.nj */, // ㅝ
    28782 /* AsciiCodeCombo.np */, // ㅞ
    27758 /* AsciiCodeCombo.nl */, // ㅟ
    98 /* AsciiCode.b */, // ㅠ
    109 /* AsciiCode.m */, // ㅡ
    27757 /* AsciiCodeCombo.ml */, // ㅢ
    108 /* AsciiCode.l */, // ㅣ
    // HF: Hangul Filler (everything after this is archaic)
    // ㅥ
    // ㅦ
    // ㅧ
    // ㅨ
    // ㅩ
    // ㅪ
    // ㅫ
    // ㅬ
    // ㅮ
    // ㅯ
    // ㅰ
    // ㅱ
    // ㅲ
    // ㅳ
    // ㅴ
    // ㅵ
    // ㅶ
    // ㅷ
    // ㅸ
    // ㅹ
    // ㅺ
    // ㅻ
    // ㅼ
    // ㅽ
    // ㅾ
    // ㅿ
    // ㆀ
    // ㆁ
    // ㆂ
    // ㆃ
    // ㆄ
    // ㆅ
    // ㆆ
    // ㆇ
    // ㆈ
    // ㆉ
    // ㆊ
    // ㆋ
    // ㆌ
    // ㆍ
    // ㆎ
]);

export { getKoreanAltChars };
