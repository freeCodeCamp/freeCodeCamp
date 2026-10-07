/**
 * @fileoverview Enforce label tags have htmlFor attribute.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import assign from 'object.assign';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/label-has-for';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedNestingError = {
  message: 'Form label must have the following type of associated control: nesting',
  type: 'JSXOpeningElement',
};

const expectedSomeError = {
  message: 'Form label must have ANY of the following types of associated control: nesting, id',
  type: 'JSXOpeningElement',
};

const expectedEveryError = {
  message: 'Form label must have ALL of the following types of associated control: nesting, id',
  type: 'JSXOpeningElement',
};

const optionsComponents = [{
  components: ['Label', 'Descriptor'],
}];
const optionsRequiredNesting = [{
  required: 'nesting',
}];
const optionsRequiredSome = [{
  required: { some: ['nesting', 'id'] },
}];
const optionsRequiredEvery = [{
  required: { every: ['nesting', 'id'] },
}];
const optionsChildrenAllowed = [{
  allowChildren: true,
}];

const attributesSettings = {
  'jsx-a11y': {
    attributes: {
      for: ['htmlFor', 'for'],
    },
  },
};

ruleTester.run('label-has-for', rule, {
  valid: parsers.all([].concat(
    // DEFAULT ELEMENT 'label' TESTS
    { code: '<div />' },
    { code: '<label htmlFor="foo"><input /></label>' },
    { code: '<label htmlFor="foo"><textarea /></label>' },
    { code: '<label for="foo"><input /></label>', settings: attributesSettings },
    { code: '<label for="foo"><textarea /></label>', settings: attributesSettings },
    { code: '<Label />' }, // lower-case convention refers to real HTML elements.
    { code: '<Label htmlFor="foo" />' },
    { code: '<Label for="foo" />', settings: attributesSettings },
    { code: '<Descriptor />' },
    { code: '<Descriptor htmlFor="foo">Test!</Descriptor>' },
    { code: '<Descriptor for="foo">Test!</Descriptor>', settings: attributesSettings },
    { code: '<UX.Layout>test</UX.Layout>' },

    // CUSTOM ELEMENT ARRAY OPTION TESTS
    { code: '<Label htmlFor="foo" />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Label htmlFor={"foo"} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Label htmlFor={foo} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Label htmlFor={`${id}`} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<div />', options: optionsComponents },
    { code: '<Label htmlFor="something"><input /></Label>', options: optionsComponents },
    { code: '<Label htmlFor="foo">Test!</Label>', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Descriptor htmlFor="foo" />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Descriptor htmlFor={"foo"} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Descriptor htmlFor={foo} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Descriptor htmlFor={`${id}`} />', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<Descriptor htmlFor="foo">Test!</Descriptor>', options: [assign({}, optionsComponents[0], optionsRequiredSome[0])] },
    { code: '<label htmlFor="foo" />', options: optionsRequiredSome },
    { code: '<label htmlFor={"foo"} />', options: optionsRequiredSome },
    { code: '<label htmlFor={foo} />', options: optionsRequiredSome },
    { code: '<label htmlFor={`${id}`} />', options: optionsRequiredSome },
    { code: '<label htmlFor="foo">Test!</label>', options: optionsRequiredSome },
    { code: '<label><input /></label>', options: optionsRequiredSome },
    { code: '<label><input /></label>', options: optionsRequiredNesting },
    { code: '<label htmlFor="input"><input /></label>', options: optionsRequiredEvery },
    { code: '<label><input /></label>', options: optionsChildrenAllowed },
    { code: '<Descriptor htmlFor="foo">Test!</Descriptor>', options: [assign({}, optionsComponents, optionsChildrenAllowed)] },
    { code: '<label>Test!</label>', options: optionsChildrenAllowed },
    { code: '<label htmlFor="foo">Test!</label>', options: optionsChildrenAllowed },
    { code: '<label>{children}</label>', options: optionsChildrenAllowed },
    { code: '<label htmlFor="children">{children}</label>', options: optionsChildrenAllowed },
    { code: '<label htmlFor={id}>{ labelText }<div><input id={id} type="checkbox" name={id} value={value} /></div></label>', options: optionsRequiredEvery },
    { code: '<label htmlFor={id}>{ labelText }<div><div><div><div><input id={id} type="checkbox" name={id} value={value} /></div></div></div></div></label>', options: optionsRequiredEvery },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    // DEFAULT ELEMENT 'label' TESTS
    { code: '<label id="foo" />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={undefined} />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={`${undefined}`} />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label>First Name</label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label {...props}>Foo</label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label><input /></label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label><textarea /></label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label>{children}</label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor="foo" />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={"foo"} />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={foo} />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={`${id}`} />', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor="foo">Test!</label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    { code: '<label htmlFor={id}>{ labelText }<div><div><div><div><div id={id} type="checkbox" name={id} value={value} /></div></div></div></div></label>', errors: [expectedEveryError], options: optionsRequiredEvery },
    //
    // // CUSTOM ELEMENT ARRAY OPTION TESTS
    {
      code: '<Label></Label>',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    {
      code: '<Label htmlFor="foo" />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Label htmlFor={"foo"} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Label htmlFor={foo} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Label htmlFor={`${id}`} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Label htmlFor="foo">Test!</Label>',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Descriptor htmlFor="foo" />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Descriptor htmlFor={"foo"} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Descriptor htmlFor={foo} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Descriptor htmlFor={`${id}`} />',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    {
      code: '<Descriptor htmlFor="foo">Test!</Descriptor>',
      errors: [expectedEveryError],
      options: [{ ...optionsComponents[0], ...optionsRequiredEvery[0] }],
    },
    { code: '<Label id="foo" />', errors: [expectedEveryError], options: optionsComponents },
    {
      code: '<Label htmlFor={undefined} />',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    {
      code: '<Label htmlFor={`${undefined}`} />',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    { code: '<Label>First Name</Label>', errors: [expectedEveryError], options: optionsComponents },
    {
      code: '<Label {...props}>Foo</Label>',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    { code: '<Descriptor id="foo" />', errors: [expectedEveryError], options: optionsComponents },
    {
      code: '<Descriptor htmlFor={undefined} />',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    {
      code: '<Descriptor htmlFor={`${undefined}`} />',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    {
      code: '<Descriptor>First Name</Descriptor>',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    {
      code: '<Descriptor {...props}>Foo</Descriptor>',
      errors: [expectedEveryError],
      options: optionsComponents,
    },
    { code: '<label>{children}</label>', errors: [expectedEveryError], options: optionsComponents },
    { code: '<label htmlFor="foo" />', errors: [expectedNestingError], options: optionsRequiredNesting },
    { code: '<label>First Name</label>', errors: [expectedNestingError], options: optionsRequiredNesting },
    { code: '<label>First Name</label>', errors: [expectedSomeError], options: optionsRequiredSome },
    { code: '<label>{children}</label>', errors: [expectedSomeError], options: optionsRequiredSome },
    { code: '<label>{children}</label>', errors: [expectedNestingError], options: optionsRequiredNesting },
    {
      code: '<form><input type="text" id="howmuch" value="1" /><label htmlFor="howmuch">How much ?</label></form>',
      errors: [expectedEveryError],
      options: optionsRequiredEvery,
    },
    {
      code: '<form><input type="text" id="howmuch" value="1" /><label htmlFor="howmuch">How much ?<span /></label></form>',
      errors: [expectedEveryError],
      options: optionsRequiredEvery,
    },
  )).map(parserOptionsMapper),
});
