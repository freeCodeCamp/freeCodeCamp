/**
 * @fileoverview Enforce that elements with ARIA roles must
 *  have all required attributes for that role.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { roles } from 'aria-query';
import { RuleTester } from 'eslint';

import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/role-has-required-aria-props';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const errorMessage = (role) => {
  const requiredProps = Object.keys(roles.get(role).requiredProps);

  return {
    message: `Elements with the ARIA role "${role}" must have the following attributes defined: ${requiredProps}`,
    type: 'JSXAttribute',
  };
};

const componentsSettings = {
  'jsx-a11y': {
    components: {
      MyComponent: 'div',
    },
  },
};

// Create basic test cases using all valid role types.
const basicValidityTests = roles.keys().map((role) => {
  const {
    requiredProps: requiredPropKeyValues,
  } = roles.get(role);
  const requiredProps = Object.keys(requiredPropKeyValues);
  const propChain = requiredProps.join(' ');

  return {
    code: `<div role="${role.toLowerCase()}" ${propChain} />`,
  };
});

ruleTester.run('role-has-required-aria-props', rule, {
  valid: parsers.all([].concat(
    { code: '<Bar baz />' },
    { code: '<MyComponent role="combobox" />' },
    // Variables should pass, as we are only testing literals.
    { code: '<div />' },
    { code: '<div></div>' },
    { code: '<div role={role} />' },
    { code: '<div role={role || "button"} />' },
    { code: '<div role={role || "foobar"} />' },
    { code: '<div role="row" />' },
    { code: '<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>' },
    { code: '<input role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0" {...props} type="checkbox" />' },
    { code: '<input type="checkbox" role="switch" />' },
    { code: '<MyComponent role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0" />', settings: componentsSettings },
    { code: '<div role="heading" aria-level={2} />' },
    { code: '<div role="heading" aria-level="3" />' },
  )).concat(basicValidityTests).map(parserOptionsMapper),

  invalid: parsers.all([].concat(
    // SLIDER
    { code: '<div role="slider" />', errors: [errorMessage('slider')] },
    {
      code: '<div role="slider" aria-valuemax />',
      errors: [errorMessage('slider')],
    },
    {
      code: '<div role="slider" aria-valuemax aria-valuemin />',
      errors: [errorMessage('slider')],
    },

    // CHECKBOX
    { code: '<div role="checkbox" />', errors: [errorMessage('checkbox')] },
    { code: '<div role="checkbox" checked />', errors: [errorMessage('checkbox')] },
    {
      code: '<div role="checkbox" aria-chcked />',
      errors: [errorMessage('checkbox')],
    },
    {
      code: '<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>',
      errors: [errorMessage('checkbox')],
    },

    // COMBOBOX
    { code: '<div role="combobox" />', errors: [errorMessage('combobox')] },
    { code: '<div role="combobox" expanded />', errors: [errorMessage('combobox')] },
    {
      code: '<div role="combobox" aria-expandd />',
      errors: [errorMessage('combobox')],
    },

    // SCROLLBAR
    { code: '<div role="scrollbar" />', errors: [errorMessage('scrollbar')] },
    {
      code: '<div role="scrollbar" aria-valuemax />',
      errors: [errorMessage('scrollbar')],
    },
    {
      code: '<div role="scrollbar" aria-valuemax aria-valuemin />',
      errors: [errorMessage('scrollbar')],
    },
    {
      code: '<div role="scrollbar" aria-valuemax aria-valuenow />',
      errors: [errorMessage('scrollbar')],
    },
    {
      code: '<div role="scrollbar" aria-valuemin aria-valuenow />',
      errors: [errorMessage('scrollbar')],
    },
    {
      code: '<div role="heading" />',
      errors: [errorMessage('heading')],
    },
    {
      code: '<div role="option" />',
      errors: [errorMessage('option')],
    },
    // Custom element
    { code: '<MyComponent role="combobox" />', settings: componentsSettings, errors: [errorMessage('combobox')] },
  )).map(parserOptionsMapper),
});
