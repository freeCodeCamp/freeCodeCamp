import hasOwnProp from '../utils/has-own-prop';
import isNumber from '../utils/is-number';
import toInt from '../utils/to-int';

var tokens = {};

export function addParseToken(token, callback) {
    var i,
        func = callback,
        tokenLen;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    tokenLen = token.length;
    for (i = 0; i < tokenLen; i++) {
        tokens[token[i]] = func;
    }
}

export function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

export function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}
