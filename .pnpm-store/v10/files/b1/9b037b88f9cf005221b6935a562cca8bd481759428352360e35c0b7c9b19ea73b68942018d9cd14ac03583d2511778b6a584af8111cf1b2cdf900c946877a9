"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  type: 'string'
}];

const create = context => {
  const pattern = new RegExp(context.options[0] || '^([A-Z][a-z0-9]*)+Type$');

  const checkInterface = interfaceDeclarationNode => {
    const interfaceIdentifierName = interfaceDeclarationNode.id.name;

    if (!pattern.test(interfaceIdentifierName)) {
      context.report(interfaceDeclarationNode, 'Interface identifier \'{{name}}\' does not match pattern \'{{pattern}}\'.', {
        name: interfaceIdentifierName,
        pattern: pattern.toString()
      });
    }
  };

  return {
    InterfaceDeclaration: checkInterface
  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;