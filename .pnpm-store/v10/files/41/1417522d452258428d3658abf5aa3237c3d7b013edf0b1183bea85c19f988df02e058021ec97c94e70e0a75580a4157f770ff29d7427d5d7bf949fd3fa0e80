var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
    match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
    regexes;

export {
    match1,
    match2,
    match3,
    match4,
    match6,
    match1to2,
    match3to4,
    match5to6,
    match1to3,
    match1to4,
    match1to6,
    matchUnsigned,
    matchSigned,
    matchOffset,
    matchShortOffset,
    matchTimestamp,
    matchWord,
    match1to2NoLeadingZero,
    match1to2HasZero,
};

import hasOwnProp from '../utils/has-own-prop';
import isFunction from '../utils/is-function';

regexes = {};

export function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

export function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4;
                }
            )
    );
}

export function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
