import { isKeyword, isStrictReservedWord, isIdentifierName, isReservedWord, isIdentifierChar } from '@babel/helper-validator-identifier';
import { readStringContents } from '@babel/helper-string-parser';

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);
  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }
  return true;
}

const warnings = new Set();
function deprecationWarning(oldName, newName, prefix = "", cacheKey = oldName) {
  if (warnings.has(cacheKey)) return;
  warnings.add(cacheKey);
  const {
    internal,
    trace
  } = captureShortStackTrace(1, 2);
  if (internal) {
    return;
  }
  console.warn(`${prefix}\`${oldName}\` has been deprecated, please migrate to \`${newName}\`\n${trace}`);
}
function captureShortStackTrace(skip, length) {
  const {
    stackTraceLimit,
    prepareStackTrace
  } = Error;
  let stackTrace;
  Error.stackTraceLimit = 1 + skip + length;
  Error.prepareStackTrace = function (err, stack) {
    stackTrace = stack;
  };
  new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = prepareStackTrace;
  if (!stackTrace) return {
    internal: false,
    trace: ""
  };
  const shortStackTrace = stackTrace.slice(1 + skip, 1 + skip + length);
  return {
    internal: /[\\/]@babel[\\/]/.test(shortStackTrace[1].getFileName()),
    trace: shortStackTrace.map(frame => `    at ${frame}`).join("\n")
  };
}

function isArrayExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isAssignmentExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "AssignmentExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBinaryExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "BinaryExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isInterpreterDirective(node, opts) {
  if (!node) return false;
  if (node.type !== "InterpreterDirective") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDirective(node, opts) {
  if (!node) return false;
  if (node.type !== "Directive") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "DirectiveLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBlockStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "BlockStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBreakStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "BreakStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isCallExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "CallExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isCatchClause(node, opts) {
  if (!node) return false;
  if (node.type !== "CatchClause") return false;
  return opts == null || shallowEqual(node, opts);
}
function isConditionalExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ConditionalExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isContinueStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ContinueStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDebuggerStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "DebuggerStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDoWhileStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "DoWhileStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEmptyStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "EmptyStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExpressionStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ExpressionStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isFile(node, opts) {
  if (!node) return false;
  if (node.type !== "File") return false;
  return opts == null || shallowEqual(node, opts);
}
function isForInStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForInStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isForStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isFunctionExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "Identifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isIfStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "IfStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isLabeledStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "LabeledStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isStringLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "StringLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNumericLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "NumericLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNullLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "NullLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBooleanLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isRegExpLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "RegExpLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isLogicalExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "LogicalExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "MemberExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNewExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "NewExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isProgram(node, opts) {
  if (!node) return false;
  if (node.type !== "Program") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectMethod") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isRestElement(node, opts) {
  if (!node) return false;
  if (node.type !== "RestElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isReturnStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ReturnStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSequenceExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "SequenceExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ParenthesizedExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSwitchCase(node, opts) {
  if (!node) return false;
  if (node.type !== "SwitchCase") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSwitchStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "SwitchStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isThisExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ThisExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isThrowStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ThrowStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTryStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "TryStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isUnaryExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "UnaryExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isUpdateExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "UpdateExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isVariableDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "VariableDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isVariableDeclarator(node, opts) {
  if (!node) return false;
  if (node.type !== "VariableDeclarator") return false;
  return opts == null || shallowEqual(node, opts);
}
function isWhileStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "WhileStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isWithStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "WithStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isAssignmentPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "AssignmentPattern") return false;
  return opts == null || shallowEqual(node, opts);
}
function isArrayPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayPattern") return false;
  return opts == null || shallowEqual(node, opts);
}
function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrowFunctionExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassBody(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportAllDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportDefaultDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportNamedDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isForOfStatement(node, opts) {
  if (!node) return false;
  if (node.type !== "ForOfStatement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportDefaultSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportNamespaceSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isMetaProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "MetaProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassMethod") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectPattern") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSpreadElement(node, opts) {
  if (!node) return false;
  if (node.type !== "SpreadElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSuper(node, opts) {
  if (!node) return false;
  if (node.type !== "Super") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TaggedTemplateExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTemplateElement(node, opts) {
  if (!node) return false;
  if (node.type !== "TemplateElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTemplateLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "TemplateLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isYieldExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "YieldExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isAwaitExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "AwaitExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImport(node, opts) {
  if (!node) return false;
  if (node.type !== "Import") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBigIntLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "BigIntLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportNamespaceSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalMemberExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalCallExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassPrivateProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassPrivateMethod") return false;
  return opts == null || shallowEqual(node, opts);
}
function isPrivateName(node, opts) {
  if (!node) return false;
  if (node.type !== "PrivateName") return false;
  return opts == null || shallowEqual(node, opts);
}
function isStaticBlock(node, opts) {
  if (!node) return false;
  if (node.type !== "StaticBlock") return false;
  return opts == null || shallowEqual(node, opts);
}
function isImportAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "ImportAttribute") return false;
  return opts == null || shallowEqual(node, opts);
}
function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "AnyTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ArrayTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "BooleanLiteralTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NullLiteralTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassImplements(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassImplements") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareClass(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareClass") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareFunction(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareFunction") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareInterface(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareInterface") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareModule(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareModule") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareModuleExports") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareTypeAlias") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareOpaqueType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareVariable(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareVariable") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareExportDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclareExportAllDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "DeclaredPredicate") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ExistsTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  if (node.type !== "FunctionTypeParam") return false;
  return opts == null || shallowEqual(node, opts);
}
function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "GenericTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isInferredPredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "InferredPredicate") return false;
  return opts == null || shallowEqual(node, opts);
}
function isInterfaceExtends(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceExtends") return false;
  return opts == null || shallowEqual(node, opts);
}
function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "InterfaceTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "IntersectionTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "MixedTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "EmptyTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NullableTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NumberLiteralTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBigIntLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "BigIntLiteralTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "NumberTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeInternalSlot") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeCallProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeIndexer") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ObjectTypeSpreadProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isOpaqueType(node, opts) {
  if (!node) return false;
  if (node.type !== "OpaqueType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "QualifiedTypeIdentifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "StringLiteralTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "StringTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSymbolTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "SymbolTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "ThisTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TupleTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeofTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeAlias(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeAlias") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeCastExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeCastExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeParameter(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameter") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameterDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  if (node.type !== "TypeParameterInstantiation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "UnionTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isVariance(node, opts) {
  if (!node) return false;
  if (node.type !== "Variance") return false;
  return opts == null || shallowEqual(node, opts);
}
function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "VoidTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumBooleanBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumNumberBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumNumberBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumStringBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumStringBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumSymbolBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumBooleanMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumNumberMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumNumberMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumStringMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumStringMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  if (node.type !== "EnumDefaultedMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "IndexedAccessType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isOptionalIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "OptionalIndexedAccessType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXAttribute") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXClosingElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXClosingElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXEmptyExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXExpressionContainer") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXSpreadChild") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXIdentifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXMemberExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXNamespacedName") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXOpeningElement") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXSpreadAttribute") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXText(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXText") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXFragment") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXOpeningFragment") return false;
  return opts == null || shallowEqual(node, opts);
}
function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  if (node.type !== "JSXClosingFragment") return false;
  return opts == null || shallowEqual(node, opts);
}
function isPlaceholder(node, opts) {
  if (!node) return false;
  if (node.type !== "Placeholder") return false;
  return opts == null || shallowEqual(node, opts);
}
function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  if (node.type !== "V8IntrinsicIdentifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  if (node.type !== "ArgumentPlaceholder") return false;
  return opts == null || shallowEqual(node, opts);
}
function isBindExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "BindExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isClassAccessorProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "ClassAccessorProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDecorator(node, opts) {
  if (!node) return false;
  if (node.type !== "Decorator") return false;
  return opts == null || shallowEqual(node, opts);
}
function isDoExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "DoExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  if (node.type !== "ExportDefaultSpecifier") return false;
  return opts == null || shallowEqual(node, opts);
}
function isModuleExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "ModuleExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTopicReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TopicReference") return false;
  return opts == null || shallowEqual(node, opts);
}
function isVoidPattern(node, opts) {
  if (!node) return false;
  if (node.type !== "VoidPattern") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSParameterProperty(node, opts) {
  if (!node) return false;
  if (node.type !== "TSParameterProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  if (node.type !== "TSDeclareFunction") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  if (node.type !== "TSDeclareMethod") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSQualifiedName(node, opts) {
  if (!node) return false;
  if (node.type !== "TSQualifiedName") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSCallSignatureDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConstructSignatureDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSPropertySignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSPropertySignature") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSMethodSignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSMethodSignature") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSIndexSignature(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIndexSignature") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSAnyKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSBooleanKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSBigIntKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSIntrinsicKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIntrinsicKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNeverKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNullKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNullKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNumberKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSObjectKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSStringKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSStringKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSSymbolKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUndefinedKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUnknownKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  if (node.type !== "TSVoidKeyword") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSThisType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSThisType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSFunctionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSFunctionType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSConstructorType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConstructorType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeReference") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypePredicate(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypePredicate") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeQuery(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeQuery") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSArrayType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSArrayType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTupleType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTupleType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSOptionalType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSOptionalType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSRestType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSRestType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNamedTupleMember(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNamedTupleMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSUnionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSUnionType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSIntersectionType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIntersectionType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSConditionalType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSConditionalType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSInferType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInferType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSParenthesizedType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeOperator(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeOperator") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSIndexedAccessType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSMappedType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSMappedType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTemplateLiteralType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTemplateLiteralType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSLiteralType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSLiteralType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSClassImplements(node, opts) {
  if (!node) return false;
  if (node.type !== "TSClassImplements") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSInterfaceHeritage(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInterfaceHeritage") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInterfaceDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInterfaceBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAliasDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSInstantiationExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSInstantiationExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSAsExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSAsExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSSatisfiesExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSSatisfiesExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAssertion") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSEnumBody(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumBody") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSEnumMember(node, opts) {
  if (!node) return false;
  if (node.type !== "TSEnumMember") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSModuleDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSModuleBlock(node, opts) {
  if (!node) return false;
  if (node.type !== "TSModuleBlock") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSImportType(node, opts) {
  if (!node) return false;
  if (node.type !== "TSImportType") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSImportEqualsDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  if (node.type !== "TSExternalModuleReference") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNonNullExpression") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSExportAssignment(node, opts) {
  if (!node) return false;
  if (node.type !== "TSExportAssignment") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSNamespaceExportDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeAnnotation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameterInstantiation") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameterDeclaration") return false;
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeParameter(node, opts) {
  if (!node) return false;
  if (node.type !== "TSTypeParameter") return false;
  return opts == null || shallowEqual(node, opts);
}
function isStandardized(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ArrayExpression":
    case "AssignmentExpression":
    case "BinaryExpression":
    case "InterpreterDirective":
    case "Directive":
    case "DirectiveLiteral":
    case "BlockStatement":
    case "BreakStatement":
    case "CallExpression":
    case "CatchClause":
    case "ConditionalExpression":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "DoWhileStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "File":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Identifier":
    case "IfStatement":
    case "LabeledStatement":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "LogicalExpression":
    case "MemberExpression":
    case "NewExpression":
    case "Program":
    case "ObjectExpression":
    case "ObjectMethod":
    case "ObjectProperty":
    case "RestElement":
    case "ReturnStatement":
    case "SequenceExpression":
    case "ParenthesizedExpression":
    case "SwitchCase":
    case "SwitchStatement":
    case "ThisExpression":
    case "ThrowStatement":
    case "TryStatement":
    case "UnaryExpression":
    case "UpdateExpression":
    case "VariableDeclaration":
    case "VariableDeclarator":
    case "WhileStatement":
    case "WithStatement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ArrowFunctionExpression":
    case "ClassBody":
    case "ClassExpression":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportSpecifier":
    case "ForOfStatement":
    case "ImportDeclaration":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
    case "MetaProperty":
    case "ClassMethod":
    case "ObjectPattern":
    case "SpreadElement":
    case "Super":
    case "TaggedTemplateExpression":
    case "TemplateElement":
    case "TemplateLiteral":
    case "YieldExpression":
    case "AwaitExpression":
    case "ImportExpression":
    case "Import":
    case "BigIntLiteral":
    case "ExportNamespaceSpecifier":
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "ClassProperty":
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
    case "PrivateName":
    case "StaticBlock":
    case "ImportAttribute":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Identifier":
        case "StringLiteral":
        case "BlockStatement":
        case "ClassBody":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isExpression(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ArrayExpression":
    case "AssignmentExpression":
    case "BinaryExpression":
    case "CallExpression":
    case "ConditionalExpression":
    case "FunctionExpression":
    case "Identifier":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "LogicalExpression":
    case "MemberExpression":
    case "NewExpression":
    case "ObjectExpression":
    case "SequenceExpression":
    case "ParenthesizedExpression":
    case "ThisExpression":
    case "UnaryExpression":
    case "UpdateExpression":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "MetaProperty":
    case "TaggedTemplateExpression":
    case "TemplateLiteral":
    case "YieldExpression":
    case "AwaitExpression":
    case "ImportExpression":
    case "BigIntLiteral":
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "TypeCastExpression":
    case "JSXElement":
    case "JSXFragment":
    case "BindExpression":
    case "DoExpression":
    case "ModuleExpression":
    case "TopicReference":
    case "TSInstantiationExpression":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Expression":
        case "Identifier":
        case "StringLiteral":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isBinary(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BinaryExpression":
    case "LogicalExpression":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isScopable(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "CatchClause":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Program":
    case "ObjectMethod":
    case "SwitchStatement":
    case "WhileStatement":
    case "ArrowFunctionExpression":
    case "ClassExpression":
    case "ClassDeclaration":
    case "ForOfStatement":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isBlockParent(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "CatchClause":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "Program":
    case "ObjectMethod":
    case "SwitchStatement":
    case "WhileStatement":
    case "ArrowFunctionExpression":
    case "ForOfStatement":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isBlock(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "Program":
    case "TSModuleBlock":
      break;
    case "Placeholder":
      if (node.expectedNode === "BlockStatement") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BlockStatement":
    case "BreakStatement":
    case "ContinueStatement":
    case "DebuggerStatement":
    case "DoWhileStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "ForInStatement":
    case "ForStatement":
    case "FunctionDeclaration":
    case "IfStatement":
    case "LabeledStatement":
    case "ReturnStatement":
    case "SwitchStatement":
    case "ThrowStatement":
    case "TryStatement":
    case "VariableDeclaration":
    case "WhileStatement":
    case "WithStatement":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ForOfStatement":
    case "ImportDeclaration":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
    case "EnumDeclaration":
    case "TSDeclareFunction":
    case "TSInterfaceDeclaration":
    case "TSTypeAliasDeclaration":
    case "TSEnumDeclaration":
    case "TSModuleDeclaration":
    case "TSImportEqualsDeclaration":
    case "TSExportAssignment":
    case "TSNamespaceExportDeclaration":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Statement":
        case "Declaration":
        case "BlockStatement":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTerminatorless(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "ReturnStatement":
    case "ThrowStatement":
    case "YieldExpression":
    case "AwaitExpression":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isCompletionStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "BreakStatement":
    case "ContinueStatement":
    case "ReturnStatement":
    case "ThrowStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isConditional(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ConditionalExpression":
    case "IfStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isLoop(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForStatement":
    case "WhileStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isWhile(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DoWhileStatement":
    case "WhileStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isExpressionWrapper(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExpressionStatement":
    case "ParenthesizedExpression":
    case "TypeCastExpression":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFor(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ForInStatement":
    case "ForStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isForXStatement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ForInStatement":
    case "ForOfStatement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFunction(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ObjectMethod":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ClassPrivateMethod":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFunctionParent(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ObjectMethod":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "StaticBlock":
    case "TSModuleBlock":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isPureish(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
      break;
    case "Placeholder":
      if (node.expectedNode === "StringLiteral") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "FunctionDeclaration":
    case "VariableDeclaration":
    case "ClassDeclaration":
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ImportDeclaration":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
    case "EnumDeclaration":
    case "TSDeclareFunction":
    case "TSInterfaceDeclaration":
    case "TSTypeAliasDeclaration":
    case "TSEnumDeclaration":
    case "TSModuleDeclaration":
    case "TSImportEqualsDeclaration":
      break;
    case "Placeholder":
      if (node.expectedNode === "Declaration") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFunctionParameter(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "RestElement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
      break;
    case "Placeholder":
      if (node.expectedNode === "Identifier") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isPatternLike(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "RestElement":
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Pattern":
        case "Identifier":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isLVal(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "MemberExpression":
    case "ArrayPattern":
    case "ObjectPattern":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSNonNullExpression":
      break;
    case "Placeholder":
      switch (node.expectedNode) {
        case "Pattern":
        case "Identifier":
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTSEntityName(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Identifier":
    case "ThisExpression":
    case "TSQualifiedName":
      break;
    case "Placeholder":
      if (node.expectedNode === "Identifier") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isLiteral(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "StringLiteral":
    case "NumericLiteral":
    case "NullLiteral":
    case "BooleanLiteral":
    case "RegExpLiteral":
    case "TemplateLiteral":
    case "BigIntLiteral":
      break;
    case "Placeholder":
      if (node.expectedNode === "StringLiteral") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isUserWhitespacable(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ObjectProperty":
    case "ObjectTypeInternalSlot":
    case "ObjectTypeCallProperty":
    case "ObjectTypeIndexer":
    case "ObjectTypeProperty":
    case "ObjectTypeSpreadProperty":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isMethod(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ClassMethod":
    case "ClassPrivateMethod":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isObjectMember(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectMethod":
    case "ObjectProperty":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isProperty(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ObjectProperty":
    case "ClassProperty":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isUnaryLike(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "UnaryExpression":
    case "SpreadElement":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isPattern(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AssignmentPattern":
    case "ArrayPattern":
    case "ObjectPattern":
    case "VoidPattern":
      break;
    case "Placeholder":
      if (node.expectedNode === "Pattern") break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isClass(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassExpression":
    case "ClassDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isImportOrExportDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ImportDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isExportDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportAllDeclaration":
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isModuleSpecifier(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ExportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isPrivate(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
    case "PrivateName":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFlow(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "ArrayTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "BooleanLiteralTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "ClassImplements":
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "DeclaredPredicate":
    case "ExistsTypeAnnotation":
    case "FunctionTypeAnnotation":
    case "FunctionTypeParam":
    case "GenericTypeAnnotation":
    case "InferredPredicate":
    case "InterfaceExtends":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
    case "IntersectionTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NullableTypeAnnotation":
    case "NumberLiteralTypeAnnotation":
    case "BigIntLiteralTypeAnnotation":
    case "NumberTypeAnnotation":
    case "ObjectTypeAnnotation":
    case "ObjectTypeInternalSlot":
    case "ObjectTypeCallProperty":
    case "ObjectTypeIndexer":
    case "ObjectTypeProperty":
    case "ObjectTypeSpreadProperty":
    case "OpaqueType":
    case "QualifiedTypeIdentifier":
    case "StringLiteralTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "TupleTypeAnnotation":
    case "TypeofTypeAnnotation":
    case "TypeAlias":
    case "TypeAnnotation":
    case "TypeCastExpression":
    case "TypeParameter":
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
    case "UnionTypeAnnotation":
    case "Variance":
    case "VoidTypeAnnotation":
    case "EnumDeclaration":
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFlowType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "ArrayTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "BooleanLiteralTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "ExistsTypeAnnotation":
    case "FunctionTypeAnnotation":
    case "GenericTypeAnnotation":
    case "InterfaceTypeAnnotation":
    case "IntersectionTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NullableTypeAnnotation":
    case "NumberLiteralTypeAnnotation":
    case "BigIntLiteralTypeAnnotation":
    case "NumberTypeAnnotation":
    case "ObjectTypeAnnotation":
    case "StringLiteralTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "TupleTypeAnnotation":
    case "TypeofTypeAnnotation":
    case "UnionTypeAnnotation":
    case "VoidTypeAnnotation":
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "AnyTypeAnnotation":
    case "BooleanTypeAnnotation":
    case "NullLiteralTypeAnnotation":
    case "MixedTypeAnnotation":
    case "EmptyTypeAnnotation":
    case "NumberTypeAnnotation":
    case "StringTypeAnnotation":
    case "SymbolTypeAnnotation":
    case "ThisTypeAnnotation":
    case "VoidTypeAnnotation":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFlowDeclaration(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DeclareClass":
    case "DeclareFunction":
    case "DeclareInterface":
    case "DeclareModule":
    case "DeclareModuleExports":
    case "DeclareTypeAlias":
    case "DeclareOpaqueType":
    case "DeclareVariable":
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
    case "InterfaceDeclaration":
    case "OpaqueType":
    case "TypeAlias":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isFlowPredicate(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "DeclaredPredicate":
    case "InferredPredicate":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isEnumBody(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isEnumMember(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isJSX(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "JSXAttribute":
    case "JSXClosingElement":
    case "JSXElement":
    case "JSXEmptyExpression":
    case "JSXExpressionContainer":
    case "JSXSpreadChild":
    case "JSXIdentifier":
    case "JSXMemberExpression":
    case "JSXNamespacedName":
    case "JSXOpeningElement":
    case "JSXSpreadAttribute":
    case "JSXText":
    case "JSXFragment":
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isMiscellaneous(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "Placeholder":
    case "V8IntrinsicIdentifier":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isAccessor(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "ClassAccessorProperty":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTypeScript(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSParameterProperty":
    case "TSDeclareFunction":
    case "TSDeclareMethod":
    case "TSQualifiedName":
    case "TSCallSignatureDeclaration":
    case "TSConstructSignatureDeclaration":
    case "TSPropertySignature":
    case "TSMethodSignature":
    case "TSIndexSignature":
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSFunctionType":
    case "TSConstructorType":
    case "TSTypeReference":
    case "TSTypePredicate":
    case "TSTypeQuery":
    case "TSTypeLiteral":
    case "TSArrayType":
    case "TSTupleType":
    case "TSOptionalType":
    case "TSRestType":
    case "TSNamedTupleMember":
    case "TSUnionType":
    case "TSIntersectionType":
    case "TSConditionalType":
    case "TSInferType":
    case "TSParenthesizedType":
    case "TSTypeOperator":
    case "TSIndexedAccessType":
    case "TSMappedType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
    case "TSClassImplements":
    case "TSInterfaceHeritage":
    case "TSInterfaceDeclaration":
    case "TSInterfaceBody":
    case "TSTypeAliasDeclaration":
    case "TSInstantiationExpression":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSTypeAssertion":
    case "TSEnumBody":
    case "TSEnumDeclaration":
    case "TSEnumMember":
    case "TSModuleDeclaration":
    case "TSModuleBlock":
    case "TSImportType":
    case "TSImportEqualsDeclaration":
    case "TSExternalModuleReference":
    case "TSNonNullExpression":
    case "TSExportAssignment":
    case "TSNamespaceExportDeclaration":
    case "TSTypeAnnotation":
    case "TSTypeParameterInstantiation":
    case "TSTypeParameterDeclaration":
    case "TSTypeParameter":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTSTypeElement(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSCallSignatureDeclaration":
    case "TSConstructSignatureDeclaration":
    case "TSPropertySignature":
    case "TSMethodSignature":
    case "TSIndexSignature":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTSType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSFunctionType":
    case "TSConstructorType":
    case "TSTypeReference":
    case "TSTypePredicate":
    case "TSTypeQuery":
    case "TSTypeLiteral":
    case "TSArrayType":
    case "TSTupleType":
    case "TSOptionalType":
    case "TSRestType":
    case "TSUnionType":
    case "TSIntersectionType":
    case "TSConditionalType":
    case "TSInferType":
    case "TSParenthesizedType":
    case "TSTypeOperator":
    case "TSIndexedAccessType":
    case "TSMappedType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
    case "TSClassImplements":
    case "TSInterfaceHeritage":
    case "TSImportType":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isTSBaseType(node, opts) {
  if (!node) return false;
  switch (node.type) {
    case "TSAnyKeyword":
    case "TSBooleanKeyword":
    case "TSBigIntKeyword":
    case "TSIntrinsicKeyword":
    case "TSNeverKeyword":
    case "TSNullKeyword":
    case "TSNumberKeyword":
    case "TSObjectKeyword":
    case "TSStringKeyword":
    case "TSSymbolKeyword":
    case "TSUndefinedKeyword":
    case "TSUnknownKeyword":
    case "TSVoidKeyword":
    case "TSThisType":
    case "TSTemplateLiteralType":
    case "TSLiteralType":
      break;
    default:
      return false;
  }
  return opts == null || shallowEqual(node, opts);
}
function isNumberLiteral(node, opts) {
  deprecationWarning("isNumberLiteral", "isNumericLiteral");
  if (!node) return false;
  if (node.type !== "NumberLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isRegexLiteral(node, opts) {
  deprecationWarning("isRegexLiteral", "isRegExpLiteral");
  if (!node) return false;
  if (node.type !== "RegexLiteral") return false;
  return opts == null || shallowEqual(node, opts);
}
function isRestProperty(node, opts) {
  deprecationWarning("isRestProperty", "isRestElement");
  if (!node) return false;
  if (node.type !== "RestProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isSpreadProperty(node, opts) {
  deprecationWarning("isSpreadProperty", "isSpreadElement");
  if (!node) return false;
  if (node.type !== "SpreadProperty") return false;
  return opts == null || shallowEqual(node, opts);
}
function isModuleDeclaration(node, opts) {
  deprecationWarning("isModuleDeclaration", "isImportOrExportDeclaration");
  return isImportOrExportDeclaration(node, opts);
}

function isMemberExpressionLike(node) {
  return isMemberExpression(node) || isMetaProperty(node);
}
function matchesPattern(member, match, allowPartial) {
  if (!isMemberExpressionLike(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;
  for (node = member; isMemberExpressionLike(node); node = node.object ?? node.meta) {
    nodes.push(node.property);
  }
  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;
  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;
    if (isIdentifier(node)) {
      value = node.name;
    } else if (isStringLiteral(node)) {
      value = node.value;
    } else if (isThisExpression(node)) {
      value = "this";
    } else if (isSuper(node)) {
      value = "super";
    } else if (isPrivateName(node)) {
      value = "#" + node.id.name;
    } else {
      return false;
    }
    if (parts[i] !== value) return false;
  }
  return true;
}

function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => matchesPattern(member, parts, allowPartial);
}

const isReactComponent = buildMatchMemberExpression("React.Component");

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (nodeType == null) return false;
  if (ALIAS_KEYS[targetType]) return false;
  const aliases = FLIPPED_ALIAS_KEYS[targetType];
  if (aliases?.includes(nodeType)) return true;
  return false;
}

function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = PLACEHOLDERS_ALIAS[placeholderType];
  if (aliases?.includes(targetType)) return true;
  return false;
}

function is(type, node, opts) {
  if (!node) return false;
  const matches = isType(node.type, type);
  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in FLIPPED_ALIAS_KEYS) {
      return isPlaceholderType(node.expectedNode, type);
    }
    return false;
  }
  if (opts === undefined) {
    return true;
  } else {
    return shallowEqual(node, opts);
  }
}

function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;
  if (reserved) {
    if (isKeyword(name) || isStrictReservedWord(name, true)) {
      return false;
    }
  }
  return isIdentifierName(name);
}

const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
const FLATTENABLE_KEYS = ["body", "expressions"];
const FOR_INIT_KEYS = ["left", "init"];
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
const LOGICAL_OPERATORS = ["||", "&&", "??"];
const UPDATE_OPERATORS = ["++", "--"];
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS, "|>"];
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
const STRING_UNARY_OPERATORS = ["typeof"];
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};

const VISITOR_KEYS = {};
const ALIAS_KEYS = {};
const FLIPPED_ALIAS_KEYS = {};
const NODE_FIELDS$1 = {};
const BUILDER_KEYS = {};
const DEPRECATED_KEYS = {};
const NODE_PARENT_VALIDATIONS = {};
const NODE_UNION_SHAPES__PRIVATE = {};
function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}
function validate$2(validate) {
  return {
    validate
  };
}
function validateType(...typeNames) {
  return validate$2(assertNodeType(...typeNames));
}
function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}
function validateDefault(validate, defaultValue) {
  return {
    validate,
    default: defaultValue,
    optional: false
  };
}
function validateOptionalType(...typeNames) {
  return {
    validate: assertNodeType(...typeNames),
    optional: true
  };
}
function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}
function arrayOfType(...typeNames) {
  return arrayOf(assertNodeType(...typeNames));
}
function validateArrayOfType(...typeNames) {
  return validate$2(arrayOfType(...typeNames));
}
function assertEach(callback) {
  const childValidator = validateChild;
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;
    let i = 0;
    const subKey = {
      toString() {
        return `${key}[${i}]`;
      }
    };
    for (; i < val.length; i++) {
      const v = val[i];
      callback(node, subKey, v);
      childValidator(node, subKey, v);
    }
  }
  validator.each = callback;
  return validator;
}
function assertOneOf(...values) {
  function validate(node, key, val) {
    if (!values.includes(val)) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }
  validate.oneOf = values;
  return validate;
}
const allExpandedTypes = [];
function assertNodeType(...types) {
  const expandedTypes = new Set();
  allExpandedTypes.push({
    types,
    set: expandedTypes
  });
  function validate(node, key, val) {
    const valType = val?.type;
    if (valType != null) {
      if (expandedTypes.has(valType)) {
        validateChild(node, key, val);
        return;
      }
      if (valType === "Placeholder") {
        for (const type of types) {
          if (is(type, val)) {
            validateChild(node, key, val);
            return;
          }
        }
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(valType)}`);
  }
  validate.oneOfNodeTypes = types;
  return validate;
}
function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    const primitiveType = getType(val);
    for (const type of types) {
      if (primitiveType === type || is(type, val)) {
        validateChild(node, key, val);
        return;
      }
    }
    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val?.type)}`);
  }
  validate.oneOfNodeOrValueTypes = types;
  return validate;
}
function assertValueType(type) {
  function validate(node, key, val) {
    if (getType(val) === type) {
      return;
    }
    throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
  }
  validate.type = type;
  return validate;
}
function assertShape(shape) {
  const keys = Object.keys(shape);
  function validate(node, key, val) {
    const errors = [];
    for (const property of keys) {
      try {
        validateField(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }
        throw error;
      }
    }
    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }
  validate.shapeOf = shape;
  return validate;
}
function assertOptionalChainStart() {
  function validate(node) {
    let current = node;
    while (node) {
      const {
        type
      } = current;
      if (type === "OptionalCallExpression") {
        if (current.optional) return;
        current = current.callee;
        continue;
      }
      if (type === "OptionalMemberExpression") {
        if (current.optional) return;
        current = current.object;
        continue;
      }
      break;
    }
    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${current?.type}`);
  }
  return validate;
}
function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }
  validate.chainOf = fns;
  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }
  return validate;
}
const validTypeOpts = new Set(["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate", "unionShape"]);
const validFieldKeys = new Set(["default", "optional", "deprecated", "validate"]);
const store = {};
function defineAliasedType(...aliases) {
  return (type, opts = {}) => {
    let defined = opts.aliases;
    if (!defined) {
      if (opts.inherits) defined = store[opts.inherits].aliases?.slice();
      defined ??= [];
      opts.aliases = defined;
    }
    const additional = aliases.filter(a => !defined.includes(a));
    defined.unshift(...additional);
    defineType$5(type, opts);
  };
}
function defineType$5(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];
  let fields = opts.fields;
  if (!fields) {
    fields = {};
    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);
      for (const key of keys) {
        const field = inherits.fields[key];
        const def = field.default;
        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }
        fields[key] = {
          default: Array.isArray(def) ? [] : def,
          optional: field.optional,
          deprecated: field.deprecated,
          validate: field.validate
        };
      }
    }
  }
  for (const k of Object.keys(opts)) {
    if (!validTypeOpts.has(k)) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }
  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }
  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }
  for (const key of Object.keys(fields)) {
    const field = fields[key];
    if (field.default === null) {
      field.optional ??= true;
    }
    if (field.default === undefined) {
      field.default = null;
      field.optional ??= false;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }
    for (const k of Object.keys(field)) {
      if (!validFieldKeys.has(k)) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }
  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS$1[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });
  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }
  if (opts.unionShape) {
    NODE_UNION_SHAPES__PRIVATE[type] = opts.unionShape;
  }
  store[type] = opts;
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ALIAS_KEYS: ALIAS_KEYS,
  BUILDER_KEYS: BUILDER_KEYS,
  DEPRECATED_KEYS: DEPRECATED_KEYS,
  FLIPPED_ALIAS_KEYS: FLIPPED_ALIAS_KEYS,
  NODE_FIELDS: NODE_FIELDS$1,
  NODE_PARENT_VALIDATIONS: NODE_PARENT_VALIDATIONS,
  NODE_UNION_SHAPES__PRIVATE: NODE_UNION_SHAPES__PRIVATE,
  VISITOR_KEYS: VISITOR_KEYS,
  allExpandedTypes: allExpandedTypes,
  arrayOf: arrayOf,
  arrayOfType: arrayOfType,
  assertEach: assertEach,
  assertNodeOrValueType: assertNodeOrValueType,
  assertNodeType: assertNodeType,
  assertOneOf: assertOneOf,
  assertOptionalChainStart: assertOptionalChainStart,
  assertShape: assertShape,
  assertValueType: assertValueType,
  chain: chain,
  default: defineType$5,
  defineAliasedType: defineAliasedType,
  validate: validate$2,
  validateArrayOfType: validateArrayOfType,
  validateDefault: validateDefault,
  validateOptional: validateOptional,
  validateOptionalType: validateOptionalType,
  validateType: validateType
});

const classMethodOrPropertyUnionShapeCommon = (allowPrivateName = false) => ({
  unionShape: {
    discriminator: "computed",
    shapes: [{
      name: "computed",
      value: [true],
      properties: {
        key: {
          validate: assertNodeType("Expression")
        }
      }
    }, {
      name: "nonComputed",
      value: [false],
      properties: {
        key: {
          validate: allowPrivateName ? assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName") : assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral")
        }
      }
    }]
  }
});
const memberExpressionUnionShapeCommon = {
  unionShape: {
    discriminator: "computed",
    shapes: [{
      name: "computed",
      value: [true],
      properties: {
        property: {
          validate: assertNodeType("Expression")
        }
      }
    }, {
      name: "nonComputed",
      value: [false],
      properties: {
        property: {
          validate: assertNodeType("Identifier", "PrivateName")
        }
      }
    }]
  }
};
const defineType$4 = defineAliasedType("Standardized");
defineType$4("ArrayExpression", {
  fields: {
    elements: {
      validate: arrayOf(assertNodeOrValueType("null", "Expression", "SpreadElement")),
      default: undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
defineType$4("AssignmentExpression", {
  fields: {
    operator: {
      validate: Object.assign(function () {
        const identifier = assertOneOf(...ASSIGNMENT_OPERATORS);
        const pattern = assertOneOf("=");
        return function (node, key, val) {
          const validator = is("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }(), {
        oneOf: ASSIGNMENT_OPERATORS
      })
    },
    left: {
      validate: assertNodeType("Identifier", "MemberExpression", "OptionalMemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: assertNodeType("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
defineType$4("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: assertOneOf(...BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = assertNodeType("Expression");
        const inOp = assertNodeType("Expression", "PrivateName");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.operator === "in" ? inOp : expression;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "PrivateName"]
        });
        return validator;
      }()
    },
    right: {
      validate: assertNodeType("Expression")
    }
  },
  unionShape: {
    discriminator: "operator",
    shapes: [{
      name: "in",
      value: ["in"],
      properties: {
        left: {
          validate: assertNodeType("Expression", "PrivateName")
        }
      }
    }, {
      name: "notIn",
      value: BINARY_OPERATORS.filter(op => op !== "in"),
      properties: {
        left: {
          validate: assertNodeType("Expression")
        }
      }
    }]
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
defineType$4("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string")
    }
  }
});
defineType$4("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: assertNodeType("DirectiveLiteral")
    }
  }
});
defineType$4("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string")
    }
  }
});
defineType$4("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: arrayOfType("Directive"),
      default: []
    },
    body: validateArrayOfType("Statement")
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
defineType$4("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: assertNodeType("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("CallExpression", {
  visitor: ["callee", "typeArguments", "arguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: assertNodeType("Expression", "Super", "Import", "V8IntrinsicIdentifier")
    },
    arguments: validateArrayOfType("Expression", "SpreadElement", "ArgumentPlaceholder"),
    typeArguments: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: assertNodeType("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: assertNodeType("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
defineType$4("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: assertNodeType("Expression")
    },
    consequent: {
      validate: assertNodeType("Expression")
    },
    alternate: {
      validate: assertNodeType("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
defineType$4("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: assertNodeType("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("DebuggerStatement", {
  aliases: ["Statement"]
});
defineType$4("DoWhileStatement", {
  builder: ["test", "body"],
  visitor: ["body", "test"],
  fields: {
    test: {
      validate: assertNodeType("Expression")
    },
    body: {
      validate: assertNodeType("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
defineType$4("EmptyStatement", {
  aliases: ["Statement"]
});
defineType$4("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: assertNodeType("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
defineType$4("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: assertNodeType("Program")
    },
    comments: {
      validate: assertEach(assertNodeType("CommentBlock", "CommentLine")),
      optional: true
    },
    tokens: {
      validate: assertEach(Object.assign(() => {}, {
        type: "any"
      })),
      optional: true
    }
  }
});
defineType$4("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: assertNodeType("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: assertNodeType("Expression")
    },
    body: {
      validate: assertNodeType("Statement")
    }
  }
});
defineType$4("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: assertNodeType("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    update: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    body: {
      validate: assertNodeType("Statement")
    }
  }
});
const functionCommon = () => ({
  params: validateArrayOfType("FunctionParameter"),
  generator: {
    default: false
  },
  async: {
    default: false
  }
});
const functionTypeAnnotationCommon = () => ({
  returnType: {
    validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation"),
    optional: true
  },
  typeParameters: {
    validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration"),
    optional: true
  }
});
const functionDeclarationCommon = () => ({
  ...functionCommon(),
  declare: {
    validate: assertValueType("boolean"),
    optional: true
  },
  id: {
    validate: assertNodeType("Identifier"),
    optional: true
  }
});
defineType$4("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "typeParameters", "params", "predicate", "returnType", "body"],
  fields: {
    ...functionDeclarationCommon(),
    ...functionTypeAnnotationCommon(),
    body: {
      validate: assertNodeType("BlockStatement")
    },
    predicate: {
      validate: assertNodeType("FlowPredicate"),
      optional: true
    }
  },
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    const identifier = assertNodeType("Identifier");
    return function (parent, key, node) {
      if (!is("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
defineType$4("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: {
    ...functionCommon(),
    ...functionTypeAnnotationCommon(),
    id: {
      validate: assertNodeType("Identifier"),
      optional: true
    },
    body: {
      validate: assertNodeType("BlockStatement")
    },
    predicate: {
      validate: assertNodeType("FlowPredicate"),
      optional: true
    }
  }
});
const patternLikeCommon = () => ({
  typeAnnotation: {
    validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation"),
    optional: true
  },
  optional: {
    validate: assertValueType("boolean"),
    optional: true
  },
  decorators: {
    validate: arrayOfType("Decorator"),
    optional: true
  }
});
defineType$4("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "FunctionParameter", "PatternLike", "LVal", "TSEntityName"],
  fields: {
    ...patternLikeCommon(),
    name: {
      validate: chain(assertValueType("string"), Object.assign(function (node, key, val) {
        if (!isValidIdentifier(val, false)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      }))
    }
  },
  validate: function (parent, key, node) {
    const match = /\.(\w+)$/.exec(key.toString());
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };
    if (parentKey === "property") {
      if (is("MemberExpression", parent, nonComp)) return;
      if (is("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if (is("Property", parent, nonComp)) return;
      if (is("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if (is("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if (is("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if (is("MetaProperty", parent, {
        meta: node
      })) return;
    }
    if ((isKeyword(node.name) || isReservedWord(node.name, false)) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  }
});
defineType$4("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: assertNodeType("Expression")
    },
    consequent: {
      validate: assertNodeType("Statement")
    },
    alternate: {
      optional: true,
      validate: assertNodeType("Statement")
    }
  }
});
defineType$4("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: assertNodeType("Identifier")
    },
    body: {
      validate: assertNodeType("Statement")
    }
  }
});
defineType$4("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: chain(assertValueType("number"), Object.assign(function (node, key, val) {
        if (1 / val < 0 || !Number.isFinite(val)) {
          const error = new Error("NumericLiterals must be non-negative finite numbers. " + `You can use t.valueToNode(${val}) instead.`);
          if (!new Error().stack.includes("regenerator")) {
            throw error;
          }
        }
      }, {
        type: "number"
      }))
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: assertValueType("string")
    },
    flags: {
      validate: chain(assertValueType("string"), Object.assign(function (node, key, val) {
        const invalid = /[^dgimsuvy]/.exec(val);
        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
defineType$4("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: assertOneOf(...LOGICAL_OPERATORS)
    },
    left: {
      validate: assertNodeType("Expression")
    },
    right: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("MemberExpression", {
  builder: ["object", "property", "computed"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal", "PatternLike"],
  ...memberExpressionUnionShapeCommon,
  fields: {
    object: {
      validate: assertNodeType("Expression", "Super")
    },
    property: {
      validate: function () {
        const normal = assertNodeType("Identifier", "PrivateName");
        const computed = assertNodeType("Expression");
        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: false
    }
  }
});
defineType$4("NewExpression", {
  inherits: "CallExpression"
});
defineType$4("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceType: {
      validate: assertOneOf("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: assertNodeType("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: arrayOfType("Directive"),
      default: []
    },
    body: validateArrayOfType("Statement")
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
defineType$4("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: validateArrayOfType("ObjectMethod", "ObjectProperty", "SpreadElement")
  }
});
defineType$4("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  ...classMethodOrPropertyUnionShapeCommon(),
  fields: {
    ...functionCommon(),
    ...functionTypeAnnotationCommon(),
    kind: {
      validate: assertOneOf("method", "get", "set")
    },
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
        const computed = assertNodeType("Expression");
        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    body: {
      validate: assertNodeType("BlockStatement")
    }
  },
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
defineType$4("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand"],
  ...classMethodOrPropertyUnionShapeCommon(true),
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
        const computed = assertNodeType("Expression");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName"]
        });
        return validator;
      }()
    },
    value: {
      validate: assertNodeType("Expression", "PatternLike")
    },
    shorthand: {
      validate: chain(assertValueType("boolean"), Object.assign(function (node, key, shorthand) {
        if (!shorthand) return;
        if (node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
        if (!is("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    }
  },
  visitor: ["decorators", "key", "value"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = assertNodeType("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
    const expression = assertNodeType("Expression");
    return function (parent, key, node) {
      const validator = is("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
defineType$4("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["FunctionParameter", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: {
    ...patternLikeCommon(),
    argument: {
      validate: assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    }
  },
  validate: function (parent, key) {
    const match = /(\w+)\[(\d+)\]/.exec(key.toString());
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;
    if (parent[listKey].length > +index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }
});
defineType$4("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: assertNodeType("Expression"),
      optional: true
    }
  }
});
defineType$4("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: validateArrayOfType("Expression")
  },
  aliases: ["Expression"]
});
defineType$4("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    consequent: validateArrayOfType("Statement")
  }
});
defineType$4("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: assertNodeType("Expression")
    },
    cases: validateArrayOfType("SwitchCase")
  }
});
defineType$4("ThisExpression", {
  aliases: ["Expression", "TSEntityName"]
});
defineType$4("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: chain(assertNodeType("BlockStatement"), Object.assign(function (node) {
        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: assertNodeType("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: assertNodeType("BlockStatement")
    }
  }
});
defineType$4("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: assertNodeType("Expression")
    },
    operator: {
      validate: assertOneOf(...UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
defineType$4("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: assertNodeType("Identifier", "MemberExpression")
    },
    operator: {
      validate: assertOneOf(...UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
defineType$4("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: assertValueType("boolean"),
      optional: true
    },
    kind: {
      validate: assertOneOf("var", "let", "const", "using", "await using")
    },
    declarations: validateArrayOfType("VariableDeclarator")
  },
  validate: (() => {
    const withoutInit = assertNodeType("Identifier", "Placeholder");
    const constOrLetOrVar = assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "Placeholder");
    const usingOrAwaitUsing = assertNodeType("Identifier", "VoidPattern", "Placeholder");
    return function (parent, key, node) {
      const {
        kind,
        declarations
      } = node;
      const parentIsForX = is("ForXStatement", parent, {
        left: node
      });
      if (parentIsForX) {
        if (declarations.length !== 1) {
          throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
        }
      }
      for (const decl of declarations) {
        if (kind === "const" || kind === "let" || kind === "var") {
          if (!parentIsForX && !decl.init) {
            withoutInit(decl, "id", decl.id);
          } else {
            constOrLetOrVar(decl, "id", decl.id);
          }
        } else {
          usingOrAwaitUsing(decl, "id", decl.id);
        }
      }
    };
  })()
});
defineType$4("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: assertNodeType("Identifier", "ArrayPattern", "ObjectPattern", "VoidPattern")
    },
    definite: {
      optional: true,
      validate: assertValueType("boolean")
    },
    init: {
      optional: true,
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: assertNodeType("Expression")
    },
    body: {
      validate: assertNodeType("Statement")
    }
  }
});
defineType$4("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: assertNodeType("Expression")
    },
    body: {
      validate: assertNodeType("Statement")
    }
  }
});
defineType$4("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike"],
  fields: {
    ...patternLikeCommon(),
    left: {
      validate: assertNodeType("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: assertNodeType("Expression")
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    }
  }
});
defineType$4("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
  fields: {
    ...patternLikeCommon(),
    elements: {
      validate: chain(assertValueType("array"), assertEach(assertNodeOrValueType("null", "PatternLike")))
    }
  }
});
defineType$4("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["typeParameters", "params", "predicate", "returnType", "body"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: {
    ...functionCommon(),
    generator: {
      default: null,
      optional: true,
      validate: Object.assign((node, key, val) => {
        if (val) {
          throw new TypeError("ArrowFunctionExpression cannot be a generator");
        }
      }, {
        type: "boolean"
      })
    },
    ...functionTypeAnnotationCommon(),
    expression: {
      validate: assertValueType("boolean")
    },
    body: {
      validate: assertNodeType("BlockStatement", "Expression")
    },
    predicate: {
      validate: assertNodeType("FlowPredicate"),
      optional: true
    }
  }
});
defineType$4("ClassBody", {
  visitor: ["body"],
  fields: {
    body: validateArrayOfType("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")
  }
});
defineType$4("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["decorators", "id", "typeParameters", "superClass", "superTypeArguments", "mixins", "implements", "body"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: assertNodeType("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration"),
      optional: true
    },
    body: {
      validate: assertNodeType("ClassBody")
    },
    superClass: {
      optional: true,
      validate: assertNodeType("Expression")
    },
    ["superTypeArguments"]: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: arrayOfType("TSClassImplements", "ClassImplements"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    mixins: {
      validate: assertNodeType("InterfaceExtends"),
      optional: true
    }
  }
});
defineType$4("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: assertNodeType("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: assertNodeType("TypeParameterDeclaration", "TSTypeParameterDeclaration"),
      optional: true
    },
    body: {
      validate: assertNodeType("ClassBody")
    },
    superClass: {
      optional: true,
      validate: assertNodeType("Expression")
    },
    ["superTypeArguments"]: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: arrayOfType("TSClassImplements", "ClassImplements"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    mixins: {
      validate: assertNodeType("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: assertValueType("boolean"),
      optional: true
    },
    abstract: {
      validate: assertValueType("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = assertNodeType("Identifier");
    return function (parent, key, node) {
      if (!is("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
const importAttributes = {
  attributes: {
    optional: true,
    validate: arrayOfType("ImportAttribute")
  }
};
defineType$4("ExportAllDeclaration", {
  visitor: ["source", "attributes"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: assertNodeType("StringLiteral")
    },
    exportKind: validateOptional(assertOneOf("type", "value")),
    ...importAttributes
  }
});
defineType$4("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    declaration: validateType("FunctionDeclaration", "ClassDeclaration", "Expression", "TSDeclareFunction", "TSInterfaceDeclaration", "EnumDeclaration"),
    exportKind: validateOptional(assertOneOf("value"))
  }
});
defineType$4("ExportNamedDeclaration", {
  builder: ["declaration", "specifiers", "source", "attributes"],
  visitor: ["declaration", "specifiers", "source", "attributes"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: chain(assertNodeType("Declaration"), Object.assign(function (node, key, val) {
        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      }, {
        oneOfNodeTypes: ["VariableDeclaration", "FunctionDeclaration", "ClassDeclaration", "TSDeclareFunction", "TSEnumDeclaration", "TSImportEqualsDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSTypeAliasDeclaration", "EnumDeclaration", "InterfaceDeclaration", "OpaqueType", "TypeAlias"]
      }))
    },
    ...importAttributes,
    specifiers: {
      default: [],
      validate: arrayOf(function () {
        const sourced = assertNodeType("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = assertNodeType("ExportSpecifier");
        return Object.assign(function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"]
        });
      }())
    },
    source: {
      validate: assertNodeType("StringLiteral"),
      optional: true
    },
    exportKind: validateOptional(assertOneOf("type", "value"))
  }
});
defineType$4("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: assertNodeType("Identifier")
    },
    exported: {
      validate: assertNodeType("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: assertOneOf("type", "value"),
      optional: true
    }
  }
});
defineType$4("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        const declaration = assertNodeType("VariableDeclaration");
        const lval = assertNodeType("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
        return Object.assign(function (node, key, val) {
          if (is("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        }, {
          oneOfNodeTypes: ["VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression"]
        });
      }()
    },
    right: {
      validate: assertNodeType("Expression")
    },
    body: {
      validate: assertNodeType("Statement")
    },
    await: {
      default: false
    }
  }
});
defineType$4("ImportDeclaration", {
  builder: ["specifiers", "source", "attributes"],
  visitor: ["specifiers", "source", "attributes"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
  fields: {
    ...importAttributes,
    module: {
      optional: true,
      validate: assertValueType("boolean")
    },
    phase: {
      default: null,
      validate: assertOneOf("source", "defer")
    },
    specifiers: validateArrayOfType("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"),
    source: {
      validate: assertNodeType("StringLiteral")
    },
    importKind: {
      validate: assertOneOf("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: assertNodeType("Identifier")
    }
  }
});
defineType$4("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: assertNodeType("Identifier")
    }
  }
});
defineType$4("ImportSpecifier", {
  visitor: ["imported", "local"],
  builder: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: assertNodeType("Identifier")
    },
    imported: {
      validate: assertNodeType("Identifier", "StringLiteral")
    },
    importKind: {
      validate: assertOneOf("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: chain(assertNodeType("Identifier"), Object.assign(function (node, key, val) {
        let property;
        switch (val.name) {
          case "function":
            property = "sent";
            break;
          case "new":
            property = "target";
            break;
          case "import":
            property = "meta";
            break;
        }
        if (!is("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: assertNodeType("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = () => ({
  abstract: {
    validate: assertValueType("boolean"),
    default: false,
    optional: true
  },
  accessibility: {
    validate: assertOneOf("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    optional: true,
    validate: assertValueType("boolean"),
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: assertValueType("boolean"),
    optional: true
  },
  key: {
    validate: chain(function () {
      const normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
      const computed = assertNodeType("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
  }
});
const classMethodOrDeclareMethodCommon = (allowDecorators = true) => ({
  ...functionCommon(),
  ...classMethodOrPropertyCommon(),
  params: validateArrayOfType("FunctionParameter", "TSParameterProperty"),
  kind: {
    validate: assertOneOf("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: chain(assertValueType("string"), assertOneOf("public", "private", "protected")),
    optional: true
  },
  ...(allowDecorators ? {
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    }
  } : {})
});
defineType$4("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  ...classMethodOrPropertyUnionShapeCommon(),
  fields: {
    ...classMethodOrDeclareMethodCommon(),
    ...functionTypeAnnotationCommon(),
    body: {
      validate: assertNodeType("BlockStatement")
    }
  }
});
defineType$4("ObjectPattern", {
  visitor: ["decorators", "properties", "typeAnnotation"],
  builder: ["properties"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
  fields: {
    ...patternLikeCommon(),
    properties: validateArrayOfType("RestElement", "ObjectProperty")
  }
});
defineType$4("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("Super");
defineType$4("TaggedTemplateExpression", {
  visitor: ["tag", "typeArguments", "quasi"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: assertNodeType("Expression")
    },
    quasi: {
      validate: assertNodeType("TemplateLiteral")
    },
    ["typeArguments"]: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: chain(assertShape({
        raw: {
          validate: assertValueType("string")
        },
        cooked: {
          validate: assertValueType("string"),
          optional: true
        }
      }), function templateElementCookedValidator(node) {
        const raw = node.value.raw;
        let unterminatedCalled = false;
        const error = () => {
          throw new Error("Internal @babel/types error.");
        };
        const {
          str,
          firstInvalidLoc
        } = readStringContents("template", raw, 0, 0, 0, {
          unterminated() {
            unterminatedCalled = true;
          },
          strictNumericEscape: error,
          invalidEscapeSequence: error,
          numericSeparatorInEscapeSequence: error,
          unexpectedNumericSeparator: error,
          invalidDigit: error,
          invalidCodePoint: error
        });
        if (!unterminatedCalled) throw new Error("Invalid raw");
        node.value.cooked = firstInvalidLoc ? null : str;
      })
    },
    tail: {
      default: false
    }
  }
});
defineType$4("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: validateArrayOfType("TemplateElement"),
    expressions: {
      validate: chain(assertValueType("array"), assertEach(assertNodeType("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType$4("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: chain(assertValueType("boolean"), Object.assign(function (node, key, val) {
        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$4("ImportExpression", {
  visitor: ["source", "options"],
  aliases: ["Expression"],
  fields: {
    phase: {
      default: null,
      validate: assertOneOf("source", "defer")
    },
    source: {
      validate: assertNodeType("Expression")
    },
    options: {
      validate: assertNodeType("Expression"),
      optional: true
    }
  }
});
defineType$4("Import");
defineType$4("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("bigint")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: assertNodeType("Identifier", "StringLiteral")
    }
  }
});
defineType$4("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  ...memberExpressionUnionShapeCommon,
  fields: {
    object: {
      validate: assertNodeType("Expression")
    },
    property: {
      validate: function () {
        const normal = assertNodeType("Identifier", "PrivateName");
        const computed = assertNodeType("Expression");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "PrivateName"]
        });
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: chain(assertValueType("boolean"), assertOptionalChainStart())
    }
  }
});
defineType$4("OptionalCallExpression", {
  visitor: ["callee", "typeArguments", "arguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: assertNodeType("Expression")
    },
    arguments: validateArrayOfType("Expression", "SpreadElement", "ArgumentPlaceholder"),
    optional: {
      validate: chain(assertValueType("boolean"), assertOptionalChainStart())
    },
    typeArguments: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("ClassProperty", {
  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  ...classMethodOrPropertyUnionShapeCommon(),
  fields: {
    ...classMethodOrPropertyCommon(),
    value: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    definite: {
      validate: assertValueType("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    readonly: {
      validate: assertValueType("boolean"),
      optional: true
    },
    declare: {
      validate: assertValueType("boolean"),
      optional: true
    },
    variance: {
      validate: assertNodeType("Variance"),
      optional: true
    }
  }
});
defineType$4("ClassPrivateProperty", {
  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: assertNodeType("PrivateName")
    },
    value: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    static: {
      validate: assertValueType("boolean"),
      default: false
    },
    readonly: {
      validate: assertValueType("boolean"),
      optional: true
    },
    optional: {
      validate: assertValueType("boolean"),
      optional: true
    },
    definite: {
      validate: assertValueType("boolean"),
      optional: true
    },
    variance: {
      validate: assertNodeType("Variance"),
      optional: true
    }
  }
});
defineType$4("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: {
    ...classMethodOrDeclareMethodCommon(),
    ...functionTypeAnnotationCommon(),
    kind: {
      validate: assertOneOf("get", "set", "method"),
      default: "method"
    },
    key: {
      validate: assertNodeType("PrivateName")
    },
    body: {
      validate: assertNodeType("BlockStatement")
    }
  }
});
defineType$4("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: assertNodeType("Identifier")
    }
  }
});
defineType$4("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: validateArrayOfType("Statement")
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});
defineType$4("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: assertNodeType("Identifier", "StringLiteral")
    },
    value: {
      validate: assertNodeType("StringLiteral")
    }
  }
});

const defineType$3 = defineAliasedType("Flow");
const defineInterfaceishType = name => {
  const isDeclareClass = name === "DeclareClass";
  defineType$3(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", ...(isDeclareClass ? ["mixins", "implements"] : []), "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: validateType("Identifier"),
      typeParameters: validateOptionalType("TypeParameterDeclaration"),
      extends: validateOptional(arrayOfType("InterfaceExtends")),
      ...(isDeclareClass ? {
        mixins: validateOptional(arrayOfType("InterfaceExtends")),
        implements: validateOptional(arrayOfType("ClassImplements"))
      } : {}),
      body: validateType("ObjectTypeAnnotation")
    }
  });
};
defineType$3("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: validateType("FlowType")
  }
});
defineType$3("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: validate$2(assertValueType("boolean"))
  }
});
defineType$3("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
defineType$3("DeclareFunction", {
  builder: ["id"],
  visitor: ["id", "predicate"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier"),
    predicate: validateOptionalType("FlowPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
defineType$3("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier", "StringLiteral"),
    body: validateType("BlockStatement"),
    kind: validateOptional(assertOneOf("CommonJS", "ES"))
  }
});
defineType$3("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: validateType("TypeAnnotation")
  }
});
defineType$3("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TypeParameterDeclaration"),
    right: validateType("FlowType")
  }
});
defineType$3("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TypeParameterDeclaration"),
    supertype: validateOptionalType("FlowType"),
    impltype: validateOptionalType("FlowType")
  }
});
defineType$3("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier")
  }
});
defineType$3("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source", "attributes"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: validateOptionalType("Flow"),
    specifiers: validateOptional(arrayOfType("ExportSpecifier", "ExportNamespaceSpecifier")),
    source: validateOptionalType("StringLiteral"),
    default: validateOptional(assertValueType("boolean")),
    ...importAttributes
  }
});
defineType$3("DeclareExportAllDeclaration", {
  visitor: ["source", "attributes"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: validateType("StringLiteral"),
    exportKind: validateOptional(assertOneOf("type", "value")),
    ...importAttributes
  }
});
defineType$3("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: validateType("Expression")
  }
});
defineType$3("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
defineType$3("FunctionTypeAnnotation", {
  builder: ["typeParameters", "params", "rest", "returnType"],
  visitor: ["typeParameters", "this", "params", "rest", "returnType"],
  aliases: ["FlowType"],
  fields: {
    typeParameters: validateOptionalType("TypeParameterDeclaration"),
    params: validateArrayOfType("FunctionTypeParam"),
    rest: validateOptionalType("FunctionTypeParam"),
    this: validateOptionalType("FunctionTypeParam"),
    returnType: validateType("FlowType")
  }
});
defineType$3("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: validateOptionalType("Identifier"),
    typeAnnotation: validateType("FlowType"),
    optional: validateOptional(assertValueType("boolean"))
  }
});
defineType$3("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: validateType("Identifier", "QualifiedTypeIdentifier"),
    typeParameters: validateOptionalType("TypeParameterInstantiation")
  }
});
defineType$3("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
defineType$3("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: validateType("Identifier", "QualifiedTypeIdentifier"),
    typeParameters: validateOptionalType("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
defineType$3("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: validateOptional(arrayOfType("InterfaceExtends")),
    body: validateType("ObjectTypeAnnotation")
  }
});
defineType$3("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: validate$2(arrayOfType("FlowType"))
  }
});
defineType$3("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: validateType("FlowType")
  }
});
defineType$3("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: validate$2(assertValueType("number"))
  }
});
defineType$3("BigIntLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: validate$2(assertValueType("bigint"))
  }
});
defineType$3("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: validate$2(arrayOfType("ObjectTypeProperty", "ObjectTypeSpreadProperty")),
    indexers: {
      validate: arrayOfType("ObjectTypeIndexer"),
      optional: false,
      default: []
    },
    callProperties: {
      validate: arrayOfType("ObjectTypeCallProperty"),
      optional: false,
      default: []
    },
    internalSlots: {
      validate: arrayOfType("ObjectTypeInternalSlot"),
      optional: false,
      default: []
    },
    exact: {
      validate: assertValueType("boolean"),
      default: false
    },
    inexact: validateOptional(assertValueType("boolean"))
  }
});
defineType$3("ObjectTypeInternalSlot", {
  visitor: ["id", "value"],
  builder: ["id", "value", "optional", "static", "method"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: validateType("Identifier"),
    value: validateType("FlowType"),
    optional: validate$2(assertValueType("boolean")),
    static: validate$2(assertValueType("boolean")),
    method: validate$2(assertValueType("boolean"))
  }
});
defineType$3("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: validateType("FlowType"),
    static: validateDefault(assertValueType("boolean"), false)
  }
});
defineType$3("ObjectTypeIndexer", {
  visitor: ["variance", "id", "key", "value"],
  builder: ["id", "key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: validateOptionalType("Identifier"),
    key: validateType("FlowType"),
    value: validateType("FlowType"),
    static: validateDefault(assertValueType("boolean"), false),
    variance: validateOptionalType("Variance")
  }
});
defineType$3("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    key: validateType("Identifier", "StringLiteral", "NumericLiteral"),
    value: validateType("FlowType"),
    kind: {
      validate: assertOneOf("init", "get", "set"),
      default: "init",
      optional: false
    },
    static: validateDefault(assertValueType("boolean"), false),
    proto: validateDefault(assertValueType("boolean"), false),
    optional: validateDefault(assertValueType("boolean"), false),
    variance: validateOptionalType("Variance"),
    method: validateDefault(assertValueType("boolean"), false)
  }
});
defineType$3("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: validateType("FlowType")
  }
});
defineType$3("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TypeParameterDeclaration"),
    supertype: validateOptionalType("FlowType"),
    impltype: validateType("FlowType")
  }
});
defineType$3("QualifiedTypeIdentifier", {
  visitor: ["qualification", "id"],
  builder: ["id", "qualification"],
  fields: {
    id: validateType("Identifier"),
    qualification: validateType("Identifier", "QualifiedTypeIdentifier")
  }
});
defineType$3("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: validate$2(assertValueType("string"))
  }
});
defineType$3("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: validate$2(arrayOfType("FlowType"))
  }
});
defineType$3("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: validateType("FlowType")
  }
});
defineType$3("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TypeParameterDeclaration"),
    right: validateType("FlowType")
  }
});
defineType$3("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: validateType("FlowType")
  }
});
defineType$3("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: validateType("Expression"),
    typeAnnotation: validateType("TypeAnnotation")
  }
});
defineType$3("TypeParameter", {
  builder: ["name", "bound", "default", "variance"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: validate$2(assertValueType("string")),
    bound: validateOptionalType("TypeAnnotation"),
    default: validateOptionalType("FlowType"),
    variance: validateOptionalType("Variance")
  }
});
defineType$3("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: validate$2(arrayOfType("TypeParameter"))
  }
});
defineType$3("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: validate$2(arrayOfType("FlowType"))
  }
});
defineType$3("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: validate$2(arrayOfType("FlowType"))
  }
});
defineType$3("Variance", {
  builder: ["kind"],
  fields: {
    kind: validate$2(assertOneOf("minus", "plus"))
  }
});
defineType$3("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: validateType("Identifier"),
    body: validateType("EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody")
  }
});
const enumBodyBase = {
  explicitType: validateDefault(assertValueType("boolean"), false),
  hasUnknownMembers: validateDefault(assertValueType("boolean"), false)
};
defineType$3("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    ...enumBodyBase,
    members: validateArrayOfType("EnumBooleanMember")
  }
});
defineType$3("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    ...enumBodyBase,
    members: validateArrayOfType("EnumNumberMember")
  }
});
defineType$3("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    ...enumBodyBase,
    members: validateArrayOfType("EnumStringMember", "EnumDefaultedMember")
  }
});
defineType$3("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: validateArrayOfType("EnumDefaultedMember"),
    hasUnknownMembers: validateDefault(assertValueType("boolean"), false)
  }
});
defineType$3("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: validateType("Identifier"),
    init: validateType("BooleanLiteral")
  }
});
defineType$3("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: validateType("Identifier"),
    init: validateType("NumericLiteral")
  }
});
defineType$3("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: validateType("Identifier"),
    init: validateType("StringLiteral")
  }
});
defineType$3("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: validateType("Identifier")
  }
});
defineType$3("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: validateType("FlowType"),
    indexType: validateType("FlowType")
  }
});
defineType$3("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: validateType("FlowType"),
    indexType: validateType("FlowType"),
    optional: validateDefault(assertValueType("boolean"), false)
  }
});

const defineType$2 = defineAliasedType("JSX");
defineType$2("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: assertNodeType("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
defineType$2("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
defineType$2("JSXElement", {
  builder: ["openingElement", "closingElement", "children"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: assertNodeType("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: assertNodeType("JSXClosingElement")
    },
    children: validateArrayOfType("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
  }
});
defineType$2("JSXEmptyExpression", {});
defineType$2("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: assertNodeType("Expression", "JSXEmptyExpression")
    }
  }
});
defineType$2("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$2("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: assertValueType("string")
    }
  }
});
defineType$2("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: assertNodeType("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: assertNodeType("JSXIdentifier")
    }
  }
});
defineType$2("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: assertNodeType("JSXIdentifier")
    },
    name: {
      validate: assertNodeType("JSXIdentifier")
    }
  }
});
defineType$2("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "typeArguments", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: assertNodeType("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: validateArrayOfType("JSXAttribute", "JSXSpreadAttribute"),
    typeArguments: {
      validate: assertNodeType("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$2("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$2("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: assertValueType("string")
    }
  }
});
defineType$2("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: assertNodeType("JSXOpeningFragment")
    },
    closingFragment: {
      validate: assertNodeType("JSXClosingFragment")
    },
    children: validateArrayOfType("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")
  }
});
defineType$2("JSXOpeningFragment", {
  aliases: ["Immutable"]
});
defineType$2("JSXClosingFragment", {
  aliases: ["Immutable"]
});

const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
for (const type of PLACEHOLDERS) {
  const alias = ALIAS_KEYS[type];
  if (alias?.length) PLACEHOLDERS_ALIAS[type] = alias;
}
const PLACEHOLDERS_FLIPPED_ALIAS = {};
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwn(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }
    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});

const defineType$1 = defineAliasedType("Miscellaneous");
defineType$1("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: assertNodeType("Identifier")
    },
    expectedNode: {
      validate: assertOneOf(...PLACEHOLDERS)
    },
    ...patternLikeCommon()
  }
});
defineType$1("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: assertValueType("string")
    }
  }
});

defineType$5("ArgumentPlaceholder", {});
defineType$5("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: assertNodeOrValueType("null", "Expression")
    },
    callee: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$5("ClassAccessorProperty", {
  visitor: ["decorators", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property", "Accessor"],
  ...classMethodOrPropertyUnionShapeCommon(true),
  fields: {
    ...classMethodOrPropertyCommon(),
    key: {
      validate: chain(function () {
        const normal = assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
        const computed = assertNodeType("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), assertNodeType("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
    },
    value: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    definite: {
      validate: assertValueType("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: assertNodeType("TypeAnnotation", "TSTypeAnnotation"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    },
    readonly: {
      validate: assertValueType("boolean"),
      optional: true
    },
    declare: {
      validate: assertValueType("boolean"),
      optional: true
    },
    variance: {
      validate: assertNodeType("Variance"),
      optional: true
    }
  }
});
defineType$5("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: assertNodeType("Expression")
    }
  }
});
defineType$5("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: assertNodeType("BlockStatement")
    },
    async: {
      validate: assertValueType("boolean"),
      default: false
    }
  }
});
defineType$5("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: assertNodeType("Identifier")
    }
  }
});
defineType$5("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: assertNodeType("Program")
    }
  },
  aliases: ["Expression"]
});
defineType$5("TopicReference", {
  aliases: ["Expression"]
});
defineType$5("VoidPattern", {
  aliases: ["Pattern", "PatternLike", "FunctionParameter"]
});

const defineType = defineAliasedType("TypeScript");
const bool = assertValueType("boolean");
const tSFunctionTypeAnnotationCommon = () => ({
  returnType: {
    validate: assertNodeType("TSTypeAnnotation"),
    optional: true
  },
  typeParameters: {
    validate: assertNodeType("TSTypeParameterDeclaration"),
    optional: true
  }
});
defineType("TSParameterProperty", {
  aliases: [],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: assertOneOf("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: assertValueType("boolean"),
      optional: true
    },
    parameter: {
      validate: assertNodeType("Identifier", "AssignmentPattern")
    },
    override: {
      validate: assertValueType("boolean"),
      optional: true
    },
    decorators: {
      validate: arrayOfType("Decorator"),
      optional: true
    }
  }
});
defineType("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: {
    ...functionDeclarationCommon(),
    ...tSFunctionTypeAnnotationCommon()
  }
});
defineType("TSDeclareMethod", {
  visitor: ["key", "typeParameters", "params", "returnType"],
  ...classMethodOrPropertyUnionShapeCommon(),
  fields: {
    ...classMethodOrDeclareMethodCommon(false),
    ...tSFunctionTypeAnnotationCommon()
  }
});
defineType("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: validateType("TSEntityName"),
    right: validateType("Identifier")
  }
});
const signatureDeclarationCommon = () => ({
  typeParameters: validateOptionalType("TSTypeParameterDeclaration"),
  ["params"]: validateArrayOfType("ArrayPattern", "Identifier", "ObjectPattern", "RestElement"),
  ["returnType"]: validateOptionalType("TSTypeAnnotation")
});
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "params", "returnType"],
  fields: signatureDeclarationCommon()
};
defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = () => ({
  key: validateType("Expression"),
  computed: {
    default: false
  },
  optional: validateOptional(bool)
});
defineType("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation"],
  fields: {
    ...namedTypeElementCommon(),
    readonly: validateOptional(bool),
    typeAnnotation: validateOptionalType("TSTypeAnnotation"),
    kind: {
      optional: true,
      validate: assertOneOf("get", "set")
    }
  }
});
defineType("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "params", "returnType"],
  fields: {
    ...signatureDeclarationCommon(),
    ...namedTypeElementCommon(),
    kind: {
      validate: assertOneOf("method", "get", "set"),
      default: "method"
    }
  }
});
defineType("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: validateOptional(bool),
    static: validateOptional(bool),
    parameters: validateArrayOfType("Identifier"),
    typeAnnotation: validateOptionalType("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];
for (const type of tsKeywordTypes) {
  defineType(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}
defineType("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "params", "returnType"]
};
defineType("TSFunctionType", {
  ...fnOrCtrBase,
  fields: signatureDeclarationCommon()
});
defineType("TSConstructorType", {
  ...fnOrCtrBase,
  fields: {
    ...signatureDeclarationCommon(),
    abstract: validateOptional(bool)
  }
});
defineType("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeArguments"],
  fields: {
    typeName: validateType("TSEntityName"),
    ["typeArguments"]: validateOptionalType("TSTypeParameterInstantiation")
  }
});
defineType("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: validateType("Identifier", "TSThisType"),
    typeAnnotation: validateOptionalType("TSTypeAnnotation"),
    asserts: validateOptional(bool)
  }
});
defineType("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName", "typeArguments"],
  fields: {
    exprName: validateType("TSEntityName", "TSImportType"),
    ["typeArguments"]: validateOptionalType("TSTypeParameterInstantiation")
  }
});
defineType("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: validateArrayOfType("TSTypeElement")
  }
});
defineType("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: validateType("TSType")
  }
});
defineType("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: validateArrayOfType("TSType", "TSNamedTupleMember")
  }
});
defineType("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: validateType("TSType")
  }
});
defineType("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: validateType("TSType")
  }
});
defineType("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: validateType("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: validateType("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: validateArrayOfType("TSType")
  }
};
defineType("TSUnionType", unionOrIntersection);
defineType("TSIntersectionType", unionOrIntersection);
defineType("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: validateType("TSType"),
    extendsType: validateType("TSType"),
    trueType: validateType("TSType"),
    falseType: validateType("TSType")
  }
});
defineType("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: validateType("TSTypeParameter")
  }
});
defineType("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: validateType("TSType")
  }
});
defineType("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  builder: ["typeAnnotation", "operator"],
  fields: {
    operator: {
      validate: assertOneOf("keyof", "readonly", "unique"),
      default: undefined
    },
    typeAnnotation: validateType("TSType")
  }
});
defineType("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: validateType("TSType"),
    indexType: validateType("TSType")
  }
});
defineType("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["key", "constraint", "nameType", "typeAnnotation"],
  builder: ["key", "constraint", "nameType", "typeAnnotation"],
  fields: {
    key: validateType("Identifier"),
    constraint: validateType("TSType"),
    readonly: validateOptional(assertOneOf(true, false, "+", "-")),
    optional: validateOptional(assertOneOf(true, false, "+", "-")),
    typeAnnotation: validateOptionalType("TSType"),
    nameType: validateOptionalType("TSType")
  }
});
defineType("TSTemplateLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["quasis", "types"],
  fields: {
    quasis: validateArrayOfType("TemplateElement"),
    types: {
      validate: chain(assertValueType("array"), assertEach(assertNodeType("TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of types.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function () {
        const unaryExpression = assertNodeType("NumericLiteral", "BigIntLiteral");
        const unaryOperator = assertOneOf("-");
        const literal = assertNodeType("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");
        const validator = function validator(parent, key, node) {
          if (is("UnaryExpression", node)) {
            unaryOperator(node, "operator", node.operator);
            unaryExpression(node, "argument", node.argument);
          } else {
            literal(parent, key, node);
          }
        };
        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"];
        return validator;
      }()
    }
  }
});
defineType("TSClassImplements", {
  aliases: ["TSType"],
  visitor: ["expression", "typeArguments"],
  fields: {
    expression: validateType("Expression"),
    typeArguments: validateOptionalType("TSTypeParameterInstantiation")
  }
});
defineType("TSInterfaceHeritage", {
  aliases: ["TSType"],
  visitor: ["expression", "typeArguments"],
  fields: {
    expression: validateType("Expression"),
    typeArguments: validateOptionalType("TSTypeParameterInstantiation")
  }
});
defineType("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: validateOptional(bool),
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TSTypeParameterDeclaration"),
    extends: validateOptional(arrayOfType("TSInterfaceHeritage")),
    body: validateType("TSInterfaceBody")
  }
});
defineType("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: validateArrayOfType("TSTypeElement")
  }
});
defineType("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: validateOptional(bool),
    id: validateType("Identifier"),
    typeParameters: validateOptionalType("TSTypeParameterDeclaration"),
    typeAnnotation: validateType("TSType")
  }
});
defineType("TSInstantiationExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeArguments"],
  fields: {
    expression: validateType("Expression"),
    ["typeArguments"]: validateOptionalType("TSTypeParameterInstantiation")
  }
});
const TSTypeExpression = {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: validateType("Expression"),
    typeAnnotation: validateType("TSType")
  }
};
defineType("TSAsExpression", TSTypeExpression);
defineType("TSSatisfiesExpression", TSTypeExpression);
defineType("TSTypeAssertion", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: validateType("TSType"),
    expression: validateType("Expression")
  }
});
defineType("TSEnumBody", {
  visitor: ["members"],
  fields: {
    members: validateArrayOfType("TSEnumMember")
  }
});
defineType("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: validateOptional(bool),
    const: validateOptional(bool),
    id: validateType("Identifier"),
    body: validateType("TSEnumBody")
  }
});
defineType("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: validateType("Identifier", "StringLiteral"),
    initializer: validateOptionalType("Expression")
  }
});
defineType("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    kind: {
      validate: assertOneOf("global", "namespace", "module"),
      default: "namespace"
    },
    declare: validateOptional(bool),
    id: {
      validate: chain(assertNodeType("TSEntityName", "StringLiteral"), Object.assign(function (node, key, val) {
        if (node.kind === "namespace" && is("StringLiteral", val)) {
          throw new TypeError(`TSModuleDeclaration of kind 'namespace' cannot have a StringLiteral id.`);
        }
      }, {
        oneOfNodeTypes: ["TSEntityName", "StringLiteral"]
      }))
    },
    body: validateType("TSModuleBlock")
  }
});
defineType("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent", "FunctionParent"],
  visitor: ["body"],
  fields: {
    body: validateArrayOfType("Statement")
  }
});
defineType("TSImportType", {
  aliases: ["TSType"],
  builder: ["source", "qualifier", "typeArguments"],
  visitor: ["source", "options", "qualifier", "typeArguments"],
  fields: {
    source: validateType("StringLiteral"),
    qualifier: validateOptionalType("TSEntityName"),
    typeArguments: validateOptionalType("TSTypeParameterInstantiation"),
    options: {
      validate: assertNodeType("ObjectExpression"),
      optional: true
    }
  }
});
defineType("TSImportEqualsDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "moduleReference"],
  fields: {
    id: validateType("Identifier"),
    moduleReference: validateType("TSEntityName", "TSExternalModuleReference"),
    importKind: {
      validate: assertOneOf("type", "value"),
      optional: true
    }
  }
});
defineType("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: validateType("StringLiteral")
  }
});
defineType("TSNonNullExpression", {
  aliases: ["Expression", "LVal", "PatternLike"],
  visitor: ["expression"],
  fields: {
    expression: validateType("Expression")
  }
});
defineType("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: validateType("Expression")
  }
});
defineType("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: validateType("Identifier")
  }
});
defineType("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: assertNodeType("TSType")
    }
  }
});
defineType("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: validateArrayOfType("TSType")
  }
});
defineType("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: validateArrayOfType("TSTypeParameter")
  }
});
defineType("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["name", "constraint", "default"],
  fields: {
    name: {
      validate: assertNodeType("Identifier")
    },
    in: {
      validate: assertValueType("boolean"),
      optional: true
    },
    out: {
      validate: assertValueType("boolean"),
      optional: true
    },
    const: {
      validate: assertValueType("boolean"),
      optional: true
    },
    constraint: {
      validate: assertNodeType("TSType"),
      optional: true
    },
    default: {
      validate: assertNodeType("TSType"),
      optional: true
    }
  }
});

const DEPRECATED_ALIASES = {
  ModuleDeclaration: "ImportOrExportDeclaration"
};

Object.keys(DEPRECATED_ALIASES).forEach(deprecatedAlias => {
  FLIPPED_ALIAS_KEYS[deprecatedAlias] = FLIPPED_ALIAS_KEYS[DEPRECATED_ALIASES[deprecatedAlias]];
});
for (const {
  types,
  set
} of allExpandedTypes) {
  for (const type of types) {
    const aliases = FLIPPED_ALIAS_KEYS[type];
    if (aliases) {
      aliases.forEach(set.add, set);
    } else {
      set.add(type);
    }
  }
}
const TYPES = [].concat(Object.keys(VISITOR_KEYS), Object.keys(FLIPPED_ALIAS_KEYS), Object.keys(DEPRECATED_KEYS));

function validate$1(node, key, val) {
  if (!node) return;
  const fields = NODE_FIELDS$1[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}
function validateInternal(field, node, key, val, maybeNode) {
  if (!field?.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
  if (maybeNode) {
    const type = val.type;
    if (type == null) return;
    NODE_PARENT_VALIDATIONS[type]?.(node, key, val);
  }
}
function validateField(node, key, val, field) {
  if (!field?.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}
function validateChild(node, key, val) {
  const type = val?.type;
  if (type == null) return;
  NODE_PARENT_VALIDATIONS[type]?.(node, key, val);
}

var _validate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: validate$1,
  validateChild: validateChild,
  validateField: validateField,
  validateInternal: validateInternal
});

const {
  validateInternal: validate
} = _validate;
const {
  NODE_FIELDS
} = utils;
function arrayExpression(elements) {
  const node = {
    type: "ArrayExpression",
    elements
  };
  const defs = NODE_FIELDS.ArrayExpression;
  validate(defs.elements, node, "elements", elements, 1);
  return node;
}
function assignmentExpression(operator, left, right) {
  const node = {
    type: "AssignmentExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.AssignmentExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function binaryExpression(operator, left, right) {
  const node = {
    type: "BinaryExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.BinaryExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function interpreterDirective(value) {
  const node = {
    type: "InterpreterDirective",
    value
  };
  const defs = NODE_FIELDS.InterpreterDirective;
  validate(defs.value, node, "value", value);
  return node;
}
function directive(value) {
  const node = {
    type: "Directive",
    value
  };
  const defs = NODE_FIELDS.Directive;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function directiveLiteral(value) {
  const node = {
    type: "DirectiveLiteral",
    value
  };
  const defs = NODE_FIELDS.DirectiveLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function blockStatement(body, directives = []) {
  const node = {
    type: "BlockStatement",
    body,
    directives
  };
  const defs = NODE_FIELDS.BlockStatement;
  validate(defs.body, node, "body", body, 1);
  validate(defs.directives, node, "directives", directives, 1);
  return node;
}
function breakStatement(label = null) {
  const node = {
    type: "BreakStatement",
    label
  };
  const defs = NODE_FIELDS.BreakStatement;
  validate(defs.label, node, "label", label, 1);
  return node;
}
function callExpression(callee, _arguments) {
  const node = {
    type: "CallExpression",
    callee,
    arguments: _arguments
  };
  const defs = NODE_FIELDS.CallExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  return node;
}
function catchClause(param = null, body) {
  const node = {
    type: "CatchClause",
    param,
    body
  };
  const defs = NODE_FIELDS.CatchClause;
  validate(defs.param, node, "param", param, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function conditionalExpression(test, consequent, alternate) {
  const node = {
    type: "ConditionalExpression",
    test,
    consequent,
    alternate
  };
  const defs = NODE_FIELDS.ConditionalExpression;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  validate(defs.alternate, node, "alternate", alternate, 1);
  return node;
}
function continueStatement(label = null) {
  const node = {
    type: "ContinueStatement",
    label
  };
  const defs = NODE_FIELDS.ContinueStatement;
  validate(defs.label, node, "label", label, 1);
  return node;
}
function debuggerStatement() {
  return {
    type: "DebuggerStatement"
  };
}
function doWhileStatement(test, body) {
  const node = {
    type: "DoWhileStatement",
    test,
    body
  };
  const defs = NODE_FIELDS.DoWhileStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function emptyStatement() {
  return {
    type: "EmptyStatement"
  };
}
function expressionStatement(expression) {
  const node = {
    type: "ExpressionStatement",
    expression
  };
  const defs = NODE_FIELDS.ExpressionStatement;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function file(program, comments = null, tokens = null) {
  const node = {
    type: "File",
    program,
    comments,
    tokens
  };
  const defs = NODE_FIELDS.File;
  validate(defs.program, node, "program", program, 1);
  validate(defs.comments, node, "comments", comments, 1);
  validate(defs.tokens, node, "tokens", tokens);
  return node;
}
function forInStatement(left, right, body) {
  const node = {
    type: "ForInStatement",
    left,
    right,
    body
  };
  const defs = NODE_FIELDS.ForInStatement;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function forStatement(init = null, test = null, update = null, body) {
  const node = {
    type: "ForStatement",
    init,
    test,
    update,
    body
  };
  const defs = NODE_FIELDS.ForStatement;
  validate(defs.init, node, "init", init, 1);
  validate(defs.test, node, "test", test, 1);
  validate(defs.update, node, "update", update, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function functionDeclaration(id = null, params, body, generator = false, async = false) {
  const node = {
    type: "FunctionDeclaration",
    id,
    params,
    body,
    generator,
    async
  };
  const defs = NODE_FIELDS.FunctionDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function functionExpression(id = null, params, body, generator = false, async = false) {
  const node = {
    type: "FunctionExpression",
    id,
    params,
    body,
    generator,
    async
  };
  const defs = NODE_FIELDS.FunctionExpression;
  validate(defs.id, node, "id", id, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function identifier(name) {
  const node = {
    type: "Identifier",
    name
  };
  const defs = NODE_FIELDS.Identifier;
  validate(defs.name, node, "name", name);
  return node;
}
function ifStatement(test, consequent, alternate = null) {
  const node = {
    type: "IfStatement",
    test,
    consequent,
    alternate
  };
  const defs = NODE_FIELDS.IfStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  validate(defs.alternate, node, "alternate", alternate, 1);
  return node;
}
function labeledStatement(label, body) {
  const node = {
    type: "LabeledStatement",
    label,
    body
  };
  const defs = NODE_FIELDS.LabeledStatement;
  validate(defs.label, node, "label", label, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function stringLiteral(value) {
  const node = {
    type: "StringLiteral",
    value
  };
  const defs = NODE_FIELDS.StringLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function numericLiteral(value) {
  const node = {
    type: "NumericLiteral",
    value
  };
  const defs = NODE_FIELDS.NumericLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function nullLiteral() {
  return {
    type: "NullLiteral"
  };
}
function booleanLiteral(value) {
  const node = {
    type: "BooleanLiteral",
    value
  };
  const defs = NODE_FIELDS.BooleanLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function regExpLiteral(pattern, flags = "") {
  const node = {
    type: "RegExpLiteral",
    pattern,
    flags
  };
  const defs = NODE_FIELDS.RegExpLiteral;
  validate(defs.pattern, node, "pattern", pattern);
  validate(defs.flags, node, "flags", flags);
  return node;
}
function logicalExpression(operator, left, right) {
  const node = {
    type: "LogicalExpression",
    operator,
    left,
    right
  };
  const defs = NODE_FIELDS.LogicalExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function memberExpression(object, property, computed = false) {
  const node = {
    type: "MemberExpression",
    object,
    property,
    computed
  };
  const defs = NODE_FIELDS.MemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  validate(defs.computed, node, "computed", computed);
  return node;
}
function newExpression(callee, _arguments) {
  const node = {
    type: "NewExpression",
    callee,
    arguments: _arguments
  };
  const defs = NODE_FIELDS.NewExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  return node;
}
function program(body, directives = [], sourceType = "script", interpreter = null) {
  const node = {
    type: "Program",
    body,
    directives,
    sourceType,
    interpreter
  };
  const defs = NODE_FIELDS.Program;
  validate(defs.body, node, "body", body, 1);
  validate(defs.directives, node, "directives", directives, 1);
  validate(defs.sourceType, node, "sourceType", sourceType);
  validate(defs.interpreter, node, "interpreter", interpreter, 1);
  return node;
}
function objectExpression(properties) {
  const node = {
    type: "ObjectExpression",
    properties
  };
  const defs = NODE_FIELDS.ObjectExpression;
  validate(defs.properties, node, "properties", properties, 1);
  return node;
}
function objectMethod(kind, key, params, body, computed = false, generator = false, async = false) {
  const node = {
    type: "ObjectMethod",
    kind,
    key,
    params,
    body,
    computed,
    generator,
    async
  };
  const defs = NODE_FIELDS.ObjectMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function objectProperty(key, value, computed = false, shorthand = false) {
  const node = {
    type: "ObjectProperty",
    key,
    value,
    computed,
    shorthand
  };
  const defs = NODE_FIELDS.ObjectProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.shorthand, node, "shorthand", shorthand);
  return node;
}
function restElement(argument) {
  const node = {
    type: "RestElement",
    argument
  };
  const defs = NODE_FIELDS.RestElement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function returnStatement(argument = null) {
  const node = {
    type: "ReturnStatement",
    argument
  };
  const defs = NODE_FIELDS.ReturnStatement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function sequenceExpression(expressions) {
  const node = {
    type: "SequenceExpression",
    expressions
  };
  const defs = NODE_FIELDS.SequenceExpression;
  validate(defs.expressions, node, "expressions", expressions, 1);
  return node;
}
function parenthesizedExpression(expression) {
  const node = {
    type: "ParenthesizedExpression",
    expression
  };
  const defs = NODE_FIELDS.ParenthesizedExpression;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function switchCase(test = null, consequent) {
  const node = {
    type: "SwitchCase",
    test,
    consequent
  };
  const defs = NODE_FIELDS.SwitchCase;
  validate(defs.test, node, "test", test, 1);
  validate(defs.consequent, node, "consequent", consequent, 1);
  return node;
}
function switchStatement(discriminant, cases) {
  const node = {
    type: "SwitchStatement",
    discriminant,
    cases
  };
  const defs = NODE_FIELDS.SwitchStatement;
  validate(defs.discriminant, node, "discriminant", discriminant, 1);
  validate(defs.cases, node, "cases", cases, 1);
  return node;
}
function thisExpression() {
  return {
    type: "ThisExpression"
  };
}
function throwStatement(argument) {
  const node = {
    type: "ThrowStatement",
    argument
  };
  const defs = NODE_FIELDS.ThrowStatement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function tryStatement(block, handler = null, finalizer = null) {
  const node = {
    type: "TryStatement",
    block,
    handler,
    finalizer
  };
  const defs = NODE_FIELDS.TryStatement;
  validate(defs.block, node, "block", block, 1);
  validate(defs.handler, node, "handler", handler, 1);
  validate(defs.finalizer, node, "finalizer", finalizer, 1);
  return node;
}
function unaryExpression(operator, argument, prefix = true) {
  const node = {
    type: "UnaryExpression",
    operator,
    argument,
    prefix
  };
  const defs = NODE_FIELDS.UnaryExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.prefix, node, "prefix", prefix);
  return node;
}
function updateExpression(operator, argument, prefix = false) {
  const node = {
    type: "UpdateExpression",
    operator,
    argument,
    prefix
  };
  const defs = NODE_FIELDS.UpdateExpression;
  validate(defs.operator, node, "operator", operator);
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.prefix, node, "prefix", prefix);
  return node;
}
function variableDeclaration(kind, declarations) {
  const node = {
    type: "VariableDeclaration",
    kind,
    declarations
  };
  const defs = NODE_FIELDS.VariableDeclaration;
  validate(defs.kind, node, "kind", kind);
  validate(defs.declarations, node, "declarations", declarations, 1);
  return node;
}
function variableDeclarator(id, init = null) {
  const node = {
    type: "VariableDeclarator",
    id,
    init
  };
  const defs = NODE_FIELDS.VariableDeclarator;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function whileStatement(test, body) {
  const node = {
    type: "WhileStatement",
    test,
    body
  };
  const defs = NODE_FIELDS.WhileStatement;
  validate(defs.test, node, "test", test, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function withStatement(object, body) {
  const node = {
    type: "WithStatement",
    object,
    body
  };
  const defs = NODE_FIELDS.WithStatement;
  validate(defs.object, node, "object", object, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function assignmentPattern(left, right) {
  const node = {
    type: "AssignmentPattern",
    left,
    right
  };
  const defs = NODE_FIELDS.AssignmentPattern;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function arrayPattern(elements) {
  const node = {
    type: "ArrayPattern",
    elements
  };
  const defs = NODE_FIELDS.ArrayPattern;
  validate(defs.elements, node, "elements", elements, 1);
  return node;
}
function arrowFunctionExpression(params, body, async = false) {
  const node = {
    type: "ArrowFunctionExpression",
    params,
    body,
    async,
    expression: body.type !== "BlockStatement"
  };
  const defs = NODE_FIELDS.ArrowFunctionExpression;
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.async, node, "async", async);
  return node;
}
function classBody(body) {
  const node = {
    type: "ClassBody",
    body
  };
  const defs = NODE_FIELDS.ClassBody;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function classExpression(id = null, superClass = null, body, decorators = null) {
  const node = {
    type: "ClassExpression",
    id,
    superClass,
    body,
    decorators
  };
  const defs = NODE_FIELDS.ClassExpression;
  validate(defs.id, node, "id", id, 1);
  validate(defs.superClass, node, "superClass", superClass, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  return node;
}
function classDeclaration(id = null, superClass = null, body, decorators = null) {
  const node = {
    type: "ClassDeclaration",
    id,
    superClass,
    body,
    decorators
  };
  const defs = NODE_FIELDS.ClassDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.superClass, node, "superClass", superClass, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  return node;
}
function exportAllDeclaration(source, attributes = null) {
  const node = {
    type: "ExportAllDeclaration",
    source,
    attributes
  };
  const defs = NODE_FIELDS.ExportAllDeclaration;
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function exportDefaultDeclaration(declaration) {
  const node = {
    type: "ExportDefaultDeclaration",
    declaration
  };
  const defs = NODE_FIELDS.ExportDefaultDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  return node;
}
function exportNamedDeclaration(declaration = null, specifiers = [], source = null, attributes = null) {
  const node = {
    type: "ExportNamedDeclaration",
    declaration,
    specifiers,
    source,
    attributes
  };
  const defs = NODE_FIELDS.ExportNamedDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function exportSpecifier(local, exported) {
  const node = {
    type: "ExportSpecifier",
    local,
    exported
  };
  const defs = NODE_FIELDS.ExportSpecifier;
  validate(defs.local, node, "local", local, 1);
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function forOfStatement(left, right, body, _await = false) {
  const node = {
    type: "ForOfStatement",
    left,
    right,
    body,
    await: _await
  };
  const defs = NODE_FIELDS.ForOfStatement;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.await, node, "await", _await);
  return node;
}
function importDeclaration(specifiers, source, attributes = null) {
  const node = {
    type: "ImportDeclaration",
    specifiers,
    source,
    attributes
  };
  const defs = NODE_FIELDS.ImportDeclaration;
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function importDefaultSpecifier(local) {
  const node = {
    type: "ImportDefaultSpecifier",
    local
  };
  const defs = NODE_FIELDS.ImportDefaultSpecifier;
  validate(defs.local, node, "local", local, 1);
  return node;
}
function importNamespaceSpecifier(local) {
  const node = {
    type: "ImportNamespaceSpecifier",
    local
  };
  const defs = NODE_FIELDS.ImportNamespaceSpecifier;
  validate(defs.local, node, "local", local, 1);
  return node;
}
function importSpecifier(local, imported) {
  const node = {
    type: "ImportSpecifier",
    local,
    imported
  };
  const defs = NODE_FIELDS.ImportSpecifier;
  validate(defs.local, node, "local", local, 1);
  validate(defs.imported, node, "imported", imported, 1);
  return node;
}
function metaProperty(meta, property) {
  const node = {
    type: "MetaProperty",
    meta,
    property
  };
  const defs = NODE_FIELDS.MetaProperty;
  validate(defs.meta, node, "meta", meta, 1);
  validate(defs.property, node, "property", property, 1);
  return node;
}
function classMethod(kind = "method", key, params, body, computed = false, _static = false, generator = false, async = false) {
  const node = {
    type: "ClassMethod",
    kind,
    key,
    params,
    body,
    computed,
    static: _static,
    generator,
    async
  };
  const defs = NODE_FIELDS.ClassMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  validate(defs.generator, node, "generator", generator);
  validate(defs.async, node, "async", async);
  return node;
}
function objectPattern(properties) {
  const node = {
    type: "ObjectPattern",
    properties
  };
  const defs = NODE_FIELDS.ObjectPattern;
  validate(defs.properties, node, "properties", properties, 1);
  return node;
}
function spreadElement(argument) {
  const node = {
    type: "SpreadElement",
    argument
  };
  const defs = NODE_FIELDS.SpreadElement;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function _super() {
  return {
    type: "Super"
  };
}
function taggedTemplateExpression(tag, quasi) {
  const node = {
    type: "TaggedTemplateExpression",
    tag,
    quasi
  };
  const defs = NODE_FIELDS.TaggedTemplateExpression;
  validate(defs.tag, node, "tag", tag, 1);
  validate(defs.quasi, node, "quasi", quasi, 1);
  return node;
}
function templateElement(value, tail = false) {
  const node = {
    type: "TemplateElement",
    value,
    tail
  };
  const defs = NODE_FIELDS.TemplateElement;
  validate(defs.value, node, "value", value);
  validate(defs.tail, node, "tail", tail);
  return node;
}
function templateLiteral(quasis, expressions) {
  const node = {
    type: "TemplateLiteral",
    quasis,
    expressions
  };
  const defs = NODE_FIELDS.TemplateLiteral;
  validate(defs.quasis, node, "quasis", quasis, 1);
  validate(defs.expressions, node, "expressions", expressions, 1);
  return node;
}
function yieldExpression(argument = null, delegate = false) {
  const node = {
    type: "YieldExpression",
    argument,
    delegate
  };
  const defs = NODE_FIELDS.YieldExpression;
  validate(defs.argument, node, "argument", argument, 1);
  validate(defs.delegate, node, "delegate", delegate);
  return node;
}
function awaitExpression(argument) {
  const node = {
    type: "AwaitExpression",
    argument
  };
  const defs = NODE_FIELDS.AwaitExpression;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function importExpression(source, options = null) {
  const node = {
    type: "ImportExpression",
    source,
    options
  };
  const defs = NODE_FIELDS.ImportExpression;
  validate(defs.source, node, "source", source, 1);
  validate(defs.options, node, "options", options, 1);
  return node;
}
function _import() {
  return {
    type: "Import"
  };
}
function bigIntLiteral(value) {
  const node = {
    type: "BigIntLiteral",
    value
  };
  const defs = NODE_FIELDS.BigIntLiteral;
  validate(defs.value, node, "value", value);
  return node;
}
function exportNamespaceSpecifier(exported) {
  const node = {
    type: "ExportNamespaceSpecifier",
    exported
  };
  const defs = NODE_FIELDS.ExportNamespaceSpecifier;
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function optionalMemberExpression(object, property, computed = false, optional) {
  const node = {
    type: "OptionalMemberExpression",
    object,
    property,
    computed,
    optional
  };
  const defs = NODE_FIELDS.OptionalMemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function optionalCallExpression(callee, _arguments, optional) {
  const node = {
    type: "OptionalCallExpression",
    callee,
    arguments: _arguments,
    optional
  };
  const defs = NODE_FIELDS.OptionalCallExpression;
  validate(defs.callee, node, "callee", callee, 1);
  validate(defs.arguments, node, "arguments", _arguments, 1);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function classProperty(key, value = null, typeAnnotation = null, decorators = null, computed = false, _static = false) {
  const node = {
    type: "ClassProperty",
    key,
    value,
    typeAnnotation,
    decorators,
    computed,
    static: _static
  };
  const defs = NODE_FIELDS.ClassProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  return node;
}
function classPrivateProperty(key, value = null, decorators = null, _static = false) {
  const node = {
    type: "ClassPrivateProperty",
    key,
    value,
    decorators,
    static: _static
  };
  const defs = NODE_FIELDS.ClassPrivateProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.static, node, "static", _static);
  return node;
}
function classPrivateMethod(kind = "method", key, params, body, _static = false) {
  const node = {
    type: "ClassPrivateMethod",
    kind,
    key,
    params,
    body,
    static: _static,
    async: false,
    computed: false,
    generator: false
  };
  const defs = NODE_FIELDS.ClassPrivateMethod;
  validate(defs.kind, node, "kind", kind);
  validate(defs.key, node, "key", key, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.static, node, "static", _static);
  return node;
}
function privateName(id) {
  const node = {
    type: "PrivateName",
    id
  };
  const defs = NODE_FIELDS.PrivateName;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function staticBlock(body) {
  const node = {
    type: "StaticBlock",
    body
  };
  const defs = NODE_FIELDS.StaticBlock;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function importAttribute(key, value) {
  const node = {
    type: "ImportAttribute",
    key,
    value
  };
  const defs = NODE_FIELDS.ImportAttribute;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  return node;
}
function anyTypeAnnotation() {
  return {
    type: "AnyTypeAnnotation"
  };
}
function arrayTypeAnnotation(elementType) {
  const node = {
    type: "ArrayTypeAnnotation",
    elementType
  };
  const defs = NODE_FIELDS.ArrayTypeAnnotation;
  validate(defs.elementType, node, "elementType", elementType, 1);
  return node;
}
function booleanTypeAnnotation() {
  return {
    type: "BooleanTypeAnnotation"
  };
}
function booleanLiteralTypeAnnotation(value) {
  const node = {
    type: "BooleanLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.BooleanLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function nullLiteralTypeAnnotation() {
  return {
    type: "NullLiteralTypeAnnotation"
  };
}
function classImplements(id, typeParameters = null) {
  const node = {
    type: "ClassImplements",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.ClassImplements;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function declareClass(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "DeclareClass",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.DeclareClass;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function declareFunction(id) {
  const node = {
    type: "DeclareFunction",
    id
  };
  const defs = NODE_FIELDS.DeclareFunction;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function declareInterface(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "DeclareInterface",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.DeclareInterface;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function declareModule(id, body, kind = null) {
  const node = {
    type: "DeclareModule",
    id,
    body,
    kind
  };
  const defs = NODE_FIELDS.DeclareModule;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  validate(defs.kind, node, "kind", kind);
  return node;
}
function declareModuleExports(typeAnnotation) {
  const node = {
    type: "DeclareModuleExports",
    typeAnnotation
  };
  const defs = NODE_FIELDS.DeclareModuleExports;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function declareTypeAlias(id, typeParameters = null, right) {
  const node = {
    type: "DeclareTypeAlias",
    id,
    typeParameters,
    right
  };
  const defs = NODE_FIELDS.DeclareTypeAlias;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function declareOpaqueType(id, typeParameters = null, supertype = null) {
  const node = {
    type: "DeclareOpaqueType",
    id,
    typeParameters,
    supertype
  };
  const defs = NODE_FIELDS.DeclareOpaqueType;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.supertype, node, "supertype", supertype, 1);
  return node;
}
function declareVariable(id) {
  const node = {
    type: "DeclareVariable",
    id
  };
  const defs = NODE_FIELDS.DeclareVariable;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function declareExportDeclaration(declaration = null, specifiers = null, source = null, attributes = null) {
  const node = {
    type: "DeclareExportDeclaration",
    declaration,
    specifiers,
    source,
    attributes
  };
  const defs = NODE_FIELDS.DeclareExportDeclaration;
  validate(defs.declaration, node, "declaration", declaration, 1);
  validate(defs.specifiers, node, "specifiers", specifiers, 1);
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function declareExportAllDeclaration(source, attributes = null) {
  const node = {
    type: "DeclareExportAllDeclaration",
    source,
    attributes
  };
  const defs = NODE_FIELDS.DeclareExportAllDeclaration;
  validate(defs.source, node, "source", source, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  return node;
}
function declaredPredicate(value) {
  const node = {
    type: "DeclaredPredicate",
    value
  };
  const defs = NODE_FIELDS.DeclaredPredicate;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function existsTypeAnnotation() {
  return {
    type: "ExistsTypeAnnotation"
  };
}
function functionTypeAnnotation(typeParameters = null, params, rest = null, returnType) {
  const node = {
    type: "FunctionTypeAnnotation",
    typeParameters,
    params,
    rest,
    returnType
  };
  const defs = NODE_FIELDS.FunctionTypeAnnotation;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.rest, node, "rest", rest, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function functionTypeParam(name = null, typeAnnotation) {
  const node = {
    type: "FunctionTypeParam",
    name,
    typeAnnotation
  };
  const defs = NODE_FIELDS.FunctionTypeParam;
  validate(defs.name, node, "name", name, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function genericTypeAnnotation(id, typeParameters = null) {
  const node = {
    type: "GenericTypeAnnotation",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.GenericTypeAnnotation;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function inferredPredicate() {
  return {
    type: "InferredPredicate"
  };
}
function interfaceExtends(id, typeParameters = null) {
  const node = {
    type: "InterfaceExtends",
    id,
    typeParameters
  };
  const defs = NODE_FIELDS.InterfaceExtends;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  return node;
}
function interfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "InterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.InterfaceDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function interfaceTypeAnnotation(_extends = null, body) {
  const node = {
    type: "InterfaceTypeAnnotation",
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.InterfaceTypeAnnotation;
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function intersectionTypeAnnotation(types) {
  const node = {
    type: "IntersectionTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.IntersectionTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function mixedTypeAnnotation() {
  return {
    type: "MixedTypeAnnotation"
  };
}
function emptyTypeAnnotation() {
  return {
    type: "EmptyTypeAnnotation"
  };
}
function nullableTypeAnnotation(typeAnnotation) {
  const node = {
    type: "NullableTypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.NullableTypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function numberLiteralTypeAnnotation(value) {
  const node = {
    type: "NumberLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.NumberLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function bigIntLiteralTypeAnnotation(value) {
  const node = {
    type: "BigIntLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.BigIntLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function numberTypeAnnotation() {
  return {
    type: "NumberTypeAnnotation"
  };
}
function objectTypeAnnotation(properties, indexers = [], callProperties = [], internalSlots = [], exact = false) {
  const node = {
    type: "ObjectTypeAnnotation",
    properties,
    indexers,
    callProperties,
    internalSlots,
    exact
  };
  const defs = NODE_FIELDS.ObjectTypeAnnotation;
  validate(defs.properties, node, "properties", properties, 1);
  validate(defs.indexers, node, "indexers", indexers, 1);
  validate(defs.callProperties, node, "callProperties", callProperties, 1);
  validate(defs.internalSlots, node, "internalSlots", internalSlots, 1);
  validate(defs.exact, node, "exact", exact);
  return node;
}
function objectTypeInternalSlot(id, value, optional, _static, method) {
  const node = {
    type: "ObjectTypeInternalSlot",
    id,
    value,
    optional,
    static: _static,
    method
  };
  const defs = NODE_FIELDS.ObjectTypeInternalSlot;
  validate(defs.id, node, "id", id, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.optional, node, "optional", optional);
  validate(defs.static, node, "static", _static);
  validate(defs.method, node, "method", method);
  return node;
}
function objectTypeCallProperty(value) {
  const node = {
    type: "ObjectTypeCallProperty",
    value,
    static: false
  };
  const defs = NODE_FIELDS.ObjectTypeCallProperty;
  validate(defs.value, node, "value", value, 1);
  return node;
}
function objectTypeIndexer(id = null, key, value, variance = null) {
  const node = {
    type: "ObjectTypeIndexer",
    id,
    key,
    value,
    variance,
    static: false
  };
  const defs = NODE_FIELDS.ObjectTypeIndexer;
  validate(defs.id, node, "id", id, 1);
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function objectTypeProperty(key, value, variance = null) {
  const node = {
    type: "ObjectTypeProperty",
    key,
    value,
    variance,
    kind: "init",
    method: false,
    optional: false,
    proto: false,
    static: false
  };
  const defs = NODE_FIELDS.ObjectTypeProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function objectTypeSpreadProperty(argument) {
  const node = {
    type: "ObjectTypeSpreadProperty",
    argument
  };
  const defs = NODE_FIELDS.ObjectTypeSpreadProperty;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function opaqueType(id, typeParameters = null, supertype = null, impltype) {
  const node = {
    type: "OpaqueType",
    id,
    typeParameters,
    supertype,
    impltype
  };
  const defs = NODE_FIELDS.OpaqueType;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.supertype, node, "supertype", supertype, 1);
  validate(defs.impltype, node, "impltype", impltype, 1);
  return node;
}
function qualifiedTypeIdentifier(id, qualification) {
  const node = {
    type: "QualifiedTypeIdentifier",
    id,
    qualification
  };
  const defs = NODE_FIELDS.QualifiedTypeIdentifier;
  validate(defs.id, node, "id", id, 1);
  validate(defs.qualification, node, "qualification", qualification, 1);
  return node;
}
function stringLiteralTypeAnnotation(value) {
  const node = {
    type: "StringLiteralTypeAnnotation",
    value
  };
  const defs = NODE_FIELDS.StringLiteralTypeAnnotation;
  validate(defs.value, node, "value", value);
  return node;
}
function stringTypeAnnotation() {
  return {
    type: "StringTypeAnnotation"
  };
}
function symbolTypeAnnotation() {
  return {
    type: "SymbolTypeAnnotation"
  };
}
function thisTypeAnnotation() {
  return {
    type: "ThisTypeAnnotation"
  };
}
function tupleTypeAnnotation(types) {
  const node = {
    type: "TupleTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.TupleTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function typeofTypeAnnotation(argument) {
  const node = {
    type: "TypeofTypeAnnotation",
    argument
  };
  const defs = NODE_FIELDS.TypeofTypeAnnotation;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function typeAlias(id, typeParameters = null, right) {
  const node = {
    type: "TypeAlias",
    id,
    typeParameters,
    right
  };
  const defs = NODE_FIELDS.TypeAlias;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function typeAnnotation(typeAnnotation) {
  const node = {
    type: "TypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function typeCastExpression(expression, typeAnnotation) {
  const node = {
    type: "TypeCastExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TypeCastExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function typeParameter(name, bound = null, _default = null, variance = null) {
  const node = {
    type: "TypeParameter",
    name,
    bound,
    default: _default,
    variance
  };
  const defs = NODE_FIELDS.TypeParameter;
  validate(defs.name, node, "name", name);
  validate(defs.bound, node, "bound", bound, 1);
  validate(defs.default, node, "default", _default, 1);
  validate(defs.variance, node, "variance", variance, 1);
  return node;
}
function typeParameterDeclaration(params) {
  const node = {
    type: "TypeParameterDeclaration",
    params
  };
  const defs = NODE_FIELDS.TypeParameterDeclaration;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function typeParameterInstantiation(params) {
  const node = {
    type: "TypeParameterInstantiation",
    params
  };
  const defs = NODE_FIELDS.TypeParameterInstantiation;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function unionTypeAnnotation(types) {
  const node = {
    type: "UnionTypeAnnotation",
    types
  };
  const defs = NODE_FIELDS.UnionTypeAnnotation;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function variance(kind) {
  const node = {
    type: "Variance",
    kind
  };
  const defs = NODE_FIELDS.Variance;
  validate(defs.kind, node, "kind", kind);
  return node;
}
function voidTypeAnnotation() {
  return {
    type: "VoidTypeAnnotation"
  };
}
function enumDeclaration(id, body) {
  const node = {
    type: "EnumDeclaration",
    id,
    body
  };
  const defs = NODE_FIELDS.EnumDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function enumBooleanBody(members) {
  const node = {
    type: "EnumBooleanBody",
    members,
    explicitType: false,
    hasUnknownMembers: false
  };
  const defs = NODE_FIELDS.EnumBooleanBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumNumberBody(members) {
  const node = {
    type: "EnumNumberBody",
    members,
    explicitType: false,
    hasUnknownMembers: false
  };
  const defs = NODE_FIELDS.EnumNumberBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumStringBody(members) {
  const node = {
    type: "EnumStringBody",
    members,
    explicitType: false,
    hasUnknownMembers: false
  };
  const defs = NODE_FIELDS.EnumStringBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumSymbolBody(members) {
  const node = {
    type: "EnumSymbolBody",
    members,
    hasUnknownMembers: false
  };
  const defs = NODE_FIELDS.EnumSymbolBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function enumBooleanMember(id, init) {
  const node = {
    type: "EnumBooleanMember",
    id,
    init
  };
  const defs = NODE_FIELDS.EnumBooleanMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function enumNumberMember(id, init) {
  const node = {
    type: "EnumNumberMember",
    id,
    init
  };
  const defs = NODE_FIELDS.EnumNumberMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function enumStringMember(id, init) {
  const node = {
    type: "EnumStringMember",
    id,
    init
  };
  const defs = NODE_FIELDS.EnumStringMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.init, node, "init", init, 1);
  return node;
}
function enumDefaultedMember(id) {
  const node = {
    type: "EnumDefaultedMember",
    id
  };
  const defs = NODE_FIELDS.EnumDefaultedMember;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function indexedAccessType(objectType, indexType) {
  const node = {
    type: "IndexedAccessType",
    objectType,
    indexType
  };
  const defs = NODE_FIELDS.IndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function optionalIndexedAccessType(objectType, indexType) {
  const node = {
    type: "OptionalIndexedAccessType",
    objectType,
    indexType,
    optional: false
  };
  const defs = NODE_FIELDS.OptionalIndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function jsxAttribute(name, value = null) {
  const node = {
    type: "JSXAttribute",
    name,
    value
  };
  const defs = NODE_FIELDS.JSXAttribute;
  validate(defs.name, node, "name", name, 1);
  validate(defs.value, node, "value", value, 1);
  return node;
}
function jsxClosingElement(name) {
  const node = {
    type: "JSXClosingElement",
    name
  };
  const defs = NODE_FIELDS.JSXClosingElement;
  validate(defs.name, node, "name", name, 1);
  return node;
}
function jsxElement(openingElement, closingElement = null, children) {
  const node = {
    type: "JSXElement",
    openingElement,
    closingElement,
    children
  };
  const defs = NODE_FIELDS.JSXElement;
  validate(defs.openingElement, node, "openingElement", openingElement, 1);
  validate(defs.closingElement, node, "closingElement", closingElement, 1);
  validate(defs.children, node, "children", children, 1);
  return node;
}
function jsxEmptyExpression() {
  return {
    type: "JSXEmptyExpression"
  };
}
function jsxExpressionContainer(expression) {
  const node = {
    type: "JSXExpressionContainer",
    expression
  };
  const defs = NODE_FIELDS.JSXExpressionContainer;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function jsxSpreadChild(expression) {
  const node = {
    type: "JSXSpreadChild",
    expression
  };
  const defs = NODE_FIELDS.JSXSpreadChild;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function jsxIdentifier(name) {
  const node = {
    type: "JSXIdentifier",
    name
  };
  const defs = NODE_FIELDS.JSXIdentifier;
  validate(defs.name, node, "name", name);
  return node;
}
function jsxMemberExpression(object, property) {
  const node = {
    type: "JSXMemberExpression",
    object,
    property
  };
  const defs = NODE_FIELDS.JSXMemberExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.property, node, "property", property, 1);
  return node;
}
function jsxNamespacedName(namespace, name) {
  const node = {
    type: "JSXNamespacedName",
    namespace,
    name
  };
  const defs = NODE_FIELDS.JSXNamespacedName;
  validate(defs.namespace, node, "namespace", namespace, 1);
  validate(defs.name, node, "name", name, 1);
  return node;
}
function jsxOpeningElement(name, attributes, selfClosing = false) {
  const node = {
    type: "JSXOpeningElement",
    name,
    attributes,
    selfClosing
  };
  const defs = NODE_FIELDS.JSXOpeningElement;
  validate(defs.name, node, "name", name, 1);
  validate(defs.attributes, node, "attributes", attributes, 1);
  validate(defs.selfClosing, node, "selfClosing", selfClosing);
  return node;
}
function jsxSpreadAttribute(argument) {
  const node = {
    type: "JSXSpreadAttribute",
    argument
  };
  const defs = NODE_FIELDS.JSXSpreadAttribute;
  validate(defs.argument, node, "argument", argument, 1);
  return node;
}
function jsxText(value) {
  const node = {
    type: "JSXText",
    value
  };
  const defs = NODE_FIELDS.JSXText;
  validate(defs.value, node, "value", value);
  return node;
}
function jsxFragment(openingFragment, closingFragment, children) {
  const node = {
    type: "JSXFragment",
    openingFragment,
    closingFragment,
    children
  };
  const defs = NODE_FIELDS.JSXFragment;
  validate(defs.openingFragment, node, "openingFragment", openingFragment, 1);
  validate(defs.closingFragment, node, "closingFragment", closingFragment, 1);
  validate(defs.children, node, "children", children, 1);
  return node;
}
function jsxOpeningFragment() {
  return {
    type: "JSXOpeningFragment"
  };
}
function jsxClosingFragment() {
  return {
    type: "JSXClosingFragment"
  };
}
function placeholder(expectedNode, name) {
  const node = {
    type: "Placeholder",
    expectedNode,
    name
  };
  const defs = NODE_FIELDS.Placeholder;
  validate(defs.expectedNode, node, "expectedNode", expectedNode);
  validate(defs.name, node, "name", name, 1);
  return node;
}
function v8IntrinsicIdentifier(name) {
  const node = {
    type: "V8IntrinsicIdentifier",
    name
  };
  const defs = NODE_FIELDS.V8IntrinsicIdentifier;
  validate(defs.name, node, "name", name);
  return node;
}
function argumentPlaceholder() {
  return {
    type: "ArgumentPlaceholder"
  };
}
function bindExpression(object, callee) {
  const node = {
    type: "BindExpression",
    object,
    callee
  };
  const defs = NODE_FIELDS.BindExpression;
  validate(defs.object, node, "object", object, 1);
  validate(defs.callee, node, "callee", callee, 1);
  return node;
}
function classAccessorProperty(key, value = null, typeAnnotation = null, decorators = null, computed = false, _static = false) {
  const node = {
    type: "ClassAccessorProperty",
    key,
    value,
    typeAnnotation,
    decorators,
    computed,
    static: _static
  };
  const defs = NODE_FIELDS.ClassAccessorProperty;
  validate(defs.key, node, "key", key, 1);
  validate(defs.value, node, "value", value, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.decorators, node, "decorators", decorators, 1);
  validate(defs.computed, node, "computed", computed);
  validate(defs.static, node, "static", _static);
  return node;
}
function decorator(expression) {
  const node = {
    type: "Decorator",
    expression
  };
  const defs = NODE_FIELDS.Decorator;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function doExpression(body, async = false) {
  const node = {
    type: "DoExpression",
    body,
    async
  };
  const defs = NODE_FIELDS.DoExpression;
  validate(defs.body, node, "body", body, 1);
  validate(defs.async, node, "async", async);
  return node;
}
function exportDefaultSpecifier(exported) {
  const node = {
    type: "ExportDefaultSpecifier",
    exported
  };
  const defs = NODE_FIELDS.ExportDefaultSpecifier;
  validate(defs.exported, node, "exported", exported, 1);
  return node;
}
function moduleExpression(body) {
  const node = {
    type: "ModuleExpression",
    body
  };
  const defs = NODE_FIELDS.ModuleExpression;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function topicReference() {
  return {
    type: "TopicReference"
  };
}
function voidPattern() {
  return {
    type: "VoidPattern"
  };
}
function tsParameterProperty(parameter) {
  const node = {
    type: "TSParameterProperty",
    parameter
  };
  const defs = NODE_FIELDS.TSParameterProperty;
  validate(defs.parameter, node, "parameter", parameter, 1);
  return node;
}
function tsDeclareFunction(id = null, typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSDeclareFunction",
    id,
    typeParameters,
    params,
    returnType,
    async: false,
    generator: false
  };
  const defs = NODE_FIELDS.TSDeclareFunction;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsDeclareMethod(key, typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSDeclareMethod",
    key,
    typeParameters,
    params,
    returnType,
    async: false,
    computed: false,
    generator: false,
    kind: "method",
    static: false
  };
  const defs = NODE_FIELDS.TSDeclareMethod;
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsQualifiedName(left, right) {
  const node = {
    type: "TSQualifiedName",
    left,
    right
  };
  const defs = NODE_FIELDS.TSQualifiedName;
  validate(defs.left, node, "left", left, 1);
  validate(defs.right, node, "right", right, 1);
  return node;
}
function tsCallSignatureDeclaration(typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSCallSignatureDeclaration",
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSCallSignatureDeclaration;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsConstructSignatureDeclaration(typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSConstructSignatureDeclaration",
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSConstructSignatureDeclaration;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsPropertySignature(key, typeAnnotation = null) {
  const node = {
    type: "TSPropertySignature",
    key,
    typeAnnotation,
    computed: false
  };
  const defs = NODE_FIELDS.TSPropertySignature;
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsMethodSignature(key, typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSMethodSignature",
    key,
    typeParameters,
    params,
    returnType,
    computed: false,
    kind: "method"
  };
  const defs = NODE_FIELDS.TSMethodSignature;
  validate(defs.key, node, "key", key, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsIndexSignature(parameters, typeAnnotation = null) {
  const node = {
    type: "TSIndexSignature",
    parameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSIndexSignature;
  validate(defs.parameters, node, "parameters", parameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsAnyKeyword() {
  return {
    type: "TSAnyKeyword"
  };
}
function tsBooleanKeyword() {
  return {
    type: "TSBooleanKeyword"
  };
}
function tsBigIntKeyword() {
  return {
    type: "TSBigIntKeyword"
  };
}
function tsIntrinsicKeyword() {
  return {
    type: "TSIntrinsicKeyword"
  };
}
function tsNeverKeyword() {
  return {
    type: "TSNeverKeyword"
  };
}
function tsNullKeyword() {
  return {
    type: "TSNullKeyword"
  };
}
function tsNumberKeyword() {
  return {
    type: "TSNumberKeyword"
  };
}
function tsObjectKeyword() {
  return {
    type: "TSObjectKeyword"
  };
}
function tsStringKeyword() {
  return {
    type: "TSStringKeyword"
  };
}
function tsSymbolKeyword() {
  return {
    type: "TSSymbolKeyword"
  };
}
function tsUndefinedKeyword() {
  return {
    type: "TSUndefinedKeyword"
  };
}
function tsUnknownKeyword() {
  return {
    type: "TSUnknownKeyword"
  };
}
function tsVoidKeyword() {
  return {
    type: "TSVoidKeyword"
  };
}
function tsThisType() {
  return {
    type: "TSThisType"
  };
}
function tsFunctionType(typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSFunctionType",
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSFunctionType;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsConstructorType(typeParameters = null, params, returnType = null) {
  const node = {
    type: "TSConstructorType",
    typeParameters,
    params,
    returnType
  };
  const defs = NODE_FIELDS.TSConstructorType;
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.params, node, "params", params, 1);
  validate(defs.returnType, node, "returnType", returnType, 1);
  return node;
}
function tsTypeReference(typeName, typeArguments = null) {
  const node = {
    type: "TSTypeReference",
    typeName,
    typeArguments
  };
  const defs = NODE_FIELDS.TSTypeReference;
  validate(defs.typeName, node, "typeName", typeName, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsTypePredicate(parameterName, typeAnnotation = null, asserts = null) {
  const node = {
    type: "TSTypePredicate",
    parameterName,
    typeAnnotation,
    asserts
  };
  const defs = NODE_FIELDS.TSTypePredicate;
  validate(defs.parameterName, node, "parameterName", parameterName, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.asserts, node, "asserts", asserts);
  return node;
}
function tsTypeQuery(exprName, typeArguments = null) {
  const node = {
    type: "TSTypeQuery",
    exprName,
    typeArguments
  };
  const defs = NODE_FIELDS.TSTypeQuery;
  validate(defs.exprName, node, "exprName", exprName, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsTypeLiteral(members) {
  const node = {
    type: "TSTypeLiteral",
    members
  };
  const defs = NODE_FIELDS.TSTypeLiteral;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function tsArrayType(elementType) {
  const node = {
    type: "TSArrayType",
    elementType
  };
  const defs = NODE_FIELDS.TSArrayType;
  validate(defs.elementType, node, "elementType", elementType, 1);
  return node;
}
function tsTupleType(elementTypes) {
  const node = {
    type: "TSTupleType",
    elementTypes
  };
  const defs = NODE_FIELDS.TSTupleType;
  validate(defs.elementTypes, node, "elementTypes", elementTypes, 1);
  return node;
}
function tsOptionalType(typeAnnotation) {
  const node = {
    type: "TSOptionalType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSOptionalType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsRestType(typeAnnotation) {
  const node = {
    type: "TSRestType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSRestType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsNamedTupleMember(label, elementType, optional = false) {
  const node = {
    type: "TSNamedTupleMember",
    label,
    elementType,
    optional
  };
  const defs = NODE_FIELDS.TSNamedTupleMember;
  validate(defs.label, node, "label", label, 1);
  validate(defs.elementType, node, "elementType", elementType, 1);
  validate(defs.optional, node, "optional", optional);
  return node;
}
function tsUnionType(types) {
  const node = {
    type: "TSUnionType",
    types
  };
  const defs = NODE_FIELDS.TSUnionType;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsIntersectionType(types) {
  const node = {
    type: "TSIntersectionType",
    types
  };
  const defs = NODE_FIELDS.TSIntersectionType;
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsConditionalType(checkType, extendsType, trueType, falseType) {
  const node = {
    type: "TSConditionalType",
    checkType,
    extendsType,
    trueType,
    falseType
  };
  const defs = NODE_FIELDS.TSConditionalType;
  validate(defs.checkType, node, "checkType", checkType, 1);
  validate(defs.extendsType, node, "extendsType", extendsType, 1);
  validate(defs.trueType, node, "trueType", trueType, 1);
  validate(defs.falseType, node, "falseType", falseType, 1);
  return node;
}
function tsInferType(typeParameter) {
  const node = {
    type: "TSInferType",
    typeParameter
  };
  const defs = NODE_FIELDS.TSInferType;
  validate(defs.typeParameter, node, "typeParameter", typeParameter, 1);
  return node;
}
function tsParenthesizedType(typeAnnotation) {
  const node = {
    type: "TSParenthesizedType",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSParenthesizedType;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeOperator(typeAnnotation, operator) {
  const node = {
    type: "TSTypeOperator",
    typeAnnotation,
    operator
  };
  const defs = NODE_FIELDS.TSTypeOperator;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.operator, node, "operator", operator);
  return node;
}
function tsIndexedAccessType(objectType, indexType) {
  const node = {
    type: "TSIndexedAccessType",
    objectType,
    indexType
  };
  const defs = NODE_FIELDS.TSIndexedAccessType;
  validate(defs.objectType, node, "objectType", objectType, 1);
  validate(defs.indexType, node, "indexType", indexType, 1);
  return node;
}
function tsMappedType(key, constraint, nameType = null, typeAnnotation = null) {
  const node = {
    type: "TSMappedType",
    key,
    constraint,
    nameType,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSMappedType;
  validate(defs.key, node, "key", key, 1);
  validate(defs.constraint, node, "constraint", constraint, 1);
  validate(defs.nameType, node, "nameType", nameType, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTemplateLiteralType(quasis, types) {
  const node = {
    type: "TSTemplateLiteralType",
    quasis,
    types
  };
  const defs = NODE_FIELDS.TSTemplateLiteralType;
  validate(defs.quasis, node, "quasis", quasis, 1);
  validate(defs.types, node, "types", types, 1);
  return node;
}
function tsLiteralType(literal) {
  const node = {
    type: "TSLiteralType",
    literal
  };
  const defs = NODE_FIELDS.TSLiteralType;
  validate(defs.literal, node, "literal", literal, 1);
  return node;
}
function tsClassImplements(expression, typeArguments = null) {
  const node = {
    type: "TSClassImplements",
    expression,
    typeArguments
  };
  const defs = NODE_FIELDS.TSClassImplements;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsInterfaceHeritage(expression, typeArguments = null) {
  const node = {
    type: "TSInterfaceHeritage",
    expression,
    typeArguments
  };
  const defs = NODE_FIELDS.TSInterfaceHeritage;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsInterfaceDeclaration(id, typeParameters = null, _extends = null, body) {
  const node = {
    type: "TSInterfaceDeclaration",
    id,
    typeParameters,
    extends: _extends,
    body
  };
  const defs = NODE_FIELDS.TSInterfaceDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.extends, node, "extends", _extends, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsInterfaceBody(body) {
  const node = {
    type: "TSInterfaceBody",
    body
  };
  const defs = NODE_FIELDS.TSInterfaceBody;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsTypeAliasDeclaration(id, typeParameters = null, typeAnnotation) {
  const node = {
    type: "TSTypeAliasDeclaration",
    id,
    typeParameters,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSTypeAliasDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.typeParameters, node, "typeParameters", typeParameters, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsInstantiationExpression(expression, typeArguments = null) {
  const node = {
    type: "TSInstantiationExpression",
    expression,
    typeArguments
  };
  const defs = NODE_FIELDS.TSInstantiationExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsAsExpression(expression, typeAnnotation) {
  const node = {
    type: "TSAsExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSAsExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsSatisfiesExpression(expression, typeAnnotation) {
  const node = {
    type: "TSSatisfiesExpression",
    expression,
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSSatisfiesExpression;
  validate(defs.expression, node, "expression", expression, 1);
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeAssertion(typeAnnotation, expression) {
  const node = {
    type: "TSTypeAssertion",
    typeAnnotation,
    expression
  };
  const defs = NODE_FIELDS.TSTypeAssertion;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsEnumBody(members) {
  const node = {
    type: "TSEnumBody",
    members
  };
  const defs = NODE_FIELDS.TSEnumBody;
  validate(defs.members, node, "members", members, 1);
  return node;
}
function tsEnumDeclaration(id, body) {
  const node = {
    type: "TSEnumDeclaration",
    id,
    body
  };
  const defs = NODE_FIELDS.TSEnumDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsEnumMember(id, initializer = null) {
  const node = {
    type: "TSEnumMember",
    id,
    initializer
  };
  const defs = NODE_FIELDS.TSEnumMember;
  validate(defs.id, node, "id", id, 1);
  validate(defs.initializer, node, "initializer", initializer, 1);
  return node;
}
function tsModuleDeclaration(id, body) {
  const node = {
    type: "TSModuleDeclaration",
    id,
    body,
    kind: "namespace"
  };
  const defs = NODE_FIELDS.TSModuleDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsModuleBlock(body) {
  const node = {
    type: "TSModuleBlock",
    body
  };
  const defs = NODE_FIELDS.TSModuleBlock;
  validate(defs.body, node, "body", body, 1);
  return node;
}
function tsImportType(source, qualifier = null, typeArguments = null) {
  const node = {
    type: "TSImportType",
    source,
    qualifier,
    typeArguments
  };
  const defs = NODE_FIELDS.TSImportType;
  validate(defs.source, node, "source", source, 1);
  validate(defs.qualifier, node, "qualifier", qualifier, 1);
  validate(defs.typeArguments, node, "typeArguments", typeArguments, 1);
  return node;
}
function tsImportEqualsDeclaration(id, moduleReference) {
  const node = {
    type: "TSImportEqualsDeclaration",
    id,
    moduleReference
  };
  const defs = NODE_FIELDS.TSImportEqualsDeclaration;
  validate(defs.id, node, "id", id, 1);
  validate(defs.moduleReference, node, "moduleReference", moduleReference, 1);
  return node;
}
function tsExternalModuleReference(expression) {
  const node = {
    type: "TSExternalModuleReference",
    expression
  };
  const defs = NODE_FIELDS.TSExternalModuleReference;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsNonNullExpression(expression) {
  const node = {
    type: "TSNonNullExpression",
    expression
  };
  const defs = NODE_FIELDS.TSNonNullExpression;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsExportAssignment(expression) {
  const node = {
    type: "TSExportAssignment",
    expression
  };
  const defs = NODE_FIELDS.TSExportAssignment;
  validate(defs.expression, node, "expression", expression, 1);
  return node;
}
function tsNamespaceExportDeclaration(id) {
  const node = {
    type: "TSNamespaceExportDeclaration",
    id
  };
  const defs = NODE_FIELDS.TSNamespaceExportDeclaration;
  validate(defs.id, node, "id", id, 1);
  return node;
}
function tsTypeAnnotation(typeAnnotation) {
  const node = {
    type: "TSTypeAnnotation",
    typeAnnotation
  };
  const defs = NODE_FIELDS.TSTypeAnnotation;
  validate(defs.typeAnnotation, node, "typeAnnotation", typeAnnotation, 1);
  return node;
}
function tsTypeParameterInstantiation(params) {
  const node = {
    type: "TSTypeParameterInstantiation",
    params
  };
  const defs = NODE_FIELDS.TSTypeParameterInstantiation;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function tsTypeParameterDeclaration(params) {
  const node = {
    type: "TSTypeParameterDeclaration",
    params
  };
  const defs = NODE_FIELDS.TSTypeParameterDeclaration;
  validate(defs.params, node, "params", params, 1);
  return node;
}
function tsTypeParameter(constraint = null, _default = null, name) {
  const node = {
    type: "TSTypeParameter",
    constraint,
    default: _default,
    name
  };
  const defs = NODE_FIELDS.TSTypeParameter;
  validate(defs.constraint, node, "constraint", constraint, 1);
  validate(defs.default, node, "default", _default, 1);
  validate(defs.name, node, "name", name, 1);
  return node;
}
function NumberLiteral(value) {
  deprecationWarning("NumberLiteral", "NumericLiteral", "The node type ");
  return numericLiteral(value);
}
function RegexLiteral(pattern, flags = "") {
  deprecationWarning("RegexLiteral", "RegExpLiteral", "The node type ");
  return regExpLiteral(pattern, flags);
}
function RestProperty(argument) {
  deprecationWarning("RestProperty", "RestElement", "The node type ");
  return restElement(argument);
}
function SpreadProperty(argument) {
  deprecationWarning("SpreadProperty", "SpreadElement", "The node type ");
  return spreadElement(argument);
}

var b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  anyTypeAnnotation: anyTypeAnnotation,
  argumentPlaceholder: argumentPlaceholder,
  arrayExpression: arrayExpression,
  arrayPattern: arrayPattern,
  arrayTypeAnnotation: arrayTypeAnnotation,
  arrowFunctionExpression: arrowFunctionExpression,
  assignmentExpression: assignmentExpression,
  assignmentPattern: assignmentPattern,
  awaitExpression: awaitExpression,
  bigIntLiteral: bigIntLiteral,
  bigIntLiteralTypeAnnotation: bigIntLiteralTypeAnnotation,
  binaryExpression: binaryExpression,
  bindExpression: bindExpression,
  blockStatement: blockStatement,
  booleanLiteral: booleanLiteral,
  booleanLiteralTypeAnnotation: booleanLiteralTypeAnnotation,
  booleanTypeAnnotation: booleanTypeAnnotation,
  breakStatement: breakStatement,
  callExpression: callExpression,
  catchClause: catchClause,
  classAccessorProperty: classAccessorProperty,
  classBody: classBody,
  classDeclaration: classDeclaration,
  classExpression: classExpression,
  classImplements: classImplements,
  classMethod: classMethod,
  classPrivateMethod: classPrivateMethod,
  classPrivateProperty: classPrivateProperty,
  classProperty: classProperty,
  conditionalExpression: conditionalExpression,
  continueStatement: continueStatement,
  debuggerStatement: debuggerStatement,
  declareClass: declareClass,
  declareExportAllDeclaration: declareExportAllDeclaration,
  declareExportDeclaration: declareExportDeclaration,
  declareFunction: declareFunction,
  declareInterface: declareInterface,
  declareModule: declareModule,
  declareModuleExports: declareModuleExports,
  declareOpaqueType: declareOpaqueType,
  declareTypeAlias: declareTypeAlias,
  declareVariable: declareVariable,
  declaredPredicate: declaredPredicate,
  decorator: decorator,
  directive: directive,
  directiveLiteral: directiveLiteral,
  doExpression: doExpression,
  doWhileStatement: doWhileStatement,
  emptyStatement: emptyStatement,
  emptyTypeAnnotation: emptyTypeAnnotation,
  enumBooleanBody: enumBooleanBody,
  enumBooleanMember: enumBooleanMember,
  enumDeclaration: enumDeclaration,
  enumDefaultedMember: enumDefaultedMember,
  enumNumberBody: enumNumberBody,
  enumNumberMember: enumNumberMember,
  enumStringBody: enumStringBody,
  enumStringMember: enumStringMember,
  enumSymbolBody: enumSymbolBody,
  existsTypeAnnotation: existsTypeAnnotation,
  exportAllDeclaration: exportAllDeclaration,
  exportDefaultDeclaration: exportDefaultDeclaration,
  exportDefaultSpecifier: exportDefaultSpecifier,
  exportNamedDeclaration: exportNamedDeclaration,
  exportNamespaceSpecifier: exportNamespaceSpecifier,
  exportSpecifier: exportSpecifier,
  expressionStatement: expressionStatement,
  file: file,
  forInStatement: forInStatement,
  forOfStatement: forOfStatement,
  forStatement: forStatement,
  functionDeclaration: functionDeclaration,
  functionExpression: functionExpression,
  functionTypeAnnotation: functionTypeAnnotation,
  functionTypeParam: functionTypeParam,
  genericTypeAnnotation: genericTypeAnnotation,
  identifier: identifier,
  ifStatement: ifStatement,
  import: _import,
  importAttribute: importAttribute,
  importDeclaration: importDeclaration,
  importDefaultSpecifier: importDefaultSpecifier,
  importExpression: importExpression,
  importNamespaceSpecifier: importNamespaceSpecifier,
  importSpecifier: importSpecifier,
  indexedAccessType: indexedAccessType,
  inferredPredicate: inferredPredicate,
  interfaceDeclaration: interfaceDeclaration,
  interfaceExtends: interfaceExtends,
  interfaceTypeAnnotation: interfaceTypeAnnotation,
  interpreterDirective: interpreterDirective,
  intersectionTypeAnnotation: intersectionTypeAnnotation,
  jsxAttribute: jsxAttribute,
  jsxClosingElement: jsxClosingElement,
  jsxClosingFragment: jsxClosingFragment,
  jsxElement: jsxElement,
  jsxEmptyExpression: jsxEmptyExpression,
  jsxExpressionContainer: jsxExpressionContainer,
  jsxFragment: jsxFragment,
  jsxIdentifier: jsxIdentifier,
  jsxMemberExpression: jsxMemberExpression,
  jsxNamespacedName: jsxNamespacedName,
  jsxOpeningElement: jsxOpeningElement,
  jsxOpeningFragment: jsxOpeningFragment,
  jsxSpreadAttribute: jsxSpreadAttribute,
  jsxSpreadChild: jsxSpreadChild,
  jsxText: jsxText,
  labeledStatement: labeledStatement,
  logicalExpression: logicalExpression,
  memberExpression: memberExpression,
  metaProperty: metaProperty,
  mixedTypeAnnotation: mixedTypeAnnotation,
  moduleExpression: moduleExpression,
  newExpression: newExpression,
  nullLiteral: nullLiteral,
  nullLiteralTypeAnnotation: nullLiteralTypeAnnotation,
  nullableTypeAnnotation: nullableTypeAnnotation,
  numberLiteral: NumberLiteral,
  numberLiteralTypeAnnotation: numberLiteralTypeAnnotation,
  numberTypeAnnotation: numberTypeAnnotation,
  numericLiteral: numericLiteral,
  objectExpression: objectExpression,
  objectMethod: objectMethod,
  objectPattern: objectPattern,
  objectProperty: objectProperty,
  objectTypeAnnotation: objectTypeAnnotation,
  objectTypeCallProperty: objectTypeCallProperty,
  objectTypeIndexer: objectTypeIndexer,
  objectTypeInternalSlot: objectTypeInternalSlot,
  objectTypeProperty: objectTypeProperty,
  objectTypeSpreadProperty: objectTypeSpreadProperty,
  opaqueType: opaqueType,
  optionalCallExpression: optionalCallExpression,
  optionalIndexedAccessType: optionalIndexedAccessType,
  optionalMemberExpression: optionalMemberExpression,
  parenthesizedExpression: parenthesizedExpression,
  placeholder: placeholder,
  privateName: privateName,
  program: program,
  qualifiedTypeIdentifier: qualifiedTypeIdentifier,
  regExpLiteral: regExpLiteral,
  regexLiteral: RegexLiteral,
  restElement: restElement,
  restProperty: RestProperty,
  returnStatement: returnStatement,
  sequenceExpression: sequenceExpression,
  spreadElement: spreadElement,
  spreadProperty: SpreadProperty,
  staticBlock: staticBlock,
  stringLiteral: stringLiteral,
  stringLiteralTypeAnnotation: stringLiteralTypeAnnotation,
  stringTypeAnnotation: stringTypeAnnotation,
  super: _super,
  switchCase: switchCase,
  switchStatement: switchStatement,
  symbolTypeAnnotation: symbolTypeAnnotation,
  taggedTemplateExpression: taggedTemplateExpression,
  templateElement: templateElement,
  templateLiteral: templateLiteral,
  thisExpression: thisExpression,
  thisTypeAnnotation: thisTypeAnnotation,
  throwStatement: throwStatement,
  topicReference: topicReference,
  tryStatement: tryStatement,
  tsAnyKeyword: tsAnyKeyword,
  tsArrayType: tsArrayType,
  tsAsExpression: tsAsExpression,
  tsBigIntKeyword: tsBigIntKeyword,
  tsBooleanKeyword: tsBooleanKeyword,
  tsCallSignatureDeclaration: tsCallSignatureDeclaration,
  tsClassImplements: tsClassImplements,
  tsConditionalType: tsConditionalType,
  tsConstructSignatureDeclaration: tsConstructSignatureDeclaration,
  tsConstructorType: tsConstructorType,
  tsDeclareFunction: tsDeclareFunction,
  tsDeclareMethod: tsDeclareMethod,
  tsEnumBody: tsEnumBody,
  tsEnumDeclaration: tsEnumDeclaration,
  tsEnumMember: tsEnumMember,
  tsExportAssignment: tsExportAssignment,
  tsExternalModuleReference: tsExternalModuleReference,
  tsFunctionType: tsFunctionType,
  tsImportEqualsDeclaration: tsImportEqualsDeclaration,
  tsImportType: tsImportType,
  tsIndexSignature: tsIndexSignature,
  tsIndexedAccessType: tsIndexedAccessType,
  tsInferType: tsInferType,
  tsInstantiationExpression: tsInstantiationExpression,
  tsInterfaceBody: tsInterfaceBody,
  tsInterfaceDeclaration: tsInterfaceDeclaration,
  tsInterfaceHeritage: tsInterfaceHeritage,
  tsIntersectionType: tsIntersectionType,
  tsIntrinsicKeyword: tsIntrinsicKeyword,
  tsLiteralType: tsLiteralType,
  tsMappedType: tsMappedType,
  tsMethodSignature: tsMethodSignature,
  tsModuleBlock: tsModuleBlock,
  tsModuleDeclaration: tsModuleDeclaration,
  tsNamedTupleMember: tsNamedTupleMember,
  tsNamespaceExportDeclaration: tsNamespaceExportDeclaration,
  tsNeverKeyword: tsNeverKeyword,
  tsNonNullExpression: tsNonNullExpression,
  tsNullKeyword: tsNullKeyword,
  tsNumberKeyword: tsNumberKeyword,
  tsObjectKeyword: tsObjectKeyword,
  tsOptionalType: tsOptionalType,
  tsParameterProperty: tsParameterProperty,
  tsParenthesizedType: tsParenthesizedType,
  tsPropertySignature: tsPropertySignature,
  tsQualifiedName: tsQualifiedName,
  tsRestType: tsRestType,
  tsSatisfiesExpression: tsSatisfiesExpression,
  tsStringKeyword: tsStringKeyword,
  tsSymbolKeyword: tsSymbolKeyword,
  tsTemplateLiteralType: tsTemplateLiteralType,
  tsThisType: tsThisType,
  tsTupleType: tsTupleType,
  tsTypeAliasDeclaration: tsTypeAliasDeclaration,
  tsTypeAnnotation: tsTypeAnnotation,
  tsTypeAssertion: tsTypeAssertion,
  tsTypeLiteral: tsTypeLiteral,
  tsTypeOperator: tsTypeOperator,
  tsTypeParameter: tsTypeParameter,
  tsTypeParameterDeclaration: tsTypeParameterDeclaration,
  tsTypeParameterInstantiation: tsTypeParameterInstantiation,
  tsTypePredicate: tsTypePredicate,
  tsTypeQuery: tsTypeQuery,
  tsTypeReference: tsTypeReference,
  tsUndefinedKeyword: tsUndefinedKeyword,
  tsUnionType: tsUnionType,
  tsUnknownKeyword: tsUnknownKeyword,
  tsVoidKeyword: tsVoidKeyword,
  tupleTypeAnnotation: tupleTypeAnnotation,
  typeAlias: typeAlias,
  typeAnnotation: typeAnnotation,
  typeCastExpression: typeCastExpression,
  typeParameter: typeParameter,
  typeParameterDeclaration: typeParameterDeclaration,
  typeParameterInstantiation: typeParameterInstantiation,
  typeofTypeAnnotation: typeofTypeAnnotation,
  unaryExpression: unaryExpression,
  unionTypeAnnotation: unionTypeAnnotation,
  updateExpression: updateExpression,
  v8IntrinsicIdentifier: v8IntrinsicIdentifier,
  variableDeclaration: variableDeclaration,
  variableDeclarator: variableDeclarator,
  variance: variance,
  voidPattern: voidPattern,
  voidTypeAnnotation: voidTypeAnnotation,
  whileStatement: whileStatement,
  withStatement: withStatement,
  yieldExpression: yieldExpression
});

function alias(lowercase) {
  return function () {
    deprecationWarning(lowercase.replace(/^(?:ts|jsx|[a-z])/, x => x.toUpperCase()), lowercase, "Usage of builders starting with an uppercase letter such as ", "uppercase builders");
    return b[lowercase](...arguments);
  };
}
const ArrayExpression = alias("arrayExpression"),
  AssignmentExpression = alias("assignmentExpression"),
  BinaryExpression = alias("binaryExpression"),
  InterpreterDirective = alias("interpreterDirective"),
  Directive = alias("directive"),
  DirectiveLiteral = alias("directiveLiteral"),
  BlockStatement = alias("blockStatement"),
  BreakStatement = alias("breakStatement"),
  CallExpression = alias("callExpression"),
  CatchClause = alias("catchClause"),
  ConditionalExpression = alias("conditionalExpression"),
  ContinueStatement = alias("continueStatement"),
  DebuggerStatement = alias("debuggerStatement"),
  DoWhileStatement = alias("doWhileStatement"),
  EmptyStatement = alias("emptyStatement"),
  ExpressionStatement = alias("expressionStatement"),
  File = alias("file"),
  ForInStatement = alias("forInStatement"),
  ForStatement = alias("forStatement"),
  FunctionDeclaration = alias("functionDeclaration"),
  FunctionExpression = alias("functionExpression"),
  Identifier = alias("identifier"),
  IfStatement = alias("ifStatement"),
  LabeledStatement = alias("labeledStatement"),
  StringLiteral = alias("stringLiteral"),
  NumericLiteral = alias("numericLiteral"),
  NullLiteral = alias("nullLiteral"),
  BooleanLiteral = alias("booleanLiteral"),
  RegExpLiteral = alias("regExpLiteral"),
  LogicalExpression = alias("logicalExpression"),
  MemberExpression = alias("memberExpression"),
  NewExpression = alias("newExpression"),
  Program = alias("program"),
  ObjectExpression = alias("objectExpression"),
  ObjectMethod = alias("objectMethod"),
  ObjectProperty = alias("objectProperty"),
  RestElement = alias("restElement"),
  ReturnStatement = alias("returnStatement"),
  SequenceExpression = alias("sequenceExpression"),
  ParenthesizedExpression = alias("parenthesizedExpression"),
  SwitchCase = alias("switchCase"),
  SwitchStatement = alias("switchStatement"),
  ThisExpression = alias("thisExpression"),
  ThrowStatement = alias("throwStatement"),
  TryStatement = alias("tryStatement"),
  UnaryExpression = alias("unaryExpression"),
  UpdateExpression = alias("updateExpression"),
  VariableDeclaration = alias("variableDeclaration"),
  VariableDeclarator = alias("variableDeclarator"),
  WhileStatement = alias("whileStatement"),
  WithStatement = alias("withStatement"),
  AssignmentPattern = alias("assignmentPattern"),
  ArrayPattern = alias("arrayPattern"),
  ArrowFunctionExpression = alias("arrowFunctionExpression"),
  ClassBody = alias("classBody"),
  ClassExpression = alias("classExpression"),
  ClassDeclaration = alias("classDeclaration"),
  ExportAllDeclaration = alias("exportAllDeclaration"),
  ExportDefaultDeclaration = alias("exportDefaultDeclaration"),
  ExportNamedDeclaration = alias("exportNamedDeclaration"),
  ExportSpecifier = alias("exportSpecifier"),
  ForOfStatement = alias("forOfStatement"),
  ImportDeclaration = alias("importDeclaration"),
  ImportDefaultSpecifier = alias("importDefaultSpecifier"),
  ImportNamespaceSpecifier = alias("importNamespaceSpecifier"),
  ImportSpecifier = alias("importSpecifier"),
  MetaProperty = alias("metaProperty"),
  ClassMethod = alias("classMethod"),
  ObjectPattern = alias("objectPattern"),
  SpreadElement = alias("spreadElement"),
  Super = alias("super"),
  TaggedTemplateExpression = alias("taggedTemplateExpression"),
  TemplateElement = alias("templateElement"),
  TemplateLiteral = alias("templateLiteral"),
  YieldExpression = alias("yieldExpression"),
  AwaitExpression = alias("awaitExpression"),
  ImportExpression = alias("importExpression"),
  Import = alias("import"),
  BigIntLiteral = alias("bigIntLiteral"),
  ExportNamespaceSpecifier = alias("exportNamespaceSpecifier"),
  OptionalMemberExpression = alias("optionalMemberExpression"),
  OptionalCallExpression = alias("optionalCallExpression"),
  ClassProperty = alias("classProperty"),
  ClassPrivateProperty = alias("classPrivateProperty"),
  ClassPrivateMethod = alias("classPrivateMethod"),
  PrivateName = alias("privateName"),
  StaticBlock = alias("staticBlock"),
  ImportAttribute = alias("importAttribute"),
  AnyTypeAnnotation = alias("anyTypeAnnotation"),
  ArrayTypeAnnotation = alias("arrayTypeAnnotation"),
  BooleanTypeAnnotation = alias("booleanTypeAnnotation"),
  BooleanLiteralTypeAnnotation = alias("booleanLiteralTypeAnnotation"),
  NullLiteralTypeAnnotation = alias("nullLiteralTypeAnnotation"),
  ClassImplements = alias("classImplements"),
  DeclareClass = alias("declareClass"),
  DeclareFunction = alias("declareFunction"),
  DeclareInterface = alias("declareInterface"),
  DeclareModule = alias("declareModule"),
  DeclareModuleExports = alias("declareModuleExports"),
  DeclareTypeAlias = alias("declareTypeAlias"),
  DeclareOpaqueType = alias("declareOpaqueType"),
  DeclareVariable = alias("declareVariable"),
  DeclareExportDeclaration = alias("declareExportDeclaration"),
  DeclareExportAllDeclaration = alias("declareExportAllDeclaration"),
  DeclaredPredicate = alias("declaredPredicate"),
  ExistsTypeAnnotation = alias("existsTypeAnnotation"),
  FunctionTypeAnnotation = alias("functionTypeAnnotation"),
  FunctionTypeParam = alias("functionTypeParam"),
  GenericTypeAnnotation = alias("genericTypeAnnotation"),
  InferredPredicate = alias("inferredPredicate"),
  InterfaceExtends = alias("interfaceExtends"),
  InterfaceDeclaration = alias("interfaceDeclaration"),
  InterfaceTypeAnnotation = alias("interfaceTypeAnnotation"),
  IntersectionTypeAnnotation = alias("intersectionTypeAnnotation"),
  MixedTypeAnnotation = alias("mixedTypeAnnotation"),
  EmptyTypeAnnotation = alias("emptyTypeAnnotation"),
  NullableTypeAnnotation = alias("nullableTypeAnnotation"),
  NumberLiteralTypeAnnotation = alias("numberLiteralTypeAnnotation"),
  BigIntLiteralTypeAnnotation = alias("bigIntLiteralTypeAnnotation"),
  NumberTypeAnnotation = alias("numberTypeAnnotation"),
  ObjectTypeAnnotation = alias("objectTypeAnnotation"),
  ObjectTypeInternalSlot = alias("objectTypeInternalSlot"),
  ObjectTypeCallProperty = alias("objectTypeCallProperty"),
  ObjectTypeIndexer = alias("objectTypeIndexer"),
  ObjectTypeProperty = alias("objectTypeProperty"),
  ObjectTypeSpreadProperty = alias("objectTypeSpreadProperty"),
  OpaqueType = alias("opaqueType"),
  QualifiedTypeIdentifier = alias("qualifiedTypeIdentifier"),
  StringLiteralTypeAnnotation = alias("stringLiteralTypeAnnotation"),
  StringTypeAnnotation = alias("stringTypeAnnotation"),
  SymbolTypeAnnotation = alias("symbolTypeAnnotation"),
  ThisTypeAnnotation = alias("thisTypeAnnotation"),
  TupleTypeAnnotation = alias("tupleTypeAnnotation"),
  TypeofTypeAnnotation = alias("typeofTypeAnnotation"),
  TypeAlias = alias("typeAlias"),
  TypeAnnotation = alias("typeAnnotation"),
  TypeCastExpression = alias("typeCastExpression"),
  TypeParameter = alias("typeParameter"),
  TypeParameterDeclaration = alias("typeParameterDeclaration"),
  TypeParameterInstantiation = alias("typeParameterInstantiation"),
  UnionTypeAnnotation = alias("unionTypeAnnotation"),
  Variance = alias("variance"),
  VoidTypeAnnotation = alias("voidTypeAnnotation"),
  EnumDeclaration = alias("enumDeclaration"),
  EnumBooleanBody = alias("enumBooleanBody"),
  EnumNumberBody = alias("enumNumberBody"),
  EnumStringBody = alias("enumStringBody"),
  EnumSymbolBody = alias("enumSymbolBody"),
  EnumBooleanMember = alias("enumBooleanMember"),
  EnumNumberMember = alias("enumNumberMember"),
  EnumStringMember = alias("enumStringMember"),
  EnumDefaultedMember = alias("enumDefaultedMember"),
  IndexedAccessType = alias("indexedAccessType"),
  OptionalIndexedAccessType = alias("optionalIndexedAccessType"),
  JSXAttribute = alias("jsxAttribute"),
  JSXClosingElement = alias("jsxClosingElement"),
  JSXElement = alias("jsxElement"),
  JSXEmptyExpression = alias("jsxEmptyExpression"),
  JSXExpressionContainer = alias("jsxExpressionContainer"),
  JSXSpreadChild = alias("jsxSpreadChild"),
  JSXIdentifier = alias("jsxIdentifier"),
  JSXMemberExpression = alias("jsxMemberExpression"),
  JSXNamespacedName = alias("jsxNamespacedName"),
  JSXOpeningElement = alias("jsxOpeningElement"),
  JSXSpreadAttribute = alias("jsxSpreadAttribute"),
  JSXText = alias("jsxText"),
  JSXFragment = alias("jsxFragment"),
  JSXOpeningFragment = alias("jsxOpeningFragment"),
  JSXClosingFragment = alias("jsxClosingFragment"),
  Placeholder = alias("placeholder"),
  V8IntrinsicIdentifier = alias("v8IntrinsicIdentifier"),
  ArgumentPlaceholder = alias("argumentPlaceholder"),
  BindExpression = alias("bindExpression"),
  ClassAccessorProperty = alias("classAccessorProperty"),
  Decorator = alias("decorator"),
  DoExpression = alias("doExpression"),
  ExportDefaultSpecifier = alias("exportDefaultSpecifier"),
  ModuleExpression = alias("moduleExpression"),
  TopicReference = alias("topicReference"),
  VoidPattern = alias("voidPattern"),
  TSParameterProperty = alias("tsParameterProperty"),
  TSDeclareFunction = alias("tsDeclareFunction"),
  TSDeclareMethod = alias("tsDeclareMethod"),
  TSQualifiedName = alias("tsQualifiedName"),
  TSCallSignatureDeclaration = alias("tsCallSignatureDeclaration"),
  TSConstructSignatureDeclaration = alias("tsConstructSignatureDeclaration"),
  TSPropertySignature = alias("tsPropertySignature"),
  TSMethodSignature = alias("tsMethodSignature"),
  TSIndexSignature = alias("tsIndexSignature"),
  TSAnyKeyword = alias("tsAnyKeyword"),
  TSBooleanKeyword = alias("tsBooleanKeyword"),
  TSBigIntKeyword = alias("tsBigIntKeyword"),
  TSIntrinsicKeyword = alias("tsIntrinsicKeyword"),
  TSNeverKeyword = alias("tsNeverKeyword"),
  TSNullKeyword = alias("tsNullKeyword"),
  TSNumberKeyword = alias("tsNumberKeyword"),
  TSObjectKeyword = alias("tsObjectKeyword"),
  TSStringKeyword = alias("tsStringKeyword"),
  TSSymbolKeyword = alias("tsSymbolKeyword"),
  TSUndefinedKeyword = alias("tsUndefinedKeyword"),
  TSUnknownKeyword = alias("tsUnknownKeyword"),
  TSVoidKeyword = alias("tsVoidKeyword"),
  TSThisType = alias("tsThisType"),
  TSFunctionType = alias("tsFunctionType"),
  TSConstructorType = alias("tsConstructorType"),
  TSTypeReference = alias("tsTypeReference"),
  TSTypePredicate = alias("tsTypePredicate"),
  TSTypeQuery = alias("tsTypeQuery"),
  TSTypeLiteral = alias("tsTypeLiteral"),
  TSArrayType = alias("tsArrayType"),
  TSTupleType = alias("tsTupleType"),
  TSOptionalType = alias("tsOptionalType"),
  TSRestType = alias("tsRestType"),
  TSNamedTupleMember = alias("tsNamedTupleMember"),
  TSUnionType = alias("tsUnionType"),
  TSIntersectionType = alias("tsIntersectionType"),
  TSConditionalType = alias("tsConditionalType"),
  TSInferType = alias("tsInferType"),
  TSParenthesizedType = alias("tsParenthesizedType"),
  TSTypeOperator = alias("tsTypeOperator"),
  TSIndexedAccessType = alias("tsIndexedAccessType"),
  TSMappedType = alias("tsMappedType"),
  TSTemplateLiteralType = alias("tsTemplateLiteralType"),
  TSLiteralType = alias("tsLiteralType"),
  TSClassImplements = alias("tsClassImplements"),
  TSInterfaceHeritage = alias("tsInterfaceHeritage"),
  TSInterfaceDeclaration = alias("tsInterfaceDeclaration"),
  TSInterfaceBody = alias("tsInterfaceBody"),
  TSTypeAliasDeclaration = alias("tsTypeAliasDeclaration"),
  TSInstantiationExpression = alias("tsInstantiationExpression"),
  TSAsExpression = alias("tsAsExpression"),
  TSSatisfiesExpression = alias("tsSatisfiesExpression"),
  TSTypeAssertion = alias("tsTypeAssertion"),
  TSEnumBody = alias("tsEnumBody"),
  TSEnumDeclaration = alias("tsEnumDeclaration"),
  TSEnumMember = alias("tsEnumMember"),
  TSModuleDeclaration = alias("tsModuleDeclaration"),
  TSModuleBlock = alias("tsModuleBlock"),
  TSImportType = alias("tsImportType"),
  TSImportEqualsDeclaration = alias("tsImportEqualsDeclaration"),
  TSExternalModuleReference = alias("tsExternalModuleReference"),
  TSNonNullExpression = alias("tsNonNullExpression"),
  TSExportAssignment = alias("tsExportAssignment"),
  TSNamespaceExportDeclaration = alias("tsNamespaceExportDeclaration"),
  TSTypeAnnotation = alias("tsTypeAnnotation"),
  TSTypeParameterInstantiation = alias("tsTypeParameterInstantiation"),
  TSTypeParameterDeclaration = alias("tsTypeParameterDeclaration"),
  TSTypeParameter = alias("tsTypeParameter");

function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/[^ \t]/.exec(lines[i])) {
      lastNonEmptyLine = i;
    }
  }
  let str = "";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");
    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^ +/, "");
    }
    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/ +$/, "");
    }
    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }
      str += trimmedLine;
    }
  }
  if (str) args.push(inherits(stringLiteral(str), child));
}

function buildChildren(node) {
  const elements = [];
  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    if (isJSXText(child)) {
      cleanJSXElementLiteralChild(child, elements);
      continue;
    }
    if (isJSXExpressionContainer(child)) child = child.expression;
    if (isJSXEmptyExpression(child)) continue;
    elements.push(child);
  }
  return elements;
}

function isNode(node) {
  return !!(node && VISITOR_KEYS[node.type]);
}

function assertNode(node) {
  if (!isNode(node)) {
    const type = node?.type ?? JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

function assert(type, node, opts) {
  if (!is(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}
function assertArrayExpression(node, opts) {
  assert("ArrayExpression", node, opts);
}
function assertAssignmentExpression(node, opts) {
  assert("AssignmentExpression", node, opts);
}
function assertBinaryExpression(node, opts) {
  assert("BinaryExpression", node, opts);
}
function assertInterpreterDirective(node, opts) {
  assert("InterpreterDirective", node, opts);
}
function assertDirective(node, opts) {
  assert("Directive", node, opts);
}
function assertDirectiveLiteral(node, opts) {
  assert("DirectiveLiteral", node, opts);
}
function assertBlockStatement(node, opts) {
  assert("BlockStatement", node, opts);
}
function assertBreakStatement(node, opts) {
  assert("BreakStatement", node, opts);
}
function assertCallExpression(node, opts) {
  assert("CallExpression", node, opts);
}
function assertCatchClause(node, opts) {
  assert("CatchClause", node, opts);
}
function assertConditionalExpression(node, opts) {
  assert("ConditionalExpression", node, opts);
}
function assertContinueStatement(node, opts) {
  assert("ContinueStatement", node, opts);
}
function assertDebuggerStatement(node, opts) {
  assert("DebuggerStatement", node, opts);
}
function assertDoWhileStatement(node, opts) {
  assert("DoWhileStatement", node, opts);
}
function assertEmptyStatement(node, opts) {
  assert("EmptyStatement", node, opts);
}
function assertExpressionStatement(node, opts) {
  assert("ExpressionStatement", node, opts);
}
function assertFile(node, opts) {
  assert("File", node, opts);
}
function assertForInStatement(node, opts) {
  assert("ForInStatement", node, opts);
}
function assertForStatement(node, opts) {
  assert("ForStatement", node, opts);
}
function assertFunctionDeclaration(node, opts) {
  assert("FunctionDeclaration", node, opts);
}
function assertFunctionExpression(node, opts) {
  assert("FunctionExpression", node, opts);
}
function assertIdentifier(node, opts) {
  assert("Identifier", node, opts);
}
function assertIfStatement(node, opts) {
  assert("IfStatement", node, opts);
}
function assertLabeledStatement(node, opts) {
  assert("LabeledStatement", node, opts);
}
function assertStringLiteral(node, opts) {
  assert("StringLiteral", node, opts);
}
function assertNumericLiteral(node, opts) {
  assert("NumericLiteral", node, opts);
}
function assertNullLiteral(node, opts) {
  assert("NullLiteral", node, opts);
}
function assertBooleanLiteral(node, opts) {
  assert("BooleanLiteral", node, opts);
}
function assertRegExpLiteral(node, opts) {
  assert("RegExpLiteral", node, opts);
}
function assertLogicalExpression(node, opts) {
  assert("LogicalExpression", node, opts);
}
function assertMemberExpression(node, opts) {
  assert("MemberExpression", node, opts);
}
function assertNewExpression(node, opts) {
  assert("NewExpression", node, opts);
}
function assertProgram(node, opts) {
  assert("Program", node, opts);
}
function assertObjectExpression(node, opts) {
  assert("ObjectExpression", node, opts);
}
function assertObjectMethod(node, opts) {
  assert("ObjectMethod", node, opts);
}
function assertObjectProperty(node, opts) {
  assert("ObjectProperty", node, opts);
}
function assertRestElement(node, opts) {
  assert("RestElement", node, opts);
}
function assertReturnStatement(node, opts) {
  assert("ReturnStatement", node, opts);
}
function assertSequenceExpression(node, opts) {
  assert("SequenceExpression", node, opts);
}
function assertParenthesizedExpression(node, opts) {
  assert("ParenthesizedExpression", node, opts);
}
function assertSwitchCase(node, opts) {
  assert("SwitchCase", node, opts);
}
function assertSwitchStatement(node, opts) {
  assert("SwitchStatement", node, opts);
}
function assertThisExpression(node, opts) {
  assert("ThisExpression", node, opts);
}
function assertThrowStatement(node, opts) {
  assert("ThrowStatement", node, opts);
}
function assertTryStatement(node, opts) {
  assert("TryStatement", node, opts);
}
function assertUnaryExpression(node, opts) {
  assert("UnaryExpression", node, opts);
}
function assertUpdateExpression(node, opts) {
  assert("UpdateExpression", node, opts);
}
function assertVariableDeclaration(node, opts) {
  assert("VariableDeclaration", node, opts);
}
function assertVariableDeclarator(node, opts) {
  assert("VariableDeclarator", node, opts);
}
function assertWhileStatement(node, opts) {
  assert("WhileStatement", node, opts);
}
function assertWithStatement(node, opts) {
  assert("WithStatement", node, opts);
}
function assertAssignmentPattern(node, opts) {
  assert("AssignmentPattern", node, opts);
}
function assertArrayPattern(node, opts) {
  assert("ArrayPattern", node, opts);
}
function assertArrowFunctionExpression(node, opts) {
  assert("ArrowFunctionExpression", node, opts);
}
function assertClassBody(node, opts) {
  assert("ClassBody", node, opts);
}
function assertClassExpression(node, opts) {
  assert("ClassExpression", node, opts);
}
function assertClassDeclaration(node, opts) {
  assert("ClassDeclaration", node, opts);
}
function assertExportAllDeclaration(node, opts) {
  assert("ExportAllDeclaration", node, opts);
}
function assertExportDefaultDeclaration(node, opts) {
  assert("ExportDefaultDeclaration", node, opts);
}
function assertExportNamedDeclaration(node, opts) {
  assert("ExportNamedDeclaration", node, opts);
}
function assertExportSpecifier(node, opts) {
  assert("ExportSpecifier", node, opts);
}
function assertForOfStatement(node, opts) {
  assert("ForOfStatement", node, opts);
}
function assertImportDeclaration(node, opts) {
  assert("ImportDeclaration", node, opts);
}
function assertImportDefaultSpecifier(node, opts) {
  assert("ImportDefaultSpecifier", node, opts);
}
function assertImportNamespaceSpecifier(node, opts) {
  assert("ImportNamespaceSpecifier", node, opts);
}
function assertImportSpecifier(node, opts) {
  assert("ImportSpecifier", node, opts);
}
function assertMetaProperty(node, opts) {
  assert("MetaProperty", node, opts);
}
function assertClassMethod(node, opts) {
  assert("ClassMethod", node, opts);
}
function assertObjectPattern(node, opts) {
  assert("ObjectPattern", node, opts);
}
function assertSpreadElement(node, opts) {
  assert("SpreadElement", node, opts);
}
function assertSuper(node, opts) {
  assert("Super", node, opts);
}
function assertTaggedTemplateExpression(node, opts) {
  assert("TaggedTemplateExpression", node, opts);
}
function assertTemplateElement(node, opts) {
  assert("TemplateElement", node, opts);
}
function assertTemplateLiteral(node, opts) {
  assert("TemplateLiteral", node, opts);
}
function assertYieldExpression(node, opts) {
  assert("YieldExpression", node, opts);
}
function assertAwaitExpression(node, opts) {
  assert("AwaitExpression", node, opts);
}
function assertImportExpression(node, opts) {
  assert("ImportExpression", node, opts);
}
function assertImport(node, opts) {
  assert("Import", node, opts);
}
function assertBigIntLiteral(node, opts) {
  assert("BigIntLiteral", node, opts);
}
function assertExportNamespaceSpecifier(node, opts) {
  assert("ExportNamespaceSpecifier", node, opts);
}
function assertOptionalMemberExpression(node, opts) {
  assert("OptionalMemberExpression", node, opts);
}
function assertOptionalCallExpression(node, opts) {
  assert("OptionalCallExpression", node, opts);
}
function assertClassProperty(node, opts) {
  assert("ClassProperty", node, opts);
}
function assertClassPrivateProperty(node, opts) {
  assert("ClassPrivateProperty", node, opts);
}
function assertClassPrivateMethod(node, opts) {
  assert("ClassPrivateMethod", node, opts);
}
function assertPrivateName(node, opts) {
  assert("PrivateName", node, opts);
}
function assertStaticBlock(node, opts) {
  assert("StaticBlock", node, opts);
}
function assertImportAttribute(node, opts) {
  assert("ImportAttribute", node, opts);
}
function assertAnyTypeAnnotation(node, opts) {
  assert("AnyTypeAnnotation", node, opts);
}
function assertArrayTypeAnnotation(node, opts) {
  assert("ArrayTypeAnnotation", node, opts);
}
function assertBooleanTypeAnnotation(node, opts) {
  assert("BooleanTypeAnnotation", node, opts);
}
function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}
function assertNullLiteralTypeAnnotation(node, opts) {
  assert("NullLiteralTypeAnnotation", node, opts);
}
function assertClassImplements(node, opts) {
  assert("ClassImplements", node, opts);
}
function assertDeclareClass(node, opts) {
  assert("DeclareClass", node, opts);
}
function assertDeclareFunction(node, opts) {
  assert("DeclareFunction", node, opts);
}
function assertDeclareInterface(node, opts) {
  assert("DeclareInterface", node, opts);
}
function assertDeclareModule(node, opts) {
  assert("DeclareModule", node, opts);
}
function assertDeclareModuleExports(node, opts) {
  assert("DeclareModuleExports", node, opts);
}
function assertDeclareTypeAlias(node, opts) {
  assert("DeclareTypeAlias", node, opts);
}
function assertDeclareOpaqueType(node, opts) {
  assert("DeclareOpaqueType", node, opts);
}
function assertDeclareVariable(node, opts) {
  assert("DeclareVariable", node, opts);
}
function assertDeclareExportDeclaration(node, opts) {
  assert("DeclareExportDeclaration", node, opts);
}
function assertDeclareExportAllDeclaration(node, opts) {
  assert("DeclareExportAllDeclaration", node, opts);
}
function assertDeclaredPredicate(node, opts) {
  assert("DeclaredPredicate", node, opts);
}
function assertExistsTypeAnnotation(node, opts) {
  assert("ExistsTypeAnnotation", node, opts);
}
function assertFunctionTypeAnnotation(node, opts) {
  assert("FunctionTypeAnnotation", node, opts);
}
function assertFunctionTypeParam(node, opts) {
  assert("FunctionTypeParam", node, opts);
}
function assertGenericTypeAnnotation(node, opts) {
  assert("GenericTypeAnnotation", node, opts);
}
function assertInferredPredicate(node, opts) {
  assert("InferredPredicate", node, opts);
}
function assertInterfaceExtends(node, opts) {
  assert("InterfaceExtends", node, opts);
}
function assertInterfaceDeclaration(node, opts) {
  assert("InterfaceDeclaration", node, opts);
}
function assertInterfaceTypeAnnotation(node, opts) {
  assert("InterfaceTypeAnnotation", node, opts);
}
function assertIntersectionTypeAnnotation(node, opts) {
  assert("IntersectionTypeAnnotation", node, opts);
}
function assertMixedTypeAnnotation(node, opts) {
  assert("MixedTypeAnnotation", node, opts);
}
function assertEmptyTypeAnnotation(node, opts) {
  assert("EmptyTypeAnnotation", node, opts);
}
function assertNullableTypeAnnotation(node, opts) {
  assert("NullableTypeAnnotation", node, opts);
}
function assertNumberLiteralTypeAnnotation(node, opts) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}
function assertBigIntLiteralTypeAnnotation(node, opts) {
  assert("BigIntLiteralTypeAnnotation", node, opts);
}
function assertNumberTypeAnnotation(node, opts) {
  assert("NumberTypeAnnotation", node, opts);
}
function assertObjectTypeAnnotation(node, opts) {
  assert("ObjectTypeAnnotation", node, opts);
}
function assertObjectTypeInternalSlot(node, opts) {
  assert("ObjectTypeInternalSlot", node, opts);
}
function assertObjectTypeCallProperty(node, opts) {
  assert("ObjectTypeCallProperty", node, opts);
}
function assertObjectTypeIndexer(node, opts) {
  assert("ObjectTypeIndexer", node, opts);
}
function assertObjectTypeProperty(node, opts) {
  assert("ObjectTypeProperty", node, opts);
}
function assertObjectTypeSpreadProperty(node, opts) {
  assert("ObjectTypeSpreadProperty", node, opts);
}
function assertOpaqueType(node, opts) {
  assert("OpaqueType", node, opts);
}
function assertQualifiedTypeIdentifier(node, opts) {
  assert("QualifiedTypeIdentifier", node, opts);
}
function assertStringLiteralTypeAnnotation(node, opts) {
  assert("StringLiteralTypeAnnotation", node, opts);
}
function assertStringTypeAnnotation(node, opts) {
  assert("StringTypeAnnotation", node, opts);
}
function assertSymbolTypeAnnotation(node, opts) {
  assert("SymbolTypeAnnotation", node, opts);
}
function assertThisTypeAnnotation(node, opts) {
  assert("ThisTypeAnnotation", node, opts);
}
function assertTupleTypeAnnotation(node, opts) {
  assert("TupleTypeAnnotation", node, opts);
}
function assertTypeofTypeAnnotation(node, opts) {
  assert("TypeofTypeAnnotation", node, opts);
}
function assertTypeAlias(node, opts) {
  assert("TypeAlias", node, opts);
}
function assertTypeAnnotation(node, opts) {
  assert("TypeAnnotation", node, opts);
}
function assertTypeCastExpression(node, opts) {
  assert("TypeCastExpression", node, opts);
}
function assertTypeParameter(node, opts) {
  assert("TypeParameter", node, opts);
}
function assertTypeParameterDeclaration(node, opts) {
  assert("TypeParameterDeclaration", node, opts);
}
function assertTypeParameterInstantiation(node, opts) {
  assert("TypeParameterInstantiation", node, opts);
}
function assertUnionTypeAnnotation(node, opts) {
  assert("UnionTypeAnnotation", node, opts);
}
function assertVariance(node, opts) {
  assert("Variance", node, opts);
}
function assertVoidTypeAnnotation(node, opts) {
  assert("VoidTypeAnnotation", node, opts);
}
function assertEnumDeclaration(node, opts) {
  assert("EnumDeclaration", node, opts);
}
function assertEnumBooleanBody(node, opts) {
  assert("EnumBooleanBody", node, opts);
}
function assertEnumNumberBody(node, opts) {
  assert("EnumNumberBody", node, opts);
}
function assertEnumStringBody(node, opts) {
  assert("EnumStringBody", node, opts);
}
function assertEnumSymbolBody(node, opts) {
  assert("EnumSymbolBody", node, opts);
}
function assertEnumBooleanMember(node, opts) {
  assert("EnumBooleanMember", node, opts);
}
function assertEnumNumberMember(node, opts) {
  assert("EnumNumberMember", node, opts);
}
function assertEnumStringMember(node, opts) {
  assert("EnumStringMember", node, opts);
}
function assertEnumDefaultedMember(node, opts) {
  assert("EnumDefaultedMember", node, opts);
}
function assertIndexedAccessType(node, opts) {
  assert("IndexedAccessType", node, opts);
}
function assertOptionalIndexedAccessType(node, opts) {
  assert("OptionalIndexedAccessType", node, opts);
}
function assertJSXAttribute(node, opts) {
  assert("JSXAttribute", node, opts);
}
function assertJSXClosingElement(node, opts) {
  assert("JSXClosingElement", node, opts);
}
function assertJSXElement(node, opts) {
  assert("JSXElement", node, opts);
}
function assertJSXEmptyExpression(node, opts) {
  assert("JSXEmptyExpression", node, opts);
}
function assertJSXExpressionContainer(node, opts) {
  assert("JSXExpressionContainer", node, opts);
}
function assertJSXSpreadChild(node, opts) {
  assert("JSXSpreadChild", node, opts);
}
function assertJSXIdentifier(node, opts) {
  assert("JSXIdentifier", node, opts);
}
function assertJSXMemberExpression(node, opts) {
  assert("JSXMemberExpression", node, opts);
}
function assertJSXNamespacedName(node, opts) {
  assert("JSXNamespacedName", node, opts);
}
function assertJSXOpeningElement(node, opts) {
  assert("JSXOpeningElement", node, opts);
}
function assertJSXSpreadAttribute(node, opts) {
  assert("JSXSpreadAttribute", node, opts);
}
function assertJSXText(node, opts) {
  assert("JSXText", node, opts);
}
function assertJSXFragment(node, opts) {
  assert("JSXFragment", node, opts);
}
function assertJSXOpeningFragment(node, opts) {
  assert("JSXOpeningFragment", node, opts);
}
function assertJSXClosingFragment(node, opts) {
  assert("JSXClosingFragment", node, opts);
}
function assertPlaceholder(node, opts) {
  assert("Placeholder", node, opts);
}
function assertV8IntrinsicIdentifier(node, opts) {
  assert("V8IntrinsicIdentifier", node, opts);
}
function assertArgumentPlaceholder(node, opts) {
  assert("ArgumentPlaceholder", node, opts);
}
function assertBindExpression(node, opts) {
  assert("BindExpression", node, opts);
}
function assertClassAccessorProperty(node, opts) {
  assert("ClassAccessorProperty", node, opts);
}
function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}
function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}
function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}
function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}
function assertTopicReference(node, opts) {
  assert("TopicReference", node, opts);
}
function assertVoidPattern(node, opts) {
  assert("VoidPattern", node, opts);
}
function assertTSParameterProperty(node, opts) {
  assert("TSParameterProperty", node, opts);
}
function assertTSDeclareFunction(node, opts) {
  assert("TSDeclareFunction", node, opts);
}
function assertTSDeclareMethod(node, opts) {
  assert("TSDeclareMethod", node, opts);
}
function assertTSQualifiedName(node, opts) {
  assert("TSQualifiedName", node, opts);
}
function assertTSCallSignatureDeclaration(node, opts) {
  assert("TSCallSignatureDeclaration", node, opts);
}
function assertTSConstructSignatureDeclaration(node, opts) {
  assert("TSConstructSignatureDeclaration", node, opts);
}
function assertTSPropertySignature(node, opts) {
  assert("TSPropertySignature", node, opts);
}
function assertTSMethodSignature(node, opts) {
  assert("TSMethodSignature", node, opts);
}
function assertTSIndexSignature(node, opts) {
  assert("TSIndexSignature", node, opts);
}
function assertTSAnyKeyword(node, opts) {
  assert("TSAnyKeyword", node, opts);
}
function assertTSBooleanKeyword(node, opts) {
  assert("TSBooleanKeyword", node, opts);
}
function assertTSBigIntKeyword(node, opts) {
  assert("TSBigIntKeyword", node, opts);
}
function assertTSIntrinsicKeyword(node, opts) {
  assert("TSIntrinsicKeyword", node, opts);
}
function assertTSNeverKeyword(node, opts) {
  assert("TSNeverKeyword", node, opts);
}
function assertTSNullKeyword(node, opts) {
  assert("TSNullKeyword", node, opts);
}
function assertTSNumberKeyword(node, opts) {
  assert("TSNumberKeyword", node, opts);
}
function assertTSObjectKeyword(node, opts) {
  assert("TSObjectKeyword", node, opts);
}
function assertTSStringKeyword(node, opts) {
  assert("TSStringKeyword", node, opts);
}
function assertTSSymbolKeyword(node, opts) {
  assert("TSSymbolKeyword", node, opts);
}
function assertTSUndefinedKeyword(node, opts) {
  assert("TSUndefinedKeyword", node, opts);
}
function assertTSUnknownKeyword(node, opts) {
  assert("TSUnknownKeyword", node, opts);
}
function assertTSVoidKeyword(node, opts) {
  assert("TSVoidKeyword", node, opts);
}
function assertTSThisType(node, opts) {
  assert("TSThisType", node, opts);
}
function assertTSFunctionType(node, opts) {
  assert("TSFunctionType", node, opts);
}
function assertTSConstructorType(node, opts) {
  assert("TSConstructorType", node, opts);
}
function assertTSTypeReference(node, opts) {
  assert("TSTypeReference", node, opts);
}
function assertTSTypePredicate(node, opts) {
  assert("TSTypePredicate", node, opts);
}
function assertTSTypeQuery(node, opts) {
  assert("TSTypeQuery", node, opts);
}
function assertTSTypeLiteral(node, opts) {
  assert("TSTypeLiteral", node, opts);
}
function assertTSArrayType(node, opts) {
  assert("TSArrayType", node, opts);
}
function assertTSTupleType(node, opts) {
  assert("TSTupleType", node, opts);
}
function assertTSOptionalType(node, opts) {
  assert("TSOptionalType", node, opts);
}
function assertTSRestType(node, opts) {
  assert("TSRestType", node, opts);
}
function assertTSNamedTupleMember(node, opts) {
  assert("TSNamedTupleMember", node, opts);
}
function assertTSUnionType(node, opts) {
  assert("TSUnionType", node, opts);
}
function assertTSIntersectionType(node, opts) {
  assert("TSIntersectionType", node, opts);
}
function assertTSConditionalType(node, opts) {
  assert("TSConditionalType", node, opts);
}
function assertTSInferType(node, opts) {
  assert("TSInferType", node, opts);
}
function assertTSParenthesizedType(node, opts) {
  assert("TSParenthesizedType", node, opts);
}
function assertTSTypeOperator(node, opts) {
  assert("TSTypeOperator", node, opts);
}
function assertTSIndexedAccessType(node, opts) {
  assert("TSIndexedAccessType", node, opts);
}
function assertTSMappedType(node, opts) {
  assert("TSMappedType", node, opts);
}
function assertTSTemplateLiteralType(node, opts) {
  assert("TSTemplateLiteralType", node, opts);
}
function assertTSLiteralType(node, opts) {
  assert("TSLiteralType", node, opts);
}
function assertTSClassImplements(node, opts) {
  assert("TSClassImplements", node, opts);
}
function assertTSInterfaceHeritage(node, opts) {
  assert("TSInterfaceHeritage", node, opts);
}
function assertTSInterfaceDeclaration(node, opts) {
  assert("TSInterfaceDeclaration", node, opts);
}
function assertTSInterfaceBody(node, opts) {
  assert("TSInterfaceBody", node, opts);
}
function assertTSTypeAliasDeclaration(node, opts) {
  assert("TSTypeAliasDeclaration", node, opts);
}
function assertTSInstantiationExpression(node, opts) {
  assert("TSInstantiationExpression", node, opts);
}
function assertTSAsExpression(node, opts) {
  assert("TSAsExpression", node, opts);
}
function assertTSSatisfiesExpression(node, opts) {
  assert("TSSatisfiesExpression", node, opts);
}
function assertTSTypeAssertion(node, opts) {
  assert("TSTypeAssertion", node, opts);
}
function assertTSEnumBody(node, opts) {
  assert("TSEnumBody", node, opts);
}
function assertTSEnumDeclaration(node, opts) {
  assert("TSEnumDeclaration", node, opts);
}
function assertTSEnumMember(node, opts) {
  assert("TSEnumMember", node, opts);
}
function assertTSModuleDeclaration(node, opts) {
  assert("TSModuleDeclaration", node, opts);
}
function assertTSModuleBlock(node, opts) {
  assert("TSModuleBlock", node, opts);
}
function assertTSImportType(node, opts) {
  assert("TSImportType", node, opts);
}
function assertTSImportEqualsDeclaration(node, opts) {
  assert("TSImportEqualsDeclaration", node, opts);
}
function assertTSExternalModuleReference(node, opts) {
  assert("TSExternalModuleReference", node, opts);
}
function assertTSNonNullExpression(node, opts) {
  assert("TSNonNullExpression", node, opts);
}
function assertTSExportAssignment(node, opts) {
  assert("TSExportAssignment", node, opts);
}
function assertTSNamespaceExportDeclaration(node, opts) {
  assert("TSNamespaceExportDeclaration", node, opts);
}
function assertTSTypeAnnotation(node, opts) {
  assert("TSTypeAnnotation", node, opts);
}
function assertTSTypeParameterInstantiation(node, opts) {
  assert("TSTypeParameterInstantiation", node, opts);
}
function assertTSTypeParameterDeclaration(node, opts) {
  assert("TSTypeParameterDeclaration", node, opts);
}
function assertTSTypeParameter(node, opts) {
  assert("TSTypeParameter", node, opts);
}
function assertStandardized(node, opts) {
  assert("Standardized", node, opts);
}
function assertExpression(node, opts) {
  assert("Expression", node, opts);
}
function assertBinary(node, opts) {
  assert("Binary", node, opts);
}
function assertScopable(node, opts) {
  assert("Scopable", node, opts);
}
function assertBlockParent(node, opts) {
  assert("BlockParent", node, opts);
}
function assertBlock(node, opts) {
  assert("Block", node, opts);
}
function assertStatement(node, opts) {
  assert("Statement", node, opts);
}
function assertTerminatorless(node, opts) {
  assert("Terminatorless", node, opts);
}
function assertCompletionStatement(node, opts) {
  assert("CompletionStatement", node, opts);
}
function assertConditional(node, opts) {
  assert("Conditional", node, opts);
}
function assertLoop(node, opts) {
  assert("Loop", node, opts);
}
function assertWhile(node, opts) {
  assert("While", node, opts);
}
function assertExpressionWrapper(node, opts) {
  assert("ExpressionWrapper", node, opts);
}
function assertFor(node, opts) {
  assert("For", node, opts);
}
function assertForXStatement(node, opts) {
  assert("ForXStatement", node, opts);
}
function assertFunction(node, opts) {
  assert("Function", node, opts);
}
function assertFunctionParent(node, opts) {
  assert("FunctionParent", node, opts);
}
function assertPureish(node, opts) {
  assert("Pureish", node, opts);
}
function assertDeclaration(node, opts) {
  assert("Declaration", node, opts);
}
function assertFunctionParameter(node, opts) {
  assert("FunctionParameter", node, opts);
}
function assertPatternLike(node, opts) {
  assert("PatternLike", node, opts);
}
function assertLVal(node, opts) {
  assert("LVal", node, opts);
}
function assertTSEntityName(node, opts) {
  assert("TSEntityName", node, opts);
}
function assertLiteral(node, opts) {
  assert("Literal", node, opts);
}
function assertImmutable(node, opts) {
  assert("Immutable", node, opts);
}
function assertUserWhitespacable(node, opts) {
  assert("UserWhitespacable", node, opts);
}
function assertMethod(node, opts) {
  assert("Method", node, opts);
}
function assertObjectMember(node, opts) {
  assert("ObjectMember", node, opts);
}
function assertProperty(node, opts) {
  assert("Property", node, opts);
}
function assertUnaryLike(node, opts) {
  assert("UnaryLike", node, opts);
}
function assertPattern(node, opts) {
  assert("Pattern", node, opts);
}
function assertClass(node, opts) {
  assert("Class", node, opts);
}
function assertImportOrExportDeclaration(node, opts) {
  assert("ImportOrExportDeclaration", node, opts);
}
function assertExportDeclaration(node, opts) {
  assert("ExportDeclaration", node, opts);
}
function assertModuleSpecifier(node, opts) {
  assert("ModuleSpecifier", node, opts);
}
function assertPrivate(node, opts) {
  assert("Private", node, opts);
}
function assertFlow(node, opts) {
  assert("Flow", node, opts);
}
function assertFlowType(node, opts) {
  assert("FlowType", node, opts);
}
function assertFlowBaseAnnotation(node, opts) {
  assert("FlowBaseAnnotation", node, opts);
}
function assertFlowDeclaration(node, opts) {
  assert("FlowDeclaration", node, opts);
}
function assertFlowPredicate(node, opts) {
  assert("FlowPredicate", node, opts);
}
function assertEnumBody(node, opts) {
  assert("EnumBody", node, opts);
}
function assertEnumMember(node, opts) {
  assert("EnumMember", node, opts);
}
function assertJSX(node, opts) {
  assert("JSX", node, opts);
}
function assertMiscellaneous(node, opts) {
  assert("Miscellaneous", node, opts);
}
function assertAccessor(node, opts) {
  assert("Accessor", node, opts);
}
function assertTypeScript(node, opts) {
  assert("TypeScript", node, opts);
}
function assertTSTypeElement(node, opts) {
  assert("TSTypeElement", node, opts);
}
function assertTSType(node, opts) {
  assert("TSType", node, opts);
}
function assertTSBaseType(node, opts) {
  assert("TSBaseType", node, opts);
}
function assertNumberLiteral(node, opts) {
  deprecationWarning("assertNumberLiteral", "assertNumericLiteral");
  assert("NumberLiteral", node, opts);
}
function assertRegexLiteral(node, opts) {
  deprecationWarning("assertRegexLiteral", "assertRegExpLiteral");
  assert("RegexLiteral", node, opts);
}
function assertRestProperty(node, opts) {
  deprecationWarning("assertRestProperty", "assertRestElement");
  assert("RestProperty", node, opts);
}
function assertSpreadProperty(node, opts) {
  deprecationWarning("assertSpreadProperty", "assertSpreadElement");
  assert("SpreadProperty", node, opts);
}
function assertModuleDeclaration(node, opts) {
  deprecationWarning("assertModuleDeclaration", "assertImportOrExportDeclaration");
  assert("ModuleDeclaration", node, opts);
}

function createTypeAnnotationBasedOnTypeof(type) {
  switch (type) {
    case "string":
      return stringTypeAnnotation();
    case "number":
      return numberTypeAnnotation();
    case "undefined":
      return voidTypeAnnotation();
    case "boolean":
      return booleanTypeAnnotation();
    case "function":
      return genericTypeAnnotation(identifier("Function"));
    case "object":
      return genericTypeAnnotation(identifier("Object"));
    case "symbol":
      return genericTypeAnnotation(identifier("Symbol"));
    case "bigint":
      return anyTypeAnnotation();
  }
  throw new Error("Invalid typeof value: " + type);
}

function getQualifiedName$1(node) {
  return isIdentifier(node) ? node.name : `${node.id.name}.${getQualifiedName$1(node.qualification)}`;
}
function removeTypeDuplicates$1(nodesIn) {
  const nodes = Array.from(nodesIn);
  const generics = new Map();
  const bases = new Map();
  const typeGroups = new Set();
  const types = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    if (types.includes(node)) {
      continue;
    }
    if (isAnyTypeAnnotation(node)) {
      return [node];
    }
    if (isFlowBaseAnnotation(node)) {
      bases.set(node.type, node);
      continue;
    }
    if (isUnionTypeAnnotation(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    if (isGenericTypeAnnotation(node)) {
      const name = getQualifiedName$1(node.id);
      if (generics.has(name)) {
        const existingTypeParameters = generics.get(name).typeParameters;
        if (existingTypeParameters) {
          if (node.typeParameters) {
            existingTypeParameters.params.push(...node.typeParameters.params);
            existingTypeParameters.params = removeTypeDuplicates$1(existingTypeParameters.params);
          }
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}

function createFlowUnionType(types) {
  const flattened = removeTypeDuplicates$1(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return unionTypeAnnotation(flattened);
  }
}

function getQualifiedName(node) {
  return isIdentifier(node) ? node.name : isThisExpression(node) ? "this" : `${node.right.name}.${getQualifiedName(node.left)}`;
}
function removeTypeDuplicates(nodesIn) {
  const nodes = Array.from(nodesIn);
  const generics = new Map();
  const bases = new Map();
  const typeGroups = new Set();
  const types = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    if (types.includes(node)) {
      continue;
    }
    if (isTSAnyKeyword(node)) {
      return [node];
    }
    if (isTSBaseType(node)) {
      bases.set(node.type, node);
      continue;
    }
    if (isTSUnionType(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }
      continue;
    }
    const typeArgumentsKey = "typeArguments";
    if (isTSTypeReference(node) && node[typeArgumentsKey]) {
      const typeArguments = node[typeArgumentsKey];
      const name = getQualifiedName(node.typeName);
      if (generics.has(name)) {
        const existingTypeArguments = generics.get(name)[typeArgumentsKey];
        if (existingTypeArguments) {
          existingTypeArguments.params.push(...typeArguments.params);
          existingTypeArguments.params = removeTypeDuplicates(existingTypeArguments.params);
        }
      } else {
        generics.set(name, node);
      }
      continue;
    }
    types.push(node);
  }
  for (const [, baseType] of bases) {
    types.push(baseType);
  }
  for (const [, genericName] of generics) {
    types.push(genericName);
  }
  return types;
}

function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => {
    return isTSTypeAnnotation(type) ? type.typeAnnotation : type;
  });
  const flattened = removeTypeDuplicates(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return tsUnionType(flattened);
  }
}

function buildUndefinedNode() {
  return unaryExpression("void", numericLiteral(0), true);
}

const {
  hasOwn
} = Object;
function cloneIfNode(obj, deep, withoutLoc, commentsCache) {
  if (obj && typeof obj.type === "string") {
    return cloneNodeInternal(obj, deep, withoutLoc, commentsCache);
  }
  return obj;
}
function cloneIfNodeOrArray(obj, deep, withoutLoc, commentsCache) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc, commentsCache));
  }
  return cloneIfNode(obj, deep, withoutLoc, commentsCache);
}
function cloneNode(node, deep = true, withoutLoc = false) {
  if (!node) return node;
  return cloneNodeInternal(node, deep, withoutLoc, new Map());
}
function cloneNodeInternal(node, deep = true, withoutLoc = false, commentsCache) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };
  if (isIdentifier(node)) {
    newNode.name = node.name;
    if (hasOwn(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }
    if (hasOwn(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc, commentsCache) : node.typeAnnotation;
    }
    if (hasOwn(node, "decorators")) {
      newNode.decorators = deep ? cloneIfNodeOrArray(node.decorators, true, withoutLoc, commentsCache) : node.decorators;
    }
  } else if (!hasOwn(NODE_FIELDS$1, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(NODE_FIELDS$1[type])) {
      if (hasOwn(node, field)) {
        if (deep) {
          newNode[field] = isFile(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc, commentsCache) : cloneIfNodeOrArray(node[field], true, withoutLoc, commentsCache);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }
  if (hasOwn(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }
  if (hasOwn(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc, commentsCache);
  }
  if (hasOwn(node, "extra")) {
    newNode.extra = {
      ...node.extra
    };
  }
  return newNode;
}
function maybeCloneComments(comments, deep, withoutLoc, commentsCache) {
  if (!comments || !deep) {
    return comments;
  }
  return comments.map(comment => {
    const cache = commentsCache.get(comment);
    if (cache) return cache;
    const {
      type,
      value,
      loc
    } = comment;
    const ret = {
      type,
      value,
      loc
    };
    if (withoutLoc) {
      ret.loc = undefined;
    }
    commentsCache.set(comment, ret);
    return ret;
  });
}

function clone(node) {
  return cloneNode(node, false);
}

function cloneDeep(node) {
  return cloneNode(node);
}

function cloneDeepWithoutLoc(node) {
  return cloneNode(node, true, true);
}

function cloneWithoutLoc(node) {
  return cloneNode(node, false, true);
}

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;
  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key].push(...comments);
    }
  } else {
    node[key] = comments;
  }
  return node;
}

function addComment(node, type, content, line) {
  return addComments(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}

function inheritInnerComments(child, parent) {
  inherit("innerComments", child, parent);
}

function inheritLeadingComments(child, parent) {
  inherit("leadingComments", child, parent);
}

function inheritTrailingComments(child, parent) {
  inherit("trailingComments", child, parent);
}

function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}

function removeComments(node) {
  COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });
  return node;
}

const STANDARDIZED_TYPES = FLIPPED_ALIAS_KEYS["Standardized"];
const EXPRESSION_TYPES = FLIPPED_ALIAS_KEYS["Expression"];
const BINARY_TYPES = FLIPPED_ALIAS_KEYS["Binary"];
const SCOPABLE_TYPES = FLIPPED_ALIAS_KEYS["Scopable"];
const BLOCKPARENT_TYPES = FLIPPED_ALIAS_KEYS["BlockParent"];
const BLOCK_TYPES = FLIPPED_ALIAS_KEYS["Block"];
const STATEMENT_TYPES = FLIPPED_ALIAS_KEYS["Statement"];
const TERMINATORLESS_TYPES = FLIPPED_ALIAS_KEYS["Terminatorless"];
const COMPLETIONSTATEMENT_TYPES = FLIPPED_ALIAS_KEYS["CompletionStatement"];
const CONDITIONAL_TYPES = FLIPPED_ALIAS_KEYS["Conditional"];
const LOOP_TYPES = FLIPPED_ALIAS_KEYS["Loop"];
const WHILE_TYPES = FLIPPED_ALIAS_KEYS["While"];
const EXPRESSIONWRAPPER_TYPES = FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
const FOR_TYPES = FLIPPED_ALIAS_KEYS["For"];
const FORXSTATEMENT_TYPES = FLIPPED_ALIAS_KEYS["ForXStatement"];
const FUNCTION_TYPES = FLIPPED_ALIAS_KEYS["Function"];
const FUNCTIONPARENT_TYPES = FLIPPED_ALIAS_KEYS["FunctionParent"];
const PUREISH_TYPES = FLIPPED_ALIAS_KEYS["Pureish"];
const DECLARATION_TYPES = FLIPPED_ALIAS_KEYS["Declaration"];
const FUNCTIONPARAMETER_TYPES = FLIPPED_ALIAS_KEYS["FunctionParameter"];
const PATTERNLIKE_TYPES = FLIPPED_ALIAS_KEYS["PatternLike"];
const LVAL_TYPES = FLIPPED_ALIAS_KEYS["LVal"];
const TSENTITYNAME_TYPES = FLIPPED_ALIAS_KEYS["TSEntityName"];
const LITERAL_TYPES = FLIPPED_ALIAS_KEYS["Literal"];
const IMMUTABLE_TYPES = FLIPPED_ALIAS_KEYS["Immutable"];
const USERWHITESPACABLE_TYPES = FLIPPED_ALIAS_KEYS["UserWhitespacable"];
const METHOD_TYPES = FLIPPED_ALIAS_KEYS["Method"];
const OBJECTMEMBER_TYPES = FLIPPED_ALIAS_KEYS["ObjectMember"];
const PROPERTY_TYPES = FLIPPED_ALIAS_KEYS["Property"];
const UNARYLIKE_TYPES = FLIPPED_ALIAS_KEYS["UnaryLike"];
const PATTERN_TYPES = FLIPPED_ALIAS_KEYS["Pattern"];
const CLASS_TYPES = FLIPPED_ALIAS_KEYS["Class"];
const IMPORTOREXPORTDECLARATION_TYPES = FLIPPED_ALIAS_KEYS["ImportOrExportDeclaration"];
const EXPORTDECLARATION_TYPES = FLIPPED_ALIAS_KEYS["ExportDeclaration"];
const MODULESPECIFIER_TYPES = FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
const PRIVATE_TYPES = FLIPPED_ALIAS_KEYS["Private"];
const FLOW_TYPES = FLIPPED_ALIAS_KEYS["Flow"];
const FLOWTYPE_TYPES = FLIPPED_ALIAS_KEYS["FlowType"];
const FLOWBASEANNOTATION_TYPES = FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
const FLOWDECLARATION_TYPES = FLIPPED_ALIAS_KEYS["FlowDeclaration"];
const FLOWPREDICATE_TYPES = FLIPPED_ALIAS_KEYS["FlowPredicate"];
const ENUMBODY_TYPES = FLIPPED_ALIAS_KEYS["EnumBody"];
const ENUMMEMBER_TYPES = FLIPPED_ALIAS_KEYS["EnumMember"];
const JSX_TYPES = FLIPPED_ALIAS_KEYS["JSX"];
const MISCELLANEOUS_TYPES = FLIPPED_ALIAS_KEYS["Miscellaneous"];
const ACCESSOR_TYPES = FLIPPED_ALIAS_KEYS["Accessor"];
const TYPESCRIPT_TYPES = FLIPPED_ALIAS_KEYS["TypeScript"];
const TSTYPEELEMENT_TYPES = FLIPPED_ALIAS_KEYS["TSTypeElement"];
const TSTYPE_TYPES = FLIPPED_ALIAS_KEYS["TSType"];
const TSBASETYPE_TYPES = FLIPPED_ALIAS_KEYS["TSBaseType"];
const MODULEDECLARATION_TYPES = IMPORTOREXPORTDECLARATION_TYPES;

function toBlock(node, parent) {
  if (isBlockStatement(node)) {
    return node;
  }
  let blockNodes;
  if (isEmptyStatement(node)) {
    blockNodes = [];
  } else {
    if (!isStatement(node)) {
      if (isFunction(parent)) {
        node = returnStatement(node);
      } else {
        node = expressionStatement(node);
      }
    }
    blockNodes = [node];
  }
  return blockStatement(blockNodes);
}

function ensureBlock(node, key = "body") {
  const result = toBlock(node[key], node);
  node[key] = result;
  return result;
}

function toIdentifier(input) {
  input = input + "";
  let name = "";
  for (const c of input) {
    name += isIdentifierChar(c.codePointAt(0)) ? c : "-";
  }
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });
  if (!isValidIdentifier(name)) {
    name = `_${name}`;
  }
  return name || "_";
}

function toBindingIdentifierName(name) {
  name = toIdentifier(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && isIdentifier(key)) key = stringLiteral(key.name);
  return key;
}

function toExpression(node) {
  if (isExpressionStatement(node)) {
    node = node.expression;
  }
  if (isExpression(node)) {
    return node;
  }
  if (isClass(node)) {
    node.type = "ClassExpression";
    node.abstract = false;
  } else if (isFunction(node)) {
    node.type = "FunctionExpression";
  }
  if (!isExpression(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }
  return node;
}

const _skip = Symbol();
const _stop = Symbol();
function traverseFast(node, enter, opts) {
  if (!node) return false;
  const keys = VISITOR_KEYS[node.type];
  if (!keys) return false;
  opts = opts || {};
  const ret = enter(node, opts);
  if (ret !== undefined) {
    switch (ret) {
      case _skip:
        return false;
      case _stop:
        return true;
    }
  }
  for (const key of keys) {
    const subNode = node[key];
    if (!subNode) continue;
    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        if (traverseFast(node, enter, opts)) return true;
      }
    } else {
      if (traverseFast(subNode, enter, opts)) return true;
    }
  }
  return false;
}
traverseFast.skip = _skip;
traverseFast.stop = _stop;

const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];
const CLEAR_KEYS_PLUS_COMMENTS = [...COMMENT_KEYS, "comments", ...CLEAR_KEYS];
function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }
  for (const key of Object.keys(node)) {
    if (key.startsWith("_") && node[key] != null) node[key] = undefined;
  }
  const symbols = Object.getOwnPropertySymbols(node);
  for (const sym of symbols) {
    node[sym] = null;
  }
}

function removePropertiesDeep(tree, opts) {
  traverseFast(tree, removeProperties, opts);
  return tree;
}

function toKeyAlias(node, key = node.key) {
  let alias;
  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if (isIdentifier(key)) {
    alias = key.name;
  } else if (isStringLiteral(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify(removePropertiesDeep(cloneNode(key)));
  }
  if (node.computed) {
    alias = `[${alias}]`;
  }
  if (node.static) {
    alias = `static:${alias}`;
  }
  return alias;
}
toKeyAlias.uid = 0;
toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

function toStatement(node, ignore) {
  if (isStatement(node)) {
    return node;
  }
  let mustHaveId = false;
  let newType;
  if (isClass(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if (isFunction(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if (isAssignmentExpression(node)) {
    return expressionStatement(node);
  }
  if (mustHaveId && !node.id) {
    newType = false;
  }
  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }
  node.type = newType;
  return node;
}

const objectToString = Function.call.bind(Object.prototype.toString);
function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}
function valueToNode(value) {
  if (value === undefined) {
    return identifier("undefined");
  }
  if (value === true || value === false) {
    return booleanLiteral(value);
  }
  if (value === null) {
    return nullLiteral();
  }
  if (typeof value === "string") {
    return stringLiteral(value);
  }
  if (typeof value === "number") {
    let result;
    if (Number.isFinite(value)) {
      result = numericLiteral(Math.abs(value));
    } else {
      let numerator;
      if (Number.isNaN(value)) {
        numerator = numericLiteral(0);
      } else {
        numerator = numericLiteral(1);
      }
      result = binaryExpression("/", numerator, numericLiteral(0));
    }
    if (value < 0 || Object.is(value, -0)) {
      result = unaryExpression("-", result);
    }
    return result;
  }
  if (typeof value === "bigint") {
    if (value < 0) {
      return unaryExpression("-", bigIntLiteral(-value));
    } else {
      return bigIntLiteral(value);
    }
  }
  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = /\/([a-z]*)$/.exec(value.toString())[1];
    return regExpLiteral(pattern, flags);
  }
  if (Array.isArray(value)) {
    return arrayExpression(value.map(valueToNode));
  }
  if (isPlainObject(value)) {
    const props = [];
    for (const key of Object.keys(value)) {
      let nodeKey,
        computed = false;
      if (isValidIdentifier(key)) {
        if (key === "__proto__") {
          computed = true;
          nodeKey = stringLiteral(key);
        } else {
          nodeKey = identifier(key);
        }
      } else {
        nodeKey = stringLiteral(key);
      }
      props.push(objectProperty(nodeKey, valueToNode(value[key]), computed));
    }
    return objectExpression(props);
  }
  throw new Error("don't know how to turn this value into a node");
}

function appendToMemberExpression(member, append, computed = false) {
  member.object = memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

function inherits(child, parent) {
  if (!child || !parent) return child;
  for (const key of INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }
  for (const key of Object.keys(parent)) {
    if (key.startsWith("_") && key !== "__clone") {
      child[key] = parent[key];
    }
  }
  for (const key of INHERIT_KEYS.force) {
    child[key] = parent[key];
  }
  inheritsComments(child, parent);
  return child;
}

function prependToMemberExpression(member, prepend) {
  if (isSuper(member.object)) {
    throw new Error("Cannot prepend node to super property access (`super.foo`).");
  }
  member.object = memberExpression(prepend, member.object);
  return member;
}

function getAssignmentIdentifiers(node) {
  const search = [].concat(node);
  const ids = Object.create(null);
  while (search.length) {
    const id = search.pop();
    if (!id) continue;
    switch (id.type) {
      case "ArrayPattern":
        search.push(...id.elements);
        break;
      case "AssignmentExpression":
      case "AssignmentPattern":
      case "ForInStatement":
      case "ForOfStatement":
        search.push(id.left);
        break;
      case "ObjectPattern":
        search.push(...id.properties);
        break;
      case "ObjectProperty":
        search.push(id.value);
        break;
      case "RestElement":
      case "UpdateExpression":
        search.push(id.argument);
        break;
      case "UnaryExpression":
        if (id.operator === "delete") {
          search.push(id.argument);
        }
        break;
      case "Identifier":
        ids[id.name] = id;
        break;
    }
  }
  return ids;
}

function getBindingIdentifiers(node, duplicates, outerOnly, newBindingsOnly) {
  const search = [].concat(node);
  const ids = Object.create(null);
  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    if (newBindingsOnly && (isAssignmentExpression(id) || isUnaryExpression(id) || isUpdateExpression(id))) {
      continue;
    }
    if (isIdentifier(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];
        _ids.push(id);
      } else {
        ids[id.name] = id;
      }
      continue;
    }
    if (isExportDeclaration(id) && !isExportAllDeclaration(id)) {
      if (isDeclaration(id.declaration)) {
        search.push(id.declaration);
      }
      continue;
    }
    if (outerOnly) {
      if (isFunctionDeclaration(id)) {
        search.push(id.id);
        continue;
      }
      if (isFunctionExpression(id) || isClassExpression(id)) {
        continue;
      }
    }
    const keys = getBindingIdentifiers.keys[id.type];
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const nodes = id[key];
        if (nodes) {
          if (Array.isArray(nodes)) {
            search.push(...nodes);
          } else {
            search.push(nodes);
          }
        }
      }
    }
  }
  return ids;
}
const keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  TSImportEqualsDeclaration: ["id"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ClassPrivateMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};
getBindingIdentifiers.keys = keys;

function getOuterBindingIdentifiers(node, duplicates) {
  return getBindingIdentifiers(node, duplicates, true);
}

function getNameFromLiteralId(id) {
  if (isNullLiteral(id)) {
    return "null";
  }
  if (isRegExpLiteral(id)) {
    return `/${id.pattern}/${id.flags}`;
  }
  if (isTemplateLiteral(id)) {
    return id.quasis.map(quasi => quasi.value.raw).join("");
  }
  if (id.value !== undefined) {
    return String(id.value);
  }
  return null;
}
function getObjectMemberKey(node) {
  if (!node.computed || isLiteral(node.key)) {
    return node.key;
  }
  return null;
}
function getFunctionName(node, parent) {
  if ("id" in node && node.id) {
    return {
      name: node.id.name,
      originalNode: node.id
    };
  }
  let prefix = "";
  let id;
  if (isObjectProperty(parent, {
    value: node
  })) {
    id = getObjectMemberKey(parent);
  } else if (isObjectMethod(node) || isClassMethod(node)) {
    id = getObjectMemberKey(node);
    if (node.kind === "get") prefix = "get ";else if (node.kind === "set") prefix = "set ";
  } else if (isVariableDeclarator(parent) && parent.init === node) {
    id = parent.id;
  } else if (isAssignmentExpression(parent, {
    operator: "=",
    right: node
  })) {
    id = parent.left;
  }
  if (!id) return null;
  const name = isLiteral(id) ? getNameFromLiteralId(id) : isIdentifier(id) ? id.name : isPrivateName(id) ? id.id.name : null;
  if (name == null) return null;
  return {
    name: prefix + name,
    originalNode: id
  };
}

function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }
  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}
function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);
  for (const key of keys) {
    const subNode = node[key];
    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }
  if (exit) exit(node, ancestors, state);
}

function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }
  const keys = getBindingIdentifiers.keys[parent.type];
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];
      if (Array.isArray(val)) {
        if (val.includes(node)) return true;
      } else {
        if (val === node) return true;
      }
    }
  }
  return false;
}

function isLet(node) {
  return isVariableDeclaration(node) && node.kind !== "var";
}

function isBlockScoped(node) {
  return isFunctionDeclaration(node) || isClassDeclaration(node) || isLet(node);
}

function isImmutable(node) {
  if (isType(node.type, "Immutable")) return true;
  if (isIdentifier(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }
  if (a.type !== b.type) {
    return false;
  }
  const fields = Object.keys(NODE_FIELDS$1[a.type] || a.type);
  const visitorKeys = VISITOR_KEYS[a.type];
  for (const field of fields) {
    const val_a = a[field];
    const val_b = b[field];
    if (typeof val_a !== typeof val_b) {
      return false;
    }
    if (val_a == null && val_b == null) {
      continue;
    } else if (val_a == null || val_b == null) {
      return false;
    }
    if (Array.isArray(val_a)) {
      if (!Array.isArray(val_b)) {
        return false;
      }
      if (val_a.length !== val_b.length) {
        return false;
      }
      for (let i = 0; i < val_a.length; i++) {
        if (!isNodesEquivalent(val_a[i], val_b[i])) {
          return false;
        }
      }
      continue;
    }
    if (typeof val_a === "object" && !visitorKeys?.includes(field)) {
      for (const key of Object.keys(val_a)) {
        if (val_a[key] !== val_b[key]) {
          return false;
        }
      }
      continue;
    }
    if (!isNodesEquivalent(val_a, val_b)) {
      return false;
    }
  }
  return true;
}

function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }
      return parent.object === node;
    case "JSXMemberExpression":
      return parent.object === node;
    case "VariableDeclarator":
      return parent.init === node;
    case "ArrowFunctionExpression":
      return parent.body === node;
    case "PrivateName":
      return false;
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return false;
    case "ObjectProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return grandparent?.type !== "ObjectPattern";
    case "ClassProperty":
    case "ClassAccessorProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
    case "ClassPrivateProperty":
      return parent.key !== node;
    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;
    case "AssignmentExpression":
      return parent.right === node;
    case "AssignmentPattern":
      return parent.right === node;
    case "LabeledStatement":
      return false;
    case "CatchClause":
      return false;
    case "RestElement":
      return false;
    case "BreakStatement":
    case "ContinueStatement":
      return false;
    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;
    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;
    case "ExportSpecifier":
      if (grandparent?.source) {
        return false;
      }
      return parent.local === node;
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;
    case "ImportAttribute":
      return false;
    case "JSXAttribute":
      return false;
    case "ObjectPattern":
    case "ArrayPattern":
      return false;
    case "MetaProperty":
      return false;
    case "ObjectTypeProperty":
      return parent.key !== node;
    case "TSEnumMember":
      return parent.id !== node;
    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }
      return true;
  }
  return true;
}

function isScope(node, parent) {
  if (isBlockStatement(node) && (isFunction(parent) || isCatchClause(parent))) {
    return false;
  }
  if (isPattern(node) && (isFunction(parent) || isCatchClause(parent))) {
    return true;
  }
  return isScopable(node);
}

function isSpecifierDefault(specifier) {
  return isImportDefaultSpecifier(specifier) || isIdentifier(specifier.imported || specifier.exported, {
    name: "default"
  });
}

const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);
function isValidES3Identifier(name) {
  return isValidIdentifier(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

function isVar(node) {
  return isVariableDeclaration(node) && node.kind === "var";
}

const react = {
  isReactComponent,
  isCompatTag,
  buildChildren
};

export { ACCESSOR_TYPES, ALIAS_KEYS, ASSIGNMENT_OPERATORS, AnyTypeAnnotation, ArgumentPlaceholder, ArrayExpression, ArrayPattern, ArrayTypeAnnotation, ArrowFunctionExpression, AssignmentExpression, AssignmentPattern, AwaitExpression, BINARY_OPERATORS, BINARY_TYPES, BLOCKPARENT_TYPES, BLOCK_TYPES, BOOLEAN_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS, BOOLEAN_UNARY_OPERATORS, BUILDER_KEYS, BigIntLiteral, BigIntLiteralTypeAnnotation, BinaryExpression, BindExpression, BlockStatement, BooleanLiteral, BooleanLiteralTypeAnnotation, BooleanTypeAnnotation, BreakStatement, CLASS_TYPES, COMMENT_KEYS, COMPARISON_BINARY_OPERATORS, COMPLETIONSTATEMENT_TYPES, CONDITIONAL_TYPES, CallExpression, CatchClause, ClassAccessorProperty, ClassBody, ClassDeclaration, ClassExpression, ClassImplements, ClassMethod, ClassPrivateMethod, ClassPrivateProperty, ClassProperty, ConditionalExpression, ContinueStatement, DECLARATION_TYPES, DEPRECATED_ALIASES, DEPRECATED_KEYS, DebuggerStatement, DeclareClass, DeclareExportAllDeclaration, DeclareExportDeclaration, DeclareFunction, DeclareInterface, DeclareModule, DeclareModuleExports, DeclareOpaqueType, DeclareTypeAlias, DeclareVariable, DeclaredPredicate, Decorator, Directive, DirectiveLiteral, DoExpression, DoWhileStatement, ENUMBODY_TYPES, ENUMMEMBER_TYPES, EQUALITY_BINARY_OPERATORS, EXPORTDECLARATION_TYPES, EXPRESSIONWRAPPER_TYPES, EXPRESSION_TYPES, EmptyStatement, EmptyTypeAnnotation, EnumBooleanBody, EnumBooleanMember, EnumDeclaration, EnumDefaultedMember, EnumNumberBody, EnumNumberMember, EnumStringBody, EnumStringMember, EnumSymbolBody, ExistsTypeAnnotation, ExportAllDeclaration, ExportDefaultDeclaration, ExportDefaultSpecifier, ExportNamedDeclaration, ExportNamespaceSpecifier, ExportSpecifier, ExpressionStatement, FLATTENABLE_KEYS, FLIPPED_ALIAS_KEYS, FLOWBASEANNOTATION_TYPES, FLOWDECLARATION_TYPES, FLOWPREDICATE_TYPES, FLOWTYPE_TYPES, FLOW_TYPES, FORXSTATEMENT_TYPES, FOR_INIT_KEYS, FOR_TYPES, FUNCTIONPARAMETER_TYPES, FUNCTIONPARENT_TYPES, FUNCTION_TYPES, File, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, FunctionTypeAnnotation, FunctionTypeParam, GenericTypeAnnotation, IMMUTABLE_TYPES, IMPORTOREXPORTDECLARATION_TYPES, INHERIT_KEYS, Identifier, IfStatement, Import, ImportAttribute, ImportDeclaration, ImportDefaultSpecifier, ImportExpression, ImportNamespaceSpecifier, ImportSpecifier, IndexedAccessType, InferredPredicate, InterfaceDeclaration, InterfaceExtends, InterfaceTypeAnnotation, InterpreterDirective, IntersectionTypeAnnotation, JSXAttribute, JSXClosingElement, JSXClosingFragment, JSXElement, JSXEmptyExpression, JSXExpressionContainer, JSXFragment, JSXIdentifier, JSXMemberExpression, JSXNamespacedName, JSXOpeningElement, JSXOpeningFragment, JSXSpreadAttribute, JSXSpreadChild, JSXText, JSX_TYPES, LITERAL_TYPES, LOGICAL_OPERATORS, LOOP_TYPES, LVAL_TYPES, LabeledStatement, LogicalExpression, METHOD_TYPES, MISCELLANEOUS_TYPES, MODULEDECLARATION_TYPES, MODULESPECIFIER_TYPES, MemberExpression, MetaProperty, MixedTypeAnnotation, ModuleExpression, NODE_FIELDS$1 as NODE_FIELDS, NODE_PARENT_VALIDATIONS, NODE_UNION_SHAPES__PRIVATE, NUMBER_BINARY_OPERATORS, NUMBER_UNARY_OPERATORS, NewExpression, NullLiteral, NullLiteralTypeAnnotation, NullableTypeAnnotation, NumberLiteralTypeAnnotation, NumberTypeAnnotation, NumericLiteral, OBJECTMEMBER_TYPES, ObjectExpression, ObjectMethod, ObjectPattern, ObjectProperty, ObjectTypeAnnotation, ObjectTypeCallProperty, ObjectTypeIndexer, ObjectTypeInternalSlot, ObjectTypeProperty, ObjectTypeSpreadProperty, OpaqueType, OptionalCallExpression, OptionalIndexedAccessType, OptionalMemberExpression, PATTERNLIKE_TYPES, PATTERN_TYPES, PLACEHOLDERS, PLACEHOLDERS_ALIAS, PLACEHOLDERS_FLIPPED_ALIAS, PRIVATE_TYPES, PROPERTY_TYPES, PUREISH_TYPES, ParenthesizedExpression, Placeholder, PrivateName, Program, QualifiedTypeIdentifier, RegExpLiteral, RestElement, ReturnStatement, SCOPABLE_TYPES, STANDARDIZED_TYPES, STATEMENT_OR_BLOCK_KEYS, STATEMENT_TYPES, STRING_UNARY_OPERATORS, SequenceExpression, SpreadElement, StaticBlock, StringLiteral, StringLiteralTypeAnnotation, StringTypeAnnotation, Super, SwitchCase, SwitchStatement, SymbolTypeAnnotation, TERMINATORLESS_TYPES, TSAnyKeyword, TSArrayType, TSAsExpression, TSBASETYPE_TYPES, TSBigIntKeyword, TSBooleanKeyword, TSCallSignatureDeclaration, TSClassImplements, TSConditionalType, TSConstructSignatureDeclaration, TSConstructorType, TSDeclareFunction, TSDeclareMethod, TSENTITYNAME_TYPES, TSEnumBody, TSEnumDeclaration, TSEnumMember, TSExportAssignment, TSExternalModuleReference, TSFunctionType, TSImportEqualsDeclaration, TSImportType, TSIndexSignature, TSIndexedAccessType, TSInferType, TSInstantiationExpression, TSInterfaceBody, TSInterfaceDeclaration, TSInterfaceHeritage, TSIntersectionType, TSIntrinsicKeyword, TSLiteralType, TSMappedType, TSMethodSignature, TSModuleBlock, TSModuleDeclaration, TSNamedTupleMember, TSNamespaceExportDeclaration, TSNeverKeyword, TSNonNullExpression, TSNullKeyword, TSNumberKeyword, TSObjectKeyword, TSOptionalType, TSParameterProperty, TSParenthesizedType, TSPropertySignature, TSQualifiedName, TSRestType, TSSatisfiesExpression, TSStringKeyword, TSSymbolKeyword, TSTYPEELEMENT_TYPES, TSTYPE_TYPES, TSTemplateLiteralType, TSThisType, TSTupleType, TSTypeAliasDeclaration, TSTypeAnnotation, TSTypeAssertion, TSTypeLiteral, TSTypeOperator, TSTypeParameter, TSTypeParameterDeclaration, TSTypeParameterInstantiation, TSTypePredicate, TSTypeQuery, TSTypeReference, TSUndefinedKeyword, TSUnionType, TSUnknownKeyword, TSVoidKeyword, TYPES, TYPESCRIPT_TYPES, TaggedTemplateExpression, TemplateElement, TemplateLiteral, ThisExpression, ThisTypeAnnotation, ThrowStatement, TopicReference, TryStatement, TupleTypeAnnotation, TypeAlias, TypeAnnotation, TypeCastExpression, TypeParameter, TypeParameterDeclaration, TypeParameterInstantiation, TypeofTypeAnnotation, UNARYLIKE_TYPES, UNARY_OPERATORS, UPDATE_OPERATORS, USERWHITESPACABLE_TYPES, UnaryExpression, UnionTypeAnnotation, UpdateExpression, V8IntrinsicIdentifier, VISITOR_KEYS, VariableDeclaration, VariableDeclarator, Variance, VoidPattern, VoidTypeAnnotation, WHILE_TYPES, WhileStatement, WithStatement, YieldExpression, deprecationWarning as __internal__deprecationWarning, addComment, addComments, anyTypeAnnotation, appendToMemberExpression, argumentPlaceholder, arrayExpression, arrayPattern, arrayTypeAnnotation, arrowFunctionExpression, assertAccessor, assertAnyTypeAnnotation, assertArgumentPlaceholder, assertArrayExpression, assertArrayPattern, assertArrayTypeAnnotation, assertArrowFunctionExpression, assertAssignmentExpression, assertAssignmentPattern, assertAwaitExpression, assertBigIntLiteral, assertBigIntLiteralTypeAnnotation, assertBinary, assertBinaryExpression, assertBindExpression, assertBlock, assertBlockParent, assertBlockStatement, assertBooleanLiteral, assertBooleanLiteralTypeAnnotation, assertBooleanTypeAnnotation, assertBreakStatement, assertCallExpression, assertCatchClause, assertClass, assertClassAccessorProperty, assertClassBody, assertClassDeclaration, assertClassExpression, assertClassImplements, assertClassMethod, assertClassPrivateMethod, assertClassPrivateProperty, assertClassProperty, assertCompletionStatement, assertConditional, assertConditionalExpression, assertContinueStatement, assertDebuggerStatement, assertDeclaration, assertDeclareClass, assertDeclareExportAllDeclaration, assertDeclareExportDeclaration, assertDeclareFunction, assertDeclareInterface, assertDeclareModule, assertDeclareModuleExports, assertDeclareOpaqueType, assertDeclareTypeAlias, assertDeclareVariable, assertDeclaredPredicate, assertDecorator, assertDirective, assertDirectiveLiteral, assertDoExpression, assertDoWhileStatement, assertEmptyStatement, assertEmptyTypeAnnotation, assertEnumBody, assertEnumBooleanBody, assertEnumBooleanMember, assertEnumDeclaration, assertEnumDefaultedMember, assertEnumMember, assertEnumNumberBody, assertEnumNumberMember, assertEnumStringBody, assertEnumStringMember, assertEnumSymbolBody, assertExistsTypeAnnotation, assertExportAllDeclaration, assertExportDeclaration, assertExportDefaultDeclaration, assertExportDefaultSpecifier, assertExportNamedDeclaration, assertExportNamespaceSpecifier, assertExportSpecifier, assertExpression, assertExpressionStatement, assertExpressionWrapper, assertFile, assertFlow, assertFlowBaseAnnotation, assertFlowDeclaration, assertFlowPredicate, assertFlowType, assertFor, assertForInStatement, assertForOfStatement, assertForStatement, assertForXStatement, assertFunction, assertFunctionDeclaration, assertFunctionExpression, assertFunctionParameter, assertFunctionParent, assertFunctionTypeAnnotation, assertFunctionTypeParam, assertGenericTypeAnnotation, assertIdentifier, assertIfStatement, assertImmutable, assertImport, assertImportAttribute, assertImportDeclaration, assertImportDefaultSpecifier, assertImportExpression, assertImportNamespaceSpecifier, assertImportOrExportDeclaration, assertImportSpecifier, assertIndexedAccessType, assertInferredPredicate, assertInterfaceDeclaration, assertInterfaceExtends, assertInterfaceTypeAnnotation, assertInterpreterDirective, assertIntersectionTypeAnnotation, assertJSX, assertJSXAttribute, assertJSXClosingElement, assertJSXClosingFragment, assertJSXElement, assertJSXEmptyExpression, assertJSXExpressionContainer, assertJSXFragment, assertJSXIdentifier, assertJSXMemberExpression, assertJSXNamespacedName, assertJSXOpeningElement, assertJSXOpeningFragment, assertJSXSpreadAttribute, assertJSXSpreadChild, assertJSXText, assertLVal, assertLabeledStatement, assertLiteral, assertLogicalExpression, assertLoop, assertMemberExpression, assertMetaProperty, assertMethod, assertMiscellaneous, assertMixedTypeAnnotation, assertModuleDeclaration, assertModuleExpression, assertModuleSpecifier, assertNewExpression, assertNode, assertNullLiteral, assertNullLiteralTypeAnnotation, assertNullableTypeAnnotation, assertNumberLiteral, assertNumberLiteralTypeAnnotation, assertNumberTypeAnnotation, assertNumericLiteral, assertObjectExpression, assertObjectMember, assertObjectMethod, assertObjectPattern, assertObjectProperty, assertObjectTypeAnnotation, assertObjectTypeCallProperty, assertObjectTypeIndexer, assertObjectTypeInternalSlot, assertObjectTypeProperty, assertObjectTypeSpreadProperty, assertOpaqueType, assertOptionalCallExpression, assertOptionalIndexedAccessType, assertOptionalMemberExpression, assertParenthesizedExpression, assertPattern, assertPatternLike, assertPlaceholder, assertPrivate, assertPrivateName, assertProgram, assertProperty, assertPureish, assertQualifiedTypeIdentifier, assertRegExpLiteral, assertRegexLiteral, assertRestElement, assertRestProperty, assertReturnStatement, assertScopable, assertSequenceExpression, assertSpreadElement, assertSpreadProperty, assertStandardized, assertStatement, assertStaticBlock, assertStringLiteral, assertStringLiteralTypeAnnotation, assertStringTypeAnnotation, assertSuper, assertSwitchCase, assertSwitchStatement, assertSymbolTypeAnnotation, assertTSAnyKeyword, assertTSArrayType, assertTSAsExpression, assertTSBaseType, assertTSBigIntKeyword, assertTSBooleanKeyword, assertTSCallSignatureDeclaration, assertTSClassImplements, assertTSConditionalType, assertTSConstructSignatureDeclaration, assertTSConstructorType, assertTSDeclareFunction, assertTSDeclareMethod, assertTSEntityName, assertTSEnumBody, assertTSEnumDeclaration, assertTSEnumMember, assertTSExportAssignment, assertTSExternalModuleReference, assertTSFunctionType, assertTSImportEqualsDeclaration, assertTSImportType, assertTSIndexSignature, assertTSIndexedAccessType, assertTSInferType, assertTSInstantiationExpression, assertTSInterfaceBody, assertTSInterfaceDeclaration, assertTSInterfaceHeritage, assertTSIntersectionType, assertTSIntrinsicKeyword, assertTSLiteralType, assertTSMappedType, assertTSMethodSignature, assertTSModuleBlock, assertTSModuleDeclaration, assertTSNamedTupleMember, assertTSNamespaceExportDeclaration, assertTSNeverKeyword, assertTSNonNullExpression, assertTSNullKeyword, assertTSNumberKeyword, assertTSObjectKeyword, assertTSOptionalType, assertTSParameterProperty, assertTSParenthesizedType, assertTSPropertySignature, assertTSQualifiedName, assertTSRestType, assertTSSatisfiesExpression, assertTSStringKeyword, assertTSSymbolKeyword, assertTSTemplateLiteralType, assertTSThisType, assertTSTupleType, assertTSType, assertTSTypeAliasDeclaration, assertTSTypeAnnotation, assertTSTypeAssertion, assertTSTypeElement, assertTSTypeLiteral, assertTSTypeOperator, assertTSTypeParameter, assertTSTypeParameterDeclaration, assertTSTypeParameterInstantiation, assertTSTypePredicate, assertTSTypeQuery, assertTSTypeReference, assertTSUndefinedKeyword, assertTSUnionType, assertTSUnknownKeyword, assertTSVoidKeyword, assertTaggedTemplateExpression, assertTemplateElement, assertTemplateLiteral, assertTerminatorless, assertThisExpression, assertThisTypeAnnotation, assertThrowStatement, assertTopicReference, assertTryStatement, assertTupleTypeAnnotation, assertTypeAlias, assertTypeAnnotation, assertTypeCastExpression, assertTypeParameter, assertTypeParameterDeclaration, assertTypeParameterInstantiation, assertTypeScript, assertTypeofTypeAnnotation, assertUnaryExpression, assertUnaryLike, assertUnionTypeAnnotation, assertUpdateExpression, assertUserWhitespacable, assertV8IntrinsicIdentifier, assertVariableDeclaration, assertVariableDeclarator, assertVariance, assertVoidPattern, assertVoidTypeAnnotation, assertWhile, assertWhileStatement, assertWithStatement, assertYieldExpression, assignmentExpression, assignmentPattern, awaitExpression, bigIntLiteral, bigIntLiteralTypeAnnotation, binaryExpression, bindExpression, blockStatement, booleanLiteral, booleanLiteralTypeAnnotation, booleanTypeAnnotation, breakStatement, buildMatchMemberExpression, buildUndefinedNode, callExpression, catchClause, classAccessorProperty, classBody, classDeclaration, classExpression, classImplements, classMethod, classPrivateMethod, classPrivateProperty, classProperty, clone, cloneDeep, cloneDeepWithoutLoc, cloneNode, cloneWithoutLoc, conditionalExpression, continueStatement, createFlowUnionType, createTSUnionType, createTypeAnnotationBasedOnTypeof, createFlowUnionType as createUnionTypeAnnotation, debuggerStatement, declareClass, declareExportAllDeclaration, declareExportDeclaration, declareFunction, declareInterface, declareModule, declareModuleExports, declareOpaqueType, declareTypeAlias, declareVariable, declaredPredicate, decorator, directive, directiveLiteral, doExpression, doWhileStatement, emptyStatement, emptyTypeAnnotation, ensureBlock, enumBooleanBody, enumBooleanMember, enumDeclaration, enumDefaultedMember, enumNumberBody, enumNumberMember, enumStringBody, enumStringMember, enumSymbolBody, existsTypeAnnotation, exportAllDeclaration, exportDefaultDeclaration, exportDefaultSpecifier, exportNamedDeclaration, exportNamespaceSpecifier, exportSpecifier, expressionStatement, file, forInStatement, forOfStatement, forStatement, functionDeclaration, functionExpression, functionTypeAnnotation, functionTypeParam, genericTypeAnnotation, getAssignmentIdentifiers, getBindingIdentifiers, getFunctionName, getOuterBindingIdentifiers, identifier, ifStatement, _import as import, importAttribute, importDeclaration, importDefaultSpecifier, importExpression, importNamespaceSpecifier, importSpecifier, indexedAccessType, inferredPredicate, inheritInnerComments, inheritLeadingComments, inheritTrailingComments, inherits, inheritsComments, interfaceDeclaration, interfaceExtends, interfaceTypeAnnotation, interpreterDirective, intersectionTypeAnnotation, is, isAccessor, isAnyTypeAnnotation, isArgumentPlaceholder, isArrayExpression, isArrayPattern, isArrayTypeAnnotation, isArrowFunctionExpression, isAssignmentExpression, isAssignmentPattern, isAwaitExpression, isBigIntLiteral, isBigIntLiteralTypeAnnotation, isBinary, isBinaryExpression, isBindExpression, isBinding, isBlock, isBlockParent, isBlockScoped, isBlockStatement, isBooleanLiteral, isBooleanLiteralTypeAnnotation, isBooleanTypeAnnotation, isBreakStatement, isCallExpression, isCatchClause, isClass, isClassAccessorProperty, isClassBody, isClassDeclaration, isClassExpression, isClassImplements, isClassMethod, isClassPrivateMethod, isClassPrivateProperty, isClassProperty, isCompletionStatement, isConditional, isConditionalExpression, isContinueStatement, isDebuggerStatement, isDeclaration, isDeclareClass, isDeclareExportAllDeclaration, isDeclareExportDeclaration, isDeclareFunction, isDeclareInterface, isDeclareModule, isDeclareModuleExports, isDeclareOpaqueType, isDeclareTypeAlias, isDeclareVariable, isDeclaredPredicate, isDecorator, isDirective, isDirectiveLiteral, isDoExpression, isDoWhileStatement, isEmptyStatement, isEmptyTypeAnnotation, isEnumBody, isEnumBooleanBody, isEnumBooleanMember, isEnumDeclaration, isEnumDefaultedMember, isEnumMember, isEnumNumberBody, isEnumNumberMember, isEnumStringBody, isEnumStringMember, isEnumSymbolBody, isExistsTypeAnnotation, isExportAllDeclaration, isExportDeclaration, isExportDefaultDeclaration, isExportDefaultSpecifier, isExportNamedDeclaration, isExportNamespaceSpecifier, isExportSpecifier, isExpression, isExpressionStatement, isExpressionWrapper, isFile, isFlow, isFlowBaseAnnotation, isFlowDeclaration, isFlowPredicate, isFlowType, isFor, isForInStatement, isForOfStatement, isForStatement, isForXStatement, isFunction, isFunctionDeclaration, isFunctionExpression, isFunctionParameter, isFunctionParent, isFunctionTypeAnnotation, isFunctionTypeParam, isGenericTypeAnnotation, isIdentifier, isIfStatement, isImmutable, isImport, isImportAttribute, isImportDeclaration, isImportDefaultSpecifier, isImportExpression, isImportNamespaceSpecifier, isImportOrExportDeclaration, isImportSpecifier, isIndexedAccessType, isInferredPredicate, isInterfaceDeclaration, isInterfaceExtends, isInterfaceTypeAnnotation, isInterpreterDirective, isIntersectionTypeAnnotation, isJSX, isJSXAttribute, isJSXClosingElement, isJSXClosingFragment, isJSXElement, isJSXEmptyExpression, isJSXExpressionContainer, isJSXFragment, isJSXIdentifier, isJSXMemberExpression, isJSXNamespacedName, isJSXOpeningElement, isJSXOpeningFragment, isJSXSpreadAttribute, isJSXSpreadChild, isJSXText, isLVal, isLabeledStatement, isLet, isLiteral, isLogicalExpression, isLoop, isMemberExpression, isMetaProperty, isMethod, isMiscellaneous, isMixedTypeAnnotation, isModuleDeclaration, isModuleExpression, isModuleSpecifier, isNewExpression, isNode, isNodesEquivalent, isNullLiteral, isNullLiteralTypeAnnotation, isNullableTypeAnnotation, isNumberLiteral, isNumberLiteralTypeAnnotation, isNumberTypeAnnotation, isNumericLiteral, isObjectExpression, isObjectMember, isObjectMethod, isObjectPattern, isObjectProperty, isObjectTypeAnnotation, isObjectTypeCallProperty, isObjectTypeIndexer, isObjectTypeInternalSlot, isObjectTypeProperty, isObjectTypeSpreadProperty, isOpaqueType, isOptionalCallExpression, isOptionalIndexedAccessType, isOptionalMemberExpression, isParenthesizedExpression, isPattern, isPatternLike, isPlaceholder, isPlaceholderType, isPrivate, isPrivateName, isProgram, isProperty, isPureish, isQualifiedTypeIdentifier, isReferenced, isRegExpLiteral, isRegexLiteral, isRestElement, isRestProperty, isReturnStatement, isScopable, isScope, isSequenceExpression, isSpecifierDefault, isSpreadElement, isSpreadProperty, isStandardized, isStatement, isStaticBlock, isStringLiteral, isStringLiteralTypeAnnotation, isStringTypeAnnotation, isSuper, isSwitchCase, isSwitchStatement, isSymbolTypeAnnotation, isTSAnyKeyword, isTSArrayType, isTSAsExpression, isTSBaseType, isTSBigIntKeyword, isTSBooleanKeyword, isTSCallSignatureDeclaration, isTSClassImplements, isTSConditionalType, isTSConstructSignatureDeclaration, isTSConstructorType, isTSDeclareFunction, isTSDeclareMethod, isTSEntityName, isTSEnumBody, isTSEnumDeclaration, isTSEnumMember, isTSExportAssignment, isTSExternalModuleReference, isTSFunctionType, isTSImportEqualsDeclaration, isTSImportType, isTSIndexSignature, isTSIndexedAccessType, isTSInferType, isTSInstantiationExpression, isTSInterfaceBody, isTSInterfaceDeclaration, isTSInterfaceHeritage, isTSIntersectionType, isTSIntrinsicKeyword, isTSLiteralType, isTSMappedType, isTSMethodSignature, isTSModuleBlock, isTSModuleDeclaration, isTSNamedTupleMember, isTSNamespaceExportDeclaration, isTSNeverKeyword, isTSNonNullExpression, isTSNullKeyword, isTSNumberKeyword, isTSObjectKeyword, isTSOptionalType, isTSParameterProperty, isTSParenthesizedType, isTSPropertySignature, isTSQualifiedName, isTSRestType, isTSSatisfiesExpression, isTSStringKeyword, isTSSymbolKeyword, isTSTemplateLiteralType, isTSThisType, isTSTupleType, isTSType, isTSTypeAliasDeclaration, isTSTypeAnnotation, isTSTypeAssertion, isTSTypeElement, isTSTypeLiteral, isTSTypeOperator, isTSTypeParameter, isTSTypeParameterDeclaration, isTSTypeParameterInstantiation, isTSTypePredicate, isTSTypeQuery, isTSTypeReference, isTSUndefinedKeyword, isTSUnionType, isTSUnknownKeyword, isTSVoidKeyword, isTaggedTemplateExpression, isTemplateElement, isTemplateLiteral, isTerminatorless, isThisExpression, isThisTypeAnnotation, isThrowStatement, isTopicReference, isTryStatement, isTupleTypeAnnotation, isType, isTypeAlias, isTypeAnnotation, isTypeCastExpression, isTypeParameter, isTypeParameterDeclaration, isTypeParameterInstantiation, isTypeScript, isTypeofTypeAnnotation, isUnaryExpression, isUnaryLike, isUnionTypeAnnotation, isUpdateExpression, isUserWhitespacable, isV8IntrinsicIdentifier, isValidES3Identifier, isValidIdentifier, isVar, isVariableDeclaration, isVariableDeclarator, isVariance, isVoidPattern, isVoidTypeAnnotation, isWhile, isWhileStatement, isWithStatement, isYieldExpression, jsxAttribute, jsxClosingElement, jsxClosingFragment, jsxElement, jsxEmptyExpression, jsxExpressionContainer, jsxFragment, jsxIdentifier, jsxMemberExpression, jsxNamespacedName, jsxOpeningElement, jsxOpeningFragment, jsxSpreadAttribute, jsxSpreadChild, jsxText, labeledStatement, logicalExpression, matchesPattern, memberExpression, metaProperty, mixedTypeAnnotation, moduleExpression, newExpression, nullLiteral, nullLiteralTypeAnnotation, nullableTypeAnnotation, NumberLiteral as numberLiteral, numberLiteralTypeAnnotation, numberTypeAnnotation, numericLiteral, objectExpression, objectMethod, objectPattern, objectProperty, objectTypeAnnotation, objectTypeCallProperty, objectTypeIndexer, objectTypeInternalSlot, objectTypeProperty, objectTypeSpreadProperty, opaqueType, optionalCallExpression, optionalIndexedAccessType, optionalMemberExpression, parenthesizedExpression, placeholder, prependToMemberExpression, privateName, program, qualifiedTypeIdentifier, react, regExpLiteral, RegexLiteral as regexLiteral, removeComments, removeProperties, removePropertiesDeep, removeTypeDuplicates$1 as removeTypeDuplicates, restElement, RestProperty as restProperty, returnStatement, sequenceExpression, shallowEqual, spreadElement, SpreadProperty as spreadProperty, staticBlock, stringLiteral, stringLiteralTypeAnnotation, stringTypeAnnotation, _super as super, switchCase, switchStatement, symbolTypeAnnotation, taggedTemplateExpression, templateElement, templateLiteral, thisExpression, thisTypeAnnotation, throwStatement, toBindingIdentifierName, toBlock, toComputedKey, toExpression, toIdentifier, toKeyAlias, toStatement, topicReference, traverse, traverseFast, tryStatement, tsAnyKeyword, tsArrayType, tsAsExpression, tsBigIntKeyword, tsBooleanKeyword, tsCallSignatureDeclaration, tsClassImplements, tsConditionalType, tsConstructSignatureDeclaration, tsConstructorType, tsDeclareFunction, tsDeclareMethod, tsEnumBody, tsEnumDeclaration, tsEnumMember, tsExportAssignment, tsExternalModuleReference, tsFunctionType, tsImportEqualsDeclaration, tsImportType, tsIndexSignature, tsIndexedAccessType, tsInferType, tsInstantiationExpression, tsInterfaceBody, tsInterfaceDeclaration, tsInterfaceHeritage, tsIntersectionType, tsIntrinsicKeyword, tsLiteralType, tsMappedType, tsMethodSignature, tsModuleBlock, tsModuleDeclaration, tsNamedTupleMember, tsNamespaceExportDeclaration, tsNeverKeyword, tsNonNullExpression, tsNullKeyword, tsNumberKeyword, tsObjectKeyword, tsOptionalType, tsParameterProperty, tsParenthesizedType, tsPropertySignature, tsQualifiedName, tsRestType, tsSatisfiesExpression, tsStringKeyword, tsSymbolKeyword, tsTemplateLiteralType, tsThisType, tsTupleType, tsTypeAliasDeclaration, tsTypeAnnotation, tsTypeAssertion, tsTypeLiteral, tsTypeOperator, tsTypeParameter, tsTypeParameterDeclaration, tsTypeParameterInstantiation, tsTypePredicate, tsTypeQuery, tsTypeReference, tsUndefinedKeyword, tsUnionType, tsUnknownKeyword, tsVoidKeyword, tupleTypeAnnotation, typeAlias, typeAnnotation, typeCastExpression, typeParameter, typeParameterDeclaration, typeParameterInstantiation, typeofTypeAnnotation, unaryExpression, unionTypeAnnotation, updateExpression, v8IntrinsicIdentifier, validate$1 as validate, valueToNode, variableDeclaration, variableDeclarator, variance, voidPattern, voidTypeAnnotation, whileStatement, withStatement, yieldExpression };
//# sourceMappingURL=index.js.map
