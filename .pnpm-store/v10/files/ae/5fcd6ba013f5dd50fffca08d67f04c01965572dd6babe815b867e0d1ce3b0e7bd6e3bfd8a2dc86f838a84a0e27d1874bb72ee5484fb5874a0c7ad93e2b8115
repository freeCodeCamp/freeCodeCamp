import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TMappingType, type TMappingFunc, type TApplyMapping } from './mapping.mjs';
export type TFromLiteral<Mapping extends TMappingType, Value extends TLiteralValue> = (Value extends string ? TLiteral<TApplyMapping<Mapping, Value>> : TLiteral<Value>);
export declare function FromLiteral(mapping: TMappingFunc, value: TLiteralValue): TSchema;
