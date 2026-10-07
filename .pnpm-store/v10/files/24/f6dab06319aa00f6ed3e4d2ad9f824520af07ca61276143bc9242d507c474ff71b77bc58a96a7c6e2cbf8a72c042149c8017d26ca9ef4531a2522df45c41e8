import { Scope, SourceCode, Rule } from 'eslint';
import * as ESTree from 'estree';

type LegacyContext = {
  getFilename: () => string,
  getPhysicalFilename: () => string,
  getSourceCode: () => SourceCode,
  getScope: never,
  getAncestors: never,
  getDeclaredVariables: never,
};

type NewContext = {
  filename: string,
  sourceCode: SourceCode,
  getPhysicalFilename?: () => string,
  getScope: () => Scope.Scope,
  getAncestors: () => ESTree.Node[],
  getDeclaredVariables: (node: ESTree.Node) => Scope.Variable[],
};

export type Context = LegacyContext | NewContext | Rule.RuleContext;

declare function getAncestors(context: Context, node: ESTree.Node): ESTree.Node[];
declare function getDeclaredVariables(context: Context, node: ESTree.Node): Scope.Variable[];
declare function getFilename(context: Context): string;
declare function getPhysicalFilename(context: Context): string;
declare function getScope(context: Context, node: ESTree.Node): Scope.Scope;
declare function getSourceCode(context: Context): SourceCode;

export {
  getAncestors,
  getDeclaredVariables,
  getFilename,
  getPhysicalFilename,
  getScope,
  getSourceCode,
};
