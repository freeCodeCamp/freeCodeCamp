export var match1         = /\d/;            //       0 - 9
export var match2         = /\d\d/;          //      00 - 99
export var match3         = /\d{3}/;         //     000 - 999
export var match4         = /\d{4}/;         //    0000 - 9999
export var match6         = /[+-]?\d{6}/;    // -999999 - 999999
export var match1to2      = /\d\d?/;         //       0 - 99
export var match1to3      = /\d{1,3}/;       //       0 - 999
export var match1to4      = /\d{1,4}/;       //       0 - 9999
export var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

export var matchUnsigned  = /\d+/;           //       0 - inf
export var matchSigned    = /[+-]?\d+/;      //    -inf - inf

export var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

export var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
export var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

import hasOwnProp from '../utils/has-own-prop';

var regexes = {};

function isFunction (sth) {
    // https://github.com/moment/moment/issues/2325
    return typeof sth === 'function' &&
        Object.prototype.toString.call(sth) === '[object Function]';
}


export function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict) {
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
    return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
