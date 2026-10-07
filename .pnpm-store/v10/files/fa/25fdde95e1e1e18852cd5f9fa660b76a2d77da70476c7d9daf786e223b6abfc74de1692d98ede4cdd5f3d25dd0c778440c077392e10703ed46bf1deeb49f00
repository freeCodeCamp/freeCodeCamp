/* IMPORT */
import { getCodePointsLength, isFullWidth, isWideNotCJKTNotEmoji } from './utils.js';
/* HELPERS */
const ANSI_RE = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|\u001b\]8;[^;]*;.*?(?:\u0007|\u001b\u005c)/y;
const CONTROL_RE = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
const CJKT_WIDE_RE = /(?:(?![\uFF61-\uFF9F\uFF00-\uFFEF])[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Tangut}]){1,1000}/yu;
const TAB_RE = /\t{1,1000}/y;
const EMOJI_RE = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
const LATIN_RE = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
const MODIFIER_RE = /\p{M}+/gu;
const NO_TRUNCATION = { limit: Infinity, ellipsis: '' };
/* MAIN */
const getStringTruncatedWidth = (input, truncationOptions = {}, widthOptions = {}) => {
    /* CONSTANTS */
    const LIMIT = truncationOptions.limit ?? Infinity;
    const ELLIPSIS = truncationOptions.ellipsis ?? '';
    const ELLIPSIS_WIDTH = truncationOptions?.ellipsisWidth ?? (ELLIPSIS ? getStringTruncatedWidth(ELLIPSIS, NO_TRUNCATION, widthOptions).width : 0);
    const ANSI_WIDTH = 0;
    const CONTROL_WIDTH = widthOptions.controlWidth ?? 0;
    const TAB_WIDTH = widthOptions.tabWidth ?? 8;
    const EMOJI_WIDTH = widthOptions.emojiWidth ?? 2;
    const FULL_WIDTH_WIDTH = 2;
    const REGULAR_WIDTH = widthOptions.regularWidth ?? 1;
    const WIDE_WIDTH = widthOptions.wideWidth ?? FULL_WIDTH_WIDTH;
    const PARSE_BLOCKS = [
        [LATIN_RE, REGULAR_WIDTH],
        [ANSI_RE, ANSI_WIDTH],
        [CONTROL_RE, CONTROL_WIDTH],
        [TAB_RE, TAB_WIDTH],
        [EMOJI_RE, EMOJI_WIDTH],
        [CJKT_WIDE_RE, WIDE_WIDTH],
    ];
    /* STATE */
    let indexPrev = 0;
    let index = 0;
    let length = input.length;
    let lengthExtra = 0;
    let truncationEnabled = false;
    let truncationIndex = length;
    let truncationLimit = Math.max(0, LIMIT - ELLIPSIS_WIDTH);
    let unmatchedStart = 0;
    let unmatchedEnd = 0;
    let width = 0;
    let widthExtra = 0;
    /* PARSE LOOP */
    outer: while (true) {
        /* UNMATCHED */
        if ((unmatchedEnd > unmatchedStart) || (index >= length && index > indexPrev)) {
            const unmatched = input.slice(unmatchedStart, unmatchedEnd) || input.slice(indexPrev, index);
            lengthExtra = 0;
            for (const char of unmatched.replaceAll(MODIFIER_RE, '')) {
                const codePoint = char.codePointAt(0) || 0;
                if (isFullWidth(codePoint)) {
                    widthExtra = FULL_WIDTH_WIDTH;
                }
                else if (isWideNotCJKTNotEmoji(codePoint)) {
                    widthExtra = WIDE_WIDTH;
                }
                else {
                    widthExtra = REGULAR_WIDTH;
                }
                if ((width + widthExtra) > truncationLimit) {
                    truncationIndex = Math.min(truncationIndex, Math.max(unmatchedStart, indexPrev) + lengthExtra);
                }
                if ((width + widthExtra) > LIMIT) {
                    truncationEnabled = true;
                    break outer;
                }
                lengthExtra += char.length;
                width += widthExtra;
            }
            unmatchedStart = unmatchedEnd = 0;
        }
        /* EXITING */
        if (index >= length) {
            break outer;
        }
        /* PARSE BLOCKS */
        for (let i = 0, l = PARSE_BLOCKS.length; i < l; i++) {
            const [BLOCK_RE, BLOCK_WIDTH] = PARSE_BLOCKS[i];
            BLOCK_RE.lastIndex = index;
            if (BLOCK_RE.test(input)) {
                lengthExtra = BLOCK_RE === CJKT_WIDE_RE ? getCodePointsLength(input.slice(index, BLOCK_RE.lastIndex)) : BLOCK_RE === EMOJI_RE ? 1 : BLOCK_RE.lastIndex - index;
                widthExtra = lengthExtra * BLOCK_WIDTH;
                if ((width + widthExtra) > truncationLimit) {
                    truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / BLOCK_WIDTH));
                }
                if ((width + widthExtra) > LIMIT) {
                    truncationEnabled = true;
                    break outer;
                }
                width += widthExtra;
                unmatchedStart = indexPrev;
                unmatchedEnd = index;
                index = indexPrev = BLOCK_RE.lastIndex;
                continue outer;
            }
        }
        /* UNMATCHED INDEX */
        index += 1;
    }
    /* RETURN */
    return {
        width: truncationEnabled ? truncationLimit : width,
        index: truncationEnabled ? truncationIndex : length,
        truncated: truncationEnabled,
        ellipsed: truncationEnabled && LIMIT >= ELLIPSIS_WIDTH
    };
};
/* EXPORT */
export default getStringTruncatedWidth;
