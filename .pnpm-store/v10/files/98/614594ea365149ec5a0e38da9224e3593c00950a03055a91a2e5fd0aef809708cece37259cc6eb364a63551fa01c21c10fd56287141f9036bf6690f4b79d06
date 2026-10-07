import type { TSESTree } from '@typescript-eslint/types';
import { DefinitionBase } from './DefinitionBase';
import { DefinitionType } from './DefinitionType';
export declare class ImportBindingDefinition extends DefinitionBase<DefinitionType.ImportBinding, TSESTree.ImportDefaultSpecifier | TSESTree.ImportNamespaceSpecifier | TSESTree.ImportSpecifier | TSESTree.TSImportEqualsDeclaration, TSESTree.ImportDeclaration | TSESTree.TSImportEqualsDeclaration, TSESTree.Identifier> {
    readonly isTypeDefinition = true;
    readonly isVariableDefinition = true;
    constructor(name: TSESTree.Identifier, node: TSESTree.TSImportEqualsDeclaration, decl: TSESTree.TSImportEqualsDeclaration);
    constructor(name: TSESTree.Identifier, node: Exclude<ImportBindingDefinition['node'], TSESTree.TSImportEqualsDeclaration>, decl: TSESTree.ImportDeclaration);
}
