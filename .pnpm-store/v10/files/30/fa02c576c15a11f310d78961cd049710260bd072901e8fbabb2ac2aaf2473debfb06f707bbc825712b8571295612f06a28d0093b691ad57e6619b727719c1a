"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-unsafe-unary-minus',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require unary negation to take a number',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            unaryMinus: 'Argument of unary negation should be assignable to number | bigint but is {{type}} instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            UnaryExpression(node) {
                if (node.operator !== '-') {
                    return;
                }
                const services = util.getParserServices(context);
                const argType = util.getConstrainedTypeAtLocation(services, node.argument);
                const checker = services.program.getTypeChecker();
                if (tsutils
                    .unionConstituents(argType)
                    .some(type => !tsutils.isTypeFlagSet(type, ts.TypeFlags.Any |
                    ts.TypeFlags.Never |
                    ts.TypeFlags.BigIntLike |
                    ts.TypeFlags.NumberLike))) {
                    context.report({
                        node,
                        messageId: 'unaryMinus',
                        data: { type: checker.typeToString(argType) },
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-unary-minus.js.map