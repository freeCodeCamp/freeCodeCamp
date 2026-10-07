// deno-fmt-ignore-file
import { ExtendsLeft } from './extends_left.mjs';
import { TemplateLiteralDecode } from '../engine/template_literal/decode.mjs';
export function ExtendsTemplateLiteral(inferred, left, right) {
    const decoded = TemplateLiteralDecode(left);
    return ExtendsLeft(inferred, decoded, right);
}
