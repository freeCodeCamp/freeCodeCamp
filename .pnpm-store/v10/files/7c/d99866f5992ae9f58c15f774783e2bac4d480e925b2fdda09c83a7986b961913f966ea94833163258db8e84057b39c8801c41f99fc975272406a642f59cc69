/**
 * @fileoverview Enforce all aria-* properties are valid.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { aria } from 'aria-query';
import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/aria-props';
import getSuggestion from '../../../src/util/getSuggestion';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();
const ariaAttributes = aria.keys();

const errorMessage = (name) => {
  const suggestions = getSuggestion(name, ariaAttributes);
  const message = `${name}: This attribute is an invalid ARIA attribute.`;

  if (suggestions.length > 0) {
    return {
      type: 'JSXAttribute',
      message: `${message} Did you mean to use ${suggestions}?`,
    };
  }

  return {
    type: 'JSXAttribute',
    message,
  };
};

// Create basic test cases using all valid role types.
const basicValidityTests = ariaAttributes.map((prop) => ({
  code: `<div ${prop.toLowerCase()}="foobar" />`,
}));

ruleTester.run('aria-props', rule, {
  valid: parsers.all([].concat(
    // Variables should pass, as we are only testing literals.
    { code: '<div />' },
    { code: '<div></div>' },
    { code: '<div aria="wee"></div>' }, // Needs aria-*
    { code: '<div abcARIAdef="true"></div>' },
    { code: '<div fooaria-foobar="true"></div>' },
    { code: '<div fooaria-hidden="true"></div>' },
    { code: '<Bar baz />' },
    { code: '<input type="text" aria-errormessage="foobar" />' },
  )).concat(basicValidityTests).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<div aria-="foobar" />', errors: [errorMessage('aria-')] },
    {
      code: '<div aria-labeledby="foobar" />',
      errors: [errorMessage('aria-labeledby')],
    },
    {
      code: '<div aria-skldjfaria-klajsd="foobar" />',
      errors: [errorMessage('aria-skldjfaria-klajsd')],
    },
  )).map(parserOptionsMapper),
});
