"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortMethodFromOption = exports.fnPrintSortByType = exports.printSortAlpha = void 0;
const ScalarTypeComposer_1 = require("../ScalarTypeComposer");
const EnumTypeComposer_1 = require("../EnumTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const InputTypeComposer_1 = require("../InputTypeComposer");
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const UnionTypeComposer_1 = require("../UnionTypeComposer");
const is_1 = require("./is");
const rootOrderDefault = ['Query', 'Mutation', 'Subscription'];
function printSortAlpha(tc1, tc2) {
    const comp = tc1.getTypeName().localeCompare(tc2.getTypeName());
    return comp;
}
exports.printSortAlpha = printSortAlpha;
function sortGetPositionOfType(tc, rootTypes = []) {
    switch (true) {
        case tc instanceof ScalarTypeComposer_1.ScalarTypeComposer:
            return [2];
        case tc instanceof EnumTypeComposer_1.EnumTypeComposer:
            return [3];
        case tc instanceof UnionTypeComposer_1.UnionTypeComposer:
            return [4];
        case tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer:
            return [5];
        case tc instanceof ObjectTypeComposer_1.ObjectTypeComposer:
            const rootPos = rootTypes.indexOf(tc.getTypeName());
            if (rootPos !== -1) {
                return [1, rootPos];
            }
            else {
                return [6];
            }
        case tc instanceof InputTypeComposer_1.InputTypeComposer:
            return [7];
    }
    throw new Error(`Unknown kind of type ${tc.getTypeName()}`);
}
function comparePositionLists(p1, p2) {
    const common = Math.min(p1.length, p2.length);
    for (let i = 0; i < common; i++) {
        if (p1[i] < p2[i])
            return -1;
        if (p1[i] > p2[i])
            return +1;
    }
    return 0;
}
function fnPrintSortByType(opt) {
    const rootTypes = (opt === null || opt === void 0 ? void 0 : opt.include) || rootOrderDefault;
    return function (tc1, tc2) {
        const pos1 = sortGetPositionOfType(tc1, rootTypes);
        const pos2 = sortGetPositionOfType(tc2, rootTypes);
        const diff = comparePositionLists(pos1, pos2);
        return diff || printSortAlpha(tc1, tc2);
    };
}
exports.fnPrintSortByType = fnPrintSortByType;
function getSortMethodFromOption(sortOption, printFilter) {
    if (sortOption === undefined ||
        sortOption === null ||
        sortOption === true ||
        sortOption === 'ALPHABETIC') {
        return printSortAlpha;
    }
    else if (sortOption === 'GROUP_BY_TYPE') {
        return fnPrintSortByType(printFilter);
    }
    else if ((0, is_1.isFunction)(sortOption)) {
        return sortOption;
    }
    return;
}
exports.getSortMethodFromOption = getSortMethodFromOption;
//# sourceMappingURL=schemaPrinterSortTypes.js.map