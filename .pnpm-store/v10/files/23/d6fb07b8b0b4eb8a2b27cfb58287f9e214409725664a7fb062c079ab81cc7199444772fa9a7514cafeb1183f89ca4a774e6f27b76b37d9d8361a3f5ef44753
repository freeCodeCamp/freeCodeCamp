/**
 * @fileoverview Enforce that elements that do not support ARIA roles,
 *  states and properties do not have those attributes.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { dom } from 'aria-query';
import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/aria-unsupported-elements';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const errorMessage = (invalidProp) => ({
  message: `This element does not support ARIA roles, states and properties. \
Try removing the prop '${invalidProp}'.`,
  type: 'JSXOpeningElement',
});

const domElements = dom.keys();
// Generate valid test cases
const roleValidityTests = domElements.map((element) => {
  const isReserved = dom.get(element).reserved || false;
  const role = isReserved ? '' : 'role';

  return {
    code: `<${element} ${role} />`,
  };
});

const ariaValidityTests = domElements.map((element) => {
  const isReserved = dom.get(element).reserved || false;
  const aria = isReserved ? '' : 'aria-hidden';

  return {
    code: `<${element} ${aria} />`,
  };
}).concat({
  code: '<fake aria-hidden />',
  errors: [errorMessage('aria-hidden')],
});

// Generate invalid test cases.
const invalidRoleValidityTests = domElements
  .filter((element) => dom.get(element).reserved)
  .map((reservedElem) => ({
    code: `<${reservedElem} role {...props} />`,
    errors: [errorMessage('role')],
  })).concat({
    code: '<Meta aria-hidden />',
    errors: [errorMessage('aria-hidden')],
    settings: { 'jsx-a11y': { components: { Meta: 'meta' } } },
  });

const invalidAriaValidityTests = domElements
  .filter((element) => dom.get(element).reserved)
  .map((reservedElem) => ({
    code: `<${reservedElem} aria-hidden aria-role="none" {...props} />`,
    errors: [errorMessage('aria-hidden')],
  }));

ruleTester.run('aria-unsupported-elements', rule, {
  valid: parsers.all([].concat(roleValidityTests, ariaValidityTests)).map(parserOptionsMapper),
  invalid: parsers.all([].concat(invalidRoleValidityTests, invalidAriaValidityTests))
    .map(parserOptionsMapper),
});
