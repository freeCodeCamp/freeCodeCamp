import { type TSchema } from '../../types/schema.mjs';
import { type TTemplateLiteralDecode } from '../template_literal/decode.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromTemplateLiteral<Pattern extends string, Decoded extends TSchema = TTemplateLiteralDecode<Pattern>, Result extends string[] = TFromType<Decoded>> = Result;
export declare function FromTemplateLiteral<Pattern extends string>(pattern: Pattern): TFromTemplateLiteral<Pattern>;
