import { matchOffset } from '../parse/regex';
import { configFromStringAndFormat } from './from-string-and-format';
import { hooks } from '../utils/hooks';
import { deprecate } from '../utils/deprecate';
import getParsingFlags from './parsing-flags';

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
    ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
    ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d{2}/],
    ['YYYY-DDD', /\d{4}-\d{3}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
    ['HH:mm', /(T| )\d\d:\d\d/],
    ['HH', /(T| )\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
export function configFromISO(config) {
    var i, l,
        string = config._i,
        match = isoRegex.exec(string);

    if (match) {
        getParsingFlags(config).iso = true;
        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(string)) {
                config._f = isoDates[i][0];
                break;
            }
        }
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(string)) {
                // match[6] should be 'T' or space
                config._f += (match[6] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (string.match(matchOffset)) {
            config._f += 'Z';
        }
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
export function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'moment construction falls back to js Date. This is ' +
    'discouraged and will be removed in upcoming major ' +
    'release. Please refer to ' +
    'https://github.com/moment/moment/issues/1407 for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);
