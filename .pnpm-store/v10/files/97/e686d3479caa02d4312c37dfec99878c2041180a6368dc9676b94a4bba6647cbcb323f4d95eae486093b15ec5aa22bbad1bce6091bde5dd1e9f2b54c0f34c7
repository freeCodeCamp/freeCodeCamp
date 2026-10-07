/**
 * @fileoverview Enforce heading (h1, h2, etc) elements contain accessible content.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/heading-has-content';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'Headings must have content and the content must be accessible by a screen reader.',
  type: 'JSXOpeningElement',
};

const components = [{
  components: ['Heading', 'Title'],
}];

const componentsSettings = {
  'jsx-a11y': {
    components: {
      CustomInput: 'input',
      Title: 'h1',
      Heading: 'h2',
    },
  },
};

ruleTester.run('heading-has-content', rule, {
  valid: parsers.all([].concat(
    // DEFAULT ELEMENT TESTS
    { code: '<div />;' },
    { code: '<h1>Foo</h1>' },
    { code: '<h2>Foo</h2>' },
    { code: '<h3>Foo</h3>' },
    { code: '<h4>Foo</h4>' },
    { code: '<h5>Foo</h5>' },
    { code: '<h6>Foo</h6>' },
    { code: '<h6>123</h6>' },
    { code: '<h1><Bar /></h1>' },
    { code: '<h1>{foo}</h1>' },
    { code: '<h1>{foo.bar}</h1>' },
    { code: '<h1 dangerouslySetInnerHTML={{ __html: "foo" }} />' },
    { code: '<h1 children={children} />' },
    // CUSTOM ELEMENT TESTS FOR COMPONENTS OPTION
    { code: '<Heading>Foo</Heading>', options: components },
    { code: '<Title>Foo</Title>', options: components },
    { code: '<Heading><Bar /></Heading>', options: components },
    { code: '<Heading>{foo}</Heading>', options: components },
    { code: '<Heading>{foo.bar}</Heading>', options: components },
    { code: '<Heading dangerouslySetInnerHTML={{ __html: "foo" }} />', options: components },
    { code: '<Heading children={children} />', options: components },
    { code: '<h1 aria-hidden />' },
    // CUSTOM ELEMENT TESTS FOR COMPONENTS SETTINGS
    { code: '<Heading>Foo</Heading>', settings: componentsSettings },
    { code: '<h1><CustomInput type="hidden" /></h1>' },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    // DEFAULT ELEMENT TESTS
    { code: '<h1 />', errors: [expectedError] },
    { code: '<h1><Bar aria-hidden /></h1>', errors: [expectedError] },
    { code: '<h1>{undefined}</h1>', errors: [expectedError] },
    { code: '<h1><input type="hidden" /></h1>', errors: [expectedError] },

    // CUSTOM ELEMENT TESTS FOR COMPONENTS OPTION
    { code: '<Heading />', errors: [expectedError], options: components },
    { code: '<Heading><Bar aria-hidden /></Heading>', errors: [expectedError], options: components },
    { code: '<Heading>{undefined}</Heading>', errors: [expectedError], options: components },

    // CUSTOM ELEMENT TESTS FOR COMPONENTS SETTINGS
    { code: '<Heading />', errors: [expectedError], settings: componentsSettings },
    { code: '<h1><CustomInput type="hidden" /></h1>', errors: [expectedError], settings: componentsSettings },
  )).map(parserOptionsMapper),
});
