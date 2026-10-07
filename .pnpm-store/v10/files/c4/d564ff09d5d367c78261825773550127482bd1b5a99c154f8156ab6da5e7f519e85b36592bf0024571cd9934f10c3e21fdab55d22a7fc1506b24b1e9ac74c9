import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TDeferred } from './deferred.mjs';
import { type TParseTemplateIntoTypes } from '../engine/patterns/template.mjs';
import { type TTemplateLiteralStatic } from '../engine/template_literal/static.mjs';
import { type TTemplateLiteralAction } from '../engine/template_literal/instantiate.mjs';
export type StaticTemplateLiteral<Pattern extends string> = (TTemplateLiteralStatic<Pattern>);
/** Represents a TemplateLiteral type. */
export interface TTemplateLiteral<Pattern extends string = string> extends TSchema {
    '~kind': 'TemplateLiteral';
    type: 'string';
    pattern: Pattern;
}
/** Creates a deferred TemplateLiteral action. */
export type TTemplateLiteralDeferred<Types extends TSchema[] = TSchema[]> = (TDeferred<'TemplateLiteral', [Types]>);
/** Creates a deferred TemplateLiteral action. */
export declare function TemplateLiteralDeferred<Types extends TSchema[]>(types: [...Types], options?: TSchemaOptions): TTemplateLiteralDeferred<Types>;
/** Returns true if this value is a deferred Interface action. */
export declare function IsTemplateLiteralDeferred(value: unknown): value is TTemplateLiteralDeferred;
export type TTemplateLiteralFromTypes<Types extends TSchema[], Result extends TSchema = TTemplateLiteralAction<Types>> = Result;
export declare function TemplateLiteralFromTypes<Types extends TSchema[]>(types: [...Types]): TTemplateLiteralFromTypes<Types>;
export type TTemplateLiteralFromString<Template extends string, Types extends TSchema[] = TParseTemplateIntoTypes<Template>, Result extends TSchema = TTemplateLiteralFromTypes<Types>> = Result;
export declare function TemplateLiteralFromString<Template extends string>(template: Template): TTemplateLiteralFromString<Template>;
/** Creates a TemplateLiteral type. */
export declare function TemplateLiteral<Template extends string>(template: Template, options?: TSchemaOptions): TTemplateLiteralFromString<Template>;
/** Creates a TemplateLiteral type. */
export declare function TemplateLiteral<Types extends TSchema[]>(types: [...Types], options?: TSchemaOptions): TTemplateLiteralFromTypes<Types>;
/** Returns true if the given value is TTemplateLiteral. */
export declare function IsTemplateLiteral(value: unknown): value is TTemplateLiteral;
