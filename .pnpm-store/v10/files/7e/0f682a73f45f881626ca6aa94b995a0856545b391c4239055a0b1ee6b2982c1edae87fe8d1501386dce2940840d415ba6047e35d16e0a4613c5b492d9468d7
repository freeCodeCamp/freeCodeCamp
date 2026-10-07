// deno-fmt-ignore-file
import { TemplateLiteralDecode } from '../template_literal/decode.mjs';
import { FromType } from './from_type.mjs';
export function FromTemplateLiteral(pattern) {
    const decoded = TemplateLiteralDecode(pattern);
    const result = FromType(decoded);
    return result;
}
