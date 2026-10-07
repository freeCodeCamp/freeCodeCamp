"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.make = void 0;
var Arr = _interopRequireWildcard(require("./Array.js"));
var Inspectable = _interopRequireWildcard(require("./Inspectable.js"));
var errors_ = _interopRequireWildcard(require("./internal/schema/errors.js"));
var util_ = _interopRequireWildcard(require("./internal/schema/util.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
var ParseResult = _interopRequireWildcard(require("./ParseResult.js"));
var AST = _interopRequireWildcard(require("./SchemaAST.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.10.0
 */

/**
 * @category prettify
 * @since 3.10.0
 */
const make = schema => compile(schema.ast, []);
exports.make = make;
const getPrettyAnnotation = /*#__PURE__*/AST.getAnnotation(AST.PrettyAnnotationId);
const getMatcher = defaultPretty => ast => Option.match(getPrettyAnnotation(ast), {
  onNone: () => defaultPretty,
  onSome: handler => handler()
});
const toString = /*#__PURE__*/getMatcher(a => String(a));
const stringify = /*#__PURE__*/getMatcher(a => JSON.stringify(a));
const formatUnknown = /*#__PURE__*/getMatcher(Inspectable.formatUnknown);
/**
 * @since 3.10.0
 */
const match = exports.match = {
  "Declaration": (ast, go, path) => {
    const annotation = getPrettyAnnotation(ast);
    if (Option.isSome(annotation)) {
      return annotation.value(...ast.typeParameters.map(tp => go(tp, path)));
    }
    throw new Error(errors_.getPrettyMissingAnnotationErrorMessage(path, ast));
  },
  "VoidKeyword": /*#__PURE__*/getMatcher(() => "void(0)"),
  "NeverKeyword": /*#__PURE__*/getMatcher(() => {
    throw new Error(errors_.getPrettyNeverErrorMessage);
  }),
  "Literal": /*#__PURE__*/getMatcher(literal => typeof literal === "bigint" ? `${String(literal)}n` : JSON.stringify(literal)),
  "SymbolKeyword": toString,
  "UniqueSymbol": toString,
  "TemplateLiteral": stringify,
  "UndefinedKeyword": toString,
  "UnknownKeyword": formatUnknown,
  "AnyKeyword": formatUnknown,
  "ObjectKeyword": formatUnknown,
  "StringKeyword": stringify,
  "NumberKeyword": toString,
  "BooleanKeyword": toString,
  "BigIntKeyword": /*#__PURE__*/getMatcher(a => `${String(a)}n`),
  "Enums": stringify,
  "TupleType": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast);
    if (Option.isSome(hook)) {
      return hook.value();
    }
    const elements = ast.elements.map((e, i) => go(e.type, path.concat(i)));
    const rest = ast.rest.map(annotatedAST => go(annotatedAST.type, path));
    return input => {
      const output = [];
      let i = 0;
      // ---------------------------------------------
      // handle elements
      // ---------------------------------------------
      for (; i < elements.length; i++) {
        if (input.length < i + 1) {
          if (ast.elements[i].isOptional) {
            continue;
          }
        } else {
          output.push(elements[i](input[i]));
        }
      }
      // ---------------------------------------------
      // handle rest element
      // ---------------------------------------------
      if (Arr.isNonEmptyReadonlyArray(rest)) {
        const [head, ...tail] = rest;
        for (; i < input.length - tail.length; i++) {
          output.push(head(input[i]));
        }
        // ---------------------------------------------
        // handle post rest elements
        // ---------------------------------------------
        for (let j = 0; j < tail.length; j++) {
          i += j;
          output.push(tail[j](input[i]));
        }
      }
      return "[" + output.join(", ") + "]";
    };
  },
  "TypeLiteral": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast);
    if (Option.isSome(hook)) {
      return hook.value();
    }
    const propertySignaturesTypes = ast.propertySignatures.map(ps => go(ps.type, path.concat(ps.name)));
    const indexSignatureTypes = ast.indexSignatures.map(is => go(is.type, path));
    const expectedKeys = {};
    for (let i = 0; i < propertySignaturesTypes.length; i++) {
      expectedKeys[ast.propertySignatures[i].name] = null;
    }
    return input => {
      const output = [];
      // ---------------------------------------------
      // handle property signatures
      // ---------------------------------------------
      for (let i = 0; i < propertySignaturesTypes.length; i++) {
        const ps = ast.propertySignatures[i];
        const name = ps.name;
        if (ps.isOptional && !Object.prototype.hasOwnProperty.call(input, name)) {
          continue;
        }
        output.push(`${Inspectable.formatPropertyKey(name)}: ${propertySignaturesTypes[i](input[name])}`);
      }
      // ---------------------------------------------
      // handle index signatures
      // ---------------------------------------------
      if (indexSignatureTypes.length > 0) {
        for (let i = 0; i < indexSignatureTypes.length; i++) {
          const type = indexSignatureTypes[i];
          const keys = util_.getKeysForIndexSignature(input, ast.indexSignatures[i].parameter);
          for (const key of keys) {
            if (Object.prototype.hasOwnProperty.call(expectedKeys, key)) {
              continue;
            }
            output.push(`${Inspectable.formatPropertyKey(key)}: ${type(input[key])}`);
          }
        }
      }
      return Arr.isNonEmptyReadonlyArray(output) ? "{ " + output.join(", ") + " }" : "{}";
    };
  },
  "Union": (ast, go, path) => {
    const hook = getPrettyAnnotation(ast);
    if (Option.isSome(hook)) {
      return hook.value();
    }
    const types = ast.types.map(ast => [ParseResult.is({
      ast
    }), go(ast, path)]);
    return a => {
      const index = types.findIndex(([is]) => is(a));
      if (index === -1) {
        throw new Error(errors_.getPrettyNoMatchingSchemaErrorMessage(a, path, ast));
      }
      return types[index][1](a);
    };
  },
  "Suspend": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => {
        const get = util_.memoizeThunk(() => go(ast.f(), path));
        return a => get()(a);
      },
      onSome: handler => handler()
    });
  },
  "Refinement": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => go(ast.from, path),
      onSome: handler => handler()
    });
  },
  "Transformation": (ast, go, path) => {
    return Option.match(getPrettyAnnotation(ast), {
      onNone: () => go(ast.to, path),
      onSome: handler => handler()
    });
  }
};
const compile = /*#__PURE__*/AST.getCompiler(match);
//# sourceMappingURL=Pretty.js.map