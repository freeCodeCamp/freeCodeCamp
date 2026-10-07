import { Plugin, Rollup, ViteDevServer } from 'vite';
import MagicString, { SourceMap } from 'magic-string';
import { c as MockerRegistry } from './registry.d-D765pazg.js';
export { findMockRedirect } from './redirect.js';

declare function createManualModuleSource(moduleUrl: string, exports: string[], globalAccessor?: string): string;

interface AutomockPluginOptions {
	/**
	* @default "__vitest_mocker__"
	*/
	globalThisAccessor?: string;
}
declare function automockPlugin(options?: AutomockPluginOptions): Plugin;
// TODO: better source map replacement
declare function automockModule(code: string, mockType: "automock" | "autospy", parse: (code: string) => any, options?: AutomockPluginOptions): MagicString;

interface DynamicImportPluginOptions {
	/**
	* @default `"__vitest_mocker__"`
	*/
	globalThisAccessor?: string;
	filter?: (id: string) => boolean;
}
declare function dynamicImportPlugin(options?: DynamicImportPluginOptions): Plugin;

// This definition file follows a somewhat unusual format. ESTree allows
// runtime type checks based on the `type` parameter. In order to explain this
// to typescript we want to use discriminated union types:
// https://github.com/Microsoft/TypeScript/pull/9163
//
// For ESTree this is a bit tricky because the high level interfaces like
// Node or Function are pulling double duty. We want to pass common fields down
// to the interfaces that extend them (like Identifier or
// ArrowFunctionExpression), but you can't extend a type union or enforce
// common fields on them. So we've split the high level interfaces into two
// types, a base type which passes down inherited fields, and a type union of
// all types which extend the base type. Only the type union is exported, and
// the union is how other types refer to the collection of inheriting types.
//
// This makes the definitions file here somewhat more difficult to maintain,
// but it has the notable advantage of making ESTree much easier to use as
// an end user.

interface BaseNodeWithoutComments {
    // Every leaf interface that extends BaseNode must specify a type property.
    // The type property should be a string literal. For example, Identifier
    // has: `type: "Identifier"`
    type: string;
    loc?: SourceLocation | null | undefined;
    range?: [number, number] | undefined;
}

interface BaseNode extends BaseNodeWithoutComments {
    leadingComments?: Comment[] | undefined;
    trailingComments?: Comment[] | undefined;
}

interface NodeMap {
    AssignmentProperty: AssignmentProperty;
    CatchClause: CatchClause;
    Class: Class;
    ClassBody: ClassBody;
    Expression: Expression;
    Function: Function;
    Identifier: Identifier;
    Literal: Literal;
    MethodDefinition: MethodDefinition;
    ModuleDeclaration: ModuleDeclaration;
    ModuleSpecifier: ModuleSpecifier;
    Pattern: Pattern;
    PrivateIdentifier: PrivateIdentifier;
    Program: Program;
    Property: Property;
    PropertyDefinition: PropertyDefinition;
    SpreadElement: SpreadElement;
    Statement: Statement;
    Super: Super;
    SwitchCase: SwitchCase;
    TemplateElement: TemplateElement;
    VariableDeclarator: VariableDeclarator;
}

type Node$1 = NodeMap[keyof NodeMap];

interface Comment extends BaseNodeWithoutComments {
    type: "Line" | "Block";
    value: string;
}

interface SourceLocation {
    source?: string | null | undefined;
    start: Position;
    end: Position;
}

interface Position {
    /** >= 1 */
    line: number;
    /** >= 0 */
    column: number;
}

interface Program extends BaseNode {
    type: "Program";
    sourceType: "script" | "module";
    body: Array<Directive | Statement | ModuleDeclaration>;
    comments?: Comment[] | undefined;
}

interface Directive extends BaseNode {
    type: "ExpressionStatement";
    expression: Literal;
    directive: string;
}

interface BaseFunction extends BaseNode {
    params: Pattern[];
    generator?: boolean | undefined;
    async?: boolean | undefined;
    // The body is either BlockStatement or Expression because arrow functions
    // can have a body that's either. FunctionDeclarations and
    // FunctionExpressions have only BlockStatement bodies.
    body: BlockStatement | Expression;
}

type Function = FunctionDeclaration | FunctionExpression | ArrowFunctionExpression;

type Statement =
    | ExpressionStatement
    | BlockStatement
    | StaticBlock
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
    | Declaration;

interface BaseStatement extends BaseNode {}

interface EmptyStatement extends BaseStatement {
    type: "EmptyStatement";
}

interface BlockStatement extends BaseStatement {
    type: "BlockStatement";
    body: Statement[];
    innerComments?: Comment[] | undefined;
}

interface StaticBlock extends Omit<BlockStatement, "type"> {
    type: "StaticBlock";
}

interface ExpressionStatement extends BaseStatement {
    type: "ExpressionStatement";
    expression: Expression;
}

interface IfStatement extends BaseStatement {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate?: Statement | null | undefined;
}

interface LabeledStatement extends BaseStatement {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
}

interface BreakStatement extends BaseStatement {
    type: "BreakStatement";
    label?: Identifier | null | undefined;
}

interface ContinueStatement extends BaseStatement {
    type: "ContinueStatement";
    label?: Identifier | null | undefined;
}

interface WithStatement extends BaseStatement {
    type: "WithStatement";
    object: Expression;
    body: Statement;
}

interface SwitchStatement extends BaseStatement {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: SwitchCase[];
}

interface ReturnStatement extends BaseStatement {
    type: "ReturnStatement";
    argument?: Expression | null | undefined;
}

interface ThrowStatement extends BaseStatement {
    type: "ThrowStatement";
    argument: Expression;
}

interface TryStatement extends BaseStatement {
    type: "TryStatement";
    block: BlockStatement;
    handler?: CatchClause | null | undefined;
    finalizer?: BlockStatement | null | undefined;
}

interface WhileStatement extends BaseStatement {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

interface DoWhileStatement extends BaseStatement {
    type: "DoWhileStatement";
    body: Statement;
    test: Expression;
}

interface ForStatement extends BaseStatement {
    type: "ForStatement";
    init?: VariableDeclaration | Expression | null | undefined;
    test?: Expression | null | undefined;
    update?: Expression | null | undefined;
    body: Statement;
}

interface BaseForXStatement extends BaseStatement {
    left: VariableDeclaration | Pattern;
    right: Expression;
    body: Statement;
}

interface ForInStatement extends BaseForXStatement {
    type: "ForInStatement";
}

interface DebuggerStatement extends BaseStatement {
    type: "DebuggerStatement";
}

type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration;

interface BaseDeclaration extends BaseStatement {}

interface MaybeNamedFunctionDeclaration extends BaseFunction, BaseDeclaration {
    type: "FunctionDeclaration";
    /** It is null when a function declaration is a part of the `export default function` statement */
    id: Identifier | null;
    body: BlockStatement;
}

interface FunctionDeclaration extends MaybeNamedFunctionDeclaration {
    id: Identifier;
}

interface VariableDeclaration extends BaseDeclaration {
    type: "VariableDeclaration";
    declarations: VariableDeclarator[];
    kind: "var" | "let" | "const" | "using" | "await using";
}

interface VariableDeclarator extends BaseNode {
    type: "VariableDeclarator";
    id: Pattern;
    init?: Expression | null | undefined;
}

interface ExpressionMap {
    ArrayExpression: ArrayExpression;
    ArrowFunctionExpression: ArrowFunctionExpression;
    AssignmentExpression: AssignmentExpression;
    AwaitExpression: AwaitExpression;
    BinaryExpression: BinaryExpression;
    CallExpression: CallExpression;
    ChainExpression: ChainExpression;
    ClassExpression: ClassExpression;
    ConditionalExpression: ConditionalExpression;
    FunctionExpression: FunctionExpression;
    Identifier: Identifier;
    ImportExpression: ImportExpression;
    Literal: Literal;
    LogicalExpression: LogicalExpression;
    MemberExpression: MemberExpression;
    MetaProperty: MetaProperty;
    NewExpression: NewExpression;
    ObjectExpression: ObjectExpression;
    SequenceExpression: SequenceExpression;
    TaggedTemplateExpression: TaggedTemplateExpression;
    TemplateLiteral: TemplateLiteral;
    ThisExpression: ThisExpression;
    UnaryExpression: UnaryExpression;
    UpdateExpression: UpdateExpression;
    YieldExpression: YieldExpression;
}

type Expression = ExpressionMap[keyof ExpressionMap];

interface BaseExpression extends BaseNode {}

type ChainElement = SimpleCallExpression | MemberExpression;

interface ChainExpression extends BaseExpression {
    type: "ChainExpression";
    expression: ChainElement;
}

interface ThisExpression extends BaseExpression {
    type: "ThisExpression";
}

interface ArrayExpression extends BaseExpression {
    type: "ArrayExpression";
    elements: Array<Expression | SpreadElement | null>;
}

interface ObjectExpression extends BaseExpression {
    type: "ObjectExpression";
    properties: Array<Property | SpreadElement>;
}

interface PrivateIdentifier extends BaseNode {
    type: "PrivateIdentifier";
    name: string;
}

interface Property extends BaseNode {
    type: "Property";
    key: Expression | PrivateIdentifier;
    value: Expression | Pattern; // Could be an AssignmentProperty
    kind: "init" | "get" | "set";
    method: boolean;
    shorthand: boolean;
    computed: boolean;
}

interface PropertyDefinition extends BaseNode {
    type: "PropertyDefinition";
    key: Expression | PrivateIdentifier;
    value?: Expression | null | undefined;
    computed: boolean;
    static: boolean;
}

interface FunctionExpression extends BaseFunction, BaseExpression {
    id?: Identifier | null | undefined;
    type: "FunctionExpression";
    body: BlockStatement;
}

interface SequenceExpression extends BaseExpression {
    type: "SequenceExpression";
    expressions: Expression[];
}

interface UnaryExpression extends BaseExpression {
    type: "UnaryExpression";
    operator: UnaryOperator;
    prefix: true;
    argument: Expression;
}

interface BinaryExpression extends BaseExpression {
    type: "BinaryExpression";
    operator: BinaryOperator;
    left: Expression | PrivateIdentifier;
    right: Expression;
}

interface AssignmentExpression extends BaseExpression {
    type: "AssignmentExpression";
    operator: AssignmentOperator;
    left: Pattern | MemberExpression;
    right: Expression;
}

interface UpdateExpression extends BaseExpression {
    type: "UpdateExpression";
    operator: UpdateOperator;
    argument: Expression;
    prefix: boolean;
}

interface LogicalExpression extends BaseExpression {
    type: "LogicalExpression";
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
}

interface ConditionalExpression extends BaseExpression {
    type: "ConditionalExpression";
    test: Expression;
    alternate: Expression;
    consequent: Expression;
}

interface BaseCallExpression extends BaseExpression {
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
}
type CallExpression = SimpleCallExpression | NewExpression;

interface SimpleCallExpression extends BaseCallExpression {
    type: "CallExpression";
    optional: boolean;
}

interface NewExpression extends BaseCallExpression {
    type: "NewExpression";
}

interface MemberExpression extends BaseExpression, BasePattern {
    type: "MemberExpression";
    object: Expression | Super;
    property: Expression | PrivateIdentifier;
    computed: boolean;
    optional: boolean;
}

type Pattern = Identifier | ObjectPattern | ArrayPattern | RestElement | AssignmentPattern | MemberExpression;

interface BasePattern extends BaseNode {}

interface SwitchCase extends BaseNode {
    type: "SwitchCase";
    test?: Expression | null | undefined;
    consequent: Statement[];
}

interface CatchClause extends BaseNode {
    type: "CatchClause";
    param: Pattern | null;
    body: BlockStatement;
}

interface Identifier extends BaseNode, BaseExpression, BasePattern {
    type: "Identifier";
    name: string;
}

type Literal = SimpleLiteral | RegExpLiteral | BigIntLiteral;

interface SimpleLiteral extends BaseNode, BaseExpression {
    type: "Literal";
    value: string | boolean | number | null;
    raw?: string | undefined;
}

interface RegExpLiteral extends BaseNode, BaseExpression {
    type: "Literal";
    value?: RegExp | null | undefined;
    regex: {
        pattern: string;
        flags: string;
    };
    raw?: string | undefined;
}

interface BigIntLiteral extends BaseNode, BaseExpression {
    type: "Literal";
    value?: bigint | null | undefined;
    bigint: string;
    raw?: string | undefined;
}

type UnaryOperator = "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";

type BinaryOperator =
    | "=="
    | "!="
    | "==="
    | "!=="
    | "<"
    | "<="
    | ">"
    | ">="
    | "<<"
    | ">>"
    | ">>>"
    | "+"
    | "-"
    | "*"
    | "/"
    | "%"
    | "**"
    | "|"
    | "^"
    | "&"
    | "in"
    | "instanceof";

type LogicalOperator = "||" | "&&" | "??";

type AssignmentOperator =
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

type UpdateOperator = "++" | "--";

interface ForOfStatement extends BaseForXStatement {
    type: "ForOfStatement";
    await: boolean;
}

interface Super extends BaseNode {
    type: "Super";
}

interface SpreadElement extends BaseNode {
    type: "SpreadElement";
    argument: Expression;
}

interface ArrowFunctionExpression extends BaseExpression, BaseFunction {
    type: "ArrowFunctionExpression";
    expression: boolean;
    body: BlockStatement | Expression;
}

interface YieldExpression extends BaseExpression {
    type: "YieldExpression";
    argument?: Expression | null | undefined;
    delegate: boolean;
}

interface TemplateLiteral extends BaseExpression {
    type: "TemplateLiteral";
    quasis: TemplateElement[];
    expressions: Expression[];
}

interface TaggedTemplateExpression extends BaseExpression {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
}

interface TemplateElement extends BaseNode {
    type: "TemplateElement";
    tail: boolean;
    value: {
        /** It is null when the template literal is tagged and the text has an invalid escape (e.g. - tag`\unicode and \u{55}`) */
        cooked?: string | null | undefined;
        raw: string;
    };
}

interface AssignmentProperty extends Property {
    value: Pattern;
    kind: "init";
    method: boolean; // false
}

interface ObjectPattern extends BasePattern {
    type: "ObjectPattern";
    properties: Array<AssignmentProperty | RestElement>;
}

interface ArrayPattern extends BasePattern {
    type: "ArrayPattern";
    elements: Array<Pattern | null>;
}

interface RestElement extends BasePattern {
    type: "RestElement";
    argument: Pattern;
}

interface AssignmentPattern extends BasePattern {
    type: "AssignmentPattern";
    left: Pattern;
    right: Expression;
}

type Class = ClassDeclaration | ClassExpression;
interface BaseClass extends BaseNode {
    superClass?: Expression | null | undefined;
    body: ClassBody;
}

interface ClassBody extends BaseNode {
    type: "ClassBody";
    body: Array<MethodDefinition | PropertyDefinition | StaticBlock>;
}

interface MethodDefinition extends BaseNode {
    type: "MethodDefinition";
    key: Expression | PrivateIdentifier;
    value: FunctionExpression;
    kind: "constructor" | "method" | "get" | "set";
    computed: boolean;
    static: boolean;
}

interface MaybeNamedClassDeclaration extends BaseClass, BaseDeclaration {
    type: "ClassDeclaration";
    /** It is null when a class declaration is a part of the `export default class` statement */
    id: Identifier | null;
}

interface ClassDeclaration extends MaybeNamedClassDeclaration {
    id: Identifier;
}

interface ClassExpression extends BaseClass, BaseExpression {
    type: "ClassExpression";
    id?: Identifier | null | undefined;
}

interface MetaProperty extends BaseExpression {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
}

type ModuleDeclaration =
    | ImportDeclaration
    | ExportNamedDeclaration
    | ExportDefaultDeclaration
    | ExportAllDeclaration;
interface BaseModuleDeclaration extends BaseNode {}

type ModuleSpecifier = ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier;
interface BaseModuleSpecifier extends BaseNode {
    local: Identifier;
}

interface ImportDeclaration extends BaseModuleDeclaration {
    type: "ImportDeclaration";
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    attributes: ImportAttribute[];
    source: Literal;
}

interface ImportSpecifier extends BaseModuleSpecifier {
    type: "ImportSpecifier";
    imported: Identifier | Literal;
}

interface ImportAttribute extends BaseNode {
    type: "ImportAttribute";
    key: Identifier | Literal;
    value: Literal;
}

interface ImportExpression extends BaseExpression {
    type: "ImportExpression";
    source: Expression;
    options?: Expression | null | undefined;
}

interface ImportDefaultSpecifier extends BaseModuleSpecifier {
    type: "ImportDefaultSpecifier";
}

interface ImportNamespaceSpecifier extends BaseModuleSpecifier {
    type: "ImportNamespaceSpecifier";
}

interface ExportNamedDeclaration extends BaseModuleDeclaration {
    type: "ExportNamedDeclaration";
    declaration?: Declaration | null | undefined;
    specifiers: ExportSpecifier[];
    attributes: ImportAttribute[];
    source?: Literal | null | undefined;
}

interface ExportSpecifier extends Omit<BaseModuleSpecifier, "local"> {
    type: "ExportSpecifier";
    local: Identifier | Literal;
    exported: Identifier | Literal;
}

interface ExportDefaultDeclaration extends BaseModuleDeclaration {
    type: "ExportDefaultDeclaration";
    declaration: MaybeNamedFunctionDeclaration | MaybeNamedClassDeclaration | Expression;
}

interface ExportAllDeclaration extends BaseModuleDeclaration {
    type: "ExportAllDeclaration";
    exported: Identifier | Literal | null;
    attributes: ImportAttribute[];
    source: Literal;
}

interface AwaitExpression extends BaseExpression {
    type: "AwaitExpression";
    argument: Expression;
}

type Positioned<T> = T & {
	start: number
	end: number
};
type Node = Positioned<Node$1>;

interface HoistMocksOptions {
	/**
	* List of modules that should always be imported before compiler hints.
	* @default 'vitest'
	*/
	hoistedModule?: string;
	/**
	* @default ["vi", "vitest"]
	*/
	utilsObjectNames?: string[];
	/**
	* @default ["mock", "unmock"]
	*/
	hoistableMockMethodNames?: string[];
	/**
	* @default ["mock", "unmock", "doMock", "doUnmock"]
	*/
	dynamicImportMockMethodNames?: string[];
	/**
	* @default ["hoisted"]
	*/
	hoistedMethodNames?: string[];
	regexpHoistable?: RegExp;
	codeFrameGenerator?: CodeFrameGenerator;
}
interface HoistMocksPluginOptions extends Omit<HoistMocksOptions, "regexpHoistable"> {
	include?: string | RegExp | (string | RegExp)[];
	exclude?: string | RegExp | (string | RegExp)[];
	/**
	* overrides include/exclude options
	*/
	filter?: (id: string) => boolean;
}
declare function hoistMocksPlugin(options?: HoistMocksPluginOptions): Plugin;
interface HoistMocksResult {
	code: string;
	map: SourceMap;
}
interface CodeFrameGenerator {
	(node: Positioned<Node>, id: string, code: string): string;
}
// this is a fork of Vite SSR transform
declare function hoistMocks(code: string, id: string, parse: Rollup.PluginContext["parse"], options?: HoistMocksOptions): HoistMocksResult | undefined;

interface InterceptorPluginOptions {
	/**
	* @default "__vitest_mocker__"
	*/
	globalThisAccessor?: string;
	registry?: MockerRegistry;
}
declare function interceptorPlugin(options?: InterceptorPluginOptions): Plugin;

interface MockerPluginOptions extends AutomockPluginOptions {
	hoistMocks?: HoistMocksPluginOptions;
}
// this is an implementation for public usage
// vitest doesn't use this plugin directly
declare function mockerPlugin(options?: MockerPluginOptions): Plugin[];

interface ServerResolverOptions {
	/**
	* @default ['/node_modules/']
	*/
	moduleDirectories?: string[];
}
declare class ServerMockResolver {
	private server;
	private options;
	constructor(server: ViteDevServer, options?: ServerResolverOptions);
	resolveMock(rawId: string, importer: string, options: {
		mock: "spy" | "factory" | "auto"
	}): Promise<ServerMockResolution>;
	invalidate(ids: string[]): void;
	resolveId(id: string, importer?: string): Promise<ServerIdResolution | null>;
	private normalizeResolveIdToUrl;
	private resolveMockId;
	private resolveModule;
}
interface ServerMockResolution {
	mockType: "manual" | "redirect" | "automock" | "autospy";
	resolvedId: string;
	resolvedUrl: string;
	needsInterop?: boolean;
	redirectUrl?: string | null;
}
interface ServerIdResolution {
	id: string;
	url: string;
	optimized: boolean;
}

export { ServerMockResolver, automockModule, automockPlugin, createManualModuleSource, dynamicImportPlugin, hoistMocks, hoistMocksPlugin, interceptorPlugin, mockerPlugin };
export type { AutomockPluginOptions, HoistMocksPluginOptions, HoistMocksResult, InterceptorPluginOptions, ServerIdResolution, ServerMockResolution, ServerResolverOptions };
