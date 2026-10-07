import type { ParserServicesWithTypeInformation } from '@typescript-eslint/utils';
import type { InterfaceType, Type } from 'typescript';
export declare function hasBaseTypes(type: Type): type is InterfaceType;
export declare function isNumberLike(type: Type): boolean;
export declare function isStringLike(type: Type): boolean;
/**
 * Recursively checks if a type or any of its base types matches the provided
 * matcher function.
 * @param services Parser services with type information
 * @param matcher Function to test if a type matches the desired criteria
 * @param type The type to check
 * @param seen Set of already visited types to prevent infinite recursion
 * @returns `true` if the type or any of its base types match the matcher
 */
export declare function matchesTypeOrBaseType(services: ParserServicesWithTypeInformation, matcher: (type: Type) => boolean, type: Type, seen?: Set<Type>): boolean;
