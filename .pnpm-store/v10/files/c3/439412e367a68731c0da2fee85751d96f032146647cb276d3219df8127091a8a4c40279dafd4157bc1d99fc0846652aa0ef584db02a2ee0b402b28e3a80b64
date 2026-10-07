"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.ADDRESS_BOUNDARY = void 0;
exports.groupPossibilities = groupPossibilities;
exports.padGroup = padGroup;
exports.simpleRegularExpression = simpleRegularExpression;
exports.possibleElisions = possibleElisions;
const v6 = __importStar(require("./constants"));
function groupPossibilities(possibilities) {
    return `(${possibilities.join('|')})`;
}
function padGroup(group) {
    if (group.length < 4) {
        return `0{0,${4 - group.length}}${group}`;
    }
    return group;
}
exports.ADDRESS_BOUNDARY = '[^A-Fa-f0-9:]';
function simpleRegularExpression(groups) {
    const zeroIndexes = [];
    groups.forEach((group, i) => {
        const groupInteger = parseInt(group, 16);
        if (groupInteger === 0) {
            zeroIndexes.push(i);
        }
    });
    // You can technically elide a single 0, this creates the regular expressions
    // to match that eventuality
    const possibilities = zeroIndexes.map((zeroIndex) => groups
        .map((group, i) => {
        if (i === zeroIndex) {
            const elision = i === 0 || i === v6.GROUPS - 1 ? ':' : '';
            return groupPossibilities([padGroup(group), elision]);
        }
        return padGroup(group);
    })
        .join(':'));
    // The simplest case
    possibilities.push(groups.map(padGroup).join(':'));
    return groupPossibilities(possibilities);
}
function possibleElisions(elidedGroups, moreLeft, moreRight) {
    const left = moreLeft ? '' : ':';
    const right = moreRight ? '' : ':';
    const possibilities = [];
    // 1. elision of everything (::)
    if (!moreLeft && !moreRight) {
        possibilities.push('::');
    }
    // 2. complete elision of the middle
    if (moreLeft && moreRight) {
        possibilities.push('');
    }
    if ((moreRight && !moreLeft) || (!moreRight && moreLeft)) {
        // 3. complete elision of one side
        possibilities.push(':');
    }
    // 4. elision from the left side
    possibilities.push(`${left}(:0{1,4}){1,${elidedGroups - 1}}`);
    // 5. elision from the right side
    possibilities.push(`(0{1,4}:){1,${elidedGroups - 1}}${right}`);
    // 6. no elision
    possibilities.push(`(0{1,4}:){${elidedGroups - 1}}0{1,4}`);
    // 7. elision (including sloppy elision) from the middle
    for (let groups = 1; groups < elidedGroups - 1; groups++) {
        for (let position = 1; position < elidedGroups - groups; position++) {
            possibilities.push(`(0{1,4}:){${position}}:(0{1,4}:){${elidedGroups - position - groups - 1}}0{1,4}`);
        }
    }
    return groupPossibilities(possibilities);
}
//# sourceMappingURL=regular-expressions.js.map