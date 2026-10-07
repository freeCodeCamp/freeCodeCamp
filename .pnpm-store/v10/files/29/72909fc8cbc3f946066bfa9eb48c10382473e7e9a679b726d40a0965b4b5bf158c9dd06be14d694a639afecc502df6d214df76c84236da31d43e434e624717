"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statements = exports.statement = exports.smart = exports.program = exports.expression = void 0;
var _t = require("@babel/types");
const {
  assertExpressionStatement
} = _t;
function makeStatementFormatter(fn) {
  return {
    code: str => `/* @babel/template */;\n${str}`,
    validate: () => {},
    unwrap: ast => {
      return fn(ast.program.body.slice(1));
    }
  };
}
const smart = exports.smart = makeStatementFormatter(body => {
  if (body.length > 1) {
    return body;
  } else {
    return body[0];
  }
});
const statements = exports.statements = makeStatementFormatter(body => body);
const statement = exports.statement = makeStatementFormatter(body => {
  if (body.length === 0) {
    throw new Error("Found nothing to return.");
  }
  if (body.length > 1) {
    throw new Error("Found multiple statements but wanted one");
  }
  return body[0];
});
const expression = exports.expression = {
  code: str => `(\n${str}\n)`,
  validate: ast => {
    if (ast.program.body.length > 1) {
      throw new Error("Found multiple statements but wanted one");
    }
    if (expression.unwrap(ast).start === 0) {
      throw new Error("Parse result included parens.");
    }
  },
  unwrap: ({
    program
  }) => {
    const [stmt] = program.body;
    assertExpressionStatement(stmt);
    return stmt.expression;
  }
};
const program = exports.program = {
  code: str => str,
  validate: () => {},
  unwrap: ast => ast.program
};

//# sourceMappingURL=formatters.js.map
