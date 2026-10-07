'use strict';

var stringifyNumber = require('../../stringify/stringifyNumber.js');

const intIdentify = (value) => typeof value === 'bigint' || Number.isInteger(value);
function intResolve(str, offset, radix, { intAsBigInt }) {
    const sign = str[0];
    if (sign === '-' || sign === '+')
        offset += 1;
    str = str.substring(offset).replace(/_/g, '');
    if (intAsBigInt) {
        switch (radix) {
            case 2:
                str = `0b${str}`;
                break;
            case 8:
                str = `0o${str}`;
                break;
            case 16:
                str = `0x${str}`;
                break;
        }
        const n = BigInt(str);
        return sign === '-' ? BigInt(-1) * n : n;
    }
    const n = parseInt(str, radix);
    return sign === '-' ? -1 * n : n;
}
function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value)) {
        const str = value.toString(radix);
        return value < 0 ? '-' + prefix + str.substr(1) : prefix + str;
    }
    return stringifyNumber.stringifyNumber(node);
}
const intBin = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'BIN',
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
    stringify: node => intStringify(node, 2, '0b')
};
const intOct = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
    stringify: node => intStringify(node, 8, '0')
};
const int = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber.stringifyNumber
};
const intHex = {
    identify: intIdentify,
    default: true,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: node => intStringify(node, 16, '0x')
};

exports.int = int;
exports.intBin = intBin;
exports.intHex = intHex;
exports.intOct = intOct;
