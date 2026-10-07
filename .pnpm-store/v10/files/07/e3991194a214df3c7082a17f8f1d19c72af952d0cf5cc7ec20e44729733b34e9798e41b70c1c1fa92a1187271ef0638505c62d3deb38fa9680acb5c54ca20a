/**
 * @fileoverview Enforce usage of onBlur over onChange on select menus for accessibility.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/no-onchange';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'onBlur must be used instead of onchange, unless absolutely necessary and it causes no negative consequences for keyboard only or screen reader users.',
  type: 'JSXOpeningElement',
};

const componentsSettings = {
  'jsx-a11y': {
    components: {
      CustomOption: 'option',
      Input: 'input',
    },
  },
};

ruleTester.run('no-onchange', rule, {
  valid: parsers.all([].concat(
    { code: '<select onBlur={() => {}} />;' },
    { code: '<select onBlur={handleOnBlur} />;' },
    { code: '<option />;' },
    { code: '<option onBlur={() => {}} onChange={() => {}} />;' },
    { code: '<option {...props} />' },
    { code: '<input onChange={() => {}} />;' },
    { code: '<input onChange={handleOnChange} />;' },
    { code: '<input />;' },
    { code: '<input onChange={() => {}} onChange={() => {}} />;' },
    { code: '<input {...props} />' },
    { code: '<Input onChange={() => {}} />;', settings: componentsSettings },
    { code: '<CustomOption onChange={() => {}} />' },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<select onChange={() => {}} />;', errors: [expectedError] },
    { code: '<select onChange={handleOnChange} />;', errors: [expectedError] },
    { code: '<option onChange={() => {}} />', errors: [expectedError] },
    { code: '<option onChange={() => {}} {...props} />', errors: [expectedError] },
    { code: '<CustomOption onChange={() => {}} />;', errors: [expectedError], settings: componentsSettings },
  )).map(parserOptionsMapper),
});
