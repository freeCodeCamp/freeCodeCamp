/**
 * @fileoverview Enforce `aria-hidden="true"` is not used on focusable elements.
 * @author Kate Higa
*/

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/no-aria-hidden-on-focusable';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'aria-hidden="true" must not be set on focusable elements.',
  type: 'JSXOpeningElement',
};

ruleTester.run('no-aria-hidden-on-focusable', rule, {
  valid: parsers.all([].concat(
    { code: '<div aria-hidden="true" />;' },
    { code: '<div onClick={() => void 0} aria-hidden="true" />;' },
    { code: '<img aria-hidden="true" />' },
    { code: '<a aria-hidden="false" href="#" />' },
    { code: '<button aria-hidden="true" tabIndex="-1" />' },
    { code: '<button />' },
    { code: '<a href="/" />' },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<div aria-hidden="true" tabIndex="0" />;', errors: [expectedError] },
    { code: '<input aria-hidden="true" />;', errors: [expectedError] },
    { code: '<a href="/" aria-hidden="true" />', errors: [expectedError] },
    { code: '<button aria-hidden="true" />', errors: [expectedError] },
    { code: '<textarea aria-hidden="true" />', errors: [expectedError] },
    { code: '<p tabindex="0" aria-hidden="true">text</p>;', errors: [expectedError] },
  )).map(parserOptionsMapper),
});
