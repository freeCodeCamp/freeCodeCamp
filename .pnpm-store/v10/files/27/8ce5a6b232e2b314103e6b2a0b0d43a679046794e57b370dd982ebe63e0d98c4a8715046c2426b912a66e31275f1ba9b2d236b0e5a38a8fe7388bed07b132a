class Position {
  constructor(line, col, index) {
    this.line = undefined;
    this.column = undefined;
    if (index !== undefined) this.index = undefined;
    this.line = line;
    this.column = col;
    if (index !== undefined) this.index = index;
  }
}
class SourceLocation {
  start;
  end;
  filename;
  identifierName;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
function createPositionWithColumnOffset(position, columnOffset) {
  const {
    line,
    column,
    index
  } = position;
  return new Position(line, column + columnOffset, index + columnOffset);
}
const code = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
var ModuleErrors = {
  ImportMetaOutsideModule: {
    message: `import.meta may appear only with 'sourceType: "module"'`,
    code
  },
  ImportOutsideModule: {
    message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
    code
  }
};
const NodeDescriptions = {
  ArrayPattern: "array destructuring pattern",
  AssignmentExpression: "assignment expression",
  AssignmentPattern: "assignment expression",
  ArrowFunctionExpression: "arrow function expression",
  ConditionalExpression: "conditional expression",
  CatchClause: "catch clause",
  ForOfStatement: "for-of statement",
  ForInStatement: "for-in statement",
  ForStatement: "for-loop",
  FormalParameters: "function parameter list",
  Identifier: "identifier",
  ImportSpecifier: "import specifier",
  ImportDefaultSpecifier: "import default specifier",
  ImportNamespaceSpecifier: "import namespace specifier",
  ObjectPattern: "object destructuring pattern",
  ParenthesizedExpression: "parenthesized expression",
  RestElement: "rest element",
  UpdateExpression: {
    true: "prefix operation",
    false: "postfix operation"
  },
  VariableDeclarator: "variable declaration",
  YieldExpression: "yield expression"
};
const toNodeDescription = node => node.type === "UpdateExpression" ? NodeDescriptions.UpdateExpression[`${node.prefix}`] : NodeDescriptions[node.type];
var StandardErrors = {
  AccessorIsGenerator: ({
    kind
  }) => `A ${kind}ter cannot be a generator.`,
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
  AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
  AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
  BadGetterArity: "A 'get' accessor must not have any formal parameters.",
  BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
  BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
  ConstructorClassField: "Classes may not have a field named 'constructor'.",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
  ConstructorIsAccessor: "Class constructor may not be an accessor.",
  ConstructorIsAsync: "Constructor can't be an async function.",
  ConstructorIsGenerator: "Constructor can't be a generator.",
  DeclarationMissingInitializer: ({
    kind
  }) => `Missing initializer in ${kind} declaration.`,
  DecoratorAbstractMethod: "Decorators can't be used with an abstract method.",
  DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
  DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
  DecoratorStaticBlock: "Decorators can't be used with a static block.",
  DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
  DeletePrivateField: "Deleting a private field is not allowed.",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class.",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: ({
    exportName
  }) => `\`${exportName}\` has already been exported. Exported identifiers must be unique.`,
  DuplicateProto: "Redefinition of __proto__ property.",
  DuplicateRegExpFlags: "Duplicate regular expression flag.",
  ElementAfterRest: "Rest element must be last element.",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
  ExportBindingIsString: ({
    localName,
    exportName
  }) => `A string literal cannot be used as an exported binding without \`from\`.\n- Did you mean \`export { '${localName}' as '${exportName}' } from 'some-module'\`?`,
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
  ForInOfLoopInitializer: ({
    type
  }) => `'${type === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
  ForInUsing: "For-in loop may not start with 'using' declaration.",
  ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
  ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
  IllegalBreakContinue: ({
    type
  }) => `Unsyntactic ${type === "BreakStatement" ? "break" : "continue"}.`,
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
  IllegalReturn: "'return' outside of function.",
  ImportBindingIsString: ({
    importName
  }) => `A string literal cannot be used as an imported binding.\n- Did you mean \`import { "${importName}" as foo }\`?`,
  ImportCallArity: `\`import()\` requires exactly one or two arguments.`,
  ImportCallNotNewExpression: "Cannot use new with import(...).",
  ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
  IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
  InvalidBigIntLiteral: "Invalid BigIntLiteral.",
  InvalidCodePoint: "Code point out of bounds.",
  InvalidCoverDiscardElement: "'void' must be followed by an expression when not used in a binding position.",
  InvalidCoverInitializedName: "Invalid shorthand property initializer.",
  InvalidDigit: ({
    radix
  }) => `Expected number in radix ${radix}.`,
  InvalidEscapeSequence: "Bad character escape sequence.",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
  InvalidEscapedReservedWord: ({
    reservedWord
  }) => `Escape sequence in keyword ${reservedWord}.`,
  InvalidIdentifier: ({
    identifierName
  }) => `Invalid identifier ${identifierName}.`,
  InvalidLhs: ({
    ancestor
  }) => `Invalid left-hand side in ${toNodeDescription(ancestor)}.`,
  InvalidLhsBinding: ({
    ancestor
  }) => `Binding invalid left-hand side in ${toNodeDescription(ancestor)}.`,
  InvalidLhsOptionalChaining: ({
    ancestor
  }) => `Invalid optional chaining in the left-hand side of ${toNodeDescription(ancestor)}.`,
  InvalidNumber: "Invalid number.",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
  InvalidOrUnexpectedToken: ({
    unexpected
  }) => `Unexpected character '${unexpected}'.`,
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
  InvalidPrivateFieldResolution: ({
    identifierName
  }) => `Private name #${identifierName} is not defined.`,
  InvalidPropertyBindingPattern: "Binding member expression.",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
  LabelRedeclaration: ({
    labelName
  }) => `Label '${labelName}' is already declared.`,
  LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
  MalformedRegExpFlags: "Invalid regular expression flag.",
  MissingClassName: "A class name is required.",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon.",
  MissingPlugin: ({
    missingPlugin
  }) => `This experimental syntax requires enabling the parser plugin: ${missingPlugin.map(name => JSON.stringify(name)).join(", ")}.`,
  MissingOneOfPlugins: ({
    missingPlugin
  }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${missingPlugin.map(name => JSON.stringify(name)).join(", ")}.`,
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
  ModuleAttributesWithDuplicateKeys: ({
    key
  }) => `Duplicate key "${key}" is not allowed in module attributes.`,
  ModuleExportNameHasLoneSurrogate: ({
    surrogateCharCode
  }) => `An export name cannot include a lone surrogate, found '\\u${surrogateCharCode.toString(16)}'.`,
  ModuleExportUndefined: ({
    localName
  }) => `Export '${localName}' is not defined.`,
  MultipleDefaultsInSwitch: "Multiple default clauses.",
  NewlineAfterThrow: "Illegal newline after throw.",
  NoCatchOrFinally: "Missing catch or finally clause.",
  NumberIdentifier: "Identifier directly after number.",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
  ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
  OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
  ParamDupe: "Argument name clash.",
  PatternHasAccessor: "Object pattern can't contain getter or setter.",
  PatternHasMethod: "Object pattern can't contain methods.",
  PrivateInExpectedIn: ({
    identifierName
  }) => `Private names are only allowed in property accesses (\`obj.#${identifierName}\`) or in \`in\` expressions (\`#${identifierName} in obj\`).`,
  PrivateNameRedeclaration: ({
    identifierName
  }) => `Duplicate private name #${identifierName}.`,
  RestTrailingComma: "Unexpected trailing comma after rest element.",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
  SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
  SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
  StaticPrototype: "Classes may not have static property named prototype.",
  SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super.",
  TrailingDecorator: "Decorators must be attached to a class element.",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
  UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
  UnexpectedKeyword: ({
    keyword
  }) => `Unexpected keyword '${keyword}'.`,
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
  UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
  UnexpectedPrivateField: "Unexpected private name.",
  UnexpectedReservedWord: ({
    reservedWord
  }) => `Unexpected reserved word '${reservedWord}'.`,
  UnexpectedSuper: "'super' is only allowed in object methods and classes.",
  UnexpectedToken: ({
    expected,
    unexpected
  }) => `Unexpected token${unexpected ? ` '${unexpected}'.` : ""}${expected ? `, expected "${expected}"` : ""}`,
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",
  UnexpectedVoidPattern: "Unexpected void binding.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
  UnsupportedMetaProperty: ({
    target,
    onlyValidPropertyName
  }) => `The only valid meta property for ${target} is ${target}.${onlyValidPropertyName}.`,
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
  UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
  UnterminatedComment: "Unterminated comment.",
  UnterminatedRegExp: "Unterminated regular expression.",
  UnterminatedString: "Unterminated string constant.",
  UnterminatedTemplate: "Unterminated template.",
  UsingDeclarationExport: "Using declaration cannot be exported.",
  UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
  VarRedeclaration: ({
    identifierName
  }) => `Identifier '${identifierName}' has already been declared.`,
  VoidPatternCatchClauseParam: "A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",
  VoidPatternInitializer: "A void binding may not have an initializer.",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
  YieldInParameter: "Yield expression is not allowed in formal parameters.",
  YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
};
var StrictModeErrors = {
  StrictDelete: "Deleting local variable in strict mode.",
  StrictEvalArguments: ({
    referenceName
  }) => `Assigning to '${referenceName}' in strict mode.`,
  StrictEvalArgumentsBinding: ({
    bindingName
  }) => `Binding '${bindingName}' in strict mode.`,
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
  StrictWith: "'with' in strict mode."
};
var ParseExpressionErrors = {
  ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
  ParseExpressionExpectsEOF: ({
    unexpected
  }) => `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(unexpected)}\`.`
};
const UnparenthesizedPipeBodyDescriptions = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
var PipelineOperatorErrors = {
  PipeTopicRequiresHackPipes: 'Topic references are only supported when using the `"proposal": "hack"` version of the pipeline proposal.',
  PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
  PipeTopicUnconfiguredToken: ({
    token
  }) => `Invalid topic token ${token}. In order to use ${token} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${token}" }.`,
  PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
  PipeUnparenthesizedBody: ({
    type
  }) => `Hack-style pipe body cannot be an unparenthesized ${toNodeDescription({
    type
  })}; please wrap it in parentheses.`,
  PipelineUnparenthesized: "Cannot mix binary operator with solo-await F#-style pipeline. Please wrap the pipeline in parentheses."
};
function defineHidden(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: false,
    configurable: true,
    value
  });
}
function toParseErrorConstructor({
  toMessage,
  code,
  reasonCode,
  syntaxPlugin
}) {
  const hasMissingPlugin = reasonCode === "MissingPlugin" || reasonCode === "MissingOneOfPlugins";
  return function constructor(loc, pos, details) {
    const error = new SyntaxError();
    error.code = code;
    error.reasonCode = reasonCode;
    error.loc = loc;
    error.pos = pos;
    error.syntaxPlugin = syntaxPlugin;
    if (hasMissingPlugin) {
      error.missingPlugin = details.missingPlugin;
    }
    defineHidden(error, "clone", function clone(overrides = {}) {
      const {
        line,
        column,
        index = pos
      } = overrides.loc ?? loc;
      return constructor(new Position(line, column), index, {
        ...details,
        ...overrides.details
      });
    });
    defineHidden(error, "details", details);
    Object.defineProperty(error, "message", {
      configurable: true,
      get() {
        const message = `${toMessage(details)} (${loc.line}:${loc.column})`;
        this.message = message;
        return message;
      },
      set(value) {
        Object.defineProperty(this, "message", {
          value,
          writable: true
        });
      }
    });
    return error;
  };
}
function ParseErrorEnum(argument, syntaxPlugin) {
  if (Array.isArray(argument)) {
    return parseErrorTemplates => ParseErrorEnum(parseErrorTemplates, argument[0]);
  }
  const ParseErrorConstructors = {};
  for (const reasonCode of Object.keys(argument)) {
    const template = argument[reasonCode];
    const {
      message,
      ...rest
    } = typeof template === "string" ? {
      message: () => template
    } : typeof template === "function" ? {
      message: template
    } : template;
    const toMessage = typeof message === "string" ? () => message : message;
    ParseErrorConstructors[reasonCode] = toParseErrorConstructor({
      code: "BABEL_PARSER_SYNTAX_ERROR",
      reasonCode,
      toMessage,
      ...(syntaxPlugin ? {
        syntaxPlugin
      } : {}),
      ...rest
    });
  }
  return ParseErrorConstructors;
}
const Errors = {
  ...ParseErrorEnum(ModuleErrors),
  ...ParseErrorEnum(StandardErrors),
  ...ParseErrorEnum(StrictModeErrors),
  ...ParseErrorEnum(ParseExpressionErrors),
  ...ParseErrorEnum`pipelineOperator`(PipelineOperatorErrors)
};
function createDefaultOptions() {
  return {
    sourceType: "script",
    sourceFilename: undefined,
    startIndex: 0,
    startColumn: 0,
    startLine: 1,
    allowAwaitOutsideFunction: false,
    allowReturnOutsideFunction: false,
    allowNewTargetOutsideFunction: false,
    allowImportExportEverywhere: false,
    allowSuperOutsideMethod: false,
    allowUndeclaredExports: false,
    allowYieldOutsideFunction: false,
    plugins: [],
    strictMode: undefined,
    ranges: false,
    locations: true,
    tokens: false,
    createImportExpressions: true,
    createParenthesizedExpressions: false,
    errorRecovery: false,
    attachComment: true,
    annexB: true
  };
}
function getOptions(opts) {
  const options = createDefaultOptions();
  if (opts == null) {
    return options;
  }
  if (opts.annexB != null && opts.annexB !== false) {
    throw new Error("The `annexB` option can only be set to `false`.");
  }
  for (const key of Object.keys(options)) {
    if (opts[key] != null) options[key] = opts[key];
  }
  if (options.startLine === 1) {
    if (opts.startIndex == null && options.startColumn > 0) {
      options.startIndex = options.startColumn;
    } else if (opts.startColumn == null && options.startIndex > 0) {
      options.startColumn = options.startIndex;
    }
  } else if (opts.startColumn == null || opts.startIndex == null) {
    throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
  }
  if (options.sourceType === "commonjs") {
    if (opts.allowAwaitOutsideFunction != null) {
      throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");
    }
    if (opts.allowReturnOutsideFunction != null) {
      throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");
    }
    if (opts.allowNewTargetOutsideFunction != null) {
      throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.");
    }
  }
  return options;
}
function toESTreeLocation(node) {
  const {
    start,
    end
  } = node.loc;
  node.loc.start = new Position(start.line, start.column);
  node.loc.end = new Position(end.line, end.column);
  return node;
}
var estree = superClass => class ESTreeParserMixin extends superClass {
  createPosition(loc) {
    return new Position(loc.line, loc.column);
  }
  parse() {
    const file = super.parse();
    if (this.optionFlags & 512) {
      file.tokens = file.tokens.map(toESTreeLocation);
    }
    return toESTreeLocation(file);
  }
  parseRegExpLiteral({
    pattern,
    flags
  }) {
    let regex = null;
    try {
      regex = new RegExp(pattern, flags);
    } catch (_) {}
    const node = this.estreeParseLiteral(regex);
    node.regex = {
      pattern,
      flags
    };
    return node;
  }
  parseBigIntLiteral(value) {
    let bigInt;
    try {
      bigInt = BigInt(value);
    } catch {
      bigInt = null;
    }
    const node = this.estreeParseLiteral(bigInt);
    node.bigint = String(node.value || value);
    return node;
  }
  estreeParseLiteral(value) {
    return this.parseLiteral(value, "Literal");
  }
  parseStringLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  parseNumericLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  parseNullLiteral() {
    return this.estreeParseLiteral(null);
  }
  parseBooleanLiteral(value) {
    return this.estreeParseLiteral(value);
  }
  estreeParseChainExpression(node, endNode) {
    const chain = this.startNodeAtNode(node);
    chain.expression = node;
    return this.finishNodeAtNode(chain, "ChainExpression", endNode);
  }
  directiveToStmt(directive) {
    const expression = directive.value;
    delete directive.value;
    this.castNodeTo(expression, "Literal");
    expression.raw = expression.extra.raw;
    expression.value = expression.extra.expressionValue;
    const stmt = this.castNodeTo(directive, "ExpressionStatement");
    stmt.expression = expression;
    stmt.directive = expression.extra.rawValue;
    delete expression.extra;
    return stmt;
  }
  fillOptionalPropertiesForTSESLint(node) {}
  cloneEstreeStringLiteral(node) {
    const {
      start,
      end,
      loc,
      range,
      raw,
      value
    } = node;
    const cloned = Object.create(node.constructor.prototype);
    cloned.type = "Literal";
    cloned.start = start;
    cloned.end = end;
    cloned.loc = loc;
    cloned.range = range;
    cloned.raw = raw;
    cloned.value = value;
    return cloned;
  }
  initFunction(node, isAsync) {
    super.initFunction(node, isAsync);
    node.expression = false;
  }
  checkDeclaration(node) {
    if (node != null && this.isObjectProperty(node)) {
      this.checkDeclaration(node.value);
    } else {
      super.checkDeclaration(node);
    }
  }
  getObjectOrClassMethodParams(method) {
    return method.value.params;
  }
  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !stmt.expression.extra?.parenthesized;
  }
  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    super.parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse);
    const directiveStatements = node.directives.map(d => this.directiveToStmt(d));
    node.body = directiveStatements.concat(node.body);
    delete node.directives;
  }
  parsePrivateName() {
    const node = super.parsePrivateName();
    return this.convertPrivateNameToPrivateIdentifier(node);
  }
  convertPrivateNameToPrivateIdentifier(node) {
    const name = super.getPrivateNameSV(node);
    delete node.id;
    node.name = name;
    return this.castNodeTo(node, "PrivateIdentifier");
  }
  isPrivateName(node) {
    return node.type === "PrivateIdentifier";
  }
  getPrivateNameSV(node) {
    return node.name;
  }
  parseLiteral(value, type) {
    const node = super.parseLiteral(value, type);
    node.raw = node.extra.raw;
    delete node.extra;
    return node;
  }
  parseFunctionBody(node, allowExpression, isMethod = false) {
    super.parseFunctionBody(node, allowExpression, isMethod);
    node.expression = node.body.type !== "BlockStatement";
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    let funcNode = this.startNode();
    funcNode.kind = node.kind;
    funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    delete funcNode.kind;
    const {
      typeParameters
    } = node;
    if (typeParameters) {
      delete node.typeParameters;
      funcNode.typeParameters = typeParameters;
      this.resetStartLocationFromNode(funcNode, typeParameters);
    }
    const valueNode = this.castNodeTo(funcNode, this.hasPlugin("typescript") && !funcNode.body ? "TSEmptyBodyFunctionExpression" : "FunctionExpression");
    node.value = valueNode;
    if (type === "ClassPrivateMethod") {
      node.computed = false;
    }
    if (this.hasPlugin("typescript")) {
      if (node.abstract) {
        delete node.abstract;
        return this.finishNode(node, "TSAbstractMethodDefinition");
      }
    }
    if (type === "ObjectMethod") {
      if (node.kind === "method") {
        node.kind = "init";
      }
      node.shorthand = false;
      return this.finishNode(node, "Property");
    } else {
      return this.finishNode(node, "MethodDefinition");
    }
  }
  nameIsConstructor(key) {
    if (key.type === "Literal") return key.value === "constructor";
    return super.nameIsConstructor(key);
  }
  parseClassProperty(...args) {
    const propertyNode = super.parseClassProperty(...args);
    if (propertyNode.abstract && this.hasPlugin("typescript")) {
      delete propertyNode.abstract;
      this.castNodeTo(propertyNode, "TSAbstractPropertyDefinition");
    } else {
      this.castNodeTo(propertyNode, "PropertyDefinition");
    }
    return propertyNode;
  }
  parseClassPrivateProperty(...args) {
    const propertyNode = super.parseClassPrivateProperty(...args);
    if (propertyNode.abstract && this.hasPlugin("typescript")) {
      this.castNodeTo(propertyNode, "TSAbstractPropertyDefinition");
    } else {
      this.castNodeTo(propertyNode, "PropertyDefinition");
    }
    propertyNode.computed = false;
    return propertyNode;
  }
  parseClassAccessorProperty(node) {
    const accessorPropertyNode = super.parseClassAccessorProperty(node);
    if (accessorPropertyNode.abstract && this.hasPlugin("typescript")) {
      delete accessorPropertyNode.abstract;
      this.castNodeTo(accessorPropertyNode, "TSAbstractAccessorProperty");
    } else {
      this.castNodeTo(accessorPropertyNode, "AccessorProperty");
    }
    return accessorPropertyNode;
  }
  parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
    const node = super.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
    if (node) {
      node.kind = "init";
      this.castNodeTo(node, "Property");
    }
    return node;
  }
  finishObjectProperty(node) {
    node.kind = "init";
    return this.finishNode(node, "Property");
  }
  isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
    return type === "Property" ? "value" : super.isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding);
  }
  isAssignable(node, isBinding) {
    if (node != null && this.isObjectProperty(node)) {
      return this.isAssignable(node.value, isBinding);
    }
    return super.isAssignable(node, isBinding);
  }
  toAssignable(node, isLHS = false) {
    if (node != null && this.isObjectProperty(node)) {
      const {
        key,
        value
      } = node;
      if (this.isPrivateName(key)) {
        this.classScope.usePrivateName(this.getPrivateNameSV(key), key.start);
      }
      this.toAssignable(value, isLHS);
    } else {
      super.toAssignable(node, isLHS);
    }
  }
  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "Property" && (prop.kind === "get" || prop.kind === "set")) {
      this.raise(Errors.PatternHasAccessor, prop.key);
    } else if (prop.type === "Property" && prop.method) {
      this.raise(Errors.PatternHasMethod, prop.key);
    } else {
      super.toAssignableObjectExpressionProp(prop, isLast, isLHS);
    }
  }
  finishCallExpression(unfinished, optional) {
    const node = super.finishCallExpression(unfinished, optional);
    if (node.callee.type === "Import") {
      this.castNodeTo(node, "ImportExpression");
      node.source = node.arguments[0];
      node.options = node.arguments[1] ?? null;
      delete node.arguments;
      delete node.callee;
    } else if (node.type === "OptionalCallExpression") {
      this.castNodeTo(node, "CallExpression");
    } else {
      node.optional = false;
    }
    return node;
  }
  parseExport(unfinished, decorators) {
    const exportStartLoc = this.state.lastTokStartLoc;
    const node = super.parseExport(unfinished, decorators);
    switch (node.type) {
      case "ExportAllDeclaration":
        node.exported = null;
        break;
      case "ExportNamedDeclaration":
        if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
          this.castNodeTo(node, "ExportAllDeclaration");
          node.exported = node.specifiers[0].exported;
          delete node.specifiers;
        }
      case "ExportDefaultDeclaration":
        {
          const {
            declaration
          } = node;
          if (declaration?.type === "ClassDeclaration" && declaration.decorators?.length > 0 && declaration.start === node.start) {
            this.resetStartLocation(node, exportStartLoc);
          }
        }
        break;
    }
    return node;
  }
  stopParseSubscript(base, state) {
    const node = super.stopParseSubscript(base, state);
    if (state.optionalChainMember) {
      return this.estreeParseChainExpression(node, base);
    }
    return node;
  }
  parseMember(base, startLoc, state, computed, optional) {
    const node = super.parseMember(base, startLoc, state, computed, optional);
    if (node.type === "OptionalMemberExpression") {
      this.castNodeTo(node, "MemberExpression");
    } else {
      node.optional = false;
    }
    return node;
  }
  isOptionalMemberExpression(node) {
    if (node.type === "ChainExpression") {
      return node.expression.type === "MemberExpression";
    }
    return super.isOptionalMemberExpression(node);
  }
  hasPropertyAsPrivateName(node) {
    if (node.type === "ChainExpression") {
      node = node.expression;
    }
    return super.hasPropertyAsPrivateName(node);
  }
  isObjectProperty(node) {
    return node.type === "Property" && node.kind === "init" && !node.method;
  }
  isObjectMethod(node) {
    return node.type === "Property" && (node.method || node.kind === "get" || node.kind === "set");
  }
  castNodeTo(node, type) {
    const result = super.castNodeTo(node, type);
    this.fillOptionalPropertiesForTSESLint(result);
    return result;
  }
  cloneIdentifier(node) {
    const cloned = super.cloneIdentifier(node);
    this.fillOptionalPropertiesForTSESLint(cloned);
    return cloned;
  }
  cloneStringLiteral(node) {
    if (node.type === "Literal") {
      return this.cloneEstreeStringLiteral(node);
    }
    return super.cloneStringLiteral(node);
  }
  finishNodeAt(node, type, endLoc) {
    return toESTreeLocation(super.finishNodeAt(node, type, endLoc));
  }
  finishNodeAtNode(node, type, endNode) {
    return toESTreeLocation(super.finishNodeAtNode(node, type, endNode));
  }
  finishNode(node, type) {
    const result = super.finishNode(node, type);
    this.fillOptionalPropertiesForTSESLint(result);
    return result;
  }
  resetStartLocation(node, startLoc) {
    super.resetStartLocation(node, startLoc);
    toESTreeLocation(node);
  }
  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    super.resetEndLocation(node, endLoc);
    toESTreeLocation(node);
  }
};
const beforeExpr = true;
const startsExpr = true;
const isLoop = true;
const isAssign = true;
const prefix = true;
const postfix = true;
class ExportedTokenType {
  label;
  keyword;
  beforeExpr;
  startsExpr;
  rightAssociative;
  isLoop;
  isAssign;
  prefix;
  postfix;
  binop;
  constructor(label, conf = {}) {
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
  }
}
const keywords$1 = new Map();
function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = createToken(name, options);
  keywords$1.set(name, token);
  return token;
}
function createBinop(name, binop) {
  return createToken(name, {
    beforeExpr,
    binop
  });
}
let tokenTypeCounter = -1;
const tokenTypes = [];
const tokenLabels = [];
const tokenBinops = [];
const tokenBeforeExprs = [];
const tokenStartsExprs = [];
const tokenPrefixes = [];
function createToken(name, options = {}) {
  ++tokenTypeCounter;
  tokenLabels.push(name);
  tokenBinops.push(options.binop ?? -1);
  tokenBeforeExprs.push(options.beforeExpr ?? false);
  tokenStartsExprs.push(options.startsExpr ?? false);
  tokenPrefixes.push(options.prefix ?? false);
  tokenTypes.push(new ExportedTokenType(name, options));
  return tokenTypeCounter;
}
function createKeywordLike(name, options = {}) {
  ++tokenTypeCounter;
  keywords$1.set(name, tokenTypeCounter);
  tokenLabels.push(name);
  tokenBinops.push(options.binop ?? -1);
  tokenBeforeExprs.push(options.beforeExpr ?? false);
  tokenStartsExprs.push(options.startsExpr ?? false);
  tokenPrefixes.push(options.prefix ?? false);
  tokenTypes.push(new ExportedTokenType("name", options));
  return tokenTypeCounter;
}
const tt = {
  bracketL: createToken("[", {
    beforeExpr,
    startsExpr
  }),
  bracketR: createToken("]"),
  braceL: createToken("{", {
    beforeExpr,
    startsExpr
  }),
  braceBarL: createToken("{|", {
    beforeExpr,
    startsExpr
  }),
  braceR: createToken("}"),
  braceBarR: createToken("|}"),
  parenL: createToken("(", {
    beforeExpr,
    startsExpr
  }),
  parenR: createToken(")"),
  comma: createToken(",", {
    beforeExpr
  }),
  semi: createToken(";", {
    beforeExpr
  }),
  colon: createToken(":", {
    beforeExpr
  }),
  doubleColon: createToken("::", {
    beforeExpr
  }),
  dot: createToken("."),
  question: createToken("?", {
    beforeExpr
  }),
  questionDot: createToken("?."),
  arrow: createToken("=>", {
    beforeExpr
  }),
  template: createToken("template"),
  ellipsis: createToken("...", {
    beforeExpr
  }),
  backQuote: createToken("`", {
    startsExpr
  }),
  dollarBraceL: createToken("${", {
    beforeExpr,
    startsExpr
  }),
  templateTail: createToken("...`", {
    startsExpr
  }),
  templateNonTail: createToken("...${", {
    beforeExpr,
    startsExpr
  }),
  at: createToken("@"),
  hash: createToken("#", {
    startsExpr
  }),
  interpreterDirective: createToken("#!..."),
  eq: createToken("=", {
    beforeExpr,
    isAssign
  }),
  assign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  slashAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  xorAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  moduloAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  incDec: createToken("++/--", {
    prefix,
    postfix,
    startsExpr
  }),
  bang: createToken("!", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  tilde: createToken("~", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  doubleCaret: createToken("^^", {
    startsExpr
  }),
  doubleAt: createToken("@@", {
    startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  lt: createBinop("</>/<=/>=", 7),
  gt: createBinop("</>/<=/>=", 7),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  bitShiftL: createBinop("<</>>/>>>", 8),
  bitShiftR: createBinop("<</>>/>>>", 8),
  plusMin: createToken("+/-", {
    beforeExpr,
    binop: 9,
    prefix,
    startsExpr
  }),
  modulo: createToken("%", {
    binop: 10,
    startsExpr
  }),
  star: createToken("*", {
    binop: 10
  }),
  slash: createBinop("/", 10),
  exponent: createToken("**", {
    beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _in: createKeyword("in", {
    beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr,
    binop: 7
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr
  }),
  _finally: createKeyword("finally"),
  _function: createKeyword("function", {
    startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr,
    startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _do: createKeyword("do", {
    isLoop,
    beforeExpr
  }),
  _for: createKeyword("for", {
    isLoop
  }),
  _while: createKeyword("while", {
    isLoop
  }),
  _as: createKeywordLike("as", {
    startsExpr
  }),
  _assert: createKeywordLike("assert", {
    startsExpr
  }),
  _async: createKeywordLike("async", {
    startsExpr
  }),
  _await: createKeywordLike("await", {
    startsExpr
  }),
  _defer: createKeywordLike("defer", {
    startsExpr
  }),
  _from: createKeywordLike("from", {
    startsExpr
  }),
  _get: createKeywordLike("get", {
    startsExpr
  }),
  _let: createKeywordLike("let", {
    startsExpr
  }),
  _meta: createKeywordLike("meta", {
    startsExpr
  }),
  _of: createKeywordLike("of", {
    startsExpr
  }),
  _sent: createKeywordLike("sent", {
    startsExpr
  }),
  _set: createKeywordLike("set", {
    startsExpr
  }),
  _source: createKeywordLike("source", {
    startsExpr
  }),
  _static: createKeywordLike("static", {
    startsExpr
  }),
  _using: createKeywordLike("using", {
    startsExpr
  }),
  _yield: createKeywordLike("yield", {
    startsExpr
  }),
  _asserts: createKeywordLike("asserts", {
    startsExpr
  }),
  _checks: createKeywordLike("checks", {
    startsExpr
  }),
  _exports: createKeywordLike("exports", {
    startsExpr
  }),
  _global: createKeywordLike("global", {
    startsExpr
  }),
  _implements: createKeywordLike("implements", {
    startsExpr
  }),
  _intrinsic: createKeywordLike("intrinsic", {
    startsExpr
  }),
  _infer: createKeywordLike("infer", {
    startsExpr
  }),
  _is: createKeywordLike("is", {
    startsExpr
  }),
  _mixins: createKeywordLike("mixins", {
    startsExpr
  }),
  _proto: createKeywordLike("proto", {
    startsExpr
  }),
  _require: createKeywordLike("require", {
    startsExpr
  }),
  _satisfies: createKeywordLike("satisfies", {
    startsExpr
  }),
  _keyof: createKeywordLike("keyof", {
    startsExpr
  }),
  _readonly: createKeywordLike("readonly", {
    startsExpr
  }),
  _unique: createKeywordLike("unique", {
    startsExpr
  }),
  _abstract: createKeywordLike("abstract", {
    startsExpr
  }),
  _declare: createKeywordLike("declare", {
    startsExpr
  }),
  _enum: createKeywordLike("enum", {
    startsExpr
  }),
  _module: createKeywordLike("module", {
    startsExpr
  }),
  _namespace: createKeywordLike("namespace", {
    startsExpr
  }),
  _interface: createKeywordLike("interface", {
    startsExpr
  }),
  _type: createKeywordLike("type", {
    startsExpr
  }),
  _opaque: createKeywordLike("opaque", {
    startsExpr
  }),
  name: createToken("name", {
    startsExpr
  }),
  placeholder: createToken("%%", {
    startsExpr
  }),
  string: createToken("string", {
    startsExpr
  }),
  num: createToken("num", {
    startsExpr
  }),
  bigint: createToken("bigint", {
    startsExpr
  }),
  regexp: createToken("regexp", {
    startsExpr
  }),
  privateName: createToken("#name", {
    startsExpr
  }),
  eof: createToken("eof"),
  jsxName: createToken("jsxName"),
  jsxText: createToken("jsxText", {
    beforeExpr
  }),
  jsxTagStart: createToken("jsxTagStart", {
    startsExpr
  }),
  jsxTagEnd: createToken("jsxTagEnd")
};
function tokenIsIdentifier(token) {
  return token >= 89 && token <= 129;
}
function tokenKeywordOrIdentifierIsKeyword(token) {
  return token <= 88;
}
function tokenIsKeywordOrIdentifier(token) {
  return token >= 54 && token <= 129;
}
function tokenIsLiteralPropertyName(token) {
  return token >= 54 && token <= 132;
}
function tokenComesBeforeExpression(token) {
  return tokenBeforeExprs[token];
}
function tokenCanStartExpression(token) {
  return tokenStartsExprs[token];
}
function tokenIsAssignment(token) {
  return token >= 25 && token <= 29;
}
function tokenIsFlowInterfaceOrTypeOrOpaque(token) {
  return token >= 125 && token <= 127;
}
function tokenIsLoop(token) {
  return token >= 86 && token <= 88;
}
function tokenIsKeyword(token) {
  return token >= 54 && token <= 88;
}
function tokenIsOperator(token) {
  return token >= 35 && token <= 55;
}
function tokenIsPostfix(token) {
  return token === 30;
}
function tokenIsPrefix(token) {
  return tokenPrefixes[token];
}
function tokenIsTSTypeOperator(token) {
  return token >= 117 && token <= 119;
}
function tokenIsTSDeclarationStart(token) {
  return token >= 120 && token <= 126;
}
function tokenLabelName(token) {
  return tokenLabels[token];
}
function tokenOperatorPrecedence(token) {
  return tokenBinops[token];
}
function tokenIsRightAssociative(token) {
  return token === 53;
}
function tokenIsTemplate(token) {
  return token >= 20 && token <= 21;
}
function getExportedToken(token) {
  return tokenTypes[token];
}
class TokContext {
  constructor(token, preserveSpace) {
    this.token = token;
    this.preserveSpace = !!preserveSpace;
  }
  token;
  preserveSpace;
}
const types = {
  brace: new TokContext("{"),
  j_oTag: new TokContext("<tag"),
  j_cTag: new TokContext("</tag"),
  j_expr: new TokContext("<tag>...</tag>", true)
};
const nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088f\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5c\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdc-\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c8a\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7dc\ua7f1-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
const nonASCIIidentifierChars = "\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0897-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1add\u1ae0-\u1aeb\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  let pos = 0x10000;
  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }
  return false;
}
function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
function isIteratorStart(current, next, next2) {
  return current === 64 && next === 64 && isIdentifierStart(next2);
}
const reservedWordLikeSet = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
function canBeReservedWord(word) {
  return reservedWordLikeSet.has(word);
}
class Scope {
  flags = 0;
  names = new Map();
  firstLexicalName = "";
  constructor(flags) {
    this.flags = flags;
  }
}
class ScopeHandler {
  parser;
  scopeStack = [];
  inModule;
  undefinedExports = new Map();
  constructor(parser, inModule) {
    this.parser = parser;
    this.inModule = inModule;
  }
  get inTopLevel() {
    return (this.currentScope().flags & 1) > 0;
  }
  get inFunction() {
    return (this.currentVarScopeFlags() & 2) > 0;
  }
  get allowSuper() {
    return (this.currentThisScopeFlags() & 16) > 0;
  }
  get allowDirectSuper() {
    return (this.currentThisScopeFlags() & 32) > 0;
  }
  get allowNewTarget() {
    return (this.currentThisScopeFlags() & 512) > 0;
  }
  get inClass() {
    return (this.currentThisScopeFlags() & 64) > 0;
  }
  get inClassAndNotInNonArrowFunction() {
    const flags = this.currentThisScopeFlags();
    return (flags & 64) > 0 && (flags & 2) === 0;
  }
  get inStaticBlock() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & 128) {
        return true;
      }
      if (flags & (1667 | 64)) {
        return false;
      }
    }
  }
  get inNonArrowFunction() {
    return (this.currentThisScopeFlags() & 2) > 0;
  }
  get inBareCaseStatement() {
    return (this.currentScope().flags & 256) > 0;
  }
  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }
  createScope(flags) {
    return new Scope(flags);
  }
  enter(flags) {
    this.scopeStack.push(this.createScope(flags));
  }
  exit() {
    const scope = this.scopeStack.pop();
    return scope.flags;
  }
  treatFunctionsAsVarInScope(scope) {
    return !!(scope.flags & (2 | 128) || !this.parser.inModule && scope.flags & 1);
  }
  declareName(name, bindingType, loc) {
    let scope = this.currentScope();
    if (bindingType & 8 || bindingType & 16) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);
      let type = scope.names.get(name) || 0;
      if (bindingType & 16) {
        type = type | 4;
      } else {
        if (!scope.firstLexicalName) {
          scope.firstLexicalName = name;
        }
        type = type | 2;
      }
      scope.names.set(name, type);
      if (bindingType & 8) {
        this.maybeExportDefined(scope, name);
      }
    } else if (bindingType & 4) {
      for (let i = this.scopeStack.length - 1; i >= 0; --i) {
        scope = this.scopeStack[i];
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        scope.names.set(name, (scope.names.get(name) || 0) | 1);
        this.maybeExportDefined(scope, name);
        if (scope.flags & 1667) break;
      }
    }
    if (this.parser.inModule && scope.flags & 1) {
      this.undefinedExports.delete(name);
    }
  }
  maybeExportDefined(scope, name) {
    if (this.parser.inModule && scope.flags & 1) {
      this.undefinedExports.delete(name);
    }
  }
  checkRedeclarationInScope(scope, name, bindingType, loc) {
    if (this.isRedeclaredInScope(scope, name, bindingType)) {
      this.parser.raise(Errors.VarRedeclaration, loc, {
        identifierName: name
      });
    }
  }
  isRedeclaredInScope(scope, name, bindingType) {
    if (!(bindingType & 1)) return false;
    if (bindingType & 8) {
      return scope.names.has(name);
    }
    const type = scope.names.get(name) || 0;
    if (bindingType & 16) {
      return (type & 2) > 0 || !this.treatFunctionsAsVarInScope(scope) && (type & 1) > 0;
    }
    return (type & 2) > 0 && !(scope.flags & 8 && scope.firstLexicalName === name) || !this.treatFunctionsAsVarInScope(scope) && (type & 4) > 0;
  }
  checkLocalExport(id) {
    const {
      name
    } = id;
    const topLevelScope = this.scopeStack[0];
    if (!topLevelScope.names.has(name)) {
      this.undefinedExports.set(name, id.start);
    }
  }
  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }
  currentVarScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & 1667) {
        return flags;
      }
    }
  }
  currentThisScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];
      if (flags & (1667 | 64) && !(flags & 4)) {
        return flags;
      }
    }
  }
}
class FlowScope extends Scope {
  declareFunctions = new Set();
}
class FlowScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new FlowScope(flags);
  }
  declareName(name, bindingType, loc) {
    const scope = this.currentScope();
    if (bindingType & 2048) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);
      this.maybeExportDefined(scope, name);
      scope.declareFunctions.add(name);
      return;
    }
    super.declareName(name, bindingType, loc);
  }
  isRedeclaredInScope(scope, name, bindingType) {
    if (super.isRedeclaredInScope(scope, name, bindingType)) return true;
    if (bindingType & 2048 && !scope.declareFunctions.has(name)) {
      const type = scope.names.get(name);
      return (type & 4) > 0 || (type & 2) > 0;
    }
    return false;
  }
  checkLocalExport(id) {
    if (!this.scopeStack[0].declareFunctions.has(id.name)) {
      super.checkLocalExport(id);
    }
  }
}
const reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
const FlowErrorTemplates = {
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
  AssignReservedType: ({
    reservedType
  }) => `Cannot overwrite reserved type ${reservedType}.`,
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
  EnumBooleanMemberNotInitialized: ({
    memberName,
    enumName
  }) => `Boolean enum members need to be initialized. Use either \`${memberName} = true,\` or \`${memberName} = false,\` in enum \`${enumName}\`.`,
  EnumDuplicateMemberName: ({
    memberName,
    enumName
  }) => `Enum member names need to be unique, but the name \`${memberName}\` has already been used before in enum \`${enumName}\`.`,
  EnumInconsistentMemberValues: ({
    enumName
  }) => `Enum \`${enumName}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
  EnumInvalidExplicitType: ({
    invalidEnumType,
    enumName
  }) => `Enum type \`${invalidEnumType}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
  EnumInvalidExplicitTypeUnknownSupplied: ({
    enumName
  }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
  EnumInvalidMemberInitializerPrimaryType: ({
    enumName,
    memberName,
    explicitType
  }) => `Enum \`${enumName}\` has type \`${explicitType}\`, so the initializer of \`${memberName}\` needs to be a ${explicitType} literal.`,
  EnumInvalidMemberInitializerSymbolType: ({
    enumName,
    memberName
  }) => `Symbol enum members cannot be initialized. Use \`${memberName},\` in enum \`${enumName}\`.`,
  EnumInvalidMemberInitializerUnknownType: ({
    enumName,
    memberName
  }) => `The enum member initializer for \`${memberName}\` needs to be a literal (either a boolean, number, or string) in enum \`${enumName}\`.`,
  EnumInvalidMemberName: ({
    enumName,
    memberName,
    suggestion
  }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${memberName}\`, consider using \`${suggestion}\`, in enum \`${enumName}\`.`,
  EnumNumberMemberNotInitialized: ({
    enumName,
    memberName
  }) => `Number enum members need to be initialized, e.g. \`${memberName} = 1\` in enum \`${enumName}\`.`,
  EnumStringMemberInconsistentlyInitialized: ({
    enumName
  }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${enumName}\`.`,
  GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
  InexactVariance: "Explicit inexact syntax cannot have variance.",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
  PatternIsOptional: {
    message: "A binding pattern parameter cannot be optional in an implementation signature."
  },
  SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
  SpreadVariance: "Spread properties cannot have variance.",
  ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
  ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
  ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
  ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
  ThisParamNoDefault: "The `this` parameter may not have a default value.",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
  UnexpectedReservedType: ({
    reservedType
  }) => `Unexpected reserved type ${reservedType}.`,
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
  UnsupportedDeclareExportKind: ({
    unsupportedExportKind,
    suggestion
  }) => `\`declare export ${unsupportedExportKind}\` is not supported. Use \`${suggestion}\` instead.`,
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
  UnterminatedFlowComment: "Unterminated flow-comment."
};
const FlowErrors = ParseErrorEnum`flow`(FlowErrorTemplates);
function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}
function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}
const exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};
function partition(list, test) {
  const list1 = [];
  const list2 = [];
  for (let i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }
  return [list1, list2];
}
const FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
var flow = superClass => class FlowParserMixin extends superClass {
  flowPragma = undefined;
  getScopeHandler() {
    return FlowScopeHandler;
  }
  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }
  finishToken(type, val) {
    if (type !== 130 && type !== 9 && type !== 24) {
      if (this.flowPragma === undefined) {
        this.flowPragma = null;
      }
    }
    super.finishToken(type, val);
  }
  addComment(comment) {
    if (this.flowPragma === undefined) {
      const matches = FLOW_PRAGMA_REGEX.exec(comment.value);
      if (!matches) ;else if (matches[1] === "flow") {
        this.flowPragma = "flow";
      } else if (matches[1] === "noflow") {
        this.flowPragma = "noflow";
      } else {
        throw new Error("Unexpected flow pragma");
      }
    }
    super.addComment(comment);
  }
  flowParseTypeInitialiser(tok) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(tok || 10);
    const type = this.flowParseType();
    this.state.inType = oldInType;
    return type;
  }
  flowParsePredicate() {
    const node = this.startNode();
    const moduloLoc = this.state.startLoc;
    this.next();
    this.expectContextual(106);
    if (this.state.lastTokStartLoc.index > moduloLoc.index + 1) {
      this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks, moduloLoc);
    }
    if (this.eat(6)) {
      node.value = super.parseExpression();
      this.expect(7);
      return this.finishNode(node, "DeclaredPredicate");
    } else {
      return this.finishNode(node, "InferredPredicate");
    }
  }
  flowParseTypeAndPredicateInitialiser() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(10);
    let type = null;
    let predicate = null;
    if (this.match(50)) {
      this.state.inType = oldInType;
      predicate = this.flowParsePredicate();
    } else {
      type = this.flowParseType();
      this.state.inType = oldInType;
      if (this.match(50)) {
        predicate = this.flowParsePredicate();
      }
    }
    return [type, predicate];
  }
  flowParseDeclareClass(node) {
    this.next();
    this.flowParseInterfaceish(node, true);
    return this.finishNode(node, "DeclareClass");
  }
  flowParseDeclareFunction(node) {
    this.next();
    const id = node.id = this.parseIdentifier();
    const typeNode = this.startNode();
    const typeContainer = this.startNode();
    if (this.match(43)) {
      typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      typeNode.typeParameters = null;
    }
    this.expect(6);
    const tmp = this.flowParseFunctionTypeParams();
    typeNode.params = tmp.params;
    typeNode.rest = tmp.rest;
    typeNode.this = tmp._this;
    this.expect(7);
    [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
    typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
    id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
    this.resetEndLocation(id);
    this.semicolon();
    this.scope.declareName(node.id.name, 2048, node.id.start);
    return this.finishNode(node, "DeclareFunction");
  }
  flowParseDeclare(node, insideModule) {
    if (this.match(76)) {
      return this.flowParseDeclareClass(node);
    } else if (this.match(64)) {
      return this.flowParseDeclareFunction(node);
    } else if (this.match(70)) {
      return this.flowParseDeclareVariable(node);
    } else if (this.eatContextual(123)) {
      if (this.match(12)) {
        return this.flowParseDeclareModuleExports(node);
      } else {
        if (insideModule) {
          this.raise(FlowErrors.NestedDeclareModule, this.state.lastTokStartLoc);
        }
        return this.flowParseDeclareModule(node);
      }
    } else if (this.isContextual(126)) {
      return this.flowParseDeclareTypeAlias(node);
    } else if (this.isContextual(127)) {
      return this.flowParseDeclareOpaqueType(node);
    } else if (this.isContextual(125)) {
      return this.flowParseDeclareInterface(node);
    } else if (this.match(78)) {
      return this.flowParseDeclareExportDeclaration(node, insideModule);
    }
    throw this.unexpected();
  }
  flowParseDeclareVariable(node) {
    this.next();
    node.id = this.flowParseTypeAnnotatableIdentifier(true);
    this.scope.declareName(node.id.name, 5, node.id.start);
    this.semicolon();
    return this.finishNode(node, "DeclareVariable");
  }
  flowParseDeclareModule(node) {
    this.scope.enter(0);
    if (this.match(130)) {
      node.id = super.parseExprAtom();
    } else {
      node.id = this.parseIdentifier();
    }
    const bodyNode = this.startNode();
    const body = bodyNode.body = [];
    this.expect(2);
    while (!this.match(4)) {
      const bodyNode = this.startNode();
      if (this.match(79)) {
        this.next();
        if (!this.isContextual(126) && !this.match(83)) {
          this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc);
        }
        body.push(super.parseImport(bodyNode));
      } else {
        this.expectContextual(121, FlowErrors.UnsupportedStatementInDeclareModule);
        body.push(this.flowParseDeclare(bodyNode, true));
      }
    }
    this.scope.exit();
    this.expect(4);
    node.body = this.finishNode(bodyNode, "BlockStatement");
    let kind = null;
    let hasModuleExport = false;
    body.forEach(bodyElement => {
      if (isEsModuleType(bodyElement)) {
        if (kind === "CommonJS") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
        }
        kind = "ES";
      } else if (bodyElement.type === "DeclareModuleExports") {
        if (hasModuleExport) {
          this.raise(FlowErrors.DuplicateDeclareModuleExports, bodyElement);
        }
        if (kind === "ES") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
        }
        kind = "CommonJS";
        hasModuleExport = true;
      }
    });
    node.kind = kind || "CommonJS";
    return this.finishNode(node, "DeclareModule");
  }
  flowParseDeclareExportDeclaration(node, insideModule) {
    this.expect(78);
    if (this.eat(61)) {
      if (this.match(64) || this.match(76)) {
        node.declaration = this.flowParseDeclare(this.startNode());
      } else {
        node.declaration = this.flowParseType();
        this.semicolon();
      }
      node.default = true;
      return this.finishNode(node, "DeclareExportDeclaration");
    } else {
      if (this.match(71) || this.isLet() || (this.isContextual(126) || this.isContextual(125)) && !insideModule) {
        const label = this.state.value;
        throw this.raise(FlowErrors.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: label,
          suggestion: exportSuggestions[label]
        });
      }
      if (this.match(70) || this.match(64) || this.match(76) || this.isContextual(127)) {
        node.declaration = this.flowParseDeclare(this.startNode());
        node.default = false;
        return this.finishNode(node, "DeclareExportDeclaration");
      } else if (this.match(51) || this.match(2) || this.isContextual(125) || this.isContextual(126) || this.isContextual(127)) {
        const result = this.parseExport(node, null);
        if (result.type === "ExportNamedDeclaration") {
          result.default = false;
          delete result.exportKind;
          return this.castNodeTo(result, "DeclareExportDeclaration");
        } else {
          return this.castNodeTo(result, "DeclareExportAllDeclaration");
        }
      }
    }
    throw this.unexpected();
  }
  flowParseDeclareModuleExports(node) {
    this.next();
    this.expectContextual(107);
    node.typeAnnotation = this.flowParseTypeAnnotation();
    this.semicolon();
    return this.finishNode(node, "DeclareModuleExports");
  }
  flowParseDeclareTypeAlias(node) {
    this.next();
    const finished = this.flowParseTypeAlias(node);
    this.castNodeTo(finished, "DeclareTypeAlias");
    return finished;
  }
  flowParseDeclareOpaqueType(node) {
    this.next();
    const finished = this.flowParseOpaqueType(node, true);
    this.castNodeTo(finished, "DeclareOpaqueType");
    return finished;
  }
  flowParseDeclareInterface(node) {
    this.next();
    this.flowParseInterfaceish(node, false);
    return this.finishNode(node, "DeclareInterface");
  }
  flowParseInterfaceish(node, isClass) {
    node.id = this.flowParseRestrictedIdentifier(!isClass, true);
    this.scope.declareName(node.id.name, isClass ? 17 : 8201, node.id.start);
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.extends = [];
    if (this.eat(77)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (!isClass && this.eat(8));
    }
    if (isClass) {
      const implementsList = [];
      const mixins = [];
      if (this.eatContextual(113)) {
        do {
          mixins.push(this.flowParseInterfaceExtends());
        } while (this.eat(8));
      }
      if (this.eatContextual(109)) {
        do {
          implementsList.push(this.flowParseInterfaceExtends());
        } while (this.eat(8));
      }
      node.mixins = mixins;
      node.implements = implementsList;
    }
    node.body = this.flowParseObjectType({
      allowStatic: isClass,
      allowExact: false,
      allowSpread: false,
      allowProto: isClass,
      allowInexact: false
    });
  }
  flowParseInterfaceExtends() {
    const node = this.startNode();
    node.id = this.flowParseQualifiedTypeIdentifier();
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    } else {
      node.typeParameters = null;
    }
    return this.finishNode(node, "InterfaceExtends");
  }
  flowParseInterface(node) {
    this.flowParseInterfaceish(node, false);
    return this.finishNode(node, "InterfaceDeclaration");
  }
  checkNotUnderscore(word) {
    if (word === "_") {
      this.raise(FlowErrors.UnexpectedReservedUnderscore, this.state.startLoc);
    }
  }
  checkReservedType(word, startLoc, declaration) {
    if (!reservedTypes.has(word)) return;
    this.raise(declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, startLoc, {
      reservedType: word
    });
  }
  flowParseRestrictedIdentifier(liberal, declaration) {
    this.checkReservedType(this.state.value, this.state.startLoc, declaration);
    return this.parseIdentifier(liberal);
  }
  flowParseTypeAlias(node) {
    node.id = this.flowParseRestrictedIdentifier(false, true);
    this.scope.declareName(node.id.name, 8201, node.id.start);
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.right = this.flowParseTypeInitialiser(25);
    this.semicolon();
    return this.finishNode(node, "TypeAlias");
  }
  flowParseOpaqueType(node, declare) {
    this.expectContextual(126);
    node.id = this.flowParseRestrictedIdentifier(true, true);
    this.scope.declareName(node.id.name, 8201, node.id.start);
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }
    node.supertype = null;
    if (this.match(10)) {
      node.supertype = this.flowParseTypeInitialiser(10);
    }
    node.impltype = null;
    if (!declare) {
      node.impltype = this.flowParseTypeInitialiser(25);
    }
    this.semicolon();
    return this.finishNode(node, "OpaqueType");
  }
  flowParseTypeParameter(requireDefault = false) {
    const nodeStartLoc = this.state.startLoc;
    const node = this.startNode();
    const variance = this.flowParseVariance();
    const ident = this.flowParseTypeAnnotatableIdentifier();
    node.name = ident.name;
    node.variance = variance;
    node.bound = ident.typeAnnotation;
    if (this.match(25)) {
      this.eat(25);
      node.default = this.flowParseType();
    } else {
      if (requireDefault) {
        this.raise(FlowErrors.MissingTypeParamDefault, nodeStartLoc);
      }
    }
    return this.finishNode(node, "TypeParameter");
  }
  flowParseTypeParameterDeclaration() {
    const oldInType = this.state.inType;
    const node = this.startNode();
    node.params = [];
    this.state.inType = true;
    if (this.match(43) || this.match(138)) {
      this.next();
    } else {
      this.unexpected();
    }
    let defaultRequired = false;
    do {
      const typeParameter = this.flowParseTypeParameter(defaultRequired);
      node.params.push(typeParameter);
      if (typeParameter.default) {
        defaultRequired = true;
      }
      if (!this.match(44)) {
        this.expect(8);
      }
    } while (!this.match(44));
    this.expect(44);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterDeclaration");
  }
  flowInTopLevelContext(cb) {
    if (this.curContext() !== types.brace) {
      const oldContext = this.state.context;
      this.state.context = [oldContext[0]];
      try {
        return cb();
      } finally {
        this.state.context = oldContext;
      }
    } else {
      return cb();
    }
  }
  flowParseTypeParameterInstantiationInExpression() {
    if (this.reScan_lt() !== 43) return;
    return this.flowParseTypeParameterInstantiation();
  }
  flowParseTypeParameterInstantiation() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    this.state.inType = true;
    node.params = [];
    this.flowInTopLevelContext(() => {
      this.expect(43);
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = false;
      while (!this.match(44)) {
        node.params.push(this.flowParseType());
        if (!this.match(44)) {
          this.expect(8);
        }
      }
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    });
    this.state.inType = oldInType;
    if (!this.state.inType && this.curContext() === types.brace) {
      this.reScan_lt_gt();
    }
    this.expect(44);
    return this.finishNode(node, "TypeParameterInstantiation");
  }
  flowParseTypeParameterInstantiationCallOrNew() {
    if (this.reScan_lt() !== 43) return null;
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expect(43);
    while (!this.match(44)) {
      node.params.push(this.flowParseTypeOrImplicitInstantiation());
      if (!this.match(44)) {
        this.expect(8);
      }
    }
    this.expect(44);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }
  flowParseInterfaceType() {
    const node = this.startNode();
    this.expectContextual(125);
    node.extends = [];
    if (this.eat(77)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (this.eat(8));
    }
    node.body = this.flowParseObjectType({
      allowStatic: false,
      allowExact: false,
      allowSpread: false,
      allowProto: false,
      allowInexact: false
    });
    return this.finishNode(node, "InterfaceTypeAnnotation");
  }
  flowParseObjectPropertyKey() {
    return this.match(131) || this.match(130) ? super.parseExprAtom() : this.parseIdentifier(true);
  }
  flowParseObjectTypeIndexer(node, isStatic, variance) {
    node.static = isStatic;
    if (this.lookahead().type === 10) {
      node.id = this.flowParseObjectPropertyKey();
      node.key = this.flowParseTypeInitialiser();
    } else {
      node.id = null;
      node.key = this.flowParseType();
    }
    this.expect(1);
    node.value = this.flowParseTypeInitialiser();
    node.variance = variance;
    return this.finishNode(node, "ObjectTypeIndexer");
  }
  flowParseObjectTypeInternalSlot(node, isStatic) {
    node.static = isStatic;
    node.id = this.flowParseObjectPropertyKey();
    this.expect(1);
    this.expect(1);
    if (this.match(43) || this.match(6)) {
      node.method = true;
      node.optional = false;
      node.value = this.flowParseObjectTypeMethodish(this.startNodeAtNode(node));
    } else {
      node.method = false;
      if (this.eat(13)) {
        node.optional = true;
      }
      node.value = this.flowParseTypeInitialiser();
    }
    return this.finishNode(node, "ObjectTypeInternalSlot");
  }
  flowParseObjectTypeMethodish(node) {
    node.params = [];
    node.rest = null;
    node.typeParameters = null;
    node.this = null;
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    this.expect(6);
    if (this.match(74)) {
      node.this = this.flowParseFunctionTypeParam(true);
      node.this.name = null;
      if (!this.match(7)) {
        this.expect(8);
      }
    }
    while (!this.match(7) && !this.match(17)) {
      node.params.push(this.flowParseFunctionTypeParam(false));
      if (!this.match(7)) {
        this.expect(8);
      }
    }
    if (this.eat(17)) {
      node.rest = this.flowParseFunctionTypeParam(false);
    }
    this.expect(7);
    node.returnType = this.flowParseTypeInitialiser();
    return this.finishNode(node, "FunctionTypeAnnotation");
  }
  flowParseObjectTypeCallProperty(node, isStatic) {
    const valueNode = this.startNode();
    node.static = isStatic;
    node.value = this.flowParseObjectTypeMethodish(valueNode);
    return this.finishNode(node, "ObjectTypeCallProperty");
  }
  flowParseObjectType({
    allowStatic,
    allowExact,
    allowSpread,
    allowProto,
    allowInexact
  }) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const nodeStart = this.startNode();
    nodeStart.callProperties = [];
    nodeStart.properties = [];
    nodeStart.indexers = [];
    nodeStart.internalSlots = [];
    let endDelim;
    let exact;
    let inexact = false;
    if (allowExact && this.match(3)) {
      this.expect(3);
      endDelim = 5;
      exact = true;
    } else {
      this.expect(2);
      endDelim = 4;
      exact = false;
    }
    nodeStart.exact = exact;
    while (!this.match(endDelim)) {
      let isStatic = false;
      let protoStartLoc = null;
      let inexactStartLoc = null;
      const node = this.startNode();
      if (allowProto && this.isContextual(114)) {
        const lookahead = this.lookahead();
        if (lookahead.type !== 10 && lookahead.type !== 13) {
          this.next();
          protoStartLoc = this.state.startLoc;
          allowStatic = false;
        }
      }
      if (allowStatic && this.isContextual(102)) {
        const lookahead = this.lookahead();
        if (lookahead.type !== 10 && lookahead.type !== 13) {
          this.next();
          isStatic = true;
        }
      }
      const variance = this.flowParseVariance();
      if (this.eat(0)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (this.eat(0)) {
          if (variance) {
            this.unexpected(variance.start);
          }
          nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
        } else {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        }
      } else if (this.match(6) || this.match(43)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (variance) {
          this.unexpected(variance.start);
        }
        nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
      } else {
        let kind = "init";
        if (this.isContextual(95) || this.isContextual(100)) {
          const lookahead = this.lookahead();
          if (tokenIsLiteralPropertyName(lookahead.type)) {
            kind = this.state.value;
            this.next();
          }
        }
        const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact ?? !exact);
        if (propOrInexact === null) {
          inexact = true;
          inexactStartLoc = this.state.lastTokStartLoc;
        } else {
          nodeStart.properties.push(propOrInexact);
        }
      }
      this.flowObjectTypeSemicolon();
      if (inexactStartLoc && !this.match(4) && !this.match(5)) {
        this.raise(FlowErrors.UnexpectedExplicitInexactInObject, inexactStartLoc);
      }
    }
    this.expect(endDelim);
    if (allowSpread) {
      nodeStart.inexact = inexact;
    }
    const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
    this.state.inType = oldInType;
    return out;
  }
  flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact) {
    if (this.eat(17)) {
      const isInexactToken = this.match(8) || this.match(9) || this.match(4) || this.match(5);
      if (isInexactToken) {
        if (!allowSpread) {
          this.raise(FlowErrors.InexactInsideNonObject, this.state.lastTokStartLoc);
        } else if (!allowInexact) {
          this.raise(FlowErrors.InexactInsideExact, this.state.lastTokStartLoc);
        }
        if (variance) {
          this.raise(FlowErrors.InexactVariance, variance);
        }
        return null;
      }
      if (!allowSpread) {
        this.raise(FlowErrors.UnexpectedSpreadType, this.state.lastTokStartLoc);
      }
      if (protoStartLoc != null) {
        this.unexpected(protoStartLoc);
      }
      if (variance) {
        this.raise(FlowErrors.SpreadVariance, variance);
      }
      node.argument = this.flowParseType();
      return this.finishNode(node, "ObjectTypeSpreadProperty");
    } else {
      node.key = this.flowParseObjectPropertyKey();
      node.static = isStatic;
      node.proto = protoStartLoc != null;
      node.kind = kind;
      let optional = false;
      if (this.match(43) || this.match(6)) {
        node.method = true;
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }
        if (variance) {
          this.unexpected(variance.start);
        }
        node.value = this.flowParseObjectTypeMethodish(this.startNodeAtNode(node));
        if (kind === "get" || kind === "set") {
          this.flowCheckGetterSetterParams(node);
        }
        if (!allowSpread && node.key.name === "constructor" && node.value.this) {
          this.raise(FlowErrors.ThisParamBannedInConstructor, node.value.this);
        }
      } else {
        if (kind !== "init") this.unexpected();
        node.method = false;
        if (this.eat(13)) {
          optional = true;
        }
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
      }
      node.optional = optional;
      return this.finishNode(node, "ObjectTypeProperty");
    }
  }
  flowCheckGetterSetterParams(property) {
    const paramCount = property.kind === "get" ? 0 : 1;
    const length = property.value.params.length + (property.value.rest ? 1 : 0);
    if (property.value.this) {
      this.raise(property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam, property.value.this);
    }
    if (length !== paramCount) {
      this.raise(property.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, property);
    }
    if (property.kind === "set" && property.value.rest) {
      this.raise(Errors.BadSetterRestParameter, property);
    }
  }
  flowObjectTypeSemicolon() {
    if (!this.eat(9) && !this.eat(8) && !this.match(4) && !this.match(5)) {
      this.unexpected();
    }
  }
  flowParseQualifiedTypeIdentifier(startLoc, id) {
    startLoc ??= this.state.startLoc;
    let node = id || this.flowParseRestrictedIdentifier(true);
    while (this.eat(12)) {
      const node2 = this.startNodeAt(startLoc);
      node2.qualification = node;
      node2.id = this.flowParseRestrictedIdentifier(true);
      node = this.finishNode(node2, "QualifiedTypeIdentifier");
    }
    return node;
  }
  flowParseGenericType(startLoc, id) {
    const node = this.startNodeAt(startLoc);
    node.typeParameters = null;
    node.id = this.flowParseQualifiedTypeIdentifier(startLoc, id);
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    }
    return this.finishNode(node, "GenericTypeAnnotation");
  }
  flowParseTypeofType() {
    const node = this.startNode();
    this.expect(83);
    node.argument = this.flowParsePrimaryType();
    return this.finishNode(node, "TypeofTypeAnnotation");
  }
  flowParseTupleType() {
    const node = this.startNode();
    node.types = [];
    this.expect(0);
    while (this.state.pos < this.length && !this.match(1)) {
      node.types.push(this.flowParseType());
      if (this.match(1)) break;
      this.expect(8);
    }
    this.expect(1);
    return this.finishNode(node, "TupleTypeAnnotation");
  }
  flowParseFunctionTypeParam(first) {
    let name = null;
    let optional = false;
    let typeAnnotation;
    const node = this.startNode();
    const lh = this.lookahead();
    const isThis = this.state.type === 74;
    if (lh.type === 10 || lh.type === 13) {
      if (isThis && !first) {
        this.raise(FlowErrors.ThisParamMustBeFirst, node);
      }
      name = this.parseIdentifier(isThis);
      if (this.eat(13)) {
        optional = true;
        if (isThis) {
          this.raise(FlowErrors.ThisParamMayNotBeOptional, node);
        }
      }
      typeAnnotation = this.flowParseTypeInitialiser();
    } else {
      typeAnnotation = this.flowParseType();
    }
    node.name = name;
    node.optional = optional;
    node.typeAnnotation = typeAnnotation;
    return this.finishNode(node, "FunctionTypeParam");
  }
  reinterpretTypeAsFunctionTypeParam(type) {
    const node = this.startNodeAtNode(type);
    node.name = null;
    node.optional = false;
    node.typeAnnotation = type;
    return this.finishNode(node, "FunctionTypeParam");
  }
  flowParseFunctionTypeParams(params = []) {
    let rest = null;
    let _this = null;
    if (this.match(74)) {
      _this = this.flowParseFunctionTypeParam(true);
      _this.name = null;
      if (!this.match(7)) {
        this.expect(8);
      }
    }
    while (!this.match(7) && !this.match(17)) {
      params.push(this.flowParseFunctionTypeParam(false));
      if (!this.match(7)) {
        this.expect(8);
      }
    }
    if (this.eat(17)) {
      rest = this.flowParseFunctionTypeParam(false);
    }
    return {
      params,
      rest,
      _this
    };
  }
  flowIdentToTypeAnnotation(startLoc, node, id) {
    switch (id.name) {
      case "any":
        return this.finishNode(node, "AnyTypeAnnotation");
      case "bool":
      case "boolean":
        return this.finishNode(node, "BooleanTypeAnnotation");
      case "mixed":
        return this.finishNode(node, "MixedTypeAnnotation");
      case "empty":
        return this.finishNode(node, "EmptyTypeAnnotation");
      case "number":
        return this.finishNode(node, "NumberTypeAnnotation");
      case "string":
        return this.finishNode(node, "StringTypeAnnotation");
      case "symbol":
        return this.finishNode(node, "SymbolTypeAnnotation");
      default:
        this.checkNotUnderscore(id.name);
        return this.flowParseGenericType(startLoc, id);
    }
  }
  flowParsePrimaryType() {
    const startLoc = this.state.startLoc;
    const node = this.startNode();
    let tmp;
    let type;
    let isGroupedType = false;
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;
    switch (this.state.type) {
      case 2:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: true,
          allowProto: false,
          allowInexact: true
        });
      case 3:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: true,
          allowSpread: true,
          allowProto: false,
          allowInexact: false
        });
      case 0:
        this.state.noAnonFunctionType = false;
        type = this.flowParseTupleType();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        return type;
      case 43:
        {
          const node = this.startNode();
          node.typeParameters = this.flowParseTypeParameterDeclaration();
          this.expect(6);
          tmp = this.flowParseFunctionTypeParams();
          node.params = tmp.params;
          node.rest = tmp.rest;
          node.this = tmp._this;
          this.expect(7);
          this.expect(15);
          node.returnType = this.flowParseType();
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
      case 6:
        {
          const node = this.startNode();
          this.next();
          if (!this.match(7) && !this.match(17)) {
            if (tokenIsIdentifier(this.state.type) || this.match(74)) {
              const token = this.lookahead().type;
              isGroupedType = token !== 13 && token !== 10;
            } else {
              isGroupedType = true;
            }
          }
          if (isGroupedType) {
            this.state.noAnonFunctionType = false;
            type = this.flowParseType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (this.state.noAnonFunctionType || !(this.match(8) || this.match(7) && this.lookahead().type === 15)) {
              this.expect(7);
              return type;
            } else {
              this.eat(8);
            }
          }
          if (type) {
            tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
          } else {
            tmp = this.flowParseFunctionTypeParams();
          }
          node.params = tmp.params;
          node.rest = tmp.rest;
          node.this = tmp._this;
          this.expect(7);
          this.expect(15);
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
      case 130:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
      case 81:
      case 82:
        node.value = this.match(81);
        this.next();
        return this.finishNode(node, "BooleanLiteralTypeAnnotation");
      case 49:
        if (this.state.value === "-") {
          this.next();
          if (this.match(131)) {
            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", node);
          }
          if (this.match(132)) {
            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", node);
          }
          throw this.raise(FlowErrors.UnexpectedSubtractionOperand, this.state.startLoc);
        }
        throw this.unexpected();
      case 131:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
      case 132:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
      case 84:
        this.next();
        return this.finishNode(node, "VoidTypeAnnotation");
      case 80:
        this.next();
        return this.finishNode(node, "NullLiteralTypeAnnotation");
      case 74:
        this.next();
        return this.finishNode(node, "ThisTypeAnnotation");
      case 51:
        this.next();
        return this.finishNode(node, "ExistsTypeAnnotation");
      case 83:
        return this.flowParseTypeofType();
      default:
        if (tokenIsKeyword(this.state.type)) {
          const label = tokenLabelName(this.state.type);
          this.next();
          return super.createIdentifier(node, label);
        } else if (tokenIsIdentifier(this.state.type)) {
          if (this.isContextual(125)) {
            return this.flowParseInterfaceType();
          }
          return this.flowIdentToTypeAnnotation(startLoc, node, this.parseIdentifier());
        }
    }
    throw this.unexpected();
  }
  flowParsePostfixType() {
    const startLoc = this.state.startLoc;
    let type = this.flowParsePrimaryType();
    let seenOptionalIndexedAccess = false;
    while ((this.match(0) || this.match(14)) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startLoc);
      const optional = this.eat(14);
      seenOptionalIndexedAccess = seenOptionalIndexedAccess || optional;
      this.expect(0);
      if (!optional && this.match(1)) {
        node.elementType = type;
        this.next();
        type = this.finishNode(node, "ArrayTypeAnnotation");
      } else {
        node.objectType = type;
        node.indexType = this.flowParseType();
        this.expect(1);
        if (seenOptionalIndexedAccess) {
          node.optional = optional;
          type = this.finishNode(node, "OptionalIndexedAccessType");
        } else {
          type = this.finishNode(node, "IndexedAccessType");
        }
      }
    }
    return type;
  }
  flowParsePrefixType() {
    const node = this.startNode();
    if (this.eat(13)) {
      node.typeAnnotation = this.flowParsePrefixType();
      return this.finishNode(node, "NullableTypeAnnotation");
    } else {
      return this.flowParsePostfixType();
    }
  }
  flowParseAnonFunctionWithoutParens() {
    const param = this.flowParsePrefixType();
    if (!this.state.noAnonFunctionType && this.eat(15)) {
      const node = this.startNodeAtNode(param);
      node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
      node.rest = null;
      node.this = null;
      node.returnType = this.flowParseType();
      node.typeParameters = null;
      return this.finishNode(node, "FunctionTypeAnnotation");
    }
    return param;
  }
  flowParseIntersectionType() {
    const node = this.startNode();
    this.eat(41);
    const type = this.flowParseAnonFunctionWithoutParens();
    node.types = [type];
    while (this.eat(41)) {
      node.types.push(this.flowParseAnonFunctionWithoutParens());
    }
    return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
  }
  flowParseUnionType() {
    const node = this.startNode();
    this.eat(39);
    const type = this.flowParseIntersectionType();
    node.types = [type];
    while (this.eat(39)) {
      node.types.push(this.flowParseIntersectionType());
    }
    return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
  }
  flowParseType() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const type = this.flowParseUnionType();
    this.state.inType = oldInType;
    return type;
  }
  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === 128 && this.state.value === "_") {
      const startLoc = this.state.startLoc;
      const node = this.parseIdentifier();
      return this.flowParseGenericType(startLoc, node);
    } else {
      return this.flowParseType();
    }
  }
  flowParseTypeAnnotation() {
    const node = this.startNode();
    node.typeAnnotation = this.flowParseTypeInitialiser();
    return this.finishNode(node, "TypeAnnotation");
  }
  flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
    const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
    if (this.match(10)) {
      ident.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(ident);
    }
    return ident;
  }
  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocationFromNode(node.expression, node.typeAnnotation);
    return node.expression;
  }
  flowParseVariance() {
    let variance = null;
    if (this.match(49)) {
      variance = this.startNode();
      if (this.state.value === "+") {
        variance.kind = "plus";
      } else {
        variance.kind = "minus";
      }
      this.next();
      return this.finishNode(variance, "Variance");
    }
    return variance;
  }
  parseFunctionBody(node, allowExpressionBody, isMethod = false) {
    if (allowExpressionBody) {
      this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
      return;
    }
    super.parseFunctionBody(node, false, isMethod);
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(10)) {
      const typeNode = this.startNode();
      [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
      node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
    }
    return super.parseFunctionBodyAndFinish(node, type, isMethod);
  }
  parseStatementLike(flags) {
    if (this.state.strict && this.isContextual(125)) {
      const lookahead = this.lookahead();
      if (tokenIsKeywordOrIdentifier(lookahead.type)) {
        const node = this.startNode();
        this.next();
        return this.flowParseInterface(node);
      }
    } else if (this.isContextual(122)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }
    const stmt = super.parseStatementLike(flags);
    if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
      this.flowPragma = null;
    }
    return stmt;
  }
  parseExpressionStatement(node, expr, decorators) {
    if (expr.type === "Identifier") {
      if (expr.name === "declare") {
        if (this.match(76) || tokenIsIdentifier(this.state.type) || this.match(64) || this.match(70) || this.match(78)) {
          return this.flowParseDeclare(node);
        }
      } else if (tokenIsIdentifier(this.state.type)) {
        if (expr.name === "interface") {
          return this.flowParseInterface(node);
        } else if (expr.name === "type") {
          return this.flowParseTypeAlias(node);
        } else if (expr.name === "opaque") {
          return this.flowParseOpaqueType(node, false);
        }
      }
    }
    return super.parseExpressionStatement(node, expr, decorators);
  }
  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;
    if (type === 122 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
      return !this.state.containsEsc;
    }
    return super.shouldParseExportDeclaration();
  }
  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;
    if (type === 122 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
      return this.state.containsEsc;
    }
    return super.isExportDefaultSpecifier();
  }
  parseExportDefaultExpression() {
    if (this.isContextual(122)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }
    return super.parseExportDefaultExpression();
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (!this.match(13)) return expr;
    if (refExpressionErrors != null) {
      const nextCh = this.lookaheadCharCode();
      if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
        this.setOptionalParametersError(refExpressionErrors);
        return expr;
      }
    }
    this.expect(13);
    const state = this.state.clone();
    const originalNoArrowAt = this.state.noArrowAt;
    const node = this.startNodeAt(startLoc);
    let {
      consequent,
      failed
    } = this.tryParseConditionalConsequent();
    const result = this.getArrowLikeExpressions(consequent);
    let valid = result[0];
    const invalid = result[1];
    if (failed || invalid.length > 0) {
      const noArrowAt = [...originalNoArrowAt];
      if (invalid.length > 0) {
        this.state = state;
        this.state.noArrowAt = noArrowAt;
        for (let i = 0; i < invalid.length; i++) {
          noArrowAt.push(invalid[i].start);
        }
        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
        [valid] = this.getArrowLikeExpressions(consequent);
      }
      if (failed && valid.length > 1) {
        this.raise(FlowErrors.AmbiguousConditionalArrow, state.startLoc);
      }
      if (failed && valid.length === 1) {
        this.state = state;
        noArrowAt.push(valid[0].start);
        this.state.noArrowAt = noArrowAt;
        ({
          consequent
        } = this.tryParseConditionalConsequent());
      }
    }
    this.getArrowLikeExpressions(consequent, true);
    this.state.noArrowAt = originalNoArrowAt;
    this.expect(10);
    node.test = expr;
    node.consequent = consequent;
    node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(undefined, undefined));
    return this.finishNode(node, "ConditionalExpression");
  }
  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const consequent = this.parseMaybeAssignAllowIn();
    const failed = !this.match(10);
    this.state.noArrowParamsConversionAt.pop();
    return {
      consequent,
      failed
    };
  }
  getArrowLikeExpressions(node, disallowInvalid) {
    const stack = [node];
    const arrows = [];
    while (stack.length !== 0) {
      const node = stack.pop();
      if (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement") {
        if (node.typeParameters || !node.returnType) {
          this.finishArrowValidation(node);
        } else {
          arrows.push(node);
        }
        stack.push(node.body);
      } else if (node.type === "ConditionalExpression") {
        stack.push(node.consequent);
        stack.push(node.alternate);
      }
    }
    if (disallowInvalid) {
      arrows.forEach(node => this.finishArrowValidation(node));
      return [arrows, []];
    }
    return partition(arrows, node => node.params.every(param => this.isAssignable(param, true)));
  }
  finishArrowValidation(node) {
    this.toAssignableList(node.params, node.extra?.trailingCommaLoc, false);
    this.scope.enter(514 | 4);
    super.checkParams(node, false, true);
    this.scope.exit();
  }
  forwardNoArrowParamsConversionAt(node, parse) {
    let result;
    if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      result = parse();
      this.state.noArrowParamsConversionAt.pop();
    } else {
      result = parse();
    }
    return result;
  }
  parseParenItem(node, startLoc) {
    const newNode = super.parseParenItem(node, startLoc);
    if (this.eat(13)) {
      newNode.optional = true;
      this.resetEndLocation(node);
    }
    if (this.match(10)) {
      const typeCastNode = this.startNodeAt(startLoc);
      typeCastNode.expression = newNode;
      typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TypeCastExpression");
    }
    return newNode;
  }
  assertModuleNodeAllowed(node) {
    if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
      return;
    }
    super.assertModuleNodeAllowed(node);
  }
  parseExportDeclaration(node) {
    if (this.isContextual(126)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      if (this.match(2)) {
        node.specifiers = this.parseExportSpecifiers(true);
        super.parseExportFrom(node);
        return null;
      } else {
        return this.flowParseTypeAlias(declarationNode);
      }
    } else if (this.isContextual(127)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseOpaqueType(declarationNode, false);
    } else if (this.isContextual(125)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseInterface(declarationNode);
    } else if (this.isContextual(122)) {
      node.exportKind = "value";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(declarationNode);
    } else {
      return super.parseExportDeclaration(node);
    }
  }
  eatExportStar(node) {
    if (super.eatExportStar(node)) return true;
    if (this.isContextual(126) && this.lookahead().type === 51) {
      node.exportKind = "type";
      this.next();
      this.next();
      return true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(node) {
    const {
      startLoc
    } = this.state;
    const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);
    if (hasNamespace && node.exportKind === "type") {
      this.unexpected(startLoc);
    }
    return hasNamespace;
  }
  parseClassId(node, isStatement, optionalId) {
    super.parseClassId(node, isStatement, optionalId);
    if (this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
  }
  parseClassMember(classBody, member, state) {
    const {
      startLoc
    } = this.state;
    if (this.isContextual(121)) {
      if (super.parseClassMemberFromModifier(classBody, member)) {
        return;
      }
      member.declare = true;
    }
    super.parseClassMember(classBody, member, state);
    if (member.declare) {
      if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
        this.raise(FlowErrors.DeclareClassElement, startLoc);
      } else if (member.value) {
        this.raise(FlowErrors.DeclareClassFieldInitializer, member.value);
      }
    }
  }
  isIterator(word) {
    return word === "iterator" || word === "asyncIterator";
  }
  readIterator() {
    const word = super.readWord1();
    const fullWord = "@@" + word;
    if (!this.isIterator(word) || !this.state.inType) {
      this.raise(Errors.InvalidIdentifier, this.state.curPosition(), {
        identifierName: fullWord
      });
    }
    this.finishToken(128, fullWord);
  }
  getTokenFromCode(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 123 && next === 124) {
      this.finishOp(3, 2);
    } else if (this.state.inType && (code === 62 || code === 60)) {
      this.finishOp(code === 62 ? 44 : 43, 1);
    } else if (this.state.inType && code === 63) {
      if (next === 46) {
        this.finishOp(14, 2);
      } else {
        this.finishOp(13, 1);
      }
    } else if (isIteratorStart(code, next, this.input.charCodeAt(this.state.pos + 2))) {
      this.state.pos += 2;
      this.readIterator();
    } else {
      super.getTokenFromCode(code);
    }
  }
  isAssignable(node, isBinding) {
    if (node.type === "TypeCastExpression") {
      return this.isAssignable(node.expression, isBinding);
    } else {
      return super.isAssignable(node, isBinding);
    }
  }
  toAssignable(node, isLHS = false) {
    if (!isLHS && node.type === "AssignmentExpression" && node.left.type === "TypeCastExpression") {
      node.left = this.typeCastToParameter(node.left);
    }
    super.toAssignable(node, isLHS);
  }
  toAssignableListItem(exprList, index, isLHS) {
    const node = exprList[index];
    if (node.type === "TypeCastExpression") {
      exprList[index] = this.typeCastToParameter(node);
    }
    super.toAssignableListItem(exprList, index, isLHS);
  }
  toReferencedList(exprList, isParenthesizedExpr) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];
      if (expr?.type === "TypeCastExpression" && !expr.extra?.parenthesized && (exprList.length > 1 || !isParenthesizedExpr)) {
        this.raise(FlowErrors.TypeCastInPattern, expr.typeAnnotation);
      }
    }
    return exprList;
  }
  parseArrayLike(close, refExpressionErrors) {
    const node = super.parseArrayLike(close, refExpressionErrors);
    if (node.type === "ArrayExpression") {
      this.toReferencedList(node.elements);
    }
    return node;
  }
  isValidLVal(type, disallowCallExpression, isParenthesized, binding) {
    return type === "TypeCastExpression" || super.isValidLVal(type, disallowCallExpression, isParenthesized, binding);
  }
  parseClassProperty(node) {
    if (this.match(10)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }
    return super.parseClassProperty(node);
  }
  parseClassPrivateProperty(node) {
    if (this.match(10)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }
    return super.parseClassPrivateProperty(node);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(10) || super.isClassProperty();
  }
  isNonstaticConstructor(method) {
    return !this.match(10) && super.isNonstaticConstructor(method);
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    if (method.variance) {
      this.unexpected(method.variance.start);
    }
    delete method.variance;
    if (this.match(43)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
    if (method.params && isConstructor) {
      const params = method.params;
      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, method);
      }
    } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
      const params = method.value.params;
      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, method);
      }
    }
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    if (method.variance) {
      this.unexpected(method.variance.start);
    }
    delete method.variance;
    if (this.match(43)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }
  parseClassSuper(node) {
    super.parseClassSuper(node);
    if (node.superClass && (this.match(43) || this.match(47))) {
      node.superTypeArguments = this.flowParseTypeParameterInstantiationInExpression();
    }
    if (this.isContextual(109)) {
      this.next();
      const implemented = node.implements = [];
      do {
        const node = this.startNode();
        node.id = this.flowParseRestrictedIdentifier(true);
        if (this.match(43)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }
        implemented.push(this.finishNode(node, "ClassImplements"));
      } while (this.eat(8));
    }
  }
  checkGetterSetterParams(method) {
    super.checkGetterSetterParams(method);
    const params = this.getObjectOrClassMethodParams(method);
    if (params.length > 0) {
      const param = params[0];
      if (this.isThisParam(param) && method.kind === "get") {
        this.raise(FlowErrors.GetterMayNotHaveThisParam, param);
      } else if (this.isThisParam(param)) {
        this.raise(FlowErrors.SetterMayNotHaveThisParam, param);
      }
    }
  }
  parsePropertyNamePrefixOperator(node) {
    node.variance = this.flowParseVariance();
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    if (prop.variance) {
      this.unexpected(prop.variance.start);
    }
    delete prop.variance;
    let typeParameters;
    if (this.match(43) && !isAccessor) {
      typeParameters = this.flowParseTypeParameterDeclaration();
      if (!this.match(6)) this.unexpected();
    }
    const result = super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
    if (typeParameters) {
      (result.value || result).typeParameters = typeParameters;
    }
    return result;
  }
  parseFunctionParamType(param) {
    if (this.eat(13)) {
      if (param.type !== "Identifier") {
        this.raise(FlowErrors.PatternIsOptional, param);
      }
      if (this.isThisParam(param)) {
        this.raise(FlowErrors.ThisParamMayNotBeOptional, param);
      }
      param.optional = true;
    }
    if (this.match(10)) {
      param.typeAnnotation = this.flowParseTypeAnnotation();
    } else if (this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamAnnotationRequired, param);
    }
    if (this.match(25) && this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamNoDefault, param);
    }
    this.resetEndLocation(param);
    return param;
  }
  parseMaybeDefault(startLoc, left) {
    const node = super.parseMaybeDefault(startLoc, left);
    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(FlowErrors.TypeBeforeInitializer, node.typeAnnotation);
    }
    return node;
  }
  parseImportSpecifierLocal(node, specifier, type) {
    specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
    node.specifiers.push(this.finishImportSpecifier(specifier, type));
  }
  isPotentialImportPhase(isExport) {
    if (super.isPotentialImportPhase(isExport)) return true;
    if (this.isContextual(126)) {
      if (!isExport) return true;
      const ch = this.lookaheadCharCode();
      return ch === 123 || ch === 42;
    }
    return !isExport && this.isContextual(83);
  }
  applyImportPhase(node, isExport, phase, loc) {
    super.applyImportPhase(node, isExport, phase, loc);
    if (isExport) {
      if (!phase && this.match(61)) {
        return;
      }
      node.exportKind = phase === "type" ? phase : "value";
    } else {
      if (phase === "type" && this.match(51)) this.unexpected();
      node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
    }
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    const firstIdent = specifier.imported;
    let specifierTypeKind = null;
    if (firstIdent.type === "Identifier") {
      if (firstIdent.name === "type") {
        specifierTypeKind = "type";
      } else if (firstIdent.name === "typeof") {
        specifierTypeKind = "typeof";
      }
    }
    let isBinding = false;
    if (this.isContextual(89) && !this.isLookaheadContextual("as")) {
      const as_ident = this.parseIdentifier(true);
      if (specifierTypeKind !== null && !tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = as_ident;
        specifier.importKind = specifierTypeKind;
        specifier.local = this.cloneIdentifier(as_ident);
      } else {
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = this.parseIdentifier();
      }
    } else {
      if (specifierTypeKind !== null && tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;
      } else {
        if (importedIsString) {
          throw this.raise(Errors.ImportBindingIsString, specifier, {
            importName: firstIdent.value
          });
        }
        specifier.imported = firstIdent;
        specifier.importKind = null;
      }
      if (this.eatContextual(89)) {
        specifier.local = this.parseIdentifier();
      } else {
        isBinding = true;
        specifier.local = this.cloneIdentifier(specifier.imported);
      }
    }
    const specifierIsTypeImport = hasTypeImportKind(specifier);
    if (isInTypeOnlyImport && specifierIsTypeImport) {
      this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport, specifier);
    }
    if (isInTypeOnlyImport || specifierIsTypeImport) {
      this.checkReservedType(specifier.local.name, specifier.local.start, true);
    }
    if (isBinding && !isInTypeOnlyImport && !specifierIsTypeImport) {
      this.checkReservedWord(specifier.local.name, specifier.start, true, true);
    }
    return this.finishImportSpecifier(specifier, "ImportSpecifier");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 74:
        return this.parseIdentifier(true);
      default:
        return super.parseBindingAtom();
    }
  }
  parseFunctionParams(node, isConstructor) {
    const kind = node.kind;
    if (kind !== "get" && kind !== "set" && this.match(43)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
    super.parseFunctionParams(node, isConstructor);
  }
  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);
    if (this.match(10)) {
      decl.id.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(decl.id);
    }
  }
  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(10)) {
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true;
      node.returnType = this.flowParseTypeAnnotation();
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    }
    return super.parseAsyncArrowFromCallExpression(node, call);
  }
  shouldParseAsyncArrow() {
    return this.match(10) || super.shouldParseAsyncArrow();
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    let state = null;
    let jsx;
    if (this.hasPlugin("jsx") && (this.match(138) || this.match(43))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];
      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }
    if (jsx?.error || this.match(43)) {
      state = state || this.state.clone();
      let typeParameters;
      const arrow = this.tryParse(abort => {
        typeParameters = this.flowParseTypeParameterDeclaration();
        const arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
          const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
          this.resetStartLocationFromNode(result, typeParameters);
          return result;
        });
        if (arrowExpression.extra?.parenthesized) abort();
        const expr = this.maybeUnwrapTypeCastExpression(arrowExpression);
        if (expr.type !== "ArrowFunctionExpression") abort();
        expr.typeParameters = typeParameters;
        this.resetStartLocationFromNode(expr, typeParameters);
        return arrowExpression;
      }, state);
      let arrowExpression = null;
      if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
        if (!arrow.error && !arrow.aborted) {
          if (arrow.node.async) {
            this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction, typeParameters);
          }
          return arrow.node;
        }
        arrowExpression = arrow.node;
      }
      if (jsx?.node) {
        this.state = jsx.failState;
        return jsx.node;
      }
      if (arrowExpression) {
        this.state = arrow.failState;
        return arrowExpression;
      }
      if (jsx?.thrown) throw jsx.error;
      if (arrow.thrown) throw arrow.error;
      throw this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter, typeParameters);
    }
    return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
  }
  parseArrow(node) {
    if (this.match(10)) {
      const result = this.tryParse(() => {
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const typeNode = this.startNode();
        [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        if (this.canInsertSemicolon()) this.unexpected();
        if (!this.match(15)) this.unexpected();
        return typeNode;
      });
      if (result.thrown) return null;
      if (result.error) this.state = result.failState;
      node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
    }
    return super.parseArrow(node);
  }
  shouldParseArrow(params) {
    return this.match(10) || super.shouldParseArrow(params);
  }
  setArrowFunctionParameters(node, params) {
    if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      node.params = params;
    } else {
      super.setArrowFunctionParameters(node, params);
    }
  }
  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    if (isArrowFunction && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
      return;
    }
    for (let i = 0; i < node.params.length; i++) {
      if (this.isThisParam(node.params[i]) && i > 0) {
        this.raise(FlowErrors.ThisParamMustBeFirst, node.params[i]);
      }
    }
    super.checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged);
  }
  parseParenAndDistinguishExpression(canStartArrow) {
    return super.parseParenAndDistinguishExpression(canStartArrow && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
  }
  parseSubscripts(base, startLoc, noCalls) {
    if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.includes(startLoc.index)) {
      this.next();
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      node.arguments = super.parseCallExpressionArguments();
      base = this.finishNode(node, "CallExpression");
    } else if (base.type === "Identifier" && base.name === "async" && this.match(43)) {
      const state = this.state.clone();
      const arrow = this.tryParse(abort => this.parseAsyncArrowWithTypeParameters(startLoc) || abort(), state);
      if (!arrow.error && !arrow.aborted) return arrow.node;
      const result = this.tryParse(() => super.parseSubscripts(base, startLoc, noCalls), state);
      if (result.node && !result.error) return result.node;
      if (arrow.node) {
        this.state = arrow.failState;
        return arrow.node;
      }
      if (result.node) {
        this.state = result.failState;
        return result.node;
      }
      throw arrow.error || result.error;
    }
    return super.parseSubscripts(base, startLoc, noCalls);
  }
  parseSubscript(base, startLoc, noCalls, subscriptState) {
    if (this.match(14) && this.isLookaheadToken_lt()) {
      subscriptState.optionalChainMember = true;
      if (noCalls) {
        subscriptState.stop = true;
        return base;
      }
      this.next();
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
      this.expect(6);
      node.arguments = this.parseCallExpressionArguments();
      node.optional = true;
      return this.finishCallExpression(node, true);
    } else if (!noCalls && this.shouldParseTypes() && (this.match(43) || this.match(47))) {
      const node = this.startNodeAt(startLoc);
      node.callee = base;
      const result = this.tryParse(() => {
        node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
        this.expect(6);
        node.arguments = super.parseCallExpressionArguments();
        if (subscriptState.optionalChainMember) {
          node.optional = false;
        }
        return this.finishCallExpression(node, subscriptState.optionalChainMember);
      });
      if (result.node) {
        if (result.error) this.state = result.failState;
        return result.node;
      }
    }
    return super.parseSubscript(base, startLoc, noCalls, subscriptState);
  }
  parseNewCallee(node) {
    super.parseNewCallee(node);
    let targs = null;
    if (this.shouldParseTypes() && this.match(43)) {
      targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
    }
    node.typeArguments = targs;
  }
  parseAsyncArrowWithTypeParameters(startLoc) {
    const node = this.startNodeAt(startLoc);
    this.parseFunctionParams(node, false);
    if (!this.parseArrow(node)) return;
    return super.parseArrowExpression(node, undefined, true);
  }
  readToken_mult_modulo(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 42 && next === 47 && this.state.hasFlowComment) {
      this.state.hasFlowComment = false;
      this.state.pos += 2;
      this.nextToken();
      return;
    }
    super.readToken_mult_modulo(code);
  }
  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 124 && next === 125) {
      this.finishOp(5, 2);
      return;
    }
    super.readToken_pipe_amp(code);
  }
  parseTopLevel(file, program) {
    const fileNode = super.parseTopLevel(file, program);
    if (this.state.hasFlowComment) {
      this.raise(FlowErrors.UnterminatedFlowComment, this.state.curPosition());
    }
    return fileNode;
  }
  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
      if (this.state.hasFlowComment) {
        throw this.raise(FlowErrors.NestedFlowComment, this.state.startLoc);
      }
      this.hasFlowCommentCompletion();
      const commentSkip = this.skipFlowComment();
      if (commentSkip) {
        this.state.pos += commentSkip;
        this.state.hasFlowComment = true;
      }
      return;
    }
    return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
  }
  skipFlowComment() {
    const {
      pos
    } = this.state;
    let shiftToFirstNonWhiteSpace = 2;
    while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
      shiftToFirstNonWhiteSpace++;
    }
    const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
    const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);
    if (ch2 === 58 && ch3 === 58) {
      return shiftToFirstNonWhiteSpace + 2;
    }
    if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
      return shiftToFirstNonWhiteSpace + 12;
    }
    if (ch2 === 58 && ch3 !== 58) {
      return shiftToFirstNonWhiteSpace;
    }
    return false;
  }
  hasFlowCommentCompletion() {
    const end = this.input.indexOf("*/", this.state.pos);
    if (end === -1) {
      throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
    }
  }
  flowEnumErrorBooleanMemberNotInitialized(loc, names) {
    this.raise(FlowErrors.EnumBooleanMemberNotInitialized, loc, names);
  }
  flowEnumErrorInvalidMemberInitializer(loc, enumContext) {
    return this.raise(!enumContext.explicitType ? FlowErrors.EnumInvalidMemberInitializerUnknownType : enumContext.explicitType === "symbol" ? FlowErrors.EnumInvalidMemberInitializerSymbolType : FlowErrors.EnumInvalidMemberInitializerPrimaryType, loc, enumContext);
  }
  flowEnumErrorNumberMemberNotInitialized(loc, details) {
    this.raise(FlowErrors.EnumNumberMemberNotInitialized, loc, details);
  }
  flowEnumErrorStringMemberInconsistentlyInitialized(node, details) {
    this.raise(FlowErrors.EnumStringMemberInconsistentlyInitialized, node, details);
  }
  flowEnumMemberInit() {
    const startLoc = this.state.startLoc;
    const endOfInit = () => this.match(8) || this.match(4);
    switch (this.state.type) {
      case 131:
        {
          const literal = this.parseNumericLiteral(this.state.value);
          if (endOfInit()) {
            return {
              type: "number",
              loc: literal.start,
              value: literal
            };
          }
          break;
        }
      case 130:
        {
          const literal = this.parseStringLiteral(this.state.value);
          if (endOfInit()) {
            return {
              type: "string",
              loc: literal.start,
              value: literal
            };
          }
          break;
        }
      case 81:
      case 82:
        {
          const literal = this.parseBooleanLiteral(this.match(81));
          if (endOfInit()) {
            return {
              type: "boolean",
              loc: literal.start,
              value: literal
            };
          }
        }
    }
    return {
      type: "invalid",
      loc: startLoc
    };
  }
  flowEnumMemberRaw() {
    const loc = this.state.startLoc;
    const id = this.parseIdentifier(true);
    const init = this.eat(25) ? this.flowEnumMemberInit() : {
      type: "none",
      loc
    };
    return {
      id,
      init
    };
  }
  flowEnumCheckExplicitTypeMismatch(loc, context, expectedType) {
    const {
      explicitType
    } = context;
    if (explicitType === null) {
      return;
    }
    if (explicitType !== expectedType) {
      this.flowEnumErrorInvalidMemberInitializer(loc, context);
    }
  }
  flowEnumMembers({
    enumName,
    explicitType
  }) {
    const seenNames = new Set();
    const members = {
      booleanMembers: [],
      numberMembers: [],
      stringMembers: [],
      defaultedMembers: []
    };
    let hasUnknownMembers = false;
    while (!this.match(4)) {
      if (this.eat(17)) {
        hasUnknownMembers = true;
        break;
      }
      const memberNode = this.startNode();
      const {
        id,
        init
      } = this.flowEnumMemberRaw();
      const memberName = id.name;
      if (memberName === "") {
        continue;
      }
      if (/^[a-z]/.test(memberName)) {
        this.raise(FlowErrors.EnumInvalidMemberName, id, {
          memberName,
          suggestion: memberName[0].toUpperCase() + memberName.slice(1),
          enumName
        });
      }
      if (seenNames.has(memberName)) {
        this.raise(FlowErrors.EnumDuplicateMemberName, id, {
          memberName,
          enumName
        });
      }
      seenNames.add(memberName);
      const context = {
        enumName,
        explicitType,
        memberName
      };
      memberNode.id = id;
      switch (init.type) {
        case "boolean":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "boolean");
            memberNode.init = init.value;
            members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
            break;
          }
        case "number":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "number");
            memberNode.init = init.value;
            members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
            break;
          }
        case "string":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "string");
            memberNode.init = init.value;
            members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
            break;
          }
        case "invalid":
          {
            throw this.flowEnumErrorInvalidMemberInitializer(init.loc, context);
          }
        case "none":
          {
            switch (explicitType) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(init.loc, context);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(init.loc, context);
                break;
              default:
                members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
            }
          }
      }
      if (!this.match(4)) {
        this.expect(8);
      }
    }
    return {
      members,
      hasUnknownMembers
    };
  }
  flowEnumStringMembers(initializedMembers, defaultedMembers, {
    enumName
  }) {
    if (initializedMembers.length === 0) {
      return defaultedMembers;
    } else if (defaultedMembers.length === 0) {
      return initializedMembers;
    } else if (defaultedMembers.length > initializedMembers.length) {
      for (const member of initializedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
          enumName
        });
      }
      return defaultedMembers;
    } else {
      for (const member of defaultedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
          enumName
        });
      }
      return initializedMembers;
    }
  }
  flowEnumParseExplicitType({
    enumName
  }) {
    if (!this.eatContextual(98)) return null;
    if (!tokenIsIdentifier(this.state.type)) {
      throw this.raise(FlowErrors.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
        enumName
      });
    }
    const {
      value
    } = this.state;
    this.next();
    if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
      this.raise(FlowErrors.EnumInvalidExplicitType, this.state.startLoc, {
        enumName,
        invalidEnumType: value
      });
    }
    return value;
  }
  flowEnumBody(node, id) {
    const enumName = id.name;
    const nameLoc = id.start;
    const explicitType = this.flowEnumParseExplicitType({
      enumName
    });
    this.expect(2);
    const {
      members,
      hasUnknownMembers
    } = this.flowEnumMembers({
      enumName,
      explicitType
    });
    node.hasUnknownMembers = hasUnknownMembers;
    switch (explicitType) {
      case "boolean":
        node.explicitType = true;
        node.members = members.booleanMembers;
        this.expect(4);
        return this.finishNode(node, "EnumBooleanBody");
      case "number":
        node.explicitType = true;
        node.members = members.numberMembers;
        this.expect(4);
        return this.finishNode(node, "EnumNumberBody");
      case "string":
        node.explicitType = true;
        node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
          enumName
        });
        this.expect(4);
        return this.finishNode(node, "EnumStringBody");
      case "symbol":
        node.members = members.defaultedMembers;
        this.expect(4);
        return this.finishNode(node, "EnumSymbolBody");
      default:
        {
          const empty = () => {
            node.members = [];
            this.expect(4);
            return this.finishNode(node, "EnumStringBody");
          };
          node.explicitType = false;
          const boolsLen = members.booleanMembers.length;
          const numsLen = members.numberMembers.length;
          const strsLen = members.stringMembers.length;
          const defaultedLen = members.defaultedMembers.length;
          if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
            return empty();
          } else if (!boolsLen && !numsLen) {
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(4);
            return this.finishNode(node, "EnumStringBody");
          } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorBooleanMemberNotInitialized(member.start, {
                enumName,
                memberName: member.id.name
              });
            }
            node.members = members.booleanMembers;
            this.expect(4);
            return this.finishNode(node, "EnumBooleanBody");
          } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorNumberMemberNotInitialized(member.start, {
                enumName,
                memberName: member.id.name
              });
            }
            node.members = members.numberMembers;
            this.expect(4);
            return this.finishNode(node, "EnumNumberBody");
          } else {
            this.raise(FlowErrors.EnumInconsistentMemberValues, nameLoc, {
              enumName
            });
            return empty();
          }
        }
    }
  }
  flowParseEnumDeclaration(node) {
    const id = this.parseIdentifier();
    node.id = id;
    node.body = this.flowEnumBody(this.startNode(), id);
    return this.finishNode(node, "EnumDeclaration");
  }
  jsxParseOpeningElementAfterName(node) {
    if (this.shouldParseTypes()) {
      if (this.match(43) || this.match(47)) {
        node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
      }
    }
    return super.jsxParseOpeningElementAfterName(node);
  }
  isLookaheadToken_lt() {
    const next = this.nextTokenStart();
    if (this.input.charCodeAt(next) === 60) {
      const afterNext = this.input.charCodeAt(next + 1);
      return afterNext !== 60 && afterNext !== 61;
    }
    return false;
  }
  reScan_lt_gt() {
    const {
      type
    } = this.state;
    if (type === 43) {
      this.state.pos -= 1;
      this.readToken_lt();
    } else if (type === 44) {
      this.state.pos -= 1;
      this.readToken_gt();
    }
  }
  reScan_lt() {
    const {
      type
    } = this.state;
    if (type === 47) {
      this.state.pos -= 2;
      this.finishOp(43, 1);
      return 43;
    }
    return type;
  }
  maybeUnwrapTypeCastExpression(node) {
    return node.type === "TypeCastExpression" ? node.expression : node;
  }
};
const entities = {
  __proto__: null,
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
const lineBreak = /\r\n|[\r\n\u2028\u2029]/;
const lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;
    default:
      return false;
  }
}
function hasNewLine(input, start, end) {
  for (let i = start; i < end; i++) {
    if (isNewLine(input.charCodeAt(i))) {
      return true;
    }
  }
  return false;
}
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
const skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;
    default:
      return false;
  }
}
const JsxErrorTemplates = {
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
  MissingClosingTagElement: ({
    openingTagName
  }) => `Expected corresponding JSX closing tag for <${openingTagName}>.`,
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnexpectedToken: ({
    unexpected,
    HTMLEntity
  }) => `Unexpected token \`${unexpected}\`. Did you mean \`${HTMLEntity}\` or \`{'${unexpected}'}\`?`,
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
  UnterminatedJsxContent: "Unterminated JSX contents.",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
};
const JsxErrors = ParseErrorEnum`jsx`(JsxErrorTemplates);
function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}
function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }
  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }
  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }
  throw new Error("Node had unexpected type: " + object.type);
}
var jsx = superClass => class JSXParserMixin extends superClass {
  jsxReadToken() {
    let out = "";
    let chunkStart = this.state.pos;
    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(JsxErrors.UnterminatedJsxContent, this.state.startLoc);
      }
      const ch = this.input.charCodeAt(this.state.pos);
      switch (ch) {
        case 60:
        case 123:
          if (this.state.pos === this.state.start) {
            if (ch === 60 && this.state.canStartJSXElement) {
              ++this.state.pos;
              this.finishToken(138);
            } else {
              super.getTokenFromCode(ch);
            }
            return;
          }
          out += this.input.slice(chunkStart, this.state.pos);
          this.finishToken(137, out);
          return;
        case 38:
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
          break;
        case 62:
        case 125:
          this.raise(JsxErrors.UnexpectedToken, this.state.curPosition(), {
            unexpected: this.input[this.state.pos],
            HTMLEntity: ch === 125 ? "&rbrace;" : "&gt;"
          });
        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(true);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
      }
    }
  }
  jsxReadNewLine(normalizeCRLF) {
    const ch = this.input.charCodeAt(this.state.pos);
    let out;
    ++this.state.pos;
    if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
      ++this.state.pos;
      out = normalizeCRLF ? "\n" : "\r\n";
    } else {
      out = String.fromCharCode(ch);
    }
    ++this.state.curLine;
    this.state.lineStart = this.state.pos;
    return out;
  }
  jsxReadString(quote) {
    let out = "";
    let chunkStart = ++this.state.pos;
    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(Errors.UnterminatedString, this.state.startLoc);
      }
      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;
      if (ch === 38) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadNewLine(false);
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
    out += this.input.slice(chunkStart, this.state.pos++);
    this.finishToken(130, out);
  }
  jsxReadEntity() {
    const startPos = ++this.state.pos;
    if (this.codePointAtPos(this.state.pos) === 35) {
      ++this.state.pos;
      let radix = 10;
      if (this.codePointAtPos(this.state.pos) === 120) {
        radix = 16;
        ++this.state.pos;
      }
      const codePoint = this.readInt(radix, undefined, false, "bail");
      if (codePoint !== null && this.codePointAtPos(this.state.pos) === 59) {
        ++this.state.pos;
        return String.fromCodePoint(codePoint);
      }
    } else {
      let count = 0;
      let semi = false;
      while (count++ < 10 && this.state.pos < this.length && !(semi = this.codePointAtPos(this.state.pos) === 59)) {
        ++this.state.pos;
      }
      if (semi) {
        const desc = this.input.slice(startPos, this.state.pos);
        const entity = entities[desc];
        ++this.state.pos;
        if (entity) {
          return entity;
        }
      }
    }
    this.state.pos = startPos;
    return "&";
  }
  jsxReadWord() {
    let ch;
    const start = this.state.pos;
    do {
      ch = this.input.charCodeAt(++this.state.pos);
    } while (isIdentifierChar(ch) || ch === 45);
    this.finishToken(136, this.input.slice(start, this.state.pos));
  }
  jsxParseIdentifier() {
    const node = this.startNode();
    if (this.match(136)) {
      node.name = this.state.value;
    } else if (tokenIsKeyword(this.state.type)) {
      node.name = tokenLabelName(this.state.type);
    } else {
      this.unexpected();
    }
    this.next();
    return this.finishNode(node, "JSXIdentifier");
  }
  jsxParseNamespacedName() {
    const startLoc = this.state.startLoc;
    const name = this.jsxParseIdentifier();
    if (!this.eat(10)) return name;
    const node = this.startNodeAt(startLoc);
    node.namespace = name;
    node.name = this.jsxParseIdentifier();
    return this.finishNode(node, "JSXNamespacedName");
  }
  jsxParseElementName() {
    const startLoc = this.state.startLoc;
    let node = this.jsxParseNamespacedName();
    if (node.type === "JSXNamespacedName") {
      return node;
    }
    while (this.eat(12)) {
      const newNode = this.startNodeAt(startLoc);
      newNode.object = node;
      newNode.property = this.jsxParseIdentifier();
      node = this.finishNode(newNode, "JSXMemberExpression");
    }
    return node;
  }
  jsxParseAttributeValue() {
    let node;
    switch (this.state.type) {
      case 2:
        node = this.startNode();
        this.setContext(types.brace);
        this.next();
        node = this.jsxParseExpressionContainer(node, types.j_oTag);
        if (node.expression.type === "JSXEmptyExpression") {
          this.raise(JsxErrors.AttributeIsEmpty, node);
        }
        return node;
      case 138:
      case 130:
        return this.parseExprAtom();
      default:
        throw this.raise(JsxErrors.UnsupportedJsxValue, this.state.startLoc);
    }
  }
  jsxParseEmptyExpression() {
    const node = this.startNodeAt(this.state.lastTokEndLoc);
    return this.finishNodeAt(node, "JSXEmptyExpression", this.state.startLoc);
  }
  jsxParseSpreadChild(node) {
    this.next();
    node.expression = this.parseExpression();
    this.setContext(types.j_expr);
    this.state.canStartJSXElement = true;
    this.expect(4);
    return this.finishNode(node, "JSXSpreadChild");
  }
  jsxParseExpressionContainer(node, previousContext) {
    if (this.match(4)) {
      node.expression = this.jsxParseEmptyExpression();
    } else {
      const expression = this.parseExpression();
      if (expression.type === "SequenceExpression" && !expression.extra?.parenthesized) {
        this.raise(JsxErrors.UnexpectedSequenceExpression, expression.expressions[1]);
      }
      node.expression = expression;
    }
    this.setContext(previousContext);
    this.state.canStartJSXElement = true;
    this.expect(4);
    return this.finishNode(node, "JSXExpressionContainer");
  }
  jsxParseAttribute() {
    if (this.match(2)) {
      const node = this.startNode();
      this.setContext(types.brace);
      this.next();
      this.expect(17);
      node.argument = this.parseMaybeAssignAllowIn();
      this.setContext(types.j_oTag);
      this.state.canStartJSXElement = true;
      this.expect(4);
      return this.finishNode(node, "JSXSpreadAttribute");
    }
    const node = this.startNode();
    node.name = this.jsxParseNamespacedName();
    node.value = this.eat(25) ? this.jsxParseAttributeValue() : null;
    return this.finishNode(node, "JSXAttribute");
  }
  jsxParseOpeningElementAt(startLoc) {
    if (this.eat(139)) {
      const node = this.startNodeAt(startLoc);
      return this.finishNode(node, "JSXOpeningFragment");
    }
    const node = this.startNodeAt(startLoc);
    node.name = this.jsxParseElementName();
    return this.jsxParseOpeningElementAfterName(node);
  }
  jsxParseOpeningElementAfterName(node) {
    const attributes = [];
    while (!this.match(52) && !this.match(139)) {
      attributes.push(this.jsxParseAttribute());
    }
    node.attributes = attributes;
    node.selfClosing = this.eat(52);
    this.expect(139);
    return this.finishNode(node, "JSXOpeningElement");
  }
  jsxParseClosingElementAt(startLoc) {
    if (this.eat(139)) {
      const node = this.startNodeAt(startLoc);
      return this.finishNode(node, "JSXClosingFragment");
    }
    const node = this.startNodeAt(startLoc);
    node.name = this.jsxParseElementName();
    this.expect(139);
    return this.finishNode(node, "JSXClosingElement");
  }
  jsxParseElementAt(startLoc) {
    const node = this.startNodeAt(startLoc);
    const children = [];
    const openingElement = this.jsxParseOpeningElementAt(startLoc);
    let closingElement = null;
    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.state.type) {
          case 138:
            startLoc = this.state.startLoc;
            this.next();
            if (this.eat(52)) {
              this.setLoc(startLoc);
              closingElement = this.jsxParseClosingElementAt(startLoc);
              break contents;
            }
            children.push(this.jsxParseElementAt(startLoc));
            break;
          case 137:
            children.push(this.parseLiteral(this.state.value, "JSXText"));
            break;
          case 2:
            {
              const node = this.startNode();
              this.setContext(types.brace);
              this.next();
              if (this.match(17)) {
                children.push(this.jsxParseSpreadChild(node));
              } else {
                children.push(this.jsxParseExpressionContainer(node, types.j_expr));
              }
              break;
            }
          default:
            this.unexpected();
        }
      }
      if (isFragment(openingElement) && !isFragment(closingElement) && closingElement !== null) {
        this.raise(JsxErrors.MissingClosingTagFragment, closingElement);
      } else if (!isFragment(openingElement) && isFragment(closingElement)) {
        this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
          openingTagName: getQualifiedJSXName(openingElement.name)
        });
      } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
            openingTagName: getQualifiedJSXName(openingElement.name)
          });
        }
      }
    }
    if (isFragment(openingElement)) {
      node.openingFragment = openingElement;
      node.closingFragment = closingElement;
    } else {
      node.openingElement = openingElement;
      node.closingElement = closingElement;
    }
    node.children = children;
    if (this.match(43)) {
      throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements, this.state.startLoc);
    }
    return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
  }
  jsxParseElement() {
    const startLoc = this.state.startLoc;
    this.next();
    return this.jsxParseElementAt(startLoc);
  }
  setContext(newContext) {
    const {
      context
    } = this.state;
    context[context.length - 1] = newContext;
  }
  parseExprAtom(refExpressionErrors) {
    if (this.match(138)) {
      return this.jsxParseElement();
    } else if (this.match(43) && this.input.charCodeAt(this.state.pos) !== 33) {
      this.replaceToken(138);
      return this.jsxParseElement();
    } else {
      return super.parseExprAtom(refExpressionErrors);
    }
  }
  skipSpace() {
    const curContext = this.curContext();
    if (!curContext.preserveSpace) super.skipSpace();
  }
  getTokenFromCode(code) {
    const context = this.curContext();
    if (context === types.j_expr) {
      this.jsxReadToken();
      return;
    }
    if (context === types.j_oTag || context === types.j_cTag) {
      if (isIdentifierStart(code)) {
        this.jsxReadWord();
        return;
      }
      if (code === 62) {
        ++this.state.pos;
        this.finishToken(139);
        return;
      }
      if ((code === 34 || code === 39) && context === types.j_oTag) {
        this.jsxReadString(code);
        return;
      }
    }
    if (code === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
      ++this.state.pos;
      this.finishToken(138);
      return;
    }
    super.getTokenFromCode(code);
  }
  updateContext(prevType) {
    const {
      context,
      type
    } = this.state;
    if (type === 52 && prevType === 138) {
      context.splice(-2, 2, types.j_cTag);
      this.state.canStartJSXElement = false;
    } else if (type === 138) {
      context.push(types.j_oTag);
    } else if (type === 139) {
      const out = context[context.length - 1];
      if (out === types.j_oTag && prevType === 52 || out === types.j_cTag) {
        context.pop();
        this.state.canStartJSXElement = context[context.length - 1] === types.j_expr;
      } else {
        this.setContext(types.j_expr);
        this.state.canStartJSXElement = true;
      }
    } else {
      this.state.canStartJSXElement = tokenComesBeforeExpression(type);
    }
  }
};
class TypeScriptScope extends Scope {
  tsNames = new Map();
}
class TypeScriptScopeHandler extends ScopeHandler {
  importsStack = [];
  createScope(flags) {
    this.importsStack.push(new Set());
    return new TypeScriptScope(flags);
  }
  enter(flags) {
    if (flags === 1024) {
      this.importsStack.push(new Set());
    }
    super.enter(flags);
  }
  exit() {
    const flags = super.exit();
    if (flags === 1024) {
      this.importsStack.pop();
    }
    return flags;
  }
  hasImport(name, allowShadow) {
    const len = this.importsStack.length;
    if (this.importsStack[len - 1].has(name)) {
      return true;
    }
    if (!allowShadow && len > 1) {
      for (let i = 0; i < len - 1; i++) {
        if (this.importsStack[i].has(name)) return true;
      }
    }
    return false;
  }
  declareName(name, bindingType, loc) {
    if (bindingType & 4096) {
      if (this.hasImport(name, true)) {
        this.parser.raise(Errors.VarRedeclaration, loc, {
          identifierName: name
        });
      }
      this.importsStack[this.importsStack.length - 1].add(name);
      return;
    }
    const scope = this.currentScope();
    let type = scope.tsNames.get(name) || 0;
    if (bindingType & 1024) {
      this.maybeExportDefined(scope, name);
      scope.tsNames.set(name, type | 16);
      return;
    }
    super.declareName(name, bindingType, loc);
    if (bindingType & 2) {
      if (!(bindingType & 1)) {
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        this.maybeExportDefined(scope, name);
      }
      type = type | 1;
    }
    if (bindingType & 256) {
      type = type | 2;
    }
    if (bindingType & 512) {
      type = type | 4;
    }
    if (bindingType & 128) {
      type = type | 8;
    }
    if (type) scope.tsNames.set(name, type);
  }
  isRedeclaredInScope(scope, name, bindingType) {
    const type = scope.tsNames.get(name);
    if ((type & 2) > 0) {
      if (bindingType & 256) {
        const isConst = !!(bindingType & 512);
        const wasConst = (type & 4) > 0;
        return isConst !== wasConst;
      }
      return true;
    }
    if (bindingType & 128 && (type & 8) > 0) {
      if (scope.names.get(name) & 2) {
        return !!(bindingType & 1);
      } else {
        return false;
      }
    }
    if (bindingType & 2 && (type & 1) > 0) {
      return true;
    }
    return super.isRedeclaredInScope(scope, name, bindingType);
  }
  checkLocalExport(id) {
    const {
      name
    } = id;
    if (this.hasImport(name)) return;
    const len = this.scopeStack.length;
    for (let i = len - 1; i >= 0; i--) {
      const scope = this.scopeStack[i];
      const type = scope.tsNames.get(name);
      if ((type & 1) > 0 || (type & 16) > 0) {
        return;
      }
    }
    super.checkLocalExport(id);
  }
}
class ProductionParameterHandler {
  stacks = [];
  enter(flags) {
    this.stacks.push(flags);
  }
  exit() {
    this.stacks.pop();
  }
  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }
  get hasAwait() {
    return (this.currentFlags() & 2) > 0;
  }
  get hasYield() {
    return (this.currentFlags() & 1) > 0;
  }
  get hasReturn() {
    return (this.currentFlags() & 4) > 0;
  }
  get hasIn() {
    return (this.currentFlags() & 8) > 0;
  }
  get inFSharpPipelineDirectBody() {
    return (this.currentFlags() & 16) === 0;
  }
}
function functionFlags(isAsync, isGenerator) {
  return (isAsync ? 2 : 0) | (isGenerator ? 1 : 0);
}
class BaseParser {
  sawUnambiguousESM = false;
  ambiguousScriptDifferentAst = false;
  sourceToOffsetPos(sourcePos) {
    return sourcePos + this.startIndex;
  }
  offsetToSourcePos(offsetPos) {
    return offsetPos - this.startIndex;
  }
  hasPlugin(pluginConfig) {
    if (typeof pluginConfig === "string") {
      return this.plugins.has(pluginConfig);
    } else {
      const [pluginName, pluginOptions] = pluginConfig;
      if (!this.hasPlugin(pluginName)) {
        return false;
      }
      const actualOptions = this.plugins.get(pluginName);
      for (const key of Object.keys(pluginOptions)) {
        if (actualOptions?.[key] !== pluginOptions[key]) {
          return false;
        }
      }
      return true;
    }
  }
  getPluginOption(plugin, name) {
    return this.plugins.get(plugin)?.[name];
  }
}
function setTrailingComments(node, comments) {
  if (node.trailingComments === undefined) {
    node.trailingComments = comments;
  } else {
    node.trailingComments.unshift(...comments);
  }
}
function setLeadingComments(node, comments) {
  if (node.leadingComments === undefined) {
    node.leadingComments = comments;
  } else {
    node.leadingComments.unshift(...comments);
  }
}
function setInnerComments(node, comments) {
  if (node.innerComments === undefined) {
    node.innerComments = comments;
  } else {
    node.innerComments.unshift(...comments);
  }
}
function adjustInnerComments(node, elements, commentWS) {
  let lastElement = null;
  let i = elements.length;
  while (lastElement === null && i > 0) {
    lastElement = elements[--i];
  }
  if (lastElement === null || lastElement.start > commentWS.start) {
    setInnerComments(node, commentWS.comments);
  } else {
    setTrailingComments(lastElement, commentWS.comments);
  }
}
class CommentsParser extends BaseParser {
  addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    const {
      commentsLen
    } = this.state;
    if (this.comments.length !== commentsLen) {
      this.comments.length = commentsLen;
    }
    this.comments.push(comment);
    this.state.commentsLen++;
  }
  processComment(node) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;
    const lastCommentWS = commentStack[i];
    if (lastCommentWS.start === node.end) {
      lastCommentWS.leadingNode = node;
      i--;
    }
    const nodeStart = node.start;
    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;
      if (commentEnd > nodeStart) {
        commentWS.containingNode = node;
        this.finalizeComment(commentWS);
        commentStack.splice(i, 1);
      } else {
        if (commentEnd === nodeStart) {
          commentWS.trailingNode = node;
        }
        break;
      }
    }
  }
  finalizeComment(commentWS) {
    const {
      comments
    } = commentWS;
    if (commentWS.leadingNode !== null || commentWS.trailingNode !== null) {
      if (commentWS.leadingNode !== null) {
        setTrailingComments(commentWS.leadingNode, comments);
      }
      if (commentWS.trailingNode !== null) {
        setLeadingComments(commentWS.trailingNode, comments);
      }
    } else {
      const node = commentWS.containingNode;
      const commentStart = commentWS.start;
      if (this.input.charCodeAt(this.offsetToSourcePos(commentStart) - 1) === 44) {
        switch (node.type) {
          case "ObjectExpression":
          case "ObjectPattern":
            adjustInnerComments(node, node.properties, commentWS);
            break;
          case "CallExpression":
          case "NewExpression":
          case "OptionalCallExpression":
            adjustInnerComments(node, node.arguments, commentWS);
            break;
          case "ImportExpression":
            adjustInnerComments(node, [node.source, node.options ?? null], commentWS);
            break;
          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
          case "TSTypeParameterDeclaration":
            adjustInnerComments(node, node.params, commentWS);
            break;
          case "ArrayExpression":
          case "ArrayPattern":
            adjustInnerComments(node, node.elements, commentWS);
            break;
          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            adjustInnerComments(node, node.specifiers, commentWS);
            break;
          case "TSEnumBody":
            adjustInnerComments(node, node.members, commentWS);
            break;
          case "TSInterfaceBody":
            adjustInnerComments(node, node.body, commentWS);
            break;
          default:
            {
              setInnerComments(node, comments);
            }
        }
      } else {
        setInnerComments(node, comments);
      }
    }
  }
  finalizeRemainingComments() {
    const {
      commentStack
    } = this.state;
    for (let i = commentStack.length - 1; i >= 0; i--) {
      this.finalizeComment(commentStack[i]);
    }
    this.state.commentStack = [];
  }
  resetPreviousNodeTrailingComments(node) {
    const {
      commentStack
    } = this.state;
    const {
      length
    } = commentStack;
    if (length === 0) return;
    const commentWS = commentStack[length - 1];
    if (commentWS.leadingNode === node) {
      commentWS.leadingNode = null;
    }
  }
  takeSurroundingComments(node, start, end) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;
    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;
      const commentStart = commentWS.start;
      if (commentStart === end) {
        commentWS.leadingNode = node;
      } else if (commentEnd === start) {
        commentWS.trailingNode = node;
      } else if (commentEnd < start) {
        break;
      }
    }
  }
}
class State {
  flags = 2048;
  get strict() {
    return (this.flags & 1) > 0;
  }
  set strict(v) {
    if (v) this.flags |= 1;else this.flags &= -2;
  }
  startIndex;
  curLine;
  lineStart;
  startLoc;
  endLoc;
  init({
    strictMode,
    sourceType,
    startIndex,
    startLine,
    startColumn
  }) {
    this.strict = strictMode === false ? false : strictMode === true ? true : sourceType === "module";
    this.startIndex = startIndex;
    this.curLine = startLine;
    this.lineStart = -startColumn;
    this.startLoc = this.endLoc = new Position(startLine, startColumn, startIndex);
  }
  errors = [];
  noArrowAt = [];
  noArrowParamsConversionAt = [];
  get canStartArrow() {
    return (this.flags & 2) > 0;
  }
  set canStartArrow(v) {
    if (v) this.flags |= 2;else this.flags &= -3;
  }
  get inType() {
    return (this.flags & 4) > 0;
  }
  set inType(v) {
    if (v) this.flags |= 4;else this.flags &= -5;
  }
  get noAnonFunctionType() {
    return (this.flags & 8) > 0;
  }
  set noAnonFunctionType(v) {
    if (v) this.flags |= 8;else this.flags &= -9;
  }
  get hasFlowComment() {
    return (this.flags & 16) > 0;
  }
  set hasFlowComment(v) {
    if (v) this.flags |= 16;else this.flags &= -17;
  }
  get isAmbientContext() {
    return (this.flags & 32) > 0;
  }
  set isAmbientContext(v) {
    if (v) this.flags |= 32;else this.flags &= -33;
  }
  get inAbstractClass() {
    return (this.flags & 64) > 0;
  }
  set inAbstractClass(v) {
    if (v) this.flags |= 64;else this.flags &= -65;
  }
  get inDisallowConditionalTypesContext() {
    return (this.flags & 128) > 0;
  }
  set inDisallowConditionalTypesContext(v) {
    if (v) this.flags |= 128;else this.flags &= -129;
  }
  get inConditionalConsequent() {
    return (this.flags & 256) > 0;
  }
  set inConditionalConsequent(v) {
    if (v) this.flags |= 256;else this.flags &= -257;
  }
  get inHackPipelineBody() {
    return (this.flags & 512) > 0;
  }
  set inHackPipelineBody(v) {
    if (v) this.flags |= 512;else this.flags &= -513;
  }
  get seenTopicReference() {
    return (this.flags & 1024) > 0;
  }
  set seenTopicReference(v) {
    if (v) this.flags |= 1024;else this.flags &= -1025;
  }
  labels = [];
  commentsLen = 0;
  commentStack = [];
  pos = 0;
  type = 135;
  value = null;
  start = 0;
  end = 0;
  lastTokEndLoc = null;
  lastTokStartLoc = null;
  context = [types.brace];
  get canStartJSXElement() {
    return (this.flags & 2048) > 0;
  }
  set canStartJSXElement(v) {
    if (v) this.flags |= 2048;else this.flags &= -2049;
  }
  get containsEsc() {
    return (this.flags & 4096) > 0;
  }
  set containsEsc(v) {
    if (v) this.flags |= 4096;else this.flags &= -4097;
  }
  firstInvalidTemplateEscapePos = null;
  get hasTopLevelAwait() {
    return (this.flags & 8192) > 0;
  }
  set hasTopLevelAwait(v) {
    if (v) this.flags |= 8192;else this.flags &= -8193;
  }
  strictErrors = new Map();
  tokensLength = 0;
  curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
  }
  clone() {
    const state = new State();
    state.flags = this.flags;
    state.startIndex = this.startIndex;
    state.curLine = this.curLine;
    state.lineStart = this.lineStart;
    state.startLoc = this.startLoc;
    state.endLoc = this.endLoc;
    state.errors = this.errors.slice();
    state.noArrowAt = this.noArrowAt.slice();
    state.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice();
    state.labels = this.labels.slice();
    state.commentsLen = this.commentsLen;
    state.commentStack = this.commentStack.slice();
    state.pos = this.pos;
    state.type = this.type;
    state.value = this.value;
    state.start = this.start;
    state.end = this.end;
    state.lastTokEndLoc = this.lastTokEndLoc;
    state.lastTokStartLoc = this.lastTokStartLoc;
    state.context = this.context.slice();
    state.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos;
    state.strictErrors = this.strictErrors;
    state.tokensLength = this.tokensLength;
    return state;
  }
}
var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const forbiddenNumericSeparatorSiblings = {
  decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
  hex: new Set([46, 88, 95, 120])
};
const isAllowedNumericSeparatorSibling = {
  bin: ch => ch === 48 || ch === 49,
  oct: ch => ch >= 48 && ch <= 55,
  dec: ch => ch >= 48 && ch <= 57,
  hex: ch => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
};
function readStringContents(type, input, pos, lineStart, curLine, errors) {
  const initialPos = pos;
  const initialLineStart = lineStart;
  const initialCurLine = curLine;
  let out = "";
  let firstInvalidLoc = null;
  let chunkStart = pos;
  const {
    length
  } = input;
  for (;;) {
    if (pos >= length) {
      errors.unterminated(initialPos, initialLineStart, initialCurLine);
      out += input.slice(chunkStart, pos);
      break;
    }
    const ch = input.charCodeAt(pos);
    if (isStringEnd(type, ch, input, pos)) {
      out += input.slice(chunkStart, pos);
      break;
    }
    if (ch === 92) {
      out += input.slice(chunkStart, pos);
      const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
      if (res.ch === null && !firstInvalidLoc) {
        firstInvalidLoc = {
          pos,
          lineStart,
          curLine
        };
      } else {
        out += res.ch;
      }
      ({
        pos,
        lineStart,
        curLine
      } = res);
      chunkStart = pos;
    } else if (ch === 8232 || ch === 8233) {
      ++pos;
      ++curLine;
      lineStart = pos;
    } else if (ch === 10 || ch === 13) {
      if (type === "template") {
        out += input.slice(chunkStart, pos) + "\n";
        ++pos;
        if (ch === 13 && input.charCodeAt(pos) === 10) {
          ++pos;
        }
        ++curLine;
        chunkStart = lineStart = pos;
      } else {
        errors.unterminated(initialPos, initialLineStart, initialCurLine);
      }
    } else {
      ++pos;
    }
  }
  return {
    pos,
    str: out,
    firstInvalidLoc,
    lineStart,
    curLine
  };
}
function isStringEnd(type, ch, input, pos) {
  if (type === "template") {
    return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
  }
  return ch === (type === "double" ? 34 : 39);
}
function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
  const throwOnInvalid = !inTemplate;
  pos++;
  const res = ch => ({
    pos,
    ch,
    lineStart,
    curLine
  });
  const ch = input.charCodeAt(pos++);
  switch (ch) {
    case 110:
      return res("\n");
    case 114:
      return res("\r");
    case 120:
      {
        let code;
        ({
          code,
          pos
        } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
        return res(code === null ? null : String.fromCharCode(code));
      }
    case 117:
      {
        let code;
        ({
          code,
          pos
        } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
        return res(code === null ? null : String.fromCodePoint(code));
      }
    case 116:
      return res("\t");
    case 98:
      return res("\b");
    case 118:
      return res("\u000b");
    case 102:
      return res("\f");
    case 13:
      if (input.charCodeAt(pos) === 10) {
        ++pos;
      }
    case 10:
      lineStart = pos;
      ++curLine;
    case 8232:
    case 8233:
      return res("");
    case 56:
    case 57:
      if (inTemplate) {
        return res(null);
      } else {
        errors.strictNumericEscape(pos - 1, lineStart, curLine);
      }
    default:
      if (ch >= 48 && ch <= 55) {
        const startPos = pos - 1;
        const match = /^[0-7]+/.exec(input.slice(startPos, pos + 2));
        let octalStr = match[0];
        let octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        pos += octalStr.length - 1;
        const next = input.charCodeAt(pos);
        if (octalStr !== "0" || next === 56 || next === 57) {
          if (inTemplate) {
            return res(null);
          } else {
            errors.strictNumericEscape(startPos, lineStart, curLine);
          }
        }
        return res(String.fromCharCode(octal));
      }
      return res(String.fromCharCode(ch));
  }
}
function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
  const initialPos = pos;
  let n;
  ({
    n,
    pos
  } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
  if (n === null) {
    if (throwOnInvalid) {
      errors.invalidEscapeSequence(initialPos, lineStart, curLine);
    } else {
      pos = initialPos - 1;
    }
  }
  return {
    code: n,
    pos
  };
}
function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
  const start = pos;
  const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
  const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
  let invalid = false;
  let total = 0;
  for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    const code = input.charCodeAt(pos);
    let val;
    if (code === 95 && allowNumSeparator !== "bail") {
      const prev = input.charCodeAt(pos - 1);
      const next = input.charCodeAt(pos + 1);
      if (!allowNumSeparator) {
        if (bailOnError) return {
          n: null,
          pos
        };
        errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
      } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
        if (bailOnError) return {
          n: null,
          pos
        };
        errors.unexpectedNumericSeparator(pos, lineStart, curLine);
      }
      ++pos;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (_isDigit(code)) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      if (val <= 9 && bailOnError) {
        return {
          n: null,
          pos
        };
      } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
        val = 0;
      } else if (forceLen) {
        val = 0;
        invalid = true;
      } else {
        break;
      }
    }
    ++pos;
    total = total * radix + val;
  }
  if (pos === start || len != null && pos - start !== len || invalid) {
    return {
      n: null,
      pos
    };
  }
  return {
    n: total,
    pos
  };
}
function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
  const ch = input.charCodeAt(pos);
  let code;
  if (ch === 123) {
    ++pos;
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
    ++pos;
    if (code !== null && code > 0x10ffff) {
      if (throwOnInvalid) {
        errors.invalidCodePoint(pos, lineStart, curLine);
      } else {
        return {
          code: null,
          pos
        };
      }
    }
  } else {
    ({
      code,
      pos
    } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
  }
  return {
    code,
    pos
  };
}
function buildPosition(pos, lineStart, curLine) {
  return new Position(curLine, pos - lineStart, pos);
}
const VALID_REGEX_FLAGS = new Set([103, 109, 115, 105, 121, 117, 100, 118]);
class Token {
  constructor(state) {
    const startIndex = state.startIndex || 0;
    this.type = state.type;
    this.value = state.value;
    this.start = startIndex + state.start;
    this.end = startIndex + state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  }
}
let locDataCache;
function resetLocData() {
  const data = locDataCache;
  locDataCache = undefined;
  return data;
}
class Tokenizer extends CommentsParser {
  isLookahead;
  tokens = [];
  constructor(options, input) {
    super();
    this.state = new State();
    this.state.init(options);
    this.input = input;
    this.length = input.length;
    this.comments = [];
    this.isLookahead = false;
    if (!locDataCache || locDataCache.length < (this.length + 1) * 2 || options.locations === "packed") {
      locDataCache = new Uint32Array((this.length + 1) * 2);
    }
    this.locData = locDataCache;
  }
  setLoc(loc) {
    const dataIndex = this.offsetToSourcePos(loc.index);
    this.locData[dataIndex * 2] = loc.line;
    this.locData[dataIndex * 2 + 1] = loc.column;
  }
  getLoc(locIndex) {
    const dataIndex = this.offsetToSourcePos(locIndex);
    const loc = new Position(this.locData[dataIndex * 2], this.locData[dataIndex * 2 + 1], locIndex);
    return loc;
  }
  pushToken(token) {
    this.tokens.length = this.state.tokensLength;
    this.tokens.push(token);
    ++this.state.tokensLength;
  }
  next() {
    this.checkKeywordEscapes();
    if (this.optionFlags & 512) {
      this.pushToken(new Token(this.state));
    }
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }
  eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }
  match(type) {
    return this.state.type === type;
  }
  createLookaheadState(state) {
    return {
      pos: state.pos,
      value: null,
      type: state.type,
      start: state.start,
      end: state.end,
      context: [this.curContext()],
      inType: state.inType,
      startLoc: state.startLoc,
      lastTokEndLoc: state.lastTokEndLoc,
      curLine: state.curLine,
      lineStart: state.lineStart,
      curPosition: state.curPosition
    };
  }
  lookahead() {
    const old = this.state;
    this.state = this.createLookaheadState(old);
    this.isLookahead = true;
    this.nextToken();
    this.isLookahead = false;
    const curr = this.state;
    this.state = old;
    return curr;
  }
  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }
  nextTokenStartSince(pos) {
    skipWhiteSpace.lastIndex = pos;
    return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos;
  }
  lookaheadCharCode() {
    return this.lookaheadCharCodeSince(this.state.pos);
  }
  lookaheadCharCodeSince(pos) {
    return this.input.charCodeAt(this.nextTokenStartSince(pos));
  }
  nextTokenInLineStart() {
    return this.nextTokenInLineStartSince(this.state.pos);
  }
  nextTokenInLineStartSince(pos) {
    skipWhiteSpaceInLine.lastIndex = pos;
    return skipWhiteSpaceInLine.test(this.input) ? skipWhiteSpaceInLine.lastIndex : pos;
  }
  lookaheadInLineCharCode() {
    return this.input.charCodeAt(this.nextTokenInLineStart());
  }
  codePointAtPos(pos) {
    let cp = this.input.charCodeAt(pos);
    if ((cp & 0xfc00) === 0xd800 && ++pos < this.input.length) {
      const trail = this.input.charCodeAt(pos);
      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }
    return cp;
  }
  setStrict(strict) {
    this.state.strict = strict;
    if (strict) {
      this.state.strictErrors.forEach(([toParseError, at]) => this.raise(toParseError, at));
      this.state.strictErrors.clear();
    }
  }
  curContext() {
    return this.state.context[this.state.context.length - 1];
  }
  nextToken() {
    this.skipSpace();
    this.state.start = this.state.pos;
    if (!this.isLookahead) this.state.startLoc = this.state.curPosition();
    if (this.state.pos >= this.length) {
      this.finishToken(135);
      return;
    }
    this.getTokenFromCode(this.codePointAtPos(this.state.pos));
  }
  skipBlockComment(commentEnd) {
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    const start = this.state.pos;
    const end = this.input.indexOf(commentEnd, start + 2);
    if (end === -1) {
      throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
    }
    this.state.pos = end + commentEnd.length;
    lineBreakG.lastIndex = start + 2;
    while (lineBreakG.test(this.input) && lineBreakG.lastIndex <= end) {
      ++this.state.curLine;
      this.state.lineStart = lineBreakG.lastIndex;
    }
    if (this.isLookahead) return;
    const comment = {
      type: "CommentBlock",
      value: this.input.slice(start + 2, end),
      start: this.sourceToOffsetPos(start),
      end: this.sourceToOffsetPos(end + commentEnd.length),
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.optionFlags & 512) this.pushToken(comment);
    return comment;
  }
  skipLineComment(startSkip) {
    const start = this.state.pos;
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    let ch = this.input.charCodeAt(this.state.pos += startSkip);
    if (this.state.pos < this.length) {
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }
    if (this.isLookahead) return;
    const end = this.state.pos;
    const value = this.input.slice(start + startSkip, end);
    const comment = {
      type: "CommentLine",
      value,
      start: this.sourceToOffsetPos(start),
      end: this.sourceToOffsetPos(end),
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.optionFlags & 512) this.pushToken(comment);
    return comment;
  }
  skipSpace() {
    const spaceStart = this.state.pos;
    const comments = this.optionFlags & 8192 ? [] : null;
    loop: while (this.state.pos < this.length) {
      const ch = this.input.charCodeAt(this.state.pos);
      switch (ch) {
        case 32:
        case 160:
        case 9:
          ++this.state.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;
        case 47:
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              {
                const comment = this.skipBlockComment("*/");
                if (comment !== undefined) {
                  this.addComment(comment);
                  comments?.push(comment);
                }
                break;
              }
            case 47:
              {
                const comment = this.skipLineComment(2);
                if (comment !== undefined) {
                  this.addComment(comment);
                  comments?.push(comment);
                }
                break;
              }
            default:
              break loop;
          }
          break;
        default:
          if (isWhitespace(ch)) {
            ++this.state.pos;
          } else if (ch === 45 && !this.inModule && this.optionFlags & 16384) {
            const pos = this.state.pos;
            if (this.input.charCodeAt(pos + 1) === 45 && this.input.charCodeAt(pos + 2) === 62 && (spaceStart === 0 || this.state.lineStart > spaceStart)) {
              const comment = this.skipLineComment(3);
              if (comment !== undefined) {
                this.addComment(comment);
                comments?.push(comment);
              }
            } else {
              break loop;
            }
          } else if (ch === 60 && !this.inModule && this.optionFlags & 16384) {
            const pos = this.state.pos;
            if (this.input.charCodeAt(pos + 1) === 33 && this.input.charCodeAt(pos + 2) === 45 && this.input.charCodeAt(pos + 3) === 45) {
              const comment = this.skipLineComment(4);
              if (comment !== undefined) {
                this.addComment(comment);
                comments?.push(comment);
              }
            } else {
              break loop;
            }
          } else {
            break loop;
          }
      }
    }
    if (comments?.length > 0) {
      const end = this.state.pos;
      const commentWhitespace = {
        start: this.sourceToOffsetPos(spaceStart),
        end: this.sourceToOffsetPos(end),
        comments: comments,
        leadingNode: null,
        trailingNode: null,
        containingNode: null
      };
      this.state.commentStack.push(commentWhitespace);
    }
  }
  finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    const prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;
    if (!this.isLookahead) {
      this.updateContext(prevType);
    }
  }
  replaceToken(type) {
    this.state.type = type;
    this.updateContext();
  }
  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter()) {
      return;
    }
    const nextPos = this.state.pos + 1;
    const next = this.codePointAtPos(nextPos);
    if (next >= 48 && next <= 57) {
      throw this.raise(Errors.UnexpectedDigitAfterHash, this.state.curPosition());
    }
    if (isIdentifierStart(next)) {
      ++this.state.pos;
      this.finishToken(134, this.readWord1(next));
    } else if (next === 92) {
      ++this.state.pos;
      this.finishToken(134, this.readWord1());
    } else {
      this.finishOp(23, 1);
    }
  }
  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next >= 48 && next <= 57) {
      this.readNumber(true);
      return;
    }
    if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
      this.state.pos += 3;
      this.finishToken(17);
    } else {
      ++this.state.pos;
      this.finishToken(12);
    }
  }
  readToken_slash() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      this.finishOp(27, 2);
    } else {
      this.finishOp(52, 1);
    }
  }
  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2) return false;
    let ch = this.input.charCodeAt(this.state.pos + 1);
    if (ch !== 33) return false;
    const start = this.state.pos;
    this.state.pos += 1;
    while (!isNewLine(ch) && ++this.state.pos < this.length) {
      ch = this.input.charCodeAt(this.state.pos);
    }
    const value = this.input.slice(start + 2, this.state.pos);
    this.finishToken(24, value);
    return true;
  }
  readToken_mult_modulo(code) {
    let type = code === 42 ? 51 : 50;
    let width = 1;
    let next = this.input.charCodeAt(this.state.pos + 1);
    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = 53;
    }
    if (next === 61 && !this.state.inType) {
      width++;
      type = code === 37 ? 29 : 26;
    }
    this.finishOp(type, width);
  }
  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) {
      if (this.input.charCodeAt(this.state.pos + 2) === 61) {
        this.finishOp(26, 3);
      } else {
        this.finishOp(code === 124 ? 37 : 38, 2);
      }
      return;
    }
    if (code === 124) {
      if (next === 62) {
        this.finishOp(35, 2);
        return;
      }
    }
    if (next === 61) {
      this.finishOp(26, 2);
      return;
    }
    this.finishOp(code === 124 ? 39 : 41, 1);
  }
  readToken_caret() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61 && !this.state.inType) {
      this.finishOp(28, 2);
    } else if (next === 94 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "^^"
    }])) {
      this.finishOp(33, 2);
      const lookaheadCh = this.input.codePointAt(this.state.pos);
      if (lookaheadCh === 94) {
        this.unexpected();
      }
    } else {
      this.finishOp(40, 1);
    }
  }
  readToken_atSign() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 64 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "@@"
    }])) {
      this.finishOp(34, 2);
    } else {
      this.finishOp(22, 1);
    }
  }
  readToken_plus_min(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === code) {
      this.finishOp(30, 2);
      return;
    }
    if (next === 61) {
      this.finishOp(26, 2);
    } else {
      this.finishOp(49, 1);
    }
  }
  readToken_lt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);
    if (next === 60) {
      if (this.input.charCodeAt(pos + 2) === 61) {
        this.finishOp(26, 3);
        return;
      }
      this.finishOp(47, 2);
      return;
    }
    if (next === 61) {
      this.finishOp(45, 2);
      return;
    }
    this.finishOp(43, 1);
  }
  readToken_gt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);
    if (next === 62) {
      const size = this.input.charCodeAt(pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(pos + size) === 61) {
        this.finishOp(26, size + 1);
        return;
      }
      this.finishOp(48, size);
      return;
    }
    if (next === 61) {
      this.finishOp(45, 2);
      return;
    }
    this.finishOp(44, 1);
  }
  readToken_eq_excl(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);
    if (next === 61) {
      this.finishOp(42, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }
    if (code === 61 && next === 62) {
      this.state.pos += 2;
      this.finishToken(15);
      return;
    }
    this.finishOp(code === 61 ? 25 : 31, 1);
  }
  readToken_question() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    const next2 = this.input.charCodeAt(this.state.pos + 2);
    if (next === 63) {
      if (next2 === 61) {
        this.finishOp(26, 3);
      } else {
        this.finishOp(36, 2);
      }
    } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      this.state.pos += 2;
      this.finishToken(14);
    } else {
      ++this.state.pos;
      this.finishToken(13);
    }
  }
  getTokenFromCode(code) {
    switch (code) {
      case 46:
        this.readToken_dot();
        return;
      case 40:
        ++this.state.pos;
        this.finishToken(6);
        return;
      case 41:
        ++this.state.pos;
        this.finishToken(7);
        return;
      case 59:
        ++this.state.pos;
        this.finishToken(9);
        return;
      case 44:
        ++this.state.pos;
        this.finishToken(8);
        return;
      case 91:
        ++this.state.pos;
        this.finishToken(0);
        return;
      case 93:
        ++this.state.pos;
        this.finishToken(1);
        return;
      case 123:
        ++this.state.pos;
        this.finishToken(2);
        return;
      case 125:
        ++this.state.pos;
        this.finishToken(4);
        return;
      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          this.finishOp(11, 2);
        } else {
          ++this.state.pos;
          this.finishToken(10);
        }
        return;
      case 63:
        this.readToken_question();
        return;
      case 96:
        this.readTemplateToken();
        return;
      case 48:
        {
          const next = this.input.charCodeAt(this.state.pos + 1);
          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;
      case 34:
      case 39:
        this.readString(code);
        return;
      case 47:
        this.readToken_slash();
        return;
      case 37:
      case 42:
        this.readToken_mult_modulo(code);
        return;
      case 124:
      case 38:
        this.readToken_pipe_amp(code);
        return;
      case 94:
        this.readToken_caret();
        return;
      case 43:
      case 45:
        this.readToken_plus_min(code);
        return;
      case 60:
        this.readToken_lt();
        return;
      case 62:
        this.readToken_gt();
        return;
      case 61:
      case 33:
        this.readToken_eq_excl(code);
        return;
      case 126:
        this.finishOp(32, 1);
        return;
      case 64:
        this.readToken_atSign();
        return;
      case 35:
        this.readToken_numberSign();
        return;
      case 92:
        this.readWord();
        return;
      default:
        if (isIdentifierStart(code)) {
          this.readWord(code);
          return;
        }
    }
    throw this.raise(Errors.InvalidOrUnexpectedToken, this.state.curPosition(), {
      unexpected: String.fromCodePoint(code)
    });
  }
  finishOp(type, size) {
    const str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    this.finishToken(type, str);
  }
  readRegexp() {
    const startLoc = this.state.startLoc;
    const start = this.state.start + 1;
    let escaped, inClass;
    let {
      pos
    } = this.state;
    for (;; ++pos) {
      if (pos >= this.length) {
        throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
      }
      const ch = this.input.charCodeAt(pos);
      if (isNewLine(ch)) {
        throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
      }
      if (escaped) {
        escaped = false;
      } else {
        if (ch === 91) {
          inClass = true;
        } else if (ch === 93 && inClass) {
          inClass = false;
        } else if (ch === 47 && !inClass) {
          break;
        }
        escaped = ch === 92;
      }
    }
    const content = this.input.slice(start, pos);
    ++pos;
    let mods = "";
    const nextPos = () => createPositionWithColumnOffset(startLoc, pos + 2 - start);
    while (pos < this.length) {
      const cp = this.codePointAtPos(pos);
      const char = String.fromCharCode(cp);
      if (VALID_REGEX_FLAGS.has(cp)) {
        if (cp === 118) {
          if (mods.includes("u")) {
            this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
          }
        } else if (cp === 117) {
          if (mods.includes("v")) {
            this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
          }
        }
        if (mods.includes(char)) {
          this.raise(Errors.DuplicateRegExpFlags, nextPos());
        }
      } else if (isIdentifierChar(cp) || cp === 92) {
        this.raise(Errors.MalformedRegExpFlags, nextPos());
      } else {
        break;
      }
      ++pos;
      mods += char;
    }
    this.state.pos = pos;
    this.finishToken(133, {
      pattern: content,
      flags: mods
    });
  }
  readInt(radix, len, forceLen = false, allowNumSeparator = true) {
    const {
      n,
      pos
    } = readInt(this.input, this.state.pos, this.state.lineStart, this.state.curLine, radix, len, forceLen, allowNumSeparator, this.errorHandlers_readInt, false);
    this.state.pos = pos;
    return n;
  }
  readRadixNumber(radix) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let isBigInt = false;
    this.state.pos += 2;
    const val = this.readInt(radix);
    if (val == null) {
      this.raise(Errors.InvalidDigit, createPositionWithColumnOffset(startLoc, 2), {
        radix
      });
    }
    const next = this.input.charCodeAt(this.state.pos);
    if (next === 110) {
      ++this.state.pos;
      isBigInt = true;
    }
    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
    }
    if (isBigInt) {
      const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(132, str);
      return;
    }
    this.finishToken(131, val);
  }
  readNumber(startsWithDot) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let isFloat = false;
    let isBigInt = false;
    let isOctal = false;
    if (!startsWithDot && this.readInt(10) === null) {
      this.raise(Errors.InvalidNumber, this.state.curPosition());
    }
    const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (hasLeadingZero) {
      const integer = this.input.slice(start, this.state.pos);
      this.recordStrictModeErrors(Errors.StrictOctalLiteral, startLoc);
      if (!this.state.strict) {
        const underscorePos = integer.indexOf("_");
        if (underscorePos > 0) {
          this.raise(Errors.ZeroDigitNumericSeparator, createPositionWithColumnOffset(startLoc, underscorePos));
        }
      }
      isOctal = hasLeadingZero && !/[89]/.test(integer);
    }
    let next = this.input.charCodeAt(this.state.pos);
    if (next === 46 && !isOctal) {
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }
    if ((next === 69 || next === 101) && !isOctal) {
      next = this.input.charCodeAt(++this.state.pos);
      if (next === 43 || next === 45) {
        ++this.state.pos;
      }
      if (this.readInt(10) === null) {
        this.raise(Errors.InvalidOrMissingExponent, startLoc);
      }
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }
    const str = this.input.slice(start, this.state.pos).replaceAll("_", "");
    if (next === 110) {
      if (isFloat || hasLeadingZero) {
        this.raise(Errors.InvalidBigIntLiteral, startLoc);
      }
      ++this.state.pos;
      isBigInt = true;
    }
    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
    }
    if (isBigInt) {
      this.finishToken(132, str);
      return;
    }
    const val = isOctal ? parseInt(str, 8) : parseFloat(str);
    this.finishToken(131, val);
  }
  readCodePoint(throwOnInvalid) {
    const {
      code,
      pos
    } = readCodePoint(this.input, this.state.pos, this.state.lineStart, this.state.curLine, throwOnInvalid, this.errorHandlers_readCodePoint);
    this.state.pos = pos;
    return code;
  }
  readString(quote) {
    const {
      str,
      pos,
      curLine,
      lineStart
    } = readStringContents(quote === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
    this.state.pos = pos + 1;
    this.state.lineStart = lineStart;
    this.state.curLine = curLine;
    this.finishToken(130, str);
  }
  readTemplateContinuation() {
    if (!this.match(4)) {
      this.unexpected(null, 4);
    }
    this.state.pos--;
    this.readTemplateToken();
  }
  readTemplateToken() {
    const opening = this.input[this.state.pos];
    const {
      str,
      firstInvalidLoc,
      pos,
      curLine,
      lineStart
    } = readStringContents("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
    this.state.pos = pos + 1;
    this.state.lineStart = lineStart;
    this.state.curLine = curLine;
    if (firstInvalidLoc) {
      this.state.firstInvalidTemplateEscapePos = new Position(firstInvalidLoc.curLine, firstInvalidLoc.pos - firstInvalidLoc.lineStart, this.sourceToOffsetPos(firstInvalidLoc.pos));
    }
    if (this.input.codePointAt(pos) === 96) {
      this.finishToken(20, firstInvalidLoc ? null : opening + str + "`");
    } else {
      this.state.pos++;
      this.finishToken(21, firstInvalidLoc ? null : opening + str + "${");
    }
  }
  recordStrictModeErrors(toParseError, at) {
    const index = at.index;
    if (this.state.strict && !this.state.strictErrors.has(index)) {
      this.raise(toParseError, at);
    } else {
      this.state.strictErrors.set(index, [toParseError, at]);
    }
  }
  readWord1(firstCode) {
    this.state.containsEsc = false;
    let word = "";
    const start = this.state.pos;
    let chunkStart = this.state.pos;
    if (firstCode !== undefined) {
      this.state.pos += firstCode <= 0xffff ? 1 : 2;
    }
    while (this.state.pos < this.length) {
      const ch = this.codePointAtPos(this.state.pos);
      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) {
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        const escStart = this.state.curPosition();
        const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;
        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(Errors.MissingUnicodeEscape, this.state.curPosition());
          chunkStart = this.state.pos - 1;
          continue;
        }
        ++this.state.pos;
        const esc = this.readCodePoint(true);
        if (esc !== null) {
          if (!identifierCheck(esc)) {
            this.raise(Errors.EscapedCharNotAnIdentifier, escStart);
          }
          word += String.fromCodePoint(esc);
        }
        chunkStart = this.state.pos;
      } else {
        break;
      }
    }
    return word + this.input.slice(chunkStart, this.state.pos);
  }
  readWord(firstCode) {
    const word = this.readWord1(firstCode);
    const type = keywords$1.get(word);
    if (type !== undefined) {
      this.finishToken(type, tokenLabelName(type));
    } else {
      this.finishToken(128, word);
    }
  }
  checkKeywordEscapes() {
    const {
      type
    } = this.state;
    if (tokenIsKeyword(type) && this.state.containsEsc) {
      this.raise(Errors.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: tokenLabelName(type)
      });
    }
  }
  raise(toParseError, at, details = {}) {
    const loc = at instanceof Position ? at : typeof at === "number" ? this.getLoc(at) : this.optionFlags & 256 ? at.loc.start : this.getLoc(at.start);
    const pos = at instanceof Position ? loc.index : typeof at === "number" ? at : at.start;
    const error = toParseError(loc, pos, details);
    if (!(this.optionFlags & 4096)) throw error;
    if (!this.isLookahead) this.state.errors.push(error);
    return error;
  }
  raiseOverwrite(toParseError, at, details = {}) {
    const loc = at instanceof Position ? at : this.optionFlags & 256 ? at.loc.start : this.getLoc(at.start);
    const pos = at instanceof Position ? loc.index : at.start;
    const errors = this.state.errors;
    for (let i = errors.length - 1; i >= 0; i--) {
      const error = errors[i];
      if (error.pos === pos) {
        return errors[i] = toParseError(loc, pos, details);
      }
      if (error.pos < pos) break;
    }
    return this.raise(toParseError, loc, details);
  }
  updateContext(prevType) {}
  unexpected(loc, type) {
    throw this.raise(Errors.UnexpectedToken, loc != null ? loc : this.state.startLoc, {
      expected: type ? tokenLabelName(type) : null
    });
  }
  expectPlugin(pluginName, loc) {
    if (this.hasPlugin(pluginName)) {
      return true;
    }
    throw this.raise(Errors.MissingPlugin, loc != null ? loc : this.state.startLoc, {
      missingPlugin: [pluginName]
    });
  }
  expectOnePlugin(pluginNames) {
    if (!pluginNames.some(name => this.hasPlugin(name))) {
      throw this.raise(Errors.MissingOneOfPlugins, this.state.startLoc, {
        missingPlugin: pluginNames
      });
    }
  }
  errorBuilder(error) {
    return (pos, lineStart, curLine) => {
      this.raise(error, buildPosition(pos, lineStart, curLine));
    };
  }
  errorHandlers_readInt = {
    invalidDigit: (pos, lineStart, curLine, radix) => {
      if (!(this.optionFlags & 4096)) return false;
      this.raise(Errors.InvalidDigit, buildPosition(pos, lineStart, curLine), {
        radix
      });
      return true;
    },
    numericSeparatorInEscapeSequence: this.errorBuilder(Errors.NumericSeparatorInEscapeSequence),
    unexpectedNumericSeparator: this.errorBuilder(Errors.UnexpectedNumericSeparator)
  };
  errorHandlers_readCodePoint = {
    ...this.errorHandlers_readInt,
    invalidEscapeSequence: this.errorBuilder(Errors.InvalidEscapeSequence),
    invalidCodePoint: this.errorBuilder(Errors.InvalidCodePoint)
  };
  errorHandlers_readStringContents_string = {
    ...this.errorHandlers_readCodePoint,
    strictNumericEscape: (pos, lineStart, curLine) => {
      this.recordStrictModeErrors(Errors.StrictNumericEscape, buildPosition(pos, lineStart, curLine));
    },
    unterminated: (pos, lineStart, curLine) => {
      throw this.raise(Errors.UnterminatedString, buildPosition(pos - 1, lineStart, curLine));
    }
  };
  errorHandlers_readStringContents_template = {
    ...this.errorHandlers_readCodePoint,
    strictNumericEscape: this.errorBuilder(Errors.StrictNumericEscape),
    unterminated: (pos, lineStart, curLine) => {
      throw this.raise(Errors.UnterminatedTemplate, buildPosition(pos, lineStart, curLine));
    }
  };
}
class ClassScope {
  privateNames = new Set();
  loneAccessors = new Map();
  undefinedPrivateNames = new Map();
}
class ClassScopeHandler {
  parser;
  stack = [];
  constructor(parser) {
    this.parser = parser;
  }
  current() {
    return this.stack[this.stack.length - 1];
  }
  enter() {
    this.stack.push(new ClassScope());
  }
  exit() {
    const oldClassScope = this.stack.pop();
    const current = this.current();
    for (const [name, loc] of Array.from(oldClassScope.undefinedPrivateNames)) {
      if (current) {
        if (!current.undefinedPrivateNames.has(name)) {
          current.undefinedPrivateNames.set(name, loc);
        }
      } else {
        this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
          identifierName: name
        });
      }
    }
  }
  declarePrivateName(name, elementType, loc) {
    const {
      privateNames,
      loneAccessors,
      undefinedPrivateNames
    } = this.current();
    let redefined = privateNames.has(name);
    if (elementType & 3) {
      const accessor = redefined && loneAccessors.get(name);
      if (accessor) {
        const oldStatic = accessor & 4;
        const newStatic = elementType & 4;
        const oldKind = accessor & 3;
        const newKind = elementType & 3;
        redefined = oldKind === newKind || oldStatic !== newStatic;
        if (!redefined) loneAccessors.delete(name);
      } else if (!redefined) {
        loneAccessors.set(name, elementType);
      }
    }
    if (redefined) {
      this.parser.raise(Errors.PrivateNameRedeclaration, loc, {
        identifierName: name
      });
    }
    privateNames.add(name);
    undefinedPrivateNames.delete(name);
  }
  usePrivateName(name, loc) {
    let classScope;
    for (classScope of this.stack) {
      if (classScope.privateNames.has(name)) return;
    }
    if (classScope) {
      classScope.undefinedPrivateNames.set(name, loc);
    } else {
      this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
        identifierName: name
      });
    }
  }
}
class ExpressionScope {
  constructor(type = 0) {
    this.type = type;
  }
  canBeArrowParameterDeclaration() {
    return this.type === 2 || this.type === 1;
  }
  isCertainlyParameterDeclaration() {
    return this.type === 3;
  }
}
class ArrowHeadParsingScope extends ExpressionScope {
  declarationErrors = new Map();
  constructor(type) {
    super(type);
  }
  recordDeclarationError(ParsingErrorClass, index) {
    this.declarationErrors.set(index, ParsingErrorClass);
  }
  clearDeclarationError(index) {
    this.declarationErrors.delete(index);
  }
  iterateErrors(iterator) {
    this.declarationErrors.forEach(iterator);
  }
}
class ExpressionScopeHandler {
  parser;
  stack = [new ExpressionScope()];
  constructor(parser) {
    this.parser = parser;
  }
  enter(scope) {
    this.stack.push(scope);
  }
  exit() {
    this.stack.pop();
  }
  recordParameterInitializerError(toParseError, loc) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];
    while (!scope.isCertainlyParameterDeclaration()) {
      if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(toParseError, loc);
      } else {
        return;
      }
      scope = stack[--i];
    }
    this.parser.raise(toParseError, loc);
  }
  recordArrowParameterBindingError(error, node) {
    const {
      stack
    } = this;
    const scope = stack[stack.length - 1];
    const origin = node.start;
    if (scope.isCertainlyParameterDeclaration()) {
      this.parser.raise(error, origin);
    } else if (scope.canBeArrowParameterDeclaration()) {
      scope.recordDeclarationError(error, origin);
    } else {
      return;
    }
  }
  recordAsyncArrowParametersError(at) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];
    while (scope.canBeArrowParameterDeclaration()) {
      if (scope.type === 2) {
        scope.recordDeclarationError(Errors.AwaitBindingIdentifier, at);
      }
      scope = stack[--i];
    }
  }
  validateAsPattern() {
    const {
      stack
    } = this;
    const currentScope = stack[stack.length - 1];
    if (!currentScope.canBeArrowParameterDeclaration()) return;
    currentScope.iterateErrors((toParseError, key) => {
      this.parser.raise(toParseError, key);
      let i = stack.length - 2;
      let scope = stack[i];
      while (scope.canBeArrowParameterDeclaration()) {
        scope.clearDeclarationError(key);
        scope = stack[--i];
      }
    });
  }
}
function newParameterDeclarationScope() {
  return new ExpressionScope(3);
}
function newArrowHeadScope() {
  return new ArrowHeadParsingScope(1);
}
function newAsyncArrowScope() {
  return new ArrowHeadParsingScope(2);
}
function newExpressionScope() {
  return new ExpressionScope();
}
class UtilParser extends Tokenizer {
  addExtra(node, key, value, enumerable = true) {
    if (!node) return;
    let {
      extra
    } = node;
    if (extra == null) {
      extra = {};
      node.extra = extra;
    }
    if (enumerable) {
      extra[key] = value;
    } else {
      Object.defineProperty(extra, key, {
        enumerable,
        value
      });
    }
  }
  isContextual(token) {
    return this.state.type === token && !this.state.containsEsc;
  }
  isUnparsedContextual(nameStart, name) {
    if (this.input.startsWith(name, nameStart)) {
      const nextCh = this.input.charCodeAt(nameStart + name.length);
      return !(isIdentifierChar(nextCh) || (nextCh & 0xfc00) === 0xd800);
    }
    return false;
  }
  isLookaheadContextual(name) {
    const next = this.nextTokenStart();
    return this.isUnparsedContextual(next, name);
  }
  eatContextual(token) {
    if (this.isContextual(token)) {
      this.next();
      return true;
    }
    return false;
  }
  expectContextual(token, toParseError) {
    if (!this.eatContextual(token)) {
      if (toParseError != null) {
        throw this.raise(toParseError, this.state.startLoc);
      }
      this.unexpected(null, token);
    }
  }
  canInsertSemicolon() {
    return this.match(135) || this.match(4) || this.hasPrecedingLineBreak();
  }
  hasPrecedingLineBreak() {
    return hasNewLine(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
  }
  hasFollowingLineBreak() {
    return hasNewLine(this.input, this.state.end, this.nextTokenStart());
  }
  isLineTerminator() {
    return this.eat(9) || this.canInsertSemicolon();
  }
  semicolon(allowAsi = true) {
    if (allowAsi ? this.isLineTerminator() : this.eat(9)) return;
    this.raise(Errors.MissingSemicolon, this.state.lastTokEndLoc);
  }
  expect(type, loc) {
    if (!this.eat(type)) {
      this.unexpected(loc, type);
    }
  }
  tryParse(fn, oldState = this.state.clone()) {
    const abortSignal = {
      node: null
    };
    try {
      const node = fn((node = null) => {
        abortSignal.node = node;
        throw abortSignal;
      });
      if (this.state.errors.length > oldState.errors.length) {
        const failState = this.state;
        this.state = oldState;
        this.state.tokensLength = failState.tokensLength;
        return {
          node,
          error: failState.errors[oldState.errors.length],
          thrown: false,
          aborted: false,
          failState
        };
      }
      return {
        node: node,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (error) {
      const failState = this.state;
      this.state = oldState;
      if (error instanceof SyntaxError) {
        return {
          node: null,
          error,
          thrown: true,
          aborted: false,
          failState
        };
      }
      if (error === abortSignal) {
        return {
          node: abortSignal.node,
          error: null,
          thrown: false,
          aborted: true,
          failState
        };
      }
      throw error;
    }
  }
  checkExpressionErrors(refExpressionErrors, andThrow) {
    if (!refExpressionErrors) return false;
    const {
      shorthandAssignLoc,
      doubleProtoLoc,
      privateKeyLoc,
      optionalParametersLoc,
      voidPatternLoc
    } = refExpressionErrors;
    const hasErrors = !!shorthandAssignLoc || !!doubleProtoLoc || !!optionalParametersLoc || !!privateKeyLoc || !!voidPatternLoc;
    if (!andThrow) {
      return hasErrors;
    }
    if (shorthandAssignLoc != null) {
      this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
    }
    if (doubleProtoLoc != null) {
      this.raise(Errors.DuplicateProto, doubleProtoLoc);
    }
    if (privateKeyLoc != null) {
      this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
    }
    if (optionalParametersLoc != null) {
      this.unexpected(optionalParametersLoc);
    }
    if (voidPatternLoc != null) {
      this.raise(Errors.InvalidCoverDiscardElement, voidPatternLoc);
    }
  }
  isLiteralPropertyName() {
    return tokenIsLiteralPropertyName(this.state.type);
  }
  isPrivateName(node) {
    return node.type === "PrivateName";
  }
  getPrivateNameSV(node) {
    return node.id.name;
  }
  hasPropertyAsPrivateName(node) {
    return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
  }
  isObjectProperty(node) {
    return node.type === "ObjectProperty";
  }
  isObjectMethod(node) {
    return node.type === "ObjectMethod";
  }
  initializeScopes(inModule = this.options.sourceType === "module") {
    const oldLabels = this.state.labels;
    this.state.labels = [];
    const oldExportedIdentifiers = this.exportedIdentifiers;
    this.exportedIdentifiers = new Set();
    const oldInModule = this.inModule;
    this.inModule = inModule;
    const oldScope = this.scope;
    const ScopeHandler = this.getScopeHandler();
    this.scope = new ScopeHandler(this, inModule);
    const oldProdParam = this.prodParam;
    this.prodParam = new ProductionParameterHandler();
    const oldClassScope = this.classScope;
    this.classScope = new ClassScopeHandler(this);
    const oldExpressionScope = this.expressionScope;
    this.expressionScope = new ExpressionScopeHandler(this);
    return () => {
      this.state.labels = oldLabels;
      this.exportedIdentifiers = oldExportedIdentifiers;
      this.inModule = oldInModule;
      this.scope = oldScope;
      this.prodParam = oldProdParam;
      this.classScope = oldClassScope;
      this.expressionScope = oldExpressionScope;
    };
  }
  enterInitialScopes() {
    let paramFlags = 0;
    if (this.inModule || this.optionFlags & 1) {
      paramFlags |= 2;
    }
    if (this.optionFlags & 32) {
      paramFlags |= 1;
    }
    const isCommonJS = !this.inModule && this.options.sourceType === "commonjs";
    if (isCommonJS || this.optionFlags & 2) {
      paramFlags |= 4;
    }
    this.prodParam.enter(paramFlags);
    let scopeFlags = isCommonJS ? 514 : 1;
    if (this.optionFlags & 4) {
      scopeFlags |= 512;
    }
    if (this.optionFlags & 16) {
      scopeFlags |= 16 | 32;
    }
    this.scope.enter(scopeFlags);
  }
  checkDestructuringPrivate(refExpressionErrors) {
    const {
      privateKeyLoc
    } = refExpressionErrors;
    if (privateKeyLoc !== null) {
      this.expectPlugin("destructuringPrivate", privateKeyLoc);
    }
  }
}
class ExpressionErrors {
  shorthandAssignLoc = null;
  doubleProtoLoc = null;
  privateKeyLoc = null;
  optionalParametersLoc = null;
  voidPatternLoc = null;
}
class Node {
  constructor(optionFlags, filename, pos, loc) {
    this.start = pos;
    this.end = 0;
    if (loc !== undefined) this.loc = new SourceLocation(loc);
    if (optionFlags & 128) this.range = [pos, 0];
    if (loc !== undefined && filename) {
      this.loc.filename = filename;
    }
  }
  type = "";
}
const NodePrototype = Node.prototype;
class NodeUtils extends UtilParser {
  createPosition(loc) {
    return loc;
  }
  startNode() {
    const {
      startLoc
    } = this.state;
    this.setLoc(startLoc);
    return this.startNodeAt(startLoc);
  }
  startNodeAt(loc) {
    const {
      optionFlags,
      filename
    } = this;
    if (!(optionFlags & 256)) {
      return new Node(optionFlags, filename, loc.index);
    }
    return new Node(optionFlags, filename, loc.index, this.createPosition(loc));
  }
  startNodeAtNode(type) {
    const {
      optionFlags,
      filename
    } = this;
    if (!(optionFlags & 256)) {
      return new Node(optionFlags, filename, type.start);
    }
    return new Node(optionFlags, filename, type.start, type.loc.start);
  }
  finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEndLoc);
  }
  finishNodeAt(node, type, endLoc) {
    node.type = type;
    node.end = endLoc.index;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.end = this.createPosition(endLoc);
    }
    if (optionFlags & 128) node.range[1] = endLoc.index;
    if (optionFlags & 8192) this.processComment(node);
    return node;
  }
  finishNodeAtNode(node, type, endNode) {
    node.type = type;
    node.end = endNode.end;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.end = endNode.loc.end;
    }
    if (optionFlags & 128) node.range[1] = node.end;
    if (optionFlags & 8192) this.processComment(node);
    return node;
  }
  resetStartLocation(node, startLoc) {
    node.start = startLoc.index;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.start = this.createPosition(startLoc);
    }
    if (optionFlags & 128) node.range[0] = startLoc.index;
  }
  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    node.end = endLoc.index;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.end = this.createPosition(endLoc);
    }
    if (optionFlags & 128) node.range[1] = endLoc.index;
  }
  resetStartLocationFromNode(node, locationNode) {
    node.start = locationNode.start;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.start = locationNode.loc.start;
    }
    if (optionFlags & 128) node.range[0] = locationNode.start;
  }
  resetEndLocationFromNode(node, locationNode) {
    node.end = locationNode.end;
    const {
      optionFlags
    } = this;
    if (optionFlags & 256) {
      node.loc.end = locationNode.loc.end;
    }
    if (optionFlags & 128) node.range[1] = locationNode.end;
  }
  castNodeTo(node, type) {
    node.type = type;
    return node;
  }
  cloneIdentifier(node) {
    const {
      type,
      start,
      end,
      loc,
      range,
      name
    } = node;
    const cloned = Object.create(NodePrototype);
    cloned.type = type;
    cloned.start = start;
    cloned.end = end;
    cloned.loc = loc;
    cloned.range = range;
    cloned.name = name;
    if (node.extra) cloned.extra = node.extra;
    return cloned;
  }
  cloneStringLiteral(node) {
    const {
      type,
      start,
      end,
      loc,
      range,
      extra
    } = node;
    const cloned = Object.create(NodePrototype);
    cloned.type = type;
    cloned.start = start;
    cloned.end = end;
    cloned.loc = loc;
    cloned.range = range;
    cloned.extra = extra;
    cloned.value = node.value;
    return cloned;
  }
}
const unwrapParenthesizedExpression = node => {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};
class LValParser extends NodeUtils {
  toAssignable(node, isLHS = false) {
    let parenthesized = undefined;
    if (node.type === "ParenthesizedExpression" || node.extra?.parenthesized) {
      parenthesized = unwrapParenthesizedExpression(node);
      if (isLHS) {
        if (parenthesized.type === "Identifier") {
          this.expressionScope.recordArrowParameterBindingError(Errors.InvalidParenthesizedAssignment, node);
        } else if (parenthesized.type !== "CallExpression" && parenthesized.type !== "MemberExpression" && !this.isOptionalMemberExpression(parenthesized)) {
          this.raise(Errors.InvalidParenthesizedAssignment, node);
        }
      } else {
        this.raise(Errors.InvalidParenthesizedAssignment, node);
      }
    }
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
      case "VoidPattern":
        break;
      case "ObjectExpression":
        this.castNodeTo(node, "ObjectPattern");
        for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
          const prop = node.properties[i];
          const isLast = i === last;
          this.toAssignableObjectExpressionProp(prop, isLast, isLHS);
          if (isLast && prop.type === "RestElement" && node.extra?.trailingCommaLoc) {
            this.raise(Errors.RestTrailingComma, node.extra.trailingCommaLoc);
          }
        }
        break;
      case "ObjectProperty":
        {
          const {
            key,
            value
          } = node;
          if (this.isPrivateName(key)) {
            this.classScope.usePrivateName(this.getPrivateNameSV(key), key.start);
          }
          this.toAssignable(value, isLHS);
          break;
        }
      case "SpreadElement":
        {
          throw new Error("Internal @babel/parser error (this is a bug, please report it)." + " SpreadElement should be converted by .toAssignable's caller.");
        }
      case "ArrayExpression":
        this.castNodeTo(node, "ArrayPattern");
        this.toAssignableList(node.elements, node.extra?.trailingCommaLoc, isLHS);
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(Errors.MissingEqInAssignment, this.optionFlags & 256 ? node.left.loc.end : node.left);
        }
        this.castNodeTo(node, "AssignmentPattern");
        delete node.operator;
        if (node.left.type === "VoidPattern") {
          this.raise(Errors.VoidPatternInitializer, node.left);
        }
        this.toAssignable(node.left, isLHS);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(parenthesized, isLHS);
        break;
    }
  }
  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "ObjectMethod") {
      this.raise(prop.kind === "get" || prop.kind === "set" ? Errors.PatternHasAccessor : Errors.PatternHasMethod, prop.key);
    } else if (prop.type === "SpreadElement") {
      this.castNodeTo(prop, "RestElement");
      const arg = prop.argument;
      this.checkToRestConversion(arg, false);
      this.toAssignable(arg, isLHS);
      if (!isLast) {
        this.raise(Errors.RestTrailingComma, prop);
      }
    } else {
      this.toAssignable(prop, isLHS);
    }
  }
  toAssignableList(exprList, trailingCommaLoc, isLHS) {
    const end = exprList.length - 1;
    for (let i = 0; i <= end; i++) {
      const elt = exprList[i];
      if (!elt) continue;
      this.toAssignableListItem(exprList, i, isLHS);
      if (elt.type === "RestElement") {
        if (i < end) {
          this.raise(Errors.RestTrailingComma, elt);
        } else if (trailingCommaLoc) {
          this.raise(Errors.RestTrailingComma, trailingCommaLoc);
        }
      }
    }
  }
  toAssignableListItem(exprList, index, isLHS) {
    const node = exprList[index];
    if (node.type === "SpreadElement") {
      this.castNodeTo(node, "RestElement");
      const arg = node.argument;
      this.checkToRestConversion(arg, true);
      this.toAssignable(arg, isLHS);
    } else {
      this.toAssignable(node, isLHS);
    }
  }
  isAssignable(node, isBinding) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
      case "VoidPattern":
        return true;
      case "ObjectExpression":
        {
          const last = node.properties.length - 1;
          return node.properties.every((prop, i) => {
            return prop.type !== "ObjectMethod" && (i === last || prop.type !== "SpreadElement") && this.isAssignable(prop);
          });
        }
      case "ObjectProperty":
        return this.isAssignable(node.value);
      case "SpreadElement":
        return this.isAssignable(node.argument);
      case "ArrayExpression":
        return node.elements.every(element => element === null || this.isAssignable(element));
      case "AssignmentExpression":
        return node.operator === "=";
      case "ParenthesizedExpression":
        return this.isAssignable(node.expression);
      case "MemberExpression":
      case "OptionalMemberExpression":
        return !isBinding;
      default:
        return false;
    }
  }
  toReferencedList(exprList, isParenthesizedExpr) {
    return exprList;
  }
  parseSpread(refExpressionErrors) {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, undefined);
    return this.finishNode(node, "SpreadElement");
  }
  parseRestBinding() {
    const node = this.startNode();
    this.next();
    const argument = this.parseBindingAtom();
    if (argument.type === "VoidPattern") {
      this.raise(Errors.UnexpectedVoidPattern, argument);
    }
    node.argument = argument;
    return this.finishNode(node, "RestElement");
  }
  parseBindingAtom() {
    switch (this.state.type) {
      case 0:
        {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(1, 93, 1);
          return this.finishNode(node, "ArrayPattern");
        }
      case 2:
        return this.parseObjectLike(4, true);
      case 84:
        return this.parseVoidPattern(null);
    }
    return this.parseIdentifier();
  }
  parseBindingList(close, closeCharCode, flags) {
    const allowEmpty = flags & 1;
    const elts = [];
    let first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(8);
      }
      if (allowEmpty && this.match(8)) {
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(17)) {
        let rest = this.parseRestBinding();
        if (flags & 2) {
          rest = this.parseFunctionParamType(rest);
        }
        elts.push(rest);
        if (!this.checkCommaAfterRest(closeCharCode)) {
          this.expect(close);
          break;
        }
      } else {
        const decorators = [];
        if (flags & 2) {
          if (this.match(22) && this.hasPlugin("decorators")) {
            this.raise(Errors.UnsupportedParameterDecorator, this.state.startLoc);
          }
          while (this.match(22)) {
            decorators.push(this.parseDecorator());
          }
        }
        elts.push(this.parseBindingElement(flags, decorators));
      }
    }
    return elts;
  }
  parseBindingRestProperty(prop) {
    this.next();
    if (this.hasPlugin("discardBinding") && this.match(84)) {
      prop.argument = this.parseVoidPattern(null);
      this.raise(Errors.UnexpectedVoidPattern, prop.argument);
    } else {
      prop.argument = this.parseIdentifier();
    }
    this.checkCommaAfterRest(125);
    return this.finishNode(prop, "RestElement");
  }
  parseBindingProperty() {
    const {
      type,
      startLoc
    } = this.state;
    if (type === 17) {
      return this.parseBindingRestProperty(this.startNode());
    }
    const prop = this.startNode();
    if (type === 134) {
      this.expectPlugin("destructuringPrivate", startLoc);
      this.classScope.usePrivateName(this.state.value, startLoc);
      prop.key = this.parsePrivateName();
    } else {
      this.parsePropertyName(prop);
    }
    prop.method = false;
    return this.parseObjPropValue(prop, startLoc, false, false, true, false);
  }
  parseBindingElement(flags, decorators) {
    const {
      startLoc
    } = this.state;
    const left = this.parseMaybeDefault();
    if (flags & 2) {
      this.parseFunctionParamType(left);
    }
    if (decorators.length) {
      left.decorators = decorators;
      this.resetStartLocationFromNode(left, decorators[0]);
    }
    const elt = this.parseMaybeDefault(startLoc, left);
    return elt;
  }
  parseFunctionParamType(param) {
    return param;
  }
  parseMaybeDefault(startLoc, left) {
    startLoc ??= this.state.startLoc;
    left = left ?? this.parseBindingAtom();
    if (!this.eat(25)) return left;
    const node = this.startNodeAt(startLoc);
    if (left.type === "VoidPattern") {
      this.raise(Errors.VoidPatternInitializer, left);
    }
    node.left = left;
    node.right = this.parseMaybeAssignAllowIn();
    return this.finishNode(node, "AssignmentPattern");
  }
  isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
    switch (type) {
      case "AssignmentPattern":
        return "left";
      case "RestElement":
        return "argument";
      case "ObjectProperty":
        return "value";
      case "ParenthesizedExpression":
        return "expression";
      case "ArrayPattern":
        return "elements";
      case "ObjectPattern":
        return "properties";
      case "VoidPattern":
        return true;
      case "CallExpression":
        if (!disallowCallExpression && !this.state.strict && this.optionFlags & 16384) {
          return true;
        }
    }
    return false;
  }
  isOptionalMemberExpression(expression) {
    return expression.type === "OptionalMemberExpression";
  }
  checkLVal(expression, ancestor, binding = 64, checkClashes = false, strictModeChanged = false, hasParenthesizedAncestor = false, disallowCallExpression = false) {
    const type = expression.type;
    if (this.isObjectMethod(expression)) return;
    const isOptionalMemberExpression = this.isOptionalMemberExpression(expression);
    if (isOptionalMemberExpression || type === "MemberExpression") {
      if (isOptionalMemberExpression) {
        this.expectPlugin("optionalChainingAssign", expression.start);
        if (ancestor.type !== "AssignmentExpression") {
          this.raise(Errors.InvalidLhsOptionalChaining, expression, {
            ancestor
          });
        }
      }
      if (binding !== 64) {
        this.raise(Errors.InvalidPropertyBindingPattern, expression);
      }
      return;
    }
    if (type === "Identifier") {
      this.checkIdentifier(expression, binding, strictModeChanged);
      const {
        name
      } = expression;
      if (checkClashes) {
        if (checkClashes.has(name)) {
          this.raise(Errors.ParamDupe, expression);
        } else {
          checkClashes.add(name);
        }
      }
      return;
    } else if (type === "VoidPattern" && ancestor.type === "CatchClause") {
      this.raise(Errors.VoidPatternCatchClauseParam, expression);
    }
    const unwrappedExpression = unwrapParenthesizedExpression(expression);
    disallowCallExpression ||= unwrappedExpression.type === "CallExpression" && (unwrappedExpression.callee.type === "Import" || unwrappedExpression.callee.type === "Super");
    const validity = this.isValidLVal(type, disallowCallExpression, !(hasParenthesizedAncestor || expression.extra?.parenthesized) && ancestor.type === "AssignmentExpression", binding);
    if (validity === true) return;
    if (validity === false) {
      const ParseErrorClass = binding === 64 ? Errors.InvalidLhs : Errors.InvalidLhsBinding;
      this.raise(ParseErrorClass, expression, {
        ancestor
      });
      return;
    }
    let key, isParenthesizedExpression;
    if (typeof validity === "string") {
      key = validity;
      isParenthesizedExpression = type === "ParenthesizedExpression";
    } else {
      [key, isParenthesizedExpression] = validity;
    }
    const nextAncestor = type === "ArrayPattern" || type === "ObjectPattern" ? {
      type
    } : ancestor;
    const val = expression[key];
    if (Array.isArray(val)) {
      for (const child of val) {
        if (child) {
          this.checkLVal(child, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression, true);
        }
      }
    } else if (val) {
      this.checkLVal(val, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression, disallowCallExpression);
    }
  }
  checkIdentifier(at, bindingType, strictModeChanged = false) {
    if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(at.name, this.inModule) : isStrictBindOnlyReservedWord(at.name))) {
      if (bindingType === 64) {
        this.raise(Errors.StrictEvalArguments, at, {
          referenceName: at.name
        });
      } else {
        this.raise(Errors.StrictEvalArgumentsBinding, at, {
          bindingName: at.name
        });
      }
    }
    if (bindingType & 8192 && at.name === "let") {
      this.raise(Errors.LetInLexicalBinding, at);
    }
    if (!(bindingType & 64)) {
      this.declareNameFromIdentifier(at, bindingType);
    }
  }
  declareNameFromIdentifier(identifier, binding) {
    this.scope.declareName(identifier.name, binding, identifier.start);
  }
  checkToRestConversion(node, allowPattern) {
    switch (node.type) {
      case "ParenthesizedExpression":
        this.checkToRestConversion(node.expression, allowPattern);
        break;
      case "Identifier":
      case "MemberExpression":
        break;
      case "ArrayExpression":
      case "ObjectExpression":
        if (allowPattern) break;
      default:
        this.raise(Errors.InvalidRestAssignmentPattern, node);
    }
  }
  checkCommaAfterRest(close) {
    if (!this.match(8)) {
      return false;
    }
    this.raise(this.lookaheadCharCode() === close ? Errors.RestTrailingComma : Errors.ElementAfterRest, this.state.startLoc);
    return true;
  }
}
const keywordAndTSRelationalOperator = /in(?:stanceof)?|as|satisfies/y;
function nonNull(x) {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`);
  }
  return x;
}
function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}
const TSErrorTemplates = {
  AbstractMethodHasImplementation: ({
    methodName
  }) => `Method '${methodName}' cannot have an implementation because it is marked abstract.`,
  AbstractPropertyHasInitializer: ({
    propertyName
  }) => `Property '${propertyName}' cannot have an initializer because it is marked abstract.`,
  AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
  AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
  AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
  ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareAccessor: ({
    kind
  }) => `'declare' is not allowed in ${kind}ters.`,
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateAccessibilityModifier: ({
    modifier
  }) => `Accessibility modifier already seen: '${modifier}'.`,
  DuplicateModifier: ({
    modifier
  }) => `Duplicate modifier: '${modifier}'.`,
  EmptyHeritageClauseType: ({
    token
  }) => `'${token}' list cannot be empty.`,
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  ImportAliasHasImportType: "An import alias can not use 'import type'.",
  IncompatibleModifiers: ({
    modifiers
  }) => `'${modifiers[0]}' modifier cannot be used with '${modifiers[1]}' modifier.`,
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
  IndexSignatureHasAccessibility: ({
    modifier
  }) => `Index signatures cannot have an accessibility modifier ('${modifier}').`,
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
  InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
  InlineModuleDeclarationMustUseString: "`module ... {}` declarations must have a string name. Use `namespace ... {}` instead.",
  InvalidHeritageClauseType: ({
    token
  }) => `'${token}' list can only include identifiers or qualified-names with optional type arguments.`,
  InvalidModifierOnAwaitUsingDeclaration: modifier => `'${modifier}' modifier cannot appear on an await using declaration.`,
  InvalidModifierOnTypeMember: ({
    modifier
  }) => `'${modifier}' modifier cannot appear on a type member.`,
  InvalidModifierOnTypeParameter: ({
    modifier
  }) => `'${modifier}' modifier cannot appear on a type parameter.`,
  InvalidModifierOnTypeParameterPositions: ({
    modifier
  }) => `'${modifier}' modifier can only appear on a type parameter of a class, interface or type alias.`,
  InvalidModifierOnUsingDeclaration: modifier => `'${modifier}' modifier cannot appear on a using declaration.`,
  InvalidModifiersOrder: ({
    orderedModifiers
  }) => `'${orderedModifiers[0]}' modifier must precede '${orderedModifiers[1]}' modifier.`,
  InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. " + "You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifier: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: ({
    modifier
  }) => `Private elements cannot have an accessibility modifier ('${modifier}').`,
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
  ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
  SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
  SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
  SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
  SingleTypeParameterWithoutTrailingComma: ({
    typeParameterName
  }) => `Single type parameter ${typeParameterName} should have a trailing comma. Example usage: <${typeParameterName},>.`,
  StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
  TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
  TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
  TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: ({
    type
  }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${type}.`,
  UsingDeclarationInAmbientContext: kind => `'${kind}' declarations are not allowed in ambient contexts.`
};
const TSErrors = ParseErrorEnum`typescript`(TSErrorTemplates);
function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";
    case "boolean":
      return "TSBooleanKeyword";
    case "bigint":
      return "TSBigIntKeyword";
    case "never":
      return "TSNeverKeyword";
    case "number":
      return "TSNumberKeyword";
    case "object":
      return "TSObjectKeyword";
    case "string":
      return "TSStringKeyword";
    case "symbol":
      return "TSSymbolKeyword";
    case "undefined":
      return "TSUndefinedKeyword";
    case "unknown":
      return "TSUnknownKeyword";
    default:
      return undefined;
  }
}
function tsIsAccessModifier(modifier) {
  return modifier === "private" || modifier === "public" || modifier === "protected";
}
function tsIsVarianceAnnotations(modifier) {
  return modifier === "in" || modifier === "out";
}
function tsIsEntityName(node) {
  if (node.extra?.parenthesized) {
    return false;
  }
  switch (node.type) {
    case "Identifier":
      return true;
    case "MemberExpression":
      return !node.computed && tsIsEntityName(node.object);
    case "TSInstantiationExpression":
      return tsIsEntityName(node.expression);
    default:
      return false;
  }
}
var typescript = superClass => class TypeScriptParserMixin extends superClass {
  getScopeHandler() {
    return TypeScriptScopeHandler;
  }
  tsIsIdentifier() {
    return tokenIsIdentifier(this.state.type);
  }
  tsTokenCanFollowModifier() {
    return this.match(0) || this.match(2) || this.match(51) || this.match(17) || this.match(134) || this.isLiteralPropertyName();
  }
  tsNextTokenOnSameLineAndCanFollowModifier() {
    this.next();
    if (this.hasPrecedingLineBreak()) {
      return false;
    }
    return this.tsTokenCanFollowModifier();
  }
  tsNextTokenCanFollowModifier() {
    if (this.match(102)) {
      this.next();
      return this.tsTokenCanFollowModifier();
    }
    return this.tsNextTokenOnSameLineAndCanFollowModifier();
  }
  tsParseModifier(allowedModifiers, stopOnStartOfClassStaticBlock, hasSeenStaticModifier) {
    if (!tokenIsIdentifier(this.state.type) && this.state.type !== 54 && this.state.type !== 71) {
      return undefined;
    }
    const modifier = this.state.value;
    if (allowedModifiers.includes(modifier)) {
      if (hasSeenStaticModifier && this.match(102)) {
        return undefined;
      }
      if (stopOnStartOfClassStaticBlock && this.tsIsStartOfStaticBlocks()) {
        return undefined;
      }
      if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
        return modifier;
      }
    }
    return undefined;
  }
  tsParseModifiers({
    allowedModifiers,
    disallowedModifiers,
    stopOnStartOfClassStaticBlock,
    errorTemplate = TSErrors.InvalidModifierOnTypeMember
  }, modified) {
    const enforceOrder = (loc, modifier, before, after) => {
      if (modifier === before && modified[after]) {
        this.raise(TSErrors.InvalidModifiersOrder, loc, {
          orderedModifiers: [before, after]
        });
      }
    };
    const incompatible = (loc, modifier, mod1, mod2) => {
      if (modified[mod1] && modifier === mod2 || modified[mod2] && modifier === mod1) {
        this.raise(TSErrors.IncompatibleModifiers, loc, {
          modifiers: [mod1, mod2]
        });
      }
    };
    for (;;) {
      const {
        startLoc
      } = this.state;
      const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers ?? []), stopOnStartOfClassStaticBlock, modified.static);
      if (!modifier) break;
      if (tsIsAccessModifier(modifier)) {
        if (modified.accessibility) {
          this.raise(TSErrors.DuplicateAccessibilityModifier, startLoc, {
            modifier
          });
        } else {
          enforceOrder(startLoc, modifier, modifier, "override");
          enforceOrder(startLoc, modifier, modifier, "static");
          enforceOrder(startLoc, modifier, modifier, "readonly");
          modified.accessibility = modifier;
        }
      } else if (tsIsVarianceAnnotations(modifier)) {
        if (modified[modifier]) {
          this.raise(TSErrors.DuplicateModifier, startLoc, {
            modifier
          });
        }
        modified[modifier] = true;
        enforceOrder(startLoc, modifier, "in", "out");
      } else {
        if (Object.hasOwn(modified, modifier)) {
          this.raise(TSErrors.DuplicateModifier, startLoc, {
            modifier
          });
        } else {
          enforceOrder(startLoc, modifier, "static", "readonly");
          enforceOrder(startLoc, modifier, "static", "override");
          enforceOrder(startLoc, modifier, "override", "readonly");
          enforceOrder(startLoc, modifier, "abstract", "override");
          incompatible(startLoc, modifier, "declare", "override");
          incompatible(startLoc, modifier, "static", "abstract");
        }
        modified[modifier] = true;
      }
      if (disallowedModifiers?.includes(modifier)) {
        this.raise(errorTemplate, startLoc, {
          modifier
        });
      }
    }
  }
  tsIsListTerminator(kind) {
    switch (kind) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(4);
      case "HeritageClauseElement":
        return this.match(2);
      case "TupleElementTypes":
        return this.match(1);
      case "TypeParametersOrArguments":
        return this.match(44);
    }
  }
  tsParseList(kind, parseElement) {
    const result = [];
    while (!this.tsIsListTerminator(kind)) {
      result.push(parseElement());
    }
    return result;
  }
  tsParseDelimitedList(kind, parseElement, refTrailingCommaPos) {
    return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true, refTrailingCommaPos));
  }
  tsParseDelimitedListWorker(kind, parseElement, expectSuccess, refTrailingCommaPos) {
    const result = [];
    let trailingCommaPos = -1;
    for (;;) {
      if (this.tsIsListTerminator(kind)) {
        break;
      }
      trailingCommaPos = -1;
      const element = parseElement();
      if (element == null) {
        return undefined;
      }
      result.push(element);
      if (this.eat(8)) {
        trailingCommaPos = this.state.lastTokStartLoc.index;
        continue;
      }
      if (this.tsIsListTerminator(kind)) {
        break;
      }
      if (expectSuccess) {
        this.expect(8);
      }
      return undefined;
    }
    if (refTrailingCommaPos) {
      refTrailingCommaPos.value = trailingCommaPos;
    }
    return result;
  }
  tsParseBracketedList(kind, parseElement, bracket, skipFirstToken, refTrailingCommaPos) {
    if (!skipFirstToken) {
      if (bracket) {
        this.expect(0);
      } else {
        this.expect(43);
      }
    }
    const result = this.tsParseDelimitedList(kind, parseElement, refTrailingCommaPos);
    if (bracket) {
      this.expect(1);
    } else {
      this.expect(44);
    }
    return result;
  }
  tsParseImportType() {
    const node = this.startNode();
    this.expect(79);
    this.expect(6);
    if (!this.match(130)) {
      this.raise(TSErrors.UnsupportedImportTypeArgument, this.state.startLoc);
      node.source = this.tsParseNonConditionalType();
    } else {
      node.source = this.parseStringLiteral(this.state.value);
    }
    if (this.eat(8)) {
      node.options = this.tsParseImportTypeOptions();
    } else {
      node.options = null;
    }
    this.expect(7);
    if (this.eat(12)) {
      node.qualifier = this.tsParseEntityName(1 | 2);
    }
    if (this.match(43)) {
      node.typeArguments = this.tsParseTypeArguments();
    }
    return this.finishNode(node, "TSImportType");
  }
  tsParseImportTypeOptions() {
    const node = this.startNode();
    this.expect(2);
    const withProperty = this.startNode();
    if (this.isContextual(72)) {
      withProperty.method = false;
      withProperty.key = this.parseIdentifier(true);
      withProperty.computed = false;
      withProperty.shorthand = false;
    } else {
      this.unexpected(null, 72);
    }
    this.expect(10);
    withProperty.value = this.tsParseImportTypeWithPropertyValue();
    node.properties = [this.finishObjectProperty(withProperty)];
    this.eat(8);
    this.expect(4);
    return this.finishNode(node, "ObjectExpression");
  }
  tsParseImportTypeWithPropertyValue() {
    const node = this.startNode();
    const properties = [];
    this.expect(2);
    while (!this.match(4)) {
      const type = this.state.type;
      if (tokenIsIdentifier(type) || type === 130) {
        properties.push(super.parsePropertyDefinition(null));
      } else {
        this.unexpected();
      }
      this.eat(8);
    }
    node.properties = properties;
    this.next();
    return this.finishNode(node, "ObjectExpression");
  }
  tsParseEntityName(flags) {
    let entity;
    if (flags & 1 && this.match(74)) {
      if (flags & 2) {
        entity = this.parseIdentifier(true);
      } else {
        const node = this.startNode();
        this.next();
        entity = this.finishNode(node, "ThisExpression");
      }
    } else {
      entity = this.parseIdentifier(!!(flags & 1));
    }
    while (this.eat(12)) {
      const node = this.startNodeAtNode(entity);
      node.left = entity;
      node.right = this.parseIdentifier(!!(flags & 1));
      entity = this.finishNode(node, "TSQualifiedName");
    }
    return entity;
  }
  tsParseTypeReference() {
    const node = this.startNode();
    node.typeName = this.tsParseEntityName(1);
    if (!this.hasPrecedingLineBreak() && this.match(43)) {
      node.typeArguments = this.tsParseTypeArguments();
    }
    return this.finishNode(node, "TSTypeReference");
  }
  tsParseThisTypePredicate(lhs) {
    this.next();
    const node = this.startNodeAtNode(lhs);
    node.parameterName = lhs;
    node.typeAnnotation = this.tsParseTypeAnnotation(false);
    node.asserts = false;
    return this.finishNode(node, "TSTypePredicate");
  }
  tsParseThisTypeNode() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "TSThisType");
  }
  tsParseTypeQuery() {
    const node = this.startNode();
    this.expect(83);
    if (this.match(79)) {
      node.exprName = this.tsParseImportType();
    } else {
      node.exprName = this.tsParseEntityName(1);
    }
    if (!this.hasPrecedingLineBreak() && this.match(43)) {
      node.typeArguments = this.tsParseTypeArguments();
    }
    return this.finishNode(node, "TSTypeQuery");
  }
  tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
    allowedModifiers: ["in", "out"],
    disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
    errorTemplate: TSErrors.InvalidModifierOnTypeParameter
  });
  tsParseConstModifier = this.tsParseModifiers.bind(this, {
    allowedModifiers: ["const"],
    disallowedModifiers: ["in", "out"],
    errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
  });
  tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
    allowedModifiers: ["in", "out", "const"],
    disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
    errorTemplate: TSErrors.InvalidModifierOnTypeParameter
  });
  tsParseTypeParameter(parseModifiers) {
    const node = this.startNode();
    parseModifiers(node);
    node.name = this.tsParseTypeParameterName();
    node.constraint = this.tsEatThenParseType(77);
    node.default = this.tsEatThenParseType(25);
    return this.finishNode(node, "TSTypeParameter");
  }
  tsTryParseTypeParameters(parseModifiers) {
    if (this.match(43)) {
      return this.tsParseTypeParameters(parseModifiers);
    }
  }
  tsParseTypeParameters(parseModifiers) {
    const node = this.startNode();
    if (this.match(43) || this.match(138)) {
      this.next();
    } else {
      this.unexpected();
    }
    const refTrailingCommaPos = {
      value: -1
    };
    node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, parseModifiers), false, true, refTrailingCommaPos);
    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeParameters, node);
    }
    if (refTrailingCommaPos.value !== -1) {
      this.addExtra(node, "trailingComma", refTrailingCommaPos.value);
    }
    return this.finishNode(node, "TSTypeParameterDeclaration");
  }
  tsFillSignature(returnToken, signature) {
    const returnTokenRequired = returnToken === 15;
    const paramsKey = "params";
    const returnTypeKey = "returnType";
    signature.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    this.expect(6);
    signature[paramsKey] = this.tsParseBindingListForSignature();
    if (returnTokenRequired) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    } else if (this.match(returnToken)) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    }
  }
  tsParseBindingListForSignature() {
    const list = super.parseBindingList(7, 41, 2);
    for (const pattern of list) {
      const {
        type
      } = pattern;
      if (type === "AssignmentPattern" || type === "TSParameterProperty") {
        this.raise(TSErrors.UnsupportedSignatureParameterKind, pattern, {
          type
        });
      }
    }
    return list;
  }
  tsParseTypeMemberSemicolon() {
    if (!this.eat(8) && !this.isLineTerminator()) {
      this.expect(9);
    }
  }
  tsParseSignatureMember(kind, node) {
    this.tsFillSignature(10, node);
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, kind);
  }
  tsIsUnambiguouslyIndexSignature() {
    this.next();
    if (tokenIsIdentifier(this.state.type)) {
      this.next();
      return this.match(10);
    }
    return false;
  }
  tsTryParseIndexSignature(node) {
    if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
      return;
    }
    this.expect(0);
    const id = this.parseIdentifier();
    id.typeAnnotation = this.tsParseTypeAnnotation();
    this.resetEndLocation(id);
    this.expect(1);
    node.parameters = [id];
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, "TSIndexSignature");
  }
  tsParsePropertyOrMethodSignature(node, readonly) {
    if (this.eat(13)) node.optional = true;
    if (this.match(6) || this.match(43)) {
      if (readonly) {
        this.raise(TSErrors.ReadonlyForMethodSignature, node);
      }
      const method = node;
      if (method.kind && this.match(43)) {
        this.raise(TSErrors.AccessorCannotHaveTypeParameters, this.state.curPosition());
      }
      this.tsFillSignature(10, method);
      this.tsParseTypeMemberSemicolon();
      if (method.kind === "get") {
        if (method.params.length > 0) {
          this.raise(Errors.BadGetterArity, this.state.curPosition());
          if (this.isThisParam(method.params[0])) {
            this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
          }
        }
      } else if (method.kind === "set") {
        if (method.params.length !== 1) {
          this.raise(Errors.BadSetterArity, this.state.curPosition());
        } else {
          const firstParameter = method.params[0];
          if (this.isThisParam(firstParameter)) {
            this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
          }
          if (firstParameter.type === "Identifier" && firstParameter.optional) {
            this.raise(TSErrors.SetAccessorCannotHaveOptionalParameter, this.state.curPosition());
          }
          if (firstParameter.type === "RestElement") {
            this.raise(TSErrors.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
        }
        if (method.returnType) {
          this.raise(TSErrors.SetAccessorCannotHaveReturnType, method.returnType);
        }
      } else {
        method.kind = "method";
      }
      return this.finishNode(method, "TSMethodSignature");
    } else {
      const property = node;
      if (readonly) property.readonly = true;
      const type = this.tsTryParseTypeAnnotation();
      if (type) property.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(property, "TSPropertySignature");
    }
  }
  tsParseTypeMember() {
    const node = this.startNode();
    if (this.match(6) || this.match(43)) {
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
    }
    if (this.match(73)) {
      const id = this.startNode();
      this.next();
      if (this.match(6) || this.match(43)) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
      } else {
        node.key = this.createIdentifier(id, "new");
        return this.tsParsePropertyOrMethodSignature(node, false);
      }
    }
    this.tsParseModifiers({
      allowedModifiers: ["readonly"],
      disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
    }, node);
    const idx = this.tsTryParseIndexSignature(node);
    if (idx) {
      return idx;
    }
    super.parsePropertyName(node);
    if (!node.computed && node.key.type === "Identifier" && (node.key.name === "get" || node.key.name === "set") && this.tsTokenCanFollowModifier()) {
      node.kind = node.key.name;
      super.parsePropertyName(node);
      if (!this.match(6) && !this.match(43)) {
        this.unexpected(null, 6);
      }
    }
    return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
  }
  tsParseTypeLiteral() {
    const node = this.startNode();
    node.members = this.tsParseObjectTypeMembers();
    return this.finishNode(node, "TSTypeLiteral");
  }
  tsParseObjectTypeMembers() {
    this.expect(2);
    const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    this.expect(4);
    return members;
  }
  tsIsStartOfMappedType() {
    this.next();
    if (this.eat(49)) {
      return this.isContextual(118);
    }
    if (this.isContextual(118)) {
      this.next();
    }
    if (!this.match(0)) {
      return false;
    }
    this.next();
    if (!this.tsIsIdentifier()) {
      return false;
    }
    this.next();
    return this.match(54);
  }
  tsParseMappedType() {
    const node = this.startNode();
    this.expect(2);
    if (this.match(49)) {
      node.readonly = this.state.value;
      this.next();
      this.expectContextual(118);
    } else if (this.eatContextual(118)) {
      node.readonly = true;
    }
    this.expect(0);
    node.key = this.tsParseTypeParameterName();
    node.constraint = this.tsExpectThenParseType(54);
    node.nameType = this.eatContextual(89) ? this.tsParseType() : null;
    this.expect(1);
    if (this.match(49)) {
      node.optional = this.state.value;
      this.next();
      this.expect(13);
    } else if (this.eat(13)) {
      node.optional = true;
    }
    node.typeAnnotation = this.tsTryParseType();
    this.semicolon();
    this.expect(4);
    return this.finishNode(node, "TSMappedType");
  }
  tsParseTupleType() {
    const node = this.startNode();
    node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let seenOptionalElement = false;
    node.elementTypes.forEach(elementNode => {
      const {
        type
      } = elementNode;
      if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
        this.raise(TSErrors.OptionalTypeBeforeRequired, elementNode);
      }
      seenOptionalElement ||= type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType";
    });
    return this.finishNode(node, "TSTupleType");
  }
  tsParseTupleElementType() {
    const restStartLoc = this.state.startLoc;
    const rest = this.eat(17);
    const {
      startLoc
    } = this.state;
    let labeled;
    let label;
    let optional;
    let type;
    const isWord = tokenIsKeywordOrIdentifier(this.state.type);
    const chAfterWord = isWord ? this.lookaheadCharCode() : null;
    if (chAfterWord === 58) {
      labeled = true;
      optional = false;
      label = this.parseIdentifier(true);
      this.expect(10);
      type = this.tsParseType();
    } else if (chAfterWord === 63) {
      optional = true;
      const wordName = this.state.value;
      const typeOrLabel = this.tsParseNonArrayType();
      if (this.lookaheadCharCode() === 58) {
        labeled = true;
        label = this.createIdentifier(this.startNodeAt(startLoc), wordName);
        this.expect(13);
        this.expect(10);
        type = this.tsParseType();
      } else {
        labeled = false;
        type = typeOrLabel;
        this.expect(13);
      }
    } else {
      type = this.tsParseType();
      optional = this.eat(13);
      labeled = this.eat(10);
    }
    if (labeled) {
      let labeledNode;
      if (label) {
        labeledNode = this.startNodeAt(startLoc);
        labeledNode.optional = optional;
        labeledNode.label = label;
        labeledNode.elementType = type;
        if (this.eat(13)) {
          labeledNode.optional = true;
          this.raise(TSErrors.TupleOptionalAfterType, this.state.lastTokStartLoc);
        }
      } else {
        labeledNode = this.startNodeAt(startLoc);
        labeledNode.optional = optional;
        this.raise(TSErrors.InvalidTupleMemberLabel, type);
        labeledNode.label = type;
        labeledNode.elementType = this.tsParseType();
      }
      type = this.finishNode(labeledNode, "TSNamedTupleMember");
    } else if (optional) {
      const optionalTypeNode = this.startNodeAt(startLoc);
      optionalTypeNode.typeAnnotation = type;
      type = this.finishNode(optionalTypeNode, "TSOptionalType");
    }
    if (rest) {
      const restNode = this.startNodeAt(restStartLoc);
      restNode.typeAnnotation = type;
      type = this.finishNode(restNode, "TSRestType");
    }
    return type;
  }
  tsParseParenthesizedType() {
    const node = this.startNode();
    this.expect(6);
    node.typeAnnotation = this.tsParseType();
    this.expect(7);
    return this.finishNode(node, "TSParenthesizedType");
  }
  tsParseFunctionOrConstructorType(type, abstract) {
    const node = this.startNode();
    if (type === "TSConstructorType") {
      node.abstract = !!abstract;
      if (abstract) this.next();
      this.next();
    }
    this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(15, node));
    return this.finishNode(node, type);
  }
  tsParseLiteralTypeNode() {
    const node = this.startNode();
    switch (this.state.type) {
      case 131:
      case 132:
      case 130:
      case 81:
      case 82:
        node.literal = super.parseExprAtom();
        break;
      default:
        this.unexpected();
    }
    return this.finishNode(node, "TSLiteralType");
  }
  tsParseTemplateLiteralType() {
    const startLoc = this.state.startLoc;
    let curElt = this.parseTemplateElement(false);
    const quasis = [curElt];
    if (curElt.tail) {
      const node = this.startNodeAt(startLoc);
      const literal = this.startNodeAt(startLoc);
      literal.expressions = [];
      literal.quasis = quasis;
      node.literal = this.finishNode(literal, "TemplateLiteral");
      return this.finishNode(node, "TSLiteralType");
    } else {
      const substitutions = [];
      while (!curElt.tail) {
        substitutions.push(this.tsParseType());
        this.readTemplateContinuation();
        quasis.push(curElt = this.parseTemplateElement(false));
      }
      const node = this.startNodeAt(startLoc);
      node.types = substitutions;
      node.quasis = quasis;
      return this.finishNode(node, "TSTemplateLiteralType");
    }
  }
  parseTemplateSubstitution() {
    if (this.state.inType) return this.tsParseType();
    return super.parseTemplateSubstitution();
  }
  tsParseThisTypeOrThisTypePredicate() {
    const thisKeyword = this.tsParseThisTypeNode();
    if (this.isContextual(112) && !this.hasPrecedingLineBreak()) {
      return this.tsParseThisTypePredicate(thisKeyword);
    } else {
      return thisKeyword;
    }
  }
  tsParseNonArrayType() {
    switch (this.state.type) {
      case 130:
      case 131:
      case 132:
      case 81:
      case 82:
        return this.tsParseLiteralTypeNode();
      case 49:
        if (this.state.value === "-") {
          const node = this.startNode();
          const nextToken = this.lookahead();
          if (nextToken.type !== 131 && nextToken.type !== 132) {
            this.unexpected();
          }
          node.literal = this.parseMaybeUnary();
          return this.finishNode(node, "TSLiteralType");
        }
        break;
      case 74:
        return this.tsParseThisTypeOrThisTypePredicate();
      case 83:
        return this.tsParseTypeQuery();
      case 79:
        return this.tsParseImportType();
      case 2:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
      case 0:
        return this.tsParseTupleType();
      case 6:
        if (!(this.optionFlags & 2048)) {
          const startLoc = this.state.startLoc;
          this.next();
          const type = this.tsParseType();
          this.expect(7);
          this.addExtra(type, "parenthesized", true);
          this.addExtra(type, "parenStart", startLoc.index);
          return type;
        }
        return this.tsParseParenthesizedType();
      case 21:
      case 20:
        return this.tsParseTemplateLiteralType();
      default:
        {
          const {
            type
          } = this.state;
          if (tokenIsIdentifier(type) || type === 84 || type === 80) {
            const nodeType = type === 84 ? "TSVoidKeyword" : type === 80 ? "TSNullKeyword" : keywordTypeFromName(this.state.value);
            if (nodeType !== undefined && this.lookaheadCharCode() !== 46) {
              const node = this.startNode();
              this.next();
              return this.finishNode(node, nodeType);
            }
            return this.tsParseTypeReference();
          }
        }
    }
    throw this.unexpected();
  }
  tsParseArrayTypeOrHigher() {
    const {
      startLoc
    } = this.state;
    let type = this.tsParseNonArrayType();
    while (!this.hasPrecedingLineBreak() && this.eat(0)) {
      if (this.match(1)) {
        const node = this.startNodeAt(startLoc);
        node.elementType = type;
        this.expect(1);
        type = this.finishNode(node, "TSArrayType");
      } else {
        const node = this.startNodeAt(startLoc);
        node.objectType = type;
        node.indexType = this.tsParseType();
        this.expect(1);
        type = this.finishNode(node, "TSIndexedAccessType");
      }
    }
    return type;
  }
  tsParseTypeOperator() {
    const node = this.startNode();
    const operator = this.state.value;
    this.next();
    node.operator = operator;
    node.typeAnnotation = this.tsParseTypeOperatorOrHigher();
    if (operator === "readonly") {
      this.tsCheckTypeAnnotationForReadOnly(node);
    }
    return this.finishNode(node, "TSTypeOperator");
  }
  tsCheckTypeAnnotationForReadOnly(node) {
    switch (node.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;
      default:
        this.raise(TSErrors.UnexpectedReadonly, node);
    }
  }
  tsParseInferType() {
    const node = this.startNode();
    this.expectContextual(111);
    const typeParameter = this.startNode();
    typeParameter.name = this.tsParseTypeParameterName();
    typeParameter.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType());
    node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    return this.finishNode(node, "TSInferType");
  }
  tsParseConstraintForInferType() {
    if (this.eat(77)) {
      const constraint = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
      if (this.state.inDisallowConditionalTypesContext || !this.match(13)) {
        return constraint;
      }
    }
  }
  tsParseTypeOperatorOrHigher() {
    const isTypeOperator = tokenIsTSTypeOperator(this.state.type) && !this.state.containsEsc;
    return isTypeOperator ? this.tsParseTypeOperator() : this.isContextual(111) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
  }
  tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
    const node = this.startNode();
    const hasLeadingOperator = this.eat(operator);
    const types = [];
    do {
      types.push(parseConstituentType());
    } while (this.eat(operator));
    if (types.length === 1 && !hasLeadingOperator) {
      return types[0];
    }
    node.types = types;
    return this.finishNode(node, kind);
  }
  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 41);
  }
  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 39);
  }
  tsIsStartOfFunctionType() {
    if (this.match(43)) {
      return true;
    }
    return this.match(6) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }
  tsSkipParameterStart() {
    if (tokenIsIdentifier(this.state.type) || this.match(74)) {
      this.next();
      return true;
    }
    if (this.match(2)) {
      const {
        errors
      } = this.state;
      const previousErrorCount = errors.length;
      try {
        this.parseObjectLike(4, true);
        return errors.length === previousErrorCount;
      } catch {
        return false;
      }
    }
    if (this.match(0)) {
      this.next();
      const {
        errors
      } = this.state;
      const previousErrorCount = errors.length;
      try {
        super.parseBindingList(1, 93, 1);
        return errors.length === previousErrorCount;
      } catch {
        return false;
      }
    }
    return false;
  }
  tsIsUnambiguouslyStartOfFunctionType() {
    this.next();
    if (this.match(7) || this.match(17)) {
      return true;
    }
    if (this.tsSkipParameterStart()) {
      if (this.match(10) || this.match(8) || this.match(13) || this.match(25)) {
        return true;
      }
      if (this.match(7)) {
        this.next();
        if (this.match(15)) {
          return true;
        }
      }
    }
    return false;
  }
  tsParseTypeOrTypePredicateAnnotation(returnToken) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(returnToken);
      const node = this.startNode();
      const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
      if (asserts && this.match(74)) {
        let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();
        if (thisTypePredicate.type === "TSThisType") {
          node.parameterName = thisTypePredicate;
          node.asserts = true;
          node.typeAnnotation = null;
          thisTypePredicate = this.finishNode(node, "TSTypePredicate");
        } else {
          this.resetStartLocationFromNode(thisTypePredicate, node);
          thisTypePredicate.asserts = true;
        }
        t.typeAnnotation = thisTypePredicate;
        return this.finishNode(t, "TSTypeAnnotation");
      }
      const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
      if (!typePredicateVariable) {
        if (!asserts) {
          return this.tsParseTypeAnnotation(false, t);
        }
        node.parameterName = this.parseIdentifier();
        node.asserts = asserts;
        node.typeAnnotation = null;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      }
      const type = this.tsParseTypeAnnotation(false);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      node.asserts = asserts;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    });
  }
  tsTryParseTypeOrTypePredicateAnnotation() {
    if (this.match(10)) {
      return this.tsParseTypeOrTypePredicateAnnotation(10);
    }
  }
  tsTryParseTypeAnnotation() {
    if (this.match(10)) {
      return this.tsParseTypeAnnotation();
    }
  }
  tsTryParseType() {
    return this.tsEatThenParseType(10);
  }
  tsParseTypePredicatePrefix() {
    const id = this.parseIdentifier();
    if (this.isContextual(112) && !this.hasPrecedingLineBreak()) {
      this.next();
      return id;
    }
  }
  tsParseTypePredicateAsserts() {
    if (this.state.type !== 105) {
      return false;
    }
    const containsEsc = this.state.containsEsc;
    this.next();
    if (!tokenIsIdentifier(this.state.type) && !this.match(74)) {
      return false;
    }
    if (containsEsc) {
      this.raise(Errors.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      });
    }
    return true;
  }
  tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
    this.tsInType(() => {
      if (eatColon) this.expect(10);
      t.typeAnnotation = this.tsParseType();
    });
    return this.finishNode(t, "TSTypeAnnotation");
  }
  tsParseType() {
    assert(this.state.inType);
    const type = this.tsParseNonConditionalType();
    if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(77)) {
      return type;
    }
    const node = this.startNodeAtNode(type);
    node.checkType = type;
    node.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType());
    this.expect(13);
    node.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
    this.expect(10);
    node.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
    return this.finishNode(node, "TSConditionalType");
  }
  isAbstractConstructorSignature() {
    return this.isContextual(120) && this.isLookaheadContextual("new");
  }
  tsParseNonConditionalType() {
    if (this.tsIsStartOfFunctionType()) {
      return this.tsParseFunctionOrConstructorType("TSFunctionType");
    }
    if (this.match(73)) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType");
    } else if (this.isAbstractConstructorSignature()) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType", true);
    }
    return this.tsParseUnionTypeOrHigher();
  }
  tsParseTypeAssertion() {
    if (this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedTypeAssertion, this.state.startLoc);
    }
    const node = this.startNode();
    node.typeAnnotation = this.tsInType(() => {
      this.next();
      return this.match(71) ? this.tsParseTypeReference() : this.tsParseType();
    });
    this.expect(44);
    node.expression = this.parseMaybeUnary();
    return this.finishNode(node, "TSTypeAssertion");
  }
  tsParseHeritageClause(token) {
    const originalStartLoc = this.state.startLoc;
    const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", () => {
      const expression = (this.state.canStartArrow = false, super.parseExprSubscripts());
      if (!tsIsEntityName(expression)) {
        this.raise(TSErrors.InvalidHeritageClauseType, expression.start, {
          token
        });
      }
      const nodeType = token === "extends" ? "TSInterfaceHeritage" : "TSClassImplements";
      if (expression.type === "TSInstantiationExpression") {
        expression.type = nodeType;
        return expression;
      }
      const node = this.startNodeAtNode(expression);
      node.expression = expression;
      if (this.match(43) || this.match(47)) {
        node.typeArguments = this.tsParseTypeArgumentsInExpression();
      }
      return this.finishNode(node, nodeType);
    });
    if (!delimitedList.length) {
      this.raise(TSErrors.EmptyHeritageClauseType, originalStartLoc, {
        token
      });
    }
    return delimitedList;
  }
  tsParseInterfaceDeclaration(node, properties = {}) {
    if (this.hasFollowingLineBreak()) return null;
    this.expectContextual(125);
    if (properties.declare) node.declare = true;
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();
      this.checkIdentifier(node.id, 130);
    } else {
      node.id = null;
      this.raise(TSErrors.MissingInterfaceName, this.state.startLoc);
    }
    node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
    if (this.eat(77)) {
      node.extends = this.tsParseHeritageClause("extends");
    }
    const body = this.startNode();
    body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
    node.body = this.finishNode(body, "TSInterfaceBody");
    return this.finishNode(node, "TSInterfaceDeclaration");
  }
  tsParseTypeAliasDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkIdentifier(node.id, 2);
    node.typeAnnotation = this.tsInType(() => {
      node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers);
      this.expect(25);
      if (this.isContextual(110) && this.lookaheadCharCode() !== 46) {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "TSIntrinsicKeyword");
      }
      return this.tsParseType();
    });
    this.semicolon();
    return this.finishNode(node, "TSTypeAliasDeclaration");
  }
  tsInTopLevelContext(cb) {
    if (this.curContext() !== types.brace) {
      const oldContext = this.state.context;
      this.state.context = [oldContext[0]];
      try {
        return cb();
      } finally {
        this.state.context = oldContext;
      }
    } else {
      return cb();
    }
  }
  tsInType(cb) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    try {
      return cb();
    } finally {
      this.state.inType = oldInType;
    }
  }
  tsInDisallowConditionalTypesContext(cb) {
    const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
    this.state.inDisallowConditionalTypesContext = true;
    try {
      return cb();
    } finally {
      this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    }
  }
  tsInAllowConditionalTypesContext(cb) {
    const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
    this.state.inDisallowConditionalTypesContext = false;
    try {
      return cb();
    } finally {
      this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    }
  }
  tsEatThenParseType(token) {
    if (this.match(token)) {
      return this.tsNextThenParseType();
    }
  }
  tsExpectThenParseType(token) {
    return this.tsInType(() => {
      this.expect(token);
      return this.tsParseType();
    });
  }
  tsNextThenParseType() {
    return this.tsInType(() => {
      this.next();
      return this.tsParseType();
    });
  }
  tsParseEnumMember() {
    const node = this.startNode();
    node.id = this.match(130) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true);
    if (this.eat(25)) {
      node.initializer = super.parseMaybeAssignAllowIn();
    }
    return this.finishNode(node, "TSEnumMember");
  }
  tsParseEnumDeclaration(node, properties = {}) {
    if (properties.const) node.const = true;
    if (properties.declare) node.declare = true;
    this.expectContextual(122);
    node.id = this.parseIdentifier();
    this.checkIdentifier(node.id, node.const ? 8971 : 8459);
    node.body = this.tsParseEnumBody();
    return this.finishNode(node, "TSEnumDeclaration");
  }
  tsParseEnumBody() {
    const node = this.startNode();
    this.expect(2);
    node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
    this.expect(4);
    return this.finishNode(node, "TSEnumBody");
  }
  tsParseModuleBlock() {
    const node = this.startNode();
    this.scope.enter(0);
    this.expect(2);
    super.parseBlockOrModuleBlockBody(node.body = [], undefined, true, 4);
    this.scope.exit();
    return this.finishNode(node, "TSModuleBlock");
  }
  tsParseNamespaceDeclaration(node) {
    node.id = this.tsParseEntityName(1);
    if (node.id.type === "Identifier") {
      this.checkIdentifier(node.id, 1024);
    }
    this.scope.enter(1024);
    this.prodParam.enter(0);
    node.body = this.tsParseModuleBlock();
    this.prodParam.exit();
    this.scope.exit();
    return this.finishNode(node, "TSModuleDeclaration");
  }
  tsParseAmbientExternalModuleDeclaration(node) {
    if (this.isContextual(108)) {
      node.kind = "global";
      node.id = this.parseIdentifier();
    } else {
      node.kind = "module";
      node.id = super.parseStringLiteral(this.state.value);
    }
    if (this.match(2)) {
      this.scope.enter(1024);
      this.prodParam.enter(0);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    } else {
      this.semicolon();
    }
    return this.finishNode(node, "TSModuleDeclaration");
  }
  tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier) {
    node.id = maybeDefaultIdentifier || this.parseIdentifier();
    this.checkIdentifier(node.id, 4096);
    this.expect(25);
    const moduleReference = this.tsParseModuleReference();
    if (node.importKind === "type" && moduleReference.type !== "TSExternalModuleReference") {
      this.raise(TSErrors.ImportAliasHasImportType, moduleReference);
    }
    node.moduleReference = moduleReference;
    this.semicolon();
    return this.finishNode(node, "TSImportEqualsDeclaration");
  }
  tsIsExternalModuleReference() {
    return this.isContextual(115) && this.lookaheadCharCode() === 40;
  }
  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
  }
  tsParseExternalModuleReference() {
    const node = this.startNode();
    this.expectContextual(115);
    this.expect(6);
    if (!this.match(130)) {
      this.unexpected();
    }
    node.expression = super.parseExprAtom();
    this.expect(7);
    this.sawUnambiguousESM = true;
    return this.finishNode(node, "TSExternalModuleReference");
  }
  tsLookAhead(f) {
    const state = this.state.clone();
    const res = f();
    this.state = state;
    return res;
  }
  tsTryParseAndCatch(f) {
    const result = this.tryParse(abort => f() || abort());
    if (result.aborted || !result.node) return;
    if (result.error) this.state = result.failState;
    return result.node;
  }
  tsTryParse(f) {
    const state = this.state.clone();
    const result = f();
    if (result !== undefined && result !== false) {
      return result;
    }
    this.state = state;
  }
  tsTryParseDeclare(node) {
    if (this.isLineTerminator()) {
      return;
    }
    const startType = this.state.type;
    return this.tsInAmbientContext(() => {
      switch (startType) {
        case 64:
          node.declare = true;
          return super.parseFunctionStatement(node, false, false);
        case 76:
          node.declare = true;
          return this.parseClass(node, true, false);
        case 122:
          return this.tsParseEnumDeclaration(node, {
            declare: true
          });
        case 108:
          return this.tsParseAmbientExternalModuleDeclaration(node);
        case 96:
          if (this.state.containsEsc) {
            return;
          }
        case 71:
        case 70:
          if (!this.match(71) || !this.isLookaheadContextual("enum")) {
            node.declare = true;
            return this.parseVarStatement(node, this.state.value, true);
          }
          this.expect(71);
          return this.tsParseEnumDeclaration(node, {
            const: true,
            declare: true
          });
        case 103:
          if (this.isUsing()) {
            this.raise(TSErrors.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare");
            node.declare = true;
            return this.parseVarStatement(node, "using", true);
          }
          break;
        case 92:
          if (this.isAwaitUsing()) {
            this.raise(TSErrors.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare");
            node.declare = true;
            this.next();
            return this.parseVarStatement(node, "await using", true);
          }
          break;
        case 125:
          {
            const result = this.tsParseInterfaceDeclaration(node, {
              declare: true
            });
            if (result) return result;
          }
        default:
          if (tokenIsIdentifier(startType)) {
            return this.tsParseDeclaration(node, this.state.type, true, null);
          }
      }
    });
  }
  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.type, true, null);
  }
  tsParseDeclaration(node, type, next, decorators) {
    switch (type) {
      case 120:
        if (this.tsCheckLineTerminator(next) && (this.match(76) || tokenIsIdentifier(this.state.type))) {
          return this.tsParseAbstractDeclaration(node, decorators);
        }
        break;
      case 123:
        if (this.tsCheckLineTerminator(next)) {
          return this.tsParseAmbientExternalModuleDeclaration(node);
        }
        break;
      case 124:
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          node.kind = "namespace";
          return this.tsParseNamespaceDeclaration(node);
        }
        break;
      case 126:
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          return this.tsParseTypeAliasDeclaration(node);
        }
        break;
    }
  }
  tsCheckLineTerminator(next) {
    if (next) {
      if (this.hasFollowingLineBreak()) return false;
      this.next();
      return true;
    }
    return !this.isLineTerminator();
  }
  tsTryParseGenericAsyncArrowFunction(startLoc) {
    if (!this.match(43)) return;
    const res = this.tsTryParseAndCatch(() => {
      const node = this.startNodeAt(startLoc);
      node.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
      super.parseFunctionParams(node);
      node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
      this.expect(15);
      return node;
    });
    if (!res) return;
    return super.parseArrowExpression(res, null, true);
  }
  tsParseTypeArgumentsInExpression() {
    if (this.reScan_lt() !== 43) return;
    return this.tsParseTypeArguments();
  }
  tsParseTypeArguments() {
    const node = this.startNode();
    node.params = this.tsInType(() => this.tsInTopLevelContext(() => {
      this.expect(43);
      return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
    }));
    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeArguments, node);
    } else if (!this.state.inType && this.curContext() === types.brace) {
      this.reScan_lt_gt();
    }
    this.expect(44);
    return this.finishNode(node, "TSTypeParameterInstantiation");
  }
  tsIsDeclarationStart() {
    return tokenIsTSDeclarationStart(this.state.type);
  }
  isExportDefaultSpecifier() {
    if (this.tsIsDeclarationStart()) return false;
    return super.isExportDefaultSpecifier();
  }
  parseBindingElement(flags, decorators) {
    const startLoc = decorators.length ? null : this.state.startLoc;
    const modified = {};
    this.tsParseModifiers({
      allowedModifiers: ["public", "private", "protected", "override", "readonly"]
    }, modified);
    const accessibility = modified.accessibility;
    const override = modified.override;
    const readonly = modified.readonly;
    if (!(flags & 4) && (accessibility || readonly || override)) {
      this.raise(TSErrors.UnexpectedParameterModifier, startLoc || decorators[0]);
    }
    const startLoc2 = this.state.startLoc;
    const left = this.parseMaybeDefault(startLoc2);
    if (flags & 2) {
      this.parseFunctionParamType(left);
    }
    const elt = this.parseMaybeDefault(startLoc2, left);
    if (accessibility || readonly || override) {
      const pp = startLoc ? this.startNodeAt(startLoc) : this.startNodeAtNode(decorators[0]);
      if (decorators.length) {
        pp.decorators = decorators;
      }
      if (accessibility) pp.accessibility = accessibility;
      if (readonly) pp.readonly = readonly;
      if (override) pp.override = override;
      if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
        this.raise(TSErrors.UnsupportedParameterPropertyKind, startLoc || decorators[0]);
      }
      pp.parameter = elt;
      return this.finishNode(pp, "TSParameterProperty");
    }
    if (decorators.length) {
      left.decorators = decorators;
    }
    return elt;
  }
  isSimpleParameter(node) {
    return node.type === "TSParameterProperty" && super.isSimpleParameter(node.parameter) || super.isSimpleParameter(node);
  }
  tsDisallowOptionalPattern(node) {
    for (const param of node.params) {
      if (param.type !== "Identifier" && param.optional && !this.state.isAmbientContext) {
        this.raise(TSErrors.PatternIsOptional, param);
      }
    }
  }
  setArrowFunctionParameters(node, params, trailingCommaLoc) {
    super.setArrowFunctionParameters(node, params, trailingCommaLoc);
    this.tsDisallowOptionalPattern(node);
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(10)) {
      node.returnType = this.tsParseTypeOrTypePredicateAnnotation(10);
    }
    const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" || type === "ClassPrivateMethod" ? "TSDeclareMethod" : undefined;
    if (bodilessType && !this.match(2) && this.isLineTerminator()) {
      return this.finishNode(node, bodilessType);
    }
    if (bodilessType === "TSDeclareFunction" && this.state.isAmbientContext) {
      this.raise(TSErrors.DeclareFunctionHasImplementation, node);
      if (node.declare) {
        return super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
      }
    }
    this.tsDisallowOptionalPattern(node);
    return super.parseFunctionBodyAndFinish(node, type, isMethod);
  }
  registerFunctionStatementId(node) {
    if (!node.body && node.id) {
      this.checkIdentifier(node.id, 1024);
    } else {
      super.registerFunctionStatementId(node);
    }
  }
  tsCheckForInvalidTypeCasts(items) {
    items.forEach(node => {
      if (node?.type === "TSTypeCastExpression") {
        this.raise(TSErrors.UnexpectedTypeAnnotation, node.typeAnnotation);
      }
    });
  }
  toReferencedList(exprList, isInParens) {
    this.tsCheckForInvalidTypeCasts(exprList);
    return exprList;
  }
  parseArrayLike(close, refExpressionErrors) {
    const node = super.parseArrayLike(close, refExpressionErrors);
    if (node.type === "ArrayExpression") {
      this.tsCheckForInvalidTypeCasts(node.elements);
    }
    return node;
  }
  parseSubscript(base, startLoc, noCalls, state) {
    if (!this.hasPrecedingLineBreak() && this.match(31)) {
      this.state.canStartJSXElement = false;
      this.next();
      const nonNullExpression = this.startNodeAt(startLoc);
      nonNullExpression.expression = base;
      return this.finishNode(nonNullExpression, "TSNonNullExpression");
    }
    let isOptionalCall = false;
    if (this.match(14) && this.lookaheadCharCode() === 60) {
      if (noCalls) {
        state.stop = true;
        return base;
      }
      state.optionalChainMember = isOptionalCall = true;
      this.next();
    }
    if (this.match(43) || this.match(47)) {
      let missingParenErrorLoc;
      const result = this.tsTryParseAndCatch(() => {
        if (!noCalls && this.atPossibleAsyncArrow(base)) {
          const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startLoc);
          if (asyncArrowFn) {
            state.stop = true;
            return asyncArrowFn;
          }
        }
        const typeArguments = this.tsParseTypeArgumentsInExpression();
        if (!typeArguments) return;
        if (isOptionalCall && !this.match(6)) {
          missingParenErrorLoc = this.state.curPosition();
          return;
        }
        if (tokenIsTemplate(this.state.type)) {
          const result = super.parseTaggedTemplateExpression(base, startLoc, state);
          result.typeArguments = typeArguments;
          return result;
        }
        if (!noCalls && this.eat(6)) {
          const node = this.startNodeAt(startLoc);
          node.callee = base;
          node.arguments = this.parseCallExpressionArguments();
          this.tsCheckForInvalidTypeCasts(node.arguments);
          node.typeArguments = typeArguments;
          if (state.optionalChainMember) {
            node.optional = isOptionalCall;
          }
          return this.finishCallExpression(node, state.optionalChainMember);
        }
        const tokenType = this.state.type;
        if (tokenType === 44 || tokenType === 48 || tokenType !== 6 && tokenType !== 89 && tokenType !== 116 && tokenCanStartExpression(tokenType) && !this.hasPrecedingLineBreak()) {
          return;
        }
        const node = this.startNodeAt(startLoc);
        node.expression = base;
        node.typeArguments = typeArguments;
        return this.finishNode(node, "TSInstantiationExpression");
      });
      if (missingParenErrorLoc) {
        this.unexpected(missingParenErrorLoc, 6);
      }
      if (result) {
        if (result.type === "TSInstantiationExpression") {
          if (this.match(12) || this.match(14) && this.lookaheadCharCode() !== 40) {
            this.raise(TSErrors.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc);
          }
          if (!this.match(12) && !this.match(14)) {
            result.expression = super.stopParseSubscript(base, state);
          }
        }
        return result;
      }
    }
    return super.parseSubscript(base, startLoc, noCalls, state);
  }
  parseNewCallee(node) {
    super.parseNewCallee(node);
    const {
      callee
    } = node;
    if (callee.type === "TSInstantiationExpression" && !callee.extra?.parenthesized) {
      node.typeArguments = callee.typeArguments;
      node.callee = callee.expression;
    }
  }
  parseExprOp(left, leftStartLoc, minPrec) {
    let isSatisfies;
    if (tokenOperatorPrecedence(54) > minPrec && !this.hasPrecedingLineBreak() && (this.isContextual(89) || (isSatisfies = this.isContextual(116)))) {
      const node = this.startNodeAt(leftStartLoc);
      node.expression = left;
      node.typeAnnotation = this.tsInType(() => {
        this.next();
        if (this.match(71)) {
          if (isSatisfies) {
            this.raise(Errors.UnexpectedKeyword, this.state.startLoc, {
              keyword: "const"
            });
          }
          return this.tsParseTypeReference();
        }
        return this.tsParseType();
      });
      this.finishNode(node, isSatisfies ? "TSSatisfiesExpression" : "TSAsExpression");
      this.reScan_lt_gt();
      return this.parseExprOp(node, leftStartLoc, minPrec);
    }
    return super.parseExprOp(left, leftStartLoc, minPrec);
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (!this.state.isAmbientContext) {
      super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
    }
  }
  checkDuplicateExports() {}
  isPotentialImportPhase(isExport) {
    if (super.isPotentialImportPhase(isExport)) return true;
    if (this.isContextual(126)) {
      const ch = this.lookaheadCharCode();
      return isExport ? ch === 123 || ch === 42 : ch !== 61;
    }
    return !isExport && this.isContextual(83);
  }
  applyImportPhase(node, isExport, phase, loc) {
    super.applyImportPhase(node, isExport, phase, loc);
    if (isExport) {
      node.exportKind = phase === "type" ? "type" : "value";
    } else {
      node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
    }
  }
  parseImport(node) {
    if (this.match(130)) {
      node.importKind = "value";
      return super.parseImport(node);
    }
    let importNode;
    if (tokenIsIdentifier(this.state.type) && this.lookaheadCharCode() === 61) {
      node.importKind = "value";
      return this.tsParseImportEqualsDeclaration(node);
    } else if (this.isContextual(126)) {
      const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, false);
      if (this.lookaheadCharCode() === 61) {
        return this.tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier);
      } else {
        importNode = super.parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier);
      }
    } else {
      importNode = super.parseImport(node);
    }
    if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
      this.raise(TSErrors.TypeImportCannotSpecifyDefaultAndNamed, importNode);
    }
    return importNode;
  }
  parseExport(node, decorators) {
    if (this.match(79)) {
      const nodeImportEquals = this.startNode();
      this.next();
      let maybeDefaultIdentifier = null;
      if (this.isContextual(126) && this.isPotentialImportPhase(false)) {
        maybeDefaultIdentifier = this.parseMaybeImportPhase(nodeImportEquals, false);
      } else {
        nodeImportEquals.importKind = "value";
      }
      const declaration = this.tsParseImportEqualsDeclaration(nodeImportEquals, maybeDefaultIdentifier);
      node.attributes = [];
      node.declaration = declaration;
      node.exportKind = "value";
      node.source = null;
      node.specifiers = [];
      return this.finishNode(node, "ExportNamedDeclaration");
    } else if (this.eat(25)) {
      const assign = node;
      assign.expression = super.parseExpression();
      this.semicolon();
      this.sawUnambiguousESM = true;
      return this.finishNode(assign, "TSExportAssignment");
    } else if (this.eatContextual(89)) {
      const decl = node;
      this.expectContextual(124);
      decl.id = this.parseIdentifier();
      this.semicolon();
      return this.finishNode(decl, "TSNamespaceExportDeclaration");
    } else {
      return super.parseExport(node, decorators);
    }
  }
  isAbstractClass() {
    return this.isContextual(120) && this.isLookaheadContextual("class");
  }
  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const cls = this.startNode();
      this.next();
      cls.abstract = true;
      return this.parseClass(cls, true, true);
    }
    if (this.match(125)) {
      const result = this.tsParseInterfaceDeclaration(this.startNode());
      if (result) return result;
    }
    return super.parseExportDefaultExpression();
  }
  parseVarStatement(node, kind, allowMissingInitializer = false) {
    const {
      isAmbientContext
    } = this.state;
    const declaration = super.parseVarStatement(node, kind, allowMissingInitializer || isAmbientContext);
    if (!isAmbientContext) return declaration;
    if (!node.declare && (kind === "using" || kind === "await using")) {
      this.raiseOverwrite(TSErrors.UsingDeclarationInAmbientContext, node, kind);
      return declaration;
    }
    for (const {
      id,
      init
    } of declaration.declarations) {
      if (!init) continue;
      if (kind === "var" || kind === "let" || !!id.typeAnnotation) {
        this.raise(TSErrors.InitializerNotAllowedInAmbientContext, init);
      } else if (!isValidAmbientConstInitializer(init, this.hasPlugin("estree"))) {
        this.raise(TSErrors.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, init);
      }
    }
    return declaration;
  }
  parseStatementContent(flags, decorators) {
    if (!this.state.containsEsc) {
      switch (this.state.type) {
        case 71:
          {
            if (this.isLookaheadContextual("enum")) {
              const node = this.startNode();
              this.expect(71);
              return this.tsParseEnumDeclaration(node, {
                const: true
              });
            }
            break;
          }
        case 120:
        case 121:
          {
            if (this.nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine()) {
              const token = this.state.type;
              const node = this.startNode();
              this.next();
              const declaration = token === 121 ? this.tsTryParseDeclare(node) : this.tsParseAbstractDeclaration(node, decorators);
              if (declaration) {
                if (token === 121) {
                  declaration.declare = true;
                }
                return declaration;
              } else {
                node.expression = this.createIdentifier(this.startNodeAtNode(node), token === 121 ? "declare" : "abstract");
                this.semicolon(false);
                return this.finishNode(node, "ExpressionStatement");
              }
            }
            break;
          }
        case 122:
          return this.tsParseEnumDeclaration(this.startNode());
        case 108:
          {
            const nextCh = this.lookaheadCharCode();
            if (nextCh === 123) {
              const node = this.startNode();
              return this.tsParseAmbientExternalModuleDeclaration(node);
            }
            break;
          }
        case 125:
          {
            const result = this.tsParseInterfaceDeclaration(this.startNode());
            if (result) return result;
            break;
          }
        case 123:
          {
            if (this.nextTokenIsStringLiteralOnSameLine()) {
              const node = this.startNode();
              this.next();
              return this.tsParseDeclaration(node, 123, false, decorators);
            } else if (this.nextTokenIsIdentifierOnSameLine()) {
              this.raise(TSErrors.InlineModuleDeclarationMustUseString, this.state.startLoc);
              const node = this.startNode();
              this.next();
              return this.tsParseDeclaration(node, 124, false, decorators);
            }
            break;
          }
        case 124:
          {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const node = this.startNode();
              this.next();
              return this.tsParseDeclaration(node, 124, false, decorators);
            }
            break;
          }
        case 126:
          {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const node = this.startNode();
              this.next();
              return this.tsParseTypeAliasDeclaration(node);
            }
            break;
          }
      }
    }
    return super.parseStatementContent(flags, decorators);
  }
  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }
  tsHasSomeModifiers(member, modifiers) {
    return modifiers.some(modifier => {
      if (tsIsAccessModifier(modifier)) {
        return member.accessibility === modifier;
      }
      return !!member[modifier];
    });
  }
  tsIsStartOfStaticBlocks() {
    return this.isContextual(102) && this.lookaheadCharCode() === 123;
  }
  parseClassMember(classBody, member, state) {
    const modifiers = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
    this.tsParseModifiers({
      allowedModifiers: modifiers,
      disallowedModifiers: ["in", "out"],
      stopOnStartOfClassStaticBlock: true,
      errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
    }, member);
    const callParseClassMemberWithIsStatic = () => {
      if (this.tsIsStartOfStaticBlocks()) {
        this.next();
        this.next();
        if (this.tsHasSomeModifiers(member, modifiers)) {
          this.raise(TSErrors.StaticBlockCannotHaveModifier, this.state.curPosition());
        }
        super.parseClassStaticBlock(classBody, member);
      } else {
        this.parseClassMemberWithIsStatic(classBody, member, state, !!member.static);
      }
    };
    if (member.declare) {
      this.tsInAmbientContext(callParseClassMemberWithIsStatic);
    } else {
      callParseClassMemberWithIsStatic();
    }
  }
  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const idx = this.tsTryParseIndexSignature(member);
    if (idx) {
      classBody.body.push(idx);
      if (member.abstract) {
        this.raise(TSErrors.IndexSignatureHasAbstract, member);
      }
      if (member.accessibility) {
        this.raise(TSErrors.IndexSignatureHasAccessibility, member, {
          modifier: member.accessibility
        });
      }
      if (member.declare) {
        this.raise(TSErrors.IndexSignatureHasDeclare, member);
      }
      if (member.override) {
        this.raise(TSErrors.IndexSignatureHasOverride, member);
      }
      return;
    }
    if (!this.state.inAbstractClass && member.abstract) {
      this.raise(TSErrors.NonAbstractClassHasAbstractMethod, member);
    }
    if (member.override) {
      if (!state.hadSuperClass) {
        this.raise(TSErrors.OverrideNotInSubClass, member);
      }
    }
    super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }
  parsePostMemberNameModifiers(methodOrProp) {
    const optional = this.eat(13);
    if (optional) methodOrProp.optional = true;
    if (methodOrProp.readonly && this.match(6)) {
      this.raise(TSErrors.ClassMethodHasReadonly, methodOrProp);
    }
    if (methodOrProp.declare && this.match(6)) {
      this.raise(TSErrors.ClassMethodHasDeclare, methodOrProp);
    }
  }
  shouldParseExportDeclaration() {
    if (this.tsIsDeclarationStart()) return true;
    return super.shouldParseExportDeclaration();
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (!this.match(13)) return expr;
    if (refExpressionErrors != null) {
      const nextCh = this.lookaheadCharCode();
      if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
        this.setOptionalParametersError(refExpressionErrors);
        return expr;
      }
    }
    this.next();
    const node = this.startNodeAt(startLoc);
    node.test = expr;
    const oldInConditionalConsequent = this.state.inConditionalConsequent;
    this.state.inConditionalConsequent = true;
    node.consequent = this.parseMaybeAssignAllowIn();
    this.state.inConditionalConsequent = oldInConditionalConsequent;
    this.expect(10);
    node.alternate = this.parseMaybeAssign();
    return this.finishNode(node, "ConditionalExpression");
  }
  parseParenItem(node, startLoc) {
    const newNode = super.parseParenItem(node, startLoc);
    if (this.eat(13)) {
      newNode.optional = true;
      this.resetEndLocation(node);
    }
    if (this.match(10)) {
      const typeCastNode = this.startNodeAt(startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TSTypeCastExpression");
    }
    return node;
  }
  parseExportDeclaration(node) {
    if (!this.state.isAmbientContext && this.isContextual(121)) {
      return this.tsInAmbientContext(() => this.parseExportDeclaration(node));
    }
    const startLoc = this.state.startLoc;
    const isDeclare = this.eatContextual(121);
    if (isDeclare && (this.isContextual(121) || !this.shouldParseExportDeclaration())) {
      throw this.raise(TSErrors.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
    }
    const isIdentifier = tokenIsIdentifier(this.state.type);
    const declaration = isIdentifier && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(node);
    if (!declaration) return null;
    if (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare) {
      node.exportKind = "type";
    }
    if (isDeclare && declaration.type !== "TSImportEqualsDeclaration") {
      this.resetStartLocation(declaration, startLoc);
      declaration.declare = true;
    }
    return declaration;
  }
  parseClassId(node, isStatement, optionalId, bindingType) {
    if ((!isStatement || optionalId) && this.isContextual(109)) {
      return;
    }
    super.parseClassId(node, isStatement, optionalId, node.declare ? 1024 : 8331);
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
    if (typeParameters) node.typeParameters = typeParameters;
  }
  parseClassPropertyAnnotation(node) {
    if (!node.optional) {
      if (this.eat(31)) {
        node.definite = true;
      } else if (this.eat(13)) {
        node.optional = true;
      }
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
  }
  parseClassProperty(node) {
    this.parseClassPropertyAnnotation(node);
    if (this.state.isAmbientContext && !(node.readonly && !node.typeAnnotation) && this.match(25)) {
      this.raise(TSErrors.DeclareClassFieldHasInitializer, this.state.startLoc);
    }
    if (node.abstract && this.match(25)) {
      const {
        key
      } = node;
      this.raise(TSErrors.AbstractPropertyHasInitializer, this.state.startLoc, {
        propertyName: key.type === "Identifier" && !node.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
      });
    }
    return super.parseClassProperty(node);
  }
  parseClassPrivateProperty(node) {
    if (node.abstract) {
      this.raise(TSErrors.PrivateElementHasAbstract, node);
    }
    if (node.accessibility) {
      this.raise(TSErrors.PrivateElementHasAccessibility, node, {
        modifier: node.accessibility
      });
    }
    this.parseClassPropertyAnnotation(node);
    return super.parseClassPrivateProperty(node);
  }
  parseClassAccessorProperty(node) {
    this.parseClassPropertyAnnotation(node);
    if (node.optional) {
      this.raise(TSErrors.AccessorCannotBeOptional, node);
    }
    return super.parseClassAccessorProperty(node);
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters && isConstructor) {
      this.raise(TSErrors.ConstructorHasTypeParameters, typeParameters);
    }
    const {
      declare = false,
      kind
    } = method;
    if (declare && (kind === "get" || kind === "set")) {
      this.raise(TSErrors.DeclareAccessor, method, {
        kind
      });
    }
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }
  declareClassPrivateMethodInScope(node, kind) {
    if (node.type === "TSDeclareMethod") return;
    if (node.type === "MethodDefinition" && node.value.body == null) {
      return;
    }
    super.declareClassPrivateMethodInScope(node, kind);
  }
  parseClassSuper(node) {
    super.parseClassSuper(node);
    if (node.superClass) {
      if (node.superClass.type === "TSInstantiationExpression") {
        const tsInstantiationExpression = node.superClass;
        const superClass = tsInstantiationExpression.expression;
        this.takeSurroundingComments(superClass, superClass.start, superClass.end);
        const superTypeArguments = tsInstantiationExpression.typeArguments;
        this.takeSurroundingComments(superTypeArguments, superTypeArguments.start, superTypeArguments.end);
        node.superClass = superClass;
        node.superTypeArguments = superTypeArguments;
      } else if (this.match(43) || this.match(47)) {
        node.superTypeArguments = this.tsParseTypeArgumentsInExpression();
      }
    }
    if (this.eatContextual(109)) {
      node.implements = this.tsParseHeritageClause("implements");
    }
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) prop.typeParameters = typeParameters;
    return super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
  }
  parseFunctionParams(node, isConstructor) {
    const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
    if (typeParameters) node.typeParameters = typeParameters;
    super.parseFunctionParams(node, isConstructor);
  }
  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);
    if (decl.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(31)) {
      decl.definite = true;
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) {
      decl.id.typeAnnotation = type;
      this.resetEndLocation(decl.id);
    }
  }
  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(10)) {
      node.returnType = this.tsParseTypeAnnotation();
    }
    return super.parseAsyncArrowFromCallExpression(node, call);
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    let state;
    let jsx;
    let typeCast;
    if (this.hasPlugin("jsx") && (this.match(138) || this.match(43))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];
      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }
    if (!jsx?.error && !this.match(43)) {
      return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
    }
    if (!state || state === this.state) state = this.state.clone();
    let typeParameters;
    const arrow = this.tryParse(abort => {
      typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
      const expr = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
      if (expr.type !== "ArrowFunctionExpression" || expr.extra?.parenthesized) {
        abort();
      }
      if (typeParameters?.params.length !== 0) {
        this.resetStartLocationFromNode(expr, typeParameters);
      }
      expr.typeParameters = typeParameters;
      if (this.hasPlugin("jsx") && expr.typeParameters.params.length === 1 && !expr.typeParameters.extra?.trailingComma) {
        const parameter = expr.typeParameters.params[0];
        if (!parameter.constraint) {
          this.raise(TSErrors.SingleTypeParameterWithoutTrailingComma, this.optionFlags & 256 ? createPositionWithColumnOffset(parameter.loc.end, 1) : parameter, {
            typeParameterName: parameter.name.name
          });
        }
      }
      return expr;
    }, state);
    if (!arrow.error && !arrow.aborted) {
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }
    if (!jsx) {
      assert(!this.hasPlugin("jsx"));
      typeCast = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!typeCast.error) return typeCast.node;
    }
    if (jsx?.node) {
      this.state = jsx.failState;
      return jsx.node;
    }
    if (arrow.node) {
      this.state = arrow.failState;
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }
    if (typeCast?.node) {
      this.state = typeCast.failState;
      return typeCast.node;
    }
    throw jsx?.error || arrow.error || typeCast?.error;
  }
  reportReservedArrowTypeParam(node) {
    if (node.params.length === 1 && !node.params[0].constraint && !node.extra?.trailingComma && this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedArrowTypeParam, node);
    }
  }
  parseMaybeUnary(refExpressionErrors, sawUnary) {
    if (!this.hasPlugin("jsx") && this.match(43)) {
      return this.tsParseTypeAssertion();
    }
    return super.parseMaybeUnary(refExpressionErrors, sawUnary);
  }
  parseArrow(node) {
    if (this.match(10)) {
      const result = this.tryParse(abort => {
        const returnType = this.tsParseTypeOrTypePredicateAnnotation(10);
        if (this.canInsertSemicolon() || !this.match(15)) abort();
        return returnType;
      });
      if (result.aborted) return;
      if (!result.thrown) {
        if (result.error) this.state = result.failState;
        node.returnType = result.node;
      }
    }
    return super.parseArrow(node);
  }
  parseFunctionParamType(param) {
    if (this.eat(13)) {
      param.optional = true;
    }
    const type = this.tsTryParseTypeAnnotation();
    if (type) param.typeAnnotation = type;
    this.resetEndLocation(param);
    return param;
  }
  isAssignable(node, isBinding) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return this.isAssignable(node.expression, isBinding);
      case "TSParameterProperty":
        return true;
      default:
        return super.isAssignable(node, isBinding);
    }
  }
  toAssignable(node, isLHS = false) {
    switch (node.type) {
      case "ParenthesizedExpression":
        this.toAssignableParenthesizedExpression(node, isLHS);
        break;
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        if (isLHS) {
          this.expressionScope.recordArrowParameterBindingError(TSErrors.UnexpectedTypeCastInParameter, node);
        } else {
          this.raise(TSErrors.UnexpectedTypeCastInParameter, node);
        }
        this.toAssignable(node.expression, isLHS);
        break;
      case "AssignmentExpression":
        if (!isLHS && node.left.type === "TSTypeCastExpression") {
          node.left = this.typeCastToParameter(node.left);
        }
      default:
        super.toAssignable(node, isLHS);
    }
  }
  toAssignableParenthesizedExpression(node, isLHS) {
    switch (node.expression.type) {
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isLHS);
        break;
      default:
        super.toAssignable(node, isLHS);
    }
  }
  checkToRestConversion(node, allowPattern) {
    switch (node.type) {
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
      case "TSNonNullExpression":
        this.checkToRestConversion(node.expression, false);
        break;
      default:
        super.checkToRestConversion(node, allowPattern);
    }
  }
  isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
    switch (type) {
      case "TSTypeCastExpression":
        return true;
      case "TSParameterProperty":
        return "parameter";
      case "TSNonNullExpression":
        return "expression";
      case "TSAsExpression":
      case "TSSatisfiesExpression":
      case "TSTypeAssertion":
        return (binding !== 64 || !isUnparenthesizedInAssign) && ["expression", true];
      default:
        return super.isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding);
    }
  }
  parseBindingAtom() {
    if (this.state.type === 74) {
      return this.parseIdentifier(true);
    }
    return super.parseBindingAtom();
  }
  parseMaybeDecoratorArguments(expr, startLoc) {
    if (this.match(43) || this.match(47)) {
      const typeArguments = this.tsParseTypeArgumentsInExpression();
      if (this.match(6)) {
        const call = super.parseMaybeDecoratorArguments(expr, startLoc);
        call.typeArguments = typeArguments;
        return call;
      }
      this.unexpected(null, 6);
    }
    return super.parseMaybeDecoratorArguments(expr, startLoc);
  }
  checkCommaAfterRest(close) {
    if (this.state.isAmbientContext && this.match(8) && this.lookaheadCharCode() === close) {
      this.next();
      return false;
    }
    return super.checkCommaAfterRest(close);
  }
  isClassMethod() {
    return this.match(43) || super.isClassMethod();
  }
  isClassProperty() {
    return this.match(31) || this.match(10) || super.isClassProperty();
  }
  parseMaybeDefault(startLoc, left) {
    const node = super.parseMaybeDefault(startLoc, left);
    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(TSErrors.TypeAnnotationAfterAssign, node.typeAnnotation);
    }
    return node;
  }
  getTokenFromCode(code) {
    if (this.state.inType) {
      if (code === 62) {
        this.finishOp(44, 1);
        return;
      }
      if (code === 60) {
        this.finishOp(43, 1);
        return;
      }
    }
    super.getTokenFromCode(code);
  }
  reScan_lt_gt() {
    const {
      type
    } = this.state;
    if (type === 43) {
      this.state.pos -= 1;
      this.readToken_lt();
    } else if (type === 44) {
      this.state.pos -= 1;
      this.readToken_gt();
    }
  }
  reScan_lt() {
    const {
      type
    } = this.state;
    if (type === 47) {
      this.state.pos -= 2;
      this.finishOp(43, 1);
      return 43;
    }
    return type;
  }
  toAssignableListItem(exprList, index, isLHS) {
    const node = exprList[index];
    if (node.type === "TSTypeCastExpression") {
      exprList[index] = this.typeCastToParameter(node);
    }
    super.toAssignableListItem(exprList, index, isLHS);
  }
  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocationFromNode(node.expression, node.typeAnnotation);
    return node.expression;
  }
  shouldParseArrow(params) {
    if (this.match(10)) {
      return params.every(expr => this.isAssignable(expr, true));
    }
    return super.shouldParseArrow(params);
  }
  shouldParseAsyncArrow() {
    if (this.match(10)) {
      if (this.state.inConditionalConsequent) return false;
      return true;
    }
    return super.shouldParseAsyncArrow();
  }
  parseParenAndDistinguishExpression(canStartArrow) {
    const oldInConditionalConsequent = this.state.inConditionalConsequent;
    this.state.inConditionalConsequent = false;
    const result = super.parseParenAndDistinguishExpression(canStartArrow);
    this.state.inConditionalConsequent = oldInConditionalConsequent;
    return result;
  }
  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }
  jsxParseOpeningElementAfterName(node) {
    if (this.match(43) || this.match(47)) {
      const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
      if (typeArguments) {
        node.typeArguments = typeArguments;
      }
    }
    return super.jsxParseOpeningElementAfterName(node);
  }
  getGetterSetterExpectedParamCount(method) {
    const baseCount = super.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    const firstParam = params[0];
    const hasContextParam = firstParam && this.isThisParam(firstParam);
    return hasContextParam ? baseCount + 1 : baseCount;
  }
  parseCatchClauseParam() {
    const param = super.parseCatchClauseParam();
    const type = this.tsTryParseTypeAnnotation();
    if (type) {
      param.typeAnnotation = type;
      this.resetEndLocation(param);
    }
    return param;
  }
  tsInAmbientContext(cb) {
    const {
      isAmbientContext: oldIsAmbientContext,
      strict: oldStrict
    } = this.state;
    this.state.isAmbientContext = true;
    this.state.strict = false;
    try {
      return cb();
    } finally {
      this.state.isAmbientContext = oldIsAmbientContext;
      this.state.strict = oldStrict;
    }
  }
  parseClass(node, isStatement, optionalId) {
    const oldInAbstractClass = this.state.inAbstractClass;
    this.state.inAbstractClass = !!node.abstract;
    try {
      return super.parseClass(node, isStatement, optionalId);
    } finally {
      this.state.inAbstractClass = oldInAbstractClass;
    }
  }
  tsParseAbstractDeclaration(node, decorators) {
    if (this.match(76)) {
      node.abstract = true;
      return this.maybeTakeDecorators(decorators, this.parseClass(node, true, false));
    } else if (this.isContextual(125)) {
      if (!this.hasFollowingLineBreak()) {
        node.abstract = true;
        this.raise(TSErrors.NonClassMethodPropertyHasAbstractModifier, node);
        return this.tsParseInterfaceDeclaration(node);
      } else {
        return null;
      }
    }
    throw this.unexpected(null, 76);
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope) {
    const method = super.parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    if (method.abstract || method.type === "TSAbstractMethodDefinition") {
      const hasEstreePlugin = this.hasPlugin("estree");
      const methodFn = hasEstreePlugin ? method.value : method;
      if (methodFn.body) {
        const {
          key
        } = method;
        this.raise(TSErrors.AbstractMethodHasImplementation, method, {
          methodName: key.type === "Identifier" && !method.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
        });
      }
    }
    return method;
  }
  tsParseTypeParameterName() {
    return this.parseIdentifier();
  }
  shouldParseAsAmbientContext() {
    return !!this.getPluginOption("typescript", "dts");
  }
  parse() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }
    return super.parse();
  }
  getExpression() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }
    return super.getExpression();
  }
  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (!isString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(node, false, isInTypeExport);
      return this.finishNode(node, "ExportSpecifier");
    }
    node.exportKind = "value";
    return super.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly);
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    if (!importedIsString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(specifier, true, isInTypeOnlyImport);
      return this.finishNode(specifier, "ImportSpecifier");
    }
    specifier.importKind = "value";
    return super.parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, isInTypeOnlyImport ? 4098 : 4096);
  }
  parseTypeOnlyImportExportSpecifier(node, isImport, isInTypeOnlyImportExport) {
    const leftOfAsKey = isImport ? "imported" : "local";
    const rightOfAsKey = isImport ? "local" : "exported";
    let leftOfAs = node[leftOfAsKey];
    let rightOfAs;
    let hasTypeSpecifier = false;
    let canParseAsKeyword = true;
    const loc = leftOfAs.start;
    if (this.isContextual(89)) {
      const firstAs = this.parseIdentifier();
      if (this.isContextual(89)) {
        const secondAs = this.parseIdentifier();
        if (tokenIsKeywordOrIdentifier(this.state.type)) {
          hasTypeSpecifier = true;
          leftOfAs = firstAs;
          rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
          canParseAsKeyword = false;
        } else {
          rightOfAs = secondAs;
          canParseAsKeyword = false;
        }
      } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
        canParseAsKeyword = false;
        rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
      } else {
        hasTypeSpecifier = true;
        leftOfAs = firstAs;
      }
    } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
      hasTypeSpecifier = true;
      if (isImport) {
        leftOfAs = this.parseIdentifier(true);
        if (!this.isContextual(89)) {
          this.checkReservedWord(leftOfAs.name, leftOfAs.start, true, true);
        }
      } else {
        leftOfAs = this.parseModuleExportName();
      }
    }
    if (hasTypeSpecifier && isInTypeOnlyImportExport) {
      this.raise(isImport ? TSErrors.TypeModifierIsUsedInTypeImports : TSErrors.TypeModifierIsUsedInTypeExports, loc);
    }
    node[leftOfAsKey] = leftOfAs;
    node[rightOfAsKey] = rightOfAs;
    const kindKey = isImport ? "importKind" : "exportKind";
    node[kindKey] = hasTypeSpecifier ? "type" : "value";
    if (canParseAsKeyword && this.eatContextual(89)) {
      node[rightOfAsKey] = isImport ? this.parseIdentifier() : this.parseModuleExportName();
    }
    if (!node[rightOfAsKey]) {
      node[rightOfAsKey] = this.cloneIdentifier(node[leftOfAsKey]);
    }
    if (isImport) {
      this.checkIdentifier(node[rightOfAsKey], hasTypeSpecifier ? 4098 : 4096);
    }
  }
  fillOptionalPropertiesForTSESLint(node) {
    switch (node.type) {
      case "ExpressionStatement":
        node.directive ??= undefined;
        return;
      case "RestElement":
        node.value = undefined;
      case "Identifier":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "ObjectPattern":
        node.decorators ??= [];
        node.optional ??= false;
        node.typeAnnotation ??= undefined;
        return;
      case "TSParameterProperty":
        node.accessibility ??= undefined;
        node.decorators ??= [];
        node.override ??= false;
        node.readonly ??= false;
        node.static ??= false;
        return;
      case "TSEmptyBodyFunctionExpression":
        node.body = null;
      case "TSDeclareFunction":
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "ClassMethod":
      case "ClassPrivateMethod":
        node.declare ??= false;
        node.returnType ??= undefined;
        node.typeParameters ??= undefined;
        return;
      case "Property":
        node.optional ??= false;
        return;
      case "TSMethodSignature":
      case "TSPropertySignature":
        node.optional ??= false;
      case "TSIndexSignature":
        node.accessibility ??= undefined;
        node.readonly ??= false;
        node.static ??= false;
        return;
      case "TSAbstractPropertyDefinition":
      case "PropertyDefinition":
      case "TSAbstractAccessorProperty":
      case "AccessorProperty":
        node.declare ??= false;
        node.definite ??= false;
        node.readonly ??= false;
        node.typeAnnotation ??= undefined;
      case "TSAbstractMethodDefinition":
      case "MethodDefinition":
        node.accessibility ??= undefined;
        node.decorators ??= [];
        node.override ??= false;
        node.optional ??= false;
        return;
      case "ClassExpression":
        node.id ??= null;
      case "ClassDeclaration":
        node.abstract ??= false;
        node.declare ??= false;
        node.decorators ??= [];
        node.implements ??= [];
        node.superTypeArguments ??= undefined;
        node.typeParameters ??= undefined;
        return;
      case "TSTypeAliasDeclaration":
      case "VariableDeclaration":
        node.declare ??= false;
        return;
      case "VariableDeclarator":
        node.definite ??= false;
        return;
      case "TSEnumDeclaration":
        node.const ??= false;
        node.declare ??= false;
        return;
      case "TSEnumMember":
        node.computed ??= false;
        return;
      case "TSImportType":
        node.qualifier ??= null;
        node.options ??= null;
        node.typeArguments ??= null;
        return;
      case "TSInterfaceDeclaration":
        node.declare ??= false;
        node.extends ??= [];
        return;
      case "TSMappedType":
        node.optional ??= false;
        node.readonly ??= undefined;
        return;
      case "TSModuleDeclaration":
        node.declare ??= false;
        node.global ??= node.kind === "global";
        return;
      case "TSTypeParameter":
        node.const ??= false;
        node.in ??= false;
        node.out ??= false;
        return;
    }
  }
  chStartsBindingIdentifierAndNotRelationalOperator(ch, pos) {
    if (isIdentifierStart(ch)) {
      keywordAndTSRelationalOperator.lastIndex = pos;
      if (keywordAndTSRelationalOperator.test(this.input)) {
        const endCh = this.codePointAtPos(keywordAndTSRelationalOperator.lastIndex);
        if (!isIdentifierChar(endCh) && endCh !== 92) {
          return false;
        }
      }
      return true;
    } else if (ch === 92) {
      return true;
    } else {
      return false;
    }
  }
  nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine() {
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    return this.chStartsBindingIdentifierAndNotRelationalOperator(nextCh, next);
  }
  nextTokenIsStringLiteralOnSameLine() {
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    return nextCh === 34 || nextCh === 39;
  }
};
function isPossiblyLiteralEnum(expression) {
  if (expression.type !== "MemberExpression") return false;
  const {
    computed,
    property
  } = expression;
  if (computed && property.type !== "StringLiteral" && (property.type !== "TemplateLiteral" || property.expressions.length > 0)) {
    return false;
  }
  return isUncomputedMemberExpressionChain(expression.object);
}
function isValidAmbientConstInitializer(expression, estree) {
  const {
    type
  } = expression;
  if (expression.extra?.parenthesized) {
    return false;
  }
  if (estree) {
    if (type === "Literal") {
      const {
        value
      } = expression;
      if (typeof value === "string" || typeof value === "boolean") {
        return true;
      }
    }
  } else {
    if (type === "StringLiteral" || type === "BooleanLiteral") {
      return true;
    }
  }
  if (isNumber(expression, estree) || isNegativeNumber(expression, estree)) {
    return true;
  }
  if (type === "TemplateLiteral" && expression.expressions.length === 0) {
    return true;
  }
  if (isPossiblyLiteralEnum(expression)) {
    return true;
  }
  return false;
}
function isNumber(expression, estree) {
  if (estree) {
    return expression.type === "Literal" && (typeof expression.value === "number" || "bigint" in expression);
  }
  return expression.type === "NumericLiteral" || expression.type === "BigIntLiteral";
}
function isNegativeNumber(expression, estree) {
  if (expression.type === "UnaryExpression") {
    const {
      operator,
      argument
    } = expression;
    if (operator === "-" && isNumber(argument, estree)) {
      return true;
    }
  }
  return false;
}
function isUncomputedMemberExpressionChain(expression) {
  if (expression.type === "Identifier") return true;
  if (expression.type !== "MemberExpression" || expression.computed) {
    return false;
  }
  return isUncomputedMemberExpressionChain(expression.object);
}
const PlaceholderErrorTemplates = {
  ClassNameIsRequired: "A class name is required.",
  UnexpectedSpace: "Unexpected space in placeholder."
};
const PlaceholderErrors = ParseErrorEnum`placeholders`(PlaceholderErrorTemplates);
var placeholders = superClass => class PlaceholdersParserMixin extends superClass {
  parsePlaceholder(expectedNode) {
    if (this.match(129)) {
      const node = this.startNode();
      this.next();
      this.assertNoSpace();
      node.name = super.parseIdentifier(true);
      this.assertNoSpace();
      this.expect(129);
      return this.finishPlaceholder(node, expectedNode);
    }
  }
  finishPlaceholder(node, expectedNode) {
    let placeholder = node;
    if (!placeholder.expectedNode || !placeholder.type) {
      placeholder = this.finishNode(placeholder, "Placeholder");
    }
    placeholder.expectedNode = expectedNode;
    return placeholder;
  }
  getTokenFromCode(code) {
    if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
      this.finishOp(129, 2);
    } else {
      super.getTokenFromCode(code);
    }
  }
  parseExprAtom(refExpressionErrors) {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(refExpressionErrors);
  }
  parseIdentifier(liberal) {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(liberal);
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (word !== undefined) {
      super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
    }
  }
  cloneIdentifier(node) {
    const cloned = super.cloneIdentifier(node);
    if (cloned.type === "Placeholder") {
      cloned.expectedNode = node.expectedNode;
    }
    return cloned;
  }
  cloneStringLiteral(node) {
    if (node.type === "Placeholder") {
      return this.cloneIdentifier(node);
    }
    return super.cloneStringLiteral(node);
  }
  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
  }
  isValidLVal(type, disallowCallExpression, isParenthesized, binding) {
    return type === "Placeholder" || super.isValidLVal(type, disallowCallExpression, isParenthesized, binding);
  }
  toAssignable(node, isLHS) {
    if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
      node.expectedNode = "Pattern";
    } else {
      super.toAssignable(node, isLHS);
    }
  }
  chStartsBindingIdentifier(ch, pos) {
    if (super.chStartsBindingIdentifier(ch, pos)) {
      return true;
    }
    const next = this.nextTokenStart();
    if (this.input.charCodeAt(next) === 37 && this.input.charCodeAt(next + 1) === 37) {
      return true;
    }
    return false;
  }
  verifyBreakContinue(node, isBreak) {
    if (node.label?.type === "Placeholder") return;
    super.verifyBreakContinue(node, isBreak);
  }
  parseExpressionStatement(node, expr) {
    if (expr.type !== "Placeholder" || expr.extra?.parenthesized) {
      return super.parseExpressionStatement(node, expr);
    }
    if (this.match(10)) {
      const stmt = node;
      stmt.label = this.finishPlaceholder(expr, "Identifier");
      this.next();
      stmt.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration();
      return this.finishNode(stmt, "LabeledStatement");
    }
    this.semicolon();
    const stmtPlaceholder = node;
    stmtPlaceholder.name = expr.name;
    return this.finishPlaceholder(stmtPlaceholder, "Statement");
  }
  parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse) {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse);
  }
  parseFunctionId(requireId) {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(requireId);
  }
  parseClass(node, isStatement, optionalId) {
    const type = isStatement ? "ClassDeclaration" : "ClassExpression";
    this.next();
    const oldStrict = this.state.strict;
    const placeholder = this.parsePlaceholder("Identifier");
    if (placeholder) {
      if (this.match(77) || this.match(129) || this.match(2)) {
        node.id = placeholder;
      } else if (optionalId || !isStatement) {
        node.id = null;
        node.body = this.finishPlaceholder(placeholder, "ClassBody");
        return this.finishNode(node, type);
      } else {
        throw this.raise(PlaceholderErrors.ClassNameIsRequired, this.state.startLoc);
      }
    } else {
      this.parseClassId(node, isStatement, optionalId);
    }
    super.parseClassSuper(node);
    node.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, type);
  }
  parseExport(node, decorators) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseExport(node, decorators);
    const node2 = node;
    if (!this.isContextual(94) && !this.match(8)) {
      node2.specifiers = [];
      node2.source = null;
      node2.declaration = this.finishPlaceholder(placeholder, "Declaration");
      return this.finishNode(node2, "ExportNamedDeclaration");
    }
    this.expectPlugin("exportDefaultFrom");
    const specifier = this.startNode();
    specifier.exported = placeholder;
    node2.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
    return super.parseExport(node2, decorators);
  }
  isExportDefaultSpecifier() {
    if (this.match(61)) {
      const next = this.nextTokenStart();
      if (this.isUnparsedContextual(next, "from")) {
        if (this.input.startsWith(tokenLabelName(129), this.nextTokenStartSince(next + 4))) {
          return true;
        }
      }
    }
    return super.isExportDefaultSpecifier();
  }
  maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
    if (node.specifiers?.length) {
      return true;
    }
    return super.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
  }
  checkExport(node) {
    const {
      specifiers
    } = node;
    if (specifiers?.length) {
      node.specifiers = specifiers.filter(node => node.exported.type === "Placeholder");
    }
    super.checkExport(node);
    node.specifiers = specifiers;
  }
  parseImport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseImport(node);
    node.specifiers = [];
    if (!this.isContextual(94) && !this.match(8)) {
      node.source = this.finishPlaceholder(placeholder, "StringLiteral");
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }
    const specifier = this.startNodeAtNode(placeholder);
    specifier.local = placeholder;
    node.specifiers.push(this.finishNode(specifier, "ImportDefaultSpecifier"));
    if (this.eat(8)) {
      const hasStarImport = this.maybeParseStarImportSpecifier(node);
      if (!hasStarImport) this.parseNamedImportSpecifiers(node);
    }
    this.expectContextual(94);
    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }
  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
  }
  assertNoSpace() {
    if (this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index)) {
      this.raise(PlaceholderErrors.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }
};
var v8intrinsic = superClass => class V8IntrinsicMixin extends superClass {
  parseV8Intrinsic() {
    if (this.match(50)) {
      const v8IntrinsicStartLoc = this.state.startLoc;
      const node = this.startNode();
      this.next();
      if (tokenIsIdentifier(this.state.type)) {
        const name = this.parseIdentifierName();
        const identifier = this.createIdentifier(node, name);
        this.castNodeTo(identifier, "V8IntrinsicIdentifier");
        if (this.match(6)) {
          return identifier;
        }
      }
      this.unexpected(v8IntrinsicStartLoc);
    }
  }
  parseExprAtom(refExpressionErrors) {
    return this.parseV8Intrinsic() || super.parseExprAtom(refExpressionErrors);
  }
};
const PIPELINE_PROPOSALS = ["fsharp", "hack"];
const TOPIC_TOKENS = ["^^", "@@", "^", "%", "#"];
function validatePlugins(pluginsMap) {
  if (pluginsMap.has("decorators")) {
    if (pluginsMap.has("decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }
  }
  if (pluginsMap.has("flow") && pluginsMap.has("typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }
  if (pluginsMap.has("placeholders") && pluginsMap.has("v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }
  if (pluginsMap.has("pipelineOperator")) {
    const proposal = pluginsMap.get("pipelineOperator").proposal;
    if (!PIPELINE_PROPOSALS.includes(proposal)) {
      const proposalList = PIPELINE_PROPOSALS.map(p => `"${p}"`).join(", ");
      throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${proposalList}.`);
    }
    if (proposal === "hack") {
      if (pluginsMap.has("placeholders")) {
        throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
      }
      if (pluginsMap.has("v8intrinsic")) {
        throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
      }
      const topicToken = pluginsMap.get("pipelineOperator").topicToken;
      if (!TOPIC_TOKENS.includes(topicToken)) {
        const tokenList = TOPIC_TOKENS.map(t => `"${t}"`).join(", ");
        throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${tokenList}.`);
      }
    }
  }
  if (pluginsMap.has("moduleAttributes")) {
    throw new Error("`moduleAttributes` has been removed in Babel 8, please migrate to import attributes instead.");
  }
  if (pluginsMap.has("importAssertions")) {
    throw new Error("`importAssertions` has been removed in Babel 8, please use import attributes instead.");
  }
  if (pluginsMap.has("deprecatedImportAssert")) {
    console.warn("`deprecatedImportAssert` has been removed in Babel 8, please use import attributes instead.");
  } else if (pluginsMap.has("importAttributes") && pluginsMap.get("importAttributes").deprecatedAssertSyntax) {
    console.warn("The 'importAttributes' plugin has been removed in Babel 8. Please migrate any usage of `assert`-style attributes to `with`.");
  }
  if (pluginsMap.has("recordAndTuple")) {
    throw new Error("The 'recordAndTuple' plugin has been removed in Babel 8. Please remove it from your configuration.");
  }
  if (pluginsMap.has("asyncDoExpressions") && !pluginsMap.has("doExpressions")) {
    const error = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
    error.missingPlugins = "doExpressions";
    throw error;
  }
  if (pluginsMap.has("optionalChainingAssign") && pluginsMap.get("optionalChainingAssign").version !== "2023-07") {
    throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is '2023-07'.");
  }
  if (pluginsMap.has("discardBinding") && pluginsMap.get("discardBinding").syntaxType !== "void") {
    throw new Error("The 'discardBinding' plugin requires a 'syntaxType' option. Currently the only supported value is 'void'.");
  }
  if (pluginsMap.has("decimal")) {
    throw new Error("The 'decimal' plugin has been removed in Babel 8. Please remove it from your configuration.");
  }
  if (pluginsMap.has("importReflection")) {
    throw new Error("The 'importReflection' plugin has been removed in Babel 8. Use 'sourcePhaseImports' instead, and " + "replace 'import module' with 'import source' in your code.");
  }
}
const mixinPlugins = {
  estree,
  jsx,
  flow,
  typescript,
  v8intrinsic,
  placeholders
};
const mixinPluginNames = Object.keys(mixinPlugins);
class ExpressionParser extends LValParser {
  checkProto(prop, sawProto, refExpressionErrors) {
    if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
      return sawProto;
    }
    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : key.value;
    if (name === "__proto__") {
      if (sawProto) {
        if (refExpressionErrors) {
          if (refExpressionErrors.doubleProtoLoc === null) {
            refExpressionErrors.doubleProtoLoc = this.getLoc(key.start);
          }
        } else {
          this.raise(Errors.DuplicateProto, key);
        }
      }
      return true;
    }
    return sawProto;
  }
  shouldExitDescending(expr) {
    return expr.type === "ArrowFunctionExpression" && !expr.extra?.parenthesized;
  }
  getExpression() {
    this.enterInitialScopes();
    this.nextToken();
    if (this.match(135)) {
      throw this.raise(Errors.ParseExpressionEmptyInput, this.state.startLoc);
    }
    const expr = this.parseExpression();
    if (!this.match(135)) {
      throw this.raise(Errors.ParseExpressionExpectsEOF, this.state.startLoc, {
        unexpected: this.input.codePointAt(this.state.start)
      });
    }
    this.finalizeRemainingComments();
    expr.comments = this.comments;
    expr.errors = this.state.errors;
    if (this.optionFlags & 512) {
      expr.tokens = createExportedTokens(this.tokens);
    }
    if (this.options.locations === "packed") {
      expr.locData = resetLocData();
    }
    return expr;
  }
  parseExpression(disallowIn, refExpressionErrors) {
    if (disallowIn) {
      return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
    }
    return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
  }
  parseExpressionBase(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeAssign(refExpressionErrors);
    if (this.match(8)) {
      const node = this.startNodeAt(startLoc);
      node.expressions = [expr];
      while (this.eat(8)) {
        node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
      }
      this.toReferencedList(node.expressions);
      return this.finishNode(node, "SequenceExpression");
    }
    return expr;
  }
  parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse) {
    return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }
  parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse) {
    return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }
  setOptionalParametersError(refExpressionErrors) {
    refExpressionErrors.optionalParametersLoc = this.state.startLoc;
  }
  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    const startLoc = this.state.startLoc;
    const isYield = this.isContextual(104);
    if (isYield) {
      if (this.prodParam.hasYield) {
        this.next();
        let left = this.parseYield(startLoc);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startLoc);
        }
        return left;
      }
    }
    let ownExpressionErrors;
    if (refExpressionErrors) {
      ownExpressionErrors = false;
    } else {
      refExpressionErrors = new ExpressionErrors();
      ownExpressionErrors = true;
    }
    this.state.canStartArrow = true;
    let left = this.parseMaybeConditional(refExpressionErrors);
    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startLoc);
    }
    if (tokenIsAssignment(this.state.type)) {
      const node = this.startNodeAt(startLoc);
      const operator = this.state.value;
      node.operator = operator;
      if (this.match(25)) {
        this.toAssignable(left, true);
        node.left = left;
        const startIndex = startLoc.index;
        if (refExpressionErrors.doubleProtoLoc != null && refExpressionErrors.doubleProtoLoc.index >= startIndex) {
          refExpressionErrors.doubleProtoLoc = null;
        }
        if (refExpressionErrors.shorthandAssignLoc != null && refExpressionErrors.shorthandAssignLoc.index >= startIndex) {
          refExpressionErrors.shorthandAssignLoc = null;
        }
        if (refExpressionErrors.privateKeyLoc != null && refExpressionErrors.privateKeyLoc.index >= startIndex) {
          this.checkDestructuringPrivate(refExpressionErrors);
          refExpressionErrors.privateKeyLoc = null;
        }
        if (refExpressionErrors.voidPatternLoc != null && refExpressionErrors.voidPatternLoc.index >= startIndex) {
          refExpressionErrors.voidPatternLoc = null;
        }
      } else {
        node.left = left;
      }
      this.next();
      node.right = this.parseMaybeAssign();
      this.checkLVal(left, this.finishNode(node, "AssignmentExpression"), undefined, undefined, undefined, undefined, operator === "||=" || operator === "&&=" || operator === "??=");
      return node;
    } else if (ownExpressionErrors) {
      this.checkExpressionErrors(refExpressionErrors, true);
    }
    if (isYield) {
      const {
        type
      } = this.state;
      const startsExpr = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(50);
      if (startsExpr && !this.isAmbiguousPrefixOrIdentifier()) {
        this.raiseOverwrite(Errors.YieldNotInGeneratorFunction, startLoc);
        return this.parseYield(startLoc);
      }
    }
    return left;
  }
  parseMaybeConditional(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const expr = this.parseExprOps(refExpressionErrors);
    if (this.shouldExitDescending(expr)) {
      return expr;
    }
    return this.parseConditional(expr, startLoc, refExpressionErrors);
  }
  parseConditional(expr, startLoc, refExpressionErrors) {
    if (this.eat(13)) {
      const node = this.startNodeAt(startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssignAllowIn();
      this.expect(10);
      node.alternate = this.parseMaybeAssign();
      return this.finishNode(node, "ConditionalExpression");
    }
    return expr;
  }
  parseMaybeUnaryOrPrivate(refExpressionErrors) {
    return this.match(134) ? this.parsePrivateName() : this.parseMaybeUnary(refExpressionErrors);
  }
  parseExprOps(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeUnaryOrPrivate(refExpressionErrors);
    if (this.shouldExitDescending(expr)) {
      return expr;
    }
    this.state.canStartArrow = false;
    return this.parseExprOp(expr, startLoc, -1);
  }
  parseExprOp(left, leftStartLoc, minPrec) {
    if (this.isPrivateName(left)) {
      const value = this.getPrivateNameSV(left);
      if (minPrec >= tokenOperatorPrecedence(54) || !this.prodParam.hasIn || !this.match(54)) {
        this.raise(Errors.PrivateInExpectedIn, leftStartLoc, {
          identifierName: value
        });
      }
      this.classScope.usePrivateName(value, leftStartLoc);
    }
    const op = this.state.type;
    if (tokenIsOperator(op) && (this.prodParam.hasIn || !this.match(54))) {
      let prec = tokenOperatorPrecedence(op);
      if (prec > minPrec) {
        if (op === 35) {
          this.expectPlugin("pipelineOperator");
          if (this.prodParam.inFSharpPipelineDirectBody) {
            return left;
          }
        }
        const node = this.startNodeAt(leftStartLoc);
        node.left = left;
        node.operator = this.state.value;
        const logical = op === 37 || op === 38;
        const coalesce = op === 36;
        if (coalesce) {
          prec = tokenOperatorPrecedence(38);
        }
        this.next();
        node.right = this.parseExprOpRightExpr(op, prec);
        const finishedNode = this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
        const nextOp = this.state.type;
        if (coalesce && (nextOp === 37 || nextOp === 38) || logical && nextOp === 36) {
          throw this.raise(Errors.MixingCoalesceWithLogical, this.state.startLoc);
        }
        return this.parseExprOp(finishedNode, leftStartLoc, minPrec);
      }
    }
    return left;
  }
  parseExprOpRightExpr(op, prec) {
    switch (op) {
      case 35:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "hack":
            return this.withTopicBindingContext(() => {
              return this.parseHackPipeBody();
            });
          case "fsharp":
            return this.parseFSharpPipelineBody(prec);
        }
      default:
        return this.parseExprOpBaseRightExpr(op, prec);
    }
  }
  parseExprOpBaseRightExpr(op, prec) {
    const startLoc = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, tokenIsRightAssociative(op) ? prec - 1 : prec);
  }
  parseHackPipeBody() {
    const {
      startLoc
    } = this.state;
    const body = this.parseMaybeAssign();
    const requiredParentheses = UnparenthesizedPipeBodyDescriptions.has(body.type);
    if (requiredParentheses && !body.extra?.parenthesized) {
      this.raise(Errors.PipeUnparenthesizedBody, startLoc, {
        type: body.type
      });
    }
    if (!this.topicReferenceWasUsedInCurrentContext()) {
      this.raise(Errors.PipeTopicUnused, startLoc);
    }
    return body;
  }
  checkExponentialAfterUnary(node) {
    if (this.match(53)) {
      this.raise(Errors.UnexpectedTokenUnaryExponentiation, node.argument);
    }
  }
  parseMaybeUnary(refExpressionErrors, sawUnary) {
    const startLoc = this.state.startLoc;
    const isAwait = this.isContextual(92);
    if (isAwait && this.recordAwaitIfAllowed()) {
      this.next();
      const expr = this.parseAwait(startLoc);
      if (!sawUnary) this.checkExponentialAfterUnary(expr);
      return expr;
    }
    const update = this.match(30);
    const node = this.startNode();
    if (tokenIsPrefix(this.state.type)) {
      node.operator = this.state.value;
      node.prefix = true;
      this.state.canStartArrow = false;
      if (this.match(68)) {
        this.expectPlugin("throwExpressions");
      }
      const isDelete = this.match(85);
      this.next();
      node.argument = this.parseMaybeUnary(null, true);
      this.checkExpressionErrors(refExpressionErrors, true);
      if (this.state.strict && isDelete) {
        const arg = node.argument;
        if (arg.type === "Identifier") {
          this.raise(Errors.StrictDelete, node);
        } else if (this.hasPropertyAsPrivateName(arg)) {
          this.raise(Errors.DeletePrivateField, node);
        }
      }
      if (!update) {
        if (!sawUnary) {
          this.checkExponentialAfterUnary(node);
        }
        return this.finishNode(node, "UnaryExpression");
      }
    }
    const expr = this.parseUpdate(node, update, refExpressionErrors);
    if (isAwait) {
      const {
        type
      } = this.state;
      const startsExpr = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(50);
      if (startsExpr && !this.isAmbiguousPrefixOrIdentifier()) {
        this.raiseOverwrite(Errors.AwaitNotInAsyncContext, startLoc);
        return this.parseAwait(startLoc);
      }
    }
    return expr;
  }
  parseUpdate(node, update, refExpressionErrors) {
    if (update) {
      const result = this.finishNode(node, "UpdateExpression");
      this.checkLVal(result.argument, result);
      return result;
    }
    const startLoc = this.state.startLoc;
    let expr = this.parseExprSubscripts(refExpressionErrors);
    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;
    while (tokenIsPostfix(this.state.type) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startLoc);
      node.operator = this.state.value;
      node.prefix = false;
      node.argument = expr;
      this.next();
      this.checkLVal(expr, expr = this.finishNode(node, "UpdateExpression"));
    }
    return expr;
  }
  parseExprSubscripts(refExpressionErrors) {
    const startLoc = this.state.startLoc;
    this.setLoc(startLoc);
    const expr = this.parseExprAtom(refExpressionErrors);
    if (this.shouldExitDescending(expr)) {
      return expr;
    }
    return this.parseSubscripts(expr, startLoc);
  }
  parseSubscripts(base, startLoc, noCalls) {
    const state = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsyncArrow(base),
      stop: false
    };
    do {
      base = this.parseSubscript(base, startLoc, noCalls, state);
      state.maybeAsyncArrow = false;
    } while (!state.stop);
    return base;
  }
  parseSubscript(base, startLoc, noCalls, state) {
    const {
      type
    } = this.state;
    if (!noCalls && type === 11) {
      return this.parseBind(base, startLoc, noCalls, state);
    } else if (tokenIsTemplate(type)) {
      return this.parseTaggedTemplateExpression(base, startLoc, state);
    }
    let optional = false;
    if (type === 14) {
      if (noCalls) {
        this.raise(Errors.OptionalChainingNoNew, this.state.startLoc);
        if (this.lookaheadCharCode() === 40) {
          return this.stopParseSubscript(base, state);
        }
      }
      state.optionalChainMember = optional = true;
      this.next();
    }
    if (!noCalls && this.match(6)) {
      return this.parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional);
    } else {
      const computed = this.eat(0);
      if (computed || optional || this.eat(12)) {
        return this.parseMember(base, startLoc, state, computed, optional);
      } else {
        return this.stopParseSubscript(base, state);
      }
    }
  }
  stopParseSubscript(base, state) {
    state.stop = true;
    return base;
  }
  parseMember(base, startLoc, state, computed, optional) {
    const node = this.startNodeAt(startLoc);
    node.object = base;
    node.computed = computed;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(1);
    } else if (this.match(134)) {
      if (base.type === "Super") {
        this.raise(Errors.SuperPrivateField, startLoc);
      }
      this.classScope.usePrivateName(this.state.value, this.state.startLoc);
      node.property = this.parsePrivateName();
    } else {
      node.property = this.parseIdentifier(true);
    }
    if (state.optionalChainMember) {
      node.optional = optional;
      return this.finishNode(node, "OptionalMemberExpression");
    } else {
      return this.finishNode(node, "MemberExpression");
    }
  }
  parseBind(base, startLoc, noCalls, state) {
    const node = this.startNodeAt(startLoc);
    node.object = base;
    this.next();
    node.callee = this.parseNoCallExpr();
    state.stop = true;
    return this.parseSubscripts(this.finishNode(node, "BindExpression"), startLoc, noCalls);
  }
  parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional) {
    let refExpressionErrors = null;
    this.next();
    const node = this.startNodeAt(startLoc);
    node.callee = base;
    const {
      maybeAsyncArrow,
      optionalChainMember
    } = state;
    if (maybeAsyncArrow) {
      this.expressionScope.enter(newAsyncArrowScope());
      refExpressionErrors = new ExpressionErrors();
    }
    if (optionalChainMember) {
      node.optional = optional;
    }
    if (optional) {
      node.arguments = this.parseCallExpressionArguments();
    } else {
      node.arguments = this.parseCallExpressionArguments(base.type !== "Super", node, refExpressionErrors);
    }
    let finishedNode = this.finishCallExpression(node, optionalChainMember);
    if (maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
      state.stop = true;
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      finishedNode = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startLoc), finishedNode);
    } else {
      if (maybeAsyncArrow) {
        this.checkExpressionErrors(refExpressionErrors, true);
        this.expressionScope.exit();
      }
      this.toReferencedList(node.arguments);
    }
    return finishedNode;
  }
  parseTaggedTemplateExpression(base, startLoc, state) {
    const node = this.startNodeAt(startLoc);
    node.tag = base;
    node.quasi = this.parseTemplate(true);
    if (state.optionalChainMember) {
      this.raise(Errors.OptionalChainingNoTemplate, startLoc);
    }
    return this.finishNode(node, "TaggedTemplateExpression");
  }
  atPossibleAsyncArrow(base) {
    return base.type === "Identifier" && base.name === "async" && this.state.lastTokEndLoc.index === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.state.canStartArrow;
  }
  finishCallExpression(node, optional) {
    if (node.callee.type === "Import") {
      if (node.arguments.length === 0 || node.arguments.length > 2) {
        this.raise(Errors.ImportCallArity, node);
      } else {
        for (const arg of node.arguments) {
          if (arg.type === "SpreadElement") {
            this.raise(Errors.ImportCallSpreadArgument, arg);
          }
        }
      }
    }
    return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
  }
  parseCallExpressionArguments(allowPlaceholder, nodeForExtra, refExpressionErrors) {
    const elts = [];
    let first = true;
    while (!this.eat(7)) {
      if (first) {
        first = false;
      } else {
        this.expect(8);
        if (this.match(7)) {
          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }
          this.next();
          break;
        }
      }
      elts.push(this.parseExprListItem(7, false, refExpressionErrors, allowPlaceholder));
    }
    return elts;
  }
  shouldParseAsyncArrow() {
    return this.match(15) && !this.canInsertSemicolon();
  }
  parseAsyncArrowFromCallExpression(node, call) {
    this.resetPreviousNodeTrailingComments(call);
    this.expect(15);
    this.parseArrowExpression(node, call.arguments, true, call.extra?.trailingCommaLoc);
    if (call.innerComments) {
      setInnerComments(node, call.innerComments);
    }
    if (call.callee.trailingComments) {
      setInnerComments(node, call.callee.trailingComments);
    }
    return node;
  }
  parseNoCallExpr() {
    const startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startLoc, true);
  }
  parseExprAtom(refExpressionErrors) {
    let node;
    let decorators = null;
    const {
      type
    } = this.state;
    switch (type) {
      case 75:
        return this.parseSuper();
      case 79:
        node = this.startNode();
        this.next();
        if (this.match(12)) {
          return this.parseImportMetaPropertyOrPhaseCall(node);
        }
        if (this.match(6)) {
          if (this.optionFlags & 1024) {
            return this.parseImportCall(node);
          } else {
            return this.finishNode(node, "Import");
          }
        } else {
          this.raise(Errors.UnsupportedImport, this.state.lastTokStartLoc);
          return this.finishNode(node, "Import");
        }
      case 74:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");
      case 86:
        {
          return this.parseDo(this.startNode(), false);
        }
      case 52:
      case 27:
        {
          this.readRegexp();
          return this.parseRegExpLiteral(this.state.value);
        }
      case 131:
        return this.parseNumericLiteral(this.state.value);
      case 132:
        return this.parseBigIntLiteral(this.state.value);
      case 130:
        return this.parseStringLiteral(this.state.value);
      case 80:
        return this.parseNullLiteral();
      case 81:
        return this.parseBooleanLiteral(true);
      case 82:
        return this.parseBooleanLiteral(false);
      case 6:
        {
          return this.parseParenAndDistinguishExpression(this.state.canStartArrow);
        }
      case 0:
        {
          return this.parseArrayLike(1, refExpressionErrors);
        }
      case 2:
        {
          return this.parseObjectLike(4, false, refExpressionErrors);
        }
      case 64:
        return this.parseFunctionOrFunctionSent();
      case 22:
        decorators = this.parseDecorators();
      case 76:
        return this.parseClass(this.maybeTakeDecorators(decorators, this.startNode()), false);
      case 73:
        return this.parseNewOrNewTarget();
      case 21:
      case 20:
        return this.parseTemplate(false);
      case 11:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();
          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(Errors.UnsupportedBind, callee);
          }
        }
      case 134:
        {
          this.raise(Errors.PrivateInExpectedIn, this.state.startLoc, {
            identifierName: this.state.value
          });
          return this.parsePrivateName();
        }
      case 29:
        {
          return this.parseTopicReferenceThenEqualsSign(50, "%");
        }
      case 28:
        {
          return this.parseTopicReferenceThenEqualsSign(40, "^");
        }
      case 33:
      case 34:
        {
          return this.parseTopicReference("hack");
        }
      case 40:
      case 50:
      case 23:
        {
          const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
          if (pipeProposal) {
            return this.parseTopicReference(pipeProposal);
          }
          throw this.unexpected();
        }
      case 43:
        {
          const lookaheadCh = this.input.codePointAt(this.nextTokenStart());
          if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
            throw this.expectOnePlugin(["jsx", "flow", "typescript"]);
          }
          throw this.unexpected();
        }
      default:
        if (tokenIsIdentifier(type)) {
          if (this.isContextual(123) && this.lookaheadInLineCharCode() === 123) {
            return this.parseModuleExpression();
          }
          const {
            canStartArrow,
            containsEsc
          } = this.state;
          const id = this.parseIdentifier();
          if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
            const {
              type
            } = this.state;
            if (type === 64) {
              this.resetPreviousNodeTrailingComments(id);
              this.next();
              return this.parseAsyncFunctionExpression(this.startNodeAtNode(id));
            } else if (tokenIsIdentifier(type)) {
              if (canStartArrow && this.lookaheadCharCode() === 61) {
                return this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(id));
              } else {
                return id;
              }
            } else if (type === 86) {
              this.resetPreviousNodeTrailingComments(id);
              return this.parseDo(this.startNodeAtNode(id), true);
            }
          }
          if (canStartArrow && this.match(15) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
          }
          return id;
        } else {
          throw this.unexpected();
        }
    }
  }
  parseTopicReferenceThenEqualsSign(topicTokenType, topicTokenValue) {
    const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
    if (pipeProposal) {
      this.state.type = topicTokenType;
      this.state.value = topicTokenValue;
      this.state.pos--;
      this.state.end--;
      this.state.endLoc = createPositionWithColumnOffset(this.state.endLoc, -1);
      return this.parseTopicReference(pipeProposal);
    }
    throw this.unexpected();
  }
  parseTopicReference(pipeProposal) {
    const node = this.startNode();
    const startLoc = this.state.startLoc;
    const tokenType = this.state.type;
    this.next();
    return this.finishTopicReference(node, startLoc, pipeProposal, tokenType);
  }
  finishTopicReference(node, startLoc, pipeProposal, tokenType) {
    if (this.testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType)) {
      if (!this.topicReferenceIsAllowedInCurrentContext()) {
        this.raise(Errors.PipeTopicUnbound, startLoc);
      }
      this.registerTopicReference();
      return this.finishNode(node, "TopicReference");
    } else {
      throw this.raise(Errors.PipeTopicUnconfiguredToken, startLoc, {
        token: tokenLabelName(tokenType)
      });
    }
  }
  testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType) {
    switch (pipeProposal) {
      case "hack":
        {
          return this.hasPlugin(["pipelineOperator", {
            topicToken: tokenLabelName(tokenType)
          }]);
        }
      default:
        throw this.raise(Errors.PipeTopicRequiresHackPipes, startLoc);
    }
  }
  parseAsyncArrowUnaryFunction(node) {
    this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
    const params = [this.parseIdentifier()];
    this.prodParam.exit();
    if (this.hasPrecedingLineBreak()) {
      this.raise(Errors.LineTerminatorBeforeArrow, this.state.curPosition());
    }
    this.expect(15);
    return this.parseArrowExpression(node, params, true);
  }
  parseDo(node, isAsync) {
    this.expectPlugin("doExpressions");
    if (isAsync) {
      this.expectPlugin("asyncDoExpressions");
    }
    node.async = isAsync;
    this.next();
    const oldLabels = this.state.labels;
    this.state.labels = [];
    if (isAsync) {
      this.prodParam.enter(2);
      node.body = this.parseBlock();
      this.prodParam.exit();
    } else {
      node.body = this.parseBlock();
    }
    this.state.labels = oldLabels;
    return this.finishNode(node, "DoExpression");
  }
  parseSuper() {
    const node = this.startNode();
    this.next();
    if (this.match(6) && !this.scope.allowDirectSuper) {
      this.raise(Errors.SuperNotAllowed, node);
    } else if (!this.scope.allowSuper) {
      this.raise(Errors.UnexpectedSuper, node);
    }
    if (!this.match(6) && !this.match(0) && !this.match(12)) {
      this.raise(Errors.UnsupportedSuper, node);
    }
    return this.finishNode(node, "Super");
  }
  parsePrivateName() {
    const node = this.startNode();
    const id = this.startNodeAt(createPositionWithColumnOffset(this.state.startLoc, 1));
    const name = this.state.value;
    this.next();
    node.id = this.createIdentifier(id, name);
    return this.finishNode(node, "PrivateName");
  }
  parseFunctionOrFunctionSent() {
    const node = this.startNode();
    this.next();
    if (this.prodParam.hasYield && this.match(12)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
      this.next();
      if (this.match(99)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        this.unexpected();
      }
      return this.parseMetaProperty(node, meta, "sent");
    }
    return this.parseFunction(node);
  }
  parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;
    const containsEsc = this.state.containsEsc;
    node.property = this.parseIdentifier(true);
    if (node.property.name !== propertyName || containsEsc) {
      this.raise(Errors.UnsupportedMetaProperty, node.property, {
        target: meta.name,
        onlyValidPropertyName: propertyName
      });
    }
    return this.finishNode(node, "MetaProperty");
  }
  parseImportMetaPropertyOrPhaseCall(node) {
    this.next();
    if (this.isContextual(101) || this.isContextual(93)) {
      const isSource = this.isContextual(101);
      this.expectPlugin(isSource ? "sourcePhaseImports" : "deferredImportEvaluation");
      this.next();
      node.phase = isSource ? "source" : "defer";
      return this.parseImportCall(node);
    } else {
      const id = this.createIdentifierAt(this.startNodeAtNode(node), "import", this.state.lastTokStartLoc);
      if (this.isContextual(97)) {
        if (!this.inModule) {
          this.raise(Errors.ImportMetaOutsideModule, id);
        }
        this.sawUnambiguousESM = true;
      }
      return this.parseMetaProperty(node, id, "meta");
    }
  }
  parseLiteralAtNode(value, type, node) {
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  }
  parseLiteral(value, type) {
    const node = this.startNode();
    return this.parseLiteralAtNode(value, type, node);
  }
  parseStringLiteral(value) {
    return this.parseLiteral(value, "StringLiteral");
  }
  parseNumericLiteral(value) {
    return this.parseLiteral(value, "NumericLiteral");
  }
  parseBigIntLiteral(value) {
    let bigInt;
    try {
      bigInt = BigInt(value);
    } catch {
      bigInt = null;
    }
    const node = this.parseLiteral(bigInt, "BigIntLiteral");
    return node;
  }
  parseRegExpLiteral(value) {
    const node = this.startNode();
    this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
    node.pattern = value.pattern;
    node.flags = value.flags;
    this.next();
    return this.finishNode(node, "RegExpLiteral");
  }
  parseBooleanLiteral(value) {
    const node = this.startNode();
    node.value = value;
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  }
  parseNullLiteral() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "NullLiteral");
  }
  parseParenAndDistinguishExpression(canStartArrow) {
    const startLoc = this.state.startLoc;
    let val;
    this.next();
    this.expressionScope.enter(newArrowHeadScope());
    const innerStartLoc = this.state.startLoc;
    const exprList = [];
    const refExpressionErrors = new ExpressionErrors();
    let first = true;
    let spreadStartLoc;
    let optionalCommaStartLoc;
    while (!this.match(7)) {
      if (first) {
        first = false;
      } else {
        this.expect(8, refExpressionErrors.optionalParametersLoc === null ? null : refExpressionErrors.optionalParametersLoc);
        if (this.match(7)) {
          optionalCommaStartLoc = this.state.startLoc;
          break;
        }
      }
      if (this.match(17)) {
        const spreadNodeStartLoc = this.state.startLoc;
        spreadStartLoc = this.state.startLoc;
        exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartLoc));
        if (!this.checkCommaAfterRest(41)) {
          break;
        }
      } else {
        exprList.push(this.parseMaybeAssignAllowInOrVoidPattern(7, refExpressionErrors, this.parseParenItem));
      }
    }
    const innerEndLoc = this.state.lastTokEndLoc;
    this.expect(7);
    let arrowNode = this.startNodeAt(startLoc);
    if (canStartArrow && this.shouldParseArrow(exprList) && (arrowNode = this.parseArrow(arrowNode))) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      this.parseArrowExpression(arrowNode, exprList, false);
      return arrowNode;
    }
    this.expressionScope.exit();
    if (!exprList.length) {
      this.unexpected(this.state.lastTokStartLoc);
    }
    if (optionalCommaStartLoc) this.unexpected(optionalCommaStartLoc);
    if (spreadStartLoc) this.unexpected(spreadStartLoc);
    this.checkExpressionErrors(refExpressionErrors, true);
    this.toReferencedList(exprList, true);
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartLoc);
      val.expressions = exprList;
      this.finishNode(val, "SequenceExpression");
      this.resetEndLocation(val, innerEndLoc);
    } else {
      val = exprList[0];
    }
    return this.wrapParenthesis(startLoc, val);
  }
  wrapParenthesis(startLoc, expression) {
    if (!(this.optionFlags & 2048)) {
      this.addExtra(expression, "parenthesized", true);
      this.addExtra(expression, "parenStart", startLoc.index);
      this.takeSurroundingComments(expression, startLoc.index, this.state.lastTokEndLoc.index);
      return expression;
    }
    const parenExpression = this.startNodeAt(startLoc);
    parenExpression.expression = expression;
    return this.finishNode(parenExpression, "ParenthesizedExpression");
  }
  shouldParseArrow(params) {
    return !this.canInsertSemicolon();
  }
  parseArrow(node) {
    if (this.eat(15)) {
      return node;
    }
  }
  parseParenItem(node, startLoc) {
    return node;
  }
  parseNewOrNewTarget() {
    const node = this.startNode();
    this.next();
    if (this.match(12)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
      this.next();
      const metaProp = this.parseMetaProperty(node, meta, "target");
      if (!this.scope.allowNewTarget) {
        this.raise(Errors.UnexpectedNewTarget, metaProp);
      }
      return metaProp;
    }
    return this.parseNew(node);
  }
  parseNew(node) {
    this.parseNewCallee(node);
    if (this.eat(6)) {
      const args = this.parseExprList(7);
      this.toReferencedList(args);
      node.arguments = args;
    } else {
      node.arguments = [];
    }
    return this.finishNode(node, "NewExpression");
  }
  parseNewCallee(node) {
    const isImport = this.match(79);
    const callee = this.parseNoCallExpr();
    node.callee = callee;
    if (isImport && (callee.type === "Import" || callee.type === "ImportExpression")) {
      this.raise(Errors.ImportCallNotNewExpression, callee);
    }
  }
  parseTemplateElement(isTagged) {
    const {
      start,
      startLoc,
      end,
      value
    } = this.state;
    const elemStart = start + 1;
    const elem = this.startNodeAt(createPositionWithColumnOffset(startLoc, 1));
    if (value === null) {
      if (!isTagged) {
        this.raise(Errors.InvalidEscapeSequenceTemplate, createPositionWithColumnOffset(this.state.firstInvalidTemplateEscapePos, 1));
      }
    }
    const isTail = this.match(20);
    const endOffset = isTail ? -1 : -2;
    const elemEnd = end + endOffset;
    elem.value = {
      raw: this.input.slice(elemStart, elemEnd).replace(/\r\n?/g, "\n"),
      cooked: value === null ? null : value.slice(1, endOffset)
    };
    elem.tail = isTail;
    this.next();
    const finishedNode = this.finishNode(elem, "TemplateElement");
    this.resetEndLocation(finishedNode, createPositionWithColumnOffset(this.state.lastTokEndLoc, endOffset));
    return finishedNode;
  }
  parseTemplate(isTagged) {
    const node = this.startNode();
    let curElt = this.parseTemplateElement(isTagged);
    const quasis = [curElt];
    const substitutions = [];
    while (!curElt.tail) {
      substitutions.push(this.parseTemplateSubstitution());
      this.readTemplateContinuation();
      quasis.push(curElt = this.parseTemplateElement(isTagged));
    }
    node.expressions = substitutions;
    node.quasis = quasis;
    return this.finishNode(node, "TemplateLiteral");
  }
  parseTemplateSubstitution() {
    return this.parseExpression();
  }
  parseObjectLike(close, isPattern, refExpressionErrors) {
    let sawProto = false;
    let first = true;
    const node = this.startNode();
    node.properties = [];
    this.next();
    while (!this.match(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(8);
        if (this.match(close)) {
          this.addTrailingCommaExtraToNode(node);
          break;
        }
      }
      let prop;
      if (isPattern) {
        prop = this.parseBindingProperty();
      } else {
        prop = this.parsePropertyDefinition(refExpressionErrors);
        sawProto = this.checkProto(prop, sawProto, refExpressionErrors);
      }
      node.properties.push(prop);
    }
    this.next();
    const type = isPattern ? "ObjectPattern" : "ObjectExpression";
    return this.finishNode(node, type);
  }
  addTrailingCommaExtraToNode(node) {
    this.addExtra(node, "trailingComma", this.state.lastTokStartLoc.index);
    this.addExtra(node, "trailingCommaLoc", this.state.lastTokStartLoc, false);
  }
  maybeAsyncOrAccessorProp(prop) {
    return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(51));
  }
  parsePropertyDefinition(refExpressionErrors) {
    const decorators = [];
    if (this.match(22)) {
      if (this.hasPlugin("decorators")) {
        this.raise(Errors.UnsupportedPropertyDecorator, this.state.startLoc);
      }
      while (this.match(22)) {
        decorators.push(this.parseDecorator());
      }
    }
    const prop = this.startNode();
    let isAsync = false;
    let isAccessor = false;
    let startLoc;
    if (this.match(17)) {
      if (decorators.length) this.unexpected();
      return this.parseSpread();
    }
    if (decorators.length) {
      prop.decorators = decorators;
    }
    prop.method = false;
    if (refExpressionErrors) {
      startLoc = this.state.startLoc;
    }
    let isGenerator = this.eat(51);
    this.parsePropertyNamePrefixOperator(prop);
    const containsEsc = this.state.containsEsc;
    this.parsePropertyName(prop, refExpressionErrors);
    if (!isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
      const {
        key
      } = prop;
      const keyName = key.name;
      if (keyName === "async" && !this.hasPrecedingLineBreak()) {
        isAsync = true;
        this.resetPreviousNodeTrailingComments(key);
        isGenerator = this.eat(51);
        this.parsePropertyName(prop);
      }
      if (keyName === "get" || keyName === "set") {
        isAccessor = true;
        this.resetPreviousNodeTrailingComments(key);
        prop.kind = keyName;
        if (this.match(51)) {
          isGenerator = true;
          this.raise(Errors.AccessorIsGenerator, this.state.curPosition(), {
            kind: keyName
          });
          this.next();
        }
        this.parsePropertyName(prop);
      }
    }
    return this.parseObjPropValue(prop, startLoc, isGenerator, isAsync, false, isAccessor, refExpressionErrors);
  }
  getGetterSetterExpectedParamCount(method) {
    return method.kind === "get" ? 0 : 1;
  }
  getObjectOrClassMethodParams(method) {
    return method.params;
  }
  checkGetterSetterParams(method) {
    const paramCount = this.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    if (params.length !== paramCount) {
      this.raise(method.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, method);
    }
    if (method.kind === "set" && params[params.length - 1]?.type === "RestElement") {
      this.raise(Errors.BadSetterRestParameter, method);
    }
  }
  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    if (isAccessor) {
      const finishedProp = this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
      this.checkGetterSetterParams(finishedProp);
      return finishedProp;
    }
    if (isAsync || isGenerator || this.match(6)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
    }
  }
  parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
    prop.shorthand = false;
    if (this.eat(10)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowInOrVoidPattern(4, refExpressionErrors);
      return this.finishObjectProperty(prop);
    }
    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.start, true, false);
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startLoc, this.cloneIdentifier(prop.key));
      } else if (this.match(25)) {
        const shorthandAssignLoc = this.state.startLoc;
        if (refExpressionErrors != null) {
          if (refExpressionErrors.shorthandAssignLoc === null) {
            refExpressionErrors.shorthandAssignLoc = shorthandAssignLoc;
          }
        } else {
          this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
        }
        prop.value = this.parseMaybeDefault(startLoc, this.cloneIdentifier(prop.key));
      } else {
        prop.value = this.cloneIdentifier(prop.key);
      }
      prop.shorthand = true;
      return this.finishObjectProperty(prop);
    }
  }
  finishObjectProperty(node) {
    return this.finishNode(node, "ObjectProperty");
  }
  parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
    if (!node) this.unexpected();
    return node;
  }
  parsePropertyName(prop, refExpressionErrors) {
    if (this.eat(0)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssignAllowIn();
      this.expect(1);
    } else {
      const {
        type,
        value
      } = this.state;
      let key;
      if (tokenIsKeywordOrIdentifier(type)) {
        key = this.parseIdentifier(true);
      } else {
        switch (type) {
          case 131:
            key = this.parseNumericLiteral(value);
            break;
          case 130:
            key = this.parseStringLiteral(value);
            break;
          case 132:
            key = this.parseBigIntLiteral(value);
            break;
          case 134:
            {
              const privateKeyLoc = this.state.startLoc;
              if (refExpressionErrors != null) {
                if (refExpressionErrors.privateKeyLoc === null) {
                  refExpressionErrors.privateKeyLoc = privateKeyLoc;
                }
              } else {
                this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
              }
              key = this.parsePrivateName();
              break;
            }
          default:
            this.unexpected();
        }
      }
      prop.key = key;
      if (type !== 134) {
        prop.computed = false;
      }
    }
  }
  initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.async = isAsync;
  }
  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    this.initFunction(node, isAsync);
    node.generator = isGenerator;
    this.scope.enter(514 | 16 | (inClassScope ? 576 : 0) | (allowDirectSuper ? 32 : 0));
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    this.parseFunctionParams(node, isConstructor);
    const finishedNode = this.parseFunctionBodyAndFinish(node, type, true);
    this.prodParam.exit();
    this.scope.exit();
    return finishedNode;
  }
  parseArrayLike(close, refExpressionErrors) {
    const node = this.startNode();
    this.next();
    node.elements = this.parseExprList(close, true, refExpressionErrors, node);
    return this.finishNode(node, "ArrayExpression");
  }
  parseArrowExpression(node, params, isAsync, trailingCommaLoc) {
    this.scope.enter(514 | 4);
    let flags = functionFlags(isAsync, false);
    if (!this.match(2)) {
      flags |= this.prodParam.currentFlags() & (8 | 16);
    }
    this.prodParam.enter(flags);
    this.initFunction(node, isAsync);
    if (params) {
      this.setArrowFunctionParameters(node, params, trailingCommaLoc);
    }
    this.parseFunctionBody(node, true);
    this.prodParam.exit();
    this.scope.exit();
    return this.finishNode(node, "ArrowFunctionExpression");
  }
  setArrowFunctionParameters(node, params, trailingCommaLoc) {
    this.toAssignableList(params, trailingCommaLoc, false);
    node.params = params;
  }
  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    this.parseFunctionBody(node, false, isMethod);
    return this.finishNode(node, type);
  }
  parseFunctionBody(node, allowExpression, isMethod = false) {
    const isExpression = allowExpression && !this.match(2);
    this.expressionScope.enter(newExpressionScope());
    if (isExpression) {
      node.body = this.parseMaybeAssign();
      this.checkParams(node, false, allowExpression, false);
    } else {
      const oldStrict = this.state.strict;
      const oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(this.prodParam.currentFlags() | 4);
      node.body = this.parseBlock(true, false, hasStrictModeDirective => {
        const nonSimple = !this.isSimpleParamList(node.params);
        if (hasStrictModeDirective && nonSimple) {
          this.raise(Errors.IllegalLanguageModeDirective, (node.kind === "method" || node.kind === "constructor") && !!node.key ? this.optionFlags & 256 ? node.key.loc.end : node.key : node);
        }
        const strictModeChanged = !oldStrict && this.state.strict;
        this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);
        if (this.state.strict && node.id) {
          this.checkIdentifier(node.id, 65, strictModeChanged);
        }
      });
      this.prodParam.exit();
      this.state.labels = oldLabels;
    }
    this.expressionScope.exit();
  }
  isSimpleParameter(node) {
    return node.type === "Identifier";
  }
  isSimpleParamList(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if (!this.isSimpleParameter(params[i])) return false;
    }
    return true;
  }
  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    const checkClashes = !allowDuplicates && new Set();
    const formalParameters = {
      type: "FormalParameters"
    };
    for (const param of node.params) {
      this.checkLVal(param, formalParameters, 5, checkClashes, strictModeChanged);
    }
  }
  parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
    const elts = [];
    let first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(8);
        if (this.match(close)) {
          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }
          this.next();
          break;
        }
      }
      elts.push(this.parseExprListItem(close, allowEmpty, refExpressionErrors));
    }
    return elts;
  }
  parseExprListItem(close, allowEmpty, refExpressionErrors, allowPlaceholder) {
    let elt;
    if (this.match(8)) {
      if (!allowEmpty) {
        this.raise(Errors.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        });
      }
      elt = null;
    } else if (this.match(17)) {
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(this.parseSpread(refExpressionErrors), spreadNodeStartLoc);
    } else if (this.match(13)) {
      this.expectPlugin("partialApplication");
      if (!allowPlaceholder) {
        this.raise(Errors.UnexpectedArgumentPlaceholder, this.state.startLoc);
      }
      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssignAllowInOrVoidPattern(close, refExpressionErrors, this.parseParenItem);
    }
    return elt;
  }
  parseIdentifier(liberal) {
    const node = this.startNode();
    const name = this.parseIdentifierName(liberal);
    return this.createIdentifier(node, name);
  }
  createIdentifier(node, name) {
    node.name = name;
    if (this.optionFlags & 256) {
      node.loc.identifierName = name;
    }
    return this.finishNode(node, "Identifier");
  }
  createIdentifierAt(node, name, endLoc) {
    node.name = name;
    if (this.optionFlags & 256) {
      node.loc.identifierName = name;
    }
    return this.finishNodeAt(node, "Identifier", endLoc);
  }
  parseIdentifierName(liberal) {
    let name;
    const {
      start,
      type
    } = this.state;
    if (tokenIsKeywordOrIdentifier(type)) {
      name = this.state.value;
    } else {
      this.unexpected();
    }
    const tokenIsKeyword = tokenKeywordOrIdentifierIsKeyword(type);
    if (liberal) {
      if (tokenIsKeyword) {
        this.replaceToken(128);
      }
    } else {
      this.checkReservedWord(name, this.sourceToOffsetPos(start), tokenIsKeyword, false);
    }
    this.next();
    return name;
  }
  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (word.length > 10) {
      return;
    }
    if (!canBeReservedWord(word)) {
      return;
    }
    if (checkKeywords && isKeyword(word)) {
      this.raise(Errors.UnexpectedKeyword, startLoc, {
        keyword: word
      });
      return;
    }
    const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;
    if (reservedTest(word, this.inModule)) {
      this.raise(Errors.UnexpectedReservedWord, startLoc, {
        reservedWord: word
      });
      return;
    } else if (word === "yield") {
      if (this.prodParam.hasYield) {
        this.raise(Errors.YieldBindingIdentifier, startLoc);
        return;
      }
    } else if (word === "await") {
      if (this.prodParam.hasAwait) {
        this.raise(Errors.AwaitBindingIdentifier, startLoc);
        return;
      }
      if (this.scope.inStaticBlock) {
        this.raise(Errors.AwaitBindingIdentifierInStaticBlock, startLoc);
        return;
      }
      this.expressionScope.recordAsyncArrowParametersError(startLoc);
    } else if (word === "arguments") {
      if (this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(Errors.ArgumentsInClass, startLoc);
        return;
      }
    }
  }
  recordAwaitIfAllowed() {
    const isAwaitAllowed = this.prodParam.hasAwait;
    if (isAwaitAllowed && !this.scope.inFunction) {
      this.state.hasTopLevelAwait = true;
    }
    return isAwaitAllowed;
  }
  parseAwait(startLoc, soloAwait) {
    const startIndex = startLoc.index;
    this.setLoc(startLoc);
    const node = this.startNodeAt(startLoc);
    this.expressionScope.recordParameterInitializerError(Errors.AwaitExpressionFormalParameter, startIndex);
    if (this.eat(51)) {
      this.raise(Errors.ObsoleteAwaitStar, startLoc);
    }
    if (!this.scope.inFunction && !(this.optionFlags & 1)) {
      if (this.isAmbiguousPrefixOrIdentifier()) {
        this.ambiguousScriptDifferentAst = true;
      } else {
        this.sawUnambiguousESM = true;
      }
    }
    if (!soloAwait) {
      node.argument = this.parseMaybeUnary(null, true);
    }
    return this.finishNode(node, "AwaitExpression");
  }
  isAmbiguousPrefixOrIdentifier() {
    if (this.hasPrecedingLineBreak()) return true;
    const {
      type
    } = this.state;
    return type === 49 || type === 6 || type === 0 || tokenIsTemplate(type) || type === 98 && !this.state.containsEsc || type === 133 || type === 52 || this.hasPlugin("v8intrinsic") && type === 50;
  }
  parseYield(startLoc) {
    this.setLoc(startLoc);
    const node = this.startNodeAt(startLoc);
    this.expressionScope.recordParameterInitializerError(Errors.YieldInParameter, startLoc.index);
    let delegating = false;
    let argument = null;
    if (!this.hasPrecedingLineBreak()) {
      delegating = this.eat(51);
      switch (this.state.type) {
        case 9:
        case 135:
        case 4:
        case 7:
        case 1:
        case 5:
        case 10:
        case 8:
          if (!delegating) break;
        default:
          argument = this.parseMaybeAssign();
      }
    }
    node.delegate = delegating;
    node.argument = argument;
    return this.finishNode(node, "YieldExpression");
  }
  parseImportCall(node) {
    this.next();
    node.source = this.parseMaybeAssignAllowIn();
    node.options = null;
    if (this.eat(8)) {
      if (!this.match(7)) {
        node.options = this.parseMaybeAssignAllowIn();
        if (this.eat(8)) {
          this.addTrailingCommaExtraToNode(node.options);
          if (!this.match(7)) {
            do {
              this.parseMaybeAssignAllowIn();
            } while (this.eat(8) && !this.match(7));
            this.raise(Errors.ImportCallArity, node);
          }
        }
      } else {
        this.addTrailingCommaExtraToNode(node.source);
      }
    }
    this.expect(7);
    return this.finishNode(node, "ImportExpression");
  }
  withTopicBindingContext(callback) {
    const oldInHackPipelineBody = this.state.inHackPipelineBody;
    this.state.inHackPipelineBody = true;
    const oldSeenTopicReference = this.state.seenTopicReference;
    this.state.seenTopicReference = false;
    try {
      return callback();
    } finally {
      this.state.inHackPipelineBody = oldInHackPipelineBody;
      this.state.seenTopicReference = oldSeenTopicReference;
    }
  }
  allowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToSet = (8 | 16) & ~flags;
    if (prodParamToSet) {
      this.prodParam.enter(flags | 8 | 16);
      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }
    return callback();
  }
  disallowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToClear = 8 & flags;
    const prodParamToSet = 16 & ~flags;
    if (prodParamToClear || prodParamToSet) {
      this.prodParam.enter(flags & -9 | 16);
      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }
    return callback();
  }
  registerTopicReference() {
    this.state.seenTopicReference = true;
  }
  topicReferenceIsAllowedInCurrentContext() {
    return this.state.inHackPipelineBody;
  }
  topicReferenceWasUsedInCurrentContext() {
    return this.state.seenTopicReference;
  }
  parseFSharpPipelineBody(prec) {
    const startLoc = this.state.startLoc;
    this.prodParam.enter(this.prodParam.currentFlags() & -17);
    let ret;
    if (this.isContextual(92) && this.recordAwaitIfAllowed()) {
      this.next();
      ret = this.parseAwait(startLoc, true);
      const nextOp = this.state.type;
      if (tokenIsOperator(nextOp) && nextOp !== 35 && (this.prodParam.hasIn || nextOp !== 54)) {
        this.raise(Errors.PipelineUnparenthesized, startLoc);
      }
    } else {
      this.state.canStartArrow = true;
      ret = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, prec);
    }
    this.prodParam.exit();
    return ret;
  }
  parseModuleExpression() {
    this.expectPlugin("moduleBlocks");
    const node = this.startNode();
    this.next();
    if (!this.match(2)) {
      this.unexpected(null, 2);
    }
    const program = this.startNodeAt(this.state.endLoc);
    this.next();
    const revertScopes = this.initializeScopes(true);
    this.enterInitialScopes();
    try {
      node.body = this.parseProgram(program, 4, "module");
    } finally {
      revertScopes();
    }
    return this.finishNode(node, "ModuleExpression");
  }
  parseVoidPattern(refExpressionErrors) {
    this.expectPlugin("discardBinding");
    const node = this.startNode();
    if (refExpressionErrors != null) {
      refExpressionErrors.voidPatternLoc = this.state.startLoc;
    }
    this.next();
    return this.finishNode(node, "VoidPattern");
  }
  parseMaybeAssignAllowInOrVoidPattern(close, refExpressionErrors, afterLeftParse) {
    if (refExpressionErrors != null && this.match(84)) {
      const nextCode = this.lookaheadCharCode();
      if (nextCode === 44 || nextCode === (close === 1 ? 93 : close === 4 ? 125 : 41) || nextCode === 61) {
        return this.parseMaybeDefault(this.state.startLoc, this.parseVoidPattern(refExpressionErrors));
      }
    }
    return this.parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse);
  }
  parsePropertyNamePrefixOperator(prop) {}
}
const loopLabel = {
    kind: 1
  },
  switchLabel = {
    kind: 2
  };
const loneSurrogate = /[\uD800-\uDFFF]/u;
const keywordRelationalOperator = /in(?:stanceof)?/y;
function createExportedTokens(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const {
      type
    } = token;
    if (typeof type === "number") {
      token.type = getExportedToken(type);
    }
  }
  return tokens;
}
class StatementParser extends ExpressionParser {
  parseTopLevel(file, program) {
    file.program = this.parseProgram(program, 135, this.options.sourceType === "module" ? "module" : "script");
    file.comments = this.comments;
    if (this.optionFlags & 512) {
      file.tokens = createExportedTokens(this.tokens);
    }
    return this.finishNode(file, "File");
  }
  parseProgram(program, end, sourceType) {
    program.sourceType = sourceType;
    program.interpreter = this.parseInterpreterDirective();
    this.parseBlockBody(program, true, true, end);
    if (this.inModule) {
      if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0) {
        for (const [localName, at] of Array.from(this.scope.undefinedExports)) {
          this.raise(Errors.ModuleExportUndefined, at, {
            localName
          });
        }
      }
      this.addExtra(program, "topLevelAwait", this.state.hasTopLevelAwait);
    }
    let finishedProgram;
    if (end === 135) {
      finishedProgram = this.finishNode(program, "Program");
    } else {
      finishedProgram = this.finishNodeAt(program, "Program", createPositionWithColumnOffset(this.state.startLoc, -1));
    }
    return finishedProgram;
  }
  stmtToDirective(stmt) {
    const directive = this.castNodeTo(stmt, "Directive");
    const directiveLiteral = this.castNodeTo(stmt.expression, "DirectiveLiteral");
    const expressionValue = directiveLiteral.value;
    const raw = this.input.slice(this.offsetToSourcePos(directiveLiteral.start), this.offsetToSourcePos(directiveLiteral.end));
    const val = directiveLiteral.value = raw.slice(1, -1);
    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    this.addExtra(directiveLiteral, "expressionValue", expressionValue);
    directive.value = directiveLiteral;
    delete stmt.expression;
    return directive;
  }
  parseInterpreterDirective() {
    if (!this.match(24)) {
      return null;
    }
    const node = this.startNode();
    node.value = this.state.value;
    this.next();
    return this.finishNode(node, "InterpreterDirective");
  }
  isLet() {
    if (!this.isContextual(96)) {
      return false;
    }
    return this.hasFollowingBindingAtom();
  }
  isUsing() {
    if (!this.isContextual(103)) {
      return false;
    }
    return this.nextTokenIsIdentifierOnSameLine();
  }
  isForUsing() {
    if (!this.isContextual(103)) {
      return false;
    }
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    if (this.isUnparsedContextual(next, "of")) {
      const nextCharAfterOf = this.lookaheadCharCodeSince(next + 2);
      if (nextCharAfterOf !== 61 && nextCharAfterOf !== 58 && nextCharAfterOf !== 59) {
        return false;
      }
    }
    if (this.chStartsBindingIdentifier(nextCh, next) || this.isUnparsedContextual(next, "void")) {
      return true;
    }
    return false;
  }
  nextTokenIsIdentifierOnSameLine() {
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    return this.chStartsBindingIdentifier(nextCh, next);
  }
  isAwaitUsing() {
    if (!this.isContextual(92)) {
      return false;
    }
    let next = this.nextTokenInLineStart();
    if (this.isUnparsedContextual(next, "using")) {
      next = this.nextTokenInLineStartSince(next + 5);
      const nextCh = this.codePointAtPos(next);
      if (this.chStartsBindingIdentifier(nextCh, next)) {
        return true;
      }
    }
    return false;
  }
  chStartsBindingIdentifier(ch, pos) {
    if (isIdentifierStart(ch)) {
      keywordRelationalOperator.lastIndex = pos;
      if (keywordRelationalOperator.test(this.input)) {
        const endCh = this.codePointAtPos(keywordRelationalOperator.lastIndex);
        if (!isIdentifierChar(endCh) && endCh !== 92) {
          return false;
        }
      }
      return true;
    } else if (ch === 92) {
      return true;
    } else {
      return false;
    }
  }
  chStartsBindingPattern(ch) {
    return ch === 91 || ch === 123;
  }
  hasFollowingBindingAtom() {
    const next = this.nextTokenStart();
    const nextCh = this.codePointAtPos(next);
    return this.chStartsBindingPattern(nextCh) || this.chStartsBindingIdentifier(nextCh, next);
  }
  hasInLineFollowingBindingIdentifierOrBrace() {
    const next = this.nextTokenInLineStart();
    const nextCh = this.codePointAtPos(next);
    return nextCh === 123 || this.chStartsBindingIdentifier(nextCh, next);
  }
  allowsUsing() {
    return (this.scope.inModule || !this.scope.inTopLevel) && !this.scope.inBareCaseStatement;
  }
  parseModuleItem() {
    return this.parseStatementLike(1 | 2 | 4 | 8);
  }
  parseStatementListItem() {
    return this.parseStatementLike(2 | 4 | (!this.options.annexB || this.state.strict ? 0 : 8));
  }
  parseStatementOrSloppyAnnexBFunctionDeclaration(allowLabeledFunction = false) {
    let flags = 0;
    if (this.options.annexB && !this.state.strict) {
      flags |= 4;
      if (allowLabeledFunction) {
        flags |= 8;
      }
    }
    return this.parseStatementLike(flags);
  }
  parseStatement() {
    return this.parseStatementLike(0);
  }
  parseStatementLike(flags) {
    let decorators = null;
    if (this.match(22)) {
      decorators = this.parseDecorators(true);
    }
    return this.parseStatementContent(flags, decorators);
  }
  parseStatementContent(flags, decorators) {
    const startType = this.state.type;
    const node = this.startNode();
    const allowDeclaration = !!(flags & 2);
    const allowFunctionDeclaration = !!(flags & 4);
    const topLevel = flags & 1;
    switch (startType) {
      case 56:
        return this.parseBreakContinueStatement(node, true);
      case 59:
        return this.parseBreakContinueStatement(node, false);
      case 60:
        return this.parseDebuggerStatement(node);
      case 86:
        return this.parseDoWhileStatement(node);
      case 87:
        return this.parseForStatement(node);
      case 64:
        if (this.lookaheadCharCode() === 46) break;
        if (!allowFunctionDeclaration) {
          this.raise(this.state.strict ? Errors.StrictFunction : this.options.annexB ? Errors.SloppyFunctionAnnexB : Errors.SloppyFunction, this.state.startLoc);
        }
        return this.parseFunctionStatement(node, false, !allowDeclaration && allowFunctionDeclaration);
      case 76:
        if (!allowDeclaration) this.unexpected();
        return this.parseClass(this.maybeTakeDecorators(decorators, node), true);
      case 65:
        return this.parseIfStatement(node);
      case 66:
        return this.parseReturnStatement(node);
      case 67:
        return this.parseSwitchStatement(node);
      case 68:
        return this.parseThrowStatement(node);
      case 69:
        return this.parseTryStatement(node);
      case 92:
        if (this.isAwaitUsing()) {
          if (!this.allowsUsing()) {
            this.raise(Errors.UnexpectedUsingDeclaration, node);
          } else if (!allowDeclaration) {
            this.raise(Errors.UnexpectedLexicalDeclaration, node);
          } else if (!this.recordAwaitIfAllowed()) {
            this.raise(Errors.AwaitUsingNotInAsyncContext, node);
          }
          this.next();
          return this.parseVarStatement(node, "await using");
        }
        break;
      case 103:
        if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace()) {
          break;
        }
        if (!this.allowsUsing()) {
          this.raise(Errors.UnexpectedUsingDeclaration, this.state.startLoc);
        } else if (!allowDeclaration) {
          this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
        }
        return this.parseVarStatement(node, "using");
      case 96:
        {
          if (this.state.containsEsc) {
            break;
          }
          const next = this.nextTokenStart();
          const nextCh = this.codePointAtPos(next);
          if (nextCh !== 91) {
            if (!allowDeclaration && this.hasFollowingLineBreak()) break;
            if (!this.chStartsBindingIdentifier(nextCh, next) && nextCh !== 123) {
              break;
            }
          }
        }
      case 71:
        {
          if (!allowDeclaration) {
            this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
          }
        }
      case 70:
        {
          const kind = this.state.value;
          return this.parseVarStatement(node, kind);
        }
      case 88:
        return this.parseWhileStatement(node);
      case 72:
        return this.parseWithStatement(node);
      case 2:
        return this.parseBlock();
      case 9:
        return this.parseEmptyStatement(node);
      case 79:
        {
          const nextTokenCharCode = this.lookaheadCharCode();
          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
            break;
          }
        }
      case 78:
        {
          if (!(this.optionFlags & 8) && !topLevel) {
            this.raise(Errors.UnexpectedImportExport, this.state.startLoc);
          }
          this.next();
          let result;
          if (startType === 79) {
            result = this.parseImport(node);
          } else {
            result = this.parseExport(node, decorators);
          }
          this.assertModuleNodeAllowed(result);
          return result;
        }
      default:
        {
          if (this.isAsyncFunction()) {
            if (!allowDeclaration) {
              this.raise(Errors.AsyncFunctionInSingleStatementContext, this.state.startLoc);
            }
            this.next();
            return this.parseFunctionStatement(node, true, !allowDeclaration && allowFunctionDeclaration);
          }
        }
    }
    const maybeName = this.state.value;
    const expr = this.parseExpression();
    if (tokenIsIdentifier(startType) && expr.type === "Identifier" && this.eat(10)) {
      return this.parseLabeledStatement(node, maybeName, expr, flags);
    } else {
      return this.parseExpressionStatement(node, expr, decorators);
    }
  }
  assertModuleNodeAllowed(node) {
    if (!(this.optionFlags & 8) && !this.inModule) {
      this.raise(Errors.ImportOutsideModule, node);
    }
  }
  maybeTakeDecorators(maybeDecorators, classNode, exportNode) {
    if (maybeDecorators) {
      if (classNode.decorators?.length) {
        this.raise(Errors.DecoratorsBeforeAfterExport, classNode.decorators[0]);
        classNode.decorators.unshift(...maybeDecorators);
      } else {
        classNode.decorators = maybeDecorators;
      }
      this.resetStartLocationFromNode(classNode, maybeDecorators[0]);
      if (exportNode) this.resetStartLocationFromNode(exportNode, classNode);
    }
    return classNode;
  }
  canHaveLeadingDecorator() {
    return this.match(76);
  }
  parseDecorators(allowExport) {
    const decorators = [];
    do {
      decorators.push(this.parseDecorator());
    } while (this.match(22));
    if (this.match(78)) {
      if (!allowExport) {
        this.unexpected();
      }
    } else if (!this.canHaveLeadingDecorator()) {
      throw this.raise(Errors.UnexpectedLeadingDecorator, this.state.startLoc);
    }
    return decorators;
  }
  parseDecorator() {
    this.expectOnePlugin(["decorators", "decorators-legacy"]);
    const node = this.startNode();
    this.next();
    if (this.hasPlugin("decorators")) {
      const startLoc = this.state.startLoc;
      let expr;
      if (this.match(6)) {
        const startLoc = this.state.startLoc;
        this.next();
        expr = this.parseExpression();
        this.expect(7);
        expr = this.wrapParenthesis(startLoc, expr);
        const paramsStartLoc = this.state.startLoc;
        node.expression = this.parseMaybeDecoratorArguments(expr, startLoc);
        if (node.expression !== expr) {
          this.raise(Errors.DecoratorArgumentsOutsideParentheses, paramsStartLoc);
        }
      } else {
        expr = this.parseIdentifier(false);
        while (this.eat(12)) {
          const node = this.startNodeAt(startLoc);
          node.object = expr;
          if (this.match(134)) {
            this.classScope.usePrivateName(this.state.value, this.state.startLoc);
            node.property = this.parsePrivateName();
          } else {
            node.property = this.parseIdentifier(true);
          }
          node.computed = false;
          expr = this.finishNode(node, "MemberExpression");
        }
        node.expression = this.parseMaybeDecoratorArguments(expr, startLoc);
      }
    } else {
      this.state.canStartArrow = false;
      node.expression = this.parseExprSubscripts();
    }
    return this.finishNode(node, "Decorator");
  }
  parseMaybeDecoratorArguments(expr, startLoc) {
    if (this.eat(6)) {
      const node = this.startNodeAt(startLoc);
      node.callee = expr;
      node.arguments = this.parseCallExpressionArguments();
      this.toReferencedList(node.arguments);
      return this.finishNode(node, "CallExpression");
    }
    return expr;
  }
  parseBreakContinueStatement(node, isBreak) {
    this.next();
    if (this.isLineTerminator()) {
      node.label = null;
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    }
    this.verifyBreakContinue(node, isBreak);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }
  verifyBreakContinue(node, isBreak) {
    let i;
    for (i = 0; i < this.state.labels.length; ++i) {
      const lab = this.state.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === 1)) {
          break;
        }
        if (node.label && isBreak) break;
      }
    }
    if (i === this.state.labels.length) {
      const type = isBreak ? "BreakStatement" : "ContinueStatement";
      this.raise(Errors.IllegalBreakContinue, node, {
        type
      });
    }
  }
  parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  }
  parseHeaderExpression() {
    this.expect(6);
    const val = this.parseExpression();
    this.expect(7);
    return val;
  }
  parseDoWhileStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.parseStatement();
    this.state.labels.pop();
    this.expect(88);
    node.test = this.parseHeaderExpression();
    this.eat(9);
    return this.finishNode(node, "DoWhileStatement");
  }
  parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    let awaitAt = null;
    if (this.isContextual(92) && this.recordAwaitIfAllowed()) {
      awaitAt = this.state.startLoc;
      this.next();
    }
    this.scope.enter(0);
    this.expect(6);
    if (this.match(9)) {
      if (awaitAt !== null) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node, null);
    }
    const startsWithLet = this.isContextual(96);
    {
      const startsWithAwaitUsing = this.isAwaitUsing();
      const starsWithUsingDeclaration = startsWithAwaitUsing || this.isForUsing();
      const isLetOrUsing = startsWithLet && this.hasFollowingBindingAtom() || starsWithUsingDeclaration;
      if (this.match(70) || this.match(71) || isLetOrUsing) {
        const initNode = this.startNode();
        let kind;
        if (startsWithAwaitUsing) {
          kind = "await using";
          if (!this.recordAwaitIfAllowed()) {
            this.raise(Errors.AwaitUsingNotInAsyncContext, this.state.startLoc);
          }
          this.next();
        } else {
          kind = this.state.value;
        }
        this.next();
        this.parseVar(initNode, true, kind);
        const init = this.finishNode(initNode, "VariableDeclaration");
        const isForIn = this.match(54);
        if (isForIn && starsWithUsingDeclaration) {
          this.raise(Errors.ForInUsing, init);
        }
        if ((isForIn || this.isContextual(98)) && init.declarations.length === 1) {
          return this.parseForIn(node, init, awaitAt);
        }
        if (awaitAt !== null) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      }
    }
    const startsWithAsync = this.isContextual(91);
    const refExpressionErrors = new ExpressionErrors();
    const init = this.parseExpression(true, refExpressionErrors);
    const isForOf = this.isContextual(98);
    if (isForOf) {
      if (startsWithLet) {
        this.raise(Errors.ForOfLet, init);
      }
      if (awaitAt === null && startsWithAsync && init.type === "Identifier") {
        this.raise(Errors.ForOfAsync, init);
      }
    }
    if (isForOf || this.match(54)) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.toAssignable(init, true);
      const type = isForOf ? "ForOfStatement" : "ForInStatement";
      this.checkLVal(init, {
        type
      });
      return this.parseForIn(node, init, awaitAt);
    } else {
      this.checkExpressionErrors(refExpressionErrors, true);
    }
    if (awaitAt !== null) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init);
  }
  parseFunctionStatement(node, isAsync, isHangingDeclaration) {
    this.next();
    return this.parseFunction(node, 1 | (isHangingDeclaration ? 2 : 0) | (isAsync ? 8 : 0));
  }
  parseIfStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    node.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration();
    node.alternate = this.eat(62) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null;
    return this.finishNode(node, "IfStatement");
  }
  parseReturnStatement(node) {
    if (!this.prodParam.hasReturn) {
      this.raise(Errors.IllegalReturn, this.state.startLoc);
    }
    this.next();
    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }
    return this.finishNode(node, "ReturnStatement");
  }
  parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseHeaderExpression();
    const cases = node.cases = [];
    this.expect(2);
    this.state.labels.push(switchLabel);
    this.scope.enter(256);
    let cur;
    for (let sawDefault; !this.match(4);) {
      if (this.match(57) || this.match(61)) {
        const isCase = this.match(57);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raise(Errors.MultipleDefaultsInSwitch, this.state.lastTokStartLoc);
          }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(10);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatementListItem());
        } else {
          this.unexpected();
        }
      }
    }
    this.scope.exit();
    if (cur) this.finishNode(cur, "SwitchCase");
    this.next();
    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  }
  parseThrowStatement(node) {
    this.next();
    if (this.hasPrecedingLineBreak()) {
      this.raise(Errors.NewlineAfterThrow, this.state.lastTokEndLoc);
    }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  }
  parseCatchClauseParam() {
    const param = this.parseBindingAtom();
    this.scope.enter(this.options.annexB && param.type === "Identifier" ? 8 : 0);
    this.checkLVal(param, {
      type: "CatchClause"
    }, 9);
    return param;
  }
  parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.match(58)) {
      const clause = this.startNode();
      this.next();
      if (this.match(6)) {
        this.expect(6);
        clause.param = this.parseCatchClauseParam();
        this.expect(7);
      } else {
        clause.param = null;
        this.scope.enter(0);
      }
      clause.body = this.parseBlock(false, false);
      this.scope.exit();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(63) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer) {
      this.raise(Errors.NoCatchOrFinally, node);
    }
    return this.finishNode(node, "TryStatement");
  }
  parseVarStatement(node, kind, allowMissingInitializer = false) {
    this.next();
    this.parseVar(node, false, kind, allowMissingInitializer);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  }
  parseWhileStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    this.state.labels.push(loopLabel);
    node.body = this.parseStatement();
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  }
  parseWithStatement(node) {
    if (this.state.strict) {
      this.raise(Errors.StrictWith, this.state.startLoc);
    }
    this.next();
    node.object = this.parseHeaderExpression();
    node.body = this.parseStatement();
    return this.finishNode(node, "WithStatement");
  }
  parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  }
  parseLabeledStatement(node, maybeName, expr, flags) {
    for (const label of this.state.labels) {
      if (label.name === maybeName) {
        this.raise(Errors.LabelRedeclaration, expr, {
          labelName: maybeName
        });
      }
    }
    const kind = tokenIsLoop(this.state.type) ? 1 : this.match(67) ? 2 : null;
    for (let i = this.state.labels.length - 1; i >= 0; i--) {
      const label = this.state.labels[i];
      if (label.statementStart === node.start) {
        label.statementStart = this.sourceToOffsetPos(this.state.start);
        label.kind = kind;
      } else {
        break;
      }
    }
    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.sourceToOffsetPos(this.state.start)
    });
    node.body = flags & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(true) : this.parseStatement();
    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  }
  parseExpressionStatement(node, expr, decorators) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }
  parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
    const node = this.startNode();
    if (allowDirectives) {
      this.state.strictErrors.clear();
    }
    this.expect(2);
    if (createNewLexicalScope) {
      this.scope.enter(0);
    }
    this.parseBlockBody(node, allowDirectives, false, 4, afterBlockParse);
    if (createNewLexicalScope) {
      this.scope.exit();
    }
    return this.finishNode(node, "BlockStatement");
  }
  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  }
  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    const body = node.body = [];
    const directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end, afterBlockParse);
  }
  parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
    const oldStrict = this.state.strict;
    let hasStrictModeDirective = false;
    let parsedNonDirective = false;
    while (!this.match(end)) {
      const stmt = topLevel ? this.parseModuleItem() : this.parseStatementListItem();
      if (directives && !parsedNonDirective) {
        if (this.isValidDirective(stmt)) {
          const directive = this.stmtToDirective(stmt);
          directives.push(directive);
          if (!hasStrictModeDirective && directive.value.value === "use strict") {
            hasStrictModeDirective = true;
            this.setStrict(true);
          }
          continue;
        }
        parsedNonDirective = true;
        this.state.strictErrors.clear();
      }
      body.push(stmt);
    }
    afterBlockParse?.call(this, hasStrictModeDirective);
    if (!oldStrict) {
      this.setStrict(false);
    }
    this.next();
  }
  parseFor(node, init) {
    node.init = init;
    this.semicolon(false);
    node.test = this.match(9) ? null : this.parseExpression();
    this.semicolon(false);
    node.update = this.match(7) ? null : this.parseExpression();
    this.expect(7);
    node.body = this.parseStatement();
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }
  parseForIn(node, init, awaitAt) {
    const isForIn = this.match(54);
    this.next();
    if (isForIn) {
      if (awaitAt !== null) this.unexpected(awaitAt);
    } else {
      node.await = awaitAt !== null;
    }
    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || !this.options.annexB || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(Errors.ForInOfLoopInitializer, init, {
        type: isForIn ? "ForInStatement" : "ForOfStatement"
      });
    }
    if (init.type === "AssignmentPattern") {
      this.raise(Errors.InvalidLhs, init, {
        ancestor: {
          type: "ForStatement"
        }
      });
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
    this.expect(7);
    node.body = this.parseStatement();
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  }
  parseVar(node, isFor, kind, allowMissingInitializer = false) {
    const declarations = node.declarations = [];
    node.kind = kind;
    for (;;) {
      const decl = this.startNode();
      this.parseVarId(decl, kind);
      decl.init = !this.eat(25) ? null : isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
      if (decl.init === null && !allowMissingInitializer) {
        if (decl.id.type !== "Identifier" && !(isFor && (this.match(54) || this.isContextual(98)))) {
          this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
            kind: "destructuring"
          });
        } else if ((kind === "const" || kind === "using" || kind === "await using") && !(this.match(54) || this.isContextual(98))) {
          this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
            kind
          });
        }
      }
      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(8)) break;
    }
    return node;
  }
  parseVarId(decl, kind) {
    const id = this.parseBindingAtom();
    if (kind === "using" || kind === "await using") {
      if (id.type === "ArrayPattern" || id.type === "ObjectPattern") {
        this.raise(Errors.UsingDeclarationHasBindingPattern, id);
      }
    } else {
      if (id.type === "VoidPattern") {
        this.raise(Errors.UnexpectedVoidPattern, id);
      }
    }
    this.checkLVal(id, {
      type: "VariableDeclarator"
    }, kind === "var" ? 5 : 8201);
    decl.id = id;
  }
  parseAsyncFunctionExpression(node) {
    return this.parseFunction(node, 8);
  }
  parseFunction(node, flags = 0) {
    const hangingDeclaration = flags & 2;
    const isDeclaration = !!(flags & 1);
    const requireId = isDeclaration && !(flags & 4);
    const isAsync = !!(flags & 8);
    this.initFunction(node, isAsync);
    if (this.match(51)) {
      if (hangingDeclaration) {
        this.raise(Errors.GeneratorInSingleStatementContext, this.state.startLoc);
      }
      this.next();
      node.generator = true;
    }
    if (isDeclaration) {
      node.id = this.parseFunctionId(requireId);
    }
    this.scope.enter(514);
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    if (!isDeclaration) {
      node.id = this.parseFunctionId();
    }
    this.parseFunctionParams(node, false);
    this.parseFunctionBodyAndFinish(node, isDeclaration ? "FunctionDeclaration" : "FunctionExpression");
    this.prodParam.exit();
    this.scope.exit();
    if (isDeclaration && !hangingDeclaration) {
      this.registerFunctionStatementId(node);
    }
    return node;
  }
  parseFunctionId(requireId) {
    return requireId || tokenIsIdentifier(this.state.type) ? this.parseIdentifier() : null;
  }
  parseFunctionParams(node, isConstructor) {
    this.expect(6);
    this.expressionScope.enter(newParameterDeclarationScope());
    node.params = this.parseBindingList(7, 41, 2 | (isConstructor ? 4 : 0));
    this.expressionScope.exit();
  }
  registerFunctionStatementId(node) {
    if (!node.id) return;
    this.scope.declareName(node.id.name, !this.options.annexB || this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, node.id.start);
  }
  parseClass(node, isStatement, optionalId) {
    this.next();
    const oldStrict = this.state.strict;
    this.state.strict = true;
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    node.body = this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }
  isClassProperty() {
    return this.match(25) || this.match(9) || this.match(4);
  }
  isClassMethod() {
    return this.match(6);
  }
  nameIsConstructor(key) {
    return key.type === "Identifier" && key.name === "constructor" || key.type === "StringLiteral" && key.value === "constructor";
  }
  isNonstaticConstructor(method) {
    return !method.computed && !method.static && this.nameIsConstructor(method.key);
  }
  parseClassBody(hadSuperClass, oldStrict) {
    this.classScope.enter();
    const state = {
      hadConstructor: false,
      hadSuperClass
    };
    let decorators = [];
    const classBody = this.startNode();
    classBody.body = [];
    this.expect(2);
    while (!this.match(4)) {
      if (this.eat(9)) {
        if (decorators.length > 0) {
          throw this.raise(Errors.DecoratorSemicolon, this.state.lastTokEndLoc);
        }
        continue;
      }
      if (this.match(22)) {
        decorators.push(this.parseDecorator());
        continue;
      }
      const member = this.startNode();
      if (decorators.length) {
        member.decorators = decorators;
        this.resetStartLocationFromNode(member, decorators[0]);
        decorators = [];
      }
      this.parseClassMember(classBody, member, state);
      if (member.decorators && member.decorators.length > 0) {
        if (this.hasPlugin("typescript") && (this.hasPlugin("estree") ? member.type === "TSAbstractMethodDefinition" : member.type === "TSDeclareMethod")) {
          this.raise(Errors.DecoratorAbstractMethod, member);
        }
        if (member.kind === "constructor") {
          this.raise(Errors.DecoratorConstructor, member);
        }
      }
    }
    this.state.strict = oldStrict;
    this.next();
    if (decorators.length) {
      throw this.raise(Errors.TrailingDecorator, this.state.startLoc);
    }
    this.classScope.exit();
    return this.finishNode(classBody, "ClassBody");
  }
  parseClassMemberFromModifier(classBody, member) {
    const key = this.parseIdentifier(true);
    if (this.isClassMethod()) {
      const method = member;
      method.kind = "method";
      method.computed = false;
      method.key = key;
      method.static = false;
      this.pushClassMethod(classBody, method, false, false, false, false);
      return true;
    } else if (this.isClassProperty()) {
      const prop = member;
      prop.computed = false;
      prop.key = key;
      prop.static = false;
      classBody.body.push(this.parseClassProperty(prop));
      return true;
    }
    this.resetPreviousNodeTrailingComments(key);
    return false;
  }
  parseClassMember(classBody, member, state) {
    const isStatic = this.isContextual(102);
    if (isStatic) {
      if (this.parseClassMemberFromModifier(classBody, member)) {
        return;
      }
      if (this.eat(2)) {
        this.parseClassStaticBlock(classBody, member);
        return;
      }
    }
    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }
  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const publicMethod = member;
    const privateMethod = member;
    const publicProp = member;
    const privateProp = member;
    const accessorProp = member;
    const method = publicMethod;
    const publicMember = publicMethod;
    member.static = isStatic;
    this.parsePropertyNamePrefixOperator(member);
    if (this.eat(51)) {
      method.kind = "method";
      const isPrivateName = this.match(134);
      this.parseClassElementName(method);
      this.parsePostMemberNameModifiers(method);
      if (isPrivateName) {
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }
      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(Errors.ConstructorIsGenerator, publicMethod.key);
      }
      this.pushClassMethod(classBody, publicMethod, true, false, false, false);
      return;
    }
    const isContextual = !this.state.containsEsc && tokenIsIdentifier(this.state.type);
    const key = this.parseClassElementName(member);
    const maybeContextualKw = isContextual ? key.name : null;
    const isPrivate = this.isPrivateName(key);
    const maybeQuestionTokenStartLoc = this.state.startLoc;
    this.parsePostMemberNameModifiers(publicMember);
    if (this.isClassMethod()) {
      method.kind = "method";
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      }
      const isConstructor = this.isNonstaticConstructor(publicMethod);
      let allowsDirectSuper = false;
      if (isConstructor) {
        publicMethod.kind = "constructor";
        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(Errors.DuplicateConstructor, key);
        }
        if (isConstructor && this.hasPlugin("typescript") && member.override) {
          this.raise(Errors.OverrideOnConstructor, key);
        }
        state.hadConstructor = true;
        allowsDirectSuper = state.hadSuperClass;
      }
      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (maybeContextualKw === "async" && !this.isLineTerminator()) {
      this.resetPreviousNodeTrailingComments(key);
      const isGenerator = this.eat(51);
      if (publicMember.optional) {
        this.unexpected(maybeQuestionTokenStartLoc);
      }
      method.kind = "method";
      const isPrivate = this.match(134);
      this.parseClassElementName(method);
      this.parsePostMemberNameModifiers(publicMember);
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(Errors.ConstructorIsAsync, publicMethod.key);
        }
        this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
      }
    } else if ((maybeContextualKw === "get" || maybeContextualKw === "set") && !(this.match(51) && this.isLineTerminator())) {
      this.resetPreviousNodeTrailingComments(key);
      method.kind = maybeContextualKw;
      const isPrivate = this.match(134);
      this.parseClassElementName(publicMethod);
      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(Errors.ConstructorIsAccessor, publicMethod.key);
        }
        this.pushClassMethod(classBody, publicMethod, false, false, false, false);
      }
      this.checkGetterSetterParams(publicMethod);
    } else if (maybeContextualKw === "accessor" && !this.isLineTerminator()) {
      this.expectPlugin("decoratorAutoAccessors");
      this.resetPreviousNodeTrailingComments(key);
      const isPrivate = this.match(134);
      this.parseClassElementName(publicProp);
      this.pushClassAccessorProperty(classBody, accessorProp, isPrivate);
    } else if (this.isLineTerminator()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  }
  parseClassElementName(member) {
    const {
      type,
      value
    } = this.state;
    if ((type === 128 || type === 130) && member.static && value === "prototype") {
      this.raise(Errors.StaticPrototype, this.state.startLoc);
    }
    if (type === 134) {
      if (value === "constructor") {
        this.raise(Errors.ConstructorClassPrivateField, this.state.startLoc);
      }
      const key = this.parsePrivateName();
      member.key = key;
      return key;
    }
    this.parsePropertyName(member);
    return member.key;
  }
  parseClassStaticBlock(classBody, member) {
    this.scope.enter(576 | 128 | 16);
    const oldLabels = this.state.labels;
    this.state.labels = [];
    this.prodParam.enter(0);
    const body = member.body = [];
    this.parseBlockOrModuleBlockBody(body, undefined, false, 4);
    this.prodParam.exit();
    this.scope.exit();
    this.state.labels = oldLabels;
    classBody.body.push(this.finishNode(member, "StaticBlock"));
    if (member.decorators?.length) {
      this.raise(Errors.DecoratorStaticBlock, member);
    }
  }
  pushClassProperty(classBody, prop) {
    if (!prop.computed && this.nameIsConstructor(prop.key)) {
      this.raise(Errors.ConstructorClassField, prop.key);
    }
    classBody.body.push(this.parseClassProperty(prop));
  }
  pushClassPrivateProperty(classBody, prop) {
    const node = this.parseClassPrivateProperty(prop);
    classBody.body.push(node);
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.start);
  }
  pushClassAccessorProperty(classBody, prop, isPrivate) {
    if (!isPrivate && !prop.computed && this.nameIsConstructor(prop.key)) {
      this.raise(Errors.ConstructorClassField, prop.key);
    }
    const node = this.parseClassAccessorProperty(prop);
    classBody.body.push(node);
    if (isPrivate) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.start);
    }
  }
  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
  }
  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
    classBody.body.push(node);
    const kind = node.kind === "get" ? node.static ? 6 : 2 : node.kind === "set" ? node.static ? 5 : 1 : 0;
    this.declareClassPrivateMethodInScope(node, kind);
  }
  declareClassPrivateMethodInScope(node, kind) {
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.start);
  }
  parsePostMemberNameModifiers(methodOrProp) {}
  parseClassPrivateProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassPrivateProperty");
  }
  parseClassProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassProperty");
  }
  parseClassAccessorProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassAccessorProperty");
  }
  parseInitializer(node) {
    this.scope.enter(576 | 16);
    this.expressionScope.enter(newExpressionScope());
    this.prodParam.enter(0);
    node.value = this.eat(25) ? this.parseMaybeAssignAllowIn() : null;
    this.expressionScope.exit();
    this.prodParam.exit();
    this.scope.exit();
  }
  parseClassId(node, isStatement, optionalId, bindingType = 8331) {
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();
      if (isStatement) {
        this.declareNameFromIdentifier(node.id, bindingType);
      }
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        throw this.raise(Errors.MissingClassName, this.state.startLoc);
      }
    }
  }
  parseClassSuper(node) {
    if (this.eat(77)) {
      this.state.canStartArrow = false;
      node.superClass = this.parseExprSubscripts();
    } else {
      node.superClass = null;
    }
  }
  parseExport(node, decorators) {
    const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, true);
    const hasDefault = this.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
    const parseAfterDefault = !hasDefault || this.eat(8);
    const hasStar = parseAfterDefault && this.eatExportStar(node);
    const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
    const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(8));
    const isFromRequired = hasDefault || hasStar;
    if (hasStar && !hasNamespace) {
      if (hasDefault) this.unexpected();
      if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.parseExportFrom(node, true);
      this.sawUnambiguousESM = true;
      return this.finishNode(node, "ExportAllDeclaration");
    }
    const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);
    if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers) {
      this.unexpected(null, 2);
    }
    if (hasNamespace && parseAfterNamespace) {
      this.unexpected(null, 94);
    }
    let hasDeclaration;
    if (isFromRequired || hasSpecifiers) {
      hasDeclaration = false;
      if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.parseExportFrom(node, isFromRequired);
    } else {
      hasDeclaration = this.maybeParseExportDeclaration(node);
    }
    if (isFromRequired || hasSpecifiers || hasDeclaration) {
      const node2 = node;
      this.checkExport(node2, true, false, !!node2.source);
      if (node2.declaration?.type === "ClassDeclaration") {
        this.maybeTakeDecorators(decorators, node2.declaration, node2);
      } else if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.sawUnambiguousESM = true;
      return this.finishNode(node2, "ExportNamedDeclaration");
    }
    if (this.eat(61)) {
      const node2 = node;
      const decl = this.parseExportDefaultExpression();
      node2.declaration = decl;
      if (decl.type === "ClassDeclaration") {
        this.maybeTakeDecorators(decorators, decl, node2);
      } else if (decorators) {
        throw this.raise(Errors.UnsupportedDecoratorExport, node);
      }
      this.checkExport(node2, true, true);
      this.sawUnambiguousESM = true;
      return this.finishNode(node2, "ExportDefaultDeclaration");
    }
    throw this.unexpected(null, 2);
  }
  eatExportStar(node) {
    return this.eat(51);
  }
  maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
    if (maybeDefaultIdentifier || this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom", maybeDefaultIdentifier?.start);
      const id = maybeDefaultIdentifier || this.parseIdentifier(true);
      const specifier = this.startNodeAtNode(id);
      specifier.exported = id;
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return true;
    }
    return false;
  }
  maybeParseExportNamespaceSpecifier(node) {
    if (this.isContextual(89)) {
      node.specifiers ??= [];
      const specifier = this.startNodeAt(this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseModuleExportName();
      node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
      return true;
    }
    return false;
  }
  maybeParseExportNamedSpecifiers(node) {
    if (this.match(2)) {
      const node2 = node;
      if (!node2.specifiers) node2.specifiers = [];
      const isTypeExport = node2.exportKind === "type";
      node2.specifiers.push(...this.parseExportSpecifiers(isTypeExport));
      node2.source = null;
      node2.attributes = [];
      node2.declaration = null;
      return true;
    }
    return false;
  }
  maybeParseExportDeclaration(node) {
    if (this.shouldParseExportDeclaration()) {
      node.specifiers = [];
      node.source = null;
      node.attributes = [];
      node.declaration = this.parseExportDeclaration(node);
      return true;
    }
    return false;
  }
  isAsyncFunction() {
    if (!this.isContextual(91)) return false;
    const next = this.nextTokenInLineStart();
    return this.isUnparsedContextual(next, "function");
  }
  parseExportDefaultExpression() {
    const expr = this.startNode();
    if (this.match(64)) {
      this.next();
      return this.parseFunction(expr, 1 | 4);
    } else if (this.isAsyncFunction()) {
      this.next();
      this.next();
      return this.parseFunction(expr, 1 | 4 | 8);
    }
    if (this.match(76)) {
      return this.parseClass(expr, true, true);
    }
    if (this.match(22)) {
      return this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
    }
    if (this.match(71) || this.match(70) || this.isLet() || this.isUsing() || this.isAwaitUsing()) {
      throw this.raise(Errors.UnsupportedDefaultExport, this.state.startLoc);
    }
    const res = this.parseMaybeAssignAllowIn();
    this.semicolon();
    return res;
  }
  parseExportDeclaration(node) {
    if (this.match(76)) {
      const node = this.parseClass(this.startNode(), true, false);
      return node;
    }
    return this.parseStatementListItem();
  }
  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;
    if (tokenIsIdentifier(type)) {
      if (type === 91 && !this.state.containsEsc || type === 96) {
        return false;
      }
      if ((type === 126 || type === 125) && !this.state.containsEsc) {
        const next = this.nextTokenStart();
        const nextChar = this.input.charCodeAt(next);
        if (nextChar === 123 || this.chStartsBindingIdentifier(nextChar, next) && !this.input.startsWith("from", next)) {
          this.expectOnePlugin(["flow", "typescript"]);
          return false;
        }
      }
    } else if (!this.match(61)) {
      return false;
    }
    const next = this.nextTokenStart();
    const hasFrom = this.isUnparsedContextual(next, "from");
    if (this.input.charCodeAt(next) === 44 || tokenIsIdentifier(this.state.type) && hasFrom) {
      return true;
    }
    if (this.match(61) && hasFrom) {
      const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
      return nextAfterFrom === 34 || nextAfterFrom === 39;
    }
    return false;
  }
  parseExportFrom(node, expect) {
    if (this.eatContextual(94)) {
      node.source = this.parseImportSource();
      this.checkExport(node);
      this.maybeParseImportAttributes(node);
    } else if (expect) {
      this.unexpected();
    }
    this.semicolon();
  }
  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;
    if (type === 22) {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      if (this.hasPlugin("decorators")) {
        return true;
      }
    }
    if (this.isUsing()) {
      this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
      return true;
    }
    if (this.isAwaitUsing()) {
      this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
      return true;
    }
    return type === 70 || type === 71 || type === 64 || type === 76 || this.isLet() || this.isAsyncFunction();
  }
  checkExport(node, checkNames, isDefault, isFrom) {
    if (checkNames) {
      if (isDefault) {
        this.checkDuplicateExports(node, "default");
        if (this.hasPlugin("exportDefaultFrom")) {
          const declaration = node.declaration;
          if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !declaration.extra?.parenthesized) {
            this.raise(Errors.ExportDefaultFromAsIdentifier, declaration);
          }
        }
      } else if (node.specifiers?.length) {
        for (const specifier of node.specifiers) {
          const {
            exported
          } = specifier;
          const exportName = exported.type === "Identifier" ? exported.name : exported.value;
          this.checkDuplicateExports(specifier, exportName);
          if (!isFrom && specifier.local) {
            const {
              local
            } = specifier;
            if (local.type !== "Identifier") {
              this.raise(Errors.ExportBindingIsString, specifier, {
                localName: local.value,
                exportName
              });
            } else {
              this.checkReservedWord(local.name, local.start, true, false);
              this.scope.checkLocalExport(local);
            }
          }
        }
      } else if (node.declaration) {
        const decl = node.declaration;
        if (decl.type === "FunctionDeclaration" || decl.type === "ClassDeclaration") {
          const {
            id
          } = decl;
          if (!id) throw new Error("Assertion failure");
          this.checkDuplicateExports(node, id.name);
        } else if (decl.type === "VariableDeclaration") {
          for (const declaration of decl.declarations) {
            this.checkDeclaration(declaration.id);
          }
        }
      }
    }
  }
  checkDeclaration(node) {
    if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    } else if (node.type === "ObjectPattern") {
      for (const prop of node.properties) {
        this.checkDeclaration(prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (const elem of node.elements) {
        if (elem) {
          this.checkDeclaration(elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "AssignmentPattern") {
      this.checkDeclaration(node.left);
    }
  }
  checkDuplicateExports(node, exportName) {
    if (this.exportedIdentifiers.has(exportName)) {
      if (exportName === "default") {
        this.raise(Errors.DuplicateDefaultExport, node);
      } else {
        this.raise(Errors.DuplicateExport, node, {
          exportName
        });
      }
    }
    this.exportedIdentifiers.add(exportName);
  }
  parseExportSpecifiers(isInTypeExport) {
    const nodes = [];
    let first = true;
    this.expect(2);
    while (!this.eat(4)) {
      if (first) {
        first = false;
      } else {
        this.expect(8);
        if (this.eat(4)) break;
      }
      const isMaybeTypeOnly = this.isContextual(126);
      const isString = this.match(130);
      const node = this.startNode();
      node.local = this.parseModuleExportName();
      nodes.push(this.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly));
    }
    return nodes;
  }
  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (this.eatContextual(89)) {
      node.exported = this.parseModuleExportName();
    } else if (isString) {
      node.exported = this.cloneStringLiteral(node.local);
    } else if (!node.exported) {
      node.exported = this.cloneIdentifier(node.local);
    }
    return this.finishNode(node, "ExportSpecifier");
  }
  parseModuleExportName() {
    if (this.match(130)) {
      const result = this.parseStringLiteral(this.state.value);
      const surrogate = loneSurrogate.exec(result.value);
      if (surrogate) {
        this.raise(Errors.ModuleExportNameHasLoneSurrogate, result, {
          surrogateCharCode: surrogate[0].charCodeAt(0)
        });
      }
      return result;
    }
    return this.parseIdentifier(true);
  }
  checkImportPhase(node) {
    const {
      specifiers
    } = node;
    const singleBindingType = specifiers.length === 1 ? specifiers[0].type : null;
    if (node.phase === "source") {
      if (singleBindingType !== "ImportDefaultSpecifier") {
        this.raise(Errors.SourcePhaseImportRequiresDefault, specifiers[0]);
      }
    } else if (node.phase === "defer") {
      if (singleBindingType !== "ImportNamespaceSpecifier") {
        this.raise(Errors.DeferImportRequiresNamespace, specifiers[0]);
      }
    }
  }
  isPotentialImportPhase(isExport) {
    if (isExport) return false;
    return this.isContextual(101) || this.isContextual(93);
  }
  applyImportPhase(node, isExport, phase, loc) {
    if (isExport) {
      return;
    }
    if (phase === "source") {
      this.expectPlugin("sourcePhaseImports", loc);
      node.phase = "source";
    } else if (phase === "defer") {
      this.expectPlugin("deferredImportEvaluation", loc);
      node.phase = "defer";
    } else if (this.hasPlugin("sourcePhaseImports")) {
      node.phase = null;
    }
  }
  parseMaybeImportPhase(node, isExport) {
    if (!this.isPotentialImportPhase(isExport)) {
      this.applyImportPhase(node, isExport, null);
      return null;
    }
    const phaseIdentifier = this.startNode();
    const phaseIdentifierName = this.parseIdentifierName(true);
    const {
      type
    } = this.state;
    const isImportPhase = tokenIsKeywordOrIdentifier(type) ? type !== 94 || this.lookaheadCharCode() === 102 : type !== 8;
    if (isImportPhase) {
      this.applyImportPhase(node, isExport, phaseIdentifierName, phaseIdentifier.start);
      return null;
    } else {
      this.applyImportPhase(node, isExport, null);
      return this.createIdentifier(phaseIdentifier, phaseIdentifierName);
    }
  }
  isPrecedingIdImportPhase(phase) {
    const {
      type
    } = this.state;
    return tokenIsIdentifier(type) ? type !== 94 || this.lookaheadCharCode() === 102 : type !== 8;
  }
  parseImport(node) {
    if (this.match(130)) {
      return this.parseImportSourceAndAttributes(node);
    }
    return this.parseImportSpecifiersAndAfter(node, this.parseMaybeImportPhase(node, false));
  }
  parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier) {
    node.specifiers = [];
    const hasDefault = this.maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier);
    const parseNext = !hasDefault || this.eat(8);
    const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
    if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
    this.expectContextual(94);
    return this.parseImportSourceAndAttributes(node);
  }
  parseImportSourceAndAttributes(node) {
    node.specifiers ??= [];
    node.source = this.parseImportSource();
    this.maybeParseImportAttributes(node);
    this.checkImportPhase(node);
    this.semicolon();
    this.sawUnambiguousESM = true;
    return this.finishNode(node, "ImportDeclaration");
  }
  parseImportSource() {
    if (!this.match(130)) this.unexpected();
    return this.parseExprAtom();
  }
  parseImportSpecifierLocal(node, specifier, type) {
    specifier.local = this.parseIdentifier();
    node.specifiers.push(this.finishImportSpecifier(specifier, type));
  }
  finishImportSpecifier(specifier, type, bindingType = 8201) {
    this.checkLVal(specifier.local, {
      type
    }, bindingType);
    return this.finishNode(specifier, type);
  }
  parseImportAttributes() {
    this.expect(2);
    const attrs = [];
    const attrNames = new Set();
    do {
      if (this.match(4)) {
        break;
      }
      const node = this.startNode();
      const keyName = this.state.value;
      if (attrNames.has(keyName)) {
        this.raise(Errors.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: keyName
        });
      }
      attrNames.add(keyName);
      if (this.match(130)) {
        node.key = this.parseStringLiteral(keyName);
      } else {
        node.key = this.parseIdentifier(true);
      }
      this.expect(10);
      if (!this.match(130)) {
        throw this.raise(Errors.ModuleAttributeInvalidValue, this.state.startLoc);
      }
      node.value = this.parseStringLiteral(this.state.value);
      attrs.push(this.finishNode(node, "ImportAttribute"));
    } while (this.eat(8));
    this.expect(4);
    return attrs;
  }
  maybeParseImportAttributes(node) {
    let attributes;
    if (this.match(72)) {
      if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40) {
        return;
      }
      this.next();
      attributes = this.parseImportAttributes();
    } else {
      attributes = [];
    }
    node.attributes = attributes;
  }
  maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier) {
    if (maybeDefaultIdentifier) {
      const specifier = this.startNodeAtNode(maybeDefaultIdentifier);
      specifier.local = maybeDefaultIdentifier;
      node.specifiers.push(this.finishImportSpecifier(specifier, "ImportDefaultSpecifier"));
      return true;
    } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
      this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier");
      return true;
    }
    return false;
  }
  maybeParseStarImportSpecifier(node) {
    if (this.match(51)) {
      const specifier = this.startNode();
      this.next();
      this.expectContextual(89);
      this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier");
      return true;
    }
    return false;
  }
  parseNamedImportSpecifiers(node) {
    let first = true;
    this.expect(2);
    while (!this.eat(4)) {
      if (first) {
        first = false;
      } else {
        if (this.eat(10)) {
          throw this.raise(Errors.DestructureNamedImport, this.state.startLoc);
        }
        this.expect(8);
        if (this.eat(4)) break;
      }
      const specifier = this.startNode();
      const importedIsString = this.match(130);
      const isMaybeTypeOnly = this.isContextual(126);
      specifier.imported = this.parseModuleExportName();
      const importSpecifier = this.parseImportSpecifier(specifier, importedIsString, node.importKind === "type" || node.importKind === "typeof", isMaybeTypeOnly, undefined);
      node.specifiers.push(importSpecifier);
    }
  }
  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
    if (this.eatContextual(89)) {
      specifier.local = this.parseIdentifier();
    } else {
      const {
        imported
      } = specifier;
      if (importedIsString) {
        throw this.raise(Errors.ImportBindingIsString, specifier, {
          importName: imported.value
        });
      }
      this.checkReservedWord(imported.name, specifier.start, true, true);
      if (!specifier.local) {
        specifier.local = this.cloneIdentifier(imported);
      }
    }
    return this.finishImportSpecifier(specifier, "ImportSpecifier", bindingType);
  }
  isThisParam(param) {
    return param.type === "Identifier" && param.name === "this";
  }
}
class Parser extends StatementParser {
  constructor(options, input, pluginsMap) {
    const normalizedOptions = getOptions(options);
    super(normalizedOptions, input);
    this.options = normalizedOptions;
    this.initializeScopes();
    this.plugins = pluginsMap;
    this.filename = normalizedOptions.sourceFilename;
    this.startIndex = normalizedOptions.startIndex;
    let optionFlags = 0;
    if (normalizedOptions.allowAwaitOutsideFunction) {
      optionFlags |= 1;
    }
    if (normalizedOptions.allowReturnOutsideFunction) {
      optionFlags |= 2;
    }
    if (normalizedOptions.allowImportExportEverywhere) {
      optionFlags |= 8;
    }
    if (normalizedOptions.allowSuperOutsideMethod) {
      optionFlags |= 16;
    }
    if (normalizedOptions.allowUndeclaredExports) {
      optionFlags |= 64;
    }
    if (normalizedOptions.allowNewTargetOutsideFunction) {
      optionFlags |= 4;
    }
    if (normalizedOptions.allowYieldOutsideFunction) {
      optionFlags |= 32;
    }
    if (normalizedOptions.ranges) {
      optionFlags |= 128;
    }
    if (normalizedOptions.locations === true) {
      optionFlags |= 256;
    }
    if (normalizedOptions.tokens) {
      optionFlags |= 512;
    }
    if (normalizedOptions.createImportExpressions) {
      optionFlags |= 1024;
    }
    if (normalizedOptions.createParenthesizedExpressions) {
      optionFlags |= 2048;
    }
    if (normalizedOptions.errorRecovery) {
      optionFlags |= 4096;
    }
    if (normalizedOptions.attachComment) {
      optionFlags |= 8192;
    }
    if (normalizedOptions.annexB) {
      optionFlags |= 16384;
    }
    this.optionFlags = optionFlags;
  }
  getScopeHandler() {
    return ScopeHandler;
  }
  parse() {
    this.enterInitialScopes();
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = [];
    const result = this.parseTopLevel(file, program);
    result.errors = this.state.errors;
    result.comments.length = this.state.commentsLen;
    if (this.options.locations === "packed") {
      result.locData = resetLocData();
    }
    return result;
  }
}
function parse(input, options) {
  if (options?.sourceType === "unambiguous") {
    options = {
      ...options
    };
    try {
      options.sourceType = "module";
      const parser = getParser(options, input);
      const ast = parser.parse();
      if (parser.sawUnambiguousESM) {
        return ast;
      }
      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch {}
      } else {
        ast.program.sourceType = "script";
      }
      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch {}
      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}
function parseExpression(input, options) {
  const parser = getParser(options, input);
  if (parser.options.strictMode) {
    parser.state.strict = true;
  }
  return parser.getExpression();
}
function generateExportedTokenTypes(internalTokenTypes) {
  const tokenTypes = {};
  for (const typeName of Object.keys(internalTokenTypes)) {
    tokenTypes[typeName] = getExportedToken(internalTokenTypes[typeName]);
  }
  return tokenTypes;
}
const tokTypes = generateExportedTokenTypes(tt);
function getParser(options, input) {
  let cls = Parser;
  const pluginsMap = new Map();
  if (options?.plugins) {
    for (const plugin of options.plugins) {
      let name, opts;
      if (typeof plugin === "string") {
        name = plugin;
      } else {
        [name, opts] = plugin;
      }
      if (!pluginsMap.has(name)) {
        pluginsMap.set(name, opts || {});
      }
    }
    validatePlugins(pluginsMap);
    cls = getParserClass(pluginsMap);
  }
  return new cls(options, input, pluginsMap);
}
const parserClassCache = new Map();
function getParserClass(pluginsMap) {
  const pluginList = [];
  for (const name of mixinPluginNames) {
    if (pluginsMap.has(name)) {
      pluginList.push(name);
    }
  }
  const key = pluginList.join("|");
  let cls = parserClassCache.get(key);
  if (!cls) {
    cls = Parser;
    for (const plugin of pluginList) {
      cls = mixinPlugins[plugin](cls);
    }
    parserClassCache.set(key, cls);
  }
  return cls;
}
function getLine(locData, pos) {
  if (pos < 0 || pos * 2 >= locData.length) {
    throw new Error(`Position ${pos} is out of bounds for location data.`);
  }
  return locData[pos * 2];
}
function getColumn(locData, pos) {
  if (pos < 0 || pos * 2 + 1 >= locData.length) {
    throw new Error(`Position ${pos} is out of bounds for location data.`);
  }
  return locData[pos * 2 + 1];
}
export { getColumn, getLine, parse, parseExpression, tokTypes };
//# sourceMappingURL=index.js.map
