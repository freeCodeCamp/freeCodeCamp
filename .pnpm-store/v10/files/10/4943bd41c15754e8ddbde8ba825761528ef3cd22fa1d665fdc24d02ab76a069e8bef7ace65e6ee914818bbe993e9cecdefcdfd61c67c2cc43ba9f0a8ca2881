// deno-fmt-ignore-file
import { FromKey } from './from_key.mjs';
import { ParsePatternIntoTypes } from '../patterns/pattern.mjs';
import { IsTemplateLiteralFinite } from '../template_literal/is_finite.mjs';
import { TemplateLiteralDecode } from '../template_literal/decode.mjs';
import { CreateRecord } from './record_create.mjs';
export function FromTemplateKey(pattern, value) {
    const types = ParsePatternIntoTypes(pattern);
    const finite = IsTemplateLiteralFinite(types);
    const result = finite ? FromKey(TemplateLiteralDecode(pattern), value) : CreateRecord(pattern, value);
    return result;
}
