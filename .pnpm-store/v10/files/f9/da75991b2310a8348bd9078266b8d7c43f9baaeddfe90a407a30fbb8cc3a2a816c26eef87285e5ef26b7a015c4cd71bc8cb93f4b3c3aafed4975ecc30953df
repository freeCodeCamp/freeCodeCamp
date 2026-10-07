import { ParsedResolversConfig, RawResolversConfig } from './base-resolvers-visitor.js';
import { DirectiveArgumentAndInputFieldMappings, ParsedDirectiveArgumentAndInputFieldMappings } from './types.js';
export declare type ParsedMapper = InternalParsedMapper | ExternalParsedMapper;
export interface InternalParsedMapper {
    isExternal: false;
    type: string;
}
export interface ExternalParsedMapper {
    isExternal: true;
    type: string;
    import: string;
    source: string;
    default: boolean;
}
export declare function isExternalMapperType(m: ParsedMapper): m is ExternalParsedMapper;
export declare function parseMapper(mapper: string, gqlTypeName?: string | null, suffix?: string): ParsedMapper;
export declare function isExternalMapper(value: string): boolean;
export declare function transformMappers(rawMappers: RawResolversConfig['mappers'], mapperTypeSuffix?: string): ParsedResolversConfig['mappers'];
export declare function transformDirectiveArgumentAndInputFieldMappings(rawDirectiveArgumentAndInputFieldMappings: DirectiveArgumentAndInputFieldMappings, directiveArgumentAndInputFieldMappingTypeSuffix?: string): ParsedDirectiveArgumentAndInputFieldMappings;
export declare function buildMapperImport(source: string, types: {
    identifier: string;
    asDefault?: boolean;
}[], useTypeImports: boolean): string | null;
