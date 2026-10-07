"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transpileEnum;
exports.translateEnumValues = translateEnumValues;
var _core = require("@babel/core");
var _assert = require("assert");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
const ENUMS = new WeakMap();
const buildEnumWrapper = _core.template.expression(`
    (function (ID) {
      ASSIGNMENTS;
      return ID;
    })(INIT)
  `);
function transpileEnum(path, t) {
  const {
    node,
    parentPath
  } = path;
  if (node.declare) {
    path.remove();
    return;
  }
  const name = node.id.name;
  const {
    fill,
    data,
    isPure
  } = enumFill(path, t, node.id);
  switch (parentPath.type) {
    case "BlockStatement":
    case "ExportNamedDeclaration":
    case "Program":
      {
        const isGlobal = t.isProgram(path.parent);
        const isSeen = seen(parentPath);
        let init = t.objectExpression([]);
        if (isSeen || isGlobal) {
          init = t.logicalExpression("||", t.cloneNode(fill.ID), init);
        }
        const enumIIFE = buildEnumWrapper(Object.assign({}, fill, {
          INIT: init
        }));
        if (isPure) (0, _helperAnnotateAsPure.default)(enumIIFE);
        if (isSeen) {
          const toReplace = parentPath.isExportDeclaration() ? parentPath : path;
          toReplace.replaceWith(t.expressionStatement(t.assignmentExpression("=", t.cloneNode(node.id), enumIIFE)));
        } else {
          path.scope.registerDeclaration(path.replaceWith(t.variableDeclaration(isGlobal ? "var" : "let", [t.variableDeclarator(node.id, enumIIFE)]))[0]);
        }
        ENUMS.set(path.scope.getBindingIdentifier(name), data);
        break;
      }
    default:
      throw new Error(`Unexpected enum parent '${path.parent.type}`);
  }
  function seen(parentPath) {
    if (parentPath.isExportDeclaration()) {
      return seen(parentPath.parentPath);
    }
    if (parentPath.getData(name)) {
      return true;
    } else {
      parentPath.setData(name, true);
      return false;
    }
  }
}
const buildStringAssignment = (0, _core.template)(`
  ENUM["NAME"] = VALUE;
`);
const buildNumericAssignment = (0, _core.template)(`
  ENUM[ENUM["NAME"] = VALUE] = "NAME";
`);
const buildEnumMember = (isString, options) => (isString ? buildStringAssignment : buildNumericAssignment)(options);
function enumFill(path, t, id) {
  const {
    enumValues: x,
    data,
    isPure
  } = translateEnumValues(path, t);
  const assignments = x.map(([memberName, memberValue]) => buildEnumMember(t.isStringLiteral(memberValue), {
    ENUM: t.cloneNode(id),
    NAME: memberName,
    VALUE: memberValue
  }));
  return {
    fill: {
      ID: t.cloneNode(id),
      ASSIGNMENTS: assignments
    },
    data,
    isPure
  };
}
function ReferencedIdentifier(expr, state) {
  const {
    seen,
    path,
    t
  } = state;
  const name = expr.node.name;
  if (seen.has(name) && !expr.scope.hasOwnBinding(name)) {
    expr.replaceWith(t.memberExpression(t.cloneNode(path.node.id), t.cloneNode(expr.node)));
    expr.skip();
  }
}
const enumSelfReferenceVisitor = {
  ReferencedIdentifier
};
function translateEnumValues(path, t) {
  const seen = new Map();
  let constValue = -1;
  let lastName;
  let isPure = true;
  const enumValues = path.get("members").map(memberPath => {
    const member = memberPath.node;
    const name = t.isIdentifier(member.id) ? member.id.name : member.id.value;
    const initializerPath = memberPath.get("initializer");
    const initializer = member.initializer;
    let value;
    if (initializer) {
      constValue = computeConstantValue(initializerPath, seen);
      if (constValue !== undefined) {
        seen.set(name, constValue);
        _assert(typeof constValue === "number" || typeof constValue === "string");
        if (constValue === Infinity || Number.isNaN(constValue)) {
          value = t.identifier(String(constValue));
        } else if (constValue === -Infinity) {
          value = t.unaryExpression("-", t.identifier("Infinity"));
        } else {
          value = t.valueToNode(constValue);
        }
      } else {
        isPure && (isPure = initializerPath.isPure());
        if (initializerPath.isReferencedIdentifier()) {
          ReferencedIdentifier(initializerPath, {
            t,
            seen,
            path
          });
        } else {
          initializerPath.traverse(enumSelfReferenceVisitor, {
            t,
            seen,
            path
          });
        }
        value = initializerPath.node;
        seen.set(name, undefined);
      }
    } else if (typeof constValue === "number") {
      constValue += 1;
      value = t.numericLiteral(constValue);
      seen.set(name, constValue);
    } else if (typeof constValue === "string") {
      throw path.buildCodeFrameError("Enum member must have initializer.");
    } else {
      const lastRef = t.memberExpression(t.cloneNode(path.node.id), t.stringLiteral(lastName), true);
      value = t.binaryExpression("+", t.numericLiteral(1), lastRef);
      seen.set(name, undefined);
    }
    lastName = name;
    return [name, value];
  });
  return {
    isPure,
    data: seen,
    enumValues
  };
}
function computeConstantValue(path, prevMembers, seen = new Set()) {
  return evaluate(path);
  function evaluate(path) {
    const expr = path.node;
    switch (expr.type) {
      case "MemberExpression":
        return evaluateRef(path, prevMembers, seen);
      case "StringLiteral":
        return expr.value;
      case "UnaryExpression":
        return evalUnaryExpression(path);
      case "BinaryExpression":
        return evalBinaryExpression(path);
      case "NumericLiteral":
        return expr.value;
      case "ParenthesizedExpression":
        return evaluate(path.get("expression"));
      case "Identifier":
        return evaluateRef(path, prevMembers, seen);
      case "TemplateLiteral":
        {
          if (expr.quasis.length === 1) {
            return expr.quasis[0].value.cooked;
          }
          const paths = path.get("expressions");
          const quasis = expr.quasis;
          let str = "";
          for (let i = 0; i < quasis.length; i++) {
            str += quasis[i].value.cooked;
            if (i + 1 < quasis.length) {
              const value = evaluateRef(paths[i], prevMembers, seen);
              if (value === undefined) return undefined;
              str += value;
            }
          }
          return str;
        }
      default:
        return undefined;
    }
  }
  function evaluateRef(path, prevMembers, seen) {
    if (path.isMemberExpression()) {
      const expr = path.node;
      const obj = expr.object;
      const prop = expr.property;
      if (!_core.types.isIdentifier(obj) || (expr.computed ? !_core.types.isStringLiteral(prop) : !_core.types.isIdentifier(prop))) {
        return;
      }
      const bindingIdentifier = path.scope.getBindingIdentifier(obj.name);
      const data = ENUMS.get(bindingIdentifier);
      if (!data) return;
      return data.get(prop.computed ? prop.value : prop.name);
    } else if (path.isIdentifier()) {
      const name = path.node.name;
      if (["Infinity", "NaN"].includes(name)) {
        return Number(name);
      }
      let value = prevMembers == null ? void 0 : prevMembers.get(name);
      if (value !== undefined) {
        return value;
      }
      if (seen.has(path.node)) return;
      const bindingInitPath = path.resolve();
      if (bindingInitPath) {
        seen.add(path.node);
        value = computeConstantValue(bindingInitPath, undefined, seen);
        prevMembers == null || prevMembers.set(name, value);
        return value;
      }
    }
  }
  function evalUnaryExpression(path) {
    const value = evaluate(path.get("argument"));
    if (value === undefined) {
      return undefined;
    }
    switch (path.node.operator) {
      case "+":
        return value;
      case "-":
        return -value;
      case "~":
        return ~value;
      default:
        return undefined;
    }
  }
  function evalBinaryExpression(path) {
    const left = evaluate(path.get("left"));
    if (left === undefined) {
      return undefined;
    }
    const right = evaluate(path.get("right"));
    if (right === undefined) {
      return undefined;
    }
    switch (path.node.operator) {
      case "|":
        return left | right;
      case "&":
        return left & right;
      case ">>":
        return left >> right;
      case ">>>":
        return left >>> right;
      case "<<":
        return left << right;
      case "^":
        return left ^ right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "%":
        return left % right;
      case "**":
        return Math.pow(left, right);
      default:
        return undefined;
    }
  }
}

//# sourceMappingURL=enum.js.map
