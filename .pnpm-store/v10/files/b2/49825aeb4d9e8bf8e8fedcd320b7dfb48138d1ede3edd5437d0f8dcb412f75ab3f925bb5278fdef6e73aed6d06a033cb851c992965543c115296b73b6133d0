"use strict";

var _redux = require("../../redux");
var _eslintRulesHelpers = require("../eslint-rules-helpers");
const defs = {
  ArrowFunctionExpression: {
    messageId: `anonymousArrowFunction`
  },
  FunctionDeclaration: {
    messageId: `anonymousFunctionDeclaration`,
    forbid: node => !node.declaration.id
  },
  ClassDeclaration: {
    messageId: `anonymousClass`,
    forbid: node => !node.declaration.id
  }
};
const noAnonymousExports = {
  meta: {
    type: `problem`,
    messages: {
      anonymousArrowFunction: `Anonymous arrow functions cause Fast Refresh to not preserve local component state.

       Please add a name to your function, for example:

       Before:
       export default () => {}

       After:
       const Named = () => {}
       export default Named;
`,
      anonymousFunctionDeclaration: `Anonymous function declarations cause Fast Refresh to not preserve local component state.

       Please add a name to your function, for example:

       Before:
       export default function () {}

       After:
       export default function Named() {}
`,
      anonymousClass: `Anonymous classes cause Fast Refresh to not preserve local component state.

       Please add a name to your class, for example:

       Before:
       export default class extends Component {}

       After:
       export default class Named extends Component {}
`
    }
  },
  create: context => {
    if (!(0, _eslintRulesHelpers.isPageTemplate)(_redux.store, context)) {
      return {};
    }
    return {
      ExportDefaultDeclaration: node => {
        // @ts-ignore
        const type = node.declaration.type;
        const def = defs[type];
        if (def && (!def.forbid || def.forbid(node))) {
          context.report({
            node,
            messageId: def.messageId
          });
        }
      }
    };
  }
};
module.exports = noAnonymousExports;
//# sourceMappingURL=no-anonymous-exports-page-templates.js.map