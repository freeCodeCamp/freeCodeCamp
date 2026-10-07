import ts9 from 'typescript';

// src/comments.ts
function forEachToken(node, callback, sourceFile = node.getSourceFile()) {
  for (const token of iterateTokens(node, sourceFile)) {
    callback(token);
  }
}
function* iterateTokens(node, sourceFile = node.getSourceFile()) {
  const queue = [];
  while (true) {
    if (ts9.isTokenKind(node.kind)) {
      yield node;
    } else {
      const children = node.getChildren(sourceFile);
      if (children.length === 1) {
        node = children[0];
        continue;
      }
      for (let i = children.length - 1; i >= 0; --i) {
        queue.push(children[i]);
      }
    }
    if (queue.length === 0) {
      break;
    }
    node = queue.pop();
  }
}

// src/comments.ts
function forEachComment(node, callback, sourceFile = node.getSourceFile()) {
  const fullText = sourceFile.text;
  for (const { end, kind, pos } of iterateComments(node, sourceFile)) {
    callback(fullText, { end, kind, pos });
  }
}
function* iterateComments(node, sourceFile = node.getSourceFile()) {
  const fullText = sourceFile.text;
  const notJsx = sourceFile.languageVariant !== ts9.LanguageVariant.JSX;
  for (const token of iterateTokens(node, sourceFile)) {
    if (token.pos === token.end) {
      continue;
    }
    if (token.kind !== ts9.SyntaxKind.JsxText) {
      yield* collectComments((callback) => {
        ts9.forEachLeadingCommentRange(
          fullText,
          // skip shebang at position 0
          token.pos === 0 ? (ts9.getShebang(fullText) ?? "").length : token.pos,
          callback
        );
      }, fullText);
    }
    if (notJsx || canHaveTrailingTrivia(token)) {
      yield* collectComments((callback) => {
        ts9.forEachTrailingCommentRange(fullText, token.end, callback);
      }, fullText);
    }
  }
}
function canHaveTrailingTrivia(token) {
  switch (token.kind) {
    case ts9.SyntaxKind.CloseBraceToken:
      return token.parent.kind !== ts9.SyntaxKind.JsxExpression || !isJsxElementOrFragment(token.parent.parent);
    case ts9.SyntaxKind.GreaterThanToken:
      switch (token.parent.kind) {
        case ts9.SyntaxKind.JsxClosingElement:
        case ts9.SyntaxKind.JsxClosingFragment:
          return !isJsxElementOrFragment(token.parent.parent.parent);
        case ts9.SyntaxKind.JsxOpeningElement:
          return token.end !== token.parent.end;
        case ts9.SyntaxKind.JsxOpeningFragment:
          return false;
        // would be inside the fragment
        case ts9.SyntaxKind.JsxSelfClosingElement:
          return token.end !== token.parent.end || // if end is not equal, this is part of the type arguments list
          !isJsxElementOrFragment(token.parent.parent);
      }
  }
  return true;
}
function collectComments(execute, fullText) {
  const comments = [];
  execute((pos, end, kind) => {
    const text = fullText.slice(pos, end);
    const value = text.slice(
      2,
      kind === ts9.SyntaxKind.SingleLineCommentTrivia ? void 0 : -2
    );
    comments.push({ end, kind, pos, text, value });
  });
  return comments;
}
function isJsxElementOrFragment(node) {
  return node.kind === ts9.SyntaxKind.JsxElement || node.kind === ts9.SyntaxKind.JsxFragment;
}
var [tsMajor, tsMinor] = ts9.versionMajorMinor.split(".").map((raw) => Number.parseInt(raw, 10));
function isTsVersionAtLeast(major, minor = 0) {
  return tsMajor > major || tsMajor === major && tsMinor >= minor;
}

// src/compilerOptions.ts
function isCompilerOptionEnabled(options, option) {
  switch (option) {
    case "allowJs":
      return options.allowJs === void 0 ? isCompilerOptionEnabled(options, "checkJs") : options.allowJs;
    case "allowSyntheticDefaultImports":
      return options.allowSyntheticDefaultImports !== void 0 ? options.allowSyntheticDefaultImports : isCompilerOptionEnabled(options, "esModuleInterop") || options.module === ts9.ModuleKind.System;
    case "alwaysStrict":
    case "noImplicitAny":
    case "noImplicitThis":
    case "strictBindCallApply":
    case "strictFunctionTypes":
    case "strictNullChecks":
    case "strictPropertyInitialization":
      return isStrictCompilerOptionEnabled(
        options,
        option
      );
    case "declaration":
      return options.declaration || isCompilerOptionEnabled(options, "composite");
    case "declarationMap":
    case "emitDeclarationOnly":
    case "stripInternal":
      return options[option] === true && isCompilerOptionEnabled(options, "declaration");
    case "incremental":
      return options.incremental === void 0 ? isCompilerOptionEnabled(options, "composite") : options.incremental;
    case "noUncheckedIndexedAccess":
      return options.noUncheckedIndexedAccess === true && isCompilerOptionEnabled(options, "strictNullChecks");
    case "skipDefaultLibCheck":
      return options.skipDefaultLibCheck || isCompilerOptionEnabled(options, "skipLibCheck");
    case "suppressImplicitAnyIndexErrors":
      return (
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        options.suppressImplicitAnyIndexErrors === true && isCompilerOptionEnabled(options, "noImplicitAny")
      );
  }
  return options[option] === true;
}
function isStrictCompilerOptionEnabled(options, option) {
  if (option === "strictPropertyInitialization") {
    if (!isStrictCompilerOptionEnabled(options, "strictNullChecks")) {
      return false;
    }
  }
  return options[option] ?? options.strict ?? isTsVersionAtLeast(6);
}
function isModifierFlagSet(node, flag) {
  return isFlagSet(ts9.getCombinedModifierFlags(node), flag);
}
function isFlagSet(allFlags, flag) {
  return (allFlags & flag) !== 0;
}
function isFlagSetOnObject(obj, flag) {
  return isFlagSet(obj.flags, flag);
}
var isNodeFlagSet = isFlagSetOnObject;
function isObjectFlagSet(objectType, flag) {
  return isFlagSet(objectType.objectFlags, flag);
}
var isSymbolFlagSet = isFlagSetOnObject;
function isTransientSymbolLinksFlagSet(links, flag) {
  return isFlagSet(links.checkFlags, flag);
}
var isTypeFlagSet = isFlagSetOnObject;

// src/modifiers.ts
function includesModifier(modifiers, ...kinds) {
  if (modifiers === void 0) {
    return false;
  }
  for (const modifier of modifiers) {
    if (kinds.includes(modifier.kind)) {
      return true;
    }
  }
  return false;
}
function isAssignmentKind(kind) {
  return kind >= ts9.SyntaxKind.FirstAssignment && kind <= ts9.SyntaxKind.LastAssignment;
}
function isNumericPropertyName(name) {
  return String(+name) === name;
}
function isValidPropertyAccess(text, languageVersion = ts9.ScriptTarget.Latest) {
  if (text.length === 0) {
    return false;
  }
  let ch = text.codePointAt(0);
  if (!ts9.isIdentifierStart(ch, languageVersion)) {
    return false;
  }
  for (let i = charSize(ch); i < text.length; i += charSize(ch)) {
    ch = text.codePointAt(i);
    if (!ts9.isIdentifierPart(ch, languageVersion)) {
      return false;
    }
  }
  return true;
}
function charSize(ch) {
  return ch >= 65536 ? 2 : 1;
}

// src/nodes/access.ts
var AccessKind = /* @__PURE__ */ ((AccessKind2) => {
  AccessKind2[AccessKind2["None"] = 0] = "None";
  AccessKind2[AccessKind2["Read"] = 1] = "Read";
  AccessKind2[AccessKind2["Write"] = 2] = "Write";
  AccessKind2[AccessKind2["Delete"] = 4] = "Delete";
  AccessKind2[AccessKind2["ReadWrite"] = 3] = "ReadWrite";
  return AccessKind2;
})(AccessKind || {});
function getAccessKind(node) {
  const parent = node.parent;
  switch (parent.kind) {
    case ts9.SyntaxKind.ArrayLiteralExpression:
    case ts9.SyntaxKind.SpreadAssignment:
    case ts9.SyntaxKind.SpreadElement:
      return isInDestructuringAssignment(
        parent
      ) ? 2 /* Write */ : 1 /* Read */;
    case ts9.SyntaxKind.ArrowFunction:
      return parent.body === node ? 1 /* Read */ : 2 /* Write */;
    case ts9.SyntaxKind.AsExpression:
    case ts9.SyntaxKind.NonNullExpression:
    case ts9.SyntaxKind.ParenthesizedExpression:
    case ts9.SyntaxKind.TypeAssertionExpression:
      return getAccessKind(parent);
    case ts9.SyntaxKind.AwaitExpression:
    case ts9.SyntaxKind.CallExpression:
    case ts9.SyntaxKind.CaseClause:
    case ts9.SyntaxKind.ComputedPropertyName:
    case ts9.SyntaxKind.ConditionalExpression:
    case ts9.SyntaxKind.Decorator:
    case ts9.SyntaxKind.DoStatement:
    case ts9.SyntaxKind.ElementAccessExpression:
    case ts9.SyntaxKind.ExpressionStatement:
    case ts9.SyntaxKind.ForStatement:
    case ts9.SyntaxKind.IfStatement:
    case ts9.SyntaxKind.JsxElement:
    case ts9.SyntaxKind.JsxExpression:
    case ts9.SyntaxKind.JsxOpeningElement:
    case ts9.SyntaxKind.JsxSelfClosingElement:
    case ts9.SyntaxKind.JsxSpreadAttribute:
    case ts9.SyntaxKind.NewExpression:
    case ts9.SyntaxKind.ReturnStatement:
    case ts9.SyntaxKind.SwitchStatement:
    case ts9.SyntaxKind.TaggedTemplateExpression:
    case ts9.SyntaxKind.TemplateSpan:
    case ts9.SyntaxKind.ThrowStatement:
    case ts9.SyntaxKind.TypeOfExpression:
    case ts9.SyntaxKind.VoidExpression:
    case ts9.SyntaxKind.WhileStatement:
    case ts9.SyntaxKind.WithStatement:
    case ts9.SyntaxKind.YieldExpression:
      return 1 /* Read */;
    case ts9.SyntaxKind.BinaryExpression:
      return parent.right === node ? 1 /* Read */ : !isAssignmentKind(parent.operatorToken.kind) ? 1 /* Read */ : parent.operatorToken.kind === ts9.SyntaxKind.EqualsToken ? 2 /* Write */ : 3 /* ReadWrite */;
    case ts9.SyntaxKind.BindingElement:
    case ts9.SyntaxKind.EnumMember:
    case ts9.SyntaxKind.JsxAttribute:
    case ts9.SyntaxKind.Parameter:
    case ts9.SyntaxKind.PropertyDeclaration:
    case ts9.SyntaxKind.VariableDeclaration:
      return parent.initializer === node ? 1 /* Read */ : 0 /* None */;
    case ts9.SyntaxKind.DeleteExpression:
      return 4 /* Delete */;
    case ts9.SyntaxKind.ExportAssignment:
      return parent.isExportEquals ? 1 /* Read */ : 0 /* None */;
    case ts9.SyntaxKind.ExpressionWithTypeArguments:
      return parent.parent.token === ts9.SyntaxKind.ExtendsKeyword && parent.parent.parent.kind !== ts9.SyntaxKind.InterfaceDeclaration ? 1 /* Read */ : 0 /* None */;
    case ts9.SyntaxKind.ForInStatement:
    case ts9.SyntaxKind.ForOfStatement:
      return parent.initializer === node ? 2 /* Write */ : 1 /* Read */;
    case ts9.SyntaxKind.PostfixUnaryExpression:
      return 3 /* ReadWrite */;
    case ts9.SyntaxKind.PrefixUnaryExpression:
      return parent.operator === ts9.SyntaxKind.PlusPlusToken || parent.operator === ts9.SyntaxKind.MinusMinusToken ? 3 /* ReadWrite */ : 1 /* Read */;
    case ts9.SyntaxKind.PropertyAccessExpression:
      return parent.expression === node ? 1 /* Read */ : 0 /* None */;
    case ts9.SyntaxKind.PropertyAssignment:
      return parent.name === node ? 0 /* None */ : isInDestructuringAssignment(parent) ? 2 /* Write */ : 1 /* Read */;
    case ts9.SyntaxKind.ShorthandPropertyAssignment:
      return parent.objectAssignmentInitializer === node ? 1 /* Read */ : isInDestructuringAssignment(parent) ? 2 /* Write */ : 1 /* Read */;
  }
  return 0 /* None */;
}
function isInDestructuringAssignment(node) {
  switch (node.kind) {
    case ts9.SyntaxKind.ShorthandPropertyAssignment:
      if (node.objectAssignmentInitializer !== void 0) {
        return true;
      }
    // falls through
    case ts9.SyntaxKind.PropertyAssignment:
    case ts9.SyntaxKind.SpreadAssignment:
      node = node.parent;
      break;
    case ts9.SyntaxKind.SpreadElement:
      if (node.parent.kind !== ts9.SyntaxKind.ArrayLiteralExpression) {
        return false;
      }
      node = node.parent;
  }
  while (true) {
    switch (node.parent.kind) {
      case ts9.SyntaxKind.ArrayLiteralExpression:
      case ts9.SyntaxKind.ObjectLiteralExpression:
        node = node.parent;
        break;
      case ts9.SyntaxKind.BinaryExpression:
        return node.parent.left === node && node.parent.operatorToken.kind === ts9.SyntaxKind.EqualsToken;
      case ts9.SyntaxKind.ForOfStatement:
        return node.parent.initializer === node;
      case ts9.SyntaxKind.PropertyAssignment:
      case ts9.SyntaxKind.SpreadAssignment:
        node = node.parent.parent;
        break;
      case ts9.SyntaxKind.SpreadElement:
        if (node.parent.parent.kind !== ts9.SyntaxKind.ArrayLiteralExpression) {
          return false;
        }
        node = node.parent.parent;
        break;
      default:
        return false;
    }
  }
}
function isAbstractKeyword(node) {
  return node.kind === ts9.SyntaxKind.AbstractKeyword;
}
function isAccessorKeyword(node) {
  return node.kind === ts9.SyntaxKind.AccessorKeyword;
}
function isAnyKeyword(node) {
  return node.kind === ts9.SyntaxKind.AnyKeyword;
}
function isAssertKeyword(node) {
  return node.kind === ts9.SyntaxKind.AssertKeyword;
}
function isAssertsKeyword(node) {
  return node.kind === ts9.SyntaxKind.AssertsKeyword;
}
function isAsyncKeyword(node) {
  return node.kind === ts9.SyntaxKind.AsyncKeyword;
}
function isAwaitKeyword(node) {
  return node.kind === ts9.SyntaxKind.AwaitKeyword;
}
function isBigIntKeyword(node) {
  return node.kind === ts9.SyntaxKind.BigIntKeyword;
}
function isBooleanKeyword(node) {
  return node.kind === ts9.SyntaxKind.BooleanKeyword;
}
function isColonToken(node) {
  return node.kind === ts9.SyntaxKind.ColonToken;
}
function isConstKeyword(node) {
  return node.kind === ts9.SyntaxKind.ConstKeyword;
}
function isDeclareKeyword(node) {
  return node.kind === ts9.SyntaxKind.DeclareKeyword;
}
function isDefaultKeyword(node) {
  return node.kind === ts9.SyntaxKind.DefaultKeyword;
}
function isDotToken(node) {
  return node.kind === ts9.SyntaxKind.DotToken;
}
function isEndOfFileToken(node) {
  return node.kind === ts9.SyntaxKind.EndOfFileToken;
}
function isEqualsGreaterThanToken(node) {
  return node.kind === ts9.SyntaxKind.EqualsGreaterThanToken;
}
function isEqualsToken(node) {
  return node.kind === ts9.SyntaxKind.EqualsToken;
}
function isExclamationToken(node) {
  return node.kind === ts9.SyntaxKind.ExclamationToken;
}
function isExportKeyword(node) {
  return node.kind === ts9.SyntaxKind.ExportKeyword;
}
function isFalseKeyword(node) {
  return node.kind === ts9.SyntaxKind.FalseKeyword;
}
function isFalseLiteral(node) {
  return node.kind === ts9.SyntaxKind.FalseKeyword;
}
function isImportExpression(node) {
  return node.kind === ts9.SyntaxKind.ImportKeyword;
}
function isImportKeyword(node) {
  return node.kind === ts9.SyntaxKind.ImportKeyword;
}
function isInKeyword(node) {
  return node.kind === ts9.SyntaxKind.InKeyword;
}
function isJSDocText(node) {
  return node.kind === ts9.SyntaxKind.JSDocText;
}
function isJsonMinusNumericLiteral(node) {
  return node.kind === ts9.SyntaxKind.PrefixUnaryExpression;
}
function isNeverKeyword(node) {
  return node.kind === ts9.SyntaxKind.NeverKeyword;
}
function isNullKeyword(node) {
  return node.kind === ts9.SyntaxKind.NullKeyword;
}
function isNullLiteral(node) {
  return node.kind === ts9.SyntaxKind.NullKeyword;
}
function isNumberKeyword(node) {
  return node.kind === ts9.SyntaxKind.NumberKeyword;
}
function isObjectKeyword(node) {
  return node.kind === ts9.SyntaxKind.ObjectKeyword;
}
function isOutKeyword(node) {
  return node.kind === ts9.SyntaxKind.OutKeyword;
}
function isOverrideKeyword(node) {
  return node.kind === ts9.SyntaxKind.OverrideKeyword;
}
function isPrivateKeyword(node) {
  return node.kind === ts9.SyntaxKind.PrivateKeyword;
}
function isProtectedKeyword(node) {
  return node.kind === ts9.SyntaxKind.ProtectedKeyword;
}
function isPublicKeyword(node) {
  return node.kind === ts9.SyntaxKind.PublicKeyword;
}
function isQuestionDotToken(node) {
  return node.kind === ts9.SyntaxKind.QuestionDotToken;
}
function isQuestionToken(node) {
  return node.kind === ts9.SyntaxKind.QuestionToken;
}
function isReadonlyKeyword(node) {
  return node.kind === ts9.SyntaxKind.ReadonlyKeyword;
}
function isStaticKeyword(node) {
  return node.kind === ts9.SyntaxKind.StaticKeyword;
}
function isStringKeyword(node) {
  return node.kind === ts9.SyntaxKind.StringKeyword;
}
function isSuperExpression(node) {
  return node.kind === ts9.SyntaxKind.SuperKeyword;
}
function isSuperKeyword(node) {
  return node.kind === ts9.SyntaxKind.SuperKeyword;
}
function isSymbolKeyword(node) {
  return node.kind === ts9.SyntaxKind.SymbolKeyword;
}
function isSyntaxList(node) {
  return node.kind === ts9.SyntaxKind.SyntaxList;
}
function isThisExpression(node) {
  return node.kind === ts9.SyntaxKind.ThisKeyword;
}
function isThisKeyword(node) {
  return node.kind === ts9.SyntaxKind.ThisKeyword;
}
function isTrueKeyword(node) {
  return node.kind === ts9.SyntaxKind.TrueKeyword;
}
function isTrueLiteral(node) {
  return node.kind === ts9.SyntaxKind.TrueKeyword;
}
function isUndefinedKeyword(node) {
  return node.kind === ts9.SyntaxKind.UndefinedKeyword;
}
function isUnknownKeyword(node) {
  return node.kind === ts9.SyntaxKind.UnknownKeyword;
}
function isVoidKeyword(node) {
  return node.kind === ts9.SyntaxKind.VoidKeyword;
}
function hasDecorators(node) {
  return ts9.isParameter(node) || ts9.isPropertyDeclaration(node) || ts9.isMethodDeclaration(node) || ts9.isGetAccessorDeclaration(node) || ts9.isSetAccessorDeclaration(node) || ts9.isClassExpression(node) || ts9.isClassDeclaration(node);
}
function hasExpressionInitializer(node) {
  return ts9.isVariableDeclaration(node) || ts9.isParameter(node) || ts9.isBindingElement(node) || ts9.isPropertyDeclaration(node) || ts9.isPropertyAssignment(node) || ts9.isEnumMember(node);
}
function hasInitializer(node) {
  return hasExpressionInitializer(node) || ts9.isForStatement(node) || ts9.isForInStatement(node) || ts9.isForOfStatement(node) || ts9.isJsxAttribute(node);
}
function hasJSDoc(node) {
  if (
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isAccessorDeclaration(node) || ts9.isArrowFunction(node) || ts9.isBlock(node) || ts9.isBreakStatement(node) || ts9.isCallSignatureDeclaration(node) || ts9.isCaseClause(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isClassLikeDeclaration(node) || ts9.isConstructorDeclaration(node) || ts9.isConstructorTypeNode(node) || ts9.isConstructSignatureDeclaration(node) || ts9.isContinueStatement(node) || ts9.isDebuggerStatement(node) || ts9.isDoStatement(node) || ts9.isEmptyStatement(node) || isEndOfFileToken(node) || ts9.isEnumDeclaration(node) || ts9.isEnumMember(node) || ts9.isExportAssignment(node) || ts9.isExportDeclaration(node) || ts9.isExportSpecifier(node) || ts9.isExpressionStatement(node) || ts9.isForInStatement(node) || ts9.isForOfStatement(node) || ts9.isForStatement(node) || ts9.isFunctionDeclaration(node) || ts9.isFunctionExpression(node) || ts9.isFunctionTypeNode(node) || ts9.isIfStatement(node) || ts9.isImportDeclaration(node) || ts9.isImportEqualsDeclaration(node) || ts9.isIndexSignatureDeclaration(node) || ts9.isInterfaceDeclaration(node) || ts9.isJSDocFunctionType(node) || ts9.isLabeledStatement(node) || ts9.isMethodDeclaration(node) || ts9.isMethodSignature(node) || ts9.isModuleDeclaration(node) || ts9.isNamedTupleMember(node) || ts9.isNamespaceExportDeclaration(node) || ts9.isParameter(node) || ts9.isParenthesizedExpression(node) || ts9.isPropertyAssignment(node) || ts9.isPropertyDeclaration(node) || ts9.isPropertySignature(node) || ts9.isReturnStatement(node) || ts9.isShorthandPropertyAssignment(node) || ts9.isSpreadAssignment(node) || ts9.isSwitchStatement(node) || ts9.isThrowStatement(node) || ts9.isTryStatement(node) || ts9.isTypeAliasDeclaration(node) || ts9.isVariableDeclaration(node) || ts9.isVariableStatement(node) || ts9.isWhileStatement(node) || ts9.isWithStatement(node)
  ) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4) && ts9.isClassStaticBlockDeclaration(node)) {
    return true;
  }
  if (isTsVersionAtLeast(5, 0) && (ts9.isBinaryExpression(node) || ts9.isElementAccessExpression(node) || ts9.isIdentifier(node) || ts9.isJSDocSignature(node) || ts9.isObjectLiteralExpression(node) || ts9.isPropertyAccessExpression(node) || ts9.isTypeParameterDeclaration(node))) {
    return true;
  }
  return false;
}
function hasModifiers(node) {
  return ts9.isTypeParameterDeclaration(node) || ts9.isParameter(node) || ts9.isConstructorTypeNode(node) || ts9.isPropertySignature(node) || ts9.isPropertyDeclaration(node) || ts9.isMethodSignature(node) || ts9.isMethodDeclaration(node) || ts9.isConstructorDeclaration(node) || ts9.isGetAccessorDeclaration(node) || ts9.isSetAccessorDeclaration(node) || ts9.isIndexSignatureDeclaration(node) || ts9.isFunctionExpression(node) || ts9.isArrowFunction(node) || ts9.isClassExpression(node) || ts9.isVariableStatement(node) || ts9.isFunctionDeclaration(node) || ts9.isClassDeclaration(node) || ts9.isInterfaceDeclaration(node) || ts9.isTypeAliasDeclaration(node) || ts9.isEnumDeclaration(node) || ts9.isModuleDeclaration(node) || ts9.isImportEqualsDeclaration(node) || ts9.isImportDeclaration(node) || ts9.isExportAssignment(node) || ts9.isExportDeclaration(node);
}
function hasType(node) {
  return isSignatureDeclaration(node) || ts9.isVariableDeclaration(node) || ts9.isParameter(node) || ts9.isPropertySignature(node) || ts9.isPropertyDeclaration(node) || ts9.isTypePredicateNode(node) || ts9.isParenthesizedTypeNode(node) || ts9.isTypeOperatorNode(node) || ts9.isMappedTypeNode(node) || ts9.isAssertionExpression(node) || ts9.isTypeAliasDeclaration(node) || ts9.isJSDocTypeExpression(node) || ts9.isJSDocNonNullableType(node) || ts9.isJSDocNullableType(node) || ts9.isJSDocOptionalType(node) || ts9.isJSDocVariadicType(node);
}
function hasTypeArguments(node) {
  return ts9.isCallExpression(node) || ts9.isNewExpression(node) || ts9.isTaggedTemplateExpression(node) || ts9.isJsxOpeningElement(node) || ts9.isJsxSelfClosingElement(node);
}
function isAccessExpression(node) {
  return ts9.isPropertyAccessExpression(node) || ts9.isElementAccessExpression(node);
}
function isAccessibilityModifier(node) {
  return isPublicKeyword(node) || isPrivateKeyword(node) || isProtectedKeyword(node);
}
function isAccessorDeclaration(node) {
  return ts9.isGetAccessorDeclaration(node) || ts9.isSetAccessorDeclaration(node);
}
function isArrayBindingElement(node) {
  return ts9.isBindingElement(node) || ts9.isOmittedExpression(node);
}
function isArrayBindingOrAssignmentPattern(node) {
  return ts9.isArrayBindingPattern(node) || ts9.isArrayLiteralExpression(node);
}
function isAssignmentPattern(node) {
  return ts9.isObjectLiteralExpression(node) || ts9.isArrayLiteralExpression(node);
}
function isBindingOrAssignmentElementRestIndicator(node) {
  if (ts9.isSpreadElement(node) || ts9.isSpreadAssignment(node)) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4)) {
    return ts9.isDotDotDotToken(node);
  }
  return false;
}
function isBindingOrAssignmentElementTarget(node) {
  return isBindingOrAssignmentPattern(node) || ts9.isIdentifier(node) || ts9.isPropertyAccessExpression(node) || ts9.isElementAccessExpression(node) || ts9.isOmittedExpression(node);
}
function isBindingOrAssignmentPattern(node) {
  return isObjectBindingOrAssignmentPattern(node) || isArrayBindingOrAssignmentPattern(node);
}
function isBindingPattern(node) {
  return ts9.isObjectBindingPattern(node) || ts9.isArrayBindingPattern(node);
}
function isBlockLike(node) {
  return ts9.isSourceFile(node) || ts9.isBlock(node) || ts9.isModuleBlock(node) || ts9.isCaseOrDefaultClause(node);
}
function isBooleanLiteral(node) {
  return isTrueLiteral(node) || isFalseLiteral(node);
}
function isClassLikeDeclaration(node) {
  return ts9.isClassDeclaration(node) || ts9.isClassExpression(node);
}
function isClassMemberModifier(node) {
  return isAccessibilityModifier(node) || isReadonlyKeyword(node) || isStaticKeyword(node) || isAccessorKeyword(node);
}
function isDeclarationName(node) {
  return ts9.isIdentifier(node) || ts9.isPrivateIdentifier(node) || ts9.isStringLiteralLike(node) || ts9.isNumericLiteral(node) || ts9.isComputedPropertyName(node) || ts9.isElementAccessExpression(node) || isBindingPattern(node) || isEntityNameExpression(node);
}
function isDeclarationWithTypeParameterChildren(node) {
  return isSignatureDeclaration(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
  isClassLikeDeclaration(node) || ts9.isInterfaceDeclaration(node) || ts9.isTypeAliasDeclaration(node) || ts9.isJSDocTemplateTag(node);
}
function isDeclarationWithTypeParameters(node) {
  return isDeclarationWithTypeParameterChildren(node) || ts9.isJSDocTypedefTag(node) || ts9.isJSDocCallbackTag(node) || ts9.isJSDocSignature(node);
}
function isDestructuringPattern(node) {
  return isBindingPattern(node) || ts9.isObjectLiteralExpression(node) || ts9.isArrayLiteralExpression(node);
}
function isEntityNameExpression(node) {
  return ts9.isIdentifier(node) || isPropertyAccessEntityNameExpression(node);
}
function isEntityNameOrEntityNameExpression(node) {
  return ts9.isEntityName(node) || isEntityNameExpression(node);
}
function isForInOrOfStatement(node) {
  return ts9.isForInStatement(node) || ts9.isForOfStatement(node);
}
function isFunctionLikeDeclaration(node) {
  return ts9.isFunctionDeclaration(node) || ts9.isMethodDeclaration(node) || ts9.isGetAccessorDeclaration(node) || ts9.isSetAccessorDeclaration(node) || ts9.isConstructorDeclaration(node) || ts9.isFunctionExpression(node) || ts9.isArrowFunction(node);
}
function isJSDocComment(node) {
  if (isJSDocText(node)) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4)) {
    return ts9.isJSDocLink(node) || ts9.isJSDocLinkCode(node) || ts9.isJSDocLinkPlain(node);
  }
  return false;
}
function isJSDocNamespaceBody(node) {
  return ts9.isIdentifier(node) || isJSDocNamespaceDeclaration(node);
}
function isJSDocTypeReferencingNode(node) {
  return ts9.isJSDocVariadicType(node) || ts9.isJSDocOptionalType(node) || ts9.isJSDocNullableType(node) || ts9.isJSDocNonNullableType(node);
}
function isJsonObjectExpression(node) {
  return ts9.isObjectLiteralExpression(node) || ts9.isArrayLiteralExpression(node) || isJsonMinusNumericLiteral(node) || ts9.isNumericLiteral(node) || ts9.isStringLiteral(node) || isBooleanLiteral(node) || isNullLiteral(node);
}
function isJsxAttributeLike(node) {
  return ts9.isJsxAttribute(node) || ts9.isJsxSpreadAttribute(node);
}
function isJsxAttributeValue(node) {
  return ts9.isStringLiteral(node) || ts9.isJsxExpression(node) || ts9.isJsxElement(node) || ts9.isJsxSelfClosingElement(node) || ts9.isJsxFragment(node);
}
function isJsxChild(node) {
  return ts9.isJsxText(node) || ts9.isJsxExpression(node) || ts9.isJsxElement(node) || ts9.isJsxSelfClosingElement(node) || ts9.isJsxFragment(node);
}
function isJsxTagNameExpression(node) {
  return ts9.isIdentifier(node) || isThisExpression(node) || isJsxTagNamePropertyAccess(node);
}
function isLiteralToken(node) {
  return ts9.isNumericLiteral(node) || ts9.isBigIntLiteral(node) || ts9.isStringLiteral(node) || ts9.isJsxText(node) || ts9.isRegularExpressionLiteral(node) || ts9.isNoSubstitutionTemplateLiteral(node);
}
function isModuleBody(node) {
  return isNamespaceBody(node) || isJSDocNamespaceBody(node);
}
function isModuleName(node) {
  return ts9.isIdentifier(node) || ts9.isStringLiteral(node);
}
function isModuleReference(node) {
  return ts9.isEntityName(node) || ts9.isExternalModuleReference(node);
}
function isNamedImportBindings(node) {
  return ts9.isNamespaceImport(node) || ts9.isNamedImports(node);
}
function isNamedImportsOrExports(node) {
  return ts9.isNamedImports(node) || ts9.isNamedExports(node);
}
function isNamespaceBody(node) {
  return ts9.isModuleBlock(node) || isNamespaceDeclaration(node);
}
function isObjectBindingOrAssignmentElement(node) {
  return ts9.isBindingElement(node) || ts9.isPropertyAssignment(node) || ts9.isShorthandPropertyAssignment(node) || ts9.isSpreadAssignment(node);
}
function isObjectBindingOrAssignmentPattern(node) {
  return ts9.isObjectBindingPattern(node) || ts9.isObjectLiteralExpression(node);
}
function isObjectTypeDeclaration(node) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isClassLikeDeclaration(node) || ts9.isInterfaceDeclaration(node) || ts9.isTypeLiteralNode(node)
  );
}
function isParameterPropertyModifier(node) {
  return isAccessibilityModifier(node) || isReadonlyKeyword(node);
}
function isPropertyNameLiteral(node) {
  return ts9.isIdentifier(node) || ts9.isStringLiteralLike(node) || ts9.isNumericLiteral(node);
}
function isPseudoLiteralToken(node) {
  return ts9.isTemplateHead(node) || ts9.isTemplateMiddle(node) || ts9.isTemplateTail(node);
}
function isSignatureDeclaration(node) {
  return ts9.isCallSignatureDeclaration(node) || ts9.isConstructSignatureDeclaration(node) || ts9.isMethodSignature(node) || ts9.isIndexSignatureDeclaration(node) || ts9.isFunctionTypeNode(node) || ts9.isConstructorTypeNode(node) || ts9.isJSDocFunctionType(node) || ts9.isFunctionDeclaration(node) || ts9.isMethodDeclaration(node) || ts9.isConstructorDeclaration(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
  isAccessorDeclaration(node) || ts9.isFunctionExpression(node) || ts9.isArrowFunction(node);
}
function isSuperProperty(node) {
  return isSuperPropertyAccessExpression(node) || isSuperElementAccessExpression(node);
}
function isTypeOnlyCompatibleAliasDeclaration(node) {
  if (ts9.isImportClause(node) || ts9.isImportEqualsDeclaration(node) || ts9.isNamespaceImport(node) || ts9.isImportOrExportSpecifier(node)) {
    return true;
  }
  if (isTsVersionAtLeast(5, 0) && (ts9.isExportDeclaration(node) || ts9.isNamespaceExport(node))) {
    return true;
  }
  return false;
}
function isTypeReferenceType(node) {
  return ts9.isTypeReferenceNode(node) || ts9.isExpressionWithTypeArguments(node);
}
function isUnionOrIntersectionTypeNode(node) {
  return ts9.isUnionTypeNode(node) || ts9.isIntersectionTypeNode(node);
}
function isVariableLikeDeclaration(node) {
  return ts9.isVariableDeclaration(node) || ts9.isParameter(node) || ts9.isBindingElement(node) || ts9.isPropertyDeclaration(node) || ts9.isPropertyAssignment(node) || ts9.isPropertySignature(node) || ts9.isJsxAttribute(node) || ts9.isShorthandPropertyAssignment(node) || ts9.isEnumMember(node) || ts9.isJSDocPropertyTag(node) || ts9.isJSDocParameterTag(node);
}

// src/nodes/typeGuards/compound.ts
function isConstAssertionExpression(node) {
  return ts9.isTypeReferenceNode(node.type) && ts9.isIdentifier(node.type.typeName) && node.type.typeName.escapedText === "const";
}
function isIterationStatement(node) {
  switch (node.kind) {
    case ts9.SyntaxKind.DoStatement:
    case ts9.SyntaxKind.ForInStatement:
    case ts9.SyntaxKind.ForOfStatement:
    case ts9.SyntaxKind.ForStatement:
    case ts9.SyntaxKind.WhileStatement:
      return true;
    default:
      return false;
  }
}
function isJSDocNamespaceDeclaration(node) {
  return ts9.isModuleDeclaration(node) && ts9.isIdentifier(node.name) && (node.body === void 0 || isJSDocNamespaceBody(node.body));
}
function isJsxTagNamePropertyAccess(node) {
  return ts9.isPropertyAccessExpression(node) && // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts < 5
  isJsxTagNameExpression(node.expression);
}
function isNamedDeclarationWithName(node) {
  return "name" in node && node.name !== void 0 && node.name !== null && isDeclarationName(node.name);
}
function isNamespaceDeclaration(node) {
  return ts9.isModuleDeclaration(node) && ts9.isIdentifier(node.name) && node.body !== void 0 && isNamespaceBody(node.body);
}
function isNumericOrStringLikeLiteral(node) {
  switch (node.kind) {
    case ts9.SyntaxKind.NoSubstitutionTemplateLiteral:
    case ts9.SyntaxKind.NumericLiteral:
    case ts9.SyntaxKind.StringLiteral:
      return true;
    default:
      return false;
  }
}
function isPropertyAccessEntityNameExpression(node) {
  return ts9.isPropertyAccessExpression(node) && ts9.isIdentifier(node.name) && isEntityNameExpression(node.expression);
}
function isSuperElementAccessExpression(node) {
  return ts9.isElementAccessExpression(node) && isSuperExpression(node.expression);
}
function isSuperPropertyAccessExpression(node) {
  return ts9.isPropertyAccessExpression(node) && isSuperExpression(node.expression);
}
function isFunctionScopeBoundary(node) {
  switch (node.kind) {
    case ts9.SyntaxKind.ArrowFunction:
    case ts9.SyntaxKind.CallSignature:
    case ts9.SyntaxKind.ClassDeclaration:
    case ts9.SyntaxKind.ClassExpression:
    case ts9.SyntaxKind.Constructor:
    case ts9.SyntaxKind.ConstructorType:
    case ts9.SyntaxKind.ConstructSignature:
    case ts9.SyntaxKind.EnumDeclaration:
    case ts9.SyntaxKind.FunctionDeclaration:
    case ts9.SyntaxKind.FunctionExpression:
    case ts9.SyntaxKind.FunctionType:
    case ts9.SyntaxKind.GetAccessor:
    case ts9.SyntaxKind.MethodDeclaration:
    case ts9.SyntaxKind.MethodSignature:
    case ts9.SyntaxKind.ModuleDeclaration:
    case ts9.SyntaxKind.SetAccessor:
      return true;
    case ts9.SyntaxKind.SourceFile:
      return ts9.isExternalModule(node);
    default:
      return false;
  }
}
function isIntrinsicAnyType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Any);
}
function isIntrinsicBigIntType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.BigInt);
}
function isIntrinsicBooleanType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Boolean);
}
function isIntrinsicErrorType(type) {
  return isIntrinsicType(type) && type.intrinsicName === "error";
}
function isIntrinsicESSymbolType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.ESSymbol);
}
var IntrinsicTypeFlags = ts9.TypeFlags.Intrinsic ?? ts9.TypeFlags.Any | ts9.TypeFlags.Unknown | ts9.TypeFlags.String | ts9.TypeFlags.Number | ts9.TypeFlags.BigInt | ts9.TypeFlags.Boolean | ts9.TypeFlags.BooleanLiteral | ts9.TypeFlags.ESSymbol | ts9.TypeFlags.Void | ts9.TypeFlags.Undefined | ts9.TypeFlags.Null | ts9.TypeFlags.Never | ts9.TypeFlags.NonPrimitive;
function isIntrinsicNeverType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Never);
}
function isIntrinsicNonPrimitiveType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.NonPrimitive);
}
function isIntrinsicNullType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Null);
}
function isIntrinsicNumberType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Number);
}
function isIntrinsicStringType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.String);
}
function isIntrinsicType(type) {
  return isTypeFlagSet(type, IntrinsicTypeFlags);
}
function isIntrinsicUndefinedType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Undefined);
}
function isIntrinsicUnknownType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Unknown);
}
function isIntrinsicVoidType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Void);
}
function isConditionalType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Conditional);
}
function isEnumType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Enum);
}
function isFreshableType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Freshable);
}
function isIndexedAccessType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.IndexedAccess);
}
function isIndexType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Index);
}
function isInstantiableType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Instantiable);
}
function isIntersectionType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Intersection);
}
function isObjectType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Object);
}
function isStringMappingType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.StringMapping);
}
function isSubstitutionType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Substitution);
}
function isTypeParameter(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.TypeParameter);
}
function isTypeVariable(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.TypeVariable);
}
function isUnionOrIntersectionType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.UnionOrIntersection);
}
function isUnionType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Union);
}
function isUniqueESSymbolType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.UniqueESSymbol);
}

// src/types/typeGuards/objects.ts
function isEvolvingArrayType(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9.ObjectFlags.EvolvingArray);
}
function isTupleType(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9.ObjectFlags.Tuple);
}
function isTypeReference(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9.ObjectFlags.Reference);
}

// src/types/typeGuards/compound.ts
function isFreshableIntrinsicType(type) {
  return isIntrinsicType(type) && isFreshableType(type);
}
function isTupleTypeReference(type) {
  return isTypeReference(type) && isTupleType(type.target);
}
function isBigIntLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.BigIntLiteral);
}
function isBooleanLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.BooleanLiteral);
}
function isFalseLiteralType(type) {
  return isBooleanLiteralType(type) && type.intrinsicName === "false";
}
function isLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.Literal);
}
function isNumberLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.NumberLiteral);
}
function isStringLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.StringLiteral);
}
function isTemplateLiteralType(type) {
  return isTypeFlagSet(type, ts9.TypeFlags.TemplateLiteral);
}
function isTrueLiteralType(type) {
  return isBooleanLiteralType(type) && type.intrinsicName === "true";
}

// src/types/getters.ts
function getCallSignaturesOfType(type) {
  if (isUnionType(type)) {
    const signatures = [];
    for (const subType of type.types) {
      signatures.push(...getCallSignaturesOfType(subType));
    }
    return signatures;
  }
  if (isIntersectionType(type)) {
    let signatures;
    for (const subType of type.types) {
      const sig = getCallSignaturesOfType(subType);
      if (sig.length !== 0) {
        if (signatures !== void 0) {
          return [];
        }
        signatures = sig;
      }
    }
    return signatures === void 0 ? [] : signatures;
  }
  return type.getCallSignatures();
}
function getPropertyOfType(type, name) {
  if (!name.startsWith("__")) {
    return type.getProperty(name);
  }
  return type.getProperties().find((s) => s.escapedName === name);
}
function getWellKnownSymbolPropertyOfType(type, wellKnownSymbolName, typeChecker) {
  const prefix = "__@" + wellKnownSymbolName;
  for (const prop of type.getProperties()) {
    if (!prop.name.startsWith(prefix)) {
      continue;
    }
    const declaration = prop.valueDeclaration ?? prop.getDeclarations()?.[0];
    if (!declaration || !isNamedDeclarationWithName(declaration) || declaration.name === void 0 || !ts9.isComputedPropertyName(declaration.name)) {
      continue;
    }
    const globalSymbol = typeChecker.getApparentType(
      typeChecker.getTypeAtLocation(declaration.name.expression)
    ).symbol;
    if (prop.escapedName === getPropertyNameOfWellKnownSymbol(
      typeChecker,
      globalSymbol,
      wellKnownSymbolName
    )) {
      return prop;
    }
  }
  return void 0;
}
function getPropertyNameOfWellKnownSymbol(typeChecker, symbolConstructor, symbolName) {
  const knownSymbol = symbolConstructor && typeChecker.getTypeOfSymbolAtLocation(
    symbolConstructor,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    symbolConstructor.valueDeclaration
  ).getProperty(symbolName);
  const knownSymbolType = knownSymbol && typeChecker.getTypeOfSymbolAtLocation(
    knownSymbol,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    knownSymbol.valueDeclaration
  );
  if (knownSymbolType && isUniqueESSymbolType(knownSymbolType)) {
    return knownSymbolType.escapedName;
  }
  return "__@" + symbolName;
}
function isBindableObjectDefinePropertyCall(node) {
  return node.arguments.length === 3 && isEntityNameExpression(node.arguments[0]) && isNumericOrStringLikeLiteral(node.arguments[1]) && ts9.isPropertyAccessExpression(node.expression) && node.expression.name.escapedText === "defineProperty" && ts9.isIdentifier(node.expression.expression) && node.expression.expression.escapedText === "Object";
}
function isInConstContext(node, typeChecker) {
  let current = node;
  while (true) {
    const parent = current.parent;
    outer: switch (parent.kind) {
      case ts9.SyntaxKind.ArrayLiteralExpression:
      case ts9.SyntaxKind.ObjectLiteralExpression:
      case ts9.SyntaxKind.ParenthesizedExpression:
      case ts9.SyntaxKind.TemplateExpression:
        current = parent;
        break;
      case ts9.SyntaxKind.AsExpression:
      case ts9.SyntaxKind.TypeAssertionExpression:
        return isConstAssertionExpression(parent);
      case ts9.SyntaxKind.CallExpression: {
        if (!ts9.isExpression(current)) {
          return false;
        }
        const functionSignature = typeChecker.getResolvedSignature(
          parent
        );
        if (functionSignature === void 0) {
          return false;
        }
        const argumentIndex = parent.arguments.indexOf(
          current
        );
        if (argumentIndex < 0) {
          return false;
        }
        const parameterSymbol = functionSignature.getParameters()[argumentIndex];
        if (parameterSymbol === void 0 || !("links" in parameterSymbol)) {
          return false;
        }
        const parameterSymbolLinks = parameterSymbol.links;
        const propertySymbol = parameterSymbolLinks.type?.getProperties()?.[argumentIndex];
        if (propertySymbol === void 0 || !("links" in propertySymbol)) {
          return false;
        }
        return !!propertySymbol.links && isTransientSymbolLinksFlagSet(
          propertySymbol.links,
          ts9.CheckFlags.Readonly
        );
      }
      case ts9.SyntaxKind.PrefixUnaryExpression:
        if (current.kind !== ts9.SyntaxKind.NumericLiteral) {
          return false;
        }
        switch (parent.operator) {
          case ts9.SyntaxKind.MinusToken:
          case ts9.SyntaxKind.PlusToken:
            current = parent;
            break outer;
          default:
            return false;
        }
      case ts9.SyntaxKind.PropertyAssignment:
        if (parent.initializer !== current) {
          return false;
        }
        current = parent.parent;
        break;
      case ts9.SyntaxKind.ShorthandPropertyAssignment:
        current = parent.parent;
        break;
      default:
        return false;
    }
  }
}

// src/types/utilities.ts
function intersectionConstituents(type) {
  return isIntersectionType(type) ? type.types : [type];
}
var intersectionTypeParts = intersectionConstituents;
function isFalsyType(type) {
  if (isTypeFlagSet(
    type,
    ts9.TypeFlags.Undefined | ts9.TypeFlags.Null | ts9.TypeFlags.Void
  )) {
    return true;
  }
  if (typeIsLiteral(type)) {
    if (typeof type.value === "object") {
      return type.value.base10Value === "0";
    } else {
      return !type.value;
    }
  }
  return isFalseLiteralType(type);
}
function isPropertyReadonlyInType(type, name, typeChecker) {
  let seenProperty = false;
  let seenReadonlySignature = false;
  for (const subType of unionConstituents(type)) {
    if (getPropertyOfType(subType, name) === void 0) {
      const index = (isNumericPropertyName(name) ? typeChecker.getIndexInfoOfType(subType, ts9.IndexKind.Number) : void 0) ?? typeChecker.getIndexInfoOfType(subType, ts9.IndexKind.String);
      if (index?.isReadonly) {
        if (seenProperty) {
          return true;
        }
        seenReadonlySignature = true;
      }
    } else if (seenReadonlySignature || isReadonlyPropertyIntersection(subType, name, typeChecker)) {
      return true;
    } else {
      seenProperty = true;
    }
  }
  return false;
}
function isThenableType(typeChecker, node, type = typeChecker.getTypeAtLocation(node)) {
  for (const constituent of unionConstituents(
    typeChecker.getApparentType(type)
  )) {
    const then = constituent.getProperty("then");
    if (then === void 0) {
      continue;
    }
    const thenType = typeChecker.getTypeOfSymbolAtLocation(then, node);
    for (const subConstituent of unionConstituents(thenType)) {
      for (const signature of subConstituent.getCallSignatures()) {
        if (signature.parameters.length !== 0 && isCallback(typeChecker, signature.parameters[0], node)) {
          return true;
        }
      }
    }
  }
  return false;
}
function symbolHasReadonlyDeclaration(symbol, typeChecker) {
  return !!((symbol.flags & ts9.SymbolFlags.Accessor) === ts9.SymbolFlags.GetAccessor || symbol.declarations?.some(
    (node) => isModifierFlagSet(node, ts9.ModifierFlags.Readonly) || ts9.isVariableDeclaration(node) && isNodeFlagSet(node.parent, ts9.NodeFlags.Const) || ts9.isCallExpression(node) && isReadonlyAssignmentDeclaration(node, typeChecker) || ts9.isEnumMember(node) || (ts9.isPropertyAssignment(node) || ts9.isShorthandPropertyAssignment(node)) && isInConstContext(node, typeChecker)
  ));
}
function typeConstituents(type) {
  return isIntersectionType(type) || isUnionType(type) ? type.types : [type];
}
function typeIsLiteral(type) {
  if (isTsVersionAtLeast(5, 0)) {
    return type.isLiteral();
  } else {
    return isTypeFlagSet(
      type,
      ts9.TypeFlags.StringLiteral | ts9.TypeFlags.NumberLiteral | ts9.TypeFlags.BigIntLiteral
    );
  }
}
var typeParts = typeConstituents;
function unionConstituents(type) {
  return isUnionType(type) ? type.types : [type];
}
var unionTypeParts = unionConstituents;
function isCallback(typeChecker, param, node) {
  let type = typeChecker.getApparentType(
    typeChecker.getTypeOfSymbolAtLocation(param, node)
  );
  if (param.valueDeclaration.dotDotDotToken) {
    type = type.getNumberIndexType();
    if (type === void 0) {
      return false;
    }
  }
  for (const subType of unionConstituents(type)) {
    if (subType.getCallSignatures().length !== 0) {
      return true;
    }
  }
  return false;
}
function isReadonlyAssignmentDeclaration(node, typeChecker) {
  if (!isBindableObjectDefinePropertyCall(node)) {
    return false;
  }
  const descriptorType = typeChecker.getTypeAtLocation(node.arguments[2]);
  if (descriptorType.getProperty("value") === void 0) {
    return descriptorType.getProperty("set") === void 0;
  }
  const writableProp = descriptorType.getProperty("writable");
  if (writableProp === void 0) {
    return false;
  }
  const writableType = writableProp.valueDeclaration !== void 0 && ts9.isPropertyAssignment(writableProp.valueDeclaration) ? typeChecker.getTypeAtLocation(writableProp.valueDeclaration.initializer) : typeChecker.getTypeOfSymbolAtLocation(writableProp, node.arguments[2]);
  return isFalseLiteralType(writableType);
}
function isReadonlyPropertyFromMappedType(type, name, typeChecker) {
  if (!isObjectType(type) || !isObjectFlagSet(type, ts9.ObjectFlags.Mapped)) {
    return;
  }
  const declaration = type.symbol.declarations[0];
  if (declaration.readonlyToken !== void 0 && !/^__@[^@]+$/.test(name)) {
    return declaration.readonlyToken.kind !== ts9.SyntaxKind.MinusToken;
  }
  const { modifiersType } = type;
  return modifiersType && isPropertyReadonlyInType(modifiersType, name, typeChecker);
}
function isReadonlyPropertyIntersection(type, name, typeChecker) {
  const constituents = intersectionConstituents(type);
  return constituents.some((constituent) => {
    const prop = getPropertyOfType(constituent, name);
    if (prop === void 0) {
      return false;
    }
    if (prop.flags & ts9.SymbolFlags.Transient) {
      if (/^(?:[1-9]\d*|0)$/.test(name) && isTupleTypeReference(constituent)) {
        return constituent.target.readonly;
      }
      switch (isReadonlyPropertyFromMappedType(constituent, name, typeChecker)) {
        case false:
          return false;
        case true:
          return true;
      }
    }
    return (
      // members of namespace import
      isSymbolFlagSet(prop, ts9.SymbolFlags.ValueModule) || // we unwrapped every mapped type, now we can check the actual declarations
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- Will be made private-only soon.
      symbolHasReadonlyDeclaration(prop, typeChecker)
    );
  });
}
function identifierToKeywordKind(node) {
  return "originalKeywordKind" in node ? node.originalKeywordKind : ts9.identifierToKeywordKind(node);
}

// src/usage/declarations.ts
var DeclarationDomain = /* @__PURE__ */ ((DeclarationDomain2) => {
  DeclarationDomain2[DeclarationDomain2["Namespace"] = 1] = "Namespace";
  DeclarationDomain2[DeclarationDomain2["Type"] = 2] = "Type";
  DeclarationDomain2[DeclarationDomain2["Value"] = 4] = "Value";
  DeclarationDomain2[DeclarationDomain2["Any"] = 7] = "Any";
  DeclarationDomain2[DeclarationDomain2["Import"] = 8] = "Import";
  return DeclarationDomain2;
})(DeclarationDomain || {});
function getDeclarationDomain(node) {
  switch (node.parent.kind) {
    case ts9.SyntaxKind.ClassDeclaration:
    case ts9.SyntaxKind.ClassExpression:
      return 2 /* Type */ | 4 /* Value */;
    case ts9.SyntaxKind.EnumDeclaration:
      return 7 /* Any */;
    case ts9.SyntaxKind.FunctionDeclaration:
    case ts9.SyntaxKind.FunctionExpression:
      return 4 /* Value */;
    case ts9.SyntaxKind.ImportClause:
    case ts9.SyntaxKind.NamespaceImport:
      return 7 /* Any */ | 8 /* Import */;
    // TODO handle type-only imports
    case ts9.SyntaxKind.ImportEqualsDeclaration:
    case ts9.SyntaxKind.ImportSpecifier:
      return node.parent.name === node ? 7 /* Any */ | 8 /* Import */ : void 0;
    case ts9.SyntaxKind.InterfaceDeclaration:
    case ts9.SyntaxKind.TypeAliasDeclaration:
    case ts9.SyntaxKind.TypeParameter:
      return 2 /* Type */;
    case ts9.SyntaxKind.ModuleDeclaration:
      return 1 /* Namespace */;
    case ts9.SyntaxKind.Parameter:
      if (node.parent.parent.kind === ts9.SyntaxKind.IndexSignature || identifierToKeywordKind(node) === ts9.SyntaxKind.ThisKeyword) {
        return;
      }
    // falls through
    case ts9.SyntaxKind.BindingElement:
    case ts9.SyntaxKind.VariableDeclaration:
      return node.parent.name === node ? 4 /* Value */ : void 0;
  }
}
function getPropertyName(propertyName) {
  if (propertyName.kind === ts9.SyntaxKind.ComputedPropertyName) {
    const expression = unwrapParentheses(propertyName.expression);
    if (ts9.isPrefixUnaryExpression(expression)) {
      let negate = false;
      switch (expression.operator) {
        case ts9.SyntaxKind.MinusToken:
          negate = true;
        // falls through
        case ts9.SyntaxKind.PlusToken:
          return ts9.isNumericLiteral(expression.operand) ? `${negate ? "-" : ""}${expression.operand.text}` : ts9.isBigIntLiteral(expression.operand) ? `${negate ? "-" : ""}${expression.operand.text.slice(0, -1)}` : void 0;
        default:
          return;
      }
    }
    if (ts9.isBigIntLiteral(expression)) {
      return expression.text.slice(0, -1);
    }
    if (isNumericOrStringLikeLiteral(expression)) {
      return expression.text;
    }
    return;
  }
  return propertyName.kind === ts9.SyntaxKind.PrivateIdentifier ? void 0 : propertyName.text;
}
function unwrapParentheses(node) {
  while (node.kind === ts9.SyntaxKind.ParenthesizedExpression) {
    node = node.expression;
  }
  return node;
}
var UsageDomain = /* @__PURE__ */ ((UsageDomain2) => {
  UsageDomain2[UsageDomain2["Namespace"] = 1] = "Namespace";
  UsageDomain2[UsageDomain2["Type"] = 2] = "Type";
  UsageDomain2[UsageDomain2["Value"] = 4] = "Value";
  UsageDomain2[UsageDomain2["Any"] = 7] = "Any";
  UsageDomain2[UsageDomain2["TypeQuery"] = 8] = "TypeQuery";
  UsageDomain2[UsageDomain2["ValueOrNamespace"] = 5] = "ValueOrNamespace";
  return UsageDomain2;
})(UsageDomain || {});
function getUsageDomain(node) {
  const parent = node.parent;
  switch (parent.kind) {
    // Value
    case ts9.SyntaxKind.BindingElement:
      if (parent.initializer === node) {
        return 5 /* ValueOrNamespace */;
      }
      break;
    case ts9.SyntaxKind.BreakStatement:
    case ts9.SyntaxKind.ClassDeclaration:
    case ts9.SyntaxKind.ClassExpression:
    case ts9.SyntaxKind.ContinueStatement:
    case ts9.SyntaxKind.EnumDeclaration:
    case ts9.SyntaxKind.FunctionDeclaration:
    case ts9.SyntaxKind.FunctionExpression:
    case ts9.SyntaxKind.GetAccessor:
    case ts9.SyntaxKind.ImportClause:
    case ts9.SyntaxKind.ImportSpecifier:
    case ts9.SyntaxKind.InterfaceDeclaration:
    case ts9.SyntaxKind.JsxAttribute:
    case ts9.SyntaxKind.LabeledStatement:
    case ts9.SyntaxKind.MethodDeclaration:
    case ts9.SyntaxKind.MethodSignature:
    case ts9.SyntaxKind.ModuleDeclaration:
    case ts9.SyntaxKind.NamedTupleMember:
    case ts9.SyntaxKind.NamespaceExport:
    case ts9.SyntaxKind.NamespaceExportDeclaration:
    case ts9.SyntaxKind.NamespaceImport:
    case ts9.SyntaxKind.PropertySignature:
    case ts9.SyntaxKind.SetAccessor:
    case ts9.SyntaxKind.TypeAliasDeclaration:
    case ts9.SyntaxKind.TypeParameter:
    case ts9.SyntaxKind.TypePredicate:
      break;
    case ts9.SyntaxKind.EnumMember:
    case ts9.SyntaxKind.ImportEqualsDeclaration:
    case ts9.SyntaxKind.Parameter:
    case ts9.SyntaxKind.PropertyAccessExpression:
    case ts9.SyntaxKind.PropertyAssignment:
    case ts9.SyntaxKind.PropertyDeclaration:
    case ts9.SyntaxKind.VariableDeclaration:
      if (parent.name !== node) {
        return 5 /* ValueOrNamespace */;
      }
      break;
    case ts9.SyntaxKind.ExportAssignment:
      return 7 /* Any */;
    case ts9.SyntaxKind.ExportSpecifier:
      if (parent.propertyName === void 0 || parent.propertyName === node) {
        return 7 /* Any */;
      }
      break;
    case ts9.SyntaxKind.ExpressionWithTypeArguments:
      return parent.parent.token === ts9.SyntaxKind.ImplementsKeyword || parent.parent.parent.kind === ts9.SyntaxKind.InterfaceDeclaration ? 2 /* Type */ : 4 /* Value */;
    case ts9.SyntaxKind.QualifiedName:
      if (parent.left === node) {
        if (getEntityNameParent(parent).kind === ts9.SyntaxKind.TypeQuery) {
          return 1 /* Namespace */ | 8 /* TypeQuery */;
        }
        return 1 /* Namespace */;
      }
      break;
    case ts9.SyntaxKind.TypeQuery:
      return 5 /* ValueOrNamespace */ | 8 /* TypeQuery */;
    case ts9.SyntaxKind.TypeReference:
      return identifierToKeywordKind(node) !== ts9.SyntaxKind.ConstKeyword ? 2 /* Type */ : void 0;
    default:
      return 5 /* ValueOrNamespace */;
  }
}
function getEntityNameParent(name) {
  let parent = name.parent;
  while (parent.kind === ts9.SyntaxKind.QualifiedName) {
    parent = parent.parent;
  }
  return parent;
}
function isBlockScopeBoundary(node) {
  switch (node.kind) {
    case ts9.SyntaxKind.Block: {
      const parent = node.parent;
      return parent.kind !== ts9.SyntaxKind.CatchClause && // blocks inside SourceFile are block scope boundaries
      (parent.kind === ts9.SyntaxKind.SourceFile || // blocks that are direct children of a function scope boundary are no scope boundary
      // for example the FunctionBlock is part of the function scope of the containing function
      !isFunctionScopeBoundary(parent)) ? 2 /* Block */ : 0 /* None */;
    }
    case ts9.SyntaxKind.CaseBlock:
    case ts9.SyntaxKind.CatchClause:
    case ts9.SyntaxKind.ForInStatement:
    case ts9.SyntaxKind.ForOfStatement:
    case ts9.SyntaxKind.ForStatement:
    case ts9.SyntaxKind.WithStatement:
      return 2 /* Block */;
    default:
      return 0 /* None */;
  }
}

// src/usage/scopes.ts
var AbstractScope = class {
  constructor(global) {
    this.global = global;
  }
  namespaceScopes = void 0;
  uses = [];
  variables = /* @__PURE__ */ new Map();
  #enumScopes = void 0;
  addUse(use) {
    this.uses.push(use);
  }
  addVariable(identifier, name, selector, exported, domain) {
    const variables = this.getDestinationScope(selector).getVariables();
    const declaration = {
      declaration: name,
      domain,
      exported
    };
    const variable = variables.get(identifier);
    if (variable === void 0) {
      variables.set(identifier, {
        declarations: [declaration],
        domain,
        uses: []
      });
    } else {
      variable.domain |= domain;
      variable.declarations.push(declaration);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createOrReuseEnumScope(name, _exported) {
    let scope;
    if (this.#enumScopes === void 0) {
      this.#enumScopes = /* @__PURE__ */ new Map();
    } else {
      scope = this.#enumScopes.get(name);
    }
    if (scope === void 0) {
      scope = new EnumScope(this);
      this.#enumScopes.set(name, scope);
    }
    return scope;
  }
  // only relevant for the root scope
  createOrReuseNamespaceScope(name, _exported, ambient, hasExportStatement) {
    let scope;
    if (this.namespaceScopes === void 0) {
      this.namespaceScopes = /* @__PURE__ */ new Map();
    } else {
      scope = this.namespaceScopes.get(name);
    }
    if (scope === void 0) {
      scope = new NamespaceScope(ambient, hasExportStatement, this);
      this.namespaceScopes.set(name, scope);
    } else {
      scope.refresh(ambient, hasExportStatement);
    }
    return scope;
  }
  end(cb) {
    if (this.namespaceScopes !== void 0) {
      this.namespaceScopes.forEach((value) => value.finish(cb));
    }
    this.namespaceScopes = this.#enumScopes = void 0;
    this.applyUses();
    this.variables.forEach((variable) => {
      for (const declaration of variable.declarations) {
        const result = {
          declarations: [],
          domain: declaration.domain,
          exported: declaration.exported,
          inGlobalScope: this.global,
          uses: []
        };
        for (const other of variable.declarations) {
          if (other.domain & declaration.domain) {
            result.declarations.push(other.declaration);
          }
        }
        for (const use of variable.uses) {
          if (use.domain & declaration.domain) {
            result.uses.push(use);
          }
        }
        cb(result, declaration.declaration, this);
      }
    });
  }
  getFunctionScope() {
    return this;
  }
  getVariables() {
    return this.variables;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  markExported(_name) {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  addUseToParent(_use) {
  }
  applyUse(use, variables = this.variables) {
    const variable = variables.get(use.location.text);
    if (variable === void 0 || (variable.domain & use.domain) === 0) {
      return false;
    }
    variable.uses.push(use);
    return true;
  }
  applyUses() {
    for (const use of this.uses) {
      if (!this.applyUse(use)) {
        this.addUseToParent(use);
      }
    }
    this.uses = [];
  }
};
var NonRootScope = class extends AbstractScope {
  constructor(parent, boundary) {
    super(false);
    this.parent = parent;
    this.boundary = boundary;
  }
  getDestinationScope(selector) {
    return this.boundary & selector ? this : this.parent.getDestinationScope(selector);
  }
  addUseToParent(use) {
    return this.parent.addUse(use, this);
  }
};
var AbstractNamedExpressionScope = class extends NonRootScope {
  #domain;
  #name;
  constructor(name, domain, parent) {
    super(parent, 1 /* Function */);
    this.#name = name;
    this.#domain = domain;
  }
  addUse(use, source) {
    if (source !== this.innerScope) {
      return this.innerScope.addUse(use);
    }
    if (use.domain & this.#domain && use.location.text === this.#name.text) {
      this.uses.push(use);
    } else {
      return this.parent.addUse(use, this);
    }
  }
  end(cb) {
    this.innerScope.end(cb);
    return cb(
      {
        declarations: [this.#name],
        domain: this.#domain,
        exported: false,
        inGlobalScope: false,
        uses: this.uses
      },
      this.#name,
      this
    );
  }
  getDestinationScope() {
    return this.innerScope;
  }
  getFunctionScope() {
    return this.innerScope;
  }
};
var BlockScope = class extends NonRootScope {
  #functionScope;
  constructor(functionScope, parent) {
    super(parent, 2 /* Block */);
    this.#functionScope = functionScope;
  }
  getFunctionScope() {
    return this.#functionScope;
  }
};
var ClassExpressionScope = class extends AbstractNamedExpressionScope {
  innerScope = new NonRootScope(this, 1 /* Function */);
  constructor(name, parent) {
    super(name, 4 /* Value */ | 2 /* Type */, parent);
  }
};
var ConditionalTypeScope = class extends NonRootScope {
  #state = 0 /* Initial */;
  constructor(parent) {
    super(parent, 8 /* ConditionalType */);
  }
  addUse(use) {
    if (this.#state === 2 /* TrueType */) {
      return void this.uses.push(use);
    }
    return this.parent.addUse(use, this);
  }
  updateState(newState) {
    this.#state = newState;
  }
};
var EnumScope = class extends NonRootScope {
  constructor(parent) {
    super(parent, 1 /* Function */);
  }
  end() {
    this.applyUses();
  }
};
var FunctionScope = class extends NonRootScope {
  constructor(parent) {
    super(parent, 1 /* Function */);
  }
  beginBody() {
    this.applyUses();
  }
};
var FunctionExpressionScope = class extends AbstractNamedExpressionScope {
  innerScope = new FunctionScope(this);
  constructor(name, parent) {
    super(name, 4 /* Value */, parent);
  }
  beginBody() {
    return this.innerScope.beginBody();
  }
};
var NamespaceScope = class extends NonRootScope {
  #ambient;
  #exports = void 0;
  #hasExport;
  #innerScope = new NonRootScope(this, 1 /* Function */);
  constructor(ambient, hasExport, parent) {
    super(parent, 1 /* Function */);
    this.#ambient = ambient;
    this.#hasExport = hasExport;
  }
  addUse(use, source) {
    if (source !== this.#innerScope) {
      return this.#innerScope.addUse(use);
    }
    this.uses.push(use);
  }
  createOrReuseEnumScope(name, exported) {
    if (!exported && (!this.#ambient || this.#hasExport)) {
      return this.#innerScope.createOrReuseEnumScope(name, exported);
    }
    return super.createOrReuseEnumScope(name, exported);
  }
  createOrReuseNamespaceScope(name, exported, ambient, hasExportStatement) {
    if (!exported && (!this.#ambient || this.#hasExport)) {
      return this.#innerScope.createOrReuseNamespaceScope(
        name,
        exported,
        ambient || this.#ambient,
        hasExportStatement
      );
    }
    return super.createOrReuseNamespaceScope(
      name,
      exported,
      ambient || this.#ambient,
      hasExportStatement
    );
  }
  end(cb) {
    this.#innerScope.end((variable, key, scope) => {
      if (scope !== this.#innerScope || !variable.exported && (!this.#ambient || this.#exports !== void 0 && !this.#exports.has(key.text))) {
        return cb(variable, key, scope);
      }
      const namespaceVar = this.variables.get(key.text);
      if (namespaceVar === void 0) {
        this.variables.set(key.text, {
          declarations: variable.declarations.map(mapDeclaration),
          domain: variable.domain,
          uses: [...variable.uses]
        });
      } else {
        outer: for (const declaration of variable.declarations) {
          for (const existing of namespaceVar.declarations) {
            if (existing.declaration === declaration) {
              continue outer;
            }
            namespaceVar.declarations.push(mapDeclaration(declaration));
          }
        }
        namespaceVar.domain |= variable.domain;
        for (const use of variable.uses) {
          if (namespaceVar.uses.includes(use)) {
            continue;
          }
          namespaceVar.uses.push(use);
        }
      }
    });
    this.applyUses();
    this.#innerScope = new NonRootScope(this, 1 /* Function */);
  }
  finish(cb) {
    return super.end(cb);
  }
  getDestinationScope() {
    return this.#innerScope;
  }
  markExported(name) {
    if (this.#exports === void 0) {
      this.#exports = /* @__PURE__ */ new Set();
    }
    this.#exports.add(name.text);
  }
  refresh(ambient, hasExport) {
    this.#ambient = ambient;
    this.#hasExport = hasExport;
  }
};
var RootScope = class extends AbstractScope {
  #exportAll;
  #exports = void 0;
  #innerScope = new NonRootScope(this, 1 /* Function */);
  constructor(exportAll, global) {
    super(global);
    this.#exportAll = exportAll;
  }
  addUse(use, origin) {
    if (origin === this.#innerScope) {
      return super.addUse(use);
    }
    return this.#innerScope.addUse(use);
  }
  addVariable(identifier, name, selector, exported, domain) {
    if (domain & 8 /* Import */) {
      return super.addVariable(identifier, name, selector, exported, domain);
    }
    return this.#innerScope.addVariable(
      identifier,
      name,
      selector,
      exported,
      domain
    );
  }
  end(cb) {
    this.#innerScope.end((value, key) => {
      value.exported ||= this.#exportAll || this.#exports !== void 0 && this.#exports.includes(key.text);
      value.inGlobalScope = this.global;
      return cb(value, key, this);
    });
    return super.end((value, key, scope) => {
      value.exported ||= scope === this && this.#exports !== void 0 && this.#exports.includes(key.text);
      return cb(value, key, scope);
    });
  }
  getDestinationScope() {
    return this;
  }
  markExported(id) {
    if (this.#exports === void 0) {
      this.#exports = [id.text];
    } else {
      this.#exports.push(id.text);
    }
  }
};
function mapDeclaration(declaration) {
  return {
    declaration,
    domain: getDeclarationDomain(declaration),
    exported: true
  };
}

// src/usage/UsageWalker.ts
var UsageWalker = class {
  #result = /* @__PURE__ */ new Map();
  #scope;
  getUsage(sourceFile) {
    const variableCallback = (variable, key) => {
      this.#result.set(key, variable);
    };
    const isModule = ts9.isExternalModule(sourceFile);
    this.#scope = new RootScope(
      sourceFile.isDeclarationFile && isModule && !containsExportStatement(sourceFile),
      !isModule
    );
    const cb = (node) => {
      if (isBlockScopeBoundary(node)) {
        return continueWithScope(
          node,
          new BlockScope(this.#scope.getFunctionScope(), this.#scope),
          handleBlockScope
        );
      }
      switch (node.kind) {
        case ts9.SyntaxKind.ArrowFunction:
        case ts9.SyntaxKind.CallSignature:
        case ts9.SyntaxKind.Constructor:
        case ts9.SyntaxKind.ConstructorType:
        case ts9.SyntaxKind.ConstructSignature:
        case ts9.SyntaxKind.FunctionDeclaration:
        case ts9.SyntaxKind.FunctionExpression:
        case ts9.SyntaxKind.FunctionType:
        case ts9.SyntaxKind.GetAccessor:
        case ts9.SyntaxKind.MethodDeclaration:
        case ts9.SyntaxKind.MethodSignature:
        case ts9.SyntaxKind.SetAccessor:
          return this.#handleFunctionLikeDeclaration(
            node,
            cb,
            variableCallback
          );
        case ts9.SyntaxKind.ClassDeclaration:
          this.#handleDeclaration(
            node,
            true,
            4 /* Value */ | 2 /* Type */
          );
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 1 /* Function */)
          );
        case ts9.SyntaxKind.ClassExpression:
          return continueWithScope(
            node,
            node.name !== void 0 ? new ClassExpressionScope(
              node.name,
              this.#scope
            ) : new NonRootScope(this.#scope, 1 /* Function */)
          );
        case ts9.SyntaxKind.ConditionalType:
          return this.#handleConditionalType(
            node,
            cb,
            variableCallback
          );
        case ts9.SyntaxKind.EnumDeclaration:
          this.#handleDeclaration(
            node,
            true,
            7 /* Any */
          );
          return continueWithScope(
            node,
            this.#scope.createOrReuseEnumScope(
              node.name.text,
              includesModifier(
                node.modifiers,
                ts9.SyntaxKind.ExportKeyword
              )
            )
          );
        case ts9.SyntaxKind.EnumMember:
          this.#scope.addVariable(
            getPropertyName(node.name),
            node.name,
            1 /* Function */,
            true,
            4 /* Value */
          );
          break;
        case ts9.SyntaxKind.ExportAssignment:
          if (node.expression.kind === ts9.SyntaxKind.Identifier) {
            return this.#scope.markExported(
              node.expression
            );
          }
          break;
        case ts9.SyntaxKind.ExportSpecifier:
          if (node.propertyName !== void 0) {
            return this.#scope.markExported(
              node.propertyName,
              node.name
            );
          }
          return this.#scope.markExported(node.name);
        case ts9.SyntaxKind.Identifier: {
          const domain = getUsageDomain(node);
          if (domain !== void 0) {
            this.#scope.addUse({ domain, location: node });
          }
          return;
        }
        case ts9.SyntaxKind.ImportClause:
        case ts9.SyntaxKind.ImportEqualsDeclaration:
        case ts9.SyntaxKind.ImportSpecifier:
        case ts9.SyntaxKind.NamespaceImport:
          this.#handleDeclaration(
            node,
            false,
            7 /* Any */ | 8 /* Import */
          );
          break;
        case ts9.SyntaxKind.InterfaceDeclaration:
        case ts9.SyntaxKind.TypeAliasDeclaration:
          this.#handleDeclaration(
            node,
            true,
            2 /* Type */
          );
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 4 /* Type */)
          );
        case ts9.SyntaxKind.MappedType:
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 4 /* Type */)
          );
        case ts9.SyntaxKind.ModuleDeclaration:
          return this.#handleModule(
            node,
            continueWithScope
          );
        case ts9.SyntaxKind.Parameter:
          if (node.parent.kind !== ts9.SyntaxKind.IndexSignature && (node.name.kind !== ts9.SyntaxKind.Identifier || identifierToKeywordKind(
            node.name
          ) !== ts9.SyntaxKind.ThisKeyword)) {
            this.#handleBindingName(
              node.name,
              false,
              false
            );
          }
          break;
        case ts9.SyntaxKind.TypeParameter:
          this.#scope.addVariable(
            node.name.text,
            node.name,
            node.parent.kind === ts9.SyntaxKind.InferType ? 8 /* InferType */ : 7 /* Type */,
            false,
            2 /* Type */
          );
          break;
        // End of Scope specific handling
        case ts9.SyntaxKind.VariableDeclarationList:
          this.#handleVariableDeclaration(node);
          break;
      }
      return ts9.forEachChild(node, cb);
    };
    const continueWithScope = (node, scope, next = forEachChild) => {
      const savedScope = this.#scope;
      this.#scope = scope;
      next(node);
      this.#scope.end(variableCallback);
      this.#scope = savedScope;
    };
    const handleBlockScope = (node) => {
      if (node.kind === ts9.SyntaxKind.CatchClause && node.variableDeclaration !== void 0) {
        this.#handleBindingName(
          node.variableDeclaration.name,
          true,
          false
        );
      }
      return ts9.forEachChild(node, cb);
    };
    ts9.forEachChild(sourceFile, cb);
    this.#scope.end(variableCallback);
    return this.#result;
    function forEachChild(node) {
      return ts9.forEachChild(node, cb);
    }
  }
  #handleBindingName(name, blockScoped, exported) {
    if (name.kind === ts9.SyntaxKind.Identifier) {
      return this.#scope.addVariable(
        name.text,
        name,
        blockScoped ? 3 /* Block */ : 1 /* Function */,
        exported,
        4 /* Value */
      );
    }
    forEachDestructuringIdentifier(name, (declaration) => {
      this.#scope.addVariable(
        declaration.name.text,
        declaration.name,
        blockScoped ? 3 /* Block */ : 1 /* Function */,
        exported,
        4 /* Value */
      );
    });
  }
  #handleConditionalType(node, cb, varCb) {
    const savedScope = this.#scope;
    const scope = this.#scope = new ConditionalTypeScope(savedScope);
    cb(node.checkType);
    scope.updateState(1 /* Extends */);
    cb(node.extendsType);
    scope.updateState(2 /* TrueType */);
    cb(node.trueType);
    scope.updateState(3 /* FalseType */);
    cb(node.falseType);
    scope.end(varCb);
    this.#scope = savedScope;
  }
  #handleDeclaration(node, blockScoped, domain) {
    if (node.name !== void 0) {
      this.#scope.addVariable(
        node.name.text,
        node.name,
        blockScoped ? 3 /* Block */ : 1 /* Function */,
        includesModifier(
          node.modifiers,
          ts9.SyntaxKind.ExportKeyword
        ),
        domain
      );
    }
  }
  #handleFunctionLikeDeclaration(node, cb, varCb) {
    if (ts9.canHaveDecorators(node)) {
      ts9.getDecorators(node)?.forEach(cb);
    }
    const savedScope = this.#scope;
    if (node.kind === ts9.SyntaxKind.FunctionDeclaration) {
      this.#handleDeclaration(node, false, 4 /* Value */);
    }
    const scope = this.#scope = node.kind === ts9.SyntaxKind.FunctionExpression && node.name !== void 0 ? new FunctionExpressionScope(node.name, savedScope) : new FunctionScope(savedScope);
    if (node.name !== void 0) {
      cb(node.name);
    }
    if (node.typeParameters !== void 0) {
      node.typeParameters.forEach(cb);
    }
    node.parameters.forEach(cb);
    if (node.type !== void 0) {
      cb(node.type);
    }
    if (node.body !== void 0) {
      scope.beginBody();
      cb(node.body);
    }
    scope.end(varCb);
    this.#scope = savedScope;
  }
  #handleModule(node, next) {
    if (node.flags & ts9.NodeFlags.GlobalAugmentation) {
      return next(
        node,
        this.#scope.createOrReuseNamespaceScope("-global", false, true, false)
      );
    }
    if (node.name.kind === ts9.SyntaxKind.Identifier) {
      const exported = isNamespaceExported(node);
      this.#scope.addVariable(
        node.name.text,
        node.name,
        1 /* Function */,
        exported,
        1 /* Namespace */ | 4 /* Value */
      );
      const ambient = includesModifier(
        node.modifiers,
        ts9.SyntaxKind.DeclareKeyword
      );
      return next(
        node,
        this.#scope.createOrReuseNamespaceScope(
          node.name.text,
          exported,
          ambient,
          ambient && namespaceHasExportStatement(node)
        )
      );
    }
    return next(
      node,
      this.#scope.createOrReuseNamespaceScope(
        `"${node.name.text}"`,
        false,
        true,
        namespaceHasExportStatement(node)
      )
    );
  }
  #handleVariableDeclaration(declarationList) {
    const blockScoped = isBlockScopedVariableDeclarationList(declarationList);
    const exported = declarationList.parent.kind === ts9.SyntaxKind.VariableStatement && includesModifier(
      declarationList.parent.modifiers,
      ts9.SyntaxKind.ExportKeyword
    );
    for (const declaration of declarationList.declarations) {
      this.#handleBindingName(declaration.name, blockScoped, exported);
    }
  }
};
function containsExportStatement(block) {
  for (const statement of block.statements) {
    if (statement.kind === ts9.SyntaxKind.ExportDeclaration || statement.kind === ts9.SyntaxKind.ExportAssignment) {
      return true;
    }
  }
  return false;
}
function forEachDestructuringIdentifier(pattern, fn) {
  for (const element of pattern.elements) {
    if (element.kind !== ts9.SyntaxKind.BindingElement) {
      continue;
    }
    let result;
    if (element.name.kind === ts9.SyntaxKind.Identifier) {
      result = fn(element);
    } else {
      result = forEachDestructuringIdentifier(element.name, fn);
    }
    if (result) {
      return result;
    }
  }
}
function isBlockScopedVariableDeclarationList(declarationList) {
  return (declarationList.flags & ts9.NodeFlags.BlockScoped) !== 0;
}
function isNamespaceExported(node) {
  return node.parent.kind === ts9.SyntaxKind.ModuleDeclaration || includesModifier(node.modifiers, ts9.SyntaxKind.ExportKeyword);
}
function namespaceHasExportStatement(ns) {
  if (ns.body?.kind !== ts9.SyntaxKind.ModuleBlock) {
    return false;
  }
  return containsExportStatement(ns.body);
}

// src/usage/collectVariableUsage.ts
function collectVariableUsage(sourceFile) {
  return new UsageWalker().getUsage(sourceFile);
}

export { AccessKind, DeclarationDomain, UsageDomain, collectVariableUsage, forEachComment, forEachToken, getAccessKind, getCallSignaturesOfType, getPropertyOfType, getWellKnownSymbolPropertyOfType, hasDecorators, hasExpressionInitializer, hasInitializer, hasJSDoc, hasModifiers, hasType, hasTypeArguments, includesModifier, intersectionConstituents, intersectionTypeParts, isAbstractKeyword, isAccessExpression, isAccessibilityModifier, isAccessorDeclaration, isAccessorKeyword, isAnyKeyword, isArrayBindingElement, isArrayBindingOrAssignmentPattern, isAssertKeyword, isAssertsKeyword, isAssignmentKind, isAssignmentPattern, isAsyncKeyword, isAwaitKeyword, isBigIntKeyword, isBigIntLiteralType, isBindingOrAssignmentElementRestIndicator, isBindingOrAssignmentElementTarget, isBindingOrAssignmentPattern, isBindingPattern, isBlockLike, isBooleanKeyword, isBooleanLiteral, isBooleanLiteralType, isClassLikeDeclaration, isClassMemberModifier, isColonToken, isCompilerOptionEnabled, isConditionalType, isConstAssertionExpression, isConstKeyword, isDeclarationName, isDeclarationWithTypeParameterChildren, isDeclarationWithTypeParameters, isDeclareKeyword, isDefaultKeyword, isDestructuringPattern, isDotToken, isEndOfFileToken, isEntityNameExpression, isEntityNameOrEntityNameExpression, isEnumType, isEqualsGreaterThanToken, isEqualsToken, isEvolvingArrayType, isExclamationToken, isExportKeyword, isFalseKeyword, isFalseLiteral, isFalseLiteralType, isFalsyType, isForInOrOfStatement, isFreshableIntrinsicType, isFreshableType, isFunctionLikeDeclaration, isFunctionScopeBoundary, isImportExpression, isImportKeyword, isInKeyword, isIndexType, isIndexedAccessType, isInstantiableType, isIntersectionType, isIntrinsicAnyType, isIntrinsicBigIntType, isIntrinsicBooleanType, isIntrinsicESSymbolType, isIntrinsicErrorType, isIntrinsicNeverType, isIntrinsicNonPrimitiveType, isIntrinsicNullType, isIntrinsicNumberType, isIntrinsicStringType, isIntrinsicType, isIntrinsicUndefinedType, isIntrinsicUnknownType, isIntrinsicVoidType, isIterationStatement, isJSDocComment, isJSDocNamespaceBody, isJSDocNamespaceDeclaration, isJSDocText, isJSDocTypeReferencingNode, isJsonMinusNumericLiteral, isJsonObjectExpression, isJsxAttributeLike, isJsxAttributeValue, isJsxChild, isJsxTagNameExpression, isJsxTagNamePropertyAccess, isLiteralToken, isLiteralType, isModifierFlagSet, isModuleBody, isModuleName, isModuleReference, isNamedDeclarationWithName, isNamedImportBindings, isNamedImportsOrExports, isNamespaceBody, isNamespaceDeclaration, isNeverKeyword, isNodeFlagSet, isNullKeyword, isNullLiteral, isNumberKeyword, isNumberLiteralType, isNumericOrStringLikeLiteral, isNumericPropertyName, isObjectBindingOrAssignmentElement, isObjectBindingOrAssignmentPattern, isObjectFlagSet, isObjectKeyword, isObjectType, isObjectTypeDeclaration, isOutKeyword, isOverrideKeyword, isParameterPropertyModifier, isPrivateKeyword, isPropertyAccessEntityNameExpression, isPropertyNameLiteral, isPropertyReadonlyInType, isProtectedKeyword, isPseudoLiteralToken, isPublicKeyword, isQuestionDotToken, isQuestionToken, isReadonlyKeyword, isSignatureDeclaration, isStaticKeyword, isStrictCompilerOptionEnabled, isStringKeyword, isStringLiteralType, isStringMappingType, isSubstitutionType, isSuperElementAccessExpression, isSuperExpression, isSuperKeyword, isSuperProperty, isSuperPropertyAccessExpression, isSymbolFlagSet, isSymbolKeyword, isSyntaxList, isTemplateLiteralType, isThenableType, isThisExpression, isThisKeyword, isTransientSymbolLinksFlagSet, isTrueKeyword, isTrueLiteral, isTrueLiteralType, isTupleType, isTupleTypeReference, isTypeFlagSet, isTypeOnlyCompatibleAliasDeclaration, isTypeParameter, isTypeReference, isTypeReferenceType, isTypeVariable, isUndefinedKeyword, isUnionOrIntersectionType, isUnionOrIntersectionTypeNode, isUnionType, isUniqueESSymbolType, isUnknownKeyword, isValidPropertyAccess, isVariableLikeDeclaration, isVoidKeyword, iterateComments, iterateTokens, symbolHasReadonlyDeclaration, typeConstituents, typeIsLiteral, typeParts, unionConstituents, unionTypeParts };
