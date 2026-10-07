/**
 * @flow
 */

import toAST from 'to-ast'; // eslint-disable-line import/no-extraneous-dependencies
import JSXExpressionContainerMock from './JSXExpressionContainerMock';

export type JSXAttributeMockType = {
  type: 'JSXAttribute',
  name: {
    type: 'JSXIdentifier',
    name: string,
  },
  value: mixed,
};

export default function JSXAttributeMock(prop: string, value: mixed, isExpressionContainer?: boolean = false): JSXAttributeMockType {
  let astValue;
  if (value && value.type !== undefined) {
    astValue = value;
  } else {
    astValue = toAST(value);
  }
  let attributeValue = astValue;
  if (isExpressionContainer || astValue.type !== 'Literal') {
    attributeValue = JSXExpressionContainerMock(astValue);
  } else if (attributeValue.type === 'Literal' && !('raw' in (attributeValue: any))) {
    (attributeValue: any).raw = JSON.stringify((attributeValue: any).value);
  }

  return {
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: prop,
    },
    value: attributeValue,
  };
}
