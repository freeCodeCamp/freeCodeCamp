import { assert, checkAdjacentItems } from '../../../../base/common/assert.js';
import { splitLines } from '../../../../base/common/strings.js';
import { LineRange } from '../ranges/lineRange.js';
import { Position } from '../position.js';
import { Range } from '../range.js';

class LineEdit {
    static { this.empty = new LineEdit([]); }
    constructor(
    /**
     * Have to be sorted by start line number and non-intersecting.
    */
    replacements) {
        this.replacements = replacements;
        assert(checkAdjacentItems(replacements, (i1, i2) => i1.lineRange.endLineNumberExclusive <= i2.lineRange.startLineNumber));
    }
    toString() {
        return this.replacements.map(e => e.toString()).join(',');
    }
    getNewLineRanges() {
        const ranges = [];
        let offset = 0;
        for (const e of this.replacements) {
            ranges.push(LineRange.ofLength(e.lineRange.startLineNumber + offset, e.newLines.length));
            offset += e.newLines.length - e.lineRange.length;
        }
        return ranges;
    }
}
class LineReplacement {
    static fromSingleTextEdit(edit, initialValue) {
        // 1: ab[cde
        // 2: fghijk
        // 3: lmn]opq
        // replaced with
        // 1n: 123
        // 2n: 456
        // 3n: 789
        // simple solution: replace [1..4) with [1n..4n)
        const newLines = splitLines(edit.text);
        let startLineNumber = edit.range.startLineNumber;
        const survivingFirstLineText = initialValue.getValueOfRange(Range.fromPositions(new Position(edit.range.startLineNumber, 1), edit.range.getStartPosition()));
        newLines[0] = survivingFirstLineText + newLines[0];
        let endLineNumberEx = edit.range.endLineNumber + 1;
        const editEndLineNumberMaxColumn = initialValue.getTransformer().getLineLength(edit.range.endLineNumber) + 1;
        const survivingEndLineText = initialValue.getValueOfRange(Range.fromPositions(edit.range.getEndPosition(), new Position(edit.range.endLineNumber, editEndLineNumberMaxColumn)));
        newLines[newLines.length - 1] = newLines[newLines.length - 1] + survivingEndLineText;
        // Replacing [startLineNumber, endLineNumberEx) with newLines would be correct, however it might not be minimal.
        const startBeforeNewLine = edit.range.startColumn === initialValue.getTransformer().getLineLength(edit.range.startLineNumber) + 1;
        const endAfterNewLine = edit.range.endColumn === 1;
        if (startBeforeNewLine && newLines[0].length === survivingFirstLineText.length) {
            // the replacement would not delete any text on the first line
            startLineNumber++;
            newLines.shift();
        }
        if (newLines.length > 0 && startLineNumber < endLineNumberEx && endAfterNewLine && newLines[newLines.length - 1].length === survivingEndLineText.length) {
            // the replacement would not delete any text on the last line
            endLineNumberEx--;
            newLines.pop();
        }
        return new LineReplacement(new LineRange(startLineNumber, endLineNumberEx), newLines);
    }
    constructor(lineRange, newLines) {
        this.lineRange = lineRange;
        this.newLines = newLines;
    }
    toString() {
        return `${this.lineRange}->${JSON.stringify(this.newLines)}`;
    }
    toLineEdit() {
        return new LineEdit([this]);
    }
}

export { LineEdit, LineReplacement };
