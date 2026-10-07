## 1.1.3 (March 31, 2021)

- Fixed matching on CSS wide keywords for at-rule's prelude and descriptors
- Added `fit-content` to `width` property patch as browsers are supported it as a keyword (nonstandard), but spec defines it as a function
- Fixed parsing a value contains parentheses or brackets and `parseValue` option is set to `false`, in that case `!important` was included into a value but must not (#155)

## 1.1.2 (November 26, 2020)

- Rolled back to use spread syntax in object literals since it not supported by nodejs < 8.3 (#145)

## 1.1.1 (November 18, 2020)

- Fixed edge cases in mismatch location computation for `SyntaxMatchError`

## 1.1.0 (November 17, 2020)

- Bumped `mdn-data` to 2.0.14
- Extended `fork()` method to allow append syntax instead of overriding for `types`, `properties` and `atrules`, e.g. `csstree.fork({ types: { color: '| foo | bar' } })`
- Extended lexer API for validation
    - Added `Lexer#checkAtruleName(atruleName)`, `Lexer#checkAtrulePrelude(atruleName, prelude)`, `Lexer#checkAtruleDescriptorName(atruleName, descriptorName)` and `Lexer#checkPropertyName(propertyName)`
    - Added `Lexer#getAtrule(atruleName, fallbackBasename)` method
    - Extended `Lexer#getAtrulePrelude()` and `Lexer#getProperty()` methods to take `fallbackBasename` parameter
    - Improved `SyntaxMatchError` location details
    - Changed error messages

## 1.0.1 (November 11, 2020)

- Fixed edge cases for parsing of custom property value with a single whitespace when `parseCustomProperty:true`

## 1.0.0 (October 27, 2020)

- Added `onComment` option to parser config
- Added support for `break` and `skip` values in `walk()` to control traversal
- Added `List#reduce()` and `List#reduceRight()` methods
- Bumped `mdn-data` to 2.0.12
- Exposed version of the lib (i.e. `import { version } from 'css-tree'`)
- Fixed `Lexer#dump()` to dump atrules syntaxes as well
- Fixed matching comma separated `<urange>` list (#135)
- Renamed `HexColor` node type into `Hash`
- Removed `element()` specific parsing rules
- Removed `dist/default-syntax.json` from package

## 1.0.0-alpha.39 (December 5, 2019)

- Fixed walker with `visit: "Declaration"` to iterate `DeclarationList` (#114)

## 1.0.0-alpha.38 (November 25, 2019)

- Bumped `mdn-data` to `2.0.6`
- Added initial implmentation for at-rule matching via `Lexer#matchAtrulePrelude()` and `Lexer#matchAtruleDescriptor()` methods
- Added `-moz-control-character-visibility`, `-ms-grid-columns`, `-ms-grid-rows` and `-ms-hyphenate-limit-last` properties to patch (#111)
- Added `flow`, `flow-root` and `table-caption` values to patched `display` (#112)

## 1.0.0-alpha.37 (October 22, 2019)

- Bumped `source-map` version to `^0.6.1` to fix source map generation inconsistency across node.js versions due to mappings sorting bug and v8 moving to [a stable Array#sort](https://v8.dev/blog/array-sort) ([fix commit](https://github.com/mozilla/source-map/commit/f35a2e4212dd025cb5e1fc219e7ac8a4b96c2cc9) in `source-map`)

## 1.0.0-alpha.36 (October 13, 2019)

- Dropped support for Node < 8
- Updated dev deps (fixed `npm audit` issues)
- Reworked build pipeline
    - Package provides `dist/csstree.js` and `dist/csstree.min.js` now (instead of single `dist/csstree.js` that was a min version)
    - Bundle size (min version) reduced from 191Kb to 158Kb due to some optimisations
- Definition syntax
    - Renamed `grammar` into `definitionSyntax` (named per spec)
    - Added `compact` option to `generate()` method to avoid formatting (spaces) when possible
- Lexer
    - Changed `dump()` method to produce syntaxes in compact form by default

## 1.0.0-alpha.35 (October 7, 2019)

- Walker
    - Changed implementation to avoid runtime compilation due to CSP issues (see #91, #109)
    - Added `find()`, `findLast()` and `findAll()` methods (e.g. `csstree.find(ast, node => node.type === 'ClassSelector')`)

## 1.0.0-alpha.34 (July 27, 2019)

- Tokenizer
    - Added `isBOM()` function
    - Added `charCodeCategory()` function
    - Removed `firstCharOffset()` function (use `isBOM()` instead)
    - Removed `CHARCODE` dictionary
    - Removed `INPUT_STREAM_CODE*` dictionaries
- Lexer
    - Allowed comments in matching value (just ignore them like whitespaces)
    - Increased iteration count in value matching from 10k up to 15k
    - Fixed missed `debugger` (#104)

## 1.0.0-alpha.33 (July 11, 2019)

- Lexer
    - Fixed low priority productions matching by changing an approach for robust one (#103)

## 1.0.0-alpha.32 (July 11, 2019)

- Lexer
    - Fixed low priority productions matching in long `||-` and `&&-` groups (#103)

## 1.0.0-alpha.31 (July 11, 2019)

- Bumped `mdn/data` to `2.0.4` (#99)
- Lexer
    - Added [bracketed range notation](https://drafts.csswg.org/css-values-4/#numeric-ranges) support and related refactoring
    - Removed `<number-zero-one>`, `<number-one-or-greater>` and `<positive-integer>` from generic types. In fact, types moved to patch, because those types can be expressed in a regular grammar due to bracketed range notation implemented
    - Added support for multiple token string matching
    - Improved `<custom-ident>` production matching to claim the keyword only if no other unfulfilled production can claim it (#101)
    - Improved `<length>` production matching to claim "unitless zero" only if no other unfulfilled production can claim it
    - Changed lexer's constructor to prevent generic types override when used
    - Fixed large `||`- and `&&`-group matching, matching continues from the beginning on term match (#85)
    - Fixed checking that value has `var()` occurrences when value is a string (such values can't be matched on syntax currently and fail with specific error that can be used for ignorance in validation tools)
    - Fixed `<declaration-value>` and `<any-value>` matching when a value contains a function, parentheses or braces

## 1.0.0-alpha.30 (July 3, 2019)

- Bumped `mdn/data` to `~2.0.3`
    - Removed type removals from `mdn/data` due to lack of some generic types and specific lexer restictions (since lexer was reworked, see below)
    - Reduced and updated patches
- Tokenizer
    - Reworked tokenizer itself to compliment [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/#tokenization)
    - `Tokenizer` class splitted into several abstractions:
        - Added `TokenStream` class
        - Added `OffsetToLocation` class
        - Added `tokenize()` function that creates `TokenStream` instance for given string or updates a `TokenStream` instance passed as second parameter
        - Removed `Tokenizer` class
    - Removed `Raw` token type
    - Renamed `Identifier` token type to `Ident`
    - Added token types: `Hash`, `BadString`, `BadUrl`, `Delim`, `Percentage`, `Dimension`, `Colon`, `Semicolon`, `Comma`, `LeftSquareBracket`, `RightSquareBracket`, `LeftParenthesis`, `RightParenthesis`, `LeftCurlyBracket`, `RightCurlyBracket`
    - Replaced `Punctuator` with `Delim` token type, that excludes specific characters with its own token type like `Colon`, `Semicolon` etc
    - Removed `findCommentEnd`, `findStringEnd`, `findDecimalNumberEnd`, `findNumberEnd`, `findEscapeEnd`, `findIdentifierEnd` and `findUrlRawEnd` helper function
    - Removed `SYMBOL_TYPE`, `PUNCTUATION` and `STOP_URL_RAW` dictionaries
    - Added `isDigit`, `isHexDigit`, `isUppercaseLetter`, `isLowercaseLetter`, `isLetter`, `isNonAscii`, `isNameStart`, `isName`, `isNonPrintable`, `isNewline`, `isWhiteSpace`, `isValidEscape`, `isIdentifierStart`, `isNumberStart`, `consumeEscaped`, `consumeName`, `consumeNumber` and `consumeBadUrlRemnants` helper functions
- Parser
    - Changed parsing algorithms to work with new token type set
    - Changed `HexColor` consumption in way to relax checking a value, i.e. now `value` is a sequence of one or more name chars
    - Added `&` as a property hack
    - Relaxed `var()` parsing to only check that a first arguments is an identifier (not a custom property name as before)
- Lexer
    - Reworked syntax matching to relay on token set only (having AST is optional now)
    - Extended `Lexer#match()`, `Lexer#matchType()` and `Lexer#matchProperty()` methods to take a string as value, beside AST as a value
    - Extended `Lexer#match()` method to take a string as a syntax, beside of syntax descriptor
    - Reworked generic types:
        - Removed `<attr()>`, `<url>` (moved to patch) and `<progid>` types
        - Added types:
            - Related to token types: `<ident-token>`, `<function-token>`, `<at-keyword-token>`, `<hash-token>`, `<string-token>`, `<bad-string-token>`, `<url-token>`, `<bad-url-token>`, `<delim-token>`, `<number-token>`, `<percentage-token>`, `<dimension-token>`, `<whitespace-token>`, `<CDO-token>`, `<CDC-token>`, `<colon-token>`, `<semicolon-token>`, `<comma-token>`, `<[-token>`, `<]-token>`, `<(-token>`, `<)-token>`, `<{-token>` and `<}-token>`
            - Complex types: `<an-plus-b>`, `<urange>`, `<custom-property-name>`, `<declaration-value>`, `<any-value>` and `<zero>`
        - Renamed `<unicode-range>` to `<urange>` as per spec
        - Renamed `<expression>` (IE legacy extension) to `<-ms-legacy-expression>` and may to be removed in next releases

## 1.0.0-alpha.29 (May 30, 2018)

- Lexer
    - Syntax matching was completely reworked. Now it's token-based and uses state machine. Public API has not changed. However, some internal data structures have changed. Most significal change in syntax match result tree structure, it's became token-based instead of node-based.
    - Grammar
        - Changed grammar tree format:
            - Added `Token` node type to represent a single code point (`<delim-token>`)
            - Added `Multiplier` that wraps a single node (`term` property)
            - Added `AtKeyword` to represent `<at-keyword-token>`
            - Removed `Slash` and `Percent` node types, they are replaced for a node with `Token` type
            - Changed `Function` to represent `<function-token>` with no children
            - Removed `multiplier` property from `Group`
        - Changed `generate()` method:
            - Method takes an `options` as second argument now (`generate(node, forceBraces, decorator)` -> `generate(node, options)`). Two options are supported: `forceBraces` and `decorator`
            - When a second parameter is a function it treats as `decorate` option value, i.e. `generate(node, fn)` -> `generate(node, { decorate: fn })`
            - Decorate function invokes with additional parameter – a reference to a node
- Tokenizer
    - Renamed `Atrule` const to `AtKeyword`

## 1.0.0-alpha.28 (February 19, 2018)

- Renamed `lexer.grammar.translate()` method into `generate()`
- Fixed `<'-webkit-font-smoothing'>` and `<'-moz-osx-font-smoothing'>` syntaxes (#75)
- Added vendor keywords for `<'overflow'>` property syntax (#76)
- Pinned `mdn-data` to `~1.1.0` and fixed issues with some updated property syntaxes

## 1.0.0-alpha.27 (January 14, 2018)

- Generator
    - Changed node's `generate()` methods invocation, methods now take a node as a single argument and context (i.e. `this`) that have methods: `chunk()`, `node()` and `children()`
    - Renamed `translate()` to `generate()` and changed to take `options` argument
    - Removed `translateMarkup(ast, enter, leave)` method, use `generate(ast, { decorator: (handlers) => { ... }})` instead
    - Removed `translateWithSourceMap(ast)`, use `generate(ast, { sourceMap: true })` instead
    - Changed to support for children as an array
- Walker
    - Changed `walk()` to take an `options` argument instead of handler, with `enter`, `leave`, `visit` and `reverse` options (`walk(ast, fn)` is still works and equivalent to `walk(ast, { enter: fn })`)
    - Removed `walkUp(ast, fn)`, use `walk(ast, { leave: fn })`
    - Removed `walkRules(ast, fn)`, use `walk(ast, { visit: 'Rule', enter: fn })` instead
    - Removed `walkRulesRight(ast, fn)`, use `walk(ast, { visit: 'Rule', reverse: true, enter: fn })` instead
    - Removed `walkDeclarations(ast, fn)`, use `walk(ast, { visit: 'Declaration', enter: fn })` instead
    - Changed to support for children as array in most cases (`reverse: true` will fail on arrays since they have no `forEachRight()` method)
- Misc
    - List
        - Added `List#forEach()` method
        - Added `List#forEachRight()` method
        - Added `List#filter()` method
        - Changed `List#map()` method to return a `List` instance instead of `Array`
        - Added `List#push()` method, similar to `List#appendData()` but returns nothing
        - Added `List#pop()` method
        - Added `List#unshift()` method, similar to `List#prependData()` but returns nothing
        - Added `List#shift()` method
        - Added `List#prependList()` method
        - Changed `List#insert()`, `List#insertData()`, `List#appendList()` and `List#insertList()` methods to return a list that performed an operation
    - Changed `keyword()` method
        - Changed `name` field to include a vendor prefix
        - Added `basename` field to contain a name without a vendor prefix
        - Added `custom` field that contain a `true` when keyword is a custom property reference
    - Changed `property()` method
        - Changed `name` field to include a vendor prefix
        - Added `basename` field to contain a name without any prefixes, i.e. a hack and a vendor prefix
    - Added `vendorPrefix()` method
    - Added `isCustomProperty()` method

## 1.0.0-alpha.26 (November 9, 2017)

- Tokenizer
    - Added `Tokenizer#isBalanceEdge()` method
    - Removed `Tokenizer.endsWith()` method
- Parser
    - Made the parser tolerant to errors by default
    - Removed `tolerant` parser option (no parsing modes anymore)
    - Removed `property` parser option (a value parsing does not depend on property name anymore)
    - Canceled error for a handing semicolon in a block
    - Canceled error for unclosed `Brackets`, `Function` and `Parentheses` when EOF is reached
    - Fixed error when prelude ends with a comment for at-rules with custom prelude consumer
    - Relaxed at-rule parsing:
        - Canceled error when EOF is reached after a prelude
        - Canceled error for an at-rule with custom block consumer when at-rule has no block (just don't apply consumer in that case)
        - Canceled error on at-rule parsing when it occurs outside prelude or block (at-rule is converting to `Raw` node)
        - Allowed for any at-rule to have a prelude and a block, even if it's invalid per at-rule syntax (the responsibility for this check is moved to lexer, since it's possible to construct a AST with such errors)
    - Made a declaration value a safe parsing point (i.e. error on value parsing lead to a value is turning into `Raw` node, not a declaration as before)
    - Excluded surrounding white spaces and comments from a `Raw` node that represents a declaration value
    - Changed `Value` parse handler to return a node only with type `Value` (previously it returned a `Raw` node in some cases)
    - Fixed issue with `onParseError()` is not invoked for errors occured on selector or declaration value parsing in some cases
    - Changed using of `onParseError()` to stop parsing if handler throws an exception
- Lexer
    - Changed `grammar.walk()` to invoke passed handler on entering to node rather than on leaving the node
    - Improved `grammar.walk()` to take a walk handler pair as an object, i.e. `walk(node, { enter: fn, leave: fn })`
    - Changed `Lexer#match*()` methods to take a node of any type, but with a `children` field
    - Added `Lexer#match(syntax, node)` method
    - Fixed `Lexer#matchType()` method to stop return a positive result for the CSS wide keywords

## 1.0.0-alpha25 (October 9, 2017)

- Parser
    - Added fallback node as argument to `onParseError()` handler
    - Fixed raw consuming in tolerant mode when selector is invalid (greedy consuming and redundant warnings)
    - Fixed exception in tolerant mode caused by unknown at-rule with unclosed block
    - Changed handling of semicolons:
        - Hanging semicolon inside declaration blocks raise an error or turns into a `Raw` node in tolerant mode instead of being ignored
        - Semicolon outside of declaration blocks opens a `Rule` node as part of selector instead of being ignored
    - Aligned `parseAtrulePrelude` behaviour to `parseRulePrelude`
        - Removed `Raw` node wraping into `AtrulePrelude` when `parseAtrulePrelude` is disabled
        - Removed error emitting when at-rule has a custom prelude customer but no prelude is found (it should be validated by a lexer later)
- Generator
    - Fixed performance issue with `translateWithSourceMap()`, flattening the string (because of mixing building string and indexing into it) turned it into a quadratic algorithm (approximate numbers can be found in [the quiz created by this case](https://gist.github.com/lahmatiy/ea25d0e623d88ca9848384b5707d52d9))
- Added support for a single solidus hack for `property()`
- Minor fixes for custom errors

## 1.0.0-alpha24 (September 14, 2017)

- Improved CSSTree to be stable for standart build-in objects extension (#58)
- Parser
    - Renamed rule's `selector` to `prelude`. The reasons: [spec names this part so](https://www.w3.org/TR/css-syntax-3/#qualified-rule), and this branch can contain not only a selector (`SelectorList`) but also a raw payload (`Raw`). What's changed:
        - Renamed `Rule.selector` to `Rule.prelude`
        - Renamed `parseSelector` parser option to `parseRulePrelude`
        - Removed option for selector parse in `SelectorList`
- Lexer
    - Fixed undefined positions in a error when match a syntax to empty or white space only value
    - Improved `Lexer#checkStructure()`
        - Return a warning as an object with node reference and message
        - No exception on unknown node type, return a warning instead

## 1.0.0-alpha23 (September 10, 2017)

- Fixed `Tokenizer#getRawLength()`'s false positive balance match to the end of input in some cases (#56)
- Rename walker's entry point methods to be the same as CSSTree exposed methods (i.e. `walk()`, `walkUp()` etc)
- Rename at-rule's `expression` to `prelude` (since [spec names it so](https://www.w3.org/TR/css-syntax-3/#at-rule))
    - `AtruleExpression` node type → `AtrulePrelude`
    - `Atrule.expression` field → `Atrule.prelude`
    - `parseAtruleExpression` parser's option → `parseAtrulePrelude`
    - `atruleExpression` parse context → `atrulePrelude`
    - `atruleExpression` walk context reference → `atrulePrelude`

## 1.0.0-alpha22 (September 8, 2017)

- Parser
    - Fixed exception on parsing of unclosed `{}-block` in tolerant mode
    - Added tolerant mode support for `DeclarationList`
    - Added standalone entry point, i.e. default parser can be used via `require('css-tree/lib/parser')` (#47)
- Generator
    - Changed generator to produce `+n` when `AnPlusB.a` is `+1` to be "round-trip" with parser
    - Added standalone entry point, i.e. default generators can be used via `require('css-tree/lib/generator')`
- Walker
    - Added standalone entry point, i.e. default walkers can be used via `require('css-tree/lib/walker')` (#47)
- Lexer
    - Added `default` keyword to the list of invalid values for `<custom-ident>` (since it reversed per [spec](https://www.w3.org/TR/css-values/#custom-idents))
- Convertors (`toPlainObject()` and `fromPlainObject()`) moved to `lib/convertor` (entry point is `require('css-tree/lib/convertor')`)

## 1.0.0-alpha21 (September 5, 2017)

- Tokenizer
    - Added `Raw` token type
    - Improved tokenization of `url()` with raw as url to be more spec complient
    - Added `Tokenizer#balance` array computation on token layout
    - Added `Tokenizer#getRawLength()` to compute a raw length with respect of block balance
    - Added `Tokenizer#getTokenStart(offset)` method to get token start offset by token index
    - Added `idx` and `balance` fields to each token of `Tokenizer#dump()` method result
- Parser
    - Added `onParseError` option
    - Reworked node parsers that consume a `Raw` node to use a new approach. Since now a `Raw` node builds in `parser#Raw()` function only
    - Changed semantic of `parser#Raw()`, it takes 5 parameters now (it might to be changed in future)
    - Changed `parser#tolerantParse()` to pass a start token index to fallback function instead of source offset
    - Fixed `AtruleExpression` consuming in tolerant mode
    - Atrule handler to convert an empty `AtruleExpression` node into `null`
    - Changed `AtruleExpression` handler to always return a node (before it could return a `null` in some cases)
- Lexer
    - Fixed comma match node for `#` multiplier
    - Added reference name to `SyntaxReferenceError`
- Additional fixes on custom errors
- Reduced possible corruption of base config by `syntax.fork()`

## 1.0.0-alpha20 (August 28, 2017)

- Tokenizer
    - Added `Atrule` token type (`<at-rule-token>` per spec)
    - Added `Function` token type (`<function-token>` per spec)
    - Added `Url` token type
    - Replaced `Tokenizer#getTypes()` method with `Tokenizer#dump()` to get all tokens as an array
    - Renamed `Tokenizer.TYPE.Whitespace` to `Tokenizer.TYPE.WhiteSpace`
    - Renamed `Tokenizer.findWhitespaceEnd()` to `Tokenizer.findWhiteSpaceEnd()`
- Parser
    - Added initial implementation of tollerant mode (turn on by passing `tolerant: true` option). In this mode parse errors are never occour and any invalid part of CSS turns into a `Raw` node. Current safe points: `Atrule`, `AtruleExpression`, `Rule`, `Selector` and `Declaration`. Feature is experimental and further improvements are planned.
    - Changed `Atrule.expression` to contain a `AtruleExpression` node or `null` only (other node types is wrapping into a `AtruleExpression` node)
    - Renamed `AttributeSelector.operator` to `AttributeSelector.matcher`
- Generator
    - `translate()` method is now can take a function as second argument, that recieves every generated chunk. When no function is passed, default handler is used, it concats all the chunks and method returns a string.
- Lexer
    - Used [mdn/data](https://github.com/mdn/data) package as source of lexer's grammar instead of local dictionaries
    - Added `x` unit to `<resolution>` generic type
    - Improved match tree:
        - Omited Group (sequences) match nodes
        - Omited empty match nodes (for terms with `zero or more` multipliers)
        - Added `ASTNode` node type to contain a reference to AST node
        - Fixed node duplication (uncompleted match were added to tree)
        - Added AST node reference in match nodes
        - Added comma match node by `#` multiplier
    - Grammar
        - Changed `translate()` function to get a handler as third argument (optional). That handler recieves result of node traslation and can be used for decoration purposes. See [example](https://github.com/csstree/docs/blob/04c65af44477b5ea05feb373482898122b2a4528/docs/syntax.html#L619-L627)
        - Added `SyntaxParseError` to grammar export
        - Reworked group and multipliers representation in syntax tree:
            - Replaced `Sequence` for `Group` node type (`Sequence` node type removed)
            - Added `explicit` boolean property for `Group`
            - Only groups can have a multiplier now (other node types is wrapping into a single term implicit group when multiplier is applied)
            - Renamed `nonEmpty` Group's property to `disallowEmpty`
            - Added optimisation for syntax tree by dropping redundant root `Group` when it contains a single `Group` term (return this `Group` as a result)
    - Changed lexer's match functionality
        - Changed `Lexer#matchProperty()` and `Lexer#matchType()` to return an object instead of match tree. A match tree stores in `matched` field when AST is matched to grammar successfully, otherwise an error in `error` field. The result object also has some methods to test AST node against a match tree: `getTrace()`, `isType()`, `isProperty()` and `isKeyword()`
        - Added `Lexer#matchDeclaration()` method
        - Removed `Lexer#lastMatchError` (error stores in match result object in `error` field)
    - Added initial implementation of search for AST segments (new lexer methods: `Lexer#findValueSegments()`, `Lexer#findDeclarationValueSegments()` and `Lexer#findAllSegments`)
    - Implemented `SyntaxReferenceError` for unknown property and type references
- Renamed field in resulting object of `property()` function: `variable` → `custom`
- Fixed issue with readonly properties (e.g. `line` and `column`) of `Error` and exception on attempt to write in iOS Safari

## 1.0.0-alpha19 (April 24, 2017)

- Extended `List` class with new methods:
    - `List#prepend(item)`
    - `List#prependData(data)`
    - `List#insertData(data)`
    - `List#insertList(list)`
    - `List#replace(item, itemOrList)`

## 1.0.0-alpha18 (April 3, 2017)

- Added `atrule` walk context (#39)
- Changed a result of generate method for `AnPlusB`, `AttributeSelector`, `Function`, `MediaFeature` and `Ratio` ([1e95877](https://github.com/csstree/csstree/commit/1e9587710efa8e9338bcf0bc794b4b45f286231d))
- Fixed typo in `List` exception messages (@strarsis, #42)
- Improved tokenizer to convert an input to a string

## 1.0.0-alpha17 (March 13, 2017)

- Implemented new concept of `syntax`
    - Changed main `exports` to expose a default syntax
    - Defined initial [CSS syntax](lib/syntax/default.js)
    - Implemented `createSyntax()` method to create a new syntax from scratch
    - Implemented `fork()` method to create a new syntax based on given via extension
- Parser
    - Implemented `mediaQueryList` and `mediaQuery` parsing contexts
    - Implemented `CDO` and `CDC` node types
    - Implemented additional declaration property prefix hacks (`#` and `+`)
    - Added support for UTF-16LE BOM
    - Added support for `@font-face` at-rule
    - Added `chroma()` to legacy IE filter functions
    - Improved `HexColor` to consume hex only
    - Improved support for `\0` and `\9` hacks (#2)
    - Relaxed number check for `Ratio` terms
        - Allowed fractal values as a `Ratio` term
        - Disallowed zero number as a `Ratio` term
    - Changed important clause parsing
        - Allowed any identifier for important (to support hacks like `!ie`)
        - Store `true` for `important` field in case identifier equals to `important` and string otherwise
    - Fixed parse error formatted message rendering to take into account tabs
    - Removed exposing of `Parser` class
    - Removed `readSelectorSequence()`, `readSequenceFallback()` and `readSelectorSequenceFallback` methods
    - Used single universal sequence consumer for `AtruleExpression`, `Selector` and `Value`
- Generator
    - Reworked generator to use auto-generated functions based on syntax definition (additional work to be done in next releases)
    - Implemented `translateMarkup(ast, before, after)` method for complex cases
    - Reworked `translateWithSourceMap` to be more flexible (based on `translateMarkup`, additional work to be done in next releases)
- Walker
    - Reworked walker to use auto-generated function based on syntax definition (additional work to be done in next releases)
- Lexer
    - Prepared for better extensibility (additional work to be done in next releases)
    - Implemented `checkStructure(ast)` method to check AST structure based on syntax definition
    - Update syntax dictionaries to latest `mdn/data`
        - Add missing `<'offset-position'>` syntax
        - Extended `<position>` property with `-webkit-sticky` (@sergejmueller, #37)
    - Improved mismatch error position
- Implemented script (`gen:syntax`) to generate AST format reference page (`docs/ast.md`) using syntax definition

## 1.0.0-alpha16 (February 12, 2017)

- Exposed `Parser` class
- Added `startOffset` option to `Tokenizer` (constructor and `setSource()` method)
- Added fallback functions for default (`readSequenceFallback`) and selector (`readSelectorSequenceFallback`) sequence readers
- Fixed edge cases for `AnPlusB`
- Fixed wrong whitespace ignoring in `Selector` consumer

## 1.0.0-alpha15 (February 8, 2017)

- Fixed broken `atruleExpression` context
- Fixed vendor prefix detection in `keyword()` and `property()`
- Fixed `property()` to not lowercase custom property names
- Added `variable` boolean flag in `property()` result
- Renamed `scanner` into `tokenizer`
- Ranamed `syntax` into `lexer`
- Moved `docs/*.html` files to [csstree/docs](https://github.com/csstree/docs) repo
- Added `element()` function for `Value` context (`-moz-element()` supported as well)
- Merged `Universal` node type into `Type`
- Renamed node types:
    - `Id` -> `IdSelector`
    - `Class` -> `ClassSelector`
    - `Type` -> `TypeSelector`
    - `Attribute` -> `AttributeSelector`
    - `PseudoClass` -> `PseudoClassSelector`
    - `PseudoElement` -> `PseudoElementSelector`
    - `Hash` -> `HexColor`
    - `Space` -> `WhiteSpace`
    - `An+B` -> `AnPlusB`
- Removed `Progid` node type
- Relaxed `MediaQuery` consumer to not validate syntax on parse and to include whitespaces in children sequence as is
- Added `WhiteSpace.value` property to store whitespace sequence
- Implemented parser options to specify what should be parsed in details (when option is `false` some part of CSS represents as balanced `Raw`):
    - `parseAtruleExpression` – to parse at-rule expressions (`true` by default)
    - `parseSelector` – to parse rule's selector (`true` by default)
    - `parseValue` - to parse declaration's value (`true` by default)
    - `parseCustomProperty` – to parse value and fallback of custom property (`false` by default)
- Changed tokenization to stick leading hyphen minus to identifier token
- Changed selector parsing:
    - Don't convert spaces into descendant combinator
    - Don't validate selector structure on parsing (selectors may be checked by lexer later)
- Initial refactoring of [docs](https://github.com/csstree/csstree/blob/master/docs)
- Various improvements and fixes

## 1.0.0-alpha14 (February 3, 2017)

- Implemented `DeclarationList`, `MediaQueryList`, `MediaQuery`, `MediaFeature` and `Ratio` node types
- Implemented `declarationList` context (useful to parse HTML `style` attribute content)
- Implemented custom consumers for `@import`, `@media`, `@page` and `@supports` at-rules
- Implemented `atrule` option for `parse()` config, is used for `atruleExpession` context to specify custom consumer for at-rule if any
- Added `Scanner#skipWS()`, `Scanner#eatNonWS()`, `Scanner#consume()` and `Scanner#consumeNonWS()` helper methods
- Added custom consumers for known functional-pseudos, consume unknown functional-pseudo content as balanced `Raw`
- Allowed any `PseudoElement` to be a functional-pseudo (#33)
- Improved walker implementations to reduce GC thrashing by reusing cursors
- Changed `Atrule.block` to contain a `Block` node type only if any
- Changed `Block.loc` positions to include curly brackets
- Changed `Atrule.expression` to store a `null` if no expression
- Changed parser to use `StyleSheet` node type only for top level node (when context is `stylesheet`, that's by default)
- Changed `Parentheses`, `Brackets` and `Function` consumers to use passed sequence reader instead of its own
- Changed `Value` and `AtruleExpression` consumers to use common sequence reader (that reader was used by `Value` consumer before)
- Changed default sequence reader to exclude storage of spaces around `Comma`
- Changed processing of custom properties:
    - Consume declaration value as balanced `Raw`
    - Consume `var()` fallback value as balanced `Raw`
    - Validate first argument of `var()` starts with double dash
    - Custom property's value and fallback includes spaces around
- Fixed `Nth` to have a `loc` property
- Fixed `SelectorList.loc` and `Selector.loc` positions to exclude spaces
- Fixed issue Browserify build fail with `default-syntax.json` is not found error (#32, @philschatz)
- Disallowed `Type` selector starting with dash (parser throws an error in this case now)
- Disallowed empty selectors for `Rule` (not sure if it's correct but looks reasonable)
- Removed `>>` combinator support until any browser support (no signals about that yet)
- Removed `PseudoElement.legacy` property
- Removed special case for `:before`, `:after`, `:first-letter` and `:first-line` to represent them as `PseudoElement`, now those pseudos are represented as `PseudoClass` nodes
- Removed deprecated `Syntax#match()` method
- Parser was splitted into modules and related changes, one step closer to an extensible parser
- Various fixes and improvements, all changes have negligible impact on performance

## 1.0.0-alpha13 (January 19, 2017)

- Changed location storing in `SyntaxMatchError`
    - Changed property to store mismatch offset to `mismatchOffset`
    - Changed `offset` property to store bad node offset in source CSS if any
    - Added `loc` property that stores bad node `loc` if any

## 1.0.0-alpha12 (January 19, 2017)

- Fixed `Syntax#matchProperty()` method to always return a positive result for custom properties since syntax is never defined for them (#31)
- Implemented `fromPlainObject()` and `toPlainObject()` to convert plain object to AST or AST to plain object (currently converts `List` <-> `Array`)

## 1.0.0-alpha11 (January 18, 2017)

- Added support for `:matches(<selector-list>)` (#28)
- Added support for `:has(<relative-selector-list>)`
- Added support for `::slotted(<compound-selector>)`
- Implemented `Brackets` node type
- Implemented basic support for at-rule inside rule block (#24)
- Renamed `Selector` node type to `SelectorList`
- Renamed `SimpleSelector` node type to `Selector`
- Renamed `UnicodeRange.name` property to `UnicodeRange.value`
- Replaced `Negation` node type for regular `PseudoClass`
- Unified name of node property to store nested nodes, it always `children` now:
    - `StyleSheet.rules` -> `StyleSheet.children`
    - `SelectorList.selectors` -> `SelectorList.children`
    - `Block.declarations` -> `Block.children`
    - `*.sequence` -> `*.children`
- Fixed edge cases in parsing `Hex` and `UnicodeRange` when number not an integer
- Changed `nth-` pseudos parsing
    - Implemented `An+B` node type to represent expressions like `2n + 1` or `-3n`
    - Fixed edge cases when `a` or `b` is not an integer
    - Changed `odd` and `even` keywords processing, keywords are storing as `Identifier` node type now
    - Changed `Nth` node type format to store a `nth`-query and an optional `selector`
    - Implemented `of` clause for `nth-` pseudos (a.e. `:nth-child(2n + 1 of li, img)`)
    - Limited `Nth` parsing rules to `:nth-child()`, `:nth-last-child()`, `:nth-of-type()` and `:nth-last-of-type()` pseudos
- Changed the way to store locations
    - Renamed `info` node property to `loc`
    - Changed format of `loc` to store `start` and `end` positions

## 1.0.0-alpha10 (January 11, 2017)

- Reworked `Scanner` to be a single point to its functionality
- Exposed `Scanner` class to be useful for external projects
- Changed `walk()` function behaviour to traverse AST nodes in natural order
- Implemented `walkUp()` function to traverse AST nodes from deepest to parent (behaves as `walk()` before)

## 1.0.0-alpha9 (December 21, 2016)

- Fixed `<angle>` generic according to specs that allow a `<number>` equals to zero to be used as valid value (#30)

## 1.0.0-alpha8 (November 11, 2016)

- Fixed `Scanner#skip()` issue method when cursor is moving to the end of source
- Simplified `Progid` node
- Changed behaviour for bad selector processing, now parsing fails instead of selector ignoring
- Fixed `<id-selector>` generic syntax
- Added `q` unit for `<length>` generic syntax
- Refactored syntax parser (performance)
- Reduced startup time by implementing lazy syntax parsing (default syntax doesn't parse on module load)
- Updated syntax dictionaries and used [`mdn/data`](https://github.com/mdn/data) instead of `Template:CSSData`
- Renamed `syntax.stringify()` method to `syntax.translate()`
- Simplified generic syntax functions, those functions receive a single AST node for checking and should return `true` or `false`
- Added exception for values that contains `var()`, those values are always valid for now
- Added more tests and increase code coverage to `98.5%`

## 1.0.0-alpha7 (October 7, 2016)

- Added support for explicit descendant combinator (`>>`)
- Implemented `Type` and `Universal` type nodes
- Improved `Number` parsing by including sign and exponent (#26)
- Parse `before`, `after`, `first-letter` and `first-line` pseudos with single colon as `PseudoElement`
- Changed `FunctionalPseudo` node type to `PseudoClass`
- Fixed attribute selector name parsing (namespace edge cases)
- Fixed location calculation for specified offset when `eof` is reached
- Added more non-standard colors (#25)
- Removed obsolete `Syntax#getAll()` method
- Fixed various edge cases, code clean up and performance improvements

## 1.0.0-alpha6 (September 23, 2016)

- More accurate positions for syntax mismatch errors
- Added [`apple`](https://webkit.org/blog/3709/using-the-system-font-in-web-content/) specific font keywords (#20)
- Changed `Property` node stucture from object to string
- Renamed `Ruleset` node type to `Rule`
- Removed `Argument` node type
- Fixed `Dimension` and `Percentage` position computation
- Fixed bad selector parsing (temporary solution)
- Fixed location computation for CSS with very long lines that may lead to really long parsing with `positions:true` (even freeze)
- Fixed `line` and `column` computation for `SyntaxMatch` error
- Improved performance of parsing and translation. Now CSSTree is under 10ms in [PostCSS benchmark](https://github.com/postcss/benchmark).
