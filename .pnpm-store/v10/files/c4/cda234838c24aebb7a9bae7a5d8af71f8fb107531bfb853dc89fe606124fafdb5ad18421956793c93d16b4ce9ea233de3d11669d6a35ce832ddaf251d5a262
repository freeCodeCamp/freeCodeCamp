/**
 * @fileoverview Enforce elements with aria-activedescendant are tabbable.
 * @author Jesse Beach <@jessebeach>
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/aria-activedescendant-has-tabindex';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'An element that manages focus with `aria-activedescendant` must have a tabindex',
  type: 'JSXOpeningElement',
};

ruleTester.run('aria-activedescendant-has-tabindex', rule, {
  valid: parsers.all([].concat(
    {
      code: '<CustomComponent />;',
    },
    {
      code: '<CustomComponent aria-activedescendant={someID} />;',
    },
    {
      code: '<CustomComponent aria-activedescendant={someID} tabIndex={0} />;',
    },
    {
      code: '<CustomComponent aria-activedescendant={someID} tabIndex={-1} />;',
    },
    {
      code: '<CustomComponent aria-activedescendant={someID} tabIndex={0} />;',
      settings: { 'jsx-a11y': { components: { CustomComponent: 'div' } } },
    },
    {
      code: '<div />;',
    },
    {
      code: '<input />;',
    },
    {
      code: '<div tabIndex={0} />;',
    },
    {
      code: '<div aria-activedescendant={someID} tabIndex={0} />;',
    },
    {
      code: '<div aria-activedescendant={someID} tabIndex="0" />;',
    },
    {
      code: '<div aria-activedescendant={someID} tabIndex={1} />;',
    },
    {
      code: '<input aria-activedescendant={someID} />;',
    },
    {
      code: '<input aria-activedescendant={someID} tabIndex={1} />;',
    },
    {
      code: '<input aria-activedescendant={someID} tabIndex={0} />;',
    },
    {
      code: '<input aria-activedescendant={someID} tabIndex={-1} />;',
    },
    {
      code: '<div aria-activedescendant={someID} tabIndex={-1} />;',
    },
    {
      code: '<div aria-activedescendant={someID} tabIndex="-1" />;',
    },
    {
      code: '<input aria-activedescendant={someID} tabIndex={-1} />;',
    },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    {
      code: '<div aria-activedescendant={someID} />;',
      errors: [expectedError],
    },
    {
      code: '<CustomComponent aria-activedescendant={someID} />;',
      errors: [expectedError],
      settings: { 'jsx-a11y': { components: { CustomComponent: 'div' } } },
    },
  )).map(parserOptionsMapper),
});
