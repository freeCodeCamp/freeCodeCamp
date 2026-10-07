import eslint from 'eslint';
import estree from 'estree';

declare global {
  interface ASTNode extends estree.BaseNode {
    [_: string]: any; // TODO: fixme
  }
  type Scope = eslint.Scope.Scope;
  type Token = eslint.AST.Token;
  type Fixer = eslint.Rule.RuleFixer;
  type JSXAttribute = ASTNode;
  type JSXElement = ASTNode;
  type JSXFragment = ASTNode;
  type JSXOpeningElement = ASTNode;
  type JSXSpreadAttribute = ASTNode;

  type Context = eslint.Rule.RuleContext;

  type TypeDeclarationBuilder = (annotation: ASTNode, parentName: string, seen: Set<typeof annotation>) => object;

  type TypeDeclarationBuilders = {
    [k in string]: TypeDeclarationBuilder;
  };

  type UnionTypeDefinition = {
    type: 'union' | 'shape';
    children: unknown[];
  };
}
