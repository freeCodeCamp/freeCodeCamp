// deno-fmt-ignore-file
import { Clone } from '../clone/index.mjs';
import { Pointer } from '../pointer/index.mjs';
function IsRoot(edits) {
    return edits.length > 0 && edits[0].path === '' && edits[0].type === 'update';
}
function IsEmpty(edits) {
    return edits.length === 0;
}
// ------------------------------------------------------------------
// Patch
// ------------------------------------------------------------------
/**
 * Applies a sequence of Edit commands to a current value, producing a new value that incorporates
 * all edits. This function returns unknown so callers should Check the return value before use.
 * This function mutates the provided value. If mutation is not wanted, you should Clone the value
 * before passing to this function.
 */
export function Patch(current, edits) {
    if (IsRoot(edits))
        return Clone(edits[0].value);
    if (IsEmpty(edits))
        return Clone(current);
    const clone = Clone(current);
    for (const edit of edits) {
        switch (edit.type) {
            case 'insert': {
                Pointer.Set(clone, edit.path, edit.value);
                break;
            }
            case 'update': {
                Pointer.Set(clone, edit.path, edit.value);
                break;
            }
            case 'delete': {
                Pointer.Delete(clone, edit.path);
                break;
            }
        }
    }
    return clone;
}
