/**
 * @flow
 */

import type { JSXAttributeMockType } from './JSXAttributeMock';

export type JSXElementMockType = {
  type: 'JSXElement',
  openingElement: {
    type: 'JSXOpeningElement',
    name: {
      type: 'JSXIdentifier',
      name: string,
    },
    attributes: Array<JSXAttributeMockType>,
  },
  children: Array<Node>,
};

export default function JSXElementMock(
  tagName: string,
  attributes: Array<JSXAttributeMockType> = [],
  children?: Array<Node> = [],
): JSXElementMockType {
  return {
    type: 'JSXElement',
    openingElement: {
      type: 'JSXOpeningElement',
      name: {
        type: 'JSXIdentifier',
        name: tagName,
      },
      attributes,
    },
    children,
  };
}
