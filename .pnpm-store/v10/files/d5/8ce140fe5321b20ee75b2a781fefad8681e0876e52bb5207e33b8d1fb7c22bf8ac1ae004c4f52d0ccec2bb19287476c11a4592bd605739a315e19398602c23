import { Kind } from 'graphql';
import { mergeDirectives } from './directives.js';
import { mergeNamedTypeArray } from './merge-named-type-array.js';
export function mergeUnion(first, second, config, directives) {
    if (second) {
        return {
            name: first.name,
            description: first['description'] || second['description'],
            // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
            directives: mergeDirectives(first.directives, second.directives, config, directives),
            kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) || first.kind === 'UnionTypeDefinition' || second.kind === 'UnionTypeDefinition'
                ? Kind.UNION_TYPE_DEFINITION
                : Kind.UNION_TYPE_EXTENSION,
            loc: first.loc,
            types: mergeNamedTypeArray(first.types, second.types, config),
        };
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...first,
            kind: Kind.UNION_TYPE_DEFINITION,
        }
        : first;
}
