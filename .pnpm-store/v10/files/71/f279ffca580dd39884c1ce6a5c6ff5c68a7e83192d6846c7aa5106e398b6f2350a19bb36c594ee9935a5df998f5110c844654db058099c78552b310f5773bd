/** https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/utils/src/ts-eslint/Rule.ts */
import type { TSESTree } from "@typescript-eslint/types";
import eslint from "eslint";

/** Utility type to convert node type enum to string literal */
type NodeWithStringType<T extends TSESTree.Node> = Omit<T, "type"> & {
  type: `${T["type"]}`;
};

export type NullLiteral = NodeWithStringType<TSESTree.NullLiteral>;
export type NodeOrToken = TSESTree.NodeOrTokenData;
// Node type aliases with string literal types
export type AccessorProperty = NodeWithStringType<TSESTree.AccessorProperty>;
export type ArrayExpression = NodeWithStringType<TSESTree.ArrayExpression>;
export type ArrayPattern = NodeWithStringType<TSESTree.ArrayPattern>;
export type ArrowFunctionExpression =
  NodeWithStringType<TSESTree.ArrowFunctionExpression>;
export type AssignmentExpression =
  NodeWithStringType<TSESTree.AssignmentExpression>;
export type AssignmentPattern = NodeWithStringType<TSESTree.AssignmentPattern>;
export type AwaitExpression = NodeWithStringType<TSESTree.AwaitExpression>;
export type BinaryExpression = NodeWithStringType<TSESTree.BinaryExpression>;
export type BlockStatement = NodeWithStringType<TSESTree.BlockStatement>;
export type BreakStatement = NodeWithStringType<TSESTree.BreakStatement>;
export type CallExpression = NodeWithStringType<TSESTree.CallExpression>;
export type CatchClause = NodeWithStringType<TSESTree.CatchClause>;
export type ChainExpression = NodeWithStringType<TSESTree.ChainExpression>;
export type ClassBody = NodeWithStringType<TSESTree.ClassBody>;
export type ClassDeclaration = NodeWithStringType<TSESTree.ClassDeclaration>;
export type ClassExpression = NodeWithStringType<TSESTree.ClassExpression>;
export type ConditionalExpression =
  NodeWithStringType<TSESTree.ConditionalExpression>;
export type ContinueStatement = NodeWithStringType<TSESTree.ContinueStatement>;
export type DebuggerStatement = NodeWithStringType<TSESTree.DebuggerStatement>;
export type Decorator = NodeWithStringType<TSESTree.Decorator>;
export type DoWhileStatement = NodeWithStringType<TSESTree.DoWhileStatement>;
export type EmptyStatement = NodeWithStringType<TSESTree.EmptyStatement>;
export type ExportAllDeclaration =
  NodeWithStringType<TSESTree.ExportAllDeclaration>;
export type ExportDefaultDeclaration =
  NodeWithStringType<TSESTree.ExportDefaultDeclaration>;
export type ExportNamedDeclaration =
  NodeWithStringType<TSESTree.ExportNamedDeclaration>;
export type ExportSpecifier = NodeWithStringType<TSESTree.ExportSpecifier>;
export type ExpressionStatement =
  NodeWithStringType<TSESTree.ExpressionStatement>;
export type ForInStatement = NodeWithStringType<TSESTree.ForInStatement>;
export type ForOfStatement = NodeWithStringType<TSESTree.ForOfStatement>;
export type ForStatement = NodeWithStringType<TSESTree.ForStatement>;
export type FunctionDeclaration =
  NodeWithStringType<TSESTree.FunctionDeclaration>;
export type FunctionExpression =
  NodeWithStringType<TSESTree.FunctionExpression>;
export type Identifier = NodeWithStringType<TSESTree.Identifier>;
export type IfStatement = NodeWithStringType<TSESTree.IfStatement>;
export type ImportAttribute = NodeWithStringType<TSESTree.ImportAttribute>;
export type ImportDeclaration = NodeWithStringType<TSESTree.ImportDeclaration>;
export type ImportDefaultSpecifier =
  NodeWithStringType<TSESTree.ImportDefaultSpecifier>;
export type ImportExpression = NodeWithStringType<TSESTree.ImportExpression>;
export type ImportNamespaceSpecifier =
  NodeWithStringType<TSESTree.ImportNamespaceSpecifier>;
export type ImportSpecifier = NodeWithStringType<TSESTree.ImportSpecifier>;
export type JSXAttribute = NodeWithStringType<TSESTree.JSXAttribute>;
export type JSXClosingElement = NodeWithStringType<TSESTree.JSXClosingElement>;
export type JSXClosingFragment =
  NodeWithStringType<TSESTree.JSXClosingFragment>;
export type JSXElement = NodeWithStringType<TSESTree.JSXElement>;
export type JSXEmptyExpression =
  NodeWithStringType<TSESTree.JSXEmptyExpression>;
export type JSXExpressionContainer =
  NodeWithStringType<TSESTree.JSXExpressionContainer>;
export type JSXFragment = NodeWithStringType<TSESTree.JSXFragment>;
export type JSXIdentifier = NodeWithStringType<TSESTree.JSXIdentifier>;
export type JSXMemberExpression =
  NodeWithStringType<TSESTree.JSXMemberExpression>;
export type JSXNamespacedName = NodeWithStringType<TSESTree.JSXNamespacedName>;
export type JSXOpeningElement = NodeWithStringType<TSESTree.JSXOpeningElement>;
export type JSXOpeningFragment =
  NodeWithStringType<TSESTree.JSXOpeningFragment>;
export type JSXSpreadAttribute =
  NodeWithStringType<TSESTree.JSXSpreadAttribute>;
export type JSXSpreadChild = NodeWithStringType<TSESTree.JSXSpreadChild>;
export type JSXText = NodeWithStringType<TSESTree.JSXText>;
export type LabeledStatement = NodeWithStringType<TSESTree.LabeledStatement>;
export type Literal = NodeWithStringType<TSESTree.Literal>;
export type LogicalExpression = NodeWithStringType<TSESTree.LogicalExpression>;
export type MemberExpression = NodeWithStringType<TSESTree.MemberExpression>;
export type MetaProperty = NodeWithStringType<TSESTree.MetaProperty>;
export type MethodDefinition = NodeWithStringType<TSESTree.MethodDefinition>;
export type NewExpression = NodeWithStringType<TSESTree.NewExpression>;
export type ObjectExpression = NodeWithStringType<TSESTree.ObjectExpression>;
export type ObjectPattern = NodeWithStringType<TSESTree.ObjectPattern>;
export type PrivateIdentifier = NodeWithStringType<TSESTree.PrivateIdentifier>;
export type Program = NodeWithStringType<TSESTree.Program>;
export type Property = NodeWithStringType<TSESTree.Property>;
export type PropertyDefinition =
  NodeWithStringType<TSESTree.PropertyDefinition>;
export type RestElement = NodeWithStringType<TSESTree.RestElement>;
export type ReturnStatement = NodeWithStringType<TSESTree.ReturnStatement>;
export type SequenceExpression =
  NodeWithStringType<TSESTree.SequenceExpression>;
export type SpreadElement = NodeWithStringType<TSESTree.SpreadElement>;
export type StaticBlock = NodeWithStringType<TSESTree.StaticBlock>;
export type Super = NodeWithStringType<TSESTree.Super>;
export type SwitchCase = NodeWithStringType<TSESTree.SwitchCase>;
export type SwitchStatement = NodeWithStringType<TSESTree.SwitchStatement>;
export type TaggedTemplateExpression =
  NodeWithStringType<TSESTree.TaggedTemplateExpression>;
export type TemplateElement = NodeWithStringType<TSESTree.TemplateElement>;
export type TemplateLiteral = NodeWithStringType<TSESTree.TemplateLiteral>;
export type ThisExpression = NodeWithStringType<TSESTree.ThisExpression>;
export type ThrowStatement = NodeWithStringType<TSESTree.ThrowStatement>;
export type TryStatement = NodeWithStringType<TSESTree.TryStatement>;
export type UnaryExpression = NodeWithStringType<TSESTree.UnaryExpression>;
export type UpdateExpression = NodeWithStringType<TSESTree.UpdateExpression>;
export type VariableDeclaration =
  NodeWithStringType<TSESTree.VariableDeclaration>;
export type VariableDeclarator =
  NodeWithStringType<TSESTree.VariableDeclarator>;
export type WhileStatement = NodeWithStringType<TSESTree.WhileStatement>;
export type WithStatement = NodeWithStringType<TSESTree.WithStatement>;
export type YieldExpression = NodeWithStringType<TSESTree.YieldExpression>;

// TypeScript-specific node types
export type TSAsExpression = NodeWithStringType<TSESTree.TSAsExpression>;
export type TSTypeAnnotation = NodeWithStringType<TSESTree.TSTypeAnnotation>;
export type TSTypeReference = NodeWithStringType<TSESTree.TSTypeReference>;
export type TSQualifiedName = NodeWithStringType<TSESTree.TSQualifiedName>;
export type TSInterfaceDeclaration =
  NodeWithStringType<TSESTree.TSInterfaceDeclaration>;
export type TSTypeAliasDeclaration =
  NodeWithStringType<TSESTree.TSTypeAliasDeclaration>;
export type TSEnumDeclaration = NodeWithStringType<TSESTree.TSEnumDeclaration>;
export type TSModuleDeclaration =
  NodeWithStringType<TSESTree.TSModuleDeclaration>;
export type TSImportEqualsDeclaration =
  NodeWithStringType<TSESTree.TSImportEqualsDeclaration>;
export type TSExportAssignment =
  NodeWithStringType<TSESTree.TSExportAssignment>;
export type TSNamespaceExportDeclaration =
  NodeWithStringType<TSESTree.TSNamespaceExportDeclaration>;

// Union type of all node types
export type Node =
  | AccessorProperty
  | ArrayExpression
  | ArrayPattern
  | ArrowFunctionExpression
  | AssignmentExpression
  | AssignmentPattern
  | AwaitExpression
  | BinaryExpression
  | BlockStatement
  | BreakStatement
  | CallExpression
  | CatchClause
  | ChainExpression
  | ClassBody
  | ClassDeclaration
  | ClassExpression
  | ConditionalExpression
  | ContinueStatement
  | DebuggerStatement
  | Decorator
  | DoWhileStatement
  | EmptyStatement
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | ExportSpecifier
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | FunctionDeclaration
  | FunctionExpression
  | Identifier
  | IfStatement
  | ImportAttribute
  | ImportDeclaration
  | ImportDefaultSpecifier
  | ImportExpression
  | ImportNamespaceSpecifier
  | ImportSpecifier
  | JSXAttribute
  | JSXClosingElement
  | JSXClosingFragment
  | JSXElement
  | JSXEmptyExpression
  | JSXExpressionContainer
  | JSXFragment
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName
  | JSXOpeningElement
  | JSXOpeningFragment
  | JSXSpreadAttribute
  | JSXSpreadChild
  | JSXText
  | LabeledStatement
  | Literal
  | LogicalExpression
  | MemberExpression
  | MetaProperty
  | MethodDefinition
  | NewExpression
  | ObjectExpression
  | ObjectPattern
  | PrivateIdentifier
  | Program
  | Property
  | PropertyDefinition
  | RestElement
  | ReturnStatement
  | SequenceExpression
  | SpreadElement
  | StaticBlock
  | Super
  | SwitchCase
  | SwitchStatement
  | TaggedTemplateExpression
  | TemplateElement
  | TemplateLiteral
  | ThisExpression
  | ThrowStatement
  | TryStatement
  | UnaryExpression
  | UpdateExpression
  | VariableDeclaration
  | VariableDeclarator
  | WhileStatement
  | WithStatement
  | YieldExpression;

export type RuleFunction<T extends NodeOrToken = never> = (node: T) => void;

type RuleListenerExitSelectors = {
  [K in keyof RuleListenerBaseSelectors as `${K}:exit`]: RuleListenerBaseSelectors[K];
};

interface RuleListenerBaseSelectors {
  AccessorProperty?: RuleFunction<AccessorProperty>;
  ArrayExpression?: RuleFunction<ArrayExpression>;
  ArrayPattern?: RuleFunction<ArrayPattern>;
  ArrowFunctionExpression?: RuleFunction<ArrowFunctionExpression>;
  AssignmentExpression?: RuleFunction<AssignmentExpression>;
  AssignmentPattern?: RuleFunction<AssignmentPattern>;
  AwaitExpression?: RuleFunction<AwaitExpression>;
  BinaryExpression?: RuleFunction<BinaryExpression>;
  BlockStatement?: RuleFunction<BlockStatement>;
  BreakStatement?: RuleFunction<BreakStatement>;
  CallExpression?: RuleFunction<CallExpression>;
  CatchClause?: RuleFunction<CatchClause>;
  ChainExpression?: RuleFunction<ChainExpression>;
  ClassBody?: RuleFunction<ClassBody>;
  ClassDeclaration?: RuleFunction<ClassDeclaration>;
  ClassExpression?: RuleFunction<ClassExpression>;
  ConditionalExpression?: RuleFunction<ConditionalExpression>;
  ContinueStatement?: RuleFunction<ContinueStatement>;
  DebuggerStatement?: RuleFunction<DebuggerStatement>;
  Decorator?: RuleFunction<Decorator>;
  DoWhileStatement?: RuleFunction<DoWhileStatement>;
  EmptyStatement?: RuleFunction<EmptyStatement>;
  ExportAllDeclaration?: RuleFunction<ExportAllDeclaration>;
  ExportDefaultDeclaration?: RuleFunction<ExportDefaultDeclaration>;
  ExportNamedDeclaration?: RuleFunction<ExportNamedDeclaration>;
  ExportSpecifier?: RuleFunction<ExportSpecifier>;
  ExpressionStatement?: RuleFunction<ExpressionStatement>;
  ForInStatement?: RuleFunction<ForInStatement>;
  ForOfStatement?: RuleFunction<ForOfStatement>;
  ForStatement?: RuleFunction<ForStatement>;
  FunctionDeclaration?: RuleFunction<FunctionDeclaration>;
  FunctionExpression?: RuleFunction<FunctionExpression>;
  Identifier?: RuleFunction<Identifier>;
  IfStatement?: RuleFunction<IfStatement>;
  ImportAttribute?: RuleFunction<ImportAttribute>;
  ImportDeclaration?: RuleFunction<ImportDeclaration>;
  ImportDefaultSpecifier?: RuleFunction<ImportDefaultSpecifier>;
  ImportExpression?: RuleFunction<ImportExpression>;
  ImportNamespaceSpecifier?: RuleFunction<ImportNamespaceSpecifier>;
  ImportSpecifier?: RuleFunction<ImportSpecifier>;
  JSXAttribute?: RuleFunction<JSXAttribute>;
  JSXClosingElement?: RuleFunction<JSXClosingElement>;
  JSXClosingFragment?: RuleFunction<JSXClosingFragment>;
  JSXElement?: RuleFunction<JSXElement>;
  JSXEmptyExpression?: RuleFunction<JSXEmptyExpression>;
  JSXExpressionContainer?: RuleFunction<JSXExpressionContainer>;
  JSXFragment?: RuleFunction<JSXFragment>;
  JSXIdentifier?: RuleFunction<JSXIdentifier>;
  JSXMemberExpression?: RuleFunction<JSXMemberExpression>;
  JSXNamespacedName?: RuleFunction<JSXNamespacedName>;
  JSXOpeningElement?: RuleFunction<JSXOpeningElement>;
  JSXOpeningFragment?: RuleFunction<JSXOpeningFragment>;
  JSXSpreadAttribute?: RuleFunction<JSXSpreadAttribute>;
  JSXSpreadChild?: RuleFunction<JSXSpreadChild>;
  JSXText?: RuleFunction<JSXText>;
  LabeledStatement?: RuleFunction<LabeledStatement>;
  Literal?: RuleFunction<Literal>;
  LogicalExpression?: RuleFunction<LogicalExpression>;
  MemberExpression?: RuleFunction<MemberExpression>;
  MetaProperty?: RuleFunction<MetaProperty>;
  MethodDefinition?: RuleFunction<MethodDefinition>;
  NewExpression?: RuleFunction<NewExpression>;
  ObjectExpression?: RuleFunction<ObjectExpression>;
  ObjectPattern?: RuleFunction<ObjectPattern>;
  PrivateIdentifier?: RuleFunction<PrivateIdentifier>;
  Program?: RuleFunction<Program>;
  Property?: RuleFunction<Property>;
  PropertyDefinition?: RuleFunction<PropertyDefinition>;
  RestElement?: RuleFunction<RestElement>;
  ReturnStatement?: RuleFunction<ReturnStatement>;
  SequenceExpression?: RuleFunction<SequenceExpression>;
  SpreadElement?: RuleFunction<SpreadElement>;
  StaticBlock?: RuleFunction<StaticBlock>;
  Super?: RuleFunction<Super>;
  SwitchCase?: RuleFunction<SwitchCase>;
  SwitchStatement?: RuleFunction<SwitchStatement>;
  TaggedTemplateExpression?: RuleFunction<TaggedTemplateExpression>;
  TemplateElement?: RuleFunction<TemplateElement>;
  TemplateLiteral?: RuleFunction<TemplateLiteral>;
  ThisExpression?: RuleFunction<ThisExpression>;
  ThrowStatement?: RuleFunction<ThrowStatement>;
  TryStatement?: RuleFunction<TryStatement>;
  UnaryExpression?: RuleFunction<UnaryExpression>;
  UpdateExpression?: RuleFunction<UpdateExpression>;
  VariableDeclaration?: RuleFunction<VariableDeclaration>;
  VariableDeclarator?: RuleFunction<VariableDeclarator>;
  WhileStatement?: RuleFunction<WhileStatement>;
  WithStatement?: RuleFunction<WithStatement>;
  YieldExpression?: RuleFunction<YieldExpression>;
}

export type RuleListener = RuleListenerBaseSelectors &
  RuleListenerExitSelectors;

interface RuleFix {
  range: eslint.AST.Range;
  text: string;
}

export interface RuleFixer {
  insertTextAfter(nodeOrToken: NodeOrToken, text: string): RuleFix;

  insertTextAfterRange(range: eslint.AST.Range, text: string): RuleFix;

  insertTextBefore(nodeOrToken: NodeOrToken, text: string): RuleFix;

  insertTextBeforeRange(range: eslint.AST.Range, text: string): RuleFix;

  remove(nodeOrToken: NodeOrToken): RuleFix;

  removeRange(range: eslint.AST.Range): RuleFix;

  replaceText(nodeOrToken: NodeOrToken, text: string): RuleFix;

  replaceTextRange(range: eslint.AST.Range, text: string): RuleFix;
}

export type ReportFixFunction = (
  fixer: RuleFixer
) => IterableIterator<RuleFix> | readonly RuleFix[] | RuleFix | null;

interface ReportDescriptorOptionsBase {
  data?: { [key: string]: string };
  fix?: null | ReportFixFunction;
}

type SuggestionDescriptorMessage = { messageId: string };
export type SuggestionReportDescriptor = SuggestionDescriptorMessage &
  ReportDescriptorOptionsBase;

interface ReportDescriptorOptions extends ReportDescriptorOptionsBase {
  suggest?: SuggestionReportDescriptor[] | null;
}

type ReportDescriptor = ReportDescriptorMessage &
  ReportDescriptorLocation &
  ReportDescriptorOptions;
type ReportDescriptorMessage = { message: string } | { messageId: string };
type ReportDescriptorLocation = {
  node?: Node | null;
  loc?: eslint.AST.SourceLocation;
  line?: number;
  column?: number;
};

export interface Context<Options extends unknown[]> extends Omit<
  eslint.Rule.RuleContext,
  "report"
> {
  report(descriptor: ReportDescriptor): void;
  options: Options;
}

export interface RuleModule<Options extends unknown[]> {
  create(context: Context<Options>): RuleListener;
  meta: eslint.Rule.RuleMetaData;
}
