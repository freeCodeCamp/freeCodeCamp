import { type TSchema } from '../../types/schema.mjs';
import { type TRecord } from '../../types/record.mjs';
import { type TFromKey } from './from_key.mjs';
import { type TParsePatternIntoTypes } from '../patterns/pattern.mjs';
import { type TIsTemplateLiteralFinite } from '../template_literal/is_finite.mjs';
import { type TTemplateLiteralDecode } from '../template_literal/decode.mjs';
export type TFromTemplateKey<Pattern extends string, Value extends TSchema, Types extends TSchema[] = TParsePatternIntoTypes<Pattern>, Finite extends boolean = TIsTemplateLiteralFinite<Types>, Result extends TSchema = Finite extends true ? TFromKey<TTemplateLiteralDecode<Pattern>, Value> : TRecord<Pattern, Value>> = Result;
export declare function FromTemplateKey<Pattern extends string, Value extends TSchema>(pattern: Pattern, value: Value): TFromTemplateKey<Pattern, Value>;
