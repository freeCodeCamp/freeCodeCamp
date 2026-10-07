import { oldVisit } from '@graphql-codegen/plugin-helpers';
import { optimizeOperations } from '@graphql-codegen/visitor-plugin-common';
import { concatAST, Kind } from 'graphql';
import { TypeScriptDocumentsVisitor } from './visitor.js';
export const plugin = (schema, rawDocuments, config) => {
    const documents = config.flattenGeneratedTypes
        ? optimizeOperations(schema, rawDocuments, {
            includeFragments: config.flattenGeneratedTypesIncludeFragments,
        })
        : rawDocuments;
    const allAst = concatAST(documents.map(v => v.document));
    const allFragments = [
        ...allAst.definitions.filter(d => d.kind === Kind.FRAGMENT_DEFINITION).map(fragmentDef => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(config.externalFragments || []),
    ];
    const visitor = new TypeScriptDocumentsVisitor(schema, config, allFragments);
    const visitorResult = oldVisit(allAst, {
        leave: visitor,
    });
    let content = visitorResult.definitions.join('\n');
    if (config.addOperationExport) {
        const exportConsts = [];
        allAst.definitions.forEach(d => {
            if ('name' in d) {
                exportConsts.push(`export declare const ${d.name.value}: import("graphql").DocumentNode;`);
            }
        });
        content = visitorResult.definitions.concat(exportConsts).join('\n');
    }
    if (config.globalNamespace) {
        content = `
    declare global {
      ${content}
    }`;
    }
    return {
        prepend: [...visitor.getImports(), ...visitor.getGlobalDeclarations(visitor.config.noExport)],
        content,
    };
};
export { TypeScriptDocumentsVisitor };
