import { Kind } from 'graphql';
import { mergeDirectives } from './directives.js';
import { mergeEnumValues } from './enum-values.js';
export function mergeEnum(e1, e2, config, directives) {
    if (e2) {
        return {
            name: e1.name,
            description: e1['description'] || e2['description'],
            kind: (config === null || config === void 0 ? void 0 : config.convertExtensions) || e1.kind === 'EnumTypeDefinition' || e2.kind === 'EnumTypeDefinition'
                ? 'EnumTypeDefinition'
                : 'EnumTypeExtension',
            loc: e1.loc,
            directives: mergeDirectives(e1.directives, e2.directives, config, directives),
            values: mergeEnumValues(e1.values, e2.values, config),
        };
    }
    return (config === null || config === void 0 ? void 0 : config.convertExtensions)
        ? {
            ...e1,
            kind: Kind.ENUM_TYPE_DEFINITION,
        }
        : e1;
}
