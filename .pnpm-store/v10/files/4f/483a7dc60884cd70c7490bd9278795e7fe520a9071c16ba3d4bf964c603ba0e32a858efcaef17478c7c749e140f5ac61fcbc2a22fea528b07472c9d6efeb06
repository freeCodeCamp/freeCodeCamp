"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
const util = __importStar(require("./util"));
const types_1 = require("./types");
const sets = __importStar(require("./sets"));
/**
 * Valid opening characters for capture group names.
 */
const captureGroupFirstChar = /^[a-zA-Z_$]$/i;
/**
 * Valid characters for capture group names.
 */
const captureGroupChars = /^[a-zA-Z0-9_$]$/i;
const digit = /\d/;
/**
 * Tokenizes a regular expression (that is currently a string)
 * @param {string} regexpStr String of regular expression to be tokenized
 *
 * @returns {Root}
 */
exports.tokenizer = (regexpStr) => {
    let i = 0, c;
    let start = { type: types_1.types.ROOT, stack: [] };
    // Keep track of last clause/group and stack.
    let lastGroup = start;
    let last = start.stack;
    let groupStack = [];
    let referenceQueue = [];
    let groupCount = 0;
    const repeatErr = (col) => {
        throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Nothing to repeat at column ${col - 1}`);
    };
    // Decode a few escaped characters.
    let str = util.strToChars(regexpStr);
    // Iterate through each character in string.
    while (i < str.length) {
        switch (c = str[i++]) {
            // Handle escaped characters, inclues a few sets.
            case '\\':
                if (i === str.length) {
                    throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: \\ at end of pattern`);
                }
                switch (c = str[i++]) {
                    case 'b':
                        last.push({ type: types_1.types.POSITION, value: 'b' });
                        break;
                    case 'B':
                        last.push({ type: types_1.types.POSITION, value: 'B' });
                        break;
                    case 'w':
                        last.push(sets.words());
                        break;
                    case 'W':
                        last.push(sets.notWords());
                        break;
                    case 'd':
                        last.push(sets.ints());
                        break;
                    case 'D':
                        last.push(sets.notInts());
                        break;
                    case 's':
                        last.push(sets.whitespace());
                        break;
                    case 'S':
                        last.push(sets.notWhitespace());
                        break;
                    default:
                        // Check if c is integer.
                        // In which case it's a reference.
                        if (digit.test(c)) {
                            let digits = c;
                            while (i < str.length && digit.test(str[i])) {
                                digits += str[i++];
                            }
                            let value = parseInt(digits, 10);
                            const reference = { type: types_1.types.REFERENCE, value };
                            last.push(reference);
                            referenceQueue.push({ reference, stack: last, index: last.length - 1 });
                            // Escaped character.
                        }
                        else {
                            last.push({ type: types_1.types.CHAR, value: c.charCodeAt(0) });
                        }
                }
                break;
            // Positionals.
            case '^':
                last.push({ type: types_1.types.POSITION, value: '^' });
                break;
            case '$':
                last.push({ type: types_1.types.POSITION, value: '$' });
                break;
            // Handle custom sets.
            case '[': {
                // Check if this class is 'anti' i.e. [^abc].
                let not;
                if (str[i] === '^') {
                    not = true;
                    i++;
                }
                else {
                    not = false;
                }
                // Get all the characters in class.
                let classTokens = util.tokenizeClass(str.slice(i), regexpStr);
                // Increase index by length of class.
                i += classTokens[1];
                last.push({
                    type: types_1.types.SET,
                    set: classTokens[0],
                    not,
                });
                break;
            }
            // Class of any character except \n.
            case '.':
                last.push(sets.anyChar());
                break;
            // Push group onto stack.
            case '(': {
                // Create group.
                let group = {
                    type: types_1.types.GROUP,
                    stack: [],
                    remember: true,
                };
                // If this is a special kind of group.
                if (str[i] === '?') {
                    c = str[i + 1];
                    i += 2;
                    // Match if followed by.
                    if (c === '=') {
                        group.followedBy = true;
                        group.remember = false;
                        // Match if not followed by.
                    }
                    else if (c === '!') {
                        group.notFollowedBy = true;
                        group.remember = false;
                    }
                    else if (c === '<') {
                        let name = '';
                        if (captureGroupFirstChar.test(str[i])) {
                            name += str[i];
                            i++;
                        }
                        else {
                            throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid capture group name, character '${str[i]}'` +
                                ` after '<' at column ${i + 1}`);
                        }
                        while (i < str.length && captureGroupChars.test(str[i])) {
                            name += str[i];
                            i++;
                        }
                        if (!name) {
                            throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid capture group name, character '${str[i]}'` +
                                ` after '<' at column ${i + 1}`);
                        }
                        if (str[i] !== '>') {
                            throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unclosed capture group name, expected '>', found` +
                                ` '${str[i]}' at column ${i + 1}`);
                        }
                        group.name = name;
                        i++;
                    }
                    else if (c === ':') {
                        group.remember = false;
                    }
                    else {
                        throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid group, character '${c}'` +
                            ` after '?' at column ${i - 1}`);
                    }
                }
                else {
                    groupCount += 1;
                }
                // Insert subgroup into current group stack.
                last.push(group);
                // Remember the current group for when the group closes.
                groupStack.push(lastGroup);
                // Make this new group the current group.
                lastGroup = group;
                last = group.stack;
                break;
            }
            // Pop group out of stack.
            case ')':
                if (groupStack.length === 0) {
                    throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unmatched ) at column ${i - 1}`);
                }
                lastGroup = groupStack.pop();
                // Check if this group has a PIPE.
                // To get back the correct last stack.
                last = lastGroup.options ?
                    lastGroup.options[lastGroup.options.length - 1] :
                    lastGroup.stack;
                break;
            // Use pipe character to give more choices.
            case '|': {
                // Create array where options are if this is the first PIPE
                // in this clause.
                if (!lastGroup.options) {
                    lastGroup.options = [lastGroup.stack];
                    delete lastGroup.stack;
                }
                // Create a new stack and add to options for rest of clause.
                let stack = [];
                lastGroup.options.push(stack);
                last = stack;
                break;
            }
            // Repetition.
            // For every repetition, remove last element from last stack
            // then insert back a RANGE object.
            // This design is chosen because there could be more than
            // one repetition symbols in a regex i.e. `a?+{2,3}`.
            case '{': {
                let rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
                if (rs !== null) {
                    if (last.length === 0) {
                        repeatErr(i);
                    }
                    min = parseInt(rs[1], 10);
                    max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
                    i += rs[0].length;
                    last.push({
                        type: types_1.types.REPETITION,
                        min,
                        max,
                        value: last.pop(),
                    });
                }
                else {
                    last.push({
                        type: types_1.types.CHAR,
                        value: 123,
                    });
                }
                break;
            }
            case '?':
                if (last.length === 0) {
                    repeatErr(i);
                }
                last.push({
                    type: types_1.types.REPETITION,
                    min: 0,
                    max: 1,
                    value: last.pop(),
                });
                break;
            case '+':
                if (last.length === 0) {
                    repeatErr(i);
                }
                last.push({
                    type: types_1.types.REPETITION,
                    min: 1,
                    max: Infinity,
                    value: last.pop(),
                });
                break;
            case '*':
                if (last.length === 0) {
                    repeatErr(i);
                }
                last.push({
                    type: types_1.types.REPETITION,
                    min: 0,
                    max: Infinity,
                    value: last.pop(),
                });
                break;
            // Default is a character that is not `\[](){}?+*^$`.
            default:
                last.push({
                    type: types_1.types.CHAR,
                    value: c.charCodeAt(0),
                });
        }
    }
    // Check if any groups have not been closed.
    if (groupStack.length !== 0) {
        throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unterminated group`);
    }
    updateReferences(referenceQueue, groupCount);
    return start;
};
/**
 * This is a side effecting function that changes references to chars
 * if there are not enough capturing groups to reference
 * See: https://github.com/fent/ret.js/pull/39#issuecomment-1006475703
 * See: https://github.com/fent/ret.js/issues/38
 * @param {(Reference | Char)[]} referenceQueue
 * @param {number} groupCount
 * @returns {void}
 */
function updateReferences(referenceQueue, groupCount) {
    // Note: We go through the queue in reverse order so
    // that index we use is correct even if we have to add
    // multiple tokens to one stack
    for (const elem of referenceQueue.reverse()) {
        if (groupCount < elem.reference.value) {
            // If there is nothing to reference then turn this into a char token
            elem.reference.type = types_1.types.CHAR;
            const valueString = elem.reference.value.toString();
            elem.reference.value = parseInt(valueString, 8);
            // If the number is not octal then we need to create multiple tokens
            // https://github.com/fent/ret.js/pull/39#issuecomment-1008229226
            if (!/^[0-7]+$/.test(valueString)) {
                let i = 0;
                while (valueString[i] !== '8' && valueString[i] !== '9') {
                    i += 1;
                }
                if (i === 0) {
                    // Handling case when escaped number starts with 8 or 9
                    elem.reference.value = valueString.charCodeAt(0);
                    i += 1;
                }
                else {
                    // If the escaped number does not start with 8 or 9, then all
                    // 0-7 digits before the first 8/9 form the first character code
                    // see: https://github.com/fent/ret.js/pull/39#discussion_r780747085
                    elem.reference.value = parseInt(valueString.slice(0, i), 8);
                }
                if (valueString.length > i) {
                    const tail = elem.stack.splice(elem.index + 1);
                    for (const char of valueString.slice(i)) {
                        elem.stack.push({
                            type: types_1.types.CHAR,
                            value: char.charCodeAt(0),
                        });
                    }
                    elem.stack.push(...tail);
                }
            }
        }
    }
}
//# sourceMappingURL=tokenizer.js.map