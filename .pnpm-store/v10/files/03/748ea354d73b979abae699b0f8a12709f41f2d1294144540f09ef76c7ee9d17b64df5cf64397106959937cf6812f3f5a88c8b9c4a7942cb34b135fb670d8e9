// Auto-generated code, DO NOT EDIT DIRECTLY!
// To edit this generated file you have to edit `tasks/ast_tools/src/generators/typescript.rs`.

export interface Program extends Span {
  type: "Program";
  body: Array<Directive | Statement>;
  sourceType: ModuleKind;
  hashbang: Hashbang | null;
  parent?: null;
}

export type Expression =
  | BooleanLiteral
  | NullLiteral
  | NumericLiteral
  | BigIntLiteral
  | RegExpLiteral
  | StringLiteral
  | TemplateLiteral
  | IdentifierReference
  | MetaProperty
  | Super
  | ArrayExpression
  | ArrowFunctionExpression
  | AssignmentExpression
  | AwaitExpression
  | BinaryExpression
  | CallExpression
  | ChainExpression
  | Class
  | ConditionalExpression
  | Function
  | ImportExpression
  | LogicalExpression
  | NewExpression
  | ObjectExpression
  | ParenthesizedExpression
  | SequenceExpression
  | TaggedTemplateExpression
  | ThisExpression
  | UnaryExpression
  | UpdateExpression
  | YieldExpression
  | PrivateInExpression
  | JSXElement
  | JSXFragment
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSNonNullExpression
  | TSInstantiationExpression
  | V8IntrinsicExpression
  | MemberExpression;

export interface IdentifierName extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface IdentifierReference extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface BindingIdentifier extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface LabelIdentifier extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface ThisExpression extends Span {
  type: "ThisExpression";
  parent?: Node;
}

export interface ArrayExpression extends Span {
  type: "ArrayExpression";
  elements: Array<ArrayExpressionElement>;
  parent?: Node;
}

export type ArrayExpressionElement = SpreadElement | null | Expression;

export interface ObjectExpression extends Span {
  type: "ObjectExpression";
  properties: Array<ObjectPropertyKind>;
  parent?: Node;
}

export type ObjectPropertyKind = ObjectProperty | SpreadElement;

export interface ObjectProperty extends Span {
  type: "Property";
  kind: PropertyKind;
  key: PropertyKey;
  value: Expression;
  method: boolean;
  shorthand: boolean;
  computed: boolean;
  optional?: false;
  parent?: Node;
}

export type PropertyKey = IdentifierName | PrivateIdentifier | Expression;

export type PropertyKind = "init" | "get" | "set";

export interface TemplateLiteral extends Span {
  type: "TemplateLiteral";
  quasis: Array<TemplateElement>;
  expressions: Array<Expression>;
  parent?: Node;
}

export interface TaggedTemplateExpression extends Span {
  type: "TaggedTemplateExpression";
  tag: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  quasi: TemplateLiteral;
  parent?: Node;
}

export interface TemplateElement extends Span {
  type: "TemplateElement";
  value: TemplateElementValue;
  tail: boolean;
  parent?: Node;
}

export interface TemplateElementValue {
  raw: string;
  cooked: string | null;
}

export type MemberExpression =
  | ComputedMemberExpression
  | StaticMemberExpression
  | PrivateFieldExpression;

export interface ComputedMemberExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: Expression;
  optional: boolean;
  computed: true;
  parent?: Node;
}

export interface StaticMemberExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: IdentifierName;
  optional: boolean;
  computed: false;
  parent?: Node;
}

export interface PrivateFieldExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: PrivateIdentifier;
  optional: boolean;
  computed: false;
  parent?: Node;
}

export interface CallExpression extends Span {
  type: "CallExpression";
  callee: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  arguments: Array<Argument>;
  optional: boolean;
  parent?: Node;
}

export interface NewExpression extends Span {
  type: "NewExpression";
  callee: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  arguments: Array<Argument>;
  parent?: Node;
}

export interface MetaProperty extends Span {
  type: "MetaProperty";
  meta: IdentifierName;
  property: IdentifierName;
  parent?: Node;
}

export interface SpreadElement extends Span {
  type: "SpreadElement";
  argument: Expression;
  parent?: Node;
}

export type Argument = SpreadElement | Expression;

export interface UpdateExpression extends Span {
  type: "UpdateExpression";
  operator: UpdateOperator;
  prefix: boolean;
  argument: SimpleAssignmentTarget;
  parent?: Node;
}

export interface UnaryExpression extends Span {
  type: "UnaryExpression";
  operator: UnaryOperator;
  argument: Expression;
  prefix: true;
  parent?: Node;
}

export interface BinaryExpression extends Span {
  type: "BinaryExpression";
  left: Expression;
  operator: BinaryOperator;
  right: Expression;
  parent?: Node;
}

export interface PrivateInExpression extends Span {
  type: "BinaryExpression";
  left: PrivateIdentifier;
  operator: "in";
  right: Expression;
  parent?: Node;
}

export interface LogicalExpression extends Span {
  type: "LogicalExpression";
  left: Expression;
  operator: LogicalOperator;
  right: Expression;
  parent?: Node;
}

export interface ConditionalExpression extends Span {
  type: "ConditionalExpression";
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  parent?: Node;
}

export interface AssignmentExpression extends Span {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  left: AssignmentTarget;
  right: Expression;
  parent?: Node;
}

export type AssignmentTarget = SimpleAssignmentTarget | AssignmentTargetPattern;

export type SimpleAssignmentTarget =
  | IdentifierReference
  | TSAsExpression
  | TSSatisfiesExpression
  | TSNonNullExpression
  | TSTypeAssertion
  | MemberExpression;

export type AssignmentTargetPattern = ArrayAssignmentTarget | ObjectAssignmentTarget;

export interface ArrayAssignmentTarget extends Span {
  type: "ArrayPattern";
  decorators?: [];
  elements: Array<AssignmentTargetMaybeDefault | AssignmentTargetRest | null>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface ObjectAssignmentTarget extends Span {
  type: "ObjectPattern";
  decorators?: [];
  properties: Array<AssignmentTargetProperty | AssignmentTargetRest>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface AssignmentTargetRest extends Span {
  type: "RestElement";
  decorators?: [];
  argument: AssignmentTarget;
  optional?: false;
  typeAnnotation?: null;
  value?: null;
  parent?: Node;
}

export type AssignmentTargetMaybeDefault = AssignmentTargetWithDefault | AssignmentTarget;

export interface AssignmentTargetWithDefault extends Span {
  type: "AssignmentPattern";
  decorators?: [];
  left: AssignmentTarget;
  right: Expression;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export type AssignmentTargetProperty =
  | AssignmentTargetPropertyIdentifier
  | AssignmentTargetPropertyProperty;

export interface AssignmentTargetPropertyIdentifier extends Span {
  type: "Property";
  kind: "init";
  key: IdentifierReference;
  value: IdentifierReference | AssignmentTargetWithDefault;
  method: false;
  shorthand: true;
  computed: false;
  optional?: false;
  parent?: Node;
}

export interface AssignmentTargetPropertyProperty extends Span {
  type: "Property";
  kind: "init";
  key: PropertyKey;
  value: AssignmentTargetMaybeDefault;
  method: false;
  shorthand: false;
  computed: boolean;
  optional?: false;
  parent?: Node;
}

export interface SequenceExpression extends Span {
  type: "SequenceExpression";
  expressions: Array<Expression>;
  parent?: Node;
}

export interface Super extends Span {
  type: "Super";
  parent?: Node;
}

export interface AwaitExpression extends Span {
  type: "AwaitExpression";
  argument: Expression;
  parent?: Node;
}

export interface ChainExpression extends Span {
  type: "ChainExpression";
  expression: ChainElement;
  parent?: Node;
}

export type ChainElement = CallExpression | TSNonNullExpression | MemberExpression;

export interface ParenthesizedExpression extends Span {
  type: "ParenthesizedExpression";
  expression: Expression;
  parent?: Node;
}

export type Statement =
  | BlockStatement
  | BreakStatement
  | ContinueStatement
  | DebuggerStatement
  | DoWhileStatement
  | EmptyStatement
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | IfStatement
  | LabeledStatement
  | ReturnStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | WhileStatement
  | WithStatement
  | Declaration
  | ModuleDeclaration;

export interface Directive extends Span {
  type: "ExpressionStatement";
  expression: StringLiteral;
  directive: string;
  parent?: Node;
}

export interface Hashbang extends Span {
  type: "Hashbang";
  value: string;
  parent?: Node;
}

export interface BlockStatement extends Span {
  type: "BlockStatement";
  body: Array<Statement>;
  parent?: Node;
}

export type Declaration =
  | VariableDeclaration
  | Function
  | Class
  | TSTypeAliasDeclaration
  | TSInterfaceDeclaration
  | TSEnumDeclaration
  | TSModuleDeclaration
  | TSGlobalDeclaration
  | TSImportEqualsDeclaration;

export interface VariableDeclaration extends Span {
  type: "VariableDeclaration";
  kind: VariableDeclarationKind;
  declarations: Array<VariableDeclarator>;
  declare?: boolean;
  parent?: Node;
}

export type VariableDeclarationKind = "var" | "let" | "const" | "using" | "await using";

export interface VariableDeclarator extends Span {
  type: "VariableDeclarator";
  id: BindingPattern;
  init: Expression | null;
  definite?: boolean;
  parent?: Node;
}

export interface EmptyStatement extends Span {
  type: "EmptyStatement";
  parent?: Node;
}

export interface ExpressionStatement extends Span {
  type: "ExpressionStatement";
  expression: Expression;
  directive?: string | null;
  parent?: Node;
}

export interface IfStatement extends Span {
  type: "IfStatement";
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
  parent?: Node;
}

export interface DoWhileStatement extends Span {
  type: "DoWhileStatement";
  body: Statement;
  test: Expression;
  parent?: Node;
}

export interface WhileStatement extends Span {
  type: "WhileStatement";
  test: Expression;
  body: Statement;
  parent?: Node;
}

export interface ForStatement extends Span {
  type: "ForStatement";
  init: ForStatementInit | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
  parent?: Node;
}

export type ForStatementInit = VariableDeclaration | Expression;

export interface ForInStatement extends Span {
  type: "ForInStatement";
  left: ForStatementLeft;
  right: Expression;
  body: Statement;
  parent?: Node;
}

export type ForStatementLeft = VariableDeclaration | AssignmentTarget;

export interface ForOfStatement extends Span {
  type: "ForOfStatement";
  await: boolean;
  left: ForStatementLeft;
  right: Expression;
  body: Statement;
  parent?: Node;
}

export interface ContinueStatement extends Span {
  type: "ContinueStatement";
  label: LabelIdentifier | null;
  parent?: Node;
}

export interface BreakStatement extends Span {
  type: "BreakStatement";
  label: LabelIdentifier | null;
  parent?: Node;
}

export interface ReturnStatement extends Span {
  type: "ReturnStatement";
  argument: Expression | null;
  parent?: Node;
}

export interface WithStatement extends Span {
  type: "WithStatement";
  object: Expression;
  body: Statement;
  parent?: Node;
}

export interface SwitchStatement extends Span {
  type: "SwitchStatement";
  discriminant: Expression;
  cases: Array<SwitchCase>;
  parent?: Node;
}

export interface SwitchCase extends Span {
  type: "SwitchCase";
  test: Expression | null;
  consequent: Array<Statement>;
  parent?: Node;
}

export interface LabeledStatement extends Span {
  type: "LabeledStatement";
  label: LabelIdentifier;
  body: Statement;
  parent?: Node;
}

export interface ThrowStatement extends Span {
  type: "ThrowStatement";
  argument: Expression;
  parent?: Node;
}

export interface TryStatement extends Span {
  type: "TryStatement";
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
  parent?: Node;
}

export interface CatchClause extends Span {
  type: "CatchClause";
  param: BindingPattern | null;
  body: BlockStatement;
  parent?: Node;
}

export interface DebuggerStatement extends Span {
  type: "DebuggerStatement";
  parent?: Node;
}

export type BindingPattern = BindingIdentifier | ObjectPattern | ArrayPattern | AssignmentPattern;

export interface AssignmentPattern extends Span {
  type: "AssignmentPattern";
  decorators?: [];
  left: BindingPattern;
  right: Expression;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface ObjectPattern extends Span {
  type: "ObjectPattern";
  decorators?: [];
  properties: Array<BindingProperty | BindingRestElement>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface BindingProperty extends Span {
  type: "Property";
  kind: "init";
  key: PropertyKey;
  value: BindingPattern;
  method: false;
  shorthand: boolean;
  computed: boolean;
  optional?: false;
  parent?: Node;
}

export interface ArrayPattern extends Span {
  type: "ArrayPattern";
  decorators?: [];
  elements: Array<BindingPattern | BindingRestElement | null>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}

export interface BindingRestElement extends Span {
  type: "RestElement";
  decorators?: [];
  argument: BindingPattern;
  optional?: false;
  typeAnnotation?: null;
  value?: null;
  parent?: Node;
}

export interface Function extends Span {
  type: FunctionType;
  id: BindingIdentifier | null;
  generator: boolean;
  async: boolean;
  declare?: boolean;
  typeParameters?: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType?: TSTypeAnnotation | null;
  body: FunctionBody | null;
  expression: false;
  parent?: Node;
}

export type ParamPattern = FormalParameter | TSParameterProperty | FormalParameterRest;

export type FunctionType =
  | "FunctionDeclaration"
  | "FunctionExpression"
  | "TSDeclareFunction"
  | "TSEmptyBodyFunctionExpression";

export interface FormalParameterRest extends Span {
  type: "RestElement";
  argument: BindingPattern;
  decorators?: [];
  optional?: boolean;
  typeAnnotation?: TSTypeAnnotation | null;
  value?: null;
  parent?: Node;
}

export type FormalParameter = {
  decorators?: Array<Decorator>;
} & BindingPattern;

export interface TSParameterProperty extends Span {
  type: "TSParameterProperty";
  accessibility: TSAccessibility | null;
  decorators: Array<Decorator>;
  override: boolean;
  parameter: FormalParameter;
  readonly: boolean;
  static: boolean;
  parent?: Node;
}

export interface FunctionBody extends Span {
  type: "BlockStatement";
  body: Array<Directive | Statement>;
  parent?: Node;
}

export interface ArrowFunctionExpression extends Span {
  type: "ArrowFunctionExpression";
  expression: boolean;
  async: boolean;
  typeParameters?: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType?: TSTypeAnnotation | null;
  body: FunctionBody | Expression;
  id: null;
  generator: false;
  parent?: Node;
}

export interface YieldExpression extends Span {
  type: "YieldExpression";
  delegate: boolean;
  argument: Expression | null;
  parent?: Node;
}

export interface Class extends Span {
  type: ClassType;
  decorators: Array<Decorator>;
  id: BindingIdentifier | null;
  typeParameters?: TSTypeParameterDeclaration | null;
  superClass: Expression | null;
  superTypeArguments?: TSTypeParameterInstantiation | null;
  implements?: Array<TSClassImplements>;
  body: ClassBody;
  abstract?: boolean;
  declare?: boolean;
  parent?: Node;
}

export type ClassType = "ClassDeclaration" | "ClassExpression";

export interface ClassBody extends Span {
  type: "ClassBody";
  body: Array<ClassElement>;
  parent?: Node;
}

export type ClassElement =
  | StaticBlock
  | MethodDefinition
  | PropertyDefinition
  | AccessorProperty
  | TSIndexSignature;

export interface MethodDefinition extends Span {
  type: MethodDefinitionType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  value: Function;
  kind: MethodDefinitionKind;
  computed: boolean;
  static: boolean;
  override?: boolean;
  optional?: boolean;
  accessibility?: TSAccessibility | null;
  parent?: Node;
}

export type MethodDefinitionType = "MethodDefinition" | "TSAbstractMethodDefinition";

export interface PropertyDefinition extends Span {
  type: PropertyDefinitionType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  typeAnnotation?: TSTypeAnnotation | null;
  value: Expression | null;
  computed: boolean;
  static: boolean;
  declare?: boolean;
  override?: boolean;
  optional?: boolean;
  definite?: boolean;
  readonly?: boolean;
  accessibility?: TSAccessibility | null;
  parent?: Node;
}

export type PropertyDefinitionType = "PropertyDefinition" | "TSAbstractPropertyDefinition";

export type MethodDefinitionKind = "constructor" | "method" | "get" | "set";

export interface PrivateIdentifier extends Span {
  type: "PrivateIdentifier";
  name: string;
  parent?: Node;
}

export interface StaticBlock extends Span {
  type: "StaticBlock";
  body: Array<Statement>;
  parent?: Node;
}

export type ModuleDeclaration =
  | ImportDeclaration
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | TSExportAssignment
  | TSNamespaceExportDeclaration;

export type AccessorPropertyType = "AccessorProperty" | "TSAbstractAccessorProperty";

export interface AccessorProperty extends Span {
  type: AccessorPropertyType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  typeAnnotation?: TSTypeAnnotation | null;
  value: Expression | null;
  computed: boolean;
  static: boolean;
  override?: boolean;
  definite?: boolean;
  accessibility?: TSAccessibility | null;
  declare?: false;
  optional?: false;
  readonly?: false;
  parent?: Node;
}

export interface ImportExpression extends Span {
  type: "ImportExpression";
  source: Expression;
  options: Expression | null;
  phase: ImportPhase | null;
  parent?: Node;
}

export interface ImportDeclaration extends Span {
  type: "ImportDeclaration";
  specifiers: Array<ImportDeclarationSpecifier>;
  source: StringLiteral;
  phase: ImportPhase | null;
  attributes: Array<ImportAttribute>;
  importKind?: ImportOrExportKind;
  parent?: Node;
}

export type ImportPhase = "source" | "defer";

export type ImportDeclarationSpecifier =
  | ImportSpecifier
  | ImportDefaultSpecifier
  | ImportNamespaceSpecifier;

export interface ImportSpecifier extends Span {
  type: "ImportSpecifier";
  imported: ModuleExportName;
  local: BindingIdentifier;
  importKind?: ImportOrExportKind;
  parent?: Node;
}

export interface ImportDefaultSpecifier extends Span {
  type: "ImportDefaultSpecifier";
  local: BindingIdentifier;
  parent?: Node;
}

export interface ImportNamespaceSpecifier extends Span {
  type: "ImportNamespaceSpecifier";
  local: BindingIdentifier;
  parent?: Node;
}

export interface ImportAttribute extends Span {
  type: "ImportAttribute";
  key: ImportAttributeKey;
  value: StringLiteral;
  parent?: Node;
}

export type ImportAttributeKey = IdentifierName | StringLiteral;

export interface ExportNamedDeclaration extends Span {
  type: "ExportNamedDeclaration";
  declaration: Declaration | null;
  specifiers: Array<ExportSpecifier>;
  source: StringLiteral | null;
  exportKind?: ImportOrExportKind;
  attributes: Array<ImportAttribute>;
  parent?: Node;
}

export interface ExportDefaultDeclaration extends Span {
  type: "ExportDefaultDeclaration";
  declaration: ExportDefaultDeclarationKind;
  exportKind?: "value";
  parent?: Node;
}

export interface ExportAllDeclaration extends Span {
  type: "ExportAllDeclaration";
  exported: ModuleExportName | null;
  source: StringLiteral;
  attributes: Array<ImportAttribute>;
  exportKind?: ImportOrExportKind;
  parent?: Node;
}

export interface ExportSpecifier extends Span {
  type: "ExportSpecifier";
  local: ModuleExportName;
  exported: ModuleExportName;
  exportKind?: ImportOrExportKind;
  parent?: Node;
}

export type ExportDefaultDeclarationKind = Function | Class | TSInterfaceDeclaration | Expression;

export type ModuleExportName = IdentifierName | IdentifierReference | StringLiteral;

export interface V8IntrinsicExpression extends Span {
  type: "V8IntrinsicExpression";
  name: IdentifierName;
  arguments: Array<Argument>;
  parent?: Node;
}

export interface BooleanLiteral extends Span {
  type: "Literal";
  value: boolean;
  raw: string | null;
  parent?: Node;
}

export interface NullLiteral extends Span {
  type: "Literal";
  value: null;
  raw: "null" | null;
  parent?: Node;
}

export interface NumericLiteral extends Span {
  type: "Literal";
  value: number;
  raw: string | null;
  parent?: Node;
}

export interface StringLiteral extends Span {
  type: "Literal";
  value: string;
  raw: string | null;
  parent?: Node;
}

export interface BigIntLiteral extends Span {
  type: "Literal";
  value: bigint;
  raw: string | null;
  bigint: string;
  parent?: Node;
}

export interface RegExpLiteral extends Span {
  type: "Literal";
  value: RegExp | null;
  raw: string | null;
  regex: { pattern: string; flags: string };
  parent?: Node;
}

export interface JSXElement extends Span {
  type: "JSXElement";
  openingElement: JSXOpeningElement;
  children: Array<JSXChild>;
  closingElement: JSXClosingElement | null;
  parent?: Node;
}

export interface JSXOpeningElement extends Span {
  type: "JSXOpeningElement";
  name: JSXElementName;
  typeArguments?: TSTypeParameterInstantiation | null;
  attributes: Array<JSXAttributeItem>;
  selfClosing: boolean;
  parent?: Node;
}

export interface JSXClosingElement extends Span {
  type: "JSXClosingElement";
  name: JSXElementName;
  parent?: Node;
}

export interface JSXFragment extends Span {
  type: "JSXFragment";
  openingFragment: JSXOpeningFragment;
  children: Array<JSXChild>;
  closingFragment: JSXClosingFragment;
  parent?: Node;
}

export interface JSXOpeningFragment extends Span {
  type: "JSXOpeningFragment";
  attributes?: [];
  selfClosing?: false;
  parent?: Node;
}

export interface JSXClosingFragment extends Span {
  type: "JSXClosingFragment";
  parent?: Node;
}

export type JSXElementName = JSXIdentifier | JSXNamespacedName | JSXMemberExpression;

export interface JSXNamespacedName extends Span {
  type: "JSXNamespacedName";
  namespace: JSXIdentifier;
  name: JSXIdentifier;
  parent?: Node;
}

export interface JSXMemberExpression extends Span {
  type: "JSXMemberExpression";
  object: JSXMemberExpressionObject;
  property: JSXIdentifier;
  parent?: Node;
}

export type JSXMemberExpressionObject = JSXIdentifier | JSXMemberExpression;

export interface JSXExpressionContainer extends Span {
  type: "JSXExpressionContainer";
  expression: JSXExpression;
  parent?: Node;
}

export type JSXExpression = JSXEmptyExpression | Expression;

export interface JSXEmptyExpression extends Span {
  type: "JSXEmptyExpression";
  parent?: Node;
}

export type JSXAttributeItem = JSXAttribute | JSXSpreadAttribute;

export interface JSXAttribute extends Span {
  type: "JSXAttribute";
  name: JSXAttributeName;
  value: JSXAttributeValue | null;
  parent?: Node;
}

export interface JSXSpreadAttribute extends Span {
  type: "JSXSpreadAttribute";
  argument: Expression;
  parent?: Node;
}

export type JSXAttributeName = JSXIdentifier | JSXNamespacedName;

export type JSXAttributeValue = StringLiteral | JSXExpressionContainer | JSXElement | JSXFragment;

export interface JSXIdentifier extends Span {
  type: "JSXIdentifier";
  name: string;
  parent?: Node;
}

export type JSXChild = JSXText | JSXElement | JSXFragment | JSXExpressionContainer | JSXSpreadChild;

export interface JSXSpreadChild extends Span {
  type: "JSXSpreadChild";
  expression: Expression;
  parent?: Node;
}

export interface JSXText extends Span {
  type: "JSXText";
  value: string;
  raw: string | null;
  parent?: Node;
}

export interface TSThisParameter extends Span {
  type: "Identifier";
  decorators: [];
  name: "this";
  optional: false;
  typeAnnotation: TSTypeAnnotation | null;
  parent?: Node;
}

export interface TSEnumDeclaration extends Span {
  type: "TSEnumDeclaration";
  id: BindingIdentifier;
  body: TSEnumBody;
  const: boolean;
  declare: boolean;
  parent?: Node;
}

export interface TSEnumBody extends Span {
  type: "TSEnumBody";
  members: Array<TSEnumMember>;
  parent?: Node;
}

export interface TSEnumMember extends Span {
  type: "TSEnumMember";
  id: TSEnumMemberName;
  initializer: Expression | null;
  computed: boolean;
  parent?: Node;
}

export type TSEnumMemberName = IdentifierName | StringLiteral | TemplateLiteral;

export interface TSTypeAnnotation extends Span {
  type: "TSTypeAnnotation";
  typeAnnotation: TSType;
  parent?: Node;
}

export interface TSLiteralType extends Span {
  type: "TSLiteralType";
  literal: TSLiteral;
  parent?: Node;
}

export type TSLiteral =
  | BooleanLiteral
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | TemplateLiteral
  | UnaryExpression;

export type TSType =
  | TSAnyKeyword
  | TSBigIntKeyword
  | TSBooleanKeyword
  | TSIntrinsicKeyword
  | TSNeverKeyword
  | TSNullKeyword
  | TSNumberKeyword
  | TSObjectKeyword
  | TSStringKeyword
  | TSSymbolKeyword
  | TSUndefinedKeyword
  | TSUnknownKeyword
  | TSVoidKeyword
  | TSArrayType
  | TSConditionalType
  | TSConstructorType
  | TSFunctionType
  | TSImportType
  | TSIndexedAccessType
  | TSInferType
  | TSIntersectionType
  | TSLiteralType
  | TSMappedType
  | TSNamedTupleMember
  | TSTemplateLiteralType
  | TSThisType
  | TSTupleType
  | TSTypeLiteral
  | TSTypeOperator
  | TSTypePredicate
  | TSTypeQuery
  | TSTypeReference
  | TSUnionType
  | TSParenthesizedType
  | JSDocNullableType
  | JSDocNonNullableType
  | JSDocUnknownType;

export interface TSConditionalType extends Span {
  type: "TSConditionalType";
  checkType: TSType;
  extendsType: TSType;
  trueType: TSType;
  falseType: TSType;
  parent?: Node;
}

export interface TSUnionType extends Span {
  type: "TSUnionType";
  types: Array<TSType>;
  parent?: Node;
}

export interface TSIntersectionType extends Span {
  type: "TSIntersectionType";
  types: Array<TSType>;
  parent?: Node;
}

export interface TSParenthesizedType extends Span {
  type: "TSParenthesizedType";
  typeAnnotation: TSType;
  parent?: Node;
}

export interface TSTypeOperator extends Span {
  type: "TSTypeOperator";
  operator: TSTypeOperatorOperator;
  typeAnnotation: TSType;
  parent?: Node;
}

export type TSTypeOperatorOperator = "keyof" | "unique" | "readonly";

export interface TSArrayType extends Span {
  type: "TSArrayType";
  elementType: TSType;
  parent?: Node;
}

export interface TSIndexedAccessType extends Span {
  type: "TSIndexedAccessType";
  objectType: TSType;
  indexType: TSType;
  parent?: Node;
}

export interface TSTupleType extends Span {
  type: "TSTupleType";
  elementTypes: Array<TSTupleElement>;
  parent?: Node;
}

export interface TSNamedTupleMember extends Span {
  type: "TSNamedTupleMember";
  label: IdentifierName;
  elementType: TSTupleElement;
  optional: boolean;
  parent?: Node;
}

export interface TSOptionalType extends Span {
  type: "TSOptionalType";
  typeAnnotation: TSType;
  parent?: Node;
}

export interface TSRestType extends Span {
  type: "TSRestType";
  typeAnnotation: TSType;
  parent?: Node;
}

export type TSTupleElement = TSOptionalType | TSRestType | TSType;

export interface TSAnyKeyword extends Span {
  type: "TSAnyKeyword";
  parent?: Node;
}

export interface TSStringKeyword extends Span {
  type: "TSStringKeyword";
  parent?: Node;
}

export interface TSBooleanKeyword extends Span {
  type: "TSBooleanKeyword";
  parent?: Node;
}

export interface TSNumberKeyword extends Span {
  type: "TSNumberKeyword";
  parent?: Node;
}

export interface TSNeverKeyword extends Span {
  type: "TSNeverKeyword";
  parent?: Node;
}

export interface TSIntrinsicKeyword extends Span {
  type: "TSIntrinsicKeyword";
  parent?: Node;
}

export interface TSUnknownKeyword extends Span {
  type: "TSUnknownKeyword";
  parent?: Node;
}

export interface TSNullKeyword extends Span {
  type: "TSNullKeyword";
  parent?: Node;
}

export interface TSUndefinedKeyword extends Span {
  type: "TSUndefinedKeyword";
  parent?: Node;
}

export interface TSVoidKeyword extends Span {
  type: "TSVoidKeyword";
  parent?: Node;
}

export interface TSSymbolKeyword extends Span {
  type: "TSSymbolKeyword";
  parent?: Node;
}

export interface TSThisType extends Span {
  type: "TSThisType";
  parent?: Node;
}

export interface TSObjectKeyword extends Span {
  type: "TSObjectKeyword";
  parent?: Node;
}

export interface TSBigIntKeyword extends Span {
  type: "TSBigIntKeyword";
  parent?: Node;
}

export interface TSTypeReference extends Span {
  type: "TSTypeReference";
  typeName: TSTypeName;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}

export type TSTypeName = IdentifierReference | TSQualifiedName | ThisExpression;

export interface TSQualifiedName extends Span {
  type: "TSQualifiedName";
  left: TSTypeName;
  right: IdentifierName;
  parent?: Node;
}

export interface TSTypeParameterInstantiation extends Span {
  type: "TSTypeParameterInstantiation";
  params: Array<TSType>;
  parent?: Node;
}

export interface TSTypeParameter extends Span {
  type: "TSTypeParameter";
  name: BindingIdentifier;
  constraint: TSType | null;
  default: TSType | null;
  in: boolean;
  out: boolean;
  const: boolean;
  parent?: Node;
}

export interface TSTypeParameterDeclaration extends Span {
  type: "TSTypeParameterDeclaration";
  params: Array<TSTypeParameter>;
  parent?: Node;
}

export interface TSTypeAliasDeclaration extends Span {
  type: "TSTypeAliasDeclaration";
  id: BindingIdentifier;
  typeParameters: TSTypeParameterDeclaration | null;
  typeAnnotation: TSType;
  declare: boolean;
  parent?: Node;
}

export type TSAccessibility = "private" | "protected" | "public";

export interface TSClassImplements extends Span {
  type: "TSClassImplements";
  expression: IdentifierReference | ThisExpression | MemberExpression;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}

export interface TSInterfaceDeclaration extends Span {
  type: "TSInterfaceDeclaration";
  id: BindingIdentifier;
  typeParameters: TSTypeParameterDeclaration | null;
  extends: Array<TSInterfaceHeritage>;
  body: TSInterfaceBody;
  declare: boolean;
  parent?: Node;
}

export interface TSInterfaceBody extends Span {
  type: "TSInterfaceBody";
  body: Array<TSSignature>;
  parent?: Node;
}

export interface TSPropertySignature extends Span {
  type: "TSPropertySignature";
  computed: boolean;
  optional: boolean;
  readonly: boolean;
  key: PropertyKey;
  typeAnnotation: TSTypeAnnotation | null;
  accessibility: null;
  static: false;
  parent?: Node;
}

export type TSSignature =
  | TSIndexSignature
  | TSPropertySignature
  | TSCallSignatureDeclaration
  | TSConstructSignatureDeclaration
  | TSMethodSignature;

export interface TSIndexSignature extends Span {
  type: "TSIndexSignature";
  parameters: Array<TSIndexSignatureName>;
  typeAnnotation: TSTypeAnnotation;
  readonly: boolean;
  static: boolean;
  accessibility: null;
  parent?: Node;
}

export interface TSCallSignatureDeclaration extends Span {
  type: "TSCallSignatureDeclaration";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  parent?: Node;
}

export type TSMethodSignatureKind = "method" | "get" | "set";

export interface TSMethodSignature extends Span {
  type: "TSMethodSignature";
  key: PropertyKey;
  computed: boolean;
  optional: boolean;
  kind: TSMethodSignatureKind;
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  accessibility: null;
  readonly: false;
  static: false;
  parent?: Node;
}

export interface TSConstructSignatureDeclaration extends Span {
  type: "TSConstructSignatureDeclaration";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  parent?: Node;
}

export interface TSIndexSignatureName extends Span {
  type: "Identifier";
  decorators: [];
  name: string;
  optional: false;
  typeAnnotation: TSTypeAnnotation;
  parent?: Node;
}

export interface TSInterfaceHeritage extends Span {
  type: "TSInterfaceHeritage";
  expression: Expression;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}

export interface TSTypePredicate extends Span {
  type: "TSTypePredicate";
  parameterName: TSTypePredicateName;
  asserts: boolean;
  typeAnnotation: TSTypeAnnotation | null;
  parent?: Node;
}

export type TSTypePredicateName = IdentifierName | TSThisType;

export interface TSModuleDeclaration extends Span {
  type: "TSModuleDeclaration";
  id: BindingIdentifier | StringLiteral | TSQualifiedName;
  body: TSModuleBlock | null;
  kind: TSModuleDeclarationKind;
  declare: boolean;
  global: false;
  parent?: Node;
}

export type TSModuleDeclarationKind = "module" | "namespace";

export interface TSGlobalDeclaration extends Span {
  type: "TSModuleDeclaration";
  id: IdentifierName;
  body: TSModuleBlock;
  kind: "global";
  declare: boolean;
  global: true;
  parent?: Node;
}

export interface TSModuleBlock extends Span {
  type: "TSModuleBlock";
  body: Array<Directive | Statement>;
  parent?: Node;
}

export interface TSTypeLiteral extends Span {
  type: "TSTypeLiteral";
  members: Array<TSSignature>;
  parent?: Node;
}

export interface TSInferType extends Span {
  type: "TSInferType";
  typeParameter: TSTypeParameter;
  parent?: Node;
}

export interface TSTypeQuery extends Span {
  type: "TSTypeQuery";
  exprName: TSTypeQueryExprName;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}

export type TSTypeQueryExprName = TSImportType | TSTypeName;

export interface TSImportType extends Span {
  type: "TSImportType";
  source: StringLiteral;
  options: ObjectExpression | null;
  qualifier: TSImportTypeQualifier | null;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}

export type TSImportTypeQualifier = IdentifierName | TSImportTypeQualifiedName;

export interface TSImportTypeQualifiedName extends Span {
  type: "TSQualifiedName";
  left: TSImportTypeQualifier;
  right: IdentifierName;
  parent?: Node;
}

export interface TSFunctionType extends Span {
  type: "TSFunctionType";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation;
  parent?: Node;
}

export interface TSConstructorType extends Span {
  type: "TSConstructorType";
  abstract: boolean;
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation;
  parent?: Node;
}

export interface TSMappedType extends Span {
  type: "TSMappedType";
  key: BindingIdentifier;
  constraint: TSType;
  nameType: TSType | null;
  typeAnnotation: TSType | null;
  optional: TSMappedTypeModifierOperator | false;
  readonly: TSMappedTypeModifierOperator | null;
  parent?: Node;
}

export type TSMappedTypeModifierOperator = true | "+" | "-";

export interface TSTemplateLiteralType extends Span {
  type: "TSTemplateLiteralType";
  quasis: Array<TemplateElement>;
  types: Array<TSType>;
  parent?: Node;
}

export interface TSAsExpression extends Span {
  type: "TSAsExpression";
  expression: Expression;
  typeAnnotation: TSType;
  parent?: Node;
}

export interface TSSatisfiesExpression extends Span {
  type: "TSSatisfiesExpression";
  expression: Expression;
  typeAnnotation: TSType;
  parent?: Node;
}

export interface TSTypeAssertion extends Span {
  type: "TSTypeAssertion";
  typeAnnotation: TSType;
  expression: Expression;
  parent?: Node;
}

export interface TSImportEqualsDeclaration extends Span {
  type: "TSImportEqualsDeclaration";
  id: BindingIdentifier;
  moduleReference: TSModuleReference;
  importKind: ImportOrExportKind;
  parent?: Node;
}

export type TSModuleReference = TSExternalModuleReference | IdentifierReference | TSQualifiedName;

export interface TSExternalModuleReference extends Span {
  type: "TSExternalModuleReference";
  expression: StringLiteral;
  parent?: Node;
}

export interface TSNonNullExpression extends Span {
  type: "TSNonNullExpression";
  expression: Expression;
  parent?: Node;
}

export interface Decorator extends Span {
  type: "Decorator";
  expression: Expression;
  parent?: Node;
}

export interface TSExportAssignment extends Span {
  type: "TSExportAssignment";
  expression: Expression;
  parent?: Node;
}

export interface TSNamespaceExportDeclaration extends Span {
  type: "TSNamespaceExportDeclaration";
  id: IdentifierName;
  parent?: Node;
}

export interface TSInstantiationExpression extends Span {
  type: "TSInstantiationExpression";
  expression: Expression;
  typeArguments: TSTypeParameterInstantiation;
  parent?: Node;
}

export type ImportOrExportKind = "value" | "type";

export interface JSDocNullableType extends Span {
  type: "TSJSDocNullableType";
  typeAnnotation: TSType;
  postfix: boolean;
  parent?: Node;
}

export interface JSDocNonNullableType extends Span {
  type: "TSJSDocNonNullableType";
  typeAnnotation: TSType;
  postfix: boolean;
  parent?: Node;
}

export interface JSDocUnknownType extends Span {
  type: "TSJSDocUnknownType";
  parent?: Node;
}

export type ModuleKind = "script" | "module" | "commonjs";

export interface Span {
  start: number;
  end: number;
  range?: [number, number];
}

export type AssignmentOperator =
  | "="
  | "+="
  | "-="
  | "*="
  | "/="
  | "%="
  | "**="
  | "<<="
  | ">>="
  | ">>>="
  | "|="
  | "^="
  | "&="
  | "||="
  | "&&="
  | "??=";

export type BinaryOperator =
  | "=="
  | "!="
  | "==="
  | "!=="
  | "<"
  | "<="
  | ">"
  | ">="
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "**"
  | "<<"
  | ">>"
  | ">>>"
  | "|"
  | "^"
  | "&"
  | "in"
  | "instanceof";

export type LogicalOperator = "||" | "&&" | "??";

export type UnaryOperator = "+" | "-" | "!" | "~" | "typeof" | "void" | "delete";

export type UpdateOperator = "++" | "--";

export type Node =
  | Program
  | IdentifierName
  | IdentifierReference
  | BindingIdentifier
  | LabelIdentifier
  | ThisExpression
  | ArrayExpression
  | ObjectExpression
  | ObjectProperty
  | TemplateLiteral
  | TaggedTemplateExpression
  | TemplateElement
  | ComputedMemberExpression
  | StaticMemberExpression
  | PrivateFieldExpression
  | CallExpression
  | NewExpression
  | MetaProperty
  | SpreadElement
  | UpdateExpression
  | UnaryExpression
  | BinaryExpression
  | PrivateInExpression
  | LogicalExpression
  | ConditionalExpression
  | AssignmentExpression
  | ArrayAssignmentTarget
  | ObjectAssignmentTarget
  | AssignmentTargetRest
  | AssignmentTargetWithDefault
  | AssignmentTargetPropertyIdentifier
  | AssignmentTargetPropertyProperty
  | SequenceExpression
  | Super
  | AwaitExpression
  | ChainExpression
  | ParenthesizedExpression
  | Directive
  | Hashbang
  | BlockStatement
  | VariableDeclaration
  | VariableDeclarator
  | EmptyStatement
  | ExpressionStatement
  | IfStatement
  | DoWhileStatement
  | WhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | ContinueStatement
  | BreakStatement
  | ReturnStatement
  | WithStatement
  | SwitchStatement
  | SwitchCase
  | LabeledStatement
  | ThrowStatement
  | TryStatement
  | CatchClause
  | DebuggerStatement
  | AssignmentPattern
  | ObjectPattern
  | BindingProperty
  | ArrayPattern
  | BindingRestElement
  | Function
  | FunctionBody
  | ArrowFunctionExpression
  | YieldExpression
  | Class
  | ClassBody
  | MethodDefinition
  | PropertyDefinition
  | PrivateIdentifier
  | StaticBlock
  | AccessorProperty
  | ImportExpression
  | ImportDeclaration
  | ImportSpecifier
  | ImportDefaultSpecifier
  | ImportNamespaceSpecifier
  | ImportAttribute
  | ExportNamedDeclaration
  | ExportDefaultDeclaration
  | ExportAllDeclaration
  | ExportSpecifier
  | V8IntrinsicExpression
  | BooleanLiteral
  | NullLiteral
  | NumericLiteral
  | StringLiteral
  | BigIntLiteral
  | RegExpLiteral
  | JSXElement
  | JSXOpeningElement
  | JSXClosingElement
  | JSXFragment
  | JSXOpeningFragment
  | JSXClosingFragment
  | JSXNamespacedName
  | JSXMemberExpression
  | JSXExpressionContainer
  | JSXEmptyExpression
  | JSXAttribute
  | JSXSpreadAttribute
  | JSXIdentifier
  | JSXSpreadChild
  | JSXText
  | TSThisParameter
  | TSEnumDeclaration
  | TSEnumBody
  | TSEnumMember
  | TSTypeAnnotation
  | TSLiteralType
  | TSConditionalType
  | TSUnionType
  | TSIntersectionType
  | TSParenthesizedType
  | TSTypeOperator
  | TSArrayType
  | TSIndexedAccessType
  | TSTupleType
  | TSNamedTupleMember
  | TSOptionalType
  | TSRestType
  | TSAnyKeyword
  | TSStringKeyword
  | TSBooleanKeyword
  | TSNumberKeyword
  | TSNeverKeyword
  | TSIntrinsicKeyword
  | TSUnknownKeyword
  | TSNullKeyword
  | TSUndefinedKeyword
  | TSVoidKeyword
  | TSSymbolKeyword
  | TSThisType
  | TSObjectKeyword
  | TSBigIntKeyword
  | TSTypeReference
  | TSQualifiedName
  | TSTypeParameterInstantiation
  | TSTypeParameter
  | TSTypeParameterDeclaration
  | TSTypeAliasDeclaration
  | TSClassImplements
  | TSInterfaceDeclaration
  | TSInterfaceBody
  | TSPropertySignature
  | TSIndexSignature
  | TSCallSignatureDeclaration
  | TSMethodSignature
  | TSConstructSignatureDeclaration
  | TSIndexSignatureName
  | TSInterfaceHeritage
  | TSTypePredicate
  | TSModuleDeclaration
  | TSGlobalDeclaration
  | TSModuleBlock
  | TSTypeLiteral
  | TSInferType
  | TSTypeQuery
  | TSImportType
  | TSImportTypeQualifiedName
  | TSFunctionType
  | TSConstructorType
  | TSMappedType
  | TSTemplateLiteralType
  | TSAsExpression
  | TSSatisfiesExpression
  | TSTypeAssertion
  | TSImportEqualsDeclaration
  | TSExternalModuleReference
  | TSNonNullExpression
  | Decorator
  | TSExportAssignment
  | TSNamespaceExportDeclaration
  | TSInstantiationExpression
  | JSDocNullableType
  | JSDocNonNullableType
  | JSDocUnknownType
  | ParamPattern;
