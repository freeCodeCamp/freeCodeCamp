"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// We enumerate here all the React components Flow patches internally. It's because we don't want
// to fail on otherwise valid type names (but rather take the actual implementation into account).
// See: https://github.com/facebook/flow/blob/e23278bc17e6a0b5a2c52719d24b6bc5bb716931/src/services/code_action/insert_type_utils.ml#L607-L610
const ReactComponents = ['AbstractComponent', 'ChildrenArray', 'ComponentType', 'Config', 'Context', 'Element', 'ElementConfig', 'ElementProps', 'ElementRef', 'ElementType', 'Key', 'Node', 'Portal', 'Ref', 'StatelessFunctionalComponent'];

const create = context => {
  return {
    Identifier(node) {
      const match = node.name.match(/^React\$(?<internalTypeName>.+)/);

      if (match !== null && match.groups !== null && match.groups !== undefined) {
        const {
          internalTypeName
        } = match.groups;

        if (ReactComponents.includes(internalTypeName)) {
          const validName = `React.${internalTypeName}`;
          context.report({
            data: {
              invalidName: node.name,
              validName
            },
            message: 'Type identifier \'{{invalidName}}\' is not allowed. Use \'{{validName}}\' instead.',
            node
          });
        }
      }
    }

  };
};

var _default = {
  create
};
exports.default = _default;
module.exports = exports.default;