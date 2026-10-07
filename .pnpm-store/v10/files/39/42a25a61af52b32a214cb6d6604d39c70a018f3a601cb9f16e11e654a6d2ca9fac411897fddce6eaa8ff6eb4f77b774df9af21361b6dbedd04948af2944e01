"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  enum: ['always', 'always-multiline', 'only-multiline', 'never'],
  type: 'string'
}, {
  enum: ['always', 'always-multiline', 'only-multiline', 'never'],
  type: 'string'
}, {
  enum: ['always', 'always-multiline', 'only-multiline', 'never'],
  type: 'string'
}]; // required for reporting the correct position

const getLast = (property, indexer) => {
  if (!property) {
    return indexer;
  }

  if (!indexer) {
    return property;
  }

  if (property.loc.end.line > indexer.loc.end.line) {
    return property;
  }

  if (indexer.loc.end.line > property.loc.end.line) {
    return indexer;
  }

  if (property.loc.end.column > indexer.loc.end.column) {
    return property;
  }

  return indexer;
};

const create = context => {
  const option = context.options[0] || 'never';
  const interfaceOption = context.options[1] || option;
  const inexactNotationOption = context.options[2] || 'never';
  const sourceCode = context.getSourceCode();

  const getNodeOption = node => {
    if (node.parent.type === 'InterfaceDeclaration') {
      return interfaceOption;
    }

    if (node.inexact) {
      return inexactNotationOption;
    }

    return option;
  };

  const reporter = (node, message, fix) => {
    return () => {
      context.report({
        fix,
        message,
        node
      });
    };
  };

  const makeReporters = (node, tokenToFix) => {
    return {
      dangle: reporter(node, 'Unexpected trailing delimiter', fixer => {
        return fixer.replaceText(tokenToFix, '');
      }),
      noDangle: reporter(node, 'Missing trailing delimiter', fixer => {
        return fixer.insertTextAfter(tokenToFix, ',');
      })
    };
  };

  const evaluate = (node, lastChildNode) => {
    if (!lastChildNode && !node.inexact) {
      return;
    }

    const [penultimateToken, lastToken] = sourceCode.getLastTokens(node, 2);
    const isDangling = [';', ','].includes(penultimateToken.value);
    const isMultiLine = penultimateToken.loc.start.line !== lastToken.loc.start.line; // Use the object node if it's inexact since there's no child node for the inexact notation

    const report = makeReporters(node.inexact ? node : lastChildNode, penultimateToken);
    const nodeOption = getNodeOption(node);

    if (nodeOption === 'always' && !isDangling) {
      report.noDangle();
      return;
    }

    if (nodeOption === 'never' && isDangling) {
      report.dangle();
      return;
    }

    if (nodeOption === 'always-multiline' && !isDangling && isMultiLine) {
      report.noDangle();
      return;
    }

    if (nodeOption === 'always-multiline' && isDangling && !isMultiLine) {
      report.dangle();
      return;
    }

    if (nodeOption === 'only-multiline' && isDangling && !isMultiLine) {
      report.dangle();
    }
  };

  return {
    ObjectTypeAnnotation(node) {
      evaluate(node, getLast(_lodash.default.last(node.properties), _lodash.default.last(node.indexers)));
    },

    TupleTypeAnnotation(node) {
      evaluate(node, _lodash.default.last(node.types));
    }

  };
};

var _default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;