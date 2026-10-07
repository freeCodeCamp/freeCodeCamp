// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Pattern } from '../../script/parser.mjs';
/** Parses a Pattern into a sequence of TemplateLiteral types. A result of [] indicates failure to parse. */
export function ParsePatternIntoTypes(pattern) {
    const parsed = Pattern(pattern);
    const result = Guard.IsEqual(parsed.length, 2)
        ? parsed[0]
        : []; // Failed to Parse
    return result;
}
