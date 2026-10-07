"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSAnyKeyword = TSAnyKeyword;
exports.TSArrayType = TSArrayType;
exports.TSAsExpression = TSAsExpression;
exports.TSBigIntKeyword = TSBigIntKeyword;
exports.TSBooleanKeyword = TSBooleanKeyword;
exports.TSCallSignatureDeclaration = TSCallSignatureDeclaration;
exports.TSInterfaceHeritage = exports.TSClassImplements = TSClassImplements;
exports.TSConditionalType = TSConditionalType;
exports.TSConstructSignatureDeclaration = TSConstructSignatureDeclaration;
exports.TSConstructorType = TSConstructorType;
exports.TSDeclareFunction = TSDeclareFunction;
exports.TSDeclareMethod = TSDeclareMethod;
exports.TSEnumBody = TSEnumBody;
exports.TSEnumDeclaration = TSEnumDeclaration;
exports.TSEnumMember = TSEnumMember;
exports.TSExportAssignment = TSExportAssignment;
exports.TSExternalModuleReference = TSExternalModuleReference;
exports.TSFunctionType = TSFunctionType;
exports.TSImportEqualsDeclaration = TSImportEqualsDeclaration;
exports.TSImportType = TSImportType;
exports.TSIndexSignature = TSIndexSignature;
exports.TSIndexedAccessType = TSIndexedAccessType;
exports.TSInferType = TSInferType;
exports.TSInstantiationExpression = TSInstantiationExpression;
exports.TSInterfaceBody = TSInterfaceBody;
exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
exports.TSIntersectionType = TSIntersectionType;
exports.TSIntrinsicKeyword = TSIntrinsicKeyword;
exports.TSLiteralType = TSLiteralType;
exports.TSMappedType = TSMappedType;
exports.TSMethodSignature = TSMethodSignature;
exports.TSModuleBlock = TSModuleBlock;
exports.TSModuleDeclaration = TSModuleDeclaration;
exports.TSNamedTupleMember = TSNamedTupleMember;
exports.TSNamespaceExportDeclaration = TSNamespaceExportDeclaration;
exports.TSNeverKeyword = TSNeverKeyword;
exports.TSNonNullExpression = TSNonNullExpression;
exports.TSNullKeyword = TSNullKeyword;
exports.TSNumberKeyword = TSNumberKeyword;
exports.TSObjectKeyword = TSObjectKeyword;
exports.TSOptionalType = TSOptionalType;
exports.TSParameterProperty = TSParameterProperty;
exports.TSParenthesizedType = TSParenthesizedType;
exports.TSPropertySignature = TSPropertySignature;
exports.TSQualifiedName = TSQualifiedName;
exports.TSRestType = TSRestType;
exports.TSSatisfiesExpression = TSSatisfiesExpression;
exports.TSStringKeyword = TSStringKeyword;
exports.TSSymbolKeyword = TSSymbolKeyword;
exports.TSTemplateLiteralType = TSTemplateLiteralType;
exports.TSThisType = TSThisType;
exports.TSTupleType = TSTupleType;
exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
exports.TSTypeAnnotation = TSTypeAnnotation;
exports.TSTypeAssertion = TSTypeAssertion;
exports.TSTypeLiteral = TSTypeLiteral;
exports.TSTypeOperator = TSTypeOperator;
exports.TSTypeParameter = TSTypeParameter;
exports.TSTypeParameterDeclaration = exports.TSTypeParameterInstantiation = TSTypeParameterInstantiation;
exports.TSTypePredicate = TSTypePredicate;
exports.TSTypeQuery = TSTypeQuery;
exports.TSTypeReference = TSTypeReference;
exports.TSUndefinedKeyword = TSUndefinedKeyword;
exports.TSUnionType = TSUnionType;
exports.TSUnknownKeyword = TSUnknownKeyword;
exports.TSVoidKeyword = TSVoidKeyword;
exports._tsPrintClassMemberModifiers = _tsPrintClassMemberModifiers;
var _methods = require("./methods.js");
var _classes = require("./classes.js");
var _templateLiterals = require("./template-literals.js");
function TSTypeAnnotation(node, parent) {
  this.token((parent.type === "TSFunctionType" || parent.type === "TSConstructorType") && parent.typeAnnotation === node ? "=>" : ":");
  this.space();
  if (node.optional) this.tokenChar(63);
  this.print(node.typeAnnotation);
}
function TSTypeParameterInstantiation(node, parent) {
  this.tokenChar(60);
  let printTrailingSeparator = parent.type === "ArrowFunctionExpression" && node.params.length === 1;
  if (this.tokenMap && node.start != null && node.end != null) {
    printTrailingSeparator && (printTrailingSeparator = !!this.tokenMap.find(node, t => this.tokenMap.matchesOriginal(t, ",")));
    printTrailingSeparator || (printTrailingSeparator = this.shouldPrintTrailingComma(">"));
  }
  this.printList(node.params, printTrailingSeparator);
  this.tokenChar(62);
}
function TSTypeParameter(node) {
  if (node.const) {
    this.word("const");
    this.space();
  }
  if (node.in) {
    this.word("in");
    this.space();
  }
  if (node.out) {
    this.word("out");
    this.space();
  }
  this.word(node.name);
  if (node.constraint) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.constraint);
  }
  if (node.default) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.default);
  }
}
function TSParameterProperty(node) {
  if (node.accessibility) {
    this.word(node.accessibility);
    this.space();
  }
  if (node.readonly) {
    this.word("readonly");
    this.space();
  }
  _methods._param.call(this, node.parameter);
}
function TSDeclareFunction(node, parent) {
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  _methods._functionHead.call(this, node, parent, false);
  this.semicolon();
}
function TSDeclareMethod(node) {
  _classes._classMethodHead.call(this, node);
  this.semicolon();
}
function TSQualifiedName(node) {
  this.print(node.left);
  this.tokenChar(46);
  this.print(node.right);
}
function TSCallSignatureDeclaration(node) {
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function maybePrintTrailingCommaOrSemicolon(printer, node) {
  if (!printer.tokenMap || !node.start || !node.end) {
    printer.semicolon();
    return;
  }
  if (printer.tokenMap.endMatches(node, ",")) {
    printer.token(",");
  } else if (printer.tokenMap.endMatches(node, ";")) {
    printer.semicolon();
  }
}
function TSConstructSignatureDeclaration(node) {
  this.word("new");
  this.space();
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSPropertySignature(node) {
  const {
    readonly
  } = node;
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  tsPrintPropertyOrMethodName.call(this, node);
  this.print(node.typeAnnotation);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function tsPrintPropertyOrMethodName(node) {
  if (node.computed) {
    this.tokenChar(91);
  }
  this.print(node.key);
  if (node.computed) {
    this.tokenChar(93);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
}
function TSMethodSignature(node) {
  const {
    kind
  } = node;
  if (kind === "set" || kind === "get") {
    this.word(kind);
    this.space();
  }
  tsPrintPropertyOrMethodName.call(this, node);
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSIndexSignature(node) {
  const {
    readonly,
    static: isStatic
  } = node;
  if (isStatic) {
    this.word("static");
    this.space();
  }
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  _methods._parameters.call(this, node.parameters, 93);
  this.print(node.typeAnnotation);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSAnyKeyword() {
  this.word("any");
}
function TSBigIntKeyword() {
  this.word("bigint");
}
function TSUnknownKeyword() {
  this.word("unknown");
}
function TSNumberKeyword() {
  this.word("number");
}
function TSObjectKeyword() {
  this.word("object");
}
function TSBooleanKeyword() {
  this.word("boolean");
}
function TSStringKeyword() {
  this.word("string");
}
function TSSymbolKeyword() {
  this.word("symbol");
}
function TSVoidKeyword() {
  this.word("void");
}
function TSUndefinedKeyword() {
  this.word("undefined");
}
function TSNullKeyword() {
  this.word("null");
}
function TSNeverKeyword() {
  this.word("never");
}
function TSIntrinsicKeyword() {
  this.word("intrinsic");
}
function TSThisType() {
  this.word("this");
}
function TSFunctionType(node) {
  tsPrintFunctionOrConstructorType.call(this, node);
}
function TSConstructorType(node) {
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("new");
  this.space();
  tsPrintFunctionOrConstructorType.call(this, node);
}
function tsPrintFunctionOrConstructorType(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.parameters;
  this.print(typeParameters);
  this.tokenChar(40);
  _methods._parameters.call(this, parameters, 41);
  this.space();
  const returnType = node.typeAnnotation;
  this.print(returnType);
}
function TSTypeReference(node) {
  const typeArguments = node.typeParameters;
  this.print(node.typeName, !!typeArguments);
  this.print(typeArguments);
}
function TSTypePredicate(node) {
  if (node.asserts) {
    this.word("asserts");
    this.space();
  }
  this.print(node.parameterName);
  if (node.typeAnnotation) {
    this.space();
    this.word("is");
    this.space();
    this.print(node.typeAnnotation.typeAnnotation);
  }
}
function TSTypeQuery(node) {
  this.word("typeof");
  this.space();
  this.print(node.exprName);
  const typeArguments = node.typeParameters;
  if (typeArguments) {
    this.print(typeArguments);
  }
}
function TSTypeLiteral(node) {
  printBraced(this, node, () => this.printJoin(node.members, true, true, undefined, undefined, true));
}
function TSArrayType(node) {
  this.print(node.elementType, true);
  this.tokenChar(91);
  this.tokenChar(93);
}
function TSTupleType(node) {
  this.tokenChar(91);
  this.printList(node.elementTypes, this.shouldPrintTrailingComma("]"));
  this.tokenChar(93);
}
function TSOptionalType(node) {
  this.print(node.typeAnnotation);
  this.tokenChar(63);
}
function TSRestType(node) {
  this.token("...");
  this.print(node.typeAnnotation);
}
function TSNamedTupleMember(node) {
  this.print(node.label);
  if (node.optional) this.tokenChar(63);
  this.tokenChar(58);
  this.space();
  this.print(node.elementType);
}
function TSUnionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "|");
}
function TSIntersectionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "&");
}
function tsPrintUnionOrIntersectionType(printer, node, sep) {
  var _printer$tokenMap;
  let hasLeadingToken = 0;
  if ((_printer$tokenMap = printer.tokenMap) != null && _printer$tokenMap.startMatches(node, sep)) {
    hasLeadingToken = 1;
    printer.token(sep);
  }
  printer.printJoin(node.types, undefined, undefined, function (i) {
    this.space();
    this.token(sep, undefined, i + hasLeadingToken);
    this.space();
  });
}
function TSConditionalType(node) {
  this.print(node.checkType);
  this.space();
  this.word("extends");
  this.space();
  this.print(node.extendsType);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.trueType);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.falseType);
}
function TSInferType(node) {
  this.word("infer");
  this.print(node.typeParameter);
}
function TSParenthesizedType(node) {
  this.tokenChar(40);
  this.print(node.typeAnnotation);
  this.tokenChar(41);
}
function TSTypeOperator(node) {
  this.word(node.operator);
  this.space();
  this.print(node.typeAnnotation);
}
function TSIndexedAccessType(node) {
  this.print(node.objectType, true);
  this.tokenChar(91);
  this.print(node.indexType);
  this.tokenChar(93);
}
function TSMappedType(node) {
  const {
    nameType,
    optional,
    readonly,
    typeAnnotation
  } = node;
  this.tokenChar(123);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.space();
  if (readonly) {
    tokenIfPlusMinus(this, readonly);
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  this.word(node.typeParameter.name);
  this.space();
  this.word("in");
  this.space();
  this.print(node.typeParameter.constraint, undefined, true);
  if (nameType) {
    this.space();
    this.word("as");
    this.space();
    this.print(nameType, undefined, true);
  }
  this.tokenChar(93);
  if (optional) {
    tokenIfPlusMinus(this, optional);
    this.tokenChar(63);
  }
  if (typeAnnotation) {
    this.tokenChar(58);
    this.space();
    this.print(typeAnnotation, undefined, true);
  }
  this.space();
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.tokenChar(125);
}
function tokenIfPlusMinus(self, tok) {
  if (tok !== true) {
    self.token(tok);
  }
}
function TSTemplateLiteralType(node) {
  _templateLiterals._printTemplate.call(this, node, node.types);
}
function TSLiteralType(node) {
  this.print(node.literal);
}
function TSClassImplements(node) {
  this.print(node.expression);
  this.print(node.typeArguments);
}
function TSInterfaceDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    extends: extendz,
    body
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("interface");
  this.space();
  this.print(id);
  this.print(typeParameters);
  if (extendz != null && extendz.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(extendz);
  }
  this.space();
  this.print(body);
}
function TSInterfaceBody(node) {
  printBraced(this, node, () => this.printJoin(node.body, true, true, undefined, undefined, true));
}
function TSTypeAliasDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    typeAnnotation
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("type");
  this.space();
  this.print(id);
  this.print(typeParameters);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(typeAnnotation);
  this.semicolon();
}
function TSAsExpression(node) {
  const {
    expression,
    typeAnnotation
  } = node;
  this.print(expression, true);
  this.space();
  this.word("as");
  this.space();
  this.print(typeAnnotation);
}
function TSSatisfiesExpression(node) {
  const {
    expression,
    typeAnnotation
  } = node;
  this.print(expression, true);
  this.space();
  this.word("satisfies");
  this.space();
  this.print(typeAnnotation);
}
function TSTypeAssertion(node) {
  const {
    typeAnnotation,
    expression
  } = node;
  this.tokenChar(60);
  this.print(typeAnnotation);
  this.tokenChar(62);
  this.space();
  this.print(expression);
}
function TSInstantiationExpression(node) {
  this.print(node.expression);
  this.print(node.typeParameters);
}
function TSEnumDeclaration(node) {
  const {
    declare,
    const: isConst,
    id
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (isConst) {
    this.word("const");
    this.space();
  }
  this.word("enum");
  this.space();
  this.print(id);
  this.space();
  TSEnumBody.call(this, node);
}
function TSEnumBody(node) {
  printBraced(this, node, () => {
    var _this$shouldPrintTrai;
    return this.printList(node.members, (_this$shouldPrintTrai = this.shouldPrintTrailingComma("}")) != null ? _this$shouldPrintTrai : true, true, true, undefined, true);
  });
}
function TSEnumMember(node) {
  const {
    id,
    initializer
  } = node;
  this.print(id);
  if (initializer) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(initializer);
  }
}
function TSModuleDeclaration(node) {
  const {
    declare,
    id,
    kind
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (!node.global) {
    this.word(kind != null ? kind : id.type === "Identifier" ? "namespace" : "module");
    this.space();
  }
  this.print(id);
  if (!node.body) {
    this.semicolon();
    return;
  }
  let body = node.body;
  while (body.type === "TSModuleDeclaration") {
    this.tokenChar(46);
    this.print(body.id);
    body = body.body;
  }
  this.space();
  this.print(body);
}
function TSModuleBlock(node) {
  printBraced(this, node, () => this.printSequence(node.body, true, true));
}
function TSImportType(node) {
  const {
    qualifier,
    options
  } = node;
  this.word("import");
  this.tokenChar(40);
  this.print(node.argument);
  if (options) {
    this.tokenChar(44);
    this.print(options);
  }
  this.tokenChar(41);
  if (qualifier) {
    this.tokenChar(46);
    this.print(qualifier);
  }
  const typeArguments = node.typeParameters;
  if (typeArguments) {
    this.print(typeArguments);
  }
}
function TSImportEqualsDeclaration(node) {
  const {
    id,
    moduleReference
  } = node;
  if (node.isExport) {
    this.word("export");
    this.space();
  }
  this.word("import");
  this.space();
  this.print(id);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(moduleReference);
  this.semicolon();
}
function TSExternalModuleReference(node) {
  this.token("require(");
  this.print(node.expression);
  this.tokenChar(41);
}
function TSNonNullExpression(node) {
  this.print(node.expression);
  this.tokenChar(33);
  this.setLastChar(33);
}
function TSExportAssignment(node) {
  this.word("export");
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.expression);
  this.semicolon();
}
function TSNamespaceExportDeclaration(node) {
  this.word("export");
  this.space();
  this.word("as");
  this.space();
  this.word("namespace");
  this.space();
  this.print(node.id);
  this.semicolon();
}
function tsPrintSignatureDeclarationBase(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.parameters;
  this.print(typeParameters);
  this.tokenChar(40);
  _methods._parameters.call(this, parameters, 41);
  const returnType = node.typeAnnotation;
  this.print(returnType);
}
function _tsPrintClassMemberModifiers(node) {
  const isPrivateField = node.type === "ClassPrivateProperty";
  const isPublicField = node.type === "ClassAccessorProperty" || node.type === "ClassProperty";
  printModifiersList(this, node, [isPublicField && node.declare && "declare", !isPrivateField && node.accessibility]);
  if (node.static) {
    this.word("static");
    this.space();
  }
  printModifiersList(this, node, [!isPrivateField && node.abstract && "abstract", !isPrivateField && node.override && "override", (isPublicField || isPrivateField) && node.readonly && "readonly"]);
}
function printBraced(printer, node, cb) {
  printer.token("{");
  const oldNoLineTerminatorAfterNode = printer.enterDelimited();
  cb();
  printer._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  printer.rightBrace(node);
}
function printModifiersList(printer, node, modifiers) {
  var _printer$tokenMap2;
  const modifiersSet = new Set();
  for (const modifier of modifiers) {
    if (modifier) modifiersSet.add(modifier);
  }
  (_printer$tokenMap2 = printer.tokenMap) == null || _printer$tokenMap2.find(node, tok => {
    if (modifiersSet.has(tok.value)) {
      printer.token(tok.value);
      printer.space();
      modifiersSet.delete(tok.value);
      return modifiersSet.size === 0;
    }
    return false;
  });
  for (const modifier of modifiersSet) {
    printer.word(modifier);
    printer.space();
  }
}

//# sourceMappingURL=typescript.js.map
