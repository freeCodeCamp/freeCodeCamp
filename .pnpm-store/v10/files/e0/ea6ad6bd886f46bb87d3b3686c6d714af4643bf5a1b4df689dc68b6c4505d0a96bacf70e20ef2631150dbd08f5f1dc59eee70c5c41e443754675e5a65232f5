/**
 * @fileoverview Enforce iframe elements have a title attribute.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/iframe-has-title';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: '<iframe> elements must have a unique title property.',
  type: 'JSXOpeningElement',
};

const componentsSettings = {
  'jsx-a11y': {
    components: {
      FooComponent: 'iframe',
    },
  },
};

ruleTester.run('html-has-lang', rule, {
  valid: parsers.all([].concat(
    { code: '<div />;' },
    { code: '<iframe title="Unique title" />' },
    { code: '<iframe title={foo} />' },
    { code: '<FooComponent />' },
    { code: '<FooComponent title="Unique title" />', settings: componentsSettings },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<iframe />', errors: [expectedError] },
    { code: '<iframe {...props} />', errors: [expectedError] },
    { code: '<iframe title={undefined} />', errors: [expectedError] },
    { code: '<iframe title="" />', errors: [expectedError] },
    { code: '<iframe title={false} />', errors: [expectedError] },
    { code: '<iframe title={true} />', errors: [expectedError] },
    { code: "<iframe title={''} />", errors: [expectedError] },
    { code: '<iframe title={``} />', errors: [expectedError] },
    { code: '<iframe title={""} />', errors: [expectedError] },
    { code: '<iframe title={42} />', errors: [expectedError] },
    { code: '<FooComponent />', errors: [expectedError], settings: componentsSettings },
  )).map(parserOptionsMapper),
});
