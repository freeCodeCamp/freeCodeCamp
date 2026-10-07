// deno-fmt-ignore-file
import { IsCyclic } from '../../types/cyclic.mjs';
import { IsEnum } from '../../types/enum.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { IsLiteral } from '../../types/literal.mjs';
import { IsTemplateLiteral } from '../../types/template_literal.mjs';
import { IsUnion } from '../../types/union.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromEnum } from './from_enum.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromLiteral } from './from_literal.mjs';
import { FromTemplateLiteral } from './from_template_literal.mjs';
import { FromUnion } from './from_union.mjs';
export function FromType(type) {
    return (IsCyclic(type) ? FromCyclic(type.$defs, type.$ref) :
        IsEnum(type) ? FromEnum(type.enum) :
            IsIntersect(type) ? FromIntersect(type.allOf) :
                IsLiteral(type) ? FromLiteral(type.const) :
                    IsTemplateLiteral(type) ? FromTemplateLiteral(type.pattern) :
                        IsUnion(type) ? FromUnion(type.anyOf) :
                            []);
}
