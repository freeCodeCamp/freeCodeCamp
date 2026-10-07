"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAccessor = assertAccessor;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArgumentPlaceholder = assertArgumentPlaceholder;
exports.assertArrayExpression = assertArrayExpression;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertBigIntLiteral = assertBigIntLiteral;
exports.assertBinary = assertBinary;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertBindExpression = assertBindExpression;
exports.assertBlock = assertBlock;
exports.assertBlockParent = assertBlockParent;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertClass = assertClass;
exports.assertClassAccessorProperty = assertClassAccessorProperty;
exports.assertClassBody = assertClassBody;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertClassExpression = assertClassExpression;
exports.assertClassImplements = assertClassImplements;
exports.assertClassMethod = assertClassMethod;
exports.assertClassPrivateMethod = assertClassPrivateMethod;
exports.assertClassPrivateProperty = assertClassPrivateProperty;
exports.assertClassProperty = assertClassProperty;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDecimalLiteral = assertDecimalLiteral;
exports.assertDeclaration = assertDeclaration;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertDecorator = assertDecorator;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertDoExpression = assertDoExpression;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertEnumBody = assertEnumBody;
exports.assertEnumBooleanBody = assertEnumBooleanBody;
exports.assertEnumBooleanMember = assertEnumBooleanMember;
exports.assertEnumDeclaration = assertEnumDeclaration;
exports.assertEnumDefaultedMember = assertEnumDefaultedMember;
exports.assertEnumMember = assertEnumMember;
exports.assertEnumNumberBody = assertEnumNumberBody;
exports.assertEnumNumberMember = assertEnumNumberMember;
exports.assertEnumStringBody = assertEnumStringBody;
exports.assertEnumStringMember = assertEnumStringMember;
exports.assertEnumSymbolBody = assertEnumSymbolBody;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertExpression = assertExpression;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFile = assertFile;
exports.assertFlow = assertFlow;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertFlowType = assertFlowType;
exports.assertFor = assertFor;
exports.assertForInStatement = assertForInStatement;
exports.assertForOfStatement = assertForOfStatement;
exports.assertForStatement = assertForStatement;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertFunctionParameter = assertFunctionParameter;
exports.assertFunctionParent = assertFunctionParent;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertImmutable = assertImmutable;
exports.assertImport = assertImport;
exports.assertImportAttribute = assertImportAttribute;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportExpression = assertImportExpression;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportOrExportDeclaration = assertImportOrExportDeclaration;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertIndexedAccessType = assertIndexedAccessType;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
exports.assertInterpreterDirective = assertInterpreterDirective;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertJSX = assertJSX;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXText = assertJSXText;
exports.assertLVal = assertLVal;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertLiteral = assertLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertLoop = assertLoop;
exports.assertMemberExpression = assertMemberExpression;
exports.assertMetaProperty = assertMetaProperty;
exports.assertMethod = assertMethod;
exports.assertMiscellaneous = assertMiscellaneous;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertModuleExpression = assertModuleExpression;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertNewExpression = assertNewExpression;
exports.assertNoop = assertNoop;
exports.assertNullLiteral = assertNullLiteral;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMember = assertObjectMember;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertObjectProperty = assertObjectProperty;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertPattern = assertPattern;
exports.assertPatternLike = assertPatternLike;
exports.assertPipelineBareFunction = assertPipelineBareFunction;
exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
exports.assertPlaceholder = assertPlaceholder;
exports.assertPrivate = assertPrivate;
exports.assertPrivateName = assertPrivateName;
exports.assertProgram = assertProgram;
exports.assertProperty = assertProperty;
exports.assertPureish = assertPureish;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertRecordExpression = assertRecordExpression;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestElement = assertRestElement;
exports.assertRestProperty = assertRestProperty;
exports.assertReturnStatement = assertReturnStatement;
exports.assertScopable = assertScopable;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSpreadProperty = assertSpreadProperty;
exports.assertStandardized = assertStandardized;
exports.assertStatement = assertStatement;
exports.assertStaticBlock = assertStaticBlock;
exports.assertStringLiteral = assertStringLiteral;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertSuper = assertSuper;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSBaseType = assertTSBaseType;
exports.assertTSBigIntKeyword = assertTSBigIntKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSEntityName = assertTSEntityName;
exports.assertTSEnumBody = assertTSEnumBody;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSImportType = assertTSImportType;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSInstantiationExpression = assertTSInstantiationExpression;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSNamedTupleMember = assertTSNamedTupleMember;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSOptionalType = assertTSOptionalType;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSRestType = assertTSRestType;
exports.assertTSSatisfiesExpression = assertTSSatisfiesExpression;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSTemplateLiteralType = assertTSTemplateLiteralType;
exports.assertTSThisType = assertTSThisType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSType = assertTSType;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertTerminatorless = assertTerminatorless;
exports.assertThisExpression = assertThisExpression;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTopicReference = assertTopicReference;
exports.assertTryStatement = assertTryStatement;
exports.assertTupleExpression = assertTupleExpression;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertTypeScript = assertTypeScript;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUnaryLike = assertUnaryLike;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertVariance = assertVariance;
exports.assertVoidPattern = assertVoidPattern;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertWhile = assertWhile;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertYieldExpression = assertYieldExpression;
var _is = require("../../validators/is.js");
var _deprecationWarning = require("../../utils/deprecationWarning.js");
function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
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
function assertImportExpression(node, opts) {
  assert("ImportExpression", node, opts);
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
function assertClassAccessorProperty(node, opts) {
  assert("ClassAccessorProperty", node, opts);
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
function assertNoop(node, opts) {
  assert("Noop", node, opts);
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
function assertDecorator(node, opts) {
  assert("Decorator", node, opts);
}
function assertDoExpression(node, opts) {
  assert("DoExpression", node, opts);
}
function assertExportDefaultSpecifier(node, opts) {
  assert("ExportDefaultSpecifier", node, opts);
}
function assertRecordExpression(node, opts) {
  assert("RecordExpression", node, opts);
}
function assertTupleExpression(node, opts) {
  assert("TupleExpression", node, opts);
}
function assertDecimalLiteral(node, opts) {
  assert("DecimalLiteral", node, opts);
}
function assertModuleExpression(node, opts) {
  assert("ModuleExpression", node, opts);
}
function assertTopicReference(node, opts) {
  assert("TopicReference", node, opts);
}
function assertPipelineTopicExpression(node, opts) {
  assert("PipelineTopicExpression", node, opts);
}
function assertPipelineBareFunction(node, opts) {
  assert("PipelineBareFunction", node, opts);
}
function assertPipelinePrimaryTopicReference(node, opts) {
  assert("PipelinePrimaryTopicReference", node, opts);
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
function assertTSExpressionWithTypeArguments(node, opts) {
  assert("TSExpressionWithTypeArguments", node, opts);
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
function assertAccessor(node, opts) {
  assert("Accessor", node, opts);
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
  (0, _deprecationWarning.default)("assertNumberLiteral", "assertNumericLiteral");
  assert("NumberLiteral", node, opts);
}
function assertRegexLiteral(node, opts) {
  (0, _deprecationWarning.default)("assertRegexLiteral", "assertRegExpLiteral");
  assert("RegexLiteral", node, opts);
}
function assertRestProperty(node, opts) {
  (0, _deprecationWarning.default)("assertRestProperty", "assertRestElement");
  assert("RestProperty", node, opts);
}
function assertSpreadProperty(node, opts) {
  (0, _deprecationWarning.default)("assertSpreadProperty", "assertSpreadElement");
  assert("SpreadProperty", node, opts);
}
function assertModuleDeclaration(node, opts) {
  (0, _deprecationWarning.default)("assertModuleDeclaration", "assertImportOrExportDeclaration");
  assert("ModuleDeclaration", node, opts);
}

//# sourceMappingURL=index.js.map
