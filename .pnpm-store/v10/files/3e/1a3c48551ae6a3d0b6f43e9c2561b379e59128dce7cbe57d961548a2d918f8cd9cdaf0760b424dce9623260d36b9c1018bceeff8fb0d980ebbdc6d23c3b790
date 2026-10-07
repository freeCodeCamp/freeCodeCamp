"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableBorderGetter = exports.drawBorderBottom = exports.drawBorderJoin = exports.drawBorderTop = exports.drawBorder = exports.createSeparatorGetter = exports.drawBorderSegments = void 0;
const drawContent_1 = require("./drawContent");
const drawBorderSegments = (columnWidths, parameters) => {
    const { separator, horizontalBorderIndex, spanningCellManager } = parameters;
    return columnWidths.map((columnWidth, columnIndex) => {
        const normalSegment = separator.body.repeat(columnWidth);
        if (horizontalBorderIndex === undefined) {
            return normalSegment;
        }
        /* istanbul ignore next */
        const range = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({ col: columnIndex,
            row: horizontalBorderIndex });
        if (!range) {
            return normalSegment;
        }
        const { topLeft } = range;
        // draw border segments as usual for top border of spanning cell
        if (horizontalBorderIndex === topLeft.row) {
            return normalSegment;
        }
        // if for first column/row of spanning cell, just skip
        if (columnIndex !== topLeft.col) {
            return '';
        }
        return range.extractBorderContent(horizontalBorderIndex);
    });
};
exports.drawBorderSegments = drawBorderSegments;
const createSeparatorGetter = (dependencies) => {
    const { separator, spanningCellManager, horizontalBorderIndex, rowCount } = dependencies;
    // eslint-disable-next-line complexity
    return (verticalBorderIndex, columnCount) => {
        const inSameRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.inSameRange;
        if (horizontalBorderIndex !== undefined && inSameRange) {
            const topCell = { col: verticalBorderIndex,
                row: horizontalBorderIndex - 1 };
            const leftCell = { col: verticalBorderIndex - 1,
                row: horizontalBorderIndex };
            const oppositeCell = { col: verticalBorderIndex - 1,
                row: horizontalBorderIndex - 1 };
            const currentCell = { col: verticalBorderIndex,
                row: horizontalBorderIndex };
            const pairs = [
                [oppositeCell, topCell],
                [topCell, currentCell],
                [currentCell, leftCell],
                [leftCell, oppositeCell],
            ];
            // left side of horizontal border
            if (verticalBorderIndex === 0) {
                if (inSameRange(currentCell, topCell) && separator.bodyJoinOuter) {
                    return separator.bodyJoinOuter;
                }
                return separator.left;
            }
            // right side of horizontal border
            if (verticalBorderIndex === columnCount) {
                if (inSameRange(oppositeCell, leftCell) && separator.bodyJoinOuter) {
                    return separator.bodyJoinOuter;
                }
                return separator.right;
            }
            // top horizontal border
            if (horizontalBorderIndex === 0) {
                if (inSameRange(currentCell, leftCell)) {
                    return separator.body;
                }
                return separator.join;
            }
            // bottom horizontal border
            if (horizontalBorderIndex === rowCount) {
                if (inSameRange(topCell, oppositeCell)) {
                    return separator.body;
                }
                return separator.join;
            }
            const sameRangeCount = pairs.map((pair) => {
                return inSameRange(...pair);
            }).filter(Boolean).length;
            // four cells are belongs to different spanning cells
            if (sameRangeCount === 0) {
                return separator.join;
            }
            // belong to one spanning cell
            if (sameRangeCount === 4) {
                return '';
            }
            // belongs to two spanning cell
            if (sameRangeCount === 2) {
                if (inSameRange(...pairs[1]) && inSameRange(...pairs[3]) && separator.bodyJoinInner) {
                    return separator.bodyJoinInner;
                }
                return separator.body;
            }
            /* istanbul ignore next */
            if (sameRangeCount === 1) {
                if (!separator.joinRight || !separator.joinLeft || !separator.joinUp || !separator.joinDown) {
                    throw new Error(`Can not get border separator for position [${horizontalBorderIndex}, ${verticalBorderIndex}]`);
                }
                if (inSameRange(...pairs[0])) {
                    return separator.joinDown;
                }
                if (inSameRange(...pairs[1])) {
                    return separator.joinLeft;
                }
                if (inSameRange(...pairs[2])) {
                    return separator.joinUp;
                }
                return separator.joinRight;
            }
            /* istanbul ignore next */
            throw new Error('Invalid case');
        }
        if (verticalBorderIndex === 0) {
            return separator.left;
        }
        if (verticalBorderIndex === columnCount) {
            return separator.right;
        }
        return separator.join;
    };
};
exports.createSeparatorGetter = createSeparatorGetter;
const drawBorder = (columnWidths, parameters) => {
    const borderSegments = (0, exports.drawBorderSegments)(columnWidths, parameters);
    const { drawVerticalLine, horizontalBorderIndex, spanningCellManager } = parameters;
    return (0, drawContent_1.drawContent)({
        contents: borderSegments,
        drawSeparator: drawVerticalLine,
        elementType: 'border',
        rowIndex: horizontalBorderIndex,
        separatorGetter: (0, exports.createSeparatorGetter)(parameters),
        spanningCellManager,
    }) + '\n';
};
exports.drawBorder = drawBorder;
const drawBorderTop = (columnWidths, parameters) => {
    const { border } = parameters;
    const result = (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
            body: border.topBody,
            join: border.topJoin,
            left: border.topLeft,
            right: border.topRight,
        },
    });
    if (result === '\n') {
        return '';
    }
    return result;
};
exports.drawBorderTop = drawBorderTop;
const drawBorderJoin = (columnWidths, parameters) => {
    const { border } = parameters;
    return (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
            body: border.joinBody,
            bodyJoinInner: border.bodyJoin,
            bodyJoinOuter: border.bodyLeft,
            join: border.joinJoin,
            joinDown: border.joinMiddleDown,
            joinLeft: border.joinMiddleLeft,
            joinRight: border.joinMiddleRight,
            joinUp: border.joinMiddleUp,
            left: border.joinLeft,
            right: border.joinRight,
        },
    });
};
exports.drawBorderJoin = drawBorderJoin;
const drawBorderBottom = (columnWidths, parameters) => {
    const { border } = parameters;
    return (0, exports.drawBorder)(columnWidths, {
        ...parameters,
        separator: {
            body: border.bottomBody,
            join: border.bottomJoin,
            left: border.bottomLeft,
            right: border.bottomRight,
        },
    });
};
exports.drawBorderBottom = drawBorderBottom;
const createTableBorderGetter = (columnWidths, parameters) => {
    return (index, size) => {
        const drawBorderParameters = { ...parameters,
            horizontalBorderIndex: index };
        if (index === 0) {
            return (0, exports.drawBorderTop)(columnWidths, drawBorderParameters);
        }
        else if (index === size) {
            return (0, exports.drawBorderBottom)(columnWidths, drawBorderParameters);
        }
        return (0, exports.drawBorderJoin)(columnWidths, drawBorderParameters);
    };
};
exports.createTableBorderGetter = createTableBorderGetter;
//# sourceMappingURL=drawBorder.js.map