/**
 * @fileoverview Enforce aria role attribute is valid.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { roles } from 'aria-query';
import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/aria-role';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const errorMessage = {
  message: 'Elements with ARIA roles must use a valid, non-abstract ARIA role.',
  type: 'JSXAttribute',
};

const roleKeys = roles.keys();

const validRoles = roleKeys.filter((role) => roles.get(role).abstract === false);
const invalidRoles = roleKeys.filter((role) => roles.get(role).abstract === true);

const createTests = (roleNames) => roleNames.map((role) => ({
  code: `<div role="${role.toLowerCase()}" />`,
}));

const validTests = createTests(validRoles);
const invalidTests = createTests(invalidRoles).map((test) => {
  const invalidTest = { ...test };
  invalidTest.errors = [errorMessage];
  return invalidTest;
});

const allowedInvalidRoles = [{
  allowedInvalidRoles: ['invalid-role', 'other-invalid-role'],
}];

const ignoreNonDOMSchema = [{
  ignoreNonDOM: true,
}];

const customDivSettings = {
  'jsx-a11y': {
    polymorphicPropName: 'asChild',
    components: {
      Div: 'div',
    },
  },
};

ruleTester.run('aria-role', rule, {
  valid: parsers.all([].concat(
    // Variables should pass, as we are only testing literals.
    { code: '<div />' },
    { code: '<div></div>' },
    { code: '<div role={role} />' },
    { code: '<div role={role || "button"} />' },
    { code: '<div role={role || "foobar"} />' },
    { code: '<div role="tabpanel row" />' },
    { code: '<div role="switch" />' },
    { code: '<div role="doc-abstract" />' },
    { code: '<div role="doc-appendix doc-bibliography" />' },
    { code: '<Bar baz />' },
    { code: '<img role="invalid-role" />', options: allowedInvalidRoles },
    { code: '<img role="invalid-role tabpanel" />', options: allowedInvalidRoles },
    { code: '<img role="invalid-role other-invalid-role" />', options: allowedInvalidRoles },
    { code: '<Foo role="bar" />', options: ignoreNonDOMSchema },
    { code: '<fakeDOM role="bar" />', options: ignoreNonDOMSchema },
    { code: '<img role="presentation" />', options: ignoreNonDOMSchema },
    {
      code: '<Div role="button" />',
      settings: customDivSettings,
    },
    {
      code: '<Box asChild="div" role="button" />',
      settings: customDivSettings,
    },
    { code: '<svg role="graphics-document document" />' },
    { code: '<svg role="img" />' },
  )).concat(validTests).map(parserOptionsMapper),

  invalid: parsers.all([].concat(
    { code: '<div role="foobar" />', errors: [errorMessage] },
    { code: '<div role="datepicker"></div>', errors: [errorMessage] },
    { code: '<div role="range"></div>', errors: [errorMessage] },
    { code: '<div role="Button"></div>', errors: [errorMessage] },
    { code: '<div role=""></div>', errors: [errorMessage] },
    { code: '<div role="tabpanel row foobar"></div>', errors: [errorMessage] },
    { code: '<div role="tabpanel row range"></div>', errors: [errorMessage] },
    { code: '<div role="doc-endnotes range"></div>', errors: [errorMessage] },
    { code: '<div role />', errors: [errorMessage] },
    { code: '<div role="unknown-invalid-role" />', errors: [errorMessage], options: allowedInvalidRoles },
    { code: '<div role={null}></div>', errors: [errorMessage] },
    { code: '<Foo role="datepicker" />', errors: [errorMessage] },
    { code: '<Foo role="Button" />', errors: [errorMessage] },
    { code: '<Div role="Button" />', errors: [errorMessage], settings: customDivSettings },
    {
      code: '<Div role="Button" />',
      errors: [errorMessage],
      options: ignoreNonDOMSchema,
      settings: customDivSettings,
    },
    {
      code: '<Box asChild="div" role="Button" />',
      settings: customDivSettings,
      errors: [errorMessage],
    },
  )).concat(invalidTests).map(parserOptionsMapper),
});
