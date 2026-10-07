/**
 * @fileoverview Enforce html element has lang prop.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/html-has-lang';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: '<html> elements must have the lang prop.',
  type: 'JSXOpeningElement',
};

ruleTester.run('html-has-lang', rule, {
  valid: parsers.all([].concat(
    { code: '<div />;' },
    { code: '<html lang="en" />' },
    { code: '<html lang="en-US" />' },
    { code: '<html lang={foo} />' },
    { code: '<html lang />' },
    { code: '<HTML />' },
    { code: '<HTMLTop lang="en" />', errors: [expectedError], settings: { 'jsx-a11y': { components: { HTMLTop: 'html' } } } },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<html />', errors: [expectedError] },
    { code: '<html {...props} />', errors: [expectedError] },
    { code: '<html lang={undefined} />', errors: [expectedError] },
    { code: '<HTMLTop />', errors: [expectedError], settings: { 'jsx-a11y': { components: { HTMLTop: 'html' } } } },
  )).map(parserOptionsMapper),
});
