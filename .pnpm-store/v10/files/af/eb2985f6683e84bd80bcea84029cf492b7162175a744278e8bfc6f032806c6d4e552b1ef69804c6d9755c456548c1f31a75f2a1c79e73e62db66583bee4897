import { type TSchema } from '../../types/schema.mjs';
import { type TMappingType, type TMappingFunc } from './mapping.mjs';
import { type TTemplateLiteralDecode } from '../template_literal/decode.mjs';
import { type TFromType } from './from_type.mjs';
export type TFromTemplateLiteral<Mapping extends TMappingType, Pattern extends string, Decoded extends TSchema = TTemplateLiteralDecode<Pattern>, Result extends TSchema = TFromType<Mapping, Decoded>> = Result;
export declare function FromTemplateLiteral(mapping: TMappingFunc, pattern: string): TSchema;
