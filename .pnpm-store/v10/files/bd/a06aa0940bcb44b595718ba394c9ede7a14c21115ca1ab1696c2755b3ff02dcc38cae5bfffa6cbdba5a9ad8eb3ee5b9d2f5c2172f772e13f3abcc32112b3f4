// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { ParsePatternIntoTypes } from '../patterns/pattern.mjs';
/** Returns true if this pattern is a valid Template Literal regular expression */
export function IsTemplateLiteralPattern(pattern) {
    const types = ParsePatternIntoTypes(pattern);
    const result = Guard.IsEqual(types.length, 0) ? false : true;
    return result;
}
