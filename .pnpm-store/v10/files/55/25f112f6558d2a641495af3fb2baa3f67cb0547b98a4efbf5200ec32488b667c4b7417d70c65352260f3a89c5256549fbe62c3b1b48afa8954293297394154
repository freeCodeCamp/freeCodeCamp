"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;

var t = require("../../index"); // func and call_indirect instructions can either define a signature inline, or
// reference a signature, e.g.
//
// ;; inline signature
// (func (result i64)
//   (i64.const 2)
// )
// ;; signature reference
// (type (func (result i64)))
// (func (type 0)
//   (i64.const 2))
// )
//
// this AST transform denormalises the type references, making all signatures within the module
// inline.


function transform(ast) {
  var typeInstructions = [];
  t.traverse(ast, {
    TypeInstruction: function TypeInstruction(_ref) {
      var node = _ref.node;
      typeInstructions.push(node);
    }
  });

  if (!typeInstructions.length) {
    return;
  }

  function denormalizeSignature(signature) {
    // signature referenced by identifier
    if (signature.type === "Identifier") {
      var identifier = signature;
      var typeInstruction = typeInstructions.find(function (t) {
        return t.id.type === identifier.type && t.id.value === identifier.value;
      });

      if (!typeInstruction) {
        throw new Error("A type instruction reference was not found ".concat(JSON.stringify(signature)));
      }

      return typeInstruction.functype;
    } // signature referenced by index


    if (signature.type === "NumberLiteral") {
      var signatureRef = signature;
      var _typeInstruction = typeInstructions[signatureRef.value];
      return _typeInstruction.functype;
    }

    return signature;
  }

  t.traverse(ast, {
    Func: function (_Func) {
      function Func(_x) {
        return _Func.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func.toString();
      };

      return Func;
    }(function (_ref2) {
      var node = _ref2.node;
      node.signature = denormalizeSignature(node.signature);
    }),
    CallIndirectInstruction: function CallIndirectInstruction(_ref3) {
      var node = _ref3.node;
      node.signature = denormalizeSignature(node.signature);
    }
  });
}