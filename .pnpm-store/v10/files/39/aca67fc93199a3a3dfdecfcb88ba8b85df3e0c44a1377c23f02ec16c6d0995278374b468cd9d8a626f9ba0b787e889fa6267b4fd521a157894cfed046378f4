// deno-fmt-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { Guard } from '../../../guard/index.mjs';
import { TemplateLiteralTypes } from '../../script/parser.mjs';
// ------------------------------------------------------------------
// deno-coverage-ignore-start - symmetric unreachable
//
// Parser is parsing regular expression for strings and will return 
// at least 1 TLiteral at a minumum.
//
// ------------------------------------------------------------------
/** Parses a Template into a TemplateLiteral types */
export function ParseTemplateIntoTypes(template) {
    const parsed = TemplateLiteralTypes(`\`${template}\``);
    const result = Guard.IsEqual(parsed.length, 2)
        ? parsed[0]
        : Unreachable(); // []
    return result;
}
// deno-coverage-ignore-stop
