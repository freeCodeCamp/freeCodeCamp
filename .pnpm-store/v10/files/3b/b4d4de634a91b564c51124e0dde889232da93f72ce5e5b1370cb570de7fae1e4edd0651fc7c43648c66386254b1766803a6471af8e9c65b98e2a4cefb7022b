// deno-fmt-ignore-file
import { IsString } from '../../type/index.mjs';
import { TemplateLiteralDecode } from '../../type/engine/template_literal/index.mjs';
import { FromType } from './from_type.mjs';
import { CreateError } from './error.mjs';
export function FromTemplateLiteral(context, type) {
    const decoded = TemplateLiteralDecode(type.pattern);
    if (IsString(decoded))
        throw new CreateError(type, 'Unable to create TemplateLiteral due to infinite type expansion');
    return FromType(context, decoded);
}
