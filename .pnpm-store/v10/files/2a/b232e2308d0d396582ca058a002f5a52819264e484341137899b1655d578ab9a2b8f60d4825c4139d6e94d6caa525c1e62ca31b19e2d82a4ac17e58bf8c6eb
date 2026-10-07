/**
 * @fileoverview Performs validity check on anchor hrefs. Warns when anchors are used as buttons.
 * @author Almero Steyn
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/anchor-is-valid';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const preferButtonErrorMessage = 'Anchor used as a button. Anchors are primarily expected to navigate. Use the button element instead. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md';

const noHrefErrorMessage = 'The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md';

const invalidHrefErrorMessage = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md';

const preferButtonexpectedError = {
  message: preferButtonErrorMessage,
  type: 'JSXOpeningElement',
};
const noHrefexpectedError = {
  message: noHrefErrorMessage,
  type: 'JSXOpeningElement',
};
const invalidHrefexpectedError = {
  message: invalidHrefErrorMessage,
  type: 'JSXOpeningElement',
};

const components = [{
  components: ['Anchor', 'Link'],
}];
const specialLink = [{
  specialLink: ['hrefLeft', 'hrefRight'],
}];
const noHrefAspect = [{
  aspects: ['noHref'],
}];
const invalidHrefAspect = [{
  aspects: ['invalidHref'],
}];
const preferButtonAspect = [{
  aspects: ['preferButton'],
}];
const noHrefInvalidHrefAspect = [{
  aspects: ['noHref', 'invalidHref'],
}];
const noHrefPreferButtonAspect = [{
  aspects: ['noHref', 'preferButton'],
}];
const preferButtonInvalidHrefAspect = [{
  aspects: ['preferButton', 'invalidHref'],
}];

const componentsAndSpecialLink = [{
  components: ['Anchor'],
  specialLink: ['hrefLeft'],
}];

const componentsAndSpecialLinkAndInvalidHrefAspect = [{
  components: ['Anchor'],
  specialLink: ['hrefLeft'],
  aspects: ['invalidHref'],
}];

const componentsAndSpecialLinkAndNoHrefAspect = [{
  components: ['Anchor'],
  specialLink: ['hrefLeft'],
  aspects: ['noHref'],
}];

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Anchor: 'a',
      Link: 'a',
    },
  },
};

ruleTester.run('anchor-is-valid', rule, {
  valid: parsers.all([].concat(
    // DEFAULT ELEMENT 'a' TESTS
    { code: '<Anchor />' },
    { code: '<a {...props} />' },
    { code: '<a href="foo" />' },
    { code: '<a href={foo} />' },
    { code: '<a href="/foo" />' },
    { code: '<a href="https://foo.bar.com" />' },
    { code: '<div href="foo" />' },
    { code: '<a href="javascript" />' },
    { code: '<a href="javascriptFoo" />' },
    { code: '<a href={`#foo`}/>' },
    { code: '<a href={"foo"}/>' },
    { code: '<a href={"javascript"}/>' },
    { code: '<a href={`#javascript`}/>' },
    { code: '<a href="#foo" />' },
    { code: '<a href="#javascript" />' },
    { code: '<a href="#javascriptFoo" />' },
    { code: '<UX.Layout>test</UX.Layout>' },
    { code: '<a href={this} />' },

    // CUSTOM ELEMENT TEST FOR ARRAY OPTION
    { code: '<Anchor {...props} />', options: components },
    { code: '<Anchor href="foo" />', options: components },
    { code: '<Anchor href={foo} />', options: components },
    { code: '<Anchor href="/foo" />', options: components },
    { code: '<Anchor href="https://foo.bar.com" />', options: components },
    { code: '<div href="foo" />', options: components },
    { code: '<Anchor href={`#foo`}/>', options: components },
    { code: '<Anchor href={"foo"}/>', options: components },
    { code: '<Anchor href="#foo" />', options: components },
    { code: '<Link {...props} />', options: components },
    { code: '<Link href="foo" />', options: components },
    { code: '<Link href={foo} />', options: components },
    { code: '<Link href="/foo" />', options: components },
    { code: '<Link href="https://foo.bar.com" />', options: components },
    { code: '<div href="foo" />', options: components },
    { code: '<Link href={`#foo`}/>', options: components },
    { code: '<Link href={"foo"}/>', options: components },
    { code: '<Link href="#foo" />', options: components },
    { code: '<Link href="#foo" />', settings: componentsSettings },

    // CUSTOM PROP TESTS
    { code: '<a {...props} />', options: specialLink },
    { code: '<a hrefLeft="foo" />', options: specialLink },
    { code: '<a hrefLeft={foo} />', options: specialLink },
    { code: '<a hrefLeft="/foo" />', options: specialLink },
    { code: '<a hrefLeft="https://foo.bar.com" />', options: specialLink },
    { code: '<div hrefLeft="foo" />', options: specialLink },
    { code: '<a hrefLeft={`#foo`}/>', options: specialLink },
    { code: '<a hrefLeft={"foo"}/>', options: specialLink },
    { code: '<a hrefLeft="#foo" />', options: specialLink },
    { code: '<UX.Layout>test</UX.Layout>', options: specialLink },
    { code: '<a hrefRight={this} />', options: specialLink },
    { code: '<a {...props} />', options: specialLink },
    { code: '<a hrefRight="foo" />', options: specialLink },
    { code: '<a hrefRight={foo} />', options: specialLink },
    { code: '<a hrefRight="/foo" />', options: specialLink },
    { code: '<a hrefRight="https://foo.bar.com" />', options: specialLink },
    { code: '<div hrefRight="foo" />', options: specialLink },
    { code: '<a hrefRight={`#foo`}/>', options: specialLink },
    { code: '<a hrefRight={"foo"}/>', options: specialLink },
    { code: '<a hrefRight="#foo" />', options: specialLink },
    { code: '<UX.Layout>test</UX.Layout>', options: specialLink },
    { code: '<a hrefRight={this} />', options: specialLink },

    // CUSTOM BOTH COMPONENTS AND SPECIALLINK TESTS
    { code: '<Anchor {...props} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="foo" />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={foo} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="/foo" />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="https://foo.bar.com" />', options: componentsAndSpecialLink },
    { code: '<div hrefLeft="foo" />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={`#foo`}/>', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={"foo"}/>', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="#foo" />', options: componentsAndSpecialLink },
    { code: '<UX.Layout>test</UX.Layout>', options: componentsAndSpecialLink },

    // WITH ONCLICK
    // DEFAULT ELEMENT 'a' TESTS
    { code: '<a {...props} onClick={() => void 0} />' },
    { code: '<a href="foo" onClick={() => void 0} />' },
    { code: '<a href={foo} onClick={() => void 0} />' },
    { code: '<a href="/foo" onClick={() => void 0} />' },
    { code: '<a href="https://foo.bar.com" onClick={() => void 0} />' },
    { code: '<div href="foo" onClick={() => void 0} />' },
    { code: '<a href={`#foo`} onClick={() => void 0} />' },
    { code: '<a href={"foo"} onClick={() => void 0} />' },
    { code: '<a href="#foo" onClick={() => void 0} />' },
    { code: '<a href={this} onClick={() => void 0} />' },

    // CUSTOM ELEMENT TEST FOR ARRAY OPTION
    { code: '<Anchor {...props} onClick={() => void 0} />', options: components },
    { code: '<Anchor href="foo" onClick={() => void 0} />', options: components },
    { code: '<Anchor href={foo} onClick={() => void 0} />', options: components },
    { code: '<Anchor href="/foo" onClick={() => void 0} />', options: components },
    { code: '<Anchor href="https://foo.bar.com" onClick={() => void 0} />', options: components },
    { code: '<Anchor href={`#foo`} onClick={() => void 0} />', options: components },
    { code: '<Anchor href={"foo"} onClick={() => void 0} />', options: components },
    { code: '<Anchor href="#foo" onClick={() => void 0} />', options: components },
    { code: '<Link {...props} onClick={() => void 0} />', options: components },
    { code: '<Link href="foo" onClick={() => void 0} />', options: components },
    { code: '<Link href={foo} onClick={() => void 0} />', options: components },
    { code: '<Link href="/foo" onClick={() => void 0} />', options: components },
    { code: '<Link href="https://foo.bar.com" onClick={() => void 0} />', options: components },
    { code: '<div href="foo" onClick={() => void 0} />', options: components },
    { code: '<Link href={`#foo`} onClick={() => void 0} />', options: components },
    { code: '<Link href={"foo"} onClick={() => void 0} />', options: components },
    { code: '<Link href="#foo" onClick={() => void 0} />', options: components },

    // CUSTOM PROP TESTS
    { code: '<a {...props} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft="foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft={foo} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft="/foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft href="https://foo.bar.com" onClick={() => void 0} />', options: specialLink },
    { code: '<div hrefLeft="foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft={`#foo`} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft={"foo"} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefLeft="#foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight={this} onClick={() => void 0} />', options: specialLink },
    { code: '<a {...props} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight="foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight={foo} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight="/foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight href="https://foo.bar.com" onClick={() => void 0} />', options: specialLink },
    { code: '<div hrefRight="foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight={`#foo`} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight={"foo"} onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight="#foo" onClick={() => void 0} />', options: specialLink },
    { code: '<a hrefRight={this} onClick={() => void 0} />', options: specialLink },

    // CUSTOM BOTH COMPONENTS AND SPECIALLINK TESTS
    { code: '<Anchor {...props} onClick={() => void 0} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="foo" onClick={() => void 0} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={foo} onClick={() => void 0} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="/foo" onClick={() => void 0} />', options: componentsAndSpecialLink },
    {
      code: '<Anchor hrefLeft href="https://foo.bar.com" onClick={() => void 0} />',
      options: componentsAndSpecialLink,
    },
    { code: '<Anchor hrefLeft={`#foo`} onClick={() => void 0} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={"foo"} onClick={() => void 0} />', options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="#foo" onClick={() => void 0} />', options: componentsAndSpecialLink },

    // WITH ASPECTS TESTS
    // NO HREF
    { code: '<a />', options: invalidHrefAspect },
    { code: '<a href={undefined} />', options: invalidHrefAspect },
    { code: '<a href={null} />', options: invalidHrefAspect },
    { code: '<a />', options: preferButtonAspect },
    { code: '<a href={undefined} />', options: preferButtonAspect },
    { code: '<a href={null} />', options: preferButtonAspect },
    { code: '<a />', options: preferButtonInvalidHrefAspect },
    { code: '<a href={undefined} />', options: preferButtonInvalidHrefAspect },
    { code: '<a href={null} />', options: preferButtonInvalidHrefAspect },

    // INVALID HREF
    { code: '<a href="" />;', options: preferButtonAspect },
    { code: '<a href="#" />', options: preferButtonAspect },
    { code: '<a href={"#"} />', options: preferButtonAspect },
    { code: '<a href="javascript:void(0)" />', options: preferButtonAspect },
    { code: '<a href={"javascript:void(0)"} />', options: preferButtonAspect },
    { code: '<a href="" />;', options: noHrefAspect },
    { code: '<a href="#" />', options: noHrefAspect },
    { code: '<a href={"#"} />', options: noHrefAspect },
    { code: '<a href="javascript:void(0)" />', options: noHrefAspect },
    { code: '<a href={"javascript:void(0)"} />', options: noHrefAspect },
    { code: '<a href="" />;', options: noHrefPreferButtonAspect },
    { code: '<a href="#" />', options: noHrefPreferButtonAspect },
    { code: '<a href={"#"} />', options: noHrefPreferButtonAspect },
    { code: '<a href="javascript:void(0)" />', options: noHrefPreferButtonAspect },
    { code: '<a href={"javascript:void(0)"} />', options: noHrefPreferButtonAspect },

    // SHOULD BE BUTTON
    { code: '<a onClick={() => void 0} />', options: invalidHrefAspect },
    { code: '<a href="#" onClick={() => void 0} />', options: noHrefAspect },
    { code: '<a href="javascript:void(0)" onClick={() => void 0} />', options: noHrefAspect },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: noHrefAspect,
    },

    // CUSTOM COMPONENTS AND SPECIAL LINK AND ASPECT
    { code: '<Anchor hrefLeft={undefined} />', options: componentsAndSpecialLinkAndInvalidHrefAspect },
    { code: '<Anchor hrefLeft={null} />', options: componentsAndSpecialLinkAndInvalidHrefAspect },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    // DEFAULT ELEMENT 'a' TESTS
    // NO HREF
    { code: '<a />', errors: [noHrefexpectedError] },
    { code: '<a href={undefined} />', errors: [noHrefexpectedError] },
    { code: '<a href={null} />', errors: [noHrefexpectedError] },
    // INVALID HREF
    { code: '<a href="" />;', errors: [invalidHrefexpectedError] },
    { code: '<a href="#" />', errors: [invalidHrefexpectedError] },
    { code: '<a href={"#"} />', errors: [invalidHrefexpectedError] },
    { code: '<a href="javascript:void(0)" />', errors: [invalidHrefexpectedError] },
    { code: '<a href={"javascript:void(0)"} />', errors: [invalidHrefexpectedError] },
    // SHOULD BE BUTTON
    { code: '<a onClick={() => void 0} />', errors: [preferButtonexpectedError] },
    { code: '<a href="#" onClick={() => void 0} />', errors: [preferButtonexpectedError] },
    { code: '<a href="javascript:void(0)" onClick={() => void 0} />', errors: [preferButtonexpectedError] },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
    },

    // CUSTOM ELEMENT TEST FOR ARRAY OPTION
    // NO HREF
    { code: '<Link />', errors: [noHrefexpectedError], options: components },
    { code: '<Link href={undefined} />', errors: [noHrefexpectedError], options: components },
    { code: '<Link href={null} />', errors: [noHrefexpectedError], options: components },
    // INVALID HREF
    { code: '<Link href="" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Link href="#" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Link href={"#"} />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Link href="javascript:void(0)" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Link href={"javascript:void(0)"} />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Anchor href="" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Anchor href="#" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Anchor href={"#"} />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Anchor href="javascript:void(0)" />', errors: [invalidHrefexpectedError], options: components },
    { code: '<Anchor href={"javascript:void(0)"} />', errors: [invalidHrefexpectedError], options: components },
    // SHOULD BE BUTTON
    { code: '<Link onClick={() => void 0} />', errors: [preferButtonexpectedError], options: components },
    { code: '<Link href="#" onClick={() => void 0} />', errors: [preferButtonexpectedError], options: components },
    {
      code: '<Link href="javascript:void(0)" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: components,
    },
    {
      code: '<Link href={"javascript:void(0)"} onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: components,
    },
    { code: '<Anchor onClick={() => void 0} />', errors: [preferButtonexpectedError], options: components },
    { code: '<Anchor href="#" onClick={() => void 0} />', errors: [preferButtonexpectedError], options: components },
    {
      code: '<Anchor href="javascript:void(0)" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: components,
    },
    {
      code: '<Anchor href={"javascript:void(0)"} onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: components,
    },
    {
      code: '<Link href="#" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      settings: componentsSettings,
    },

    // CUSTOM PROP TESTS
    // NO HREF
    { code: '<a hrefLeft={undefined} />', errors: [noHrefexpectedError], options: specialLink },
    { code: '<a hrefLeft={null} />', errors: [noHrefexpectedError], options: specialLink },
    // INVALID HREF
    { code: '<a hrefLeft="" />;', errors: [invalidHrefexpectedError], options: specialLink },
    { code: '<a hrefLeft="#" />', errors: [invalidHrefexpectedError], options: specialLink },
    { code: '<a hrefLeft={"#"} />', errors: [invalidHrefexpectedError], options: specialLink },
    { code: '<a hrefLeft="javascript:void(0)" />', errors: [invalidHrefexpectedError], options: specialLink },
    { code: '<a hrefLeft={"javascript:void(0)"} />', errors: [invalidHrefexpectedError], options: specialLink },
    // SHOULD BE BUTTON
    { code: '<a hrefLeft="#" onClick={() => void 0} />', errors: [preferButtonexpectedError], options: specialLink },
    {
      code: '<a hrefLeft="javascript:void(0)" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: specialLink,
    },
    {
      code: '<a hrefLeft={"javascript:void(0)"} onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: specialLink,
    },

    // CUSTOM BOTH COMPONENTS AND SPECIAL LINK TESTS
    // NO HREF
    { code: '<Anchor Anchor={undefined} />', errors: [noHrefexpectedError], options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={null} />', errors: [noHrefexpectedError], options: componentsAndSpecialLink },
    // INVALID HREF
    { code: '<Anchor hrefLeft="" />;', errors: [invalidHrefexpectedError], options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft="#" />', errors: [invalidHrefexpectedError], options: componentsAndSpecialLink },
    { code: '<Anchor hrefLeft={"#"} />', errors: [invalidHrefexpectedError], options: componentsAndSpecialLink },
    {
      code: '<Anchor hrefLeft="javascript:void(0)" />',
      errors: [invalidHrefexpectedError],
      options: componentsAndSpecialLink,
    },
    {
      code: '<Anchor hrefLeft={"javascript:void(0)"} />',
      errors: [invalidHrefexpectedError],
      options: componentsAndSpecialLink,
    },
    // SHOULD BE BUTTON
    {
      code: '<Anchor hrefLeft="#" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: componentsAndSpecialLink,
    },
    {
      code: '<Anchor hrefLeft="javascript:void(0)" onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: componentsAndSpecialLink,
    },
    {
      code: '<Anchor hrefLeft={"javascript:void(0)"} onClick={() => void 0} />',
      errors: [preferButtonexpectedError],
      options: componentsAndSpecialLink,
    },

    // WITH ASPECTS TESTS
    // NO HREF
    { code: '<a />', options: noHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a />', options: noHrefPreferButtonAspect, errors: [noHrefexpectedError] },
    { code: '<a />', options: noHrefInvalidHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a href={undefined} />', options: noHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a href={undefined} />', options: noHrefPreferButtonAspect, errors: [noHrefexpectedError] },
    { code: '<a href={undefined} />', options: noHrefInvalidHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a href={null} />', options: noHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a href={null} />', options: noHrefPreferButtonAspect, errors: [noHrefexpectedError] },
    { code: '<a href={null} />', options: noHrefInvalidHrefAspect, errors: [noHrefexpectedError] },

    // INVALID HREF
    { code: '<a href="" />;', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="" />;', options: noHrefInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="" />;', options: preferButtonInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="#" />;', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="#" />;', options: noHrefInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="#" />;', options: preferButtonInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href={"#"} />;', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href={"#"} />;', options: noHrefInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href={"#"} />;', options: preferButtonInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="javascript:void(0)" />;', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href="javascript:void(0)" />;', options: noHrefInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    {
      code: '<a href="javascript:void(0)" />;',
      options: preferButtonInvalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },
    { code: '<a href={"javascript:void(0)"} />;', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    { code: '<a href={"javascript:void(0)"} />;', options: noHrefInvalidHrefAspect, errors: [invalidHrefexpectedError] },
    {
      code: '<a href={"javascript:void(0)"} />;',
      options: preferButtonInvalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },

    // SHOULD BE BUTTON
    { code: '<a onClick={() => void 0} />', options: preferButtonAspect, errors: [preferButtonexpectedError] },
    {
      code: '<a onClick={() => void 0} />',
      options: preferButtonInvalidHrefAspect,
      errors: [preferButtonexpectedError],
    },
    { code: '<a onClick={() => void 0} />', options: noHrefPreferButtonAspect, errors: [preferButtonexpectedError] },
    { code: '<a onClick={() => void 0} />', options: noHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a onClick={() => void 0} />', options: noHrefInvalidHrefAspect, errors: [noHrefexpectedError] },
    { code: '<a href="#" onClick={() => void 0} />', options: preferButtonAspect, errors: [preferButtonexpectedError] },
    {
      code: '<a href="#" onClick={() => void 0} />',
      options: noHrefPreferButtonAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href="#" onClick={() => void 0} />',
      options: preferButtonInvalidHrefAspect,
      errors: [preferButtonexpectedError],
    },
    { code: '<a href="#" onClick={() => void 0} />', options: invalidHrefAspect, errors: [invalidHrefexpectedError] },
    {
      code: '<a href="#" onClick={() => void 0} />',
      options: noHrefInvalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },
    {
      code: '<a href="javascript:void(0)" onClick={() => void 0} />',
      options: preferButtonAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href="javascript:void(0)" onClick={() => void 0} />',
      options: noHrefPreferButtonAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href="javascript:void(0)" onClick={() => void 0} />',
      options: preferButtonInvalidHrefAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href="javascript:void(0)" onClick={() => void 0} />',
      options: invalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },
    {
      code: '<a href="javascript:void(0)" onClick={() => void 0} />',
      options: noHrefInvalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: preferButtonAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: noHrefPreferButtonAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: preferButtonInvalidHrefAspect,
      errors: [preferButtonexpectedError],
    },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: invalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },
    {
      code: '<a href={"javascript:void(0)"} onClick={() => void 0} />',
      options: noHrefInvalidHrefAspect,
      errors: [invalidHrefexpectedError],
    },

    // CUSTOM COMPONENTS AND SPECIAL LINK AND ASPECT
    {
      code: '<Anchor hrefLeft={undefined} />',
      options: componentsAndSpecialLinkAndNoHrefAspect,
      errors: [noHrefexpectedError],
    },
    {
      code: '<Anchor hrefLeft={null} />',
      options: componentsAndSpecialLinkAndNoHrefAspect,
      errors: [noHrefexpectedError],
    },
  )).map(parserOptionsMapper),
});
