# 3.21.0

**Features:**

* added `getWellKnownSymbolPropertyOfType` to reliably get symbol named properties due to changes in typescript@4.3
* `getPropertyNameOfWellKnownSymbol` is now deprecated

# 3.20.0

**Features:**

* `findImports` and `findImportLikeNodes` take an additional parameter `ignoreFileName`. The default value for this paramter is `true` to remain backwards compatible. When set to `false`, it matches the behavior of TypeScript, i.e. only looks for `require` in JavaScript files.

**Bugfixes:**

* `getJsDoc` for `EndOfFileToken` now returns `JSDoc` comments whose contents are usable with the type checker

# 3.19.1

**Bugfixes:**

* `getSymbolOfClassLikeDeclaration` no longer crashes on anonymous mixin classes

# 3.19.0

**Features:**

* `getSymbolOfClassLikeDeclaration` to retrieve the symbol of class declarations and expressions regardless whether they have a name or not
* `getBaseOfClassLikeDeclaration` to conventiently get the expression after `extends`
* `getBaseClassMemberOfClassElement` to look up the declaration of a class member in the base class

**Bugfixes:**

* `getConstructorTypeOfClassLikeDeclaration` now really returns the constructor type (the static side of the class), previously it returned the instance type
* `hasExhaustiveCaseClauses` allows additional case clauses with `null`, `undefined` and `never`

# 3.18.0

**Features:**

* Source maps for easier debugging
* JSDoc is preserved in declaration files
* Comments are presered in transpiled code
* Everything you need to handle the control flow changes of TypeScript@3.7
  * `callExpressionAffectsControlFlow` to determine whether a CallExpression affects control flow by returning `never` or `asserts`
  * `hasExhaustiveCaseClauses` to determine whether a SwitchStatement's CaseClauses handle every possible value
  * `endsControlFlow` and `getControlFlowEnd` take an optional `checker` parameter to recognize exhaustive SwitchStatements and control flow effects of CallExpressions
* `formatPseudoBigInt` converts TypeScript's representation of a BigInt to its literal representation as you would write it in your source code
* `getAstNodeAtPosition` similar to `getTokenAtPosition`, but only operates on AST Nodes
* `removeOptionalChainingUndefinedMarkerType` and `isOptionalChainingUndefinedMarkerType` to handle types originating in an optional chain
* `findImports` and `findImportLikeNodes`: prepare for import assertions
* `getTsCheckDirective` as new name for `getCheckJsDirective`
* `getCheckJsDirective` is now deprecated

**Bugfixes:**

* `getUsageDomain`: handles NamespaceExport and NamedTupleMember
* `getPropertyName`: handles parentheses and negative numeric literals, excludes RegExp literals and private identifiers
* `getSingleLateBoundPropertyNameOfPropertyName` and `getLateBoundPropertyNamesOfPropertyName`: handles private identifiers
* `hasAccessModifier`: handles JSDoc access modifier
* `hasSideEffects`: correctly determines side effects of (static) property initializers
* `isExpressionValueUsed`: handle nullish coalescing and conditional assignment operators
* `canHaveJsDoc`: aligned with upstream changes in TypeScript
* `isCompilerOptionEnabled`:
  * `noUncheckedIndexedAccess` requires `strictNullChecks`
  * `checkJs` implies `allowJs`
  * `emitDeclarationOnly` requires `declaration`
* `isInConstContext`: handle template string interpolations
* excluded unnecessary files from npm package

# 3.17.1

**Bugfixes:**

* `isValidJsxIdentifier`, `isValidPropertyAccess`, `isValidPropertyName`: fix unicode character width handling

# 3.17.0

**Features:**

* `isValidJsxIdentifier` added an optional parameter to specify the target ECMAScript version

**Bugfixes:**

* `isValidJsxIdentifier` now handles astral plane characters

# 3.16.0

**Features:**

* added `getIteratorYieldResultFromIteratorResult` to extract the `yield`ed type from `IteratorResult<TYield, TReturn, TNext>`

# 3.15.0

**Features:**

* `isValidIdentifier`, `isValidPropertyName`, `isValidPropertyAccess`, `isValidNumericLiteral` added an optional parameter to specify the target ECMAScript version

**Bugfixes:**

* `isValidPropertyName`, `isValidPropertyAccess` now handle astral plane characters

# 3.14.1

**Bugfixes:**

* `findImports`: fixed crash on nested namespaces

# 3.14.0

**Features:**

* added `getInstanceTypeOfClassLikeDeclaration` and `getConstructorTypeOfClassLikeDeclaration`
* added `AccessKind.Delete` to `getAccessKind`: `getAccessKind(node) & AccessKind.Modification` can now be used to restore the old behavior of `isReassignmentTarget(node)`

# 3.13.0

**Features:**

* `getAccessKind` determines whether an expression is read from, written to or both
* optimized `getPropertyOfType` for unambiguous property names to partially work around https://github.com/microsoft/TypeScript/issues/31565

**Bugfixes:**

* `isReassignmentTarget` no longer returns `true` for `DeleteExpression` as it doesn't **assign** a value to the operand

# 3.12.0

**Features:**

* `getLateBoundPropertyNamesOfPropertyName` returns all statically analyzable names of a property, method, ...
* `getSingleLateBoundPropertyNameOfPropertyName` returns the literal name of a property, method, ... if statically analyzable

**Bugfixes:**

* fixed circular import

# 3.11.0

**Features:**

* typeguards: `isNumericOrStringLikeLiteral`, `isTupleTypeReference`
* `intersectionTypeParts` as counterpart to `unionTypeParts`
* `someTypePart` to execute a callback for each union or intersection constituent until the callback returns true
* `getPropertyOfType` looks up a property by its escaped name
* `isPropertyReadonlyInType` determines whether a property in a given type cannot be written to
* `symbolHasReadonlyDeclaration` determines if a Symbol has any readonly or constant declaration
* `isNumericPropertyName` determines whether a property name would match an index signature
* `isBindableObjectDefinePropertyCall` returns true for statically analyzable forms of `Object.defineProperty(o, 'p', {value, writable})`
* `isReadonlyAssignmentDeclaration` determines whether an `Object.defineProperty` call is known to result in a readonly property
* `getLateBoundPropertyNames` returns all known property names of an expression
* `getPropertyNameFromType` extracts the property name of literal types
* `isWellKnownSymbolLiterally` to recognize expressions in the form of `Symbol.<name>`
* `getPropertyNameOfWellKnownSymbol` returns the escaped name for a well known symbol literal
* `unwrapParentheses` returns the first child expression that is not a `ParenthesizedExpression`

# 3.10.0

**Features:**

* `isCompilerOptionEnabled`: `incremental` is implicitly enabled by `composite`

**Bugfixes:**

* `collectVariableUsage`/`getUsageDomain`: no longer treat `as const` as type usage

# 3.9.1

**Bugfixes:**

* reverted invalid deprecation of `canHaveJsdoc`
* fixed condition in `parseJsdocOfNode`

# 3.9.0

**Features:**

* added typeguards: `isNullLiteral` and `isBooleanLiteral`

# 3.8.0

**Features:**

* exposes typeguards for typescript@3.2 by default
* added utilities: `isConstAssertion` and `isInConstContext`

# 3.7.0

**Features:**

* added `isBlockScopedDeclarationStatement`
* added `isInSingleStatementContext`

# 3.6.0

**Features:**

* added `getCheckJsDirective` utility to parse `// @ts-check` and `// @ts-nocheck` pragmas

# 3.5.2

**Bugfixes:**

* Published declaration files no longer contain `const enum`. They are now declared as regular enums instead.

# 3.5.1

**Bugfixes:**

* `isThenableType` allows `Node` instead of `Expression` as parameter
* `isBlockScopeBoundary` and `isScopeBoundary` consider `WithStatement` as scope boundary

# 3.5.0

**Features:**

* correctly handle BigInt literals
  * added typeguard `isBigIntLiteral`
  * `isLiteralType` recognises BigInt
  * `getPropertyName` adds special handling for BigInt

# 3.4.0

**Features:**

* added utility `commentText` to get the actual text content of a comment excluding the characters needed to start and end the comment

# 3.3.1

**Bugfixes:**

* `findImports`: fixed handling of ImportEqualsDeclaration

# 3.3.0

**Features:**

* `isCompilerOptionEnabled`: recognizes `strictBindCallApply`
* `getTokenAtPosition`: optionally includes JSDoc during lookup

**Bugfixes:**

* `isCompilerOptionEnabled`: correctly implements logic for `allowSyntheticDefaultImports`
* `findImportLikeNodes`: correctly finds imports in namespaces
* `findImportLikeNodes` / `findImports`: finds import types in JSDoc of JS files

# 3.2.0

**Features:**

* added utility `findImportLikeNodes` that works similar to `findImports` but returns the import statement or expression instead of the module specifier and doesn't filter non-string module specifiers

# 3.1.0

**Features:**

* added utilities: `isKeywordKind` and `isValidJsxIdentifier`
* exposes typeguards for typescript@3.0 by default

# 3.0.0

:warning: **Breaking Changes:**

* Dropped support for `typescript@<2.8.0`
* Dropped support for Node.js 4
* Removed deprecated APIs:
  * `getIdentifierText`, `isJsxFramgment`, `ImportOptions`
  * deprected overloads of `isModifierFlagSet`, `findImports` and `getControlFlowEnd`
* control flow related symbols can no longer be imported from `'tsutils/util/util'`, import directly from `'tsutils/util/control-flow'` or `'tsutils/util'`
* `isFunctionScopeBoundary` and `isBlockScopeBoundary` now return a enum member of `ScopeBoundary` instead of a boolean
* `isFunctionScopeBoundary` no longer returns a truthy value for `InterfaceDeclaration`, `TypeAliasDeclaration`

**Features:**

* added utility `isTypeScopeBoundary` returning `ScopeBoundary.Type` or `ScopeBoundary.ConditionalType`
* added enum `ScopeBoundarySelector` whose members can be used to determine if a declaration belongs to a given `ScopeBoundary` by using bitwise AND

**Bugfixes:**

* `collectVariableUsage` now correctly handles `infer T` nested inside function signatures or mapped types
* `isCompilerOptionEnabled` correctly handles `skipDefaultLibCHeck` and `suppressImplicitAnyIndexErrors`

# 2.29.0

**Features:**

* added utility `isCompilerOptionEnabled`

# 2.28.0

Typeguards are now split into multiple submodules for each version of TypeScript (starting with 2.8.0).
That means you can now import directly from `"tsutils/typeguard/2.8"` to get compatible declaraton files for TypeScript@2.8.
For more information please read the relevant section in [README.md](README.md).

**Features:**

* added typeguards: `isTupleType`, `isOptionalTypeNode`, `isRestTypeNode`, `isSyntheticExpression` (currently available from `"tsutils/typeguard/3.0"`)
* added utility `isStrictCompilerOptionEnabled`

# 2.27.2

Avoid crash caused by removed function in `typescript@3.0.0`.

# 2.27.1

Added support for TypeScript@3.0.0 nightly builds.

# 2.27.0

**Features:**

* added `getIIFE` utility

# 2.26.2

**Bugfixes:**

* `forEachComment` and `forEachTokenWithTrivia` no longer duplicate comments around missing nodes

# 2.26.1

**Bugfixes:**

* fixed crash in `hasSideEffects` with tagged template literal without substitution: ``tag`template` ``

# 2.26.0

**Features:**

* added typeguard `isLiteralTypeNode`
* added support for type imports (`type T = import('foo')`) to `findImports` via `ImportKind.ImportType`

# 2.25.1

**Bugfixes:**

* `collectVariableUsage`: fixed name lookup in function signatures to match runtime behavior. Note that this is not completely fixed in TypeScript, yet. See: [Microsoft/TypeScript#22825](https://github.com/Microsoft/TypeScript/issues/22825) and [Microsoft/TypeScript#22769](https://github.com/Microsoft/TypeScript/issues/22769)

# 2.25.0

**Features:**

* added utilities: `isStatementInAmbientContext` and `isAmbientModuleBlock`

# 2.24.0

**Features:**

* added typeguards for typescript@2.8: `isConditionalTypeNode`, `isInferTypeNode`, `isConditionalType`, `isInstantiableType`, `isSubstitutionType`

# 2.23.0

**Features:**

* added typeguard `isForInOrOfStatement`

**Bugfixes:**

* correctly handle comments in generic JSX elements: `<MyComponent<string>/*comment*/></MyComponent>`
* fixed a bug with false positive trailing comments at the end of JSX self closing element: `<div><br/>/*no comment*/</div>`

# 2.22.2

**Bugfixes:**

* `collectVariableUsage`: handle ConditionalTypes and `infer T`, which will be introduced in TypeScript@2.8.0 and are already available in nightly builds
* `isLiteralType` no longer returns true for `ts.TypeFlags.BooleanLiteral` as this is not a `ts.LiteralType`

# 2.22.1

**Bugfixes:**

* `endsControlFlow`:
  * handle loops that might not even run a single iteration
  * handle constant boolean conditions in loops and if

# 2.22.0

**Features:**

* added `isFalsyType` utility

# 2.21.2

**Bugfixes:**

* fixed compile error with `typescript@2.8.0-dev`

# 2.21.1

**Bugfixes:**

* `isReassignmentTarget`: handle type assertions and non-null assertion

# 2.21.0

**Bugfixes:**

* `forEachDeclaredVariable` uses a more precise type for the callback parameter to make it useable again with typescript@2.7.1

**Features:**

* added `isUniqueESSymbolType` typeguard

# 2.20.0

**Features:**

* added `isThenableType` utility
* added `unionTypeParts` utility

# 2.19.1

**Bugfixes:**

* `forEachComment`, `getCommentAtPosition` and `isPositionInComment`: skip shebang (`#! something`) to not miss following comments at the start of the file

# 2.19.0

**Features:**

* added `WrappedAst` interface that models the type of a wrapped SourceFile more accurate
* added `getWrappedNodeAtPosition` utiltiy that takes a `NodeWrap` and returns the most deeply nested NodeWrap that contains the given position

# 2.18.0

**Features:**

* `getControlFlowEnd` accepts BlockLike as argument

**Bugfixes:**

* `getControlFlowEnd` and `endsControlFlow`: correctly handle nested LabeledStatements
* `endsControlFlow` removed erroneous special case when an IterationStatement is passed as argument whose parent is a LabeledStatement.
  * if you want labels of an IterationStatement (or SwitchStatement) to be handled, you need to pass the LabeledStatement as argument.
  * :warning: this fix may change the returned value if you relied on the buggy behavior

**Deprecations:**

* deprecated overload of `getControlFlowEnd` that contains the `label` parameter. This parameter is no longer used and should no longer be passed to the function.

# 2.17.1

**Bugfixes:**

* `getControlFlowEnd` and `endsControlFlow` (#22)
  * ThrowStatements inside `try` are filtered out if there is a `catch` clause
  * TryStatements with `catch` only end control flow if `try` AND `catch` definitely end control flow

# 2.17.0

**Features:**

* added `kind` property to `NodeWrap`
* added `getControlFlowEnd` to public API

# 2.16.0

**Features:**

* added `isDecorator` and `isCallLikeExpression` typeguards

# 2.15.0

**Features:**

* added `convertAst` utility to produce a flattened and wrapped version of the AST

# 2.14.0

**Features:**

* added `isDeleteExpression`
* added `getLineBreakStyle`

# 2.13.1

**Bugfixes:**

* fixed name of `isJsxFragment`

# 2.13.0

**Features:**

* added support for `JsxFragment` introduced in typescript@2.6.2
* added corresponding typeguard functions

# 2.12.2

**Bugfixes:**

* `endsControlFlow`
  * added missing logic for labeled statement, iteration statements and try-catch
  * added missing logic for `break` and `continue` with labels
  * take all jump statements into account, not only the last statement
* `isValidIdentifier` and `isValidNumericLiteral` handle irregular whitespace
* `findImports` searches in ambient modules inside regular `.ts` files (not only `.d.ts`)
* `canHaveJsDoc` is now a typeguard

# 2.12.1

**Bugfixes:**

* `forEachTokenWithTrivia`
  * handles irregular whitespace and no longer visits some tokens twice
  * correctly calculates the range of JsxText

# 2.12.0

**API-Changes:**

* deprecated `ImportOptions` if favor of the new `ImportKind` enum

# 2.11.2

**Bugfixes:**

* `parseJsDocOfNode`: set correct `pos`, `end` and `parent` properties. Also affects `getJsDoc` of `EndOfFileToken`

# 2.11.1

**Bugfixes:**

* `collectVariableUsage`: correctly consider catch binding as block scoped declaration inside catch block

# 2.11.0

**Bugfixes:**

* `getJsDoc` now correctly returns JsDoc for `EndOfFileToken`

**Features:**

* added utility `parseJsDocOfNode`

# 2.10.0

**Features:**

* added utility `findImports` to find all kinds of imports in a source file

# 2.9.0

**Features:**

* added typeguard `isMappedTypeNode`
* added utilities `canHaveJsDoc` and `getJsDoc`

# 2.8.2

**Bugfixes:**

* `collectVariableUsage`: handle global augmentation like other module augmentations

# 2.8.1

**Bugfixes:**

* Support `typescript@2.5.1` with optional catch binding
* `collectVariableUsage` fixed a bug where method decorator had method's parameters in scope

# 2.8.0

* Compatibility with the latest typescript nightly
* Added `getIdentifierText` to unescape identifiers across typescript versions

# 2.7.1

**Bugfixes:**

* `isReassignmentTarget` don't return `true` for right side of assignment

# 2.7.0

**Features:**

* Added `isReassignmentTarget` utility

# 2.6.1

**Bugfixes:**

* `getDeclarationDomain` now returns `undefined` for Parameter in IndexSignature
* `collectVariableUsage` ignores Parameter in IndexSignature

# 2.6.0

**Bugfixes:**

* `collectVariableUsage`:
  * don't merge imports with global declarations
  * treat everything in a declaration file as exported if there is no explicit `export {};`
* `isExpressionValueUsed`: handle destructuring in `for...of`

**Features:**

* Added `getModifier` utility
* Added `DeclarationDomain.Import` to distinguish imports from other declarations

# 2.5.1

**Bugfixes:**

* `collectVariableUsage` ignore jump labels as in `break label;`

# 2.5.0

**Bugfixes:**

* `isFunctionWithBody` handles constructor overload correctly.

**Features:**

* Implemented `isExpressionValueUsed` to check whether the result of an expression is actually used.
* Implemented `getDeclarationDomain` to determine if a given declaration introduces a new symbol in the value or type domain.

**`collectVariableUses` is now usable**

* no longer ignores signatures and its parameters
* don't merge declarations and uses across domains
* no longer marks exceptions in catch clause or parameter properties as exported
* fixed exports of namespaces
* fixed scoping of ClassExpression name
* correcly handle ambient namespaces and module augmentations
* fixed how `: typeof foo` is handled for parameters and function return type
* **still WIP**: `export {Foo as Bar}` inside ambient namespaces and modules

# 2.4.0

**Bugfixes:**

* `getLineRanges`: `contentLength` now contains the correct line length when there are multiple consecutive line break characters
* `getTokenAtPosition`: don't match tokens that end at the specified position (because that's already outside of their range)
* deprecated the misnamed `isModfierFlagSet`, use the new `isModifierFlagSet` instead

**Features:**

* Added typeguard: `isJsDoc`
* Added experimental scope and usage analysis (`getUsageDomain` and `collectVariableUsage`)

# 2.3.0

**Bugfixes:**

* `forEachComment` no longer omits some comments when callback returns a truthy value
* `isPositionInComment` fixed false positive inside JSXText

**Features:**

* Added utility: `getCommentAtPosition`

# 2.2.0

**Bugfixes:**

* Fixed bit value of `SideEffectOptions.JsxElement` to be a power of 2

**Features:**

* Added utilities: `getTokenAtPosition` and `isPositionInComment`

# 2.1.0

**Features:**

* Added typeguard `isExpression`
* Added utilities: `hasSideEffects`, `getDeclarationOfBindingElement`

# 2.0.0

**Breaking Changes:**

* Dropped compatibility with `typescript@<2.1.0`
* Removed misnamed `isNumericliteral`, use `isNumericLiteral` instead (notice the uppercase L)
* Removed `isEnumLiteralType` which will cause compile errors with typescript@2.4.0
* Refactored directory structure: all imports that referenced subdirectories (e.g. `require('tsutils/src/typeguard')` will be broken

**Features:**

* New directory structure allows imports of typeguards or utils independently, e.g. (`require('tsutils/typeguard')`)

# 1.9.1

**Bugfixes:**

* `isObjectFlagSet` now uses the correct `objectFlags` property

# 1.9.0

**Bugfixes:**

* `getNextToken` no longer omits `EndOfFileToken` when there is no trivia before EOF. That means the only inputs where `getNextToken` returns `undefined` are `SourceFile` and `EndOfFileToken`

**Features**:

* Added typeguards for types
* Added utilities for flag checking: `isNodeFlagSet`, `isTypeFlagSet`, `isSymbolFlagSet`,`isObjectFlagSet`, `isModifierFlagSet`

# 1.8.0

**Features:**

* Support peer dependency of typescript nightlies of 2.4.0
* Added typeguards: `isJsxAttributes`, `isIntersectionTypeNode`, `isTypeOperatorNode`, `isTypePredicateNode`, `isTypeQueryNode`, `isUnionTypeNode`

# 1.7.0

**Bugfixes:**

* `isFunctionScopeBoundary` now handles Interfaces, TypeAliases, FunctionSignatures, etc

**Features:**

* Added utilities: `isThisParameter`, `isSameLine` and `isFunctionWithBody`

# 1.6.0

**Features:**

* Add `isValidPropertyAccess`, `isValidNumericLiteral` and `isValidPropertyName`

# 1.5.0

**Features:**

* Add `isValidIdentifier`

# 1.4.0

**Features:**

* Add `contentLength` property to the result of `getLineRanges`

# 1.3.0

**Bugfixes:**

* `canHaveLeadingTrivia`:
  * Fix property access on undefined parent reference
  * Fixes: [palantir/tslint#2330](https://github.com/palantir/tslint/issues/2330)
* `hasOwnThisReference`: now includes accessors on object literals

**Features:**

* Typeguards:
  * isTypeParameterDeclaration
  * isEnitityName

# 1.2.2

**Bugfixes:**

* `hasOwnThisReference`:
  * exclude overload signatures of function declarations
  * add method declarations on object literals

# 1.2.1

**Bugfixes:**

* Fix name of `isNumericLiteral`

# 1.2.0

**Features:**

* Typeguards:
  * isEnumMember
  * isExpressionWithTypeArguments
  * isImportSpecifier
* Utilities:
  * isJsDocKind, isTypeNodeKind
* Allow typescript@next in peerDependencies

# 1.1.0

**Bugfixes:**

* Fix isBlockScopeBoundary: Remove WithStatement, IfStatment, DoStatement and WhileStatement because they are no scope boundary whitout a block.

**Features:**

* Added more typeguards:
  * isAssertionExpression
  * isEmptyStatement
  * isJsxAttributeLike
  * isJsxOpeningLikeElement
  * isNonNullExpression
  * isSyntaxList
* Utilities:
  * getNextToken, getPreviousToken
  * hasOwnThisReference
  * getLineRanges

# 1.0.0

**Features:**

* Initial implementation of typeguards
* Utilities:
  * getChildOfKind
  * isNodeKind, isAssignmentKind
  * hasModifier, isParameterProperty, hasAccessModifier
  * getPreviousStatement, getNextStatement
  * getPropertyName
  * forEachDestructuringIdentifier, forEachDeclaredVariable
  * getVariableDeclarationKind, isBlockScopedVariableDeclarationList, isBlockScopedVariableDeclaration
  * isScopeBoundary, isFunctionScopeBoundary, isBlockScopeBoundary
  * forEachToken, forEachTokenWithTrivia, forEachComment
  * endsControlFlow
