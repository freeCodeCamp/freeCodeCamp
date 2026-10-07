import { oldVisit } from '@graphql-codegen/plugin-helpers';
import { transformSchemaAST } from '@graphql-codegen/schema-ast';
import { getNamedType, isIntrospectionType, isObjectType, parse, printIntrospectionSchema, TypeInfo, visit, visitWithTypeInfo, } from 'graphql';
import { TsIntrospectionVisitor } from './introspection-visitor.js';
import { TsVisitor } from './visitor.js';
export * from './config.js';
export * from './introspection-visitor.js';
export * from './typescript-variables-to-object.js';
export * from './visitor.js';
export const plugin = (schema, documents, config) => {
    const { schema: _schema, ast } = transformSchemaAST(schema, config);
    const visitor = new TsVisitor(_schema, config);
    const visitorResult = oldVisit(ast, { leave: visitor });
    const introspectionDefinitions = includeIntrospectionTypesDefinitions(_schema, documents, config);
    const scalars = visitor.scalarsDefinition;
    const directiveArgumentAndInputFieldMappings = visitor.directiveArgumentAndInputFieldMappingsDefinition;
    return {
        prepend: [
            ...visitor.getEnumsImports(),
            ...visitor.getDirectiveArgumentAndInputFieldMappingsImports(),
            ...visitor.getScalarsImports(),
            ...visitor.getWrapperDefinitions(),
        ].filter(Boolean),
        content: [
            scalars,
            directiveArgumentAndInputFieldMappings,
            ...visitorResult.definitions,
            ...introspectionDefinitions,
        ]
            .filter(Boolean)
            .join('\n'),
    };
};
export function includeIntrospectionTypesDefinitions(schema, documents, config) {
    const typeInfo = new TypeInfo(schema);
    const usedTypes = [];
    const documentsVisitor = visitWithTypeInfo(typeInfo, {
        Field() {
            const type = getNamedType(typeInfo.getType());
            if (type && isIntrospectionType(type) && !usedTypes.includes(type)) {
                usedTypes.push(type);
            }
        },
    });
    documents.forEach(doc => visit(doc.document, documentsVisitor));
    const typesToInclude = [];
    usedTypes.forEach(type => {
        collectTypes(type);
    });
    const visitor = new TsIntrospectionVisitor(schema, config, typesToInclude);
    const result = oldVisit(parse(printIntrospectionSchema(schema)), { leave: visitor });
    // recursively go through each `usedTypes` and their children and collect all used types
    // we don't care about Interfaces, Unions and others, but Objects and Enums
    function collectTypes(type) {
        if (typesToInclude.includes(type)) {
            return;
        }
        typesToInclude.push(type);
        if (isObjectType(type)) {
            const fields = type.getFields();
            Object.keys(fields).forEach(key => {
                const field = fields[key];
                const type = getNamedType(field.type);
                collectTypes(type);
            });
        }
    }
    return result.definitions;
}
