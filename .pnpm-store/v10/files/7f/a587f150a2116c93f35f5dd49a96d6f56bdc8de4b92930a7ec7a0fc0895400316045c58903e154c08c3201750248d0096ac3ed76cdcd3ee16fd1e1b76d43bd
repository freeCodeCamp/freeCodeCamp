"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawContent = void 0;
const drawContent = (parameters) => {
    const { contents, separatorGetter, drawSeparator, spanningCellManager, rowIndex, elementType } = parameters;
    const contentSize = contents.length;
    const result = [];
    if (drawSeparator(0, contentSize)) {
        result.push(separatorGetter(0, contentSize));
    }
    contents.forEach((content, contentIndex) => {
        if (!elementType || elementType === 'border' || elementType === 'row') {
            result.push(content);
        }
        if (elementType === 'cell' && rowIndex === undefined) {
            result.push(content);
        }
        if (elementType === 'cell' && rowIndex !== undefined) {
            /* istanbul ignore next */
            const containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({ col: contentIndex,
                row: rowIndex });
            // when drawing content row, just add a cell when it is a normal cell
            // or belongs to first column of spanning cell
            if (!containingRange || contentIndex === containingRange.topLeft.col) {
                result.push(content);
            }
        }
        // Only append the middle separator if the content is not the last
        if (contentIndex + 1 < contentSize && drawSeparator(contentIndex + 1, contentSize)) {
            const separator = separatorGetter(contentIndex + 1, contentSize);
            if (elementType === 'cell' && rowIndex !== undefined) {
                const currentCell = { col: contentIndex + 1,
                    row: rowIndex };
                /* istanbul ignore next */
                const containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange(currentCell);
                if (!containingRange || containingRange.topLeft.col === currentCell.col) {
                    result.push(separator);
                }
            }
            else {
                result.push(separator);
            }
        }
    });
    if (drawSeparator(contentSize, contentSize)) {
        result.push(separatorGetter(contentSize, contentSize));
    }
    return result.join('');
};
exports.drawContent = drawContent;
//# sourceMappingURL=drawContent.js.map