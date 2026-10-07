"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCellInRange = exports.areCellEqual = exports.calculateRangeCoordinate = exports.flatten = exports.extractTruncates = exports.sumArray = exports.sequence = exports.distributeUnevenly = exports.countSpaceSequence = exports.groupBySizes = exports.makeBorderConfig = exports.splitAnsi = exports.normalizeString = void 0;
const slice_ansi_1 = __importDefault(require("slice-ansi"));
const string_width_1 = __importDefault(require("string-width"));
const strip_ansi_1 = __importDefault(require("strip-ansi"));
const getBorderCharacters_1 = require("./getBorderCharacters");
/**
 * Converts Windows-style newline to Unix-style
 *
 * @internal
 */
const normalizeString = (input) => {
    return input.replace(/\r\n/g, '\n');
};
exports.normalizeString = normalizeString;
/**
 * Splits ansi string by newlines
 *
 * @internal
 */
const splitAnsi = (input) => {
    const lengths = (0, strip_ansi_1.default)(input).split('\n').map(string_width_1.default);
    const result = [];
    let startIndex = 0;
    lengths.forEach((length) => {
        result.push(length === 0 ? '' : (0, slice_ansi_1.default)(input, startIndex, startIndex + length));
        // Plus 1 for the newline character itself
        startIndex += length + 1;
    });
    return result;
};
exports.splitAnsi = splitAnsi;
/**
 * Merges user provided border characters with the default border ("honeywell") characters.
 *
 * @internal
 */
const makeBorderConfig = (border) => {
    return {
        ...(0, getBorderCharacters_1.getBorderCharacters)('honeywell'),
        ...border,
    };
};
exports.makeBorderConfig = makeBorderConfig;
/**
 * Groups the array into sub-arrays by sizes.
 *
 * @internal
 * @example
 * groupBySizes(['a', 'b', 'c', 'd', 'e'], [2, 1, 2]) = [ ['a', 'b'], ['c'], ['d', 'e'] ]
 */
const groupBySizes = (array, sizes) => {
    let startIndex = 0;
    return sizes.map((size) => {
        const group = array.slice(startIndex, startIndex + size);
        startIndex += size;
        return group;
    });
};
exports.groupBySizes = groupBySizes;
/**
 * Counts the number of continuous spaces in a string
 *
 * @internal
 * @example
 * countGroupSpaces('a  bc  de f') = 3
 */
const countSpaceSequence = (input) => {
    var _a, _b;
    return (_b = (_a = input.match(/\s+/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
};
exports.countSpaceSequence = countSpaceSequence;
/**
 * Creates the non-increasing number array given sum and length
 * whose the difference between maximum and minimum is not greater than 1
 *
 * @internal
 * @example
 * distributeUnevenly(6, 3) = [2, 2, 2]
 * distributeUnevenly(8, 3) = [3, 3, 2]
 */
const distributeUnevenly = (sum, length) => {
    const result = Array.from({ length }).fill(Math.floor(sum / length));
    return result.map((element, index) => {
        return element + (index < sum % length ? 1 : 0);
    });
};
exports.distributeUnevenly = distributeUnevenly;
const sequence = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => {
        return index + start;
    });
};
exports.sequence = sequence;
const sumArray = (array) => {
    return array.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0);
};
exports.sumArray = sumArray;
const extractTruncates = (config) => {
    return config.columns.map(({ truncate }) => {
        return truncate;
    });
};
exports.extractTruncates = extractTruncates;
const flatten = (array) => {
    return [].concat(...array);
};
exports.flatten = flatten;
const calculateRangeCoordinate = (spanningCellConfig) => {
    const { row, col, colSpan = 1, rowSpan = 1 } = spanningCellConfig;
    return { bottomRight: { col: col + colSpan - 1,
            row: row + rowSpan - 1 },
        topLeft: { col,
            row } };
};
exports.calculateRangeCoordinate = calculateRangeCoordinate;
const areCellEqual = (cell1, cell2) => {
    return cell1.row === cell2.row && cell1.col === cell2.col;
};
exports.areCellEqual = areCellEqual;
const isCellInRange = (cell, { topLeft, bottomRight }) => {
    return (topLeft.row <= cell.row &&
        cell.row <= bottomRight.row &&
        topLeft.col <= cell.col &&
        cell.col <= bottomRight.col);
};
exports.isCellInRange = isCellInRange;
//# sourceMappingURL=utils.js.map