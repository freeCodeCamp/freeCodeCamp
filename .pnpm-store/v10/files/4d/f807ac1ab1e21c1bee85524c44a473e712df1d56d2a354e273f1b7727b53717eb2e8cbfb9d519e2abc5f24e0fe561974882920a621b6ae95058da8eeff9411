export interface Node {
  start: number
  end: number
  type: string
  range?: [number, number]
  loc?: SourceLocation | null
}

export interface SourceLocation {
  source?: string | null
  start: Position
  end: Position
}

export interface Position {
  /** 1-based */
  line: number
  /** 0-based */
  column: number
}

export interface Identifier extends Node {
  type: "Identifier"
  name: string
}

export interface Literal extends Node {
  type: "Literal"
  value?: string | boolean | null | number | RegExp | bigint
  raw?: string
  regex?: {
    pattern: string
    flags: string
  }
  bigint?: string
}

export interface Program extends Node {
  type: "Program"
  body: Array<Statement | ModuleDeclaration>
  sourceType: "script" | "module"
}

export interface Function extends Node {
  id?: Identifier | null
  params: Array<Pattern>
  body: BlockStatement | Expression
  generator: boolean
  expression: boolean
  async: boolean
}

export interface ExpressionStatement extends Node {
  type: "ExpressionStatement"
  expression: Expression | Literal
  directive?: string
}

export interface BlockStatement extends Node {
  type: "BlockStatement"
  body: Array<Statement>
}

export interface EmptyStatement extends Node {
  type: "EmptyStatement"
}

export interface DebuggerStatement extends Node {
  type: "DebuggerStatement"
}

export interface WithStatement extends Node {
  type: "WithStatement"
  object: Expression
  body: Statement
}

export interface ReturnStatement extends Node {
  type: "ReturnStatement"
  argument?: Expression | null
}

export interface LabeledStatement extends Node {
  type: "LabeledStatement"
  label: Identifier
  body: Statement
}

export interface BreakStatement extends Node {
  type: "BreakStatement"
  label?: Identifier | null
}

export interface ContinueStatement extends Node {
  type: "ContinueStatement"
  label?: Identifier | null
}

export interface IfStatement extends Node {
  type: "IfStatement"
  test: Expression
  consequent: Statement
  alternate?: Statement | null
}

export interface SwitchStatement extends Node {
  type: "SwitchStatement"
  discriminant: Expression
  cases: Array<SwitchCase>
}

export interface SwitchCase extends Node {
  type: "SwitchCase"
  test?: Expression | null
  consequent: Array<Statement>
}

export interface ThrowStatement extends Node {
  type: "ThrowStatement"
  argument: Expression
}

export interface TryStatement extends Node {
  type: "TryStatement"
  block: BlockStatement
  handler?: CatchClause | null
  finalizer?: BlockStatement | null
}

export interface CatchClause extends Node {
  type: "CatchClause"
  param?: Pattern | null
  body: BlockStatement
}

export interface WhileStatement extends Node {
  type: "WhileStatement"
  test: Expression
  body: Statement
}

export interface DoWhileStatement extends Node {
  type: "DoWhileStatement"
  body: Statement
  test: Expression
}

export interface ForStatement extends Node {
  type: "ForStatement"
  init?: VariableDeclaration | Expression | null
  test?: Expression | null
  update?: Expression | null
  body: Statement
}

export interface ForInStatement extends Node {
  type: "ForInStatement"
  left: VariableDeclaration | Pattern
  right: Expression
  body: Statement
}

export interface FunctionDeclaration extends Function {
  type: "FunctionDeclaration"
  id: Identifier
  body: BlockStatement
}

export interface VariableDeclaration extends Node {
  type: "VariableDeclaration"
  declarations: Array<VariableDeclarator>
  kind: "var" | "let" | "const" | "using" | "await using"
}

export interface VariableDeclarator extends Node {
  type: "VariableDeclarator"
  id: Pattern
  init?: Expression | null
}

export interface ThisExpression extends Node {
  type: "ThisExpression"
}

export interface ArrayExpression extends Node {
  type: "ArrayExpression"
  elements: Array<Expression | SpreadElement | null>
}

export interface ObjectExpression extends Node {
  type: "ObjectExpression"
  properties: Array<Property | SpreadElement>
}

export interface Property extends Node {
  type: "Property"
  key: Expression
  value: Expression
  kind: "init" | "get" | "set"
  method: boolean
  shorthand: boolean
  computed: boolean
}

export interface FunctionExpression extends Function {
  type: "FunctionExpression"
  body: BlockStatement
}

export interface UnaryExpression extends Node {
  type: "UnaryExpression"
  operator: UnaryOperator
  prefix: boolean
  argument: Expression
}

export type UnaryOperator = "-" | "+" | "!" | "~" | "typeof" | "void" | "delete"

export interface UpdateExpression extends Node {
  type: "UpdateExpression"
  operator: UpdateOperator
  argument: Expression
  prefix: boolean
}

export type UpdateOperator = "++" | "--"

export interface BinaryExpression extends Node {
  type: "BinaryExpression"
  operator: BinaryOperator
  left: Expression | PrivateIdentifier
  right: Expression
}

export type BinaryOperator = "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "|" | "^" | "&" | "in" | "instanceof" | "**"

export interface AssignmentExpression extends Node {
  type: "AssignmentExpression"
  operator: AssignmentOperator
  left: Pattern
  right: Expression
}

export type AssignmentOperator = "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=" | "**=" | "||=" | "&&=" | "??="

export interface LogicalExpression extends Node {
  type: "LogicalExpression"
  operator: LogicalOperator
  left: Expression
  right: Expression
}

export type LogicalOperator = "||" | "&&" | "??"

export interface MemberExpression extends Node {
  type: "MemberExpression"
  object: Expression | Super
  property: Expression | PrivateIdentifier
  computed: boolean
  optional: boolean
}

export interface ConditionalExpression extends Node {
  type: "ConditionalExpression"
  test: Expression
  alternate: Expression
  consequent: Expression
}

export interface CallExpression extends Node {
  type: "CallExpression"
  callee: Expression | Super
  arguments: Array<Expression | SpreadElement>
  optional: boolean
}

export interface NewExpression extends Node {
  type: "NewExpression"
  callee: Expression
  arguments: Array<Expression | SpreadElement>
}

export interface SequenceExpression extends Node {
  type: "SequenceExpression"
  expressions: Array<Expression>
}

export interface ForOfStatement extends Node {
  type: "ForOfStatement"
  left: VariableDeclaration | Pattern
  right: Expression
  body: Statement
  await: boolean
}

export interface Super extends Node {
  type: "Super"
}

export interface SpreadElement extends Node {
  type: "SpreadElement"
  argument: Expression
}

export interface ArrowFunctionExpression extends Function {
  type: "ArrowFunctionExpression"
}

export interface YieldExpression extends Node {
  type: "YieldExpression"
  argument?: Expression | null
  delegate: boolean
}

export interface TemplateLiteral extends Node {
  type: "TemplateLiteral"
  quasis: Array<TemplateElement>
  expressions: Array<Expression>
}

export interface TaggedTemplateExpression extends Node {
  type: "TaggedTemplateExpression"
  tag: Expression
  quasi: TemplateLiteral
}

export interface TemplateElement extends Node {
  type: "TemplateElement"
  tail: boolean
  value: {
    cooked?: string | null
    raw: string
  }
}

export interface AssignmentProperty extends Node {
  type: "Property"
  key: Expression
  value: Pattern
  kind: "init"
  method: false
  shorthand: boolean
  computed: boolean
}

export interface ObjectPattern extends Node {
  type: "ObjectPattern"
  properties: Array<AssignmentProperty | RestElement>
}

export interface ArrayPattern extends Node {
  type: "ArrayPattern"
  elements: Array<Pattern | null>
}

export interface RestElement extends Node {
  type: "RestElement"
  argument: Pattern
}

export interface AssignmentPattern extends Node {
  type: "AssignmentPattern"
  left: Pattern
  right: Expression
}

export interface Class extends Node {
  id?: Identifier | null
  superClass?: Expression | null
  body: ClassBody
}

export interface ClassBody extends Node {
  type: "ClassBody"
  body: Array<MethodDefinition | PropertyDefinition | StaticBlock>
}

export interface MethodDefinition extends Node {
  type: "MethodDefinition"
  key: Expression | PrivateIdentifier
  value: FunctionExpression
  kind: "constructor" | "method" | "get" | "set"
  computed: boolean
  static: boolean
}

export interface ClassDeclaration extends Class {
  type: "ClassDeclaration"
  id: Identifier
}

export interface ClassExpression extends Class {
  type: "ClassExpression"
}

export interface MetaProperty extends Node {
  type: "MetaProperty"
  meta: Identifier
  property: Identifier
}

export interface ImportDeclaration extends Node {
  type: "ImportDeclaration"
  specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>
  source: Literal
  attributes: Array<ImportAttribute>
}

export interface ImportSpecifier extends Node {
  type: "ImportSpecifier"
  imported: Identifier | Literal
  local: Identifier
}

export interface ImportDefaultSpecifier extends Node {
  type: "ImportDefaultSpecifier"
  local: Identifier
}

export interface ImportNamespaceSpecifier extends Node {
  type: "ImportNamespaceSpecifier"
  local: Identifier
}

export interface ImportAttribute extends Node {
  type: "ImportAttribute"
  key: Identifier | Literal
  value: Literal
}

export interface ExportNamedDeclaration extends Node {
  type: "ExportNamedDeclaration"
  declaration?: Declaration | null
  specifiers: Array<ExportSpecifier>
  source?: Literal | null
  attributes: Array<ImportAttribute>
}

export interface ExportSpecifier extends Node {
  type: "ExportSpecifier"
  exported: Identifier | Literal
  local: Identifier | Literal
}

export interface AnonymousFunctionDeclaration extends Function {
  type: "FunctionDeclaration"
  id: null
  body: BlockStatement
}

export interface AnonymousClassDeclaration extends Class {
  type: "ClassDeclaration"
  id: null
}

export interface ExportDefaultDeclaration extends Node {
  type: "ExportDefaultDeclaration"
  declaration: AnonymousFunctionDeclaration | FunctionDeclaration | AnonymousClassDeclaration | ClassDeclaration | Expression
}

export interface ExportAllDeclaration extends Node {
  type: "ExportAllDeclaration"
  source: Literal
  exported?: Identifier | Literal | null
  attributes: Array<ImportAttribute>
}

export interface AwaitExpression extends Node {
  type: "AwaitExpression"
  argument: Expression
}

export interface ChainExpression extends Node {
  type: "ChainExpression"
  expression: MemberExpression | CallExpression
}

export interface ImportExpression extends Node {
  type: "ImportExpression"
  source: Expression
  options: Expression | null
}

export interface ParenthesizedExpression extends Node {
  type: "ParenthesizedExpression"
  expression: Expression
}

export interface PropertyDefinition extends Node {
  type: "PropertyDefinition"
  key: Expression | PrivateIdentifier
  value?: Expression | null
  computed: boolean
  static: boolean
}

export interface PrivateIdentifier extends Node {
  type: "PrivateIdentifier"
  name: string
}

export interface StaticBlock extends Node {
  type: "StaticBlock"
  body: Array<Statement>
}

export type Statement = 
| ExpressionStatement
| BlockStatement
| EmptyStatement
| DebuggerStatement
| WithStatement
| ReturnStatement
| LabeledStatement
| BreakStatement
| ContinueStatement
| IfStatement
| SwitchStatement
| ThrowStatement
| TryStatement
| WhileStatement
| DoWhileStatement
| ForStatement
| ForInStatement
| ForOfStatement
| Declaration

export type Declaration = 
| FunctionDeclaration
| VariableDeclaration
| ClassDeclaration

export type Expression = 
| Identifier
| Literal
| ThisExpression
| ArrayExpression
| ObjectExpression
| FunctionExpression
| UnaryExpression
| UpdateExpression
| BinaryExpression
| AssignmentExpression
| LogicalExpression
| MemberExpression
| ConditionalExpression
| CallExpression
| NewExpression
| SequenceExpression
| ArrowFunctionExpression
| YieldExpression
| TemplateLiteral
| TaggedTemplateExpression
| ClassExpression
| MetaProperty
| AwaitExpression
| ChainExpression
| ImportExpression
| ParenthesizedExpression

export type Pattern = 
| Identifier
| MemberExpression
| ObjectPattern
| ArrayPattern
| RestElement
| AssignmentPattern

export type ModuleDeclaration = 
| ImportDeclaration
| ExportNamedDeclaration
| ExportDefaultDeclaration
| ExportAllDeclaration

/**
  * This interface is only used for defining {@link AnyNode}.
  * It exists so that it can be extended by plugins:
  *
  * @example
  * ```typescript
  * declare module 'acorn' {
  *   interface NodeTypes {
  *     pluginName: FirstNode | SecondNode | ThirdNode | ... | LastNode
  *   }
  * }
  * ```
  */
interface NodeTypes {
  core: Statement | Expression | Declaration | ModuleDeclaration | Literal | Program | SwitchCase | CatchClause | Property | Super | SpreadElement | TemplateElement | AssignmentProperty | ObjectPattern | ArrayPattern | RestElement | AssignmentPattern | ClassBody | MethodDefinition | MetaProperty | ImportAttribute | ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier | AnonymousFunctionDeclaration | AnonymousClassDeclaration | PropertyDefinition | PrivateIdentifier | StaticBlock | VariableDeclarator
}

export type AnyNode = NodeTypes[keyof NodeTypes]

export function parse(input: string, options: Options): Program

export function parseExpressionAt(input: string, pos: number, options: Options): Expression

export function tokenizer(input: string, options: Options): {
  getToken(): Token
  [Symbol.iterator](): Iterator<Token>
}

export type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | "latest"

export interface Options {
  /**
   * `ecmaVersion` indicates the ECMAScript version to parse. Can be a
   * number, either in year (`2022`) or plain version number (`6`) form,
   * or `"latest"` (the latest the library supports). This influences
   * support for strict mode, the set of reserved words, and support for
   * new syntax features.
   */
  ecmaVersion: ecmaVersion

  /**
   * `sourceType` indicates the mode the code should be parsed in.
   * Can be either `"script"`, `"module"` or `"commonjs"`. This influences global
   * strict mode and parsing of `import` and `export` declarations.
   */
  sourceType?: "script" | "module" | "commonjs"

  /**
   * a callback that will be called when a semicolon is automatically inserted.
   * @param lastTokEnd the position of the comma as an offset
   * @param lastTokEndLoc location if {@link locations} is enabled
   */
  onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: Position) => void

  /**
   * similar to `onInsertedSemicolon`, but for trailing commas
   * @param lastTokEnd the position of the comma as an offset
   * @param lastTokEndLoc location if `locations` is enabled
   */
  onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: Position) => void

  /**
   * By default, reserved words are only enforced if ecmaVersion >= 5.
   * Set `allowReserved` to a boolean value to explicitly turn this on
   * an off. When this option has the value "never", reserved words
   * and keywords can also not be used as property names.
   */
  allowReserved?: boolean | "never"

  /** 
   * When enabled, a return at the top level is not considered an error.
   */
  allowReturnOutsideFunction?: boolean

  /**
   * When enabled, import/export statements are not constrained to
   * appearing at the top of the program, and an import.meta expression
   * in a script isn't considered an error.
   */
  allowImportExportEverywhere?: boolean

  /**
   * By default, `await` identifiers are allowed to appear at the top-level scope only if {@link ecmaVersion} >= 2022.
   * When enabled, await identifiers are allowed to appear at the top-level scope,
   * but they are still not allowed in non-async functions.
   */
  allowAwaitOutsideFunction?: boolean

  /**
   * When enabled, super identifiers are not constrained to
   * appearing in methods and do not raise an error when they appear elsewhere.
   */
  allowSuperOutsideMethod?: boolean

  /**
   * When enabled, hashbang directive in the beginning of file is
   * allowed and treated as a line comment. Enabled by default when
   * {@link ecmaVersion} >= 2023.
   */
  allowHashBang?: boolean

  /**
   * By default, the parser will verify that private properties are
   * only used in places where they are valid and have been declared.
   * Set this to false to turn such checks off.
   */
  checkPrivateFields?: boolean

  /**
   * When `locations` is on, `loc` properties holding objects with
   * `start` and `end` properties as {@link Position} objects will be attached to the
   * nodes.
   */
  locations?: boolean

  /**
   * a callback that will cause Acorn to call that export function with object in the same
   * format as tokens returned from `tokenizer().getToken()`. Note
   * that you are not allowed to call the parser from the
   * callback—that will corrupt its internal state.
   */
  onToken?: ((token: Token) => void) | Token[]


  /**
   * This takes a export function or an array.
   * 
   * When a export function is passed, Acorn will call that export function with `(block, text, start,
   * end)` parameters whenever a comment is skipped. `block` is a
   * boolean indicating whether this is a block (`/* *\/`) comment,
   * `text` is the content of the comment, and `start` and `end` are
   * character offsets that denote the start and end of the comment.
   * When the {@link locations} option is on, two more parameters are
   * passed, the full locations of {@link Position} export type of the start and
   * end of the comments.
   * 
   * When a array is passed, each found comment of {@link Comment} export type is pushed to the array.
   * 
   * Note that you are not allowed to call the
   * parser from the callback—that will corrupt its internal state.
   */
  onComment?: ((
    isBlock: boolean, text: string, start: number, end: number, startLoc?: Position,
    endLoc?: Position
  ) => void) | Comment[]

  /**
   * Nodes have their start and end characters offsets recorded in
   * `start` and `end` properties (directly on the node, rather than
   * the `loc` object, which holds line/column data. To also add a
   * [semi-standardized][range] `range` property holding a `[start,
   * end]` array with the same numbers, set the `ranges` option to
   * `true`.
   */
  ranges?: boolean

  /**
   * It is possible to parse multiple files into a single AST by
   * passing the tree produced by parsing the first file as
   * `program` option in subsequent parses. This will add the
   * toplevel forms of the parsed file to the `Program` (top) node
   * of an existing parse tree.
   */
  program?: Node

  /**
   * When {@link locations} is on, you can pass this to record the source
   * file in every node's `loc` object.
   */
  sourceFile?: string

  /**
   * This value, if given, is stored in every node, whether {@link locations} is on or off.
   */
  directSourceFile?: string

  /**
   * When enabled, parenthesized expressions are represented by
   * (non-standard) ParenthesizedExpression nodes
   */
  preserveParens?: boolean
}
  
export class Parser {
  options: Options
  input: string
  
  protected constructor(options: Options, input: string, startPos?: number)
  parse(): Program
  
  static parse(input: string, options: Options): Program
  static parseExpressionAt(input: string, pos: number, options: Options): Expression
  static tokenizer(input: string, options: Options): {
    getToken(): Token
    [Symbol.iterator](): Iterator<Token>
  }
  static extend(...plugins: ((BaseParser: typeof Parser) => typeof Parser)[]): typeof Parser
}

export const defaultOptions: Options

export function getLineInfo(input: string, offset: number): Position

export class TokenType {
  label: string
  keyword: string | undefined
}

export const tokTypes: {
  num: TokenType
  regexp: TokenType
  string: TokenType
  name: TokenType
  privateId: TokenType
  eof: TokenType

  bracketL: TokenType
  bracketR: TokenType
  braceL: TokenType
  braceR: TokenType
  parenL: TokenType
  parenR: TokenType
  comma: TokenType
  semi: TokenType
  colon: TokenType
  dot: TokenType
  question: TokenType
  questionDot: TokenType
  arrow: TokenType
  template: TokenType
  invalidTemplate: TokenType
  ellipsis: TokenType
  backQuote: TokenType
  dollarBraceL: TokenType

  eq: TokenType
  assign: TokenType
  incDec: TokenType
  prefix: TokenType
  logicalOR: TokenType
  logicalAND: TokenType
  bitwiseOR: TokenType
  bitwiseXOR: TokenType
  bitwiseAND: TokenType
  equality: TokenType
  relational: TokenType
  bitShift: TokenType
  plusMin: TokenType
  modulo: TokenType
  star: TokenType
  slash: TokenType
  starstar: TokenType
  coalesce: TokenType

  _break: TokenType
  _case: TokenType
  _catch: TokenType
  _continue: TokenType
  _debugger: TokenType
  _default: TokenType
  _do: TokenType
  _else: TokenType
  _finally: TokenType
  _for: TokenType
  _function: TokenType
  _if: TokenType
  _return: TokenType
  _switch: TokenType
  _throw: TokenType
  _try: TokenType
  _var: TokenType
  _const: TokenType
  _while: TokenType
  _with: TokenType
  _new: TokenType
  _this: TokenType
  _super: TokenType
  _class: TokenType
  _extends: TokenType
  _export: TokenType
  _import: TokenType
  _null: TokenType
  _true: TokenType
  _false: TokenType
  _in: TokenType
  _instanceof: TokenType
  _typeof: TokenType
  _void: TokenType
  _delete: TokenType
}

export interface Comment {
  type: "Line" | "Block"
  value: string
  start: number
  end: number
  loc?: SourceLocation
  range?: [number, number]
}

export class Token {
  type: TokenType
  start: number
  end: number
  loc?: SourceLocation
  range?: [number, number]
}

export const version: string
