/**
 * @fileoverview Enforce scope prop is only used on <th> elements.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/scope';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'The scope prop can only be used on <th> elements.',
  type: 'JSXAttribute',
};

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Foo: 'div',
      TableHeader: 'th',
    },
  },
};

ruleTester.run('scope', rule, {
  valid: parsers.all([].concat(
    { code: '<div />;' },
    { code: '<div foo />;' },
    { code: '<th scope />' },
    { code: '<th scope="row" />' },
    { code: '<th scope={foo} />' },
    { code: '<th scope={"col"} {...props} />' },
    { code: '<Foo scope="bar" {...props} />' },
    { code: '<TableHeader scope="row" />', settings: componentsSettings },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<div scope />', errors: [expectedError] },
    { code: '<Foo scope="bar" />', settings: componentsSettings, errors: [expectedError] },
  )).map(parserOptionsMapper),
});
