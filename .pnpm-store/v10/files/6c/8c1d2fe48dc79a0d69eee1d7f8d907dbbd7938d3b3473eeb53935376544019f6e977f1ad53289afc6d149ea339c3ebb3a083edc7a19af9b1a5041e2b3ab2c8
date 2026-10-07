"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reconstruct = void 0;
const types_1 = require("./types");
const write_set_tokens_1 = require("./write-set-tokens");
const reduceStack = (stack) => stack.map(exports.reconstruct).join('');
const createAlternate = (token) => {
    if ('options' in token) {
        return token.options.map(reduceStack).join('|');
    }
    else if ('stack' in token) {
        return reduceStack(token.stack);
    }
    else {
        throw new Error(`options or stack must be Root or Group token`);
    }
};
exports.reconstruct = (token) => {
    switch (token.type) {
        case types_1.types.ROOT:
            return createAlternate(token);
        case types_1.types.CHAR: {
            const c = String.fromCharCode(token.value);
            // Note that the escaping for characters inside classes is handled
            // in the write-set-tokens module so '-' and ']' are not escaped here
            return (/[[\\{}$^.|?*+()]/.test(c) ? '\\' : '') + c;
        }
        case types_1.types.POSITION:
            if (token.value === '^' || token.value === '$') {
                return token.value;
            }
            else {
                return `\\${token.value}`;
            }
        case types_1.types.REFERENCE:
            return `\\${token.value}`;
        case types_1.types.SET:
            return write_set_tokens_1.writeSetTokens(token);
        case types_1.types.GROUP: {
            // Check token.remember
            const prefix = token.name ? `?<${token.name}>` :
                token.remember ? '' :
                    token.followedBy ? '?=' :
                        token.notFollowedBy ? '?!' :
                            '?:';
            return `(${prefix}${createAlternate(token)})`;
        }
        case types_1.types.REPETITION: {
            const { min, max } = token;
            let endWith;
            if (min === 0 && max === 1) {
                endWith = '?';
            }
            else if (min === 1 && max === Infinity) {
                endWith = '+';
            }
            else if (min === 0 && max === Infinity) {
                endWith = '*';
            }
            else if (max === Infinity) {
                endWith = `{${min},}`;
            }
            else if (min === max) {
                endWith = `{${min}}`;
            }
            else {
                endWith = `{${min},${max}}`;
            }
            return `${exports.reconstruct(token.value)}${endWith}`;
        }
        case types_1.types.RANGE:
            return `${write_set_tokens_1.setChar(token.from)}-${write_set_tokens_1.setChar(token.to)}`;
        default:
            throw new Error(`Invalid token type ${token}`);
    }
};
//# sourceMappingURL=reconstruct.js.map