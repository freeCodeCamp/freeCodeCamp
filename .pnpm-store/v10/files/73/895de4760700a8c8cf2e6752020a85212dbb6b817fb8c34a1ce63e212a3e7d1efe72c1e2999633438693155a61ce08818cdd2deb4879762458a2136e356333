import type { TSESTree } from '@typescript-eslint/types';
import type { Referencer } from './Referencer';
import { Visitor } from './Visitor';
export declare class ClassVisitor extends Visitor {
    #private;
    constructor(referencer: Referencer);
    static visit(referencer: Referencer, node: TSESTree.ClassDeclaration | TSESTree.ClassExpression): void;
    visit(node: TSESTree.Node | null | undefined): void;
    protected visitClass(node: TSESTree.ClassDeclaration | TSESTree.ClassExpression): void;
    protected visitFunctionParameterTypeAnnotation(node: TSESTree.Parameter): void;
    protected visitMethod(node: TSESTree.MethodDefinition): void;
    protected visitMethodFunction(node: TSESTree.FunctionExpression): void;
    protected visitPropertyBase(node: TSESTree.AccessorProperty | TSESTree.PropertyDefinition | TSESTree.TSAbstractAccessorProperty | TSESTree.TSAbstractMethodDefinition | TSESTree.TSAbstractPropertyDefinition): void;
    protected visitPropertyDefinition(node: TSESTree.AccessorProperty | TSESTree.PropertyDefinition | TSESTree.TSAbstractAccessorProperty | TSESTree.TSAbstractPropertyDefinition): void;
    protected visitType(node: TSESTree.Node | null | undefined): void;
    protected AccessorProperty(node: TSESTree.AccessorProperty): void;
    protected ClassBody(node: TSESTree.ClassBody): void;
    protected Identifier(node: TSESTree.Identifier): void;
    protected MethodDefinition(node: TSESTree.MethodDefinition): void;
    protected PrivateIdentifier(): void;
    protected PropertyDefinition(node: TSESTree.PropertyDefinition): void;
    protected StaticBlock(node: TSESTree.StaticBlock): void;
    protected TSAbstractAccessorProperty(node: TSESTree.TSAbstractAccessorProperty): void;
    protected TSAbstractMethodDefinition(node: TSESTree.TSAbstractMethodDefinition): void;
    protected TSAbstractPropertyDefinition(node: TSESTree.TSAbstractPropertyDefinition): void;
    protected TSIndexSignature(node: TSESTree.TSIndexSignature): void;
}
