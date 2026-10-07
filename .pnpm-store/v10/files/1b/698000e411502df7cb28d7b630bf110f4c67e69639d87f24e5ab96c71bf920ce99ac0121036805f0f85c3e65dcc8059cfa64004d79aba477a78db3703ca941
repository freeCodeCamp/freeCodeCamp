import type { Lib, TSESTree } from '@typescript-eslint/types';
import type { Scope } from '../scope';
import type { ScopeManager } from '../ScopeManager';
import type { ReferenceImplicitGlobal } from './Reference';
import type { VisitorOptions } from './Visitor';
import { Visitor } from './Visitor';
interface ReferencerOptions extends VisitorOptions {
    jsxPragma: string | null;
    jsxFragmentName: string | null;
    lib: Lib[];
    emitDecoratorMetadata: boolean;
}
declare class Referencer extends Visitor {
    #private;
    readonly scopeManager: ScopeManager;
    constructor(options: ReferencerOptions, scopeManager: ScopeManager);
    currentScope(): Scope;
    currentScope(throwOnNull: true): Scope | null;
    close(node: TSESTree.Node): void;
    referencingDefaultValue(pattern: TSESTree.Identifier, assignments: (TSESTree.AssignmentExpression | TSESTree.AssignmentPattern)[], maybeImplicitGlobal: ReferenceImplicitGlobal | null, init: boolean): void;
    private populateGlobalsFromLib;
    /**
     * Searches for a variable named "name" in the upper scopes and adds a pseudo-reference from itself to itself
     */
    private referenceInSomeUpperScope;
    private referenceJsxPragma;
    private referenceJsxFragment;
    protected visitClass(node: TSESTree.ClassDeclaration | TSESTree.ClassExpression): void;
    protected visitForIn(node: TSESTree.ForInStatement | TSESTree.ForOfStatement): void;
    protected visitFunctionParameterTypeAnnotation(node: TSESTree.Parameter): void;
    protected visitFunction(node: TSESTree.ArrowFunctionExpression | TSESTree.FunctionDeclaration | TSESTree.FunctionExpression | TSESTree.TSDeclareFunction | TSESTree.TSEmptyBodyFunctionExpression): void;
    protected visitProperty(node: TSESTree.Property): void;
    protected visitType(node: TSESTree.Node | null | undefined): void;
    protected visitTypeAssertion(node: TSESTree.TSAsExpression | TSESTree.TSTypeAssertion | TSESTree.TSSatisfiesExpression): void;
    protected ArrowFunctionExpression(node: TSESTree.ArrowFunctionExpression): void;
    protected AssignmentExpression(node: TSESTree.AssignmentExpression): void;
    protected BlockStatement(node: TSESTree.BlockStatement): void;
    protected BreakStatement(): void;
    protected CallExpression(node: TSESTree.CallExpression): void;
    protected CatchClause(node: TSESTree.CatchClause): void;
    protected ClassExpression(node: TSESTree.ClassExpression): void;
    protected ClassDeclaration(node: TSESTree.ClassDeclaration): void;
    protected ContinueStatement(): void;
    protected ExportAllDeclaration(): void;
    protected ExportDefaultDeclaration(node: TSESTree.ExportDefaultDeclaration): void;
    protected ExportNamedDeclaration(node: TSESTree.ExportNamedDeclaration): void;
    protected ForInStatement(node: TSESTree.ForInStatement): void;
    protected ForOfStatement(node: TSESTree.ForOfStatement): void;
    protected ForStatement(node: TSESTree.ForStatement): void;
    protected FunctionDeclaration(node: TSESTree.FunctionDeclaration): void;
    protected FunctionExpression(node: TSESTree.FunctionExpression): void;
    protected Identifier(node: TSESTree.Identifier): void;
    protected ImportDeclaration(node: TSESTree.ImportDeclaration): void;
    protected JSXAttribute(node: TSESTree.JSXAttribute): void;
    protected JSXClosingElement(): void;
    protected JSXFragment(node: TSESTree.JSXFragment): void;
    protected JSXIdentifier(node: TSESTree.JSXIdentifier): void;
    protected JSXMemberExpression(node: TSESTree.JSXMemberExpression): void;
    protected JSXOpeningElement(node: TSESTree.JSXOpeningElement): void;
    protected LabeledStatement(node: TSESTree.LabeledStatement): void;
    protected MemberExpression(node: TSESTree.MemberExpression): void;
    protected MetaProperty(): void;
    protected NewExpression(node: TSESTree.NewExpression): void;
    protected PrivateIdentifier(): void;
    protected Program(node: TSESTree.Program): void;
    protected Property(node: TSESTree.Property): void;
    protected SwitchStatement(node: TSESTree.SwitchStatement): void;
    protected TaggedTemplateExpression(node: TSESTree.TaggedTemplateExpression): void;
    protected TSAsExpression(node: TSESTree.TSAsExpression): void;
    protected TSDeclareFunction(node: TSESTree.TSDeclareFunction): void;
    protected TSImportEqualsDeclaration(node: TSESTree.TSImportEqualsDeclaration): void;
    protected TSEmptyBodyFunctionExpression(node: TSESTree.TSEmptyBodyFunctionExpression): void;
    protected TSEnumDeclaration(node: TSESTree.TSEnumDeclaration): void;
    protected TSInstantiationExpression(node: TSESTree.TSInstantiationExpression): void;
    protected TSInterfaceDeclaration(node: TSESTree.TSInterfaceDeclaration): void;
    protected TSModuleDeclaration(node: TSESTree.TSModuleDeclaration): void;
    protected TSSatisfiesExpression(node: TSESTree.TSSatisfiesExpression): void;
    protected TSTypeAliasDeclaration(node: TSESTree.TSTypeAliasDeclaration): void;
    protected TSTypeAssertion(node: TSESTree.TSTypeAssertion): void;
    protected UpdateExpression(node: TSESTree.UpdateExpression): void;
    protected VariableDeclaration(node: TSESTree.VariableDeclaration): void;
    protected WithStatement(node: TSESTree.WithStatement): void;
    protected ImportAttribute(): void;
}
export { Referencer, ReferencerOptions };
//# sourceMappingURL=Referencer.d.ts.map