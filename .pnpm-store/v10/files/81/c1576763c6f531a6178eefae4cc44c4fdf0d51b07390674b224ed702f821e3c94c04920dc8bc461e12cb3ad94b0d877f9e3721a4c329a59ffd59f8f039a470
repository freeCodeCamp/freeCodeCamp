import { StringReplacement, StringEdit } from '../core/edits/stringEdit.js';
import { OffsetRange } from '../core/ranges/offsetRange.js';

function offsetEditFromContentChanges(contentChanges) {
    const editsArr = contentChanges.map(c => new StringReplacement(OffsetRange.ofStartAndLength(c.rangeOffset, c.rangeLength), c.text));
    editsArr.reverse();
    const edits = new StringEdit(editsArr);
    return edits;
}

export { offsetEditFromContentChanges };
