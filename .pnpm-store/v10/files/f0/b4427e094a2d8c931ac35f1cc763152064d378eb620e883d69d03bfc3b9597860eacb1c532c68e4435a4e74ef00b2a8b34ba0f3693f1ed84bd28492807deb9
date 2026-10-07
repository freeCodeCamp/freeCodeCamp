"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExpressionStatement = exports.isExpression = exports.isExportSpecifier = exports.isExportDeclaration = exports.isExportAssignment = exports.isEnumMember = exports.isEnumDeclaration = exports.isEntityNameExpression = exports.isEntityName = exports.isEmptyStatement = exports.isElementAccessExpression = exports.isDoStatement = exports.isDeleteExpression = exports.isDefaultClause = exports.isDecorator = exports.isDebuggerStatement = exports.isComputedPropertyName = exports.isContinueStatement = exports.isConstructSignatureDeclaration = exports.isConstructorTypeNode = exports.isConstructorDeclaration = exports.isConditionalTypeNode = exports.isConditionalExpression = exports.isCommaListExpression = exports.isClassLikeDeclaration = exports.isClassExpression = exports.isClassDeclaration = exports.isCatchClause = exports.isCaseOrDefaultClause = exports.isCaseClause = exports.isCaseBlock = exports.isCallSignatureDeclaration = exports.isCallLikeExpression = exports.isCallExpression = exports.isBreakStatement = exports.isBreakOrContinueStatement = exports.isBooleanLiteral = exports.isBlockLike = exports.isBlock = exports.isBindingPattern = exports.isBindingElement = exports.isBinaryExpression = exports.isAwaitExpression = exports.isAssertionExpression = exports.isAsExpression = exports.isArrowFunction = exports.isArrayTypeNode = exports.isArrayLiteralExpression = exports.isArrayBindingPattern = exports.isAccessorDeclaration = void 0;
exports.isNamespaceImport = exports.isNamespaceDeclaration = exports.isNamedImports = exports.isNamedExports = exports.isModuleDeclaration = exports.isModuleBlock = exports.isMethodSignature = exports.isMethodDeclaration = exports.isMetaProperty = exports.isMappedTypeNode = exports.isLiteralTypeNode = exports.isLiteralExpression = exports.isLabeledStatement = exports.isJsxText = exports.isJsxSpreadAttribute = exports.isJsxSelfClosingElement = exports.isJsxOpeningLikeElement = exports.isJsxOpeningFragment = exports.isJsxOpeningElement = exports.isJsxFragment = exports.isJsxExpression = exports.isJsxElement = exports.isJsxClosingFragment = exports.isJsxClosingElement = exports.isJsxAttributes = exports.isJsxAttributeLike = exports.isJsxAttribute = exports.isJsDoc = exports.isIterationStatement = exports.isIntersectionTypeNode = exports.isInterfaceDeclaration = exports.isInferTypeNode = exports.isIndexSignatureDeclaration = exports.isIndexedAccessTypeNode = exports.isImportSpecifier = exports.isImportEqualsDeclaration = exports.isImportDeclaration = exports.isImportClause = exports.isIfStatement = exports.isIdentifier = exports.isGetAccessorDeclaration = exports.isFunctionTypeNode = exports.isFunctionExpression = exports.isFunctionDeclaration = exports.isForStatement = exports.isForOfStatement = exports.isForInOrOfStatement = exports.isForInStatement = exports.isExternalModuleReference = exports.isExpressionWithTypeArguments = void 0;
exports.isVariableStatement = exports.isVariableDeclaration = exports.isUnionTypeNode = exports.isTypeQueryNode = exports.isTypeReferenceNode = exports.isTypePredicateNode = exports.isTypeParameterDeclaration = exports.isTypeOperatorNode = exports.isTypeOfExpression = exports.isTypeLiteralNode = exports.isTypeAssertion = exports.isTypeAliasDeclaration = exports.isTupleTypeNode = exports.isTryStatement = exports.isThrowStatement = exports.isTextualLiteral = exports.isTemplateLiteral = exports.isTemplateExpression = exports.isTaggedTemplateExpression = exports.isSyntaxList = exports.isSwitchStatement = exports.isStringLiteral = exports.isSpreadElement = exports.isSpreadAssignment = exports.isSourceFile = exports.isSignatureDeclaration = exports.isShorthandPropertyAssignment = exports.isSetAccessorDeclaration = exports.isReturnStatement = exports.isRegularExpressionLiteral = exports.isQualifiedName = exports.isPropertySignature = exports.isPropertyDeclaration = exports.isPropertyAssignment = exports.isPropertyAccessExpression = exports.isPrefixUnaryExpression = exports.isPostfixUnaryExpression = exports.isParenthesizedTypeNode = exports.isParenthesizedExpression = exports.isParameterDeclaration = exports.isOmittedExpression = exports.isObjectLiteralExpression = exports.isObjectBindingPattern = exports.isNumericOrStringLikeLiteral = exports.isNumericLiteral = exports.isNullLiteral = exports.isNoSubstitutionTemplateLiteral = exports.isNonNullExpression = exports.isNewExpression = exports.isNamespaceExportDeclaration = void 0;
exports.isWithStatement = exports.isWhileStatement = exports.isVoidExpression = exports.isVariableDeclarationList = void 0;
const ts = require("typescript");
function isAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.GetAccessor ||
        node.kind === ts.SyntaxKind.SetAccessor;
}
exports.isAccessorDeclaration = isAccessorDeclaration;
function isArrayBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}
exports.isArrayBindingPattern = isArrayBindingPattern;
function isArrayLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}
exports.isArrayLiteralExpression = isArrayLiteralExpression;
function isArrayTypeNode(node) {
    return node.kind === ts.SyntaxKind.ArrayType;
}
exports.isArrayTypeNode = isArrayTypeNode;
function isArrowFunction(node) {
    return node.kind === ts.SyntaxKind.ArrowFunction;
}
exports.isArrowFunction = isArrowFunction;
function isAsExpression(node) {
    return node.kind === ts.SyntaxKind.AsExpression;
}
exports.isAsExpression = isAsExpression;
function isAssertionExpression(node) {
    return node.kind === ts.SyntaxKind.AsExpression ||
        node.kind === ts.SyntaxKind.TypeAssertionExpression;
}
exports.isAssertionExpression = isAssertionExpression;
function isAwaitExpression(node) {
    return node.kind === ts.SyntaxKind.AwaitExpression;
}
exports.isAwaitExpression = isAwaitExpression;
function isBinaryExpression(node) {
    return node.kind === ts.SyntaxKind.BinaryExpression;
}
exports.isBinaryExpression = isBinaryExpression;
function isBindingElement(node) {
    return node.kind === ts.SyntaxKind.BindingElement;
}
exports.isBindingElement = isBindingElement;
function isBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern ||
        node.kind === ts.SyntaxKind.ObjectBindingPattern;
}
exports.isBindingPattern = isBindingPattern;
function isBlock(node) {
    return node.kind === ts.SyntaxKind.Block;
}
exports.isBlock = isBlock;
function isBlockLike(node) {
    return node.statements !== undefined;
}
exports.isBlockLike = isBlockLike;
function isBooleanLiteral(node) {
    return node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword;
}
exports.isBooleanLiteral = isBooleanLiteral;
function isBreakOrContinueStatement(node) {
    return node.kind === ts.SyntaxKind.BreakStatement ||
        node.kind === ts.SyntaxKind.ContinueStatement;
}
exports.isBreakOrContinueStatement = isBreakOrContinueStatement;
function isBreakStatement(node) {
    return node.kind === ts.SyntaxKind.BreakStatement;
}
exports.isBreakStatement = isBreakStatement;
function isCallExpression(node) {
    return node.kind === ts.SyntaxKind.CallExpression;
}
exports.isCallExpression = isCallExpression;
function isCallLikeExpression(node) {
    switch (node.kind) {
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.Decorator:
        case ts.SyntaxKind.JsxOpeningElement:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.TaggedTemplateExpression:
            return true;
        default:
            return false;
    }
}
exports.isCallLikeExpression = isCallLikeExpression;
function isCallSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.CallSignature;
}
exports.isCallSignatureDeclaration = isCallSignatureDeclaration;
function isCaseBlock(node) {
    return node.kind === ts.SyntaxKind.CaseBlock;
}
exports.isCaseBlock = isCaseBlock;
function isCaseClause(node) {
    return node.kind === ts.SyntaxKind.CaseClause;
}
exports.isCaseClause = isCaseClause;
function isCaseOrDefaultClause(node) {
    return node.kind === ts.SyntaxKind.CaseClause ||
        node.kind === ts.SyntaxKind.DefaultClause;
}
exports.isCaseOrDefaultClause = isCaseOrDefaultClause;
function isCatchClause(node) {
    return node.kind === ts.SyntaxKind.CatchClause;
}
exports.isCatchClause = isCatchClause;
function isClassDeclaration(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
}
exports.isClassDeclaration = isClassDeclaration;
function isClassExpression(node) {
    return node.kind === ts.SyntaxKind.ClassExpression;
}
exports.isClassExpression = isClassExpression;
function isClassLikeDeclaration(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration ||
        node.kind === ts.SyntaxKind.ClassExpression;
}
exports.isClassLikeDeclaration = isClassLikeDeclaration;
function isCommaListExpression(node) {
    return node.kind === ts.SyntaxKind.CommaListExpression;
}
exports.isCommaListExpression = isCommaListExpression;
function isConditionalExpression(node) {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
}
exports.isConditionalExpression = isConditionalExpression;
function isConditionalTypeNode(node) {
    return node.kind === ts.SyntaxKind.ConditionalType;
}
exports.isConditionalTypeNode = isConditionalTypeNode;
function isConstructorDeclaration(node) {
    return node.kind === ts.SyntaxKind.Constructor;
}
exports.isConstructorDeclaration = isConstructorDeclaration;
function isConstructorTypeNode(node) {
    return node.kind === ts.SyntaxKind.ConstructorType;
}
exports.isConstructorTypeNode = isConstructorTypeNode;
function isConstructSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.ConstructSignature;
}
exports.isConstructSignatureDeclaration = isConstructSignatureDeclaration;
function isContinueStatement(node) {
    return node.kind === ts.SyntaxKind.ContinueStatement;
}
exports.isContinueStatement = isContinueStatement;
function isComputedPropertyName(node) {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}
exports.isComputedPropertyName = isComputedPropertyName;
function isDebuggerStatement(node) {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
}
exports.isDebuggerStatement = isDebuggerStatement;
function isDecorator(node) {
    return node.kind === ts.SyntaxKind.Decorator;
}
exports.isDecorator = isDecorator;
function isDefaultClause(node) {
    return node.kind === ts.SyntaxKind.DefaultClause;
}
exports.isDefaultClause = isDefaultClause;
function isDeleteExpression(node) {
    return node.kind === ts.SyntaxKind.DeleteExpression;
}
exports.isDeleteExpression = isDeleteExpression;
function isDoStatement(node) {
    return node.kind === ts.SyntaxKind.DoStatement;
}
exports.isDoStatement = isDoStatement;
function isElementAccessExpression(node) {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}
exports.isElementAccessExpression = isElementAccessExpression;
function isEmptyStatement(node) {
    return node.kind === ts.SyntaxKind.EmptyStatement;
}
exports.isEmptyStatement = isEmptyStatement;
function isEntityName(node) {
    return node.kind === ts.SyntaxKind.Identifier || isQualifiedName(node);
}
exports.isEntityName = isEntityName;
function isEntityNameExpression(node) {
    return node.kind === ts.SyntaxKind.Identifier ||
        isPropertyAccessExpression(node) && isEntityNameExpression(node.expression);
}
exports.isEntityNameExpression = isEntityNameExpression;
function isEnumDeclaration(node) {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
}
exports.isEnumDeclaration = isEnumDeclaration;
function isEnumMember(node) {
    return node.kind === ts.SyntaxKind.EnumMember;
}
exports.isEnumMember = isEnumMember;
function isExportAssignment(node) {
    return node.kind === ts.SyntaxKind.ExportAssignment;
}
exports.isExportAssignment = isExportAssignment;
function isExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
}
exports.isExportDeclaration = isExportDeclaration;
function isExportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
}
exports.isExportSpecifier = isExportSpecifier;
function isExpression(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ArrayLiteralExpression:
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.AsExpression:
        case ts.SyntaxKind.AwaitExpression:
        case ts.SyntaxKind.BinaryExpression:
        case ts.SyntaxKind.CallExpression:
        case ts.SyntaxKind.ClassExpression:
        case ts.SyntaxKind.CommaListExpression:
        case ts.SyntaxKind.ConditionalExpression:
        case ts.SyntaxKind.DeleteExpression:
        case ts.SyntaxKind.ElementAccessExpression:
        case ts.SyntaxKind.FalseKeyword:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.Identifier:
        case ts.SyntaxKind.JsxElement:
        case ts.SyntaxKind.JsxFragment:
        case ts.SyntaxKind.JsxExpression:
        case ts.SyntaxKind.JsxOpeningElement:
        case ts.SyntaxKind.JsxOpeningFragment:
        case ts.SyntaxKind.JsxSelfClosingElement:
        case ts.SyntaxKind.MetaProperty:
        case ts.SyntaxKind.NewExpression:
        case ts.SyntaxKind.NonNullExpression:
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.ObjectLiteralExpression:
        case ts.SyntaxKind.OmittedExpression:
        case ts.SyntaxKind.ParenthesizedExpression:
        case ts.SyntaxKind.PostfixUnaryExpression:
        case ts.SyntaxKind.PrefixUnaryExpression:
        case ts.SyntaxKind.PropertyAccessExpression:
        case ts.SyntaxKind.RegularExpressionLiteral:
        case ts.SyntaxKind.SpreadElement:
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.SuperKeyword:
        case ts.SyntaxKind.TaggedTemplateExpression:
        case ts.SyntaxKind.TemplateExpression:
        case ts.SyntaxKind.ThisKeyword:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.TypeAssertionExpression:
        case ts.SyntaxKind.TypeOfExpression:
        case ts.SyntaxKind.VoidExpression:
        case ts.SyntaxKind.YieldExpression:
            return true;
        default:
            return false;
    }
}
exports.isExpression = isExpression;
function isExpressionStatement(node) {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
}
exports.isExpressionStatement = isExpressionStatement;
function isExpressionWithTypeArguments(node) {
    return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
}
exports.isExpressionWithTypeArguments = isExpressionWithTypeArguments;
function isExternalModuleReference(node) {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
}
exports.isExternalModuleReference = isExternalModuleReference;
function isForInStatement(node) {
    return node.kind === ts.SyntaxKind.ForInStatement;
}
exports.isForInStatement = isForInStatement;
function isForInOrOfStatement(node) {
    return node.kind === ts.SyntaxKind.ForOfStatement || node.kind === ts.SyntaxKind.ForInStatement;
}
exports.isForInOrOfStatement = isForInOrOfStatement;
function isForOfStatement(node) {
    return node.kind === ts.SyntaxKind.ForOfStatement;
}
exports.isForOfStatement = isForOfStatement;
function isForStatement(node) {
    return node.kind === ts.SyntaxKind.ForStatement;
}
exports.isForStatement = isForStatement;
function isFunctionDeclaration(node) {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
}
exports.isFunctionDeclaration = isFunctionDeclaration;
function isFunctionExpression(node) {
    return node.kind === ts.SyntaxKind.FunctionExpression;
}
exports.isFunctionExpression = isFunctionExpression;
function isFunctionTypeNode(node) {
    return node.kind === ts.SyntaxKind.FunctionType;
}
exports.isFunctionTypeNode = isFunctionTypeNode;
function isGetAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.GetAccessor;
}
exports.isGetAccessorDeclaration = isGetAccessorDeclaration;
function isIdentifier(node) {
    return node.kind === ts.SyntaxKind.Identifier;
}
exports.isIdentifier = isIdentifier;
function isIfStatement(node) {
    return node.kind === ts.SyntaxKind.IfStatement;
}
exports.isIfStatement = isIfStatement;
function isImportClause(node) {
    return node.kind === ts.SyntaxKind.ImportClause;
}
exports.isImportClause = isImportClause;
function isImportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
}
exports.isImportDeclaration = isImportDeclaration;
function isImportEqualsDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}
exports.isImportEqualsDeclaration = isImportEqualsDeclaration;
function isImportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ImportSpecifier;
}
exports.isImportSpecifier = isImportSpecifier;
function isIndexedAccessTypeNode(node) {
    return node.kind === ts.SyntaxKind.IndexedAccessType;
}
exports.isIndexedAccessTypeNode = isIndexedAccessTypeNode;
function isIndexSignatureDeclaration(node) {
    return node.kind === ts.SyntaxKind.IndexSignature;
}
exports.isIndexSignatureDeclaration = isIndexSignatureDeclaration;
function isInferTypeNode(node) {
    return node.kind === ts.SyntaxKind.InferType;
}
exports.isInferTypeNode = isInferTypeNode;
function isInterfaceDeclaration(node) {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}
exports.isInterfaceDeclaration = isInterfaceDeclaration;
function isIntersectionTypeNode(node) {
    return node.kind === ts.SyntaxKind.IntersectionType;
}
exports.isIntersectionTypeNode = isIntersectionTypeNode;
function isIterationStatement(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.DoStatement:
            return true;
        default:
            return false;
    }
}
exports.isIterationStatement = isIterationStatement;
function isJsDoc(node) {
    return node.kind === ts.SyntaxKind.JSDocComment;
}
exports.isJsDoc = isJsDoc;
function isJsxAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxAttribute;
}
exports.isJsxAttribute = isJsxAttribute;
function isJsxAttributeLike(node) {
    return node.kind === ts.SyntaxKind.JsxAttribute ||
        node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxAttributeLike = isJsxAttributeLike;
function isJsxAttributes(node) {
    return node.kind === ts.SyntaxKind.JsxAttributes;
}
exports.isJsxAttributes = isJsxAttributes;
function isJsxClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
}
exports.isJsxClosingElement = isJsxClosingElement;
function isJsxClosingFragment(node) {
    return node.kind === ts.SyntaxKind.JsxClosingFragment;
}
exports.isJsxClosingFragment = isJsxClosingFragment;
function isJsxElement(node) {
    return node.kind === ts.SyntaxKind.JsxElement;
}
exports.isJsxElement = isJsxElement;
function isJsxExpression(node) {
    return node.kind === ts.SyntaxKind.JsxExpression;
}
exports.isJsxExpression = isJsxExpression;
function isJsxFragment(node) {
    return node.kind === ts.SyntaxKind.JsxFragment;
}
exports.isJsxFragment = isJsxFragment;
function isJsxOpeningElement(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
}
exports.isJsxOpeningElement = isJsxOpeningElement;
function isJsxOpeningFragment(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningFragment;
}
exports.isJsxOpeningFragment = isJsxOpeningFragment;
function isJsxOpeningLikeElement(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement ||
        node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxOpeningLikeElement = isJsxOpeningLikeElement;
function isJsxSelfClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxSelfClosingElement = isJsxSelfClosingElement;
function isJsxSpreadAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxSpreadAttribute = isJsxSpreadAttribute;
function isJsxText(node) {
    return node.kind === ts.SyntaxKind.JsxText;
}
exports.isJsxText = isJsxText;
function isLabeledStatement(node) {
    return node.kind === ts.SyntaxKind.LabeledStatement;
}
exports.isLabeledStatement = isLabeledStatement;
function isLiteralExpression(node) {
    return node.kind >= ts.SyntaxKind.FirstLiteralToken &&
        node.kind <= ts.SyntaxKind.LastLiteralToken;
}
exports.isLiteralExpression = isLiteralExpression;
function isLiteralTypeNode(node) {
    return node.kind === ts.SyntaxKind.LiteralType;
}
exports.isLiteralTypeNode = isLiteralTypeNode;
function isMappedTypeNode(node) {
    return node.kind === ts.SyntaxKind.MappedType;
}
exports.isMappedTypeNode = isMappedTypeNode;
function isMetaProperty(node) {
    return node.kind === ts.SyntaxKind.MetaProperty;
}
exports.isMetaProperty = isMetaProperty;
function isMethodDeclaration(node) {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
}
exports.isMethodDeclaration = isMethodDeclaration;
function isMethodSignature(node) {
    return node.kind === ts.SyntaxKind.MethodSignature;
}
exports.isMethodSignature = isMethodSignature;
function isModuleBlock(node) {
    return node.kind === ts.SyntaxKind.ModuleBlock;
}
exports.isModuleBlock = isModuleBlock;
function isModuleDeclaration(node) {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
}
exports.isModuleDeclaration = isModuleDeclaration;
function isNamedExports(node) {
    return node.kind === ts.SyntaxKind.NamedExports;
}
exports.isNamedExports = isNamedExports;
function isNamedImports(node) {
    return node.kind === ts.SyntaxKind.NamedImports;
}
exports.isNamedImports = isNamedImports;
function isNamespaceDeclaration(node) {
    return isModuleDeclaration(node) &&
        node.name.kind === ts.SyntaxKind.Identifier &&
        node.body !== undefined &&
        (node.body.kind === ts.SyntaxKind.ModuleBlock ||
            isNamespaceDeclaration(node.body));
}
exports.isNamespaceDeclaration = isNamespaceDeclaration;
function isNamespaceImport(node) {
    return node.kind === ts.SyntaxKind.NamespaceImport;
}
exports.isNamespaceImport = isNamespaceImport;
function isNamespaceExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}
exports.isNamespaceExportDeclaration = isNamespaceExportDeclaration;
function isNewExpression(node) {
    return node.kind === ts.SyntaxKind.NewExpression;
}
exports.isNewExpression = isNewExpression;
function isNonNullExpression(node) {
    return node.kind === ts.SyntaxKind.NonNullExpression;
}
exports.isNonNullExpression = isNonNullExpression;
function isNoSubstitutionTemplateLiteral(node) {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isNoSubstitutionTemplateLiteral = isNoSubstitutionTemplateLiteral;
function isNullLiteral(node) {
    return node.kind === ts.SyntaxKind.NullKeyword;
}
exports.isNullLiteral = isNullLiteral;
function isNumericLiteral(node) {
    return node.kind === ts.SyntaxKind.NumericLiteral;
}
exports.isNumericLiteral = isNumericLiteral;
function isNumericOrStringLikeLiteral(node) {
    switch (node.kind) {
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
            return true;
        default:
            return false;
    }
}
exports.isNumericOrStringLikeLiteral = isNumericOrStringLikeLiteral;
function isObjectBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}
exports.isObjectBindingPattern = isObjectBindingPattern;
function isObjectLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}
exports.isObjectLiteralExpression = isObjectLiteralExpression;
function isOmittedExpression(node) {
    return node.kind === ts.SyntaxKind.OmittedExpression;
}
exports.isOmittedExpression = isOmittedExpression;
function isParameterDeclaration(node) {
    return node.kind === ts.SyntaxKind.Parameter;
}
exports.isParameterDeclaration = isParameterDeclaration;
function isParenthesizedExpression(node) {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}
exports.isParenthesizedExpression = isParenthesizedExpression;
function isParenthesizedTypeNode(node) {
    return node.kind === ts.SyntaxKind.ParenthesizedType;
}
exports.isParenthesizedTypeNode = isParenthesizedTypeNode;
function isPostfixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}
exports.isPostfixUnaryExpression = isPostfixUnaryExpression;
function isPrefixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}
exports.isPrefixUnaryExpression = isPrefixUnaryExpression;
function isPropertyAccessExpression(node) {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}
exports.isPropertyAccessExpression = isPropertyAccessExpression;
function isPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
}
exports.isPropertyAssignment = isPropertyAssignment;
function isPropertyDeclaration(node) {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
}
exports.isPropertyDeclaration = isPropertyDeclaration;
function isPropertySignature(node) {
    return node.kind === ts.SyntaxKind.PropertySignature;
}
exports.isPropertySignature = isPropertySignature;
function isQualifiedName(node) {
    return node.kind === ts.SyntaxKind.QualifiedName;
}
exports.isQualifiedName = isQualifiedName;
function isRegularExpressionLiteral(node) {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}
exports.isRegularExpressionLiteral = isRegularExpressionLiteral;
function isReturnStatement(node) {
    return node.kind === ts.SyntaxKind.ReturnStatement;
}
exports.isReturnStatement = isReturnStatement;
function isSetAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.SetAccessor;
}
exports.isSetAccessorDeclaration = isSetAccessorDeclaration;
function isShorthandPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}
exports.isShorthandPropertyAssignment = isShorthandPropertyAssignment;
function isSignatureDeclaration(node) {
    return node.parameters !== undefined;
}
exports.isSignatureDeclaration = isSignatureDeclaration;
function isSourceFile(node) {
    return node.kind === ts.SyntaxKind.SourceFile;
}
exports.isSourceFile = isSourceFile;
function isSpreadAssignment(node) {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
}
exports.isSpreadAssignment = isSpreadAssignment;
function isSpreadElement(node) {
    return node.kind === ts.SyntaxKind.SpreadElement;
}
exports.isSpreadElement = isSpreadElement;
function isStringLiteral(node) {
    return node.kind === ts.SyntaxKind.StringLiteral;
}
exports.isStringLiteral = isStringLiteral;
function isSwitchStatement(node) {
    return node.kind === ts.SyntaxKind.SwitchStatement;
}
exports.isSwitchStatement = isSwitchStatement;
function isSyntaxList(node) {
    return node.kind === ts.SyntaxKind.SyntaxList;
}
exports.isSyntaxList = isSyntaxList;
function isTaggedTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
function isTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TemplateExpression;
}
exports.isTemplateExpression = isTemplateExpression;
function isTemplateLiteral(node) {
    return node.kind === ts.SyntaxKind.TemplateExpression ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isTemplateLiteral = isTemplateLiteral;
function isTextualLiteral(node) {
    return node.kind === ts.SyntaxKind.StringLiteral ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isTextualLiteral = isTextualLiteral;
function isThrowStatement(node) {
    return node.kind === ts.SyntaxKind.ThrowStatement;
}
exports.isThrowStatement = isThrowStatement;
function isTryStatement(node) {
    return node.kind === ts.SyntaxKind.TryStatement;
}
exports.isTryStatement = isTryStatement;
function isTupleTypeNode(node) {
    return node.kind === ts.SyntaxKind.TupleType;
}
exports.isTupleTypeNode = isTupleTypeNode;
function isTypeAliasDeclaration(node) {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}
exports.isTypeAliasDeclaration = isTypeAliasDeclaration;
function isTypeAssertion(node) {
    return node.kind === ts.SyntaxKind.TypeAssertionExpression;
}
exports.isTypeAssertion = isTypeAssertion;
function isTypeLiteralNode(node) {
    return node.kind === ts.SyntaxKind.TypeLiteral;
}
exports.isTypeLiteralNode = isTypeLiteralNode;
function isTypeOfExpression(node) {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
}
exports.isTypeOfExpression = isTypeOfExpression;
function isTypeOperatorNode(node) {
    return node.kind === ts.SyntaxKind.TypeOperator;
}
exports.isTypeOperatorNode = isTypeOperatorNode;
function isTypeParameterDeclaration(node) {
    return node.kind === ts.SyntaxKind.TypeParameter;
}
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
function isTypePredicateNode(node) {
    return node.kind === ts.SyntaxKind.TypePredicate;
}
exports.isTypePredicateNode = isTypePredicateNode;
function isTypeReferenceNode(node) {
    return node.kind === ts.SyntaxKind.TypeReference;
}
exports.isTypeReferenceNode = isTypeReferenceNode;
function isTypeQueryNode(node) {
    return node.kind === ts.SyntaxKind.TypeQuery;
}
exports.isTypeQueryNode = isTypeQueryNode;
function isUnionTypeNode(node) {
    return node.kind === ts.SyntaxKind.UnionType;
}
exports.isUnionTypeNode = isUnionTypeNode;
function isVariableDeclaration(node) {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
}
exports.isVariableDeclaration = isVariableDeclaration;
function isVariableStatement(node) {
    return node.kind === ts.SyntaxKind.VariableStatement;
}
exports.isVariableStatement = isVariableStatement;
function isVariableDeclarationList(node) {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
}
exports.isVariableDeclarationList = isVariableDeclarationList;
function isVoidExpression(node) {
    return node.kind === ts.SyntaxKind.VoidExpression;
}
exports.isVoidExpression = isVoidExpression;
function isWhileStatement(node) {
    return node.kind === ts.SyntaxKind.WhileStatement;
}
exports.isWhileStatement = isWhileStatement;
function isWithStatement(node) {
    return node.kind === ts.SyntaxKind.WithStatement;
}
exports.isWithStatement = isWithStatement;
//# sourceMappingURL=node.js.map