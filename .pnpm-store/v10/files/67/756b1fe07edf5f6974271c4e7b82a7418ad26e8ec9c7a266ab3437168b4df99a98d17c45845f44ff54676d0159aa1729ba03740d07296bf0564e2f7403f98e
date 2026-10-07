/**
 * @flow
 */

import IdentifierMock from './IdentifierMock';
import type { IdentifierMockType } from './IdentifierMock';

export type JSXSpreadAttributeMockType = {
  type: 'JSXSpreadAttribute',
  argument: IdentifierMockType,
};

export default function JSXSpreadAttributeMock(identifier: string): JSXSpreadAttributeMockType {
  return {
    type: 'JSXSpreadAttribute',
    argument: IdentifierMock(identifier),
  };
}
