// deno-fmt-ignore-file
import { IsLiteral } from '../../types/literal.mjs';
import { IsTemplateLiteral } from '../../types/template_literal.mjs';
import { IsUnion } from '../../types/union.mjs';
import { FromLiteral } from './from_literal.mjs';
import { FromTemplateLiteral } from './from_template_literal.mjs';
import { FromUnion } from './from_union.mjs';
export function FromType(mapping, type) {
    return (IsLiteral(type) ? FromLiteral(mapping, type.const) :
        IsTemplateLiteral(type) ? FromTemplateLiteral(mapping, type.pattern) :
            IsUnion(type) ? FromUnion(mapping, type.anyOf) :
                type);
}
