"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}, {
  additionalProperties: false,
  properties: {
    annotateUndefined: {
      enum: ['always', 'never', 'ignore', 'always-enforce'],
      type: 'string'
    },
    excludeArrowFunctions: {
      enum: [false, true, 'expressionsOnly']
    },
    excludeMatching: {
      items: {
        type: 'string'
      },
      type: 'array'
    },
    includeOnlyMatching: {
      items: {
        type: 'string'
      },
      type: 'array'
    }
  },
  type: 'object'
}];

const makeRegExp = str => {
  return new RegExp(str);
};

const isUndefinedReturnType = returnNode => {
  return returnNode.argument === null || returnNode.argument.name === 'undefined' || returnNode.argument.operator === 'void';
};

const create = context => {
  const annotateReturn = (_lodash.default.get(context, 'options[0]') || 'always') === 'always';
  const annotateUndefined = _lodash.default.get(context, 'options[1].annotateUndefined') || 'never';
  const skipArrows = _lodash.default.get(context, 'options[1].excludeArrowFunctions') || false;

  const excludeMatching = _lodash.default.get(context, 'options[1].excludeMatching', []).map(makeRegExp);

  const includeOnlyMatching = _lodash.default.get(context, 'options[1].includeOnlyMatching', []).map(makeRegExp);

  const targetNodes = [];

  const registerFunction = functionNode => {
    targetNodes.push({
      functionNode
    });
  };

  const getIsReturnTypeAnnotationUndefined = targetNode => {
    const isReturnTypeAnnotationLiteralUndefined = _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.id.name') === 'undefined' && _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.type') === 'GenericTypeAnnotation';
    const isReturnTypeAnnotationVoid = _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.type') === 'VoidTypeAnnotation';
    const isAsyncReturnTypeAnnotationVoid = _lodash.default.get(targetNode, 'functionNode.async') && _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.id.name') === 'Promise' && (_lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.typeParameters.params[0].type') === 'VoidTypeAnnotation' || _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.typeParameters.params[0].id.name') === 'undefined' && _lodash.default.get(targetNode, 'functionNode.returnType.typeAnnotation.typeParameters.params[0].type') === 'GenericTypeAnnotation');
    return isReturnTypeAnnotationLiteralUndefined || isReturnTypeAnnotationVoid || isAsyncReturnTypeAnnotationVoid;
  };

  const shouldFilterNode = functionNode => {
    const isArrow = functionNode.type === 'ArrowFunctionExpression';
    const isMethod = functionNode.parent && functionNode.parent.type === 'MethodDefinition';
    const propertyNodes = ['Property', 'ClassProperty'];
    const isProperty = functionNode.parent && propertyNodes.includes(functionNode.parent.type);
    let selector;

    if (isMethod || isProperty) {
      selector = 'parent.key.name';
    } else if (isArrow) {
      selector = 'parent.id.name';
    } else {
      selector = 'id.name';
    }

    const identifierName = _lodash.default.get(functionNode, selector);

    const checkRegExp = regex => {
      return regex.test(identifierName);
    };

    if (excludeMatching.length && _lodash.default.some(excludeMatching, checkRegExp)) {
      return true;
    }

    if (includeOnlyMatching.length && !_lodash.default.some(includeOnlyMatching, checkRegExp)) {
      return true;
    }

    return false;
  }; // eslint-disable-next-line complexity


  const evaluateFunction = functionNode => {
    const targetNode = targetNodes.pop();

    if (functionNode !== targetNode.functionNode) {
      throw new Error('Mismatch.');
    }

    const isArrow = functionNode.type === 'ArrowFunctionExpression';
    const isArrowFunctionExpression = functionNode.expression;
    const isFunctionReturnUndefined = !isArrowFunctionExpression && !functionNode.generator && (!targetNode.returnStatementNode || isUndefinedReturnType(targetNode.returnStatementNode));
    const isReturnTypeAnnotationUndefined = getIsReturnTypeAnnotationUndefined(targetNode);

    if (skipArrows === 'expressionsOnly' && isArrowFunctionExpression || skipArrows === true && isArrow || shouldFilterNode(functionNode)) {
      return;
    }

    const returnType = functionNode.returnType || isArrow && _lodash.default.get(functionNode, 'parent.id.typeAnnotation');

    if (isFunctionReturnUndefined && isReturnTypeAnnotationUndefined && annotateUndefined === 'never') {
      context.report(functionNode, 'Must not annotate undefined return type.');
    } else if (isFunctionReturnUndefined && !isReturnTypeAnnotationUndefined && annotateUndefined === 'always') {
      context.report(functionNode, 'Must annotate undefined return type.');
    } else if ((annotateUndefined === 'always-enforce' || !isFunctionReturnUndefined && !isReturnTypeAnnotationUndefined) && annotateReturn && !returnType && !shouldFilterNode(functionNode)) {
      context.report(functionNode, 'Missing return type annotation.');
    }
  };

  const evaluateNoise = () => {
    targetNodes.pop();
  };

  return {
    ArrowFunctionExpression: registerFunction,
    'ArrowFunctionExpression:exit': evaluateFunction,
    ClassDeclaration: registerFunction,
    'ClassDeclaration:exit': evaluateNoise,
    ClassExpression: registerFunction,
    'ClassExpression:exit': evaluateNoise,
    FunctionDeclaration: registerFunction,
    'FunctionDeclaration:exit': evaluateFunction,
    FunctionExpression: registerFunction,
    'FunctionExpression:exit': evaluateFunction,
    ReturnStatement: node => {
      if (targetNodes.length) {
        targetNodes[targetNodes.length - 1].returnStatementNode = node;
      }
    }
  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;