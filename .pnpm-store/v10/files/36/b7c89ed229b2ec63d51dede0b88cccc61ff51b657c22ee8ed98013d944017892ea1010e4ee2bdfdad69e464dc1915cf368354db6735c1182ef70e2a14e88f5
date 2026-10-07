/**
 * @fileoverview Ensure autocomplete attribute is correct.
 * @author Wilco Fiers
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import { axeFailMessage } from '../../__util__/axeMapping';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/autocomplete-valid';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const invalidAutocomplete = [{
  message: axeFailMessage('autocomplete-valid'),
  type: 'JSXOpeningElement',
}];

const inappropriateAutocomplete = [{
  message: axeFailMessage('autocomplete-appropriate'),
  type: 'JSXOpeningElement',
}];

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Input: 'input',
    },
  },
};

ruleTester.run('autocomplete-valid', rule, {
  valid: parsers.all([].concat(
    // INAPPLICABLE
    { code: '<input type="text" />;' },
    // // PASSED AUTOCOMPLETE
    { code: '<input type="text" autocomplete="name" />;' },
    { code: '<input type="text" autocomplete="" />;' },
    { code: '<input type="text" autocomplete="off" />;' },
    { code: '<input type="text" autocomplete="on" />;' },
    { code: '<input type="text" autocomplete="billing family-name" />;' },
    { code: '<input type="text" autocomplete="section-blue shipping street-address" />;' },
    { code: '<input type="text" autocomplete="section-somewhere shipping work email" />;' },
    { code: '<input type="text" autocomplete />;' },
    { code: '<input type="text" autocomplete={autocompl} />;' },
    { code: '<input type="text" autocomplete={autocompl || "name"} />;' },
    { code: '<input type="text" autocomplete={autocompl || "foo"} />;' },
    { code: '<Foo autocomplete="bar"></Foo>;' },
    { code: '<input type={isEmail ? "email" : "text"} autocomplete="none" />;' },
    { code: '<Input type="text" autocomplete="name" />', settings: componentsSettings },
    { code: '<Input type="text" autocomplete="baz" />' },

    // PASSED "autocomplete-appropriate"
    // see also: https://github.com/dequelabs/axe-core/issues/2912
    { code: '<input type="date" autocomplete="email" />;', errors: inappropriateAutocomplete },
    { code: '<input type="number" autocomplete="url" />;', errors: inappropriateAutocomplete },
    { code: '<input type="month" autocomplete="tel" />;', errors: inappropriateAutocomplete },
    { code: '<Foo type="month" autocomplete="tel"></Foo>;', errors: inappropriateAutocomplete, options: [{ inputComponents: ['Foo'] }] },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    // FAILED "autocomplete-valid"
    { code: '<input type="text" autocomplete="foo" />;', errors: invalidAutocomplete },
    { code: '<input type="text" autocomplete="name invalid" />;', errors: invalidAutocomplete },
    { code: '<input type="text" autocomplete="invalid name" />;', errors: invalidAutocomplete },
    { code: '<input type="text" autocomplete="home url" />;', errors: invalidAutocomplete },
    { code: '<Bar autocomplete="baz"></Bar>;', errors: invalidAutocomplete, options: [{ inputComponents: ['Bar'] }] },
    { code: '<Input type="text" autocomplete="baz" />', errors: invalidAutocomplete, settings: componentsSettings },
  )).map(parserOptionsMapper),
});
