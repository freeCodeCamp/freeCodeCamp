/**
 * @fileoverview Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
 * @author Matt Wang
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/anchor-ambiguous-text';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const DEFAULT_AMBIGUOUS_WORDS = [
  'click here',
  'here',
  'link',
  'a link',
  'learn more',
];

const expectedErrorGenerator = (words) => ({
  message: `Ambiguous text within anchor. Screen reader users rely on link text for context; the words "${words.join('", "')}" are ambiguous and do not provide enough context.`,
  type: 'JSXOpeningElement',
});

const expectedError = expectedErrorGenerator(DEFAULT_AMBIGUOUS_WORDS);

ruleTester.run('anchor-ambiguous-text', rule, {
  valid: parsers.all([].concat(
    { code: '<a>documentation</a>;' },
    { code: '<a>${here}</a>;' },
    { code: '<a aria-label="tutorial on using eslint-plugin-jsx-a11y">click here</a>;' },
    { code: '<a><span aria-label="tutorial on using eslint-plugin-jsx-a11y">click here</span></a>;' },
    { code: '<a><img alt="documentation" /></a>;' },
    {
      code: '<a>click here</a>',
      options: [{
        words: ['disabling the defaults'],
      }],
    },
    {
      code: '<Link>documentation</Link>;',
      settings: { 'jsx-a11y': { components: { Link: 'a' } } },
    },
    {
      code: '<a><Image alt="documentation" /></a>;',
      settings: { 'jsx-a11y': { components: { Image: 'img' } } },
    },
    {
      code: '<Link>${here}</Link>;',
      settings: { 'jsx-a11y': { components: { Link: 'a' } } },
    },
    {
      code: '<Link aria-label="tutorial on using eslint-plugin-jsx-a11y">click here</Link>;',
      settings: { 'jsx-a11y': { components: { Link: 'a' } } },
    },
    {
      code: '<Link>click here</Link>',
      options: [{
        words: ['disabling the defaults with components'],
      }],
      settings: { 'jsx-a11y': { components: { Link: 'a' } } },
    },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<a>here</a>;', errors: [expectedError] },
    { code: '<a>HERE</a>;', errors: [expectedError] },
    { code: '<a>click here</a>;', errors: [expectedError] },
    { code: '<a>learn more</a>;', errors: [expectedError] },
    { code: '<a>learn      more</a>;', errors: [expectedError] },
    { code: '<a>learn more.</a>;', errors: [expectedError] },
    { code: '<a>learn more?</a>;', errors: [expectedError] },
    { code: '<a>learn more,</a>;', errors: [expectedError] },
    { code: '<a>learn more!</a>;', errors: [expectedError] },
    { code: '<a>learn more;</a>;', errors: [expectedError] },
    { code: '<a>learn more:</a>;', errors: [expectedError] },
    { code: '<a>link</a>;', errors: [expectedError] },
    { code: '<a>a link</a>;', errors: [expectedError] },
    { code: '<a aria-label="click here">something</a>;', errors: [expectedError] },
    { code: '<a> a link </a>;', errors: [expectedError] },
    { code: '<a>a<i></i> link</a>;', errors: [expectedError] },
    { code: '<a><i></i>a link</a>;', errors: [expectedError] },
    { code: '<a><span>click</span> here</a>;', errors: [expectedError] },
    { code: '<a><span> click </span> here</a>;', errors: [expectedError] },
    { code: '<a><span aria-hidden>more text</span>learn more</a>;', errors: [expectedError] },
    { code: '<a><span aria-hidden="true">more text</span>learn more</a>;', errors: [expectedError] },
    { code: '<a><img alt="click here"/></a>;', errors: [expectedError] },
    { code: '<a alt="tutorial on using eslint-plugin-jsx-a11y">click here</a>;', errors: [expectedError] },
    { code: '<a><span alt="tutorial on using eslint-plugin-jsx-a11y">click here</span></a>;', errors: [expectedError] },
    { code: '<a><CustomElement>click</CustomElement> here</a>;', errors: [expectedError] },
    {
      code: '<Link>here</Link>',
      errors: [expectedError],
      settings: { 'jsx-a11y': { components: { Link: 'a' } } },
    },
    {
      code: '<a><Image alt="click here" /></a>',
      errors: [expectedError],
      settings: { 'jsx-a11y': { components: { Image: 'img' } } },
    },
    {
      code: '<a>a disallowed word</a>',
      errors: [expectedErrorGenerator(['a disallowed word'])],
      options: [{
        words: ['a disallowed word'],
      }],
    },
  )).map(parserOptionsMapper),
});
