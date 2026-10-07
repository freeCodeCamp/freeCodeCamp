"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorPrecedence = void 0;
exports.getOperatorPrecedenceForNode = getOperatorPrecedenceForNode;
exports.getOperatorPrecedence = getOperatorPrecedence;
exports.getBinaryOperatorPrecedence = getBinaryOperatorPrecedence;
const utils_1 = require("@typescript-eslint/utils");
const typescript_1 = require("typescript");
var OperatorPrecedence;
(function (OperatorPrecedence) {
    // Expression:
    //     AssignmentExpression
    //     Expression `,` AssignmentExpression
    OperatorPrecedence[OperatorPrecedence["Comma"] = 0] = "Comma";
    // NOTE: `Spread` is higher than `Comma` due to how it is parsed in |ElementList|
    // SpreadElement:
    //     `...` AssignmentExpression
    OperatorPrecedence[OperatorPrecedence["Spread"] = 1] = "Spread";
    // AssignmentExpression:
    //     ConditionalExpression
    //     YieldExpression
    //     ArrowFunction
    //     AsyncArrowFunction
    //     LeftHandSideExpression `=` AssignmentExpression
    //     LeftHandSideExpression AssignmentOperator AssignmentExpression
    //
    // NOTE: AssignmentExpression is broken down into several precedences due to the requirements
    //       of the parenthesize rules.
    // AssignmentExpression: YieldExpression
    // YieldExpression:
    //     `yield`
    //     `yield` AssignmentExpression
    //     `yield` `*` AssignmentExpression
    OperatorPrecedence[OperatorPrecedence["Yield"] = 2] = "Yield";
    // AssignmentExpression: LeftHandSideExpression `=` AssignmentExpression
    // AssignmentExpression: LeftHandSideExpression AssignmentOperator AssignmentExpression
    // AssignmentOperator: one of
    //     `*=` `/=` `%=` `+=` `-=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` `**=`
    OperatorPrecedence[OperatorPrecedence["Assignment"] = 3] = "Assignment";
    // NOTE: `Conditional` is considered higher than `Assignment` here, but in reality they have
    //       the same precedence.
    // AssignmentExpression: ConditionalExpression
    // ConditionalExpression:
    //     ShortCircuitExpression
    //     ShortCircuitExpression `?` AssignmentExpression `:` AssignmentExpression
    // ShortCircuitExpression:
    //     LogicalORExpression
    //     CoalesceExpression
    OperatorPrecedence[OperatorPrecedence["Conditional"] = 4] = "Conditional";
    // CoalesceExpression:
    //     CoalesceExpressionHead `??` BitwiseORExpression
    // CoalesceExpressionHead:
    //     CoalesceExpression
    //     BitwiseORExpression
    OperatorPrecedence[OperatorPrecedence["Coalesce"] = 4] = "Coalesce";
    // LogicalORExpression:
    //     LogicalANDExpression
    //     LogicalORExpression `||` LogicalANDExpression
    OperatorPrecedence[OperatorPrecedence["LogicalOR"] = 5] = "LogicalOR";
    // LogicalANDExpression:
    //     BitwiseORExpression
    //     LogicalANDExpression `&&` BitwiseORExpression
    OperatorPrecedence[OperatorPrecedence["LogicalAND"] = 6] = "LogicalAND";
    // BitwiseORExpression:
    //     BitwiseXORExpression
    //     BitwiseORExpression `^` BitwiseXORExpression
    OperatorPrecedence[OperatorPrecedence["BitwiseOR"] = 7] = "BitwiseOR";
    // BitwiseXORExpression:
    //     BitwiseANDExpression
    //     BitwiseXORExpression `^` BitwiseANDExpression
    OperatorPrecedence[OperatorPrecedence["BitwiseXOR"] = 8] = "BitwiseXOR";
    // BitwiseANDExpression:
    //     EqualityExpression
    //     BitwiseANDExpression `^` EqualityExpression
    OperatorPrecedence[OperatorPrecedence["BitwiseAND"] = 9] = "BitwiseAND";
    // EqualityExpression:
    //     RelationalExpression
    //     EqualityExpression `==` RelationalExpression
    //     EqualityExpression `!=` RelationalExpression
    //     EqualityExpression `===` RelationalExpression
    //     EqualityExpression `!==` RelationalExpression
    OperatorPrecedence[OperatorPrecedence["Equality"] = 10] = "Equality";
    // RelationalExpression:
    //     ShiftExpression
    //     RelationalExpression `<` ShiftExpression
    //     RelationalExpression `>` ShiftExpression
    //     RelationalExpression `<=` ShiftExpression
    //     RelationalExpression `>=` ShiftExpression
    //     RelationalExpression `instanceof` ShiftExpression
    //     RelationalExpression `in` ShiftExpression
    //     [+TypeScript] RelationalExpression `as` Type
    OperatorPrecedence[OperatorPrecedence["Relational"] = 11] = "Relational";
    // ShiftExpression:
    //     AdditiveExpression
    //     ShiftExpression `<<` AdditiveExpression
    //     ShiftExpression `>>` AdditiveExpression
    //     ShiftExpression `>>>` AdditiveExpression
    OperatorPrecedence[OperatorPrecedence["Shift"] = 12] = "Shift";
    // AdditiveExpression:
    //     MultiplicativeExpression
    //     AdditiveExpression `+` MultiplicativeExpression
    //     AdditiveExpression `-` MultiplicativeExpression
    OperatorPrecedence[OperatorPrecedence["Additive"] = 13] = "Additive";
    // MultiplicativeExpression:
    //     ExponentiationExpression
    //     MultiplicativeExpression MultiplicativeOperator ExponentiationExpression
    // MultiplicativeOperator: one of `*`, `/`, `%`
    OperatorPrecedence[OperatorPrecedence["Multiplicative"] = 14] = "Multiplicative";
    // ExponentiationExpression:
    //     UnaryExpression
    //     UpdateExpression `**` ExponentiationExpression
    OperatorPrecedence[OperatorPrecedence["Exponentiation"] = 15] = "Exponentiation";
    // UnaryExpression:
    //     UpdateExpression
    //     `delete` UnaryExpression
    //     `void` UnaryExpression
    //     `typeof` UnaryExpression
    //     `+` UnaryExpression
    //     `-` UnaryExpression
    //     `~` UnaryExpression
    //     `!` UnaryExpression
    //     AwaitExpression
    // UpdateExpression:            // TODO: Do we need to investigate the precedence here?
    //     `++` UnaryExpression
    //     `--` UnaryExpression
    OperatorPrecedence[OperatorPrecedence["Unary"] = 16] = "Unary";
    // UpdateExpression:
    //     LeftHandSideExpression
    //     LeftHandSideExpression `++`
    //     LeftHandSideExpression `--`
    OperatorPrecedence[OperatorPrecedence["Update"] = 17] = "Update";
    // LeftHandSideExpression:
    //     NewExpression
    //     CallExpression
    // NewExpression:
    //     MemberExpression
    //     `new` NewExpression
    OperatorPrecedence[OperatorPrecedence["LeftHandSide"] = 18] = "LeftHandSide";
    // CallExpression:
    //     CoverCallExpressionAndAsyncArrowHead
    //     SuperCall
    //     ImportCall
    //     CallExpression Arguments
    //     CallExpression `[` Expression `]`
    //     CallExpression `.` IdentifierName
    //     CallExpression TemplateLiteral
    // MemberExpression:
    //     PrimaryExpression
    //     MemberExpression `[` Expression `]`
    //     MemberExpression `.` IdentifierName
    //     MemberExpression TemplateLiteral
    //     SuperProperty
    //     MetaProperty
    //     `new` MemberExpression Arguments
    OperatorPrecedence[OperatorPrecedence["Member"] = 19] = "Member";
    // TODO: JSXElement?
    // PrimaryExpression:
    //     `this`
    //     IdentifierReference
    //     Literal
    //     ArrayLiteral
    //     ObjectLiteral
    //     FunctionExpression
    //     ClassExpression
    //     GeneratorExpression
    //     AsyncFunctionExpression
    //     AsyncGeneratorExpression
    //     RegularExpressionLiteral
    //     TemplateLiteral
    //     CoverParenthesizedExpressionAndArrowParameterList
    OperatorPrecedence[OperatorPrecedence["Primary"] = 20] = "Primary";
    OperatorPrecedence[OperatorPrecedence["Highest"] = 20] = "Highest";
    OperatorPrecedence[OperatorPrecedence["Lowest"] = 0] = "Lowest";
    // -1 is lower than all other precedences. Returning it will cause binary expression
    // parsing to stop.
    OperatorPrecedence[OperatorPrecedence["Invalid"] = -1] = "Invalid";
})(OperatorPrecedence || (exports.OperatorPrecedence = OperatorPrecedence = {}));
/**
 * Note that this does not take into account parenthesization. You should check
 * for parenthesization separately if it's relevant to your usage.
 */
function getOperatorPrecedenceForNode(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.SpreadElement:
        case utils_1.AST_NODE_TYPES.RestElement:
            return OperatorPrecedence.Spread;
        case utils_1.AST_NODE_TYPES.YieldExpression:
        case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
            return OperatorPrecedence.Yield;
        case utils_1.AST_NODE_TYPES.ConditionalExpression:
            return OperatorPrecedence.Conditional;
        case utils_1.AST_NODE_TYPES.SequenceExpression:
            return OperatorPrecedence.Comma;
        case utils_1.AST_NODE_TYPES.AssignmentExpression:
        case utils_1.AST_NODE_TYPES.BinaryExpression:
        case utils_1.AST_NODE_TYPES.LogicalExpression:
            switch (node.operator) {
                case '==':
                case '+=':
                case '-=':
                case '**=':
                case '*=':
                case '/=':
                case '%=':
                case '<<=':
                case '>>=':
                case '>>>=':
                case '&=':
                case '^=':
                case '|=':
                case '||=':
                case '&&=':
                case '??=':
                    return OperatorPrecedence.Assignment;
                default:
                    return getBinaryOperatorPrecedence(node.operator);
            }
        case utils_1.AST_NODE_TYPES.TSTypeAssertion:
        case utils_1.AST_NODE_TYPES.TSNonNullExpression:
        case utils_1.AST_NODE_TYPES.UnaryExpression:
        case utils_1.AST_NODE_TYPES.AwaitExpression:
            return OperatorPrecedence.Unary;
        case utils_1.AST_NODE_TYPES.UpdateExpression:
            // TODO: Should prefix `++` and `--` be moved to the `Update` precedence?
            if (node.prefix) {
                return OperatorPrecedence.Unary;
            }
            return OperatorPrecedence.Update;
        case utils_1.AST_NODE_TYPES.ChainExpression:
            return getOperatorPrecedenceForNode(node.expression);
        case utils_1.AST_NODE_TYPES.CallExpression:
            return OperatorPrecedence.LeftHandSide;
        case utils_1.AST_NODE_TYPES.NewExpression:
            return node.arguments.length > 0
                ? OperatorPrecedence.Member
                : OperatorPrecedence.LeftHandSide;
        case utils_1.AST_NODE_TYPES.TaggedTemplateExpression:
        case utils_1.AST_NODE_TYPES.MemberExpression:
        case utils_1.AST_NODE_TYPES.MetaProperty:
            return OperatorPrecedence.Member;
        case utils_1.AST_NODE_TYPES.TSAsExpression:
            return OperatorPrecedence.Relational;
        case utils_1.AST_NODE_TYPES.ThisExpression:
        case utils_1.AST_NODE_TYPES.Super:
        case utils_1.AST_NODE_TYPES.Identifier:
        case utils_1.AST_NODE_TYPES.PrivateIdentifier:
        case utils_1.AST_NODE_TYPES.Literal:
        case utils_1.AST_NODE_TYPES.ArrayExpression:
        case utils_1.AST_NODE_TYPES.ObjectExpression:
        case utils_1.AST_NODE_TYPES.FunctionExpression:
        case utils_1.AST_NODE_TYPES.ClassExpression:
        case utils_1.AST_NODE_TYPES.TemplateLiteral:
        case utils_1.AST_NODE_TYPES.JSXElement:
        case utils_1.AST_NODE_TYPES.JSXFragment:
            // we don't have nodes for these cases
            // case SyntaxKind.ParenthesizedExpression:
            // case SyntaxKind.OmittedExpression:
            return OperatorPrecedence.Primary;
        default:
            return OperatorPrecedence.Invalid;
    }
}
function getOperatorPrecedence(nodeKind, operatorKind, hasArguments) {
    switch (nodeKind) {
        // A list of comma-separated expressions. This node is only created by transformations.
        case typescript_1.SyntaxKind.CommaListExpression:
            return OperatorPrecedence.Comma;
        case typescript_1.SyntaxKind.SpreadElement:
            return OperatorPrecedence.Spread;
        case typescript_1.SyntaxKind.YieldExpression:
            return OperatorPrecedence.Yield;
        case typescript_1.SyntaxKind.ConditionalExpression:
            return OperatorPrecedence.Conditional;
        case typescript_1.SyntaxKind.BinaryExpression:
            switch (operatorKind) {
                case typescript_1.SyntaxKind.AmpersandAmpersandEqualsToken:
                case typescript_1.SyntaxKind.AmpersandEqualsToken:
                case typescript_1.SyntaxKind.AsteriskAsteriskEqualsToken:
                case typescript_1.SyntaxKind.AsteriskEqualsToken:
                case typescript_1.SyntaxKind.BarBarEqualsToken:
                case typescript_1.SyntaxKind.BarEqualsToken:
                case typescript_1.SyntaxKind.CaretEqualsToken:
                case typescript_1.SyntaxKind.EqualsToken:
                case typescript_1.SyntaxKind.GreaterThanGreaterThanEqualsToken:
                case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
                case typescript_1.SyntaxKind.LessThanLessThanEqualsToken:
                case typescript_1.SyntaxKind.MinusEqualsToken:
                case typescript_1.SyntaxKind.PercentEqualsToken:
                case typescript_1.SyntaxKind.PlusEqualsToken:
                case typescript_1.SyntaxKind.QuestionQuestionEqualsToken:
                case typescript_1.SyntaxKind.SlashEqualsToken:
                    return OperatorPrecedence.Assignment;
                case typescript_1.SyntaxKind.CommaToken:
                    return OperatorPrecedence.Comma;
                default:
                    return getBinaryOperatorPrecedence(operatorKind);
            }
        // TODO: Should prefix `++` and `--` be moved to the `Update` precedence?
        case typescript_1.SyntaxKind.TypeAssertionExpression:
        case typescript_1.SyntaxKind.NonNullExpression:
        case typescript_1.SyntaxKind.PrefixUnaryExpression:
        case typescript_1.SyntaxKind.TypeOfExpression:
        case typescript_1.SyntaxKind.VoidExpression:
        case typescript_1.SyntaxKind.DeleteExpression:
        case typescript_1.SyntaxKind.AwaitExpression:
            return OperatorPrecedence.Unary;
        case typescript_1.SyntaxKind.PostfixUnaryExpression:
            return OperatorPrecedence.Update;
        case typescript_1.SyntaxKind.CallExpression:
            return OperatorPrecedence.LeftHandSide;
        case typescript_1.SyntaxKind.NewExpression:
            return hasArguments
                ? OperatorPrecedence.Member
                : OperatorPrecedence.LeftHandSide;
        case typescript_1.SyntaxKind.TaggedTemplateExpression:
        case typescript_1.SyntaxKind.PropertyAccessExpression:
        case typescript_1.SyntaxKind.ElementAccessExpression:
        case typescript_1.SyntaxKind.MetaProperty:
            return OperatorPrecedence.Member;
        case typescript_1.SyntaxKind.AsExpression:
        case typescript_1.SyntaxKind.SatisfiesExpression:
            return OperatorPrecedence.Relational;
        case typescript_1.SyntaxKind.ThisKeyword:
        case typescript_1.SyntaxKind.SuperKeyword:
        case typescript_1.SyntaxKind.Identifier:
        case typescript_1.SyntaxKind.PrivateIdentifier:
        case typescript_1.SyntaxKind.NullKeyword:
        case typescript_1.SyntaxKind.TrueKeyword:
        case typescript_1.SyntaxKind.FalseKeyword:
        case typescript_1.SyntaxKind.NumericLiteral:
        case typescript_1.SyntaxKind.BigIntLiteral:
        case typescript_1.SyntaxKind.StringLiteral:
        case typescript_1.SyntaxKind.ArrayLiteralExpression:
        case typescript_1.SyntaxKind.ObjectLiteralExpression:
        case typescript_1.SyntaxKind.FunctionExpression:
        case typescript_1.SyntaxKind.ArrowFunction:
        case typescript_1.SyntaxKind.ClassExpression:
        case typescript_1.SyntaxKind.RegularExpressionLiteral:
        case typescript_1.SyntaxKind.NoSubstitutionTemplateLiteral:
        case typescript_1.SyntaxKind.TemplateExpression:
        case typescript_1.SyntaxKind.ParenthesizedExpression:
        case typescript_1.SyntaxKind.OmittedExpression:
        case typescript_1.SyntaxKind.JsxElement:
        case typescript_1.SyntaxKind.JsxSelfClosingElement:
        case typescript_1.SyntaxKind.JsxFragment:
            return OperatorPrecedence.Primary;
        default:
            return OperatorPrecedence.Invalid;
    }
}
function getBinaryOperatorPrecedence(kind) {
    switch (kind) {
        case '-':
        case '+':
        case typescript_1.SyntaxKind.MinusToken:
        case typescript_1.SyntaxKind.PlusToken:
            return OperatorPrecedence.Additive;
        case '!=':
        case '!==':
        case '==':
        case '===':
        case typescript_1.SyntaxKind.EqualsEqualsEqualsToken:
        case typescript_1.SyntaxKind.EqualsEqualsToken:
        case typescript_1.SyntaxKind.ExclamationEqualsEqualsToken:
        case typescript_1.SyntaxKind.ExclamationEqualsToken:
            return OperatorPrecedence.Equality;
        case '??':
        case typescript_1.SyntaxKind.QuestionQuestionToken:
            return OperatorPrecedence.Coalesce;
        case '*':
        case '/':
        case '%':
        case typescript_1.SyntaxKind.AsteriskToken:
        case typescript_1.SyntaxKind.PercentToken:
        case typescript_1.SyntaxKind.SlashToken:
            return OperatorPrecedence.Multiplicative;
        case '**':
        case typescript_1.SyntaxKind.AsteriskAsteriskToken:
            return OperatorPrecedence.Exponentiation;
        case '&':
        case typescript_1.SyntaxKind.AmpersandToken:
            return OperatorPrecedence.BitwiseAND;
        case '&&':
        case typescript_1.SyntaxKind.AmpersandAmpersandToken:
            return OperatorPrecedence.LogicalAND;
        case '^':
        case typescript_1.SyntaxKind.CaretToken:
            return OperatorPrecedence.BitwiseXOR;
        case '<':
        case '<=':
        case '>':
        case '>=':
        case 'in':
        case 'instanceof':
        case typescript_1.SyntaxKind.AsKeyword:
        case typescript_1.SyntaxKind.GreaterThanEqualsToken:
        case typescript_1.SyntaxKind.GreaterThanToken:
        case typescript_1.SyntaxKind.InKeyword:
        case typescript_1.SyntaxKind.InstanceOfKeyword:
        case typescript_1.SyntaxKind.LessThanEqualsToken:
        case typescript_1.SyntaxKind.LessThanToken:
            // case 'as': -- we don't have a token for this
            return OperatorPrecedence.Relational;
        case '<<':
        case '>>':
        case '>>>':
        case typescript_1.SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
        case typescript_1.SyntaxKind.GreaterThanGreaterThanToken:
        case typescript_1.SyntaxKind.LessThanLessThanToken:
            return OperatorPrecedence.Shift;
        case '|':
        case typescript_1.SyntaxKind.BarToken:
            return OperatorPrecedence.BitwiseOR;
        case '||':
        case typescript_1.SyntaxKind.BarBarToken:
            return OperatorPrecedence.LogicalOR;
    }
    // -1 is lower than all other precedences.  Returning it will cause binary expression
    // parsing to stop.
    return -1;
}
//# sourceMappingURL=getOperatorPrecedence.js.map