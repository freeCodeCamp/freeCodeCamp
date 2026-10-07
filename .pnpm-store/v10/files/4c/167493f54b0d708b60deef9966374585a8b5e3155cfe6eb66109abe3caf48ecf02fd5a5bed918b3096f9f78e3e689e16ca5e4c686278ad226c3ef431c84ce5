import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TInterfaceAction } from '../engine/interface/instantiate.mjs';
/** Creates a deferred Interface action. */
export type TInterfaceDeferred<Heritage extends TSchema[] = TSchema[], Properties extends TProperties = TProperties> = (TDeferred<'Interface', [Heritage, Properties]>);
/** Creates a deferred Interface action. */
export declare function InterfaceDeferred<Heritage extends TSchema[], Properties extends TProperties>(heritage: [...Heritage], properties: Properties, options?: TSchemaOptions): TInterfaceDeferred<Heritage, Properties>;
/** Returns true if this value is a deferred Interface action. */
export declare function IsInterfaceDeferred(value: unknown): value is TInterfaceDeferred;
/** Creates an Interface using the given heritage and properties. */
export type TInterface<Heritage extends TSchema[], Properties extends TProperties> = (TInterfaceAction<Heritage, Properties>);
/** Creates an Interface using the given heritage and properties. */
export declare function Interface<Heritage extends TSchema[], Properties extends TProperties>(heritage: [...Heritage], properties: Properties, options?: TSchemaOptions): TInterface<Heritage, Properties>;
