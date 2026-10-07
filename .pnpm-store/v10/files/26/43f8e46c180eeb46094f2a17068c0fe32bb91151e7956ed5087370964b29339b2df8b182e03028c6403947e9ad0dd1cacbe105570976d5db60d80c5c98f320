// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Literal } from '../../types/literal.mjs';
import { ApplyMapping } from './mapping.mjs';
export function FromLiteral(mapping, value) {
    return (Guard.IsString(value)
        ? Literal(ApplyMapping(mapping, value))
        : Literal(value));
}
