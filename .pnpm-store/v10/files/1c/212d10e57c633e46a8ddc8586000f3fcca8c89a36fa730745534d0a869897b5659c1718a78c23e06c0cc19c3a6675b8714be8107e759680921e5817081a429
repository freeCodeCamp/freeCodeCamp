export function isExternalMapperType(m) {
    return !!m.import;
}
var MapperKind;
(function (MapperKind) {
    MapperKind[MapperKind["Namespace"] = 0] = "Namespace";
    MapperKind[MapperKind["Default"] = 1] = "Default";
    MapperKind[MapperKind["Regular"] = 2] = "Regular";
})(MapperKind || (MapperKind = {}));
function prepareLegacy(mapper) {
    const items = mapper.split('#');
    const isNamespace = items.length === 3;
    const isDefault = items[1].trim() === 'default' || items[1].startsWith('default ');
    const hasAlias = items[1].includes(' as ');
    return {
        items,
        isDefault,
        isNamespace,
        hasAlias,
    };
}
function prepare(mapper) {
    const [source, path] = mapper.split('#');
    const isNamespace = path.includes('.');
    const isDefault = path.trim() === 'default' || path.startsWith('default ');
    const hasAlias = path.includes(' as ');
    return {
        items: isNamespace ? [source, ...path.split('.')] : [source, path],
        isDefault,
        isNamespace,
        hasAlias,
    };
}
function isLegacyMode(mapper) {
    return mapper.split('#').length === 3;
}
export function parseMapper(mapper, gqlTypeName = null, suffix) {
    if (isExternalMapper(mapper)) {
        const { isNamespace, isDefault, hasAlias, items } = isLegacyMode(mapper) ? prepareLegacy(mapper) : prepare(mapper);
        const mapperKind = isNamespace
            ? MapperKind.Namespace
            : isDefault
                ? MapperKind.Default
                : MapperKind.Regular;
        function handleAlias(isDefault = false) {
            const [importedType, aliasType] = items[1].split(/\s+as\s+/);
            const type = maybeSuffix(aliasType);
            return {
                importElement: isDefault ? type : `${importedType} as ${type}`,
                type,
            };
        }
        function maybeSuffix(type) {
            if (suffix) {
                return addSuffix(type, suffix);
            }
            return type;
        }
        function handle() {
            switch (mapperKind) {
                // ./my/module#Namespace#Identifier
                case MapperKind.Namespace: {
                    const [, ns, identifier] = items;
                    return {
                        type: `${ns}.${identifier}`,
                        importElement: ns,
                    };
                }
                case MapperKind.Default: {
                    // ./my/module#default as alias
                    if (hasAlias) {
                        return handleAlias(true);
                    }
                    const type = maybeSuffix(String(gqlTypeName));
                    // ./my/module#default
                    return {
                        importElement: type,
                        type,
                    };
                }
                case MapperKind.Regular: {
                    // ./my/module#Identifier as alias
                    if (hasAlias) {
                        return handleAlias();
                    }
                    const identifier = items[1];
                    const type = maybeSuffix(identifier);
                    // ./my/module#Identifier
                    return {
                        type,
                        importElement: suffix ? `${identifier} as ${type}` : type,
                    };
                }
            }
        }
        const { type, importElement } = handle();
        return {
            default: isDefault,
            isExternal: true,
            source: items[0],
            type,
            import: importElement.replace(/<(.*?)>/g, ''),
        };
    }
    return {
        isExternal: false,
        type: mapper,
    };
}
function addSuffix(element, suffix) {
    const generic = element.indexOf('<');
    if (generic === -1) {
        return `${element}${suffix}`;
    }
    return `${element.slice(0, generic)}${suffix}${element.slice(generic)}`;
}
export function isExternalMapper(value) {
    return value.includes('#');
}
export function transformMappers(rawMappers, mapperTypeSuffix) {
    const result = {};
    Object.keys(rawMappers).forEach(gqlTypeName => {
        const mapperDef = rawMappers[gqlTypeName];
        const parsedMapper = parseMapper(mapperDef, gqlTypeName, mapperTypeSuffix);
        result[gqlTypeName] = parsedMapper;
    });
    return result;
}
export function transformDirectiveArgumentAndInputFieldMappings(rawDirectiveArgumentAndInputFieldMappings, directiveArgumentAndInputFieldMappingTypeSuffix) {
    const result = {};
    Object.keys(rawDirectiveArgumentAndInputFieldMappings).forEach(directive => {
        const mapperDef = rawDirectiveArgumentAndInputFieldMappings[directive];
        const parsedMapper = parseMapper(mapperDef, directive, directiveArgumentAndInputFieldMappingTypeSuffix);
        result[directive] = parsedMapper;
    });
    return result;
}
export function buildMapperImport(source, types, useTypeImports) {
    if (!types || types.length === 0) {
        return null;
    }
    const defaultType = types.find(t => t.asDefault === true);
    let namedTypes = types.filter(t => !t.asDefault);
    if (useTypeImports) {
        if (defaultType) {
            // default as Baz
            namedTypes = [{ identifier: `default as ${defaultType.identifier}` }, ...namedTypes];
        }
        // { Foo, Bar as BarModel }
        const namedImports = namedTypes.length ? `{ ${namedTypes.map(t => t.identifier).join(', ')} }` : '';
        // { default as Baz, Foo, Bar as BarModel }
        return `import type ${[namedImports].filter(Boolean).join(', ')} from '${source}';`;
    }
    // { Foo, Bar as BarModel }
    const namedImports = namedTypes.length ? `{ ${namedTypes.map(t => t.identifier).join(', ')} }` : '';
    // Baz
    const defaultImport = defaultType ? defaultType.identifier : '';
    // Baz, { Foo, Bar as BarModel }
    return `import ${[defaultImport, namedImports].filter(Boolean).join(', ')} from '${source}';`;
}
