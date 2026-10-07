export as namespace acorn
export = acorn

declare namespace acorn {
  function parse(input: string, options?: Options): Node

  function parseExpressionAt(input: string, pos?: number, options?: Options): Node

  function tokenizer(input: string, options?: Options): {
    getToken(): Token
    [Symbol.iterator](): Iterator<Token>
  }

  interface Options {
    ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020
    sourceType?: 'script' | 'module'
    onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: Position) => void
    onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: Position) => void
    allowReserved?: boolean | 'never'
    allowReturnOutsideFunction?: boolean
    allowImportExportEverywhere?: boolean
    allowAwaitOutsideFunction?: boolean
    allowHashBang?: boolean
    locations?: boolean
    onToken?: ((token: Token) => any) | Token[]
    onComment?: ((
      isBlock: boolean, text: string, start: number, end: number, startLoc?: Position,
      endLoc?: Position
    ) => void) | Comment[]
    ranges?: boolean
    program?: Node
    sourceFile?: string
    directSourceFile?: string
    preserveParens?: boolean
  }

  class Parser {
    constructor(options: Options, input: string, startPos?: number)
    parse(this: Parser): Node
    static parse(this: typeof Parser, input: string, options?: Options): Node
    static parseExpressionAt(this: typeof Parser, input: string, pos: number, options?: Options): Node
    static tokenizer(this: typeof Parser, input: string, options?: Options): {
      getToken(): Token
      [Symbol.iterator](): Iterator<Token>
    }
    static extend(this: typeof Parser, ...plugins: ((BaseParser: typeof Parser) => typeof Parser)[]): typeof Parser
  }

  interface Position { line: number; column: number; offset: number }

  const defaultOptions: Options

  function getLineInfo(input: string, offset: number): Position

  class SourceLocation {
    start: Position
    end: Position
    source?: string | null
    constructor(p: Parser, start: Position, end: Position)
  }

  class Node {
    type: string
    start: number
    end: number
    loc?: SourceLocation
    sourceFile?: string
    range?: [number, number]
    constructor(parser: Parser, pos: number, loc?: SourceLocation)
  }

  class TokenType {
    label: string
    keyword: string
    beforeExpr: boolean
    startsExpr: boolean
    isLoop: boolean
    isAssign: boolean
    prefix: boolean
    postfix: boolean
    binop: number
    updateContext?: (prevType: TokenType) => void
    constructor(label: string, conf?: any)
  }

  const tokTypes: {
    num: TokenType
    regexp: TokenType
    string: TokenType
    name: TokenType
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
    arrow: TokenType
    template: TokenType
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

  class TokContext {
    constructor(token: string, isExpr: boolean, preserveSpace: boolean, override?: (p: Parser) => void)
  }

  const tokContexts: {
    b_stat: TokContext
    b_expr: TokContext
    b_tmpl: TokContext
    p_stat: TokContext
    p_expr: TokContext
    q_tmpl: TokContext
    f_expr: TokContext
  }

  function isIdentifierStart(code: number, astral?: boolean): boolean

  function isIdentifierChar(code: number, astral?: boolean): boolean

  interface AbstractToken {
  }

  interface Comment extends AbstractToken {
    type: string
    value: string
    start: number
    end: number
    loc?: SourceLocation
    range?: [number, number]
  }

  class Token {
    type: TokenType
    value: any
    start: number
    end: number
    loc?: SourceLocation
    range?: [number, number]
    constructor(p: Parser)
  }

  function isNewLine(code: number): boolean

  const lineBreak: RegExp

  const lineBreakG: RegExp

  const version: string
}
