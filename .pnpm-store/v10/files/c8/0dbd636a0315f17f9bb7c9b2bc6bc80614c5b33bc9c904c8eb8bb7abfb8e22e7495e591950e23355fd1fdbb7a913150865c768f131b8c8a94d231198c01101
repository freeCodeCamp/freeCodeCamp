"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternLikeCommon = exports.importAttributes = exports.functionTypeAnnotationCommon = exports.functionDeclarationCommon = exports.functionCommon = exports.classMethodOrPropertyUnionShapeCommon = exports.classMethodOrPropertyCommon = exports.classMethodOrDeclareMethodCommon = void 0;
var _is = require("../validators/is.js");
var _isValidIdentifier = require("../validators/isValidIdentifier.js");
var _helperValidatorIdentifier = require("@babel/helper-validator-identifier");
var _helperStringParser = require("@babel/helper-string-parser");
var _index = require("../constants/index.js");
var _utils = require("./utils.js");
const classMethodOrPropertyUnionShapeCommon = (allowPrivateName = false) => ({
  unionShape: {
    discriminator: "computed",
    shapes: [{
      name: "computed",
      value: [true],
      properties: {
        key: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    }, {
      name: "nonComputed",
      value: [false],
      properties: {
        key: {
          validate: allowPrivateName ? (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName") : (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral")
        }
      }
    }]
  }
});
exports.classMethodOrPropertyUnionShapeCommon = classMethodOrPropertyUnionShapeCommon;
const defineType = (0, _utils.defineAliasedType)("Standardized");
defineType("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils.arrayOf)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement")),
      default: !process.env.BABEL_TYPES_8_BREAKING ? [] : undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
defineType("AssignmentExpression", {
  fields: {
    operator: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("string") : Object.assign(function () {
        const identifier = (0, _utils.assertOneOf)(..._index.ASSIGNMENT_OPERATORS);
        const pattern = (0, _utils.assertOneOf)("=");
        return function (node, key, val) {
          const validator = (0, _is.default)("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }(), {
        oneOf: _index.ASSIGNMENT_OPERATORS
      })
    },
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal", "OptionalMemberExpression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression", "OptionalMemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
defineType("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = (0, _utils.assertNodeType)("Expression");
        const inOp = (0, _utils.assertNodeType)("Expression", "PrivateName");
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
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
defineType("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
defineType("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
defineType("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
defineType("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils.arrayOfType)("Directive"),
      default: []
    },
    body: (0, _utils.validateArrayOfType)("Statement")
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
defineType("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType("CallExpression", {
  visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
    },
    arguments: (0, _utils.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    }
  }, process.env.BABEL_TYPES_8_BREAKING ? {} : {
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
defineType("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
defineType("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
defineType("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType("DebuggerStatement", {
  aliases: ["Statement"]
});
defineType("DoWhileStatement", {
  builder: ["test", "body"],
  visitor: ["body", "test"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
defineType("EmptyStatement", {
  aliases: ["Statement"]
});
defineType("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
defineType("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils.assertNodeType)("Program")
    },
    comments: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) : (0, _utils.assertEach)((0, _utils.assertNodeType)("CommentBlock", "CommentLine")),
      optional: true
    },
    tokens: {
      validate: (0, _utils.assertEach)(Object.assign(() => {}, {
        type: "any"
      })),
      optional: true
    }
  }
});
defineType("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = () => ({
  params: (0, _utils.validateArrayOfType)("FunctionParameter"),
  generator: {
    default: false
  },
  async: {
    default: false
  }
});
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = () => ({
  returnType: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
});
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = () => Object.assign({}, functionCommon(), {
  declare: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils.assertNodeType)("Identifier"),
    optional: true
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
defineType("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "typeParameters", "params", "predicate", "returnType", "body"],
  fields: Object.assign({}, functionDeclarationCommon(), functionTypeAnnotationCommon(), {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    },
    predicate: {
      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
defineType("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    },
    predicate: {
      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  })
});
const patternLikeCommon = () => ({
  typeAnnotation: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  decorators: {
    validate: (0, _utils.arrayOfType)("Decorator"),
    optional: true
  }
});
exports.patternLikeCommon = patternLikeCommon;
defineType("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "FunctionParameter", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon(), {
    name: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!(0, _isValidIdentifier.default)(val, false)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      })) : (0, _utils.assertValueType)("string")
    }
  }),
  validate: process.env.BABEL_TYPES_8_BREAKING ? function (parent, key, node) {
    const match = /\.(\w+)$/.exec(key.toString());
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };
    if (parentKey === "property") {
      if ((0, _is.default)("MemberExpression", parent, nonComp)) return;
      if ((0, _is.default)("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if ((0, _is.default)("Property", parent, nonComp)) return;
      if ((0, _is.default)("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if ((0, _is.default)("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if ((0, _is.default)("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if ((0, _is.default)("MetaProperty", parent, {
        meta: node
      })) return;
    }
    if (((0, _helperValidatorIdentifier.isKeyword)(node.name) || (0, _helperValidatorIdentifier.isReservedWord)(node.name, false)) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  } : undefined
});
defineType("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("number"), Object.assign(function (node, key, val) {
        if (1 / val < 0 || !Number.isFinite(val)) {
          const error = new Error("NumericLiterals must be non-negative finite numbers. " + `You can use t.valueToNode(${val}) instead.`);
        }
      }, {
        type: "number"
      }))
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils.assertValueType)("string")
    },
    flags: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("string"), Object.assign(function (node, key, val) {
        const invalid = /[^dgimsuvy]/.exec(val);
        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })) : (0, _utils.assertValueType)("string"),
      default: ""
    }
  }
});
defineType("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("MemberExpression", {
  builder: ["object", "property", "computed", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["optional"] : [])],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal", "PatternLike"],
  unionShape: {
    discriminator: "computed",
    shapes: [{
      name: "computed",
      value: [true],
      properties: {
        property: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    }, {
      name: "nonComputed",
      value: [false],
      properties: {
        property: {
          validate: (0, _utils.assertNodeType)("Identifier", "PrivateName")
        }
      }
    }]
  },
  fields: Object.assign({
    object: {
      validate: (0, _utils.assertNodeType)("Expression", "Super")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
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
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  } : {})
});
defineType("NewExpression", {
  inherits: "CallExpression"
});
defineType("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceType: {
      validate: (0, _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils.arrayOfType)("Directive"),
      default: []
    },
    body: (0, _utils.validateArrayOfType)("Statement")
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
defineType("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: (0, _utils.validateArrayOfType)("ObjectMethod", "ObjectProperty", "SpreadElement")
  }
});
defineType("ObjectMethod", Object.assign({
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"]
}, classMethodOrPropertyUnionShapeCommon(), {
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    kind: Object.assign({
      validate: (0, _utils.assertOneOf)("method", "get", "set")
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
}));
defineType("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
  unionShape: {
    discriminator: "computed",
    shapes: [{
      name: "computed",
      value: [true],
      properties: {
        key: {
          validate: (0, _utils.assertNodeType)("Expression")
        }
      }
    }, {
      name: "nonComputed",
      value: [false],
      properties: {
        key: {
          validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName")
        }
      }
    }]
  },
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
        });
        return validator;
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, shorthand) {
        if (!shorthand) return;
        if (node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
        if (!(0, _is.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }, {
        type: "boolean"
      })) : (0, _utils.assertValueType)("boolean"),
      default: false
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    }
  },
  visitor: ["decorators", "key", "value"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
    const pattern = (0, _utils.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSSatisfiesExpression", "TSNonNullExpression", "TSTypeAssertion");
    const expression = (0, _utils.assertNodeType)("Expression");
    return function (parent, key, node) {
      const validator = (0, _is.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
defineType("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["FunctionParameter", "PatternLike", "LVal"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon(), {
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression", "RestElement", "AssignmentPattern") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    }
  }),
  validate: process.env.BABEL_TYPES_8_BREAKING ? function (parent, key) {
    const match = /(\w+)\[(\d+)\]/.exec(key.toString());
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;
    if (parent[listKey].length > +index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  } : undefined
});
defineType("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: (0, _utils.validateArrayOfType)("Expression")
  },
  aliases: ["Expression"]
});
defineType("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: (0, _utils.validateArrayOfType)("Statement")
  }
});
defineType("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: (0, _utils.validateArrayOfType)("SwitchCase")
  }
});
defineType("ThisExpression", {
  aliases: ["Expression"]
});
defineType("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      })) : (0, _utils.assertNodeType)("BlockStatement")
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
defineType("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
defineType("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("Expression") : (0, _utils.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._index.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
defineType("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.assertOneOf)("var", "let", "const", "using", "await using")
    },
    declarations: (0, _utils.validateArrayOfType)("VariableDeclarator")
  },
  validate: process.env.BABEL_TYPES_8_BREAKING ? (() => {
    const withoutInit = (0, _utils.assertNodeType)("Identifier", "Placeholder");
    const constOrLetOrVar = (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "Placeholder");
    const usingOrAwaitUsing = (0, _utils.assertNodeType)("Identifier", "VoidPattern", "Placeholder");
    return function (parent, key, node) {
      const {
        kind,
        declarations
      } = node;
      const parentIsForX = (0, _is.default)("ForXStatement", parent, {
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
  })() : undefined
});
defineType("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertNodeType)("LVal", "VoidPattern") : (0, _utils.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "VoidPattern")
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
defineType("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    }
  })
});
defineType("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "PatternLike")))
    }
  })
});
defineType("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["typeParameters", "params", "predicate", "returnType", "body"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon(), functionTypeAnnotationCommon(), {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    },
    predicate: {
      validate: (0, _utils.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
      optional: true
    }
  })
});
defineType("ClassBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")
  }
});
defineType("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    ["superTypeParameters"]: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
defineType("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    ["superTypeParameters"]: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils.arrayOfType)("TSExpressionWithTypeArguments", "ClassImplements"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    mixins: {
      validate: (0, _utils.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: !process.env.BABEL_TYPES_8_BREAKING ? undefined : function () {
    const identifier = (0, _utils.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(0, _is.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
const importAttributes = exports.importAttributes = {
  attributes: {
    optional: true,
    validate: (0, _utils.arrayOfType)("ImportAttribute")
  }
};
importAttributes.assertions = {
  deprecated: true,
  optional: true,
  validate: (0, _utils.arrayOfType)("ImportAttribute")
};
defineType("ExportAllDeclaration", {
  builder: ["source", "attributes"],
  visitor: ["source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: Object.assign({
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  }, importAttributes)
});
defineType("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: {
    declaration: (0, _utils.validateType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression"),
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("value"))
  }
});
defineType("ExportNamedDeclaration", {
  builder: ["declaration", "specifiers", "source", "attributes"],
  visitor: ["declaration", "specifiers", "source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration", "ExportDeclaration"],
  fields: Object.assign({
    declaration: {
      optional: true,
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      })) : (0, _utils.assertNodeType)("Declaration")
    }
  }, importAttributes, {
    specifiers: {
      default: [],
      validate: (0, _utils.arrayOf)(function () {
        const sourced = (0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils.assertNodeType)("ExportSpecifier");
        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
        return Object.assign(function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"]
        });
      }())
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("type", "value"))
  })
});
defineType("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, _utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils.assertNodeType)("VariableDeclaration", "LVal");
        }
        const declaration = (0, _utils.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSSatisfiesExpression", "TSTypeAssertion", "TSNonNullExpression");
        return Object.assign(function (node, key, val) {
          if ((0, _is.default)("VariableDeclaration", val)) {
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
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
defineType("ImportDeclaration", {
  builder: ["specifiers", "source", "attributes"],
  visitor: ["specifiers", "source", "attributes", "assertions"],
  aliases: ["Statement", "Declaration", "ImportOrExportDeclaration"],
  fields: Object.assign({}, importAttributes, {
    module: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    phase: {
      default: null,
      validate: (0, _utils.assertOneOf)("source", "defer")
    },
    specifiers: (0, _utils.validateArrayOfType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"),
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  })
});
defineType("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("ImportSpecifier", {
  visitor: ["imported", "local"],
  builder: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType("ImportExpression", {
  visitor: ["source", "options"],
  aliases: ["Expression"],
  fields: {
    phase: {
      default: null,
      validate: (0, _utils.assertOneOf)("source", "defer")
    },
    source: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    options: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
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
        if (!(0, _is.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      })) : (0, _utils.assertNodeType)("Identifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = () => ({
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral");
      const computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
  }
});
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = () => Object.assign({}, functionCommon(), classMethodOrPropertyCommon(), {
  params: (0, _utils.validateArrayOfType)("FunctionParameter", "TSParameterProperty"),
  kind: {
    validate: (0, _utils.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.arrayOfType)("Decorator"),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
defineType("ClassMethod", Object.assign({
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"]
}, classMethodOrPropertyUnionShapeCommon(), {
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
}));
defineType("ObjectPattern", {
  visitor: ["decorators", "properties", "typeAnnotation"],
  builder: ["properties"],
  aliases: ["FunctionParameter", "Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon(), {
    properties: (0, _utils.validateArrayOfType)("RestElement", "ObjectProperty")
  })
});
defineType("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("Super", {
  aliases: ["Expression"]
});
defineType("TaggedTemplateExpression", {
  visitor: ["tag", "typeParameters", "quasi"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    },
    ["typeParameters"]: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils.chain)((0, _utils.assertShape)({
        raw: {
          validate: (0, _utils.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils.assertValueType)("string"),
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
        } = (0, _helperStringParser.readStringContents)("template", raw, 0, 0, 0, {
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
defineType("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: (0, _utils.validateArrayOfType)("TemplateElement"),
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.chain)((0, _utils.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })) : (0, _utils.assertValueType)("boolean"),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
defineType("Import", {
  aliases: ["Expression"]
});
defineType("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier");
        const computed = (0, _utils.assertNodeType)("Expression");
        const validator = Object.assign(function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        }, {
          oneOfNodeTypes: ["Expression", "Identifier"]
        });
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    }
  }
});
defineType("OptionalCallExpression", {
  visitor: ["callee", "typeParameters", "typeArguments", "arguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: (0, _utils.validateArrayOfType)("Expression", "SpreadElement", "ArgumentPlaceholder"),
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils.assertValueType)("boolean") : (0, _utils.chain)((0, _utils.assertValueType)("boolean"), (0, _utils.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    }
  }, {
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
defineType("ClassProperty", Object.assign({
  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"]
}, classMethodOrPropertyUnionShapeCommon(), {
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  })
}));
defineType("ClassAccessorProperty", Object.assign({
  visitor: ["decorators", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property", "Accessor"]
}, classMethodOrPropertyUnionShapeCommon(true), {
  fields: Object.assign({}, classMethodOrPropertyCommon(), {
    key: {
      validate: (0, _utils.chain)(function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  })
}));
defineType("ClassPrivateProperty", {
  visitor: ["decorators", "variance", "key", "typeAnnotation", "value"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.arrayOfType)("Decorator"),
      optional: true
    },
    static: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils.assertNodeType)("Variance"),
      optional: true
    }
  }
});
defineType("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["decorators", "key", "typeParameters", "params", "returnType", "body"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon(), functionTypeAnnotationCommon(), {
    kind: {
      validate: (0, _utils.assertOneOf)("get", "set", "method"),
      default: "method"
    },
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
defineType("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
defineType("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});
defineType("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});

//# sourceMappingURL=core.js.map
