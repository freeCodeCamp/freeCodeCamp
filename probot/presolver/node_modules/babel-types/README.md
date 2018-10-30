# babel-types

> This module contains methods for building ASTs manually and for checking the types of AST nodes.

## Install

```sh
npm install --save-dev babel-types
```

## API

<!-- begin generated section -->

### anyTypeAnnotation
```javascript
t.anyTypeAnnotation()
```

See also `t.isAnyTypeAnnotation(node, opts)` and `t.assertAnyTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### arrayExpression
```javascript
t.arrayExpression(elements)
```

See also `t.isArrayExpression(node, opts)` and `t.assertArrayExpression(node, opts)`.

Aliases: `Expression`

 - `elements`: `Array<null | Expression | SpreadElement>` (default: `[]`)

---

### arrayPattern
```javascript
t.arrayPattern(elements, typeAnnotation)
```

See also `t.isArrayPattern(node, opts)` and `t.assertArrayPattern(node, opts)`.

Aliases: `Pattern`, `LVal`

 - `elements`: `Array<Identifier | Pattern | RestElement>` (required)
 - `typeAnnotation` (required)
 - `decorators`: `Array<Decorator>` (default: `null`)

---

### arrayTypeAnnotation
```javascript
t.arrayTypeAnnotation(elementType)
```

See also `t.isArrayTypeAnnotation(node, opts)` and `t.assertArrayTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `elementType` (required)

---

### arrowFunctionExpression
```javascript
t.arrowFunctionExpression(params, body, async)
```

See also `t.isArrowFunctionExpression(node, opts)` and `t.assertArrowFunctionExpression(node, opts)`.

Aliases: `Scopable`, `Function`, `BlockParent`, `FunctionParent`, `Expression`, `Pureish`

 - `params`: `Array<LVal>` (required)
 - `body`: `BlockStatement | Expression` (required)
 - `async`: `boolean` (default: `false`)
 - `returnType` (default: `null`)
 - `typeParameters` (default: `null`)

---

### assignmentExpression
```javascript
t.assignmentExpression(operator, left, right)
```

See also `t.isAssignmentExpression(node, opts)` and `t.assertAssignmentExpression(node, opts)`.

Aliases: `Expression`

 - `operator`: `string` (required)
 - `left`: `LVal` (required)
 - `right`: `Expression` (required)

---

### assignmentPattern
```javascript
t.assignmentPattern(left, right)
```

See also `t.isAssignmentPattern(node, opts)` and `t.assertAssignmentPattern(node, opts)`.

Aliases: `Pattern`, `LVal`

 - `left`: `Identifier` (required)
 - `right`: `Expression` (required)
 - `decorators`: `Array<Decorator>` (default: `null`)

---

### awaitExpression
```javascript
t.awaitExpression(argument)
```

See also `t.isAwaitExpression(node, opts)` and `t.assertAwaitExpression(node, opts)`.

Aliases: `Expression`, `Terminatorless`

 - `argument`: `Expression` (required)

---

### binaryExpression
```javascript
t.binaryExpression(operator, left, right)
```

See also `t.isBinaryExpression(node, opts)` and `t.assertBinaryExpression(node, opts)`.

Aliases: `Binary`, `Expression`

 - `operator`: `'+' | '-' | '/' | '%' | '*' | '**' | '&' | '|' | '>>' | '>>>' | '<<' | '^' | '==' | '===' | '!=' | '!==' | 'in' | 'instanceof' | '>' | '<' | '>=' | '<='` (required)
 - `left`: `Expression` (required)
 - `right`: `Expression` (required)

---

### bindExpression
```javascript
t.bindExpression(object, callee)
```

See also `t.isBindExpression(node, opts)` and `t.assertBindExpression(node, opts)`.

Aliases: `Expression`

 - `object` (required)
 - `callee` (required)

---

### blockStatement
```javascript
t.blockStatement(body, directives)
```

See also `t.isBlockStatement(node, opts)` and `t.assertBlockStatement(node, opts)`.

Aliases: `Scopable`, `BlockParent`, `Block`, `Statement`

 - `body`: `Array<Statement>` (required)
 - `directives`: `Array<Directive>` (default: `[]`)

---

### booleanLiteral
```javascript
t.booleanLiteral(value)
```

See also `t.isBooleanLiteral(node, opts)` and `t.assertBooleanLiteral(node, opts)`.

Aliases: `Expression`, `Pureish`, `Literal`, `Immutable`

 - `value`: `boolean` (required)

---

### booleanLiteralTypeAnnotation
```javascript
t.booleanLiteralTypeAnnotation()
```

See also `t.isBooleanLiteralTypeAnnotation(node, opts)` and `t.assertBooleanLiteralTypeAnnotation(node, opts)`.

Aliases: `Flow`


---

### booleanTypeAnnotation
```javascript
t.booleanTypeAnnotation()
```

See also `t.isBooleanTypeAnnotation(node, opts)` and `t.assertBooleanTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### breakStatement
```javascript
t.breakStatement(label)
```

See also `t.isBreakStatement(node, opts)` and `t.assertBreakStatement(node, opts)`.

Aliases: `Statement`, `Terminatorless`, `CompletionStatement`

 - `label`: `Identifier` (default: `null`)

---

### callExpression
```javascript
t.callExpression(callee, arguments)
```

See also `t.isCallExpression(node, opts)` and `t.assertCallExpression(node, opts)`.

Aliases: `Expression`

 - `callee`: `Expression` (required)
 - `arguments`: `Array<Expression | SpreadElement>` (required)

---

### catchClause
```javascript
t.catchClause(param, body)
```

See also `t.isCatchClause(node, opts)` and `t.assertCatchClause(node, opts)`.

Aliases: `Scopable`

 - `param`: `Identifier` (required)
 - `body`: `BlockStatement` (required)

---

### classBody
```javascript
t.classBody(body)
```

See also `t.isClassBody(node, opts)` and `t.assertClassBody(node, opts)`.

 - `body`: `Array<ClassMethod | ClassProperty>` (required)

---

### classDeclaration
```javascript
t.classDeclaration(id, superClass, body, decorators)
```

See also `t.isClassDeclaration(node, opts)` and `t.assertClassDeclaration(node, opts)`.

Aliases: `Scopable`, `Class`, `Statement`, `Declaration`, `Pureish`

 - `id`: `Identifier` (required)
 - `superClass`: `Expression` (default: `null`)
 - `body`: `ClassBody` (required)
 - `decorators`: `Array<Decorator>` (required)
 - `implements` (default: `null`)
 - `mixins` (default: `null`)
 - `superTypeParameters` (default: `null`)
 - `typeParameters` (default: `null`)

---

### classExpression
```javascript
t.classExpression(id, superClass, body, decorators)
```

See also `t.isClassExpression(node, opts)` and `t.assertClassExpression(node, opts)`.

Aliases: `Scopable`, `Class`, `Expression`, `Pureish`

 - `id`: `Identifier` (default: `null`)
 - `superClass`: `Expression` (default: `null`)
 - `body`: `ClassBody` (required)
 - `decorators`: `Array<Decorator>` (required)
 - `implements` (default: `null`)
 - `mixins` (default: `null`)
 - `superTypeParameters` (default: `null`)
 - `typeParameters` (default: `null`)

---

### classImplements
```javascript
t.classImplements(id, typeParameters)
```

See also `t.isClassImplements(node, opts)` and `t.assertClassImplements(node, opts)`.

Aliases: `Flow`

 - `id` (required)
 - `typeParameters` (required)

---

### classMethod
```javascript
t.classMethod(kind, key, params, body, computed, static)
```

See also `t.isClassMethod(node, opts)` and `t.assertClassMethod(node, opts)`.

Aliases: `Function`, `Scopable`, `BlockParent`, `FunctionParent`, `Method`

 - `kind`: `"get" | "set" | "method" | "constructor"` (default: `'method'`)
 - `key`if computed then `Expression` else `Identifier | Literal` (required)
 - `params`: `Array<LVal>` (required)
 - `body`: `BlockStatement` (required)
 - `computed`: `boolean` (default: `false`)
 - `static`: `boolean` (default: `false`)
 - `async`: `boolean` (default: `false`)
 - `decorators` (default: `null`)
 - `generator`: `boolean` (default: `false`)
 - `returnType` (default: `null`)
 - `typeParameters` (default: `null`)

---

### classProperty
```javascript
t.classProperty(key, value, typeAnnotation, decorators, computed)
```

See also `t.isClassProperty(node, opts)` and `t.assertClassProperty(node, opts)`.

Aliases: `Property`

 - `key` (required)
 - `value` (required)
 - `typeAnnotation` (required)
 - `decorators` (required)
 - `computed`: `boolean` (default: `false`)

---

### conditionalExpression
```javascript
t.conditionalExpression(test, consequent, alternate)
```

See also `t.isConditionalExpression(node, opts)` and `t.assertConditionalExpression(node, opts)`.

Aliases: `Expression`, `Conditional`

 - `test`: `Expression` (required)
 - `consequent`: `Expression` (required)
 - `alternate`: `Expression` (required)

---

### continueStatement
```javascript
t.continueStatement(label)
```

See also `t.isContinueStatement(node, opts)` and `t.assertContinueStatement(node, opts)`.

Aliases: `Statement`, `Terminatorless`, `CompletionStatement`

 - `label`: `Identifier` (default: `null`)

---

### debuggerStatement
```javascript
t.debuggerStatement()
```

See also `t.isDebuggerStatement(node, opts)` and `t.assertDebuggerStatement(node, opts)`.

Aliases: `Statement`


---

### declareClass
```javascript
t.declareClass(id, typeParameters, extends, body)
```

See also `t.isDeclareClass(node, opts)` and `t.assertDeclareClass(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `extends` (required)
 - `body` (required)

---

### declareExportDeclaration
```javascript
t.declareExportDeclaration(declaration, specifiers, source)
```

See also `t.isDeclareExportDeclaration(node, opts)` and `t.assertDeclareExportDeclaration(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `declaration` (required)
 - `specifiers` (required)
 - `source` (required)

---

### declareFunction
```javascript
t.declareFunction(id)
```

See also `t.isDeclareFunction(node, opts)` and `t.assertDeclareFunction(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)

---

### declareInterface
```javascript
t.declareInterface(id, typeParameters, extends, body)
```

See also `t.isDeclareInterface(node, opts)` and `t.assertDeclareInterface(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `extends` (required)
 - `body` (required)

---

### declareModule
```javascript
t.declareModule(id, body)
```

See also `t.isDeclareModule(node, opts)` and `t.assertDeclareModule(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `body` (required)

---

### declareModuleExports
```javascript
t.declareModuleExports(typeAnnotation)
```

See also `t.isDeclareModuleExports(node, opts)` and `t.assertDeclareModuleExports(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `typeAnnotation` (required)

---

### declareOpaqueType
```javascript
t.declareOpaqueType(id, typeParameters, supertype)
```

See also `t.isDeclareOpaqueType(node, opts)` and `t.assertDeclareOpaqueType(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `supertype` (required)

---

### declareTypeAlias
```javascript
t.declareTypeAlias(id, typeParameters, right)
```

See also `t.isDeclareTypeAlias(node, opts)` and `t.assertDeclareTypeAlias(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `right` (required)

---

### declareVariable
```javascript
t.declareVariable(id)
```

See also `t.isDeclareVariable(node, opts)` and `t.assertDeclareVariable(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)

---

### decorator
```javascript
t.decorator(expression)
```

See also `t.isDecorator(node, opts)` and `t.assertDecorator(node, opts)`.

 - `expression`: `Expression` (required)

---

### directive
```javascript
t.directive(value)
```

See also `t.isDirective(node, opts)` and `t.assertDirective(node, opts)`.

 - `value`: `DirectiveLiteral` (required)

---

### directiveLiteral
```javascript
t.directiveLiteral(value)
```

See also `t.isDirectiveLiteral(node, opts)` and `t.assertDirectiveLiteral(node, opts)`.

 - `value`: `string` (required)

---

### doExpression
```javascript
t.doExpression(body)
```

See also `t.isDoExpression(node, opts)` and `t.assertDoExpression(node, opts)`.

Aliases: `Expression`

 - `body`: `BlockStatement` (required)

---

### doWhileStatement
```javascript
t.doWhileStatement(test, body)
```

See also `t.isDoWhileStatement(node, opts)` and `t.assertDoWhileStatement(node, opts)`.

Aliases: `Statement`, `BlockParent`, `Loop`, `While`, `Scopable`

 - `test`: `Expression` (required)
 - `body`: `Statement` (required)

---

### emptyStatement
```javascript
t.emptyStatement()
```

See also `t.isEmptyStatement(node, opts)` and `t.assertEmptyStatement(node, opts)`.

Aliases: `Statement`


---

### emptyTypeAnnotation
```javascript
t.emptyTypeAnnotation()
```

See also `t.isEmptyTypeAnnotation(node, opts)` and `t.assertEmptyTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### existentialTypeParam
```javascript
t.existentialTypeParam()
```

See also `t.isExistentialTypeParam(node, opts)` and `t.assertExistentialTypeParam(node, opts)`.

Aliases: `Flow`


---

### exportAllDeclaration
```javascript
t.exportAllDeclaration(source)
```

See also `t.isExportAllDeclaration(node, opts)` and `t.assertExportAllDeclaration(node, opts)`.

Aliases: `Statement`, `Declaration`, `ModuleDeclaration`, `ExportDeclaration`

 - `source`: `StringLiteral` (required)

---

### exportDefaultDeclaration
```javascript
t.exportDefaultDeclaration(declaration)
```

See also `t.isExportDefaultDeclaration(node, opts)` and `t.assertExportDefaultDeclaration(node, opts)`.

Aliases: `Statement`, `Declaration`, `ModuleDeclaration`, `ExportDeclaration`

 - `declaration`: `FunctionDeclaration | ClassDeclaration | Expression` (required)

---

### exportDefaultSpecifier
```javascript
t.exportDefaultSpecifier(exported)
```

See also `t.isExportDefaultSpecifier(node, opts)` and `t.assertExportDefaultSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `exported`: `Identifier` (required)

---

### exportNamedDeclaration
```javascript
t.exportNamedDeclaration(declaration, specifiers, source)
```

See also `t.isExportNamedDeclaration(node, opts)` and `t.assertExportNamedDeclaration(node, opts)`.

Aliases: `Statement`, `Declaration`, `ModuleDeclaration`, `ExportDeclaration`

 - `declaration`: `Declaration` (default: `null`)
 - `specifiers`: `Array<ExportSpecifier>` (required)
 - `source`: `StringLiteral` (default: `null`)

---

### exportNamespaceSpecifier
```javascript
t.exportNamespaceSpecifier(exported)
```

See also `t.isExportNamespaceSpecifier(node, opts)` and `t.assertExportNamespaceSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `exported`: `Identifier` (required)

---

### exportSpecifier
```javascript
t.exportSpecifier(local, exported)
```

See also `t.isExportSpecifier(node, opts)` and `t.assertExportSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `local`: `Identifier` (required)
 - `exported`: `Identifier` (required)

---

### expressionStatement
```javascript
t.expressionStatement(expression)
```

See also `t.isExpressionStatement(node, opts)` and `t.assertExpressionStatement(node, opts)`.

Aliases: `Statement`, `ExpressionWrapper`

 - `expression`: `Expression` (required)

---

### file
```javascript
t.file(program, comments, tokens)
```

See also `t.isFile(node, opts)` and `t.assertFile(node, opts)`.

 - `program`: `Program` (required)
 - `comments` (required)
 - `tokens` (required)

---

### forAwaitStatement
```javascript
t.forAwaitStatement(left, right, body)
```

See also `t.isForAwaitStatement(node, opts)` and `t.assertForAwaitStatement(node, opts)`.

Aliases: `Scopable`, `Statement`, `For`, `BlockParent`, `Loop`, `ForXStatement`

 - `left`: `VariableDeclaration | LVal` (required)
 - `right`: `Expression` (required)
 - `body`: `Statement` (required)

---

### forInStatement
```javascript
t.forInStatement(left, right, body)
```

See also `t.isForInStatement(node, opts)` and `t.assertForInStatement(node, opts)`.

Aliases: `Scopable`, `Statement`, `For`, `BlockParent`, `Loop`, `ForXStatement`

 - `left`: `VariableDeclaration | LVal` (required)
 - `right`: `Expression` (required)
 - `body`: `Statement` (required)

---

### forOfStatement
```javascript
t.forOfStatement(left, right, body)
```

See also `t.isForOfStatement(node, opts)` and `t.assertForOfStatement(node, opts)`.

Aliases: `Scopable`, `Statement`, `For`, `BlockParent`, `Loop`, `ForXStatement`

 - `left`: `VariableDeclaration | LVal` (required)
 - `right`: `Expression` (required)
 - `body`: `Statement` (required)

---

### forStatement
```javascript
t.forStatement(init, test, update, body)
```

See also `t.isForStatement(node, opts)` and `t.assertForStatement(node, opts)`.

Aliases: `Scopable`, `Statement`, `For`, `BlockParent`, `Loop`

 - `init`: `VariableDeclaration | Expression` (default: `null`)
 - `test`: `Expression` (default: `null`)
 - `update`: `Expression` (default: `null`)
 - `body`: `Statement` (required)

---

### functionDeclaration
```javascript
t.functionDeclaration(id, params, body, generator, async)
```

See also `t.isFunctionDeclaration(node, opts)` and `t.assertFunctionDeclaration(node, opts)`.

Aliases: `Scopable`, `Function`, `BlockParent`, `FunctionParent`, `Statement`, `Pureish`, `Declaration`

 - `id`: `Identifier` (required)
 - `params`: `Array<LVal>` (required)
 - `body`: `BlockStatement` (required)
 - `generator`: `boolean` (default: `false`)
 - `async`: `boolean` (default: `false`)
 - `returnType` (default: `null`)
 - `typeParameters` (default: `null`)

---

### functionExpression
```javascript
t.functionExpression(id, params, body, generator, async)
```

See also `t.isFunctionExpression(node, opts)` and `t.assertFunctionExpression(node, opts)`.

Aliases: `Scopable`, `Function`, `BlockParent`, `FunctionParent`, `Expression`, `Pureish`

 - `id`: `Identifier` (default: `null`)
 - `params`: `Array<LVal>` (required)
 - `body`: `BlockStatement` (required)
 - `generator`: `boolean` (default: `false`)
 - `async`: `boolean` (default: `false`)
 - `returnType` (default: `null`)
 - `typeParameters` (default: `null`)

---

### functionTypeAnnotation
```javascript
t.functionTypeAnnotation(typeParameters, params, rest, returnType)
```

See also `t.isFunctionTypeAnnotation(node, opts)` and `t.assertFunctionTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `typeParameters` (required)
 - `params` (required)
 - `rest` (required)
 - `returnType` (required)

---

### functionTypeParam
```javascript
t.functionTypeParam(name, typeAnnotation)
```

See also `t.isFunctionTypeParam(node, opts)` and `t.assertFunctionTypeParam(node, opts)`.

Aliases: `Flow`

 - `name` (required)
 - `typeAnnotation` (required)

---

### genericTypeAnnotation
```javascript
t.genericTypeAnnotation(id, typeParameters)
```

See also `t.isGenericTypeAnnotation(node, opts)` and `t.assertGenericTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `id` (required)
 - `typeParameters` (required)

---

### identifier
```javascript
t.identifier(name)
```

See also `t.isIdentifier(node, opts)` and `t.assertIdentifier(node, opts)`.

Aliases: `Expression`, `LVal`

 - `name``string` (required)
 - `decorators`: `Array<Decorator>` (default: `null`)
 - `typeAnnotation` (default: `null`)

---

### ifStatement
```javascript
t.ifStatement(test, consequent, alternate)
```

See also `t.isIfStatement(node, opts)` and `t.assertIfStatement(node, opts)`.

Aliases: `Statement`, `Conditional`

 - `test`: `Expression` (required)
 - `consequent`: `Statement` (required)
 - `alternate`: `Statement` (default: `null`)

---

### import
```javascript
t.import()
```

See also `t.isImport(node, opts)` and `t.assertImport(node, opts)`.

Aliases: `Expression`


---

### importDeclaration
```javascript
t.importDeclaration(specifiers, source)
```

See also `t.isImportDeclaration(node, opts)` and `t.assertImportDeclaration(node, opts)`.

Aliases: `Statement`, `Declaration`, `ModuleDeclaration`

 - `specifiers`: `Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>` (required)
 - `source`: `StringLiteral` (required)

---

### importDefaultSpecifier
```javascript
t.importDefaultSpecifier(local)
```

See also `t.isImportDefaultSpecifier(node, opts)` and `t.assertImportDefaultSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `local`: `Identifier` (required)

---

### importNamespaceSpecifier
```javascript
t.importNamespaceSpecifier(local)
```

See also `t.isImportNamespaceSpecifier(node, opts)` and `t.assertImportNamespaceSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `local`: `Identifier` (required)

---

### importSpecifier
```javascript
t.importSpecifier(local, imported)
```

See also `t.isImportSpecifier(node, opts)` and `t.assertImportSpecifier(node, opts)`.

Aliases: `ModuleSpecifier`

 - `local`: `Identifier` (required)
 - `imported`: `Identifier` (required)
 - `importKind`: `null | 'type' | 'typeof'` (default: `null`)

---

### interfaceDeclaration
```javascript
t.interfaceDeclaration(id, typeParameters, extends, body)
```

See also `t.isInterfaceDeclaration(node, opts)` and `t.assertInterfaceDeclaration(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `extends` (required)
 - `body` (required)

---

### interfaceExtends
```javascript
t.interfaceExtends(id, typeParameters)
```

See also `t.isInterfaceExtends(node, opts)` and `t.assertInterfaceExtends(node, opts)`.

Aliases: `Flow`

 - `id` (required)
 - `typeParameters` (required)

---

### intersectionTypeAnnotation
```javascript
t.intersectionTypeAnnotation(types)
```

See also `t.isIntersectionTypeAnnotation(node, opts)` and `t.assertIntersectionTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `types` (required)

---

### jSXAttribute
```javascript
t.jSXAttribute(name, value)
```

See also `t.isJSXAttribute(node, opts)` and `t.assertJSXAttribute(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `name`: `JSXIdentifier | JSXNamespacedName` (required)
 - `value`: `JSXElement | StringLiteral | JSXExpressionContainer` (default: `null`)

---

### jSXClosingElement
```javascript
t.jSXClosingElement(name)
```

See also `t.isJSXClosingElement(node, opts)` and `t.assertJSXClosingElement(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `name`: `JSXIdentifier | JSXMemberExpression` (required)

---

### jSXElement
```javascript
t.jSXElement(openingElement, closingElement, children, selfClosing)
```

See also `t.isJSXElement(node, opts)` and `t.assertJSXElement(node, opts)`.

Aliases: `JSX`, `Immutable`, `Expression`

 - `openingElement`: `JSXOpeningElement` (required)
 - `closingElement`: `JSXClosingElement` (default: `null`)
 - `children`: `Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement>` (required)
 - `selfClosing` (required)

---

### jSXEmptyExpression
```javascript
t.jSXEmptyExpression()
```

See also `t.isJSXEmptyExpression(node, opts)` and `t.assertJSXEmptyExpression(node, opts)`.

Aliases: `JSX`, `Expression`


---

### jSXExpressionContainer
```javascript
t.jSXExpressionContainer(expression)
```

See also `t.isJSXExpressionContainer(node, opts)` and `t.assertJSXExpressionContainer(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `expression`: `Expression` (required)

---

### jSXIdentifier
```javascript
t.jSXIdentifier(name)
```

See also `t.isJSXIdentifier(node, opts)` and `t.assertJSXIdentifier(node, opts)`.

Aliases: `JSX`, `Expression`

 - `name`: `string` (required)

---

### jSXMemberExpression
```javascript
t.jSXMemberExpression(object, property)
```

See also `t.isJSXMemberExpression(node, opts)` and `t.assertJSXMemberExpression(node, opts)`.

Aliases: `JSX`, `Expression`

 - `object`: `JSXMemberExpression | JSXIdentifier` (required)
 - `property`: `JSXIdentifier` (required)

---

### jSXNamespacedName
```javascript
t.jSXNamespacedName(namespace, name)
```

See also `t.isJSXNamespacedName(node, opts)` and `t.assertJSXNamespacedName(node, opts)`.

Aliases: `JSX`

 - `namespace`: `JSXIdentifier` (required)
 - `name`: `JSXIdentifier` (required)

---

### jSXOpeningElement
```javascript
t.jSXOpeningElement(name, attributes, selfClosing)
```

See also `t.isJSXOpeningElement(node, opts)` and `t.assertJSXOpeningElement(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `name`: `JSXIdentifier | JSXMemberExpression` (required)
 - `attributes`: `Array<JSXAttribute | JSXSpreadAttribute>` (required)
 - `selfClosing`: `boolean` (default: `false`)

---

### jSXSpreadAttribute
```javascript
t.jSXSpreadAttribute(argument)
```

See also `t.isJSXSpreadAttribute(node, opts)` and `t.assertJSXSpreadAttribute(node, opts)`.

Aliases: `JSX`

 - `argument`: `Expression` (required)

---

### jSXSpreadChild
```javascript
t.jSXSpreadChild(expression)
```

See also `t.isJSXSpreadChild(node, opts)` and `t.assertJSXSpreadChild(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `expression`: `Expression` (required)

---

### jSXText
```javascript
t.jSXText(value)
```

See also `t.isJSXText(node, opts)` and `t.assertJSXText(node, opts)`.

Aliases: `JSX`, `Immutable`

 - `value`: `string` (required)

---

### labeledStatement
```javascript
t.labeledStatement(label, body)
```

See also `t.isLabeledStatement(node, opts)` and `t.assertLabeledStatement(node, opts)`.

Aliases: `Statement`

 - `label`: `Identifier` (required)
 - `body`: `Statement` (required)

---

### logicalExpression
```javascript
t.logicalExpression(operator, left, right)
```

See also `t.isLogicalExpression(node, opts)` and `t.assertLogicalExpression(node, opts)`.

Aliases: `Binary`, `Expression`

 - `operator`: `'||' | '&&'` (required)
 - `left`: `Expression` (required)
 - `right`: `Expression` (required)

---

### memberExpression
```javascript
t.memberExpression(object, property, computed)
```

See also `t.isMemberExpression(node, opts)` and `t.assertMemberExpression(node, opts)`.

Aliases: `Expression`, `LVal`

 - `object`: `Expression` (required)
 - `property`if computed then `Expression` else `Identifier` (required)
 - `computed`: `boolean` (default: `false`)

---

### metaProperty
```javascript
t.metaProperty(meta, property)
```

See also `t.isMetaProperty(node, opts)` and `t.assertMetaProperty(node, opts)`.

Aliases: `Expression`

 - `meta`: `string` (required)
 - `property`: `string` (required)

---

### mixedTypeAnnotation
```javascript
t.mixedTypeAnnotation()
```

See also `t.isMixedTypeAnnotation(node, opts)` and `t.assertMixedTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### newExpression
```javascript
t.newExpression(callee, arguments)
```

See also `t.isNewExpression(node, opts)` and `t.assertNewExpression(node, opts)`.

Aliases: `Expression`

 - `callee`: `Expression` (required)
 - `arguments`: `Array<Expression | SpreadElement>` (required)

---

### noop
```javascript
t.noop()
```

See also `t.isNoop(node, opts)` and `t.assertNoop(node, opts)`.


---

### nullLiteral
```javascript
t.nullLiteral()
```

See also `t.isNullLiteral(node, opts)` and `t.assertNullLiteral(node, opts)`.

Aliases: `Expression`, `Pureish`, `Literal`, `Immutable`


---

### nullLiteralTypeAnnotation
```javascript
t.nullLiteralTypeAnnotation()
```

See also `t.isNullLiteralTypeAnnotation(node, opts)` and `t.assertNullLiteralTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### nullableTypeAnnotation
```javascript
t.nullableTypeAnnotation(typeAnnotation)
```

See also `t.isNullableTypeAnnotation(node, opts)` and `t.assertNullableTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `typeAnnotation` (required)

---

### numberTypeAnnotation
```javascript
t.numberTypeAnnotation()
```

See also `t.isNumberTypeAnnotation(node, opts)` and `t.assertNumberTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### numericLiteral
```javascript
t.numericLiteral(value)
```

See also `t.isNumericLiteral(node, opts)` and `t.assertNumericLiteral(node, opts)`.

Aliases: `Expression`, `Pureish`, `Literal`, `Immutable`

 - `value`: `number` (required)

---

### numericLiteralTypeAnnotation
```javascript
t.numericLiteralTypeAnnotation()
```

See also `t.isNumericLiteralTypeAnnotation(node, opts)` and `t.assertNumericLiteralTypeAnnotation(node, opts)`.

Aliases: `Flow`


---

### objectExpression
```javascript
t.objectExpression(properties)
```

See also `t.isObjectExpression(node, opts)` and `t.assertObjectExpression(node, opts)`.

Aliases: `Expression`

 - `properties`: `Array<ObjectMethod | ObjectProperty | SpreadProperty>` (required)

---

### objectMethod
```javascript
t.objectMethod(kind, key, params, body, computed)
```

See also `t.isObjectMethod(node, opts)` and `t.assertObjectMethod(node, opts)`.

Aliases: `UserWhitespacable`, `Function`, `Scopable`, `BlockParent`, `FunctionParent`, `Method`, `ObjectMember`

 - `kind`: `"method" | "get" | "set"` (default: `'method'`)
 - `key`if computed then `Expression` else `Identifier | Literal` (required)
 - `params` (required)
 - `body`: `BlockStatement` (required)
 - `computed`: `boolean` (default: `false`)
 - `async`: `boolean` (default: `false`)
 - `decorators`: `Array<Decorator>` (default: `null`)
 - `generator`: `boolean` (default: `false`)
 - `returnType` (default: `null`)
 - `typeParameters` (default: `null`)

---

### objectPattern
```javascript
t.objectPattern(properties, typeAnnotation)
```

See also `t.isObjectPattern(node, opts)` and `t.assertObjectPattern(node, opts)`.

Aliases: `Pattern`, `LVal`

 - `properties`: `Array<RestProperty | Property>` (required)
 - `typeAnnotation` (required)
 - `decorators`: `Array<Decorator>` (default: `null`)

---

### objectProperty
```javascript
t.objectProperty(key, value, computed, shorthand, decorators)
```

See also `t.isObjectProperty(node, opts)` and `t.assertObjectProperty(node, opts)`.

Aliases: `UserWhitespacable`, `Property`, `ObjectMember`

 - `key`if computed then `Expression` else `Identifier | Literal` (required)
 - `value`: `Expression | Pattern | RestElement` (required)
 - `computed`: `boolean` (default: `false`)
 - `shorthand`: `boolean` (default: `false`)
 - `decorators`: `Array<Decorator>` (default: `null`)

---

### objectTypeAnnotation
```javascript
t.objectTypeAnnotation(properties, indexers, callProperties)
```

See also `t.isObjectTypeAnnotation(node, opts)` and `t.assertObjectTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `properties` (required)
 - `indexers` (required)
 - `callProperties` (required)

---

### objectTypeCallProperty
```javascript
t.objectTypeCallProperty(value)
```

See also `t.isObjectTypeCallProperty(node, opts)` and `t.assertObjectTypeCallProperty(node, opts)`.

Aliases: `Flow`, `UserWhitespacable`

 - `value` (required)

---

### objectTypeIndexer
```javascript
t.objectTypeIndexer(id, key, value)
```

See also `t.isObjectTypeIndexer(node, opts)` and `t.assertObjectTypeIndexer(node, opts)`.

Aliases: `Flow`, `UserWhitespacable`

 - `id` (required)
 - `key` (required)
 - `value` (required)

---

### objectTypeProperty
```javascript
t.objectTypeProperty(key, value)
```

See also `t.isObjectTypeProperty(node, opts)` and `t.assertObjectTypeProperty(node, opts)`.

Aliases: `Flow`, `UserWhitespacable`

 - `key` (required)
 - `value` (required)

---

### objectTypeSpreadProperty
```javascript
t.objectTypeSpreadProperty(argument)
```

See also `t.isObjectTypeSpreadProperty(node, opts)` and `t.assertObjectTypeSpreadProperty(node, opts)`.

Aliases: `Flow`, `UserWhitespacable`

 - `argument` (required)

---

### opaqueType
```javascript
t.opaqueType(id, typeParameters, impltype, supertype)
```

See also `t.isOpaqueType(node, opts)` and `t.assertOpaqueType(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `impltype` (required)
 - `supertype` (required)

---

### parenthesizedExpression
```javascript
t.parenthesizedExpression(expression)
```

See also `t.isParenthesizedExpression(node, opts)` and `t.assertParenthesizedExpression(node, opts)`.

Aliases: `Expression`, `ExpressionWrapper`

 - `expression`: `Expression` (required)

---

### program
```javascript
t.program(body, directives)
```

See also `t.isProgram(node, opts)` and `t.assertProgram(node, opts)`.

Aliases: `Scopable`, `BlockParent`, `Block`, `FunctionParent`

 - `body`: `Array<Statement>` (required)
 - `directives`: `Array<Directive>` (default: `[]`)

---

### qualifiedTypeIdentifier
```javascript
t.qualifiedTypeIdentifier(id, qualification)
```

See also `t.isQualifiedTypeIdentifier(node, opts)` and `t.assertQualifiedTypeIdentifier(node, opts)`.

Aliases: `Flow`

 - `id` (required)
 - `qualification` (required)

---

### regExpLiteral
```javascript
t.regExpLiteral(pattern, flags)
```

See also `t.isRegExpLiteral(node, opts)` and `t.assertRegExpLiteral(node, opts)`.

Aliases: `Expression`, `Literal`

 - `pattern`: `string` (required)
 - `flags`: `string` (default: `''`)

---

### restElement
```javascript
t.restElement(argument, typeAnnotation)
```

See also `t.isRestElement(node, opts)` and `t.assertRestElement(node, opts)`.

Aliases: `LVal`

 - `argument`: `LVal` (required)
 - `typeAnnotation` (required)
 - `decorators`: `Array<Decorator>` (default: `null`)

---

### restProperty
```javascript
t.restProperty(argument)
```

See also `t.isRestProperty(node, opts)` and `t.assertRestProperty(node, opts)`.

Aliases: `UnaryLike`

 - `argument`: `LVal` (required)

---

### returnStatement
```javascript
t.returnStatement(argument)
```

See also `t.isReturnStatement(node, opts)` and `t.assertReturnStatement(node, opts)`.

Aliases: `Statement`, `Terminatorless`, `CompletionStatement`

 - `argument`: `Expression` (default: `null`)

---

### sequenceExpression
```javascript
t.sequenceExpression(expressions)
```

See also `t.isSequenceExpression(node, opts)` and `t.assertSequenceExpression(node, opts)`.

Aliases: `Expression`

 - `expressions`: `Array<Expression>` (required)

---

### spreadElement
```javascript
t.spreadElement(argument)
```

See also `t.isSpreadElement(node, opts)` and `t.assertSpreadElement(node, opts)`.

Aliases: `UnaryLike`

 - `argument`: `Expression` (required)

---

### spreadProperty
```javascript
t.spreadProperty(argument)
```

See also `t.isSpreadProperty(node, opts)` and `t.assertSpreadProperty(node, opts)`.

Aliases: `UnaryLike`

 - `argument`: `Expression` (required)

---

### stringLiteral
```javascript
t.stringLiteral(value)
```

See also `t.isStringLiteral(node, opts)` and `t.assertStringLiteral(node, opts)`.

Aliases: `Expression`, `Pureish`, `Literal`, `Immutable`

 - `value`: `string` (required)

---

### stringLiteralTypeAnnotation
```javascript
t.stringLiteralTypeAnnotation()
```

See also `t.isStringLiteralTypeAnnotation(node, opts)` and `t.assertStringLiteralTypeAnnotation(node, opts)`.

Aliases: `Flow`


---

### stringTypeAnnotation
```javascript
t.stringTypeAnnotation()
```

See also `t.isStringTypeAnnotation(node, opts)` and `t.assertStringTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### super
```javascript
t.super()
```

See also `t.isSuper(node, opts)` and `t.assertSuper(node, opts)`.

Aliases: `Expression`


---

### switchCase
```javascript
t.switchCase(test, consequent)
```

See also `t.isSwitchCase(node, opts)` and `t.assertSwitchCase(node, opts)`.

 - `test`: `Expression` (default: `null`)
 - `consequent`: `Array<Statement>` (required)

---

### switchStatement
```javascript
t.switchStatement(discriminant, cases)
```

See also `t.isSwitchStatement(node, opts)` and `t.assertSwitchStatement(node, opts)`.

Aliases: `Statement`, `BlockParent`, `Scopable`

 - `discriminant`: `Expression` (required)
 - `cases`: `Array<SwitchCase>` (required)

---

### taggedTemplateExpression
```javascript
t.taggedTemplateExpression(tag, quasi)
```

See also `t.isTaggedTemplateExpression(node, opts)` and `t.assertTaggedTemplateExpression(node, opts)`.

Aliases: `Expression`

 - `tag`: `Expression` (required)
 - `quasi`: `TemplateLiteral` (required)

---

### templateElement
```javascript
t.templateElement(value, tail)
```

See also `t.isTemplateElement(node, opts)` and `t.assertTemplateElement(node, opts)`.

 - `value` (required)
 - `tail`: `boolean` (default: `false`)

---

### templateLiteral
```javascript
t.templateLiteral(quasis, expressions)
```

See also `t.isTemplateLiteral(node, opts)` and `t.assertTemplateLiteral(node, opts)`.

Aliases: `Expression`, `Literal`

 - `quasis`: `Array<TemplateElement>` (required)
 - `expressions`: `Array<Expression>` (required)

---

### thisExpression
```javascript
t.thisExpression()
```

See also `t.isThisExpression(node, opts)` and `t.assertThisExpression(node, opts)`.

Aliases: `Expression`


---

### thisTypeAnnotation
```javascript
t.thisTypeAnnotation()
```

See also `t.isThisTypeAnnotation(node, opts)` and `t.assertThisTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### throwStatement
```javascript
t.throwStatement(argument)
```

See also `t.isThrowStatement(node, opts)` and `t.assertThrowStatement(node, opts)`.

Aliases: `Statement`, `Terminatorless`, `CompletionStatement`

 - `argument`: `Expression` (required)

---

### tryStatement
```javascript
t.tryStatement(block, handler, finalizer)
```

See also `t.isTryStatement(node, opts)` and `t.assertTryStatement(node, opts)`.

Aliases: `Statement`

 - `block` (required)
 - `handler` (default: `null`)
 - `finalizer`: `BlockStatement` (default: `null`)
 - `body`: `BlockStatement` (default: `null`)

---

### tupleTypeAnnotation
```javascript
t.tupleTypeAnnotation(types)
```

See also `t.isTupleTypeAnnotation(node, opts)` and `t.assertTupleTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `types` (required)

---

### typeAlias
```javascript
t.typeAlias(id, typeParameters, right)
```

See also `t.isTypeAlias(node, opts)` and `t.assertTypeAlias(node, opts)`.

Aliases: `Flow`, `FlowDeclaration`, `Statement`, `Declaration`

 - `id` (required)
 - `typeParameters` (required)
 - `right` (required)

---

### typeAnnotation
```javascript
t.typeAnnotation(typeAnnotation)
```

See also `t.isTypeAnnotation(node, opts)` and `t.assertTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `typeAnnotation` (required)

---

### typeCastExpression
```javascript
t.typeCastExpression(expression, typeAnnotation)
```

See also `t.isTypeCastExpression(node, opts)` and `t.assertTypeCastExpression(node, opts)`.

Aliases: `Flow`, `ExpressionWrapper`, `Expression`

 - `expression` (required)
 - `typeAnnotation` (required)

---

### typeParameter
```javascript
t.typeParameter(bound)
```

See also `t.isTypeParameter(node, opts)` and `t.assertTypeParameter(node, opts)`.

Aliases: `Flow`

 - `bound` (required)

---

### typeParameterDeclaration
```javascript
t.typeParameterDeclaration(params)
```

See also `t.isTypeParameterDeclaration(node, opts)` and `t.assertTypeParameterDeclaration(node, opts)`.

Aliases: `Flow`

 - `params` (required)

---

### typeParameterInstantiation
```javascript
t.typeParameterInstantiation(params)
```

See also `t.isTypeParameterInstantiation(node, opts)` and `t.assertTypeParameterInstantiation(node, opts)`.

Aliases: `Flow`

 - `params` (required)

---

### typeofTypeAnnotation
```javascript
t.typeofTypeAnnotation(argument)
```

See also `t.isTypeofTypeAnnotation(node, opts)` and `t.assertTypeofTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `argument` (required)

---

### unaryExpression
```javascript
t.unaryExpression(operator, argument, prefix)
```

See also `t.isUnaryExpression(node, opts)` and `t.assertUnaryExpression(node, opts)`.

Aliases: `UnaryLike`, `Expression`

 - `operator`: `'void' | 'delete' | '!' | '+' | '-' | '++' | '--' | '~' | 'typeof'` (required)
 - `argument`: `Expression` (required)
 - `prefix`: `boolean` (default: `true`)

---

### unionTypeAnnotation
```javascript
t.unionTypeAnnotation(types)
```

See also `t.isUnionTypeAnnotation(node, opts)` and `t.assertUnionTypeAnnotation(node, opts)`.

Aliases: `Flow`

 - `types` (required)

---

### updateExpression
```javascript
t.updateExpression(operator, argument, prefix)
```

See also `t.isUpdateExpression(node, opts)` and `t.assertUpdateExpression(node, opts)`.

Aliases: `Expression`

 - `operator`: `'++' | '--'` (required)
 - `argument`: `Expression` (required)
 - `prefix`: `boolean` (default: `false`)

---

### variableDeclaration
```javascript
t.variableDeclaration(kind, declarations)
```

See also `t.isVariableDeclaration(node, opts)` and `t.assertVariableDeclaration(node, opts)`.

Aliases: `Statement`, `Declaration`

 - `kind`: `"var" | "let" | "const"` (required)
 - `declarations`: `Array<VariableDeclarator>` (required)

---

### variableDeclarator
```javascript
t.variableDeclarator(id, init)
```

See also `t.isVariableDeclarator(node, opts)` and `t.assertVariableDeclarator(node, opts)`.

 - `id`: `LVal` (required)
 - `init`: `Expression` (default: `null`)

---

### voidTypeAnnotation
```javascript
t.voidTypeAnnotation()
```

See also `t.isVoidTypeAnnotation(node, opts)` and `t.assertVoidTypeAnnotation(node, opts)`.

Aliases: `Flow`, `FlowBaseAnnotation`


---

### whileStatement
```javascript
t.whileStatement(test, body)
```

See also `t.isWhileStatement(node, opts)` and `t.assertWhileStatement(node, opts)`.

Aliases: `Statement`, `BlockParent`, `Loop`, `While`, `Scopable`

 - `test`: `Expression` (required)
 - `body`: `BlockStatement | Statement` (required)

---

### withStatement
```javascript
t.withStatement(object, body)
```

See also `t.isWithStatement(node, opts)` and `t.assertWithStatement(node, opts)`.

Aliases: `Statement`

 - `object` (required)
 - `body`: `BlockStatement | Statement` (required)

---

### yieldExpression
```javascript
t.yieldExpression(argument, delegate)
```

See also `t.isYieldExpression(node, opts)` and `t.assertYieldExpression(node, opts)`.

Aliases: `Expression`, `Terminatorless`

 - `argument`: `Expression` (default: `null`)
 - `delegate`: `boolean` (default: `false`)

---


<!-- end generated section -->

