export var match1         = /\d/;            //       0 - 9
export var match2         = /\d\d/;          //      00 - 99
export var match3         = /\d{3}/;         //     000 - 999
export var match4         = /\d{4}/;         //    0000 - 9999
export var match6         = /[+-]?\d{6}/;    // -999999 - 999999
export var match1to2      = /\d\d?/;         //       0 - 99
export var match3to4      = /\d\d\d\d?/;     //     999 - 9999
export var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
export var match1to3      = /\d{1,3}/;       //       0 - 999
export var match1to4      = /\d{1,4}/;       //       0 - 9999
export var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

export var matchUnsigned  = /\d+/;           //       0 - inf
export var matchSigned    = /[+-]?\d+/;      //    -inf - inf

export var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
export var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

export var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
export var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


import hasOwnProp from '../utils/has-own-prop';
import isFunction from '../utils/is-function';

var regexes = {};

export function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

export function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

export function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
