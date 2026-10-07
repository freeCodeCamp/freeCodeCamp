'use strict';

var ts9 = require('typescript');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var ts9__default = /*#__PURE__*/_interopDefault(ts9);

// src/comments.ts
function forEachToken(node, callback, sourceFile = node.getSourceFile()) {
  for (const token of iterateTokens(node, sourceFile)) {
    callback(token);
  }
}
function* iterateTokens(node, sourceFile = node.getSourceFile()) {
  const queue = [];
  while (true) {
    if (ts9__default.default.isTokenKind(node.kind)) {
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
  const notJsx = sourceFile.languageVariant !== ts9__default.default.LanguageVariant.JSX;
  for (const token of iterateTokens(node, sourceFile)) {
    if (token.pos === token.end) {
      continue;
    }
    if (token.kind !== ts9__default.default.SyntaxKind.JsxText) {
      yield* collectComments((callback) => {
        ts9__default.default.forEachLeadingCommentRange(
          fullText,
          // skip shebang at position 0
          token.pos === 0 ? (ts9__default.default.getShebang(fullText) ?? "").length : token.pos,
          callback
        );
      }, fullText);
    }
    if (notJsx || canHaveTrailingTrivia(token)) {
      yield* collectComments((callback) => {
        ts9__default.default.forEachTrailingCommentRange(fullText, token.end, callback);
      }, fullText);
    }
  }
}
function canHaveTrailingTrivia(token) {
  switch (token.kind) {
    case ts9__default.default.SyntaxKind.CloseBraceToken:
      return token.parent.kind !== ts9__default.default.SyntaxKind.JsxExpression || !isJsxElementOrFragment(token.parent.parent);
    case ts9__default.default.SyntaxKind.GreaterThanToken:
      switch (token.parent.kind) {
        case ts9__default.default.SyntaxKind.JsxClosingElement:
        case ts9__default.default.SyntaxKind.JsxClosingFragment:
          return !isJsxElementOrFragment(token.parent.parent.parent);
        case ts9__default.default.SyntaxKind.JsxOpeningElement:
          return token.end !== token.parent.end;
        case ts9__default.default.SyntaxKind.JsxOpeningFragment:
          return false;
        // would be inside the fragment
        case ts9__default.default.SyntaxKind.JsxSelfClosingElement:
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
      kind === ts9__default.default.SyntaxKind.SingleLineCommentTrivia ? void 0 : -2
    );
    comments.push({ end, kind, pos, text, value });
  });
  return comments;
}
function isJsxElementOrFragment(node) {
  return node.kind === ts9__default.default.SyntaxKind.JsxElement || node.kind === ts9__default.default.SyntaxKind.JsxFragment;
}
var [tsMajor, tsMinor] = ts9__default.default.versionMajorMinor.split(".").map((raw) => Number.parseInt(raw, 10));
function isTsVersionAtLeast(major, minor = 0) {
  return tsMajor > major || tsMajor === major && tsMinor >= minor;
}

// src/compilerOptions.ts
function isCompilerOptionEnabled(options, option) {
  switch (option) {
    case "allowJs":
      return options.allowJs === void 0 ? isCompilerOptionEnabled(options, "checkJs") : options.allowJs;
    case "allowSyntheticDefaultImports":
      return options.allowSyntheticDefaultImports !== void 0 ? options.allowSyntheticDefaultImports : isCompilerOptionEnabled(options, "esModuleInterop") || options.module === ts9__default.default.ModuleKind.System;
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
  return isFlagSet(ts9__default.default.getCombinedModifierFlags(node), flag);
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
  return kind >= ts9__default.default.SyntaxKind.FirstAssignment && kind <= ts9__default.default.SyntaxKind.LastAssignment;
}
function isNumericPropertyName(name) {
  return String(+name) === name;
}
function isValidPropertyAccess(text, languageVersion = ts9__default.default.ScriptTarget.Latest) {
  if (text.length === 0) {
    return false;
  }
  let ch = text.codePointAt(0);
  if (!ts9__default.default.isIdentifierStart(ch, languageVersion)) {
    return false;
  }
  for (let i = charSize(ch); i < text.length; i += charSize(ch)) {
    ch = text.codePointAt(i);
    if (!ts9__default.default.isIdentifierPart(ch, languageVersion)) {
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
    case ts9__default.default.SyntaxKind.ArrayLiteralExpression:
    case ts9__default.default.SyntaxKind.SpreadAssignment:
    case ts9__default.default.SyntaxKind.SpreadElement:
      return isInDestructuringAssignment(
        parent
      ) ? 2 /* Write */ : 1 /* Read */;
    case ts9__default.default.SyntaxKind.ArrowFunction:
      return parent.body === node ? 1 /* Read */ : 2 /* Write */;
    case ts9__default.default.SyntaxKind.AsExpression:
    case ts9__default.default.SyntaxKind.NonNullExpression:
    case ts9__default.default.SyntaxKind.ParenthesizedExpression:
    case ts9__default.default.SyntaxKind.TypeAssertionExpression:
      return getAccessKind(parent);
    case ts9__default.default.SyntaxKind.AwaitExpression:
    case ts9__default.default.SyntaxKind.CallExpression:
    case ts9__default.default.SyntaxKind.CaseClause:
    case ts9__default.default.SyntaxKind.ComputedPropertyName:
    case ts9__default.default.SyntaxKind.ConditionalExpression:
    case ts9__default.default.SyntaxKind.Decorator:
    case ts9__default.default.SyntaxKind.DoStatement:
    case ts9__default.default.SyntaxKind.ElementAccessExpression:
    case ts9__default.default.SyntaxKind.ExpressionStatement:
    case ts9__default.default.SyntaxKind.ForStatement:
    case ts9__default.default.SyntaxKind.IfStatement:
    case ts9__default.default.SyntaxKind.JsxElement:
    case ts9__default.default.SyntaxKind.JsxExpression:
    case ts9__default.default.SyntaxKind.JsxOpeningElement:
    case ts9__default.default.SyntaxKind.JsxSelfClosingElement:
    case ts9__default.default.SyntaxKind.JsxSpreadAttribute:
    case ts9__default.default.SyntaxKind.NewExpression:
    case ts9__default.default.SyntaxKind.ReturnStatement:
    case ts9__default.default.SyntaxKind.SwitchStatement:
    case ts9__default.default.SyntaxKind.TaggedTemplateExpression:
    case ts9__default.default.SyntaxKind.TemplateSpan:
    case ts9__default.default.SyntaxKind.ThrowStatement:
    case ts9__default.default.SyntaxKind.TypeOfExpression:
    case ts9__default.default.SyntaxKind.VoidExpression:
    case ts9__default.default.SyntaxKind.WhileStatement:
    case ts9__default.default.SyntaxKind.WithStatement:
    case ts9__default.default.SyntaxKind.YieldExpression:
      return 1 /* Read */;
    case ts9__default.default.SyntaxKind.BinaryExpression:
      return parent.right === node ? 1 /* Read */ : !isAssignmentKind(parent.operatorToken.kind) ? 1 /* Read */ : parent.operatorToken.kind === ts9__default.default.SyntaxKind.EqualsToken ? 2 /* Write */ : 3 /* ReadWrite */;
    case ts9__default.default.SyntaxKind.BindingElement:
    case ts9__default.default.SyntaxKind.EnumMember:
    case ts9__default.default.SyntaxKind.JsxAttribute:
    case ts9__default.default.SyntaxKind.Parameter:
    case ts9__default.default.SyntaxKind.PropertyDeclaration:
    case ts9__default.default.SyntaxKind.VariableDeclaration:
      return parent.initializer === node ? 1 /* Read */ : 0 /* None */;
    case ts9__default.default.SyntaxKind.DeleteExpression:
      return 4 /* Delete */;
    case ts9__default.default.SyntaxKind.ExportAssignment:
      return parent.isExportEquals ? 1 /* Read */ : 0 /* None */;
    case ts9__default.default.SyntaxKind.ExpressionWithTypeArguments:
      return parent.parent.token === ts9__default.default.SyntaxKind.ExtendsKeyword && parent.parent.parent.kind !== ts9__default.default.SyntaxKind.InterfaceDeclaration ? 1 /* Read */ : 0 /* None */;
    case ts9__default.default.SyntaxKind.ForInStatement:
    case ts9__default.default.SyntaxKind.ForOfStatement:
      return parent.initializer === node ? 2 /* Write */ : 1 /* Read */;
    case ts9__default.default.SyntaxKind.PostfixUnaryExpression:
      return 3 /* ReadWrite */;
    case ts9__default.default.SyntaxKind.PrefixUnaryExpression:
      return parent.operator === ts9__default.default.SyntaxKind.PlusPlusToken || parent.operator === ts9__default.default.SyntaxKind.MinusMinusToken ? 3 /* ReadWrite */ : 1 /* Read */;
    case ts9__default.default.SyntaxKind.PropertyAccessExpression:
      return parent.expression === node ? 1 /* Read */ : 0 /* None */;
    case ts9__default.default.SyntaxKind.PropertyAssignment:
      return parent.name === node ? 0 /* None */ : isInDestructuringAssignment(parent) ? 2 /* Write */ : 1 /* Read */;
    case ts9__default.default.SyntaxKind.ShorthandPropertyAssignment:
      return parent.objectAssignmentInitializer === node ? 1 /* Read */ : isInDestructuringAssignment(parent) ? 2 /* Write */ : 1 /* Read */;
  }
  return 0 /* None */;
}
function isInDestructuringAssignment(node) {
  switch (node.kind) {
    case ts9__default.default.SyntaxKind.ShorthandPropertyAssignment:
      if (node.objectAssignmentInitializer !== void 0) {
        return true;
      }
    // falls through
    case ts9__default.default.SyntaxKind.PropertyAssignment:
    case ts9__default.default.SyntaxKind.SpreadAssignment:
      node = node.parent;
      break;
    case ts9__default.default.SyntaxKind.SpreadElement:
      if (node.parent.kind !== ts9__default.default.SyntaxKind.ArrayLiteralExpression) {
        return false;
      }
      node = node.parent;
  }
  while (true) {
    switch (node.parent.kind) {
      case ts9__default.default.SyntaxKind.ArrayLiteralExpression:
      case ts9__default.default.SyntaxKind.ObjectLiteralExpression:
        node = node.parent;
        break;
      case ts9__default.default.SyntaxKind.BinaryExpression:
        return node.parent.left === node && node.parent.operatorToken.kind === ts9__default.default.SyntaxKind.EqualsToken;
      case ts9__default.default.SyntaxKind.ForOfStatement:
        return node.parent.initializer === node;
      case ts9__default.default.SyntaxKind.PropertyAssignment:
      case ts9__default.default.SyntaxKind.SpreadAssignment:
        node = node.parent.parent;
        break;
      case ts9__default.default.SyntaxKind.SpreadElement:
        if (node.parent.parent.kind !== ts9__default.default.SyntaxKind.ArrayLiteralExpression) {
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
  return node.kind === ts9__default.default.SyntaxKind.AbstractKeyword;
}
function isAccessorKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AccessorKeyword;
}
function isAnyKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AnyKeyword;
}
function isAssertKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AssertKeyword;
}
function isAssertsKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AssertsKeyword;
}
function isAsyncKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AsyncKeyword;
}
function isAwaitKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.AwaitKeyword;
}
function isBigIntKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.BigIntKeyword;
}
function isBooleanKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.BooleanKeyword;
}
function isColonToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.ColonToken;
}
function isConstKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ConstKeyword;
}
function isDeclareKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.DeclareKeyword;
}
function isDefaultKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.DefaultKeyword;
}
function isDotToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.DotToken;
}
function isEndOfFileToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.EndOfFileToken;
}
function isEqualsGreaterThanToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.EqualsGreaterThanToken;
}
function isEqualsToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.EqualsToken;
}
function isExclamationToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.ExclamationToken;
}
function isExportKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ExportKeyword;
}
function isFalseKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.FalseKeyword;
}
function isFalseLiteral(node) {
  return node.kind === ts9__default.default.SyntaxKind.FalseKeyword;
}
function isImportExpression(node) {
  return node.kind === ts9__default.default.SyntaxKind.ImportKeyword;
}
function isImportKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ImportKeyword;
}
function isInKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.InKeyword;
}
function isJSDocText(node) {
  return node.kind === ts9__default.default.SyntaxKind.JSDocText;
}
function isJsonMinusNumericLiteral(node) {
  return node.kind === ts9__default.default.SyntaxKind.PrefixUnaryExpression;
}
function isNeverKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.NeverKeyword;
}
function isNullKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.NullKeyword;
}
function isNullLiteral(node) {
  return node.kind === ts9__default.default.SyntaxKind.NullKeyword;
}
function isNumberKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.NumberKeyword;
}
function isObjectKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ObjectKeyword;
}
function isOutKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.OutKeyword;
}
function isOverrideKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.OverrideKeyword;
}
function isPrivateKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.PrivateKeyword;
}
function isProtectedKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ProtectedKeyword;
}
function isPublicKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.PublicKeyword;
}
function isQuestionDotToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.QuestionDotToken;
}
function isQuestionToken(node) {
  return node.kind === ts9__default.default.SyntaxKind.QuestionToken;
}
function isReadonlyKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ReadonlyKeyword;
}
function isStaticKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.StaticKeyword;
}
function isStringKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.StringKeyword;
}
function isSuperExpression(node) {
  return node.kind === ts9__default.default.SyntaxKind.SuperKeyword;
}
function isSuperKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.SuperKeyword;
}
function isSymbolKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.SymbolKeyword;
}
function isSyntaxList(node) {
  return node.kind === ts9__default.default.SyntaxKind.SyntaxList;
}
function isThisExpression(node) {
  return node.kind === ts9__default.default.SyntaxKind.ThisKeyword;
}
function isThisKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.ThisKeyword;
}
function isTrueKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.TrueKeyword;
}
function isTrueLiteral(node) {
  return node.kind === ts9__default.default.SyntaxKind.TrueKeyword;
}
function isUndefinedKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.UndefinedKeyword;
}
function isUnknownKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.UnknownKeyword;
}
function isVoidKeyword(node) {
  return node.kind === ts9__default.default.SyntaxKind.VoidKeyword;
}
function hasDecorators(node) {
  return ts9__default.default.isParameter(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isMethodDeclaration(node) || ts9__default.default.isGetAccessorDeclaration(node) || ts9__default.default.isSetAccessorDeclaration(node) || ts9__default.default.isClassExpression(node) || ts9__default.default.isClassDeclaration(node);
}
function hasExpressionInitializer(node) {
  return ts9__default.default.isVariableDeclaration(node) || ts9__default.default.isParameter(node) || ts9__default.default.isBindingElement(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isPropertyAssignment(node) || ts9__default.default.isEnumMember(node);
}
function hasInitializer(node) {
  return hasExpressionInitializer(node) || ts9__default.default.isForStatement(node) || ts9__default.default.isForInStatement(node) || ts9__default.default.isForOfStatement(node) || ts9__default.default.isJsxAttribute(node);
}
function hasJSDoc(node) {
  if (
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isAccessorDeclaration(node) || ts9__default.default.isArrowFunction(node) || ts9__default.default.isBlock(node) || ts9__default.default.isBreakStatement(node) || ts9__default.default.isCallSignatureDeclaration(node) || ts9__default.default.isCaseClause(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isClassLikeDeclaration(node) || ts9__default.default.isConstructorDeclaration(node) || ts9__default.default.isConstructorTypeNode(node) || ts9__default.default.isConstructSignatureDeclaration(node) || ts9__default.default.isContinueStatement(node) || ts9__default.default.isDebuggerStatement(node) || ts9__default.default.isDoStatement(node) || ts9__default.default.isEmptyStatement(node) || isEndOfFileToken(node) || ts9__default.default.isEnumDeclaration(node) || ts9__default.default.isEnumMember(node) || ts9__default.default.isExportAssignment(node) || ts9__default.default.isExportDeclaration(node) || ts9__default.default.isExportSpecifier(node) || ts9__default.default.isExpressionStatement(node) || ts9__default.default.isForInStatement(node) || ts9__default.default.isForOfStatement(node) || ts9__default.default.isForStatement(node) || ts9__default.default.isFunctionDeclaration(node) || ts9__default.default.isFunctionExpression(node) || ts9__default.default.isFunctionTypeNode(node) || ts9__default.default.isIfStatement(node) || ts9__default.default.isImportDeclaration(node) || ts9__default.default.isImportEqualsDeclaration(node) || ts9__default.default.isIndexSignatureDeclaration(node) || ts9__default.default.isInterfaceDeclaration(node) || ts9__default.default.isJSDocFunctionType(node) || ts9__default.default.isLabeledStatement(node) || ts9__default.default.isMethodDeclaration(node) || ts9__default.default.isMethodSignature(node) || ts9__default.default.isModuleDeclaration(node) || ts9__default.default.isNamedTupleMember(node) || ts9__default.default.isNamespaceExportDeclaration(node) || ts9__default.default.isParameter(node) || ts9__default.default.isParenthesizedExpression(node) || ts9__default.default.isPropertyAssignment(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isPropertySignature(node) || ts9__default.default.isReturnStatement(node) || ts9__default.default.isShorthandPropertyAssignment(node) || ts9__default.default.isSpreadAssignment(node) || ts9__default.default.isSwitchStatement(node) || ts9__default.default.isThrowStatement(node) || ts9__default.default.isTryStatement(node) || ts9__default.default.isTypeAliasDeclaration(node) || ts9__default.default.isVariableDeclaration(node) || ts9__default.default.isVariableStatement(node) || ts9__default.default.isWhileStatement(node) || ts9__default.default.isWithStatement(node)
  ) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4) && ts9__default.default.isClassStaticBlockDeclaration(node)) {
    return true;
  }
  if (isTsVersionAtLeast(5, 0) && (ts9__default.default.isBinaryExpression(node) || ts9__default.default.isElementAccessExpression(node) || ts9__default.default.isIdentifier(node) || ts9__default.default.isJSDocSignature(node) || ts9__default.default.isObjectLiteralExpression(node) || ts9__default.default.isPropertyAccessExpression(node) || ts9__default.default.isTypeParameterDeclaration(node))) {
    return true;
  }
  return false;
}
function hasModifiers(node) {
  return ts9__default.default.isTypeParameterDeclaration(node) || ts9__default.default.isParameter(node) || ts9__default.default.isConstructorTypeNode(node) || ts9__default.default.isPropertySignature(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isMethodSignature(node) || ts9__default.default.isMethodDeclaration(node) || ts9__default.default.isConstructorDeclaration(node) || ts9__default.default.isGetAccessorDeclaration(node) || ts9__default.default.isSetAccessorDeclaration(node) || ts9__default.default.isIndexSignatureDeclaration(node) || ts9__default.default.isFunctionExpression(node) || ts9__default.default.isArrowFunction(node) || ts9__default.default.isClassExpression(node) || ts9__default.default.isVariableStatement(node) || ts9__default.default.isFunctionDeclaration(node) || ts9__default.default.isClassDeclaration(node) || ts9__default.default.isInterfaceDeclaration(node) || ts9__default.default.isTypeAliasDeclaration(node) || ts9__default.default.isEnumDeclaration(node) || ts9__default.default.isModuleDeclaration(node) || ts9__default.default.isImportEqualsDeclaration(node) || ts9__default.default.isImportDeclaration(node) || ts9__default.default.isExportAssignment(node) || ts9__default.default.isExportDeclaration(node);
}
function hasType(node) {
  return isSignatureDeclaration(node) || ts9__default.default.isVariableDeclaration(node) || ts9__default.default.isParameter(node) || ts9__default.default.isPropertySignature(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isTypePredicateNode(node) || ts9__default.default.isParenthesizedTypeNode(node) || ts9__default.default.isTypeOperatorNode(node) || ts9__default.default.isMappedTypeNode(node) || ts9__default.default.isAssertionExpression(node) || ts9__default.default.isTypeAliasDeclaration(node) || ts9__default.default.isJSDocTypeExpression(node) || ts9__default.default.isJSDocNonNullableType(node) || ts9__default.default.isJSDocNullableType(node) || ts9__default.default.isJSDocOptionalType(node) || ts9__default.default.isJSDocVariadicType(node);
}
function hasTypeArguments(node) {
  return ts9__default.default.isCallExpression(node) || ts9__default.default.isNewExpression(node) || ts9__default.default.isTaggedTemplateExpression(node) || ts9__default.default.isJsxOpeningElement(node) || ts9__default.default.isJsxSelfClosingElement(node);
}
function isAccessExpression(node) {
  return ts9__default.default.isPropertyAccessExpression(node) || ts9__default.default.isElementAccessExpression(node);
}
function isAccessibilityModifier(node) {
  return isPublicKeyword(node) || isPrivateKeyword(node) || isProtectedKeyword(node);
}
function isAccessorDeclaration(node) {
  return ts9__default.default.isGetAccessorDeclaration(node) || ts9__default.default.isSetAccessorDeclaration(node);
}
function isArrayBindingElement(node) {
  return ts9__default.default.isBindingElement(node) || ts9__default.default.isOmittedExpression(node);
}
function isArrayBindingOrAssignmentPattern(node) {
  return ts9__default.default.isArrayBindingPattern(node) || ts9__default.default.isArrayLiteralExpression(node);
}
function isAssignmentPattern(node) {
  return ts9__default.default.isObjectLiteralExpression(node) || ts9__default.default.isArrayLiteralExpression(node);
}
function isBindingOrAssignmentElementRestIndicator(node) {
  if (ts9__default.default.isSpreadElement(node) || ts9__default.default.isSpreadAssignment(node)) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4)) {
    return ts9__default.default.isDotDotDotToken(node);
  }
  return false;
}
function isBindingOrAssignmentElementTarget(node) {
  return isBindingOrAssignmentPattern(node) || ts9__default.default.isIdentifier(node) || ts9__default.default.isPropertyAccessExpression(node) || ts9__default.default.isElementAccessExpression(node) || ts9__default.default.isOmittedExpression(node);
}
function isBindingOrAssignmentPattern(node) {
  return isObjectBindingOrAssignmentPattern(node) || isArrayBindingOrAssignmentPattern(node);
}
function isBindingPattern(node) {
  return ts9__default.default.isObjectBindingPattern(node) || ts9__default.default.isArrayBindingPattern(node);
}
function isBlockLike(node) {
  return ts9__default.default.isSourceFile(node) || ts9__default.default.isBlock(node) || ts9__default.default.isModuleBlock(node) || ts9__default.default.isCaseOrDefaultClause(node);
}
function isBooleanLiteral(node) {
  return isTrueLiteral(node) || isFalseLiteral(node);
}
function isClassLikeDeclaration(node) {
  return ts9__default.default.isClassDeclaration(node) || ts9__default.default.isClassExpression(node);
}
function isClassMemberModifier(node) {
  return isAccessibilityModifier(node) || isReadonlyKeyword(node) || isStaticKeyword(node) || isAccessorKeyword(node);
}
function isDeclarationName(node) {
  return ts9__default.default.isIdentifier(node) || ts9__default.default.isPrivateIdentifier(node) || ts9__default.default.isStringLiteralLike(node) || ts9__default.default.isNumericLiteral(node) || ts9__default.default.isComputedPropertyName(node) || ts9__default.default.isElementAccessExpression(node) || isBindingPattern(node) || isEntityNameExpression(node);
}
function isDeclarationWithTypeParameterChildren(node) {
  return isSignatureDeclaration(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
  isClassLikeDeclaration(node) || ts9__default.default.isInterfaceDeclaration(node) || ts9__default.default.isTypeAliasDeclaration(node) || ts9__default.default.isJSDocTemplateTag(node);
}
function isDeclarationWithTypeParameters(node) {
  return isDeclarationWithTypeParameterChildren(node) || ts9__default.default.isJSDocTypedefTag(node) || ts9__default.default.isJSDocCallbackTag(node) || ts9__default.default.isJSDocSignature(node);
}
function isDestructuringPattern(node) {
  return isBindingPattern(node) || ts9__default.default.isObjectLiteralExpression(node) || ts9__default.default.isArrayLiteralExpression(node);
}
function isEntityNameExpression(node) {
  return ts9__default.default.isIdentifier(node) || isPropertyAccessEntityNameExpression(node);
}
function isEntityNameOrEntityNameExpression(node) {
  return ts9__default.default.isEntityName(node) || isEntityNameExpression(node);
}
function isForInOrOfStatement(node) {
  return ts9__default.default.isForInStatement(node) || ts9__default.default.isForOfStatement(node);
}
function isFunctionLikeDeclaration(node) {
  return ts9__default.default.isFunctionDeclaration(node) || ts9__default.default.isMethodDeclaration(node) || ts9__default.default.isGetAccessorDeclaration(node) || ts9__default.default.isSetAccessorDeclaration(node) || ts9__default.default.isConstructorDeclaration(node) || ts9__default.default.isFunctionExpression(node) || ts9__default.default.isArrowFunction(node);
}
function isJSDocComment(node) {
  if (isJSDocText(node)) {
    return true;
  }
  if (isTsVersionAtLeast(4, 4)) {
    return ts9__default.default.isJSDocLink(node) || ts9__default.default.isJSDocLinkCode(node) || ts9__default.default.isJSDocLinkPlain(node);
  }
  return false;
}
function isJSDocNamespaceBody(node) {
  return ts9__default.default.isIdentifier(node) || isJSDocNamespaceDeclaration(node);
}
function isJSDocTypeReferencingNode(node) {
  return ts9__default.default.isJSDocVariadicType(node) || ts9__default.default.isJSDocOptionalType(node) || ts9__default.default.isJSDocNullableType(node) || ts9__default.default.isJSDocNonNullableType(node);
}
function isJsonObjectExpression(node) {
  return ts9__default.default.isObjectLiteralExpression(node) || ts9__default.default.isArrayLiteralExpression(node) || isJsonMinusNumericLiteral(node) || ts9__default.default.isNumericLiteral(node) || ts9__default.default.isStringLiteral(node) || isBooleanLiteral(node) || isNullLiteral(node);
}
function isJsxAttributeLike(node) {
  return ts9__default.default.isJsxAttribute(node) || ts9__default.default.isJsxSpreadAttribute(node);
}
function isJsxAttributeValue(node) {
  return ts9__default.default.isStringLiteral(node) || ts9__default.default.isJsxExpression(node) || ts9__default.default.isJsxElement(node) || ts9__default.default.isJsxSelfClosingElement(node) || ts9__default.default.isJsxFragment(node);
}
function isJsxChild(node) {
  return ts9__default.default.isJsxText(node) || ts9__default.default.isJsxExpression(node) || ts9__default.default.isJsxElement(node) || ts9__default.default.isJsxSelfClosingElement(node) || ts9__default.default.isJsxFragment(node);
}
function isJsxTagNameExpression(node) {
  return ts9__default.default.isIdentifier(node) || isThisExpression(node) || isJsxTagNamePropertyAccess(node);
}
function isLiteralToken(node) {
  return ts9__default.default.isNumericLiteral(node) || ts9__default.default.isBigIntLiteral(node) || ts9__default.default.isStringLiteral(node) || ts9__default.default.isJsxText(node) || ts9__default.default.isRegularExpressionLiteral(node) || ts9__default.default.isNoSubstitutionTemplateLiteral(node);
}
function isModuleBody(node) {
  return isNamespaceBody(node) || isJSDocNamespaceBody(node);
}
function isModuleName(node) {
  return ts9__default.default.isIdentifier(node) || ts9__default.default.isStringLiteral(node);
}
function isModuleReference(node) {
  return ts9__default.default.isEntityName(node) || ts9__default.default.isExternalModuleReference(node);
}
function isNamedImportBindings(node) {
  return ts9__default.default.isNamespaceImport(node) || ts9__default.default.isNamedImports(node);
}
function isNamedImportsOrExports(node) {
  return ts9__default.default.isNamedImports(node) || ts9__default.default.isNamedExports(node);
}
function isNamespaceBody(node) {
  return ts9__default.default.isModuleBlock(node) || isNamespaceDeclaration(node);
}
function isObjectBindingOrAssignmentElement(node) {
  return ts9__default.default.isBindingElement(node) || ts9__default.default.isPropertyAssignment(node) || ts9__default.default.isShorthandPropertyAssignment(node) || ts9__default.default.isSpreadAssignment(node);
}
function isObjectBindingOrAssignmentPattern(node) {
  return ts9__default.default.isObjectBindingPattern(node) || ts9__default.default.isObjectLiteralExpression(node);
}
function isObjectTypeDeclaration(node) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
    isClassLikeDeclaration(node) || ts9__default.default.isInterfaceDeclaration(node) || ts9__default.default.isTypeLiteralNode(node)
  );
}
function isParameterPropertyModifier(node) {
  return isAccessibilityModifier(node) || isReadonlyKeyword(node);
}
function isPropertyNameLiteral(node) {
  return ts9__default.default.isIdentifier(node) || ts9__default.default.isStringLiteralLike(node) || ts9__default.default.isNumericLiteral(node);
}
function isPseudoLiteralToken(node) {
  return ts9__default.default.isTemplateHead(node) || ts9__default.default.isTemplateMiddle(node) || ts9__default.default.isTemplateTail(node);
}
function isSignatureDeclaration(node) {
  return ts9__default.default.isCallSignatureDeclaration(node) || ts9__default.default.isConstructSignatureDeclaration(node) || ts9__default.default.isMethodSignature(node) || ts9__default.default.isIndexSignatureDeclaration(node) || ts9__default.default.isFunctionTypeNode(node) || ts9__default.default.isConstructorTypeNode(node) || ts9__default.default.isJSDocFunctionType(node) || ts9__default.default.isFunctionDeclaration(node) || ts9__default.default.isMethodDeclaration(node) || ts9__default.default.isConstructorDeclaration(node) || // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts <5
  isAccessorDeclaration(node) || ts9__default.default.isFunctionExpression(node) || ts9__default.default.isArrowFunction(node);
}
function isSuperProperty(node) {
  return isSuperPropertyAccessExpression(node) || isSuperElementAccessExpression(node);
}
function isTypeOnlyCompatibleAliasDeclaration(node) {
  if (ts9__default.default.isImportClause(node) || ts9__default.default.isImportEqualsDeclaration(node) || ts9__default.default.isNamespaceImport(node) || ts9__default.default.isImportOrExportSpecifier(node)) {
    return true;
  }
  if (isTsVersionAtLeast(5, 0) && (ts9__default.default.isExportDeclaration(node) || ts9__default.default.isNamespaceExport(node))) {
    return true;
  }
  return false;
}
function isTypeReferenceType(node) {
  return ts9__default.default.isTypeReferenceNode(node) || ts9__default.default.isExpressionWithTypeArguments(node);
}
function isUnionOrIntersectionTypeNode(node) {
  return ts9__default.default.isUnionTypeNode(node) || ts9__default.default.isIntersectionTypeNode(node);
}
function isVariableLikeDeclaration(node) {
  return ts9__default.default.isVariableDeclaration(node) || ts9__default.default.isParameter(node) || ts9__default.default.isBindingElement(node) || ts9__default.default.isPropertyDeclaration(node) || ts9__default.default.isPropertyAssignment(node) || ts9__default.default.isPropertySignature(node) || ts9__default.default.isJsxAttribute(node) || ts9__default.default.isShorthandPropertyAssignment(node) || ts9__default.default.isEnumMember(node) || ts9__default.default.isJSDocPropertyTag(node) || ts9__default.default.isJSDocParameterTag(node);
}

// src/nodes/typeGuards/compound.ts
function isConstAssertionExpression(node) {
  return ts9__default.default.isTypeReferenceNode(node.type) && ts9__default.default.isIdentifier(node.type.typeName) && node.type.typeName.escapedText === "const";
}
function isIterationStatement(node) {
  switch (node.kind) {
    case ts9__default.default.SyntaxKind.DoStatement:
    case ts9__default.default.SyntaxKind.ForInStatement:
    case ts9__default.default.SyntaxKind.ForOfStatement:
    case ts9__default.default.SyntaxKind.ForStatement:
    case ts9__default.default.SyntaxKind.WhileStatement:
      return true;
    default:
      return false;
  }
}
function isJSDocNamespaceDeclaration(node) {
  return ts9__default.default.isModuleDeclaration(node) && ts9__default.default.isIdentifier(node.name) && (node.body === void 0 || isJSDocNamespaceBody(node.body));
}
function isJsxTagNamePropertyAccess(node) {
  return ts9__default.default.isPropertyAccessExpression(node) && // eslint-disable-next-line @typescript-eslint/no-deprecated -- Keep compatibility with ts < 5
  isJsxTagNameExpression(node.expression);
}
function isNamedDeclarationWithName(node) {
  return "name" in node && node.name !== void 0 && node.name !== null && isDeclarationName(node.name);
}
function isNamespaceDeclaration(node) {
  return ts9__default.default.isModuleDeclaration(node) && ts9__default.default.isIdentifier(node.name) && node.body !== void 0 && isNamespaceBody(node.body);
}
function isNumericOrStringLikeLiteral(node) {
  switch (node.kind) {
    case ts9__default.default.SyntaxKind.NoSubstitutionTemplateLiteral:
    case ts9__default.default.SyntaxKind.NumericLiteral:
    case ts9__default.default.SyntaxKind.StringLiteral:
      return true;
    default:
      return false;
  }
}
function isPropertyAccessEntityNameExpression(node) {
  return ts9__default.default.isPropertyAccessExpression(node) && ts9__default.default.isIdentifier(node.name) && isEntityNameExpression(node.expression);
}
function isSuperElementAccessExpression(node) {
  return ts9__default.default.isElementAccessExpression(node) && isSuperExpression(node.expression);
}
function isSuperPropertyAccessExpression(node) {
  return ts9__default.default.isPropertyAccessExpression(node) && isSuperExpression(node.expression);
}
function isFunctionScopeBoundary(node) {
  switch (node.kind) {
    case ts9__default.default.SyntaxKind.ArrowFunction:
    case ts9__default.default.SyntaxKind.CallSignature:
    case ts9__default.default.SyntaxKind.ClassDeclaration:
    case ts9__default.default.SyntaxKind.ClassExpression:
    case ts9__default.default.SyntaxKind.Constructor:
    case ts9__default.default.SyntaxKind.ConstructorType:
    case ts9__default.default.SyntaxKind.ConstructSignature:
    case ts9__default.default.SyntaxKind.EnumDeclaration:
    case ts9__default.default.SyntaxKind.FunctionDeclaration:
    case ts9__default.default.SyntaxKind.FunctionExpression:
    case ts9__default.default.SyntaxKind.FunctionType:
    case ts9__default.default.SyntaxKind.GetAccessor:
    case ts9__default.default.SyntaxKind.MethodDeclaration:
    case ts9__default.default.SyntaxKind.MethodSignature:
    case ts9__default.default.SyntaxKind.ModuleDeclaration:
    case ts9__default.default.SyntaxKind.SetAccessor:
      return true;
    case ts9__default.default.SyntaxKind.SourceFile:
      return ts9__default.default.isExternalModule(node);
    default:
      return false;
  }
}
function isIntrinsicAnyType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Any);
}
function isIntrinsicBigIntType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.BigInt);
}
function isIntrinsicBooleanType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Boolean);
}
function isIntrinsicErrorType(type) {
  return isIntrinsicType(type) && type.intrinsicName === "error";
}
function isIntrinsicESSymbolType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.ESSymbol);
}
var IntrinsicTypeFlags = ts9__default.default.TypeFlags.Intrinsic ?? ts9__default.default.TypeFlags.Any | ts9__default.default.TypeFlags.Unknown | ts9__default.default.TypeFlags.String | ts9__default.default.TypeFlags.Number | ts9__default.default.TypeFlags.BigInt | ts9__default.default.TypeFlags.Boolean | ts9__default.default.TypeFlags.BooleanLiteral | ts9__default.default.TypeFlags.ESSymbol | ts9__default.default.TypeFlags.Void | ts9__default.default.TypeFlags.Undefined | ts9__default.default.TypeFlags.Null | ts9__default.default.TypeFlags.Never | ts9__default.default.TypeFlags.NonPrimitive;
function isIntrinsicNeverType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Never);
}
function isIntrinsicNonPrimitiveType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.NonPrimitive);
}
function isIntrinsicNullType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Null);
}
function isIntrinsicNumberType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Number);
}
function isIntrinsicStringType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.String);
}
function isIntrinsicType(type) {
  return isTypeFlagSet(type, IntrinsicTypeFlags);
}
function isIntrinsicUndefinedType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Undefined);
}
function isIntrinsicUnknownType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Unknown);
}
function isIntrinsicVoidType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Void);
}
function isConditionalType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Conditional);
}
function isEnumType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Enum);
}
function isFreshableType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Freshable);
}
function isIndexedAccessType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.IndexedAccess);
}
function isIndexType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Index);
}
function isInstantiableType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Instantiable);
}
function isIntersectionType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Intersection);
}
function isObjectType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Object);
}
function isStringMappingType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.StringMapping);
}
function isSubstitutionType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Substitution);
}
function isTypeParameter(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.TypeParameter);
}
function isTypeVariable(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.TypeVariable);
}
function isUnionOrIntersectionType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.UnionOrIntersection);
}
function isUnionType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Union);
}
function isUniqueESSymbolType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.UniqueESSymbol);
}

// src/types/typeGuards/objects.ts
function isEvolvingArrayType(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9__default.default.ObjectFlags.EvolvingArray);
}
function isTupleType(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9__default.default.ObjectFlags.Tuple);
}
function isTypeReference(type) {
  return isObjectType(type) && isObjectFlagSet(type, ts9__default.default.ObjectFlags.Reference);
}

// src/types/typeGuards/compound.ts
function isFreshableIntrinsicType(type) {
  return isIntrinsicType(type) && isFreshableType(type);
}
function isTupleTypeReference(type) {
  return isTypeReference(type) && isTupleType(type.target);
}
function isBigIntLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.BigIntLiteral);
}
function isBooleanLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.BooleanLiteral);
}
function isFalseLiteralType(type) {
  return isBooleanLiteralType(type) && type.intrinsicName === "false";
}
function isLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.Literal);
}
function isNumberLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.NumberLiteral);
}
function isStringLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.StringLiteral);
}
function isTemplateLiteralType(type) {
  return isTypeFlagSet(type, ts9__default.default.TypeFlags.TemplateLiteral);
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
    if (!declaration || !isNamedDeclarationWithName(declaration) || declaration.name === void 0 || !ts9__default.default.isComputedPropertyName(declaration.name)) {
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
  return node.arguments.length === 3 && isEntityNameExpression(node.arguments[0]) && isNumericOrStringLikeLiteral(node.arguments[1]) && ts9__default.default.isPropertyAccessExpression(node.expression) && node.expression.name.escapedText === "defineProperty" && ts9__default.default.isIdentifier(node.expression.expression) && node.expression.expression.escapedText === "Object";
}
function isInConstContext(node, typeChecker) {
  let current = node;
  while (true) {
    const parent = current.parent;
    outer: switch (parent.kind) {
      case ts9__default.default.SyntaxKind.ArrayLiteralExpression:
      case ts9__default.default.SyntaxKind.ObjectLiteralExpression:
      case ts9__default.default.SyntaxKind.ParenthesizedExpression:
      case ts9__default.default.SyntaxKind.TemplateExpression:
        current = parent;
        break;
      case ts9__default.default.SyntaxKind.AsExpression:
      case ts9__default.default.SyntaxKind.TypeAssertionExpression:
        return isConstAssertionExpression(parent);
      case ts9__default.default.SyntaxKind.CallExpression: {
        if (!ts9__default.default.isExpression(current)) {
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
          ts9__default.default.CheckFlags.Readonly
        );
      }
      case ts9__default.default.SyntaxKind.PrefixUnaryExpression:
        if (current.kind !== ts9__default.default.SyntaxKind.NumericLiteral) {
          return false;
        }
        switch (parent.operator) {
          case ts9__default.default.SyntaxKind.MinusToken:
          case ts9__default.default.SyntaxKind.PlusToken:
            current = parent;
            break outer;
          default:
            return false;
        }
      case ts9__default.default.SyntaxKind.PropertyAssignment:
        if (parent.initializer !== current) {
          return false;
        }
        current = parent.parent;
        break;
      case ts9__default.default.SyntaxKind.ShorthandPropertyAssignment:
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
    ts9__default.default.TypeFlags.Undefined | ts9__default.default.TypeFlags.Null | ts9__default.default.TypeFlags.Void
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
      const index = (isNumericPropertyName(name) ? typeChecker.getIndexInfoOfType(subType, ts9__default.default.IndexKind.Number) : void 0) ?? typeChecker.getIndexInfoOfType(subType, ts9__default.default.IndexKind.String);
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
  return !!((symbol.flags & ts9__default.default.SymbolFlags.Accessor) === ts9__default.default.SymbolFlags.GetAccessor || symbol.declarations?.some(
    (node) => isModifierFlagSet(node, ts9__default.default.ModifierFlags.Readonly) || ts9__default.default.isVariableDeclaration(node) && isNodeFlagSet(node.parent, ts9__default.default.NodeFlags.Const) || ts9__default.default.isCallExpression(node) && isReadonlyAssignmentDeclaration(node, typeChecker) || ts9__default.default.isEnumMember(node) || (ts9__default.default.isPropertyAssignment(node) || ts9__default.default.isShorthandPropertyAssignment(node)) && isInConstContext(node, typeChecker)
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
      ts9__default.default.TypeFlags.StringLiteral | ts9__default.default.TypeFlags.NumberLiteral | ts9__default.default.TypeFlags.BigIntLiteral
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
  const writableType = writableProp.valueDeclaration !== void 0 && ts9__default.default.isPropertyAssignment(writableProp.valueDeclaration) ? typeChecker.getTypeAtLocation(writableProp.valueDeclaration.initializer) : typeChecker.getTypeOfSymbolAtLocation(writableProp, node.arguments[2]);
  return isFalseLiteralType(writableType);
}
function isReadonlyPropertyFromMappedType(type, name, typeChecker) {
  if (!isObjectType(type) || !isObjectFlagSet(type, ts9__default.default.ObjectFlags.Mapped)) {
    return;
  }
  const declaration = type.symbol.declarations[0];
  if (declaration.readonlyToken !== void 0 && !/^__@[^@]+$/.test(name)) {
    return declaration.readonlyToken.kind !== ts9__default.default.SyntaxKind.MinusToken;
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
    if (prop.flags & ts9__default.default.SymbolFlags.Transient) {
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
      isSymbolFlagSet(prop, ts9__default.default.SymbolFlags.ValueModule) || // we unwrapped every mapped type, now we can check the actual declarations
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- Will be made private-only soon.
      symbolHasReadonlyDeclaration(prop, typeChecker)
    );
  });
}
function identifierToKeywordKind(node) {
  return "originalKeywordKind" in node ? node.originalKeywordKind : ts9__default.default.identifierToKeywordKind(node);
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
    case ts9__default.default.SyntaxKind.ClassDeclaration:
    case ts9__default.default.SyntaxKind.ClassExpression:
      return 2 /* Type */ | 4 /* Value */;
    case ts9__default.default.SyntaxKind.EnumDeclaration:
      return 7 /* Any */;
    case ts9__default.default.SyntaxKind.FunctionDeclaration:
    case ts9__default.default.SyntaxKind.FunctionExpression:
      return 4 /* Value */;
    case ts9__default.default.SyntaxKind.ImportClause:
    case ts9__default.default.SyntaxKind.NamespaceImport:
      return 7 /* Any */ | 8 /* Import */;
    // TODO handle type-only imports
    case ts9__default.default.SyntaxKind.ImportEqualsDeclaration:
    case ts9__default.default.SyntaxKind.ImportSpecifier:
      return node.parent.name === node ? 7 /* Any */ | 8 /* Import */ : void 0;
    case ts9__default.default.SyntaxKind.InterfaceDeclaration:
    case ts9__default.default.SyntaxKind.TypeAliasDeclaration:
    case ts9__default.default.SyntaxKind.TypeParameter:
      return 2 /* Type */;
    case ts9__default.default.SyntaxKind.ModuleDeclaration:
      return 1 /* Namespace */;
    case ts9__default.default.SyntaxKind.Parameter:
      if (node.parent.parent.kind === ts9__default.default.SyntaxKind.IndexSignature || identifierToKeywordKind(node) === ts9__default.default.SyntaxKind.ThisKeyword) {
        return;
      }
    // falls through
    case ts9__default.default.SyntaxKind.BindingElement:
    case ts9__default.default.SyntaxKind.VariableDeclaration:
      return node.parent.name === node ? 4 /* Value */ : void 0;
  }
}
function getPropertyName(propertyName) {
  if (propertyName.kind === ts9__default.default.SyntaxKind.ComputedPropertyName) {
    const expression = unwrapParentheses(propertyName.expression);
    if (ts9__default.default.isPrefixUnaryExpression(expression)) {
      let negate = false;
      switch (expression.operator) {
        case ts9__default.default.SyntaxKind.MinusToken:
          negate = true;
        // falls through
        case ts9__default.default.SyntaxKind.PlusToken:
          return ts9__default.default.isNumericLiteral(expression.operand) ? `${negate ? "-" : ""}${expression.operand.text}` : ts9__default.default.isBigIntLiteral(expression.operand) ? `${negate ? "-" : ""}${expression.operand.text.slice(0, -1)}` : void 0;
        default:
          return;
      }
    }
    if (ts9__default.default.isBigIntLiteral(expression)) {
      return expression.text.slice(0, -1);
    }
    if (isNumericOrStringLikeLiteral(expression)) {
      return expression.text;
    }
    return;
  }
  return propertyName.kind === ts9__default.default.SyntaxKind.PrivateIdentifier ? void 0 : propertyName.text;
}
function unwrapParentheses(node) {
  while (node.kind === ts9__default.default.SyntaxKind.ParenthesizedExpression) {
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
    case ts9__default.default.SyntaxKind.BindingElement:
      if (parent.initializer === node) {
        return 5 /* ValueOrNamespace */;
      }
      break;
    case ts9__default.default.SyntaxKind.BreakStatement:
    case ts9__default.default.SyntaxKind.ClassDeclaration:
    case ts9__default.default.SyntaxKind.ClassExpression:
    case ts9__default.default.SyntaxKind.ContinueStatement:
    case ts9__default.default.SyntaxKind.EnumDeclaration:
    case ts9__default.default.SyntaxKind.FunctionDeclaration:
    case ts9__default.default.SyntaxKind.FunctionExpression:
    case ts9__default.default.SyntaxKind.GetAccessor:
    case ts9__default.default.SyntaxKind.ImportClause:
    case ts9__default.default.SyntaxKind.ImportSpecifier:
    case ts9__default.default.SyntaxKind.InterfaceDeclaration:
    case ts9__default.default.SyntaxKind.JsxAttribute:
    case ts9__default.default.SyntaxKind.LabeledStatement:
    case ts9__default.default.SyntaxKind.MethodDeclaration:
    case ts9__default.default.SyntaxKind.MethodSignature:
    case ts9__default.default.SyntaxKind.ModuleDeclaration:
    case ts9__default.default.SyntaxKind.NamedTupleMember:
    case ts9__default.default.SyntaxKind.NamespaceExport:
    case ts9__default.default.SyntaxKind.NamespaceExportDeclaration:
    case ts9__default.default.SyntaxKind.NamespaceImport:
    case ts9__default.default.SyntaxKind.PropertySignature:
    case ts9__default.default.SyntaxKind.SetAccessor:
    case ts9__default.default.SyntaxKind.TypeAliasDeclaration:
    case ts9__default.default.SyntaxKind.TypeParameter:
    case ts9__default.default.SyntaxKind.TypePredicate:
      break;
    case ts9__default.default.SyntaxKind.EnumMember:
    case ts9__default.default.SyntaxKind.ImportEqualsDeclaration:
    case ts9__default.default.SyntaxKind.Parameter:
    case ts9__default.default.SyntaxKind.PropertyAccessExpression:
    case ts9__default.default.SyntaxKind.PropertyAssignment:
    case ts9__default.default.SyntaxKind.PropertyDeclaration:
    case ts9__default.default.SyntaxKind.VariableDeclaration:
      if (parent.name !== node) {
        return 5 /* ValueOrNamespace */;
      }
      break;
    case ts9__default.default.SyntaxKind.ExportAssignment:
      return 7 /* Any */;
    case ts9__default.default.SyntaxKind.ExportSpecifier:
      if (parent.propertyName === void 0 || parent.propertyName === node) {
        return 7 /* Any */;
      }
      break;
    case ts9__default.default.SyntaxKind.ExpressionWithTypeArguments:
      return parent.parent.token === ts9__default.default.SyntaxKind.ImplementsKeyword || parent.parent.parent.kind === ts9__default.default.SyntaxKind.InterfaceDeclaration ? 2 /* Type */ : 4 /* Value */;
    case ts9__default.default.SyntaxKind.QualifiedName:
      if (parent.left === node) {
        if (getEntityNameParent(parent).kind === ts9__default.default.SyntaxKind.TypeQuery) {
          return 1 /* Namespace */ | 8 /* TypeQuery */;
        }
        return 1 /* Namespace */;
      }
      break;
    case ts9__default.default.SyntaxKind.TypeQuery:
      return 5 /* ValueOrNamespace */ | 8 /* TypeQuery */;
    case ts9__default.default.SyntaxKind.TypeReference:
      return identifierToKeywordKind(node) !== ts9__default.default.SyntaxKind.ConstKeyword ? 2 /* Type */ : void 0;
    default:
      return 5 /* ValueOrNamespace */;
  }
}
function getEntityNameParent(name) {
  let parent = name.parent;
  while (parent.kind === ts9__default.default.SyntaxKind.QualifiedName) {
    parent = parent.parent;
  }
  return parent;
}
function isBlockScopeBoundary(node) {
  switch (node.kind) {
    case ts9__default.default.SyntaxKind.Block: {
      const parent = node.parent;
      return parent.kind !== ts9__default.default.SyntaxKind.CatchClause && // blocks inside SourceFile are block scope boundaries
      (parent.kind === ts9__default.default.SyntaxKind.SourceFile || // blocks that are direct children of a function scope boundary are no scope boundary
      // for example the FunctionBlock is part of the function scope of the containing function
      !isFunctionScopeBoundary(parent)) ? 2 /* Block */ : 0 /* None */;
    }
    case ts9__default.default.SyntaxKind.CaseBlock:
    case ts9__default.default.SyntaxKind.CatchClause:
    case ts9__default.default.SyntaxKind.ForInStatement:
    case ts9__default.default.SyntaxKind.ForOfStatement:
    case ts9__default.default.SyntaxKind.ForStatement:
    case ts9__default.default.SyntaxKind.WithStatement:
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
    const isModule = ts9__default.default.isExternalModule(sourceFile);
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
        case ts9__default.default.SyntaxKind.ArrowFunction:
        case ts9__default.default.SyntaxKind.CallSignature:
        case ts9__default.default.SyntaxKind.Constructor:
        case ts9__default.default.SyntaxKind.ConstructorType:
        case ts9__default.default.SyntaxKind.ConstructSignature:
        case ts9__default.default.SyntaxKind.FunctionDeclaration:
        case ts9__default.default.SyntaxKind.FunctionExpression:
        case ts9__default.default.SyntaxKind.FunctionType:
        case ts9__default.default.SyntaxKind.GetAccessor:
        case ts9__default.default.SyntaxKind.MethodDeclaration:
        case ts9__default.default.SyntaxKind.MethodSignature:
        case ts9__default.default.SyntaxKind.SetAccessor:
          return this.#handleFunctionLikeDeclaration(
            node,
            cb,
            variableCallback
          );
        case ts9__default.default.SyntaxKind.ClassDeclaration:
          this.#handleDeclaration(
            node,
            true,
            4 /* Value */ | 2 /* Type */
          );
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 1 /* Function */)
          );
        case ts9__default.default.SyntaxKind.ClassExpression:
          return continueWithScope(
            node,
            node.name !== void 0 ? new ClassExpressionScope(
              node.name,
              this.#scope
            ) : new NonRootScope(this.#scope, 1 /* Function */)
          );
        case ts9__default.default.SyntaxKind.ConditionalType:
          return this.#handleConditionalType(
            node,
            cb,
            variableCallback
          );
        case ts9__default.default.SyntaxKind.EnumDeclaration:
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
                ts9__default.default.SyntaxKind.ExportKeyword
              )
            )
          );
        case ts9__default.default.SyntaxKind.EnumMember:
          this.#scope.addVariable(
            getPropertyName(node.name),
            node.name,
            1 /* Function */,
            true,
            4 /* Value */
          );
          break;
        case ts9__default.default.SyntaxKind.ExportAssignment:
          if (node.expression.kind === ts9__default.default.SyntaxKind.Identifier) {
            return this.#scope.markExported(
              node.expression
            );
          }
          break;
        case ts9__default.default.SyntaxKind.ExportSpecifier:
          if (node.propertyName !== void 0) {
            return this.#scope.markExported(
              node.propertyName,
              node.name
            );
          }
          return this.#scope.markExported(node.name);
        case ts9__default.default.SyntaxKind.Identifier: {
          const domain = getUsageDomain(node);
          if (domain !== void 0) {
            this.#scope.addUse({ domain, location: node });
          }
          return;
        }
        case ts9__default.default.SyntaxKind.ImportClause:
        case ts9__default.default.SyntaxKind.ImportEqualsDeclaration:
        case ts9__default.default.SyntaxKind.ImportSpecifier:
        case ts9__default.default.SyntaxKind.NamespaceImport:
          this.#handleDeclaration(
            node,
            false,
            7 /* Any */ | 8 /* Import */
          );
          break;
        case ts9__default.default.SyntaxKind.InterfaceDeclaration:
        case ts9__default.default.SyntaxKind.TypeAliasDeclaration:
          this.#handleDeclaration(
            node,
            true,
            2 /* Type */
          );
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 4 /* Type */)
          );
        case ts9__default.default.SyntaxKind.MappedType:
          return continueWithScope(
            node,
            new NonRootScope(this.#scope, 4 /* Type */)
          );
        case ts9__default.default.SyntaxKind.ModuleDeclaration:
          return this.#handleModule(
            node,
            continueWithScope
          );
        case ts9__default.default.SyntaxKind.Parameter:
          if (node.parent.kind !== ts9__default.default.SyntaxKind.IndexSignature && (node.name.kind !== ts9__default.default.SyntaxKind.Identifier || identifierToKeywordKind(
            node.name
          ) !== ts9__default.default.SyntaxKind.ThisKeyword)) {
            this.#handleBindingName(
              node.name,
              false,
              false
            );
          }
          break;
        case ts9__default.default.SyntaxKind.TypeParameter:
          this.#scope.addVariable(
            node.name.text,
            node.name,
            node.parent.kind === ts9__default.default.SyntaxKind.InferType ? 8 /* InferType */ : 7 /* Type */,
            false,
            2 /* Type */
          );
          break;
        // End of Scope specific handling
        case ts9__default.default.SyntaxKind.VariableDeclarationList:
          this.#handleVariableDeclaration(node);
          break;
      }
      return ts9__default.default.forEachChild(node, cb);
    };
    const continueWithScope = (node, scope, next = forEachChild) => {
      const savedScope = this.#scope;
      this.#scope = scope;
      next(node);
      this.#scope.end(variableCallback);
      this.#scope = savedScope;
    };
    const handleBlockScope = (node) => {
      if (node.kind === ts9__default.default.SyntaxKind.CatchClause && node.variableDeclaration !== void 0) {
        this.#handleBindingName(
          node.variableDeclaration.name,
          true,
          false
        );
      }
      return ts9__default.default.forEachChild(node, cb);
    };
    ts9__default.default.forEachChild(sourceFile, cb);
    this.#scope.end(variableCallback);
    return this.#result;
    function forEachChild(node) {
      return ts9__default.default.forEachChild(node, cb);
    }
  }
  #handleBindingName(name, blockScoped, exported) {
    if (name.kind === ts9__default.default.SyntaxKind.Identifier) {
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
          ts9__default.default.SyntaxKind.ExportKeyword
        ),
        domain
      );
    }
  }
  #handleFunctionLikeDeclaration(node, cb, varCb) {
    if (ts9__default.default.canHaveDecorators(node)) {
      ts9__default.default.getDecorators(node)?.forEach(cb);
    }
    const savedScope = this.#scope;
    if (node.kind === ts9__default.default.SyntaxKind.FunctionDeclaration) {
      this.#handleDeclaration(node, false, 4 /* Value */);
    }
    const scope = this.#scope = node.kind === ts9__default.default.SyntaxKind.FunctionExpression && node.name !== void 0 ? new FunctionExpressionScope(node.name, savedScope) : new FunctionScope(savedScope);
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
    if (node.flags & ts9__default.default.NodeFlags.GlobalAugmentation) {
      return next(
        node,
        this.#scope.createOrReuseNamespaceScope("-global", false, true, false)
      );
    }
    if (node.name.kind === ts9__default.default.SyntaxKind.Identifier) {
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
        ts9__default.default.SyntaxKind.DeclareKeyword
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
    const exported = declarationList.parent.kind === ts9__default.default.SyntaxKind.VariableStatement && includesModifier(
      declarationList.parent.modifiers,
      ts9__default.default.SyntaxKind.ExportKeyword
    );
    for (const declaration of declarationList.declarations) {
      this.#handleBindingName(declaration.name, blockScoped, exported);
    }
  }
};
function containsExportStatement(block) {
  for (const statement of block.statements) {
    if (statement.kind === ts9__default.default.SyntaxKind.ExportDeclaration || statement.kind === ts9__default.default.SyntaxKind.ExportAssignment) {
      return true;
    }
  }
  return false;
}
function forEachDestructuringIdentifier(pattern, fn) {
  for (const element of pattern.elements) {
    if (element.kind !== ts9__default.default.SyntaxKind.BindingElement) {
      continue;
    }
    let result;
    if (element.name.kind === ts9__default.default.SyntaxKind.Identifier) {
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
  return (declarationList.flags & ts9__default.default.NodeFlags.BlockScoped) !== 0;
}
function isNamespaceExported(node) {
  return node.parent.kind === ts9__default.default.SyntaxKind.ModuleDeclaration || includesModifier(node.modifiers, ts9__default.default.SyntaxKind.ExportKeyword);
}
function namespaceHasExportStatement(ns) {
  if (ns.body?.kind !== ts9__default.default.SyntaxKind.ModuleBlock) {
    return false;
  }
  return containsExportStatement(ns.body);
}

// src/usage/collectVariableUsage.ts
function collectVariableUsage(sourceFile) {
  return new UsageWalker().getUsage(sourceFile);
}

exports.AccessKind = AccessKind;
exports.DeclarationDomain = DeclarationDomain;
exports.UsageDomain = UsageDomain;
exports.collectVariableUsage = collectVariableUsage;
exports.forEachComment = forEachComment;
exports.forEachToken = forEachToken;
exports.getAccessKind = getAccessKind;
exports.getCallSignaturesOfType = getCallSignaturesOfType;
exports.getPropertyOfType = getPropertyOfType;
exports.getWellKnownSymbolPropertyOfType = getWellKnownSymbolPropertyOfType;
exports.hasDecorators = hasDecorators;
exports.hasExpressionInitializer = hasExpressionInitializer;
exports.hasInitializer = hasInitializer;
exports.hasJSDoc = hasJSDoc;
exports.hasModifiers = hasModifiers;
exports.hasType = hasType;
exports.hasTypeArguments = hasTypeArguments;
exports.includesModifier = includesModifier;
exports.intersectionConstituents = intersectionConstituents;
exports.intersectionTypeParts = intersectionTypeParts;
exports.isAbstractKeyword = isAbstractKeyword;
exports.isAccessExpression = isAccessExpression;
exports.isAccessibilityModifier = isAccessibilityModifier;
exports.isAccessorDeclaration = isAccessorDeclaration;
exports.isAccessorKeyword = isAccessorKeyword;
exports.isAnyKeyword = isAnyKeyword;
exports.isArrayBindingElement = isArrayBindingElement;
exports.isArrayBindingOrAssignmentPattern = isArrayBindingOrAssignmentPattern;
exports.isAssertKeyword = isAssertKeyword;
exports.isAssertsKeyword = isAssertsKeyword;
exports.isAssignmentKind = isAssignmentKind;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isAsyncKeyword = isAsyncKeyword;
exports.isAwaitKeyword = isAwaitKeyword;
exports.isBigIntKeyword = isBigIntKeyword;
exports.isBigIntLiteralType = isBigIntLiteralType;
exports.isBindingOrAssignmentElementRestIndicator = isBindingOrAssignmentElementRestIndicator;
exports.isBindingOrAssignmentElementTarget = isBindingOrAssignmentElementTarget;
exports.isBindingOrAssignmentPattern = isBindingOrAssignmentPattern;
exports.isBindingPattern = isBindingPattern;
exports.isBlockLike = isBlockLike;
exports.isBooleanKeyword = isBooleanKeyword;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isBooleanLiteralType = isBooleanLiteralType;
exports.isClassLikeDeclaration = isClassLikeDeclaration;
exports.isClassMemberModifier = isClassMemberModifier;
exports.isColonToken = isColonToken;
exports.isCompilerOptionEnabled = isCompilerOptionEnabled;
exports.isConditionalType = isConditionalType;
exports.isConstAssertionExpression = isConstAssertionExpression;
exports.isConstKeyword = isConstKeyword;
exports.isDeclarationName = isDeclarationName;
exports.isDeclarationWithTypeParameterChildren = isDeclarationWithTypeParameterChildren;
exports.isDeclarationWithTypeParameters = isDeclarationWithTypeParameters;
exports.isDeclareKeyword = isDeclareKeyword;
exports.isDefaultKeyword = isDefaultKeyword;
exports.isDestructuringPattern = isDestructuringPattern;
exports.isDotToken = isDotToken;
exports.isEndOfFileToken = isEndOfFileToken;
exports.isEntityNameExpression = isEntityNameExpression;
exports.isEntityNameOrEntityNameExpression = isEntityNameOrEntityNameExpression;
exports.isEnumType = isEnumType;
exports.isEqualsGreaterThanToken = isEqualsGreaterThanToken;
exports.isEqualsToken = isEqualsToken;
exports.isEvolvingArrayType = isEvolvingArrayType;
exports.isExclamationToken = isExclamationToken;
exports.isExportKeyword = isExportKeyword;
exports.isFalseKeyword = isFalseKeyword;
exports.isFalseLiteral = isFalseLiteral;
exports.isFalseLiteralType = isFalseLiteralType;
exports.isFalsyType = isFalsyType;
exports.isForInOrOfStatement = isForInOrOfStatement;
exports.isFreshableIntrinsicType = isFreshableIntrinsicType;
exports.isFreshableType = isFreshableType;
exports.isFunctionLikeDeclaration = isFunctionLikeDeclaration;
exports.isFunctionScopeBoundary = isFunctionScopeBoundary;
exports.isImportExpression = isImportExpression;
exports.isImportKeyword = isImportKeyword;
exports.isInKeyword = isInKeyword;
exports.isIndexType = isIndexType;
exports.isIndexedAccessType = isIndexedAccessType;
exports.isInstantiableType = isInstantiableType;
exports.isIntersectionType = isIntersectionType;
exports.isIntrinsicAnyType = isIntrinsicAnyType;
exports.isIntrinsicBigIntType = isIntrinsicBigIntType;
exports.isIntrinsicBooleanType = isIntrinsicBooleanType;
exports.isIntrinsicESSymbolType = isIntrinsicESSymbolType;
exports.isIntrinsicErrorType = isIntrinsicErrorType;
exports.isIntrinsicNeverType = isIntrinsicNeverType;
exports.isIntrinsicNonPrimitiveType = isIntrinsicNonPrimitiveType;
exports.isIntrinsicNullType = isIntrinsicNullType;
exports.isIntrinsicNumberType = isIntrinsicNumberType;
exports.isIntrinsicStringType = isIntrinsicStringType;
exports.isIntrinsicType = isIntrinsicType;
exports.isIntrinsicUndefinedType = isIntrinsicUndefinedType;
exports.isIntrinsicUnknownType = isIntrinsicUnknownType;
exports.isIntrinsicVoidType = isIntrinsicVoidType;
exports.isIterationStatement = isIterationStatement;
exports.isJSDocComment = isJSDocComment;
exports.isJSDocNamespaceBody = isJSDocNamespaceBody;
exports.isJSDocNamespaceDeclaration = isJSDocNamespaceDeclaration;
exports.isJSDocText = isJSDocText;
exports.isJSDocTypeReferencingNode = isJSDocTypeReferencingNode;
exports.isJsonMinusNumericLiteral = isJsonMinusNumericLiteral;
exports.isJsonObjectExpression = isJsonObjectExpression;
exports.isJsxAttributeLike = isJsxAttributeLike;
exports.isJsxAttributeValue = isJsxAttributeValue;
exports.isJsxChild = isJsxChild;
exports.isJsxTagNameExpression = isJsxTagNameExpression;
exports.isJsxTagNamePropertyAccess = isJsxTagNamePropertyAccess;
exports.isLiteralToken = isLiteralToken;
exports.isLiteralType = isLiteralType;
exports.isModifierFlagSet = isModifierFlagSet;
exports.isModuleBody = isModuleBody;
exports.isModuleName = isModuleName;
exports.isModuleReference = isModuleReference;
exports.isNamedDeclarationWithName = isNamedDeclarationWithName;
exports.isNamedImportBindings = isNamedImportBindings;
exports.isNamedImportsOrExports = isNamedImportsOrExports;
exports.isNamespaceBody = isNamespaceBody;
exports.isNamespaceDeclaration = isNamespaceDeclaration;
exports.isNeverKeyword = isNeverKeyword;
exports.isNodeFlagSet = isNodeFlagSet;
exports.isNullKeyword = isNullKeyword;
exports.isNullLiteral = isNullLiteral;
exports.isNumberKeyword = isNumberKeyword;
exports.isNumberLiteralType = isNumberLiteralType;
exports.isNumericOrStringLikeLiteral = isNumericOrStringLikeLiteral;
exports.isNumericPropertyName = isNumericPropertyName;
exports.isObjectBindingOrAssignmentElement = isObjectBindingOrAssignmentElement;
exports.isObjectBindingOrAssignmentPattern = isObjectBindingOrAssignmentPattern;
exports.isObjectFlagSet = isObjectFlagSet;
exports.isObjectKeyword = isObjectKeyword;
exports.isObjectType = isObjectType;
exports.isObjectTypeDeclaration = isObjectTypeDeclaration;
exports.isOutKeyword = isOutKeyword;
exports.isOverrideKeyword = isOverrideKeyword;
exports.isParameterPropertyModifier = isParameterPropertyModifier;
exports.isPrivateKeyword = isPrivateKeyword;
exports.isPropertyAccessEntityNameExpression = isPropertyAccessEntityNameExpression;
exports.isPropertyNameLiteral = isPropertyNameLiteral;
exports.isPropertyReadonlyInType = isPropertyReadonlyInType;
exports.isProtectedKeyword = isProtectedKeyword;
exports.isPseudoLiteralToken = isPseudoLiteralToken;
exports.isPublicKeyword = isPublicKeyword;
exports.isQuestionDotToken = isQuestionDotToken;
exports.isQuestionToken = isQuestionToken;
exports.isReadonlyKeyword = isReadonlyKeyword;
exports.isSignatureDeclaration = isSignatureDeclaration;
exports.isStaticKeyword = isStaticKeyword;
exports.isStrictCompilerOptionEnabled = isStrictCompilerOptionEnabled;
exports.isStringKeyword = isStringKeyword;
exports.isStringLiteralType = isStringLiteralType;
exports.isStringMappingType = isStringMappingType;
exports.isSubstitutionType = isSubstitutionType;
exports.isSuperElementAccessExpression = isSuperElementAccessExpression;
exports.isSuperExpression = isSuperExpression;
exports.isSuperKeyword = isSuperKeyword;
exports.isSuperProperty = isSuperProperty;
exports.isSuperPropertyAccessExpression = isSuperPropertyAccessExpression;
exports.isSymbolFlagSet = isSymbolFlagSet;
exports.isSymbolKeyword = isSymbolKeyword;
exports.isSyntaxList = isSyntaxList;
exports.isTemplateLiteralType = isTemplateLiteralType;
exports.isThenableType = isThenableType;
exports.isThisExpression = isThisExpression;
exports.isThisKeyword = isThisKeyword;
exports.isTransientSymbolLinksFlagSet = isTransientSymbolLinksFlagSet;
exports.isTrueKeyword = isTrueKeyword;
exports.isTrueLiteral = isTrueLiteral;
exports.isTrueLiteralType = isTrueLiteralType;
exports.isTupleType = isTupleType;
exports.isTupleTypeReference = isTupleTypeReference;
exports.isTypeFlagSet = isTypeFlagSet;
exports.isTypeOnlyCompatibleAliasDeclaration = isTypeOnlyCompatibleAliasDeclaration;
exports.isTypeParameter = isTypeParameter;
exports.isTypeReference = isTypeReference;
exports.isTypeReferenceType = isTypeReferenceType;
exports.isTypeVariable = isTypeVariable;
exports.isUndefinedKeyword = isUndefinedKeyword;
exports.isUnionOrIntersectionType = isUnionOrIntersectionType;
exports.isUnionOrIntersectionTypeNode = isUnionOrIntersectionTypeNode;
exports.isUnionType = isUnionType;
exports.isUniqueESSymbolType = isUniqueESSymbolType;
exports.isUnknownKeyword = isUnknownKeyword;
exports.isValidPropertyAccess = isValidPropertyAccess;
exports.isVariableLikeDeclaration = isVariableLikeDeclaration;
exports.isVoidKeyword = isVoidKeyword;
exports.iterateComments = iterateComments;
exports.iterateTokens = iterateTokens;
exports.symbolHasReadonlyDeclaration = symbolHasReadonlyDeclaration;
exports.typeConstituents = typeConstituents;
exports.typeIsLiteral = typeIsLiteral;
exports.typeParts = typeParts;
exports.unionConstituents = unionConstituents;
exports.unionTypeParts = unionTypeParts;
