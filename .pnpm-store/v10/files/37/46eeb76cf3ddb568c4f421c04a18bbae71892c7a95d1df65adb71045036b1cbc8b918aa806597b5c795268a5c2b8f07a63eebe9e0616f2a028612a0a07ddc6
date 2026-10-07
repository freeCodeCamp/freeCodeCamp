/**
 * @fileoverview Disallow tabindex on static and noninteractive elements
 * @author jessebeach
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import { configs } from '../../../src/index';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/no-noninteractive-tabindex';
import ruleOptionsMapperFactory from '../../__util__/ruleOptionsMapperFactory';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const ruleName = 'no-noninteractive-tabindex';

const expectedError = {
  message: '`tabIndex` should only be declared on interactive elements.',
  type: 'JSXAttribute',
};

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Article: 'article',
      MyButton: 'button',
    },
  },
};

const alwaysValid = [
  { code: '<MyButton tabIndex={0} />' },
  { code: '<button />' },
  { code: '<button tabIndex="0" />' },
  { code: '<button tabIndex={0} />' },
  { code: '<div />' },
  { code: '<div tabIndex="-1" />' },
  { code: '<div role="button" tabIndex="0" />' },
  { code: '<div role="article" tabIndex="-1" />' },
  { code: '<article tabIndex="-1" />' },
  { code: '<Article tabIndex="-1" />', settings: componentsSettings },
  { code: '<MyButton tabIndex={0} />', settings: componentsSettings },
];

const neverValid = [
  { code: '<div tabIndex="0" />', errors: [expectedError] },
  { code: '<div role="article" tabIndex="0" />', errors: [expectedError] },
  { code: '<article tabIndex="0" />', errors: [expectedError] },
  { code: '<article tabIndex={0} />', errors: [expectedError] },
  { code: '<Article tabIndex={0} />', errors: [expectedError], settings: componentsSettings },
];

const recommendedOptions = (
  configs.recommended.rules[`jsx-a11y/${ruleName}`][1] || {}
);

ruleTester.run(`${ruleName}:recommended`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
    { code: '<div role="tabpanel" tabIndex="0" />' },
    // Expressions should pass in recommended mode
    { code: '<div role={ROLE_BUTTON} onClick={() => {}} tabIndex="0" />;' },
    // Cases for allowExpressionValues set to true
    {
      code: '<div role={BUTTON} onClick={() => {}} tabIndex="0" />;',
      options: [{ allowExpressionValues: true }],
    },
    // Specific case for ternary operator with literals on both side
    {
      code: '<div role={isButton ? "button" : "link"} onClick={() => {}} tabIndex="0" />;',
      options: [{ allowExpressionValues: true }],
    },
    {
      code: '<div role={isButton ? "button" : LINK} onClick={() => {}} tabIndex="0" />;',
      options: [{ allowExpressionValues: true }],
      errors: [expectedError],
    },
    {
      code: '<div role={isButton ? BUTTON : LINK} onClick={() => {}} tabIndex="0"/>;',
      options: [{ allowExpressionValues: true }],
      errors: [expectedError],
    },
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
  ))
    .map(ruleOptionsMapperFactory(recommendedOptions))
    .map(parserOptionsMapper),
});

ruleTester.run(`${ruleName}:strict`, rule, {
  valid: parsers.all([].concat(
    ...alwaysValid,
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    ...neverValid,
    { code: '<div role="tabpanel" tabIndex="0" />', errors: [expectedError] },
    // Expressions should fail in strict mode
    { code: '<div role={ROLE_BUTTON} onClick={() => {}} tabIndex="0" />;', errors: [expectedError] },
    // Cases for allowExpressionValues set to false
    {
      code: '<div role={BUTTON} onClick={() => {}} tabIndex="0" />;',
      options: [{ allowExpressionValues: false }],
      errors: [expectedError],
    },
    // Specific case for ternary operator with literals on both side
    {
      code: '<div role={isButton ? "button" : "link"} onClick={() => {}} tabIndex="0" />;',
      options: [{ allowExpressionValues: false }],
      errors: [expectedError],
    },
  )).map(parserOptionsMapper),
});
