import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TTemplateLiteralTypes } from '../../script/parser.mjs';
/** Parses a Template into TemplateLiteral types */
export type TParseTemplateIntoTypes<Template extends string, Parsed extends [TSchema[], string] | [] = TTemplateLiteralTypes<`\`${Template}\``>, Result extends TSchema = Parsed extends [infer Types extends TSchema[], string] ? Types : TUnreachable> = Result;
/** Parses a Template into a TemplateLiteral types */
export declare function ParseTemplateIntoTypes<Template extends string>(template: Template): TParseTemplateIntoTypes<Template>;
