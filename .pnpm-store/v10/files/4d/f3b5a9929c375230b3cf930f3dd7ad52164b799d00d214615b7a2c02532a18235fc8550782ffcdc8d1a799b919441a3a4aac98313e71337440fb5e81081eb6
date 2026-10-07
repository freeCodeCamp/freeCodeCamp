/**
 * @fileoverview Enforce img alt attribute does not have the word image, picture, or photo.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import semver from 'semver';
import { version as eslintVersion } from 'eslint/package.json';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/img-redundant-alt';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const array = [{
  components: ['Image'],
  words: ['Word1', 'Word2'],
}];

const componentsSettings = {
  'jsx-a11y': {
    components: {
      Image: 'img',
    },
  },
};

const ruleTester = new RuleTester();

const expectedError = {
  message: 'Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop.',
  type: 'JSXOpeningElement',
};

ruleTester.run('img-redundant-alt', rule, {
  valid: parsers.all([].concat(
    { code: '<img alt="foo" />;' },
    { code: '<img alt="picture of me taking a photo of an image" aria-hidden />' },
    { code: '<img aria-hidden alt="photo of image" />' },
    { code: '<img ALt="foo" />;' },
    { code: '<img {...this.props} alt="foo" />' },
    { code: '<img {...this.props} alt={"foo"} />' },
    { code: '<img {...this.props} alt={alt} />' },
    { code: '<a />' },
    { code: '<img />' },
    { code: '<IMG />' },
    { code: '<img alt={undefined} />' },
    { code: '<img alt={`this should pass for ${now}`} />' },
    { code: '<img alt={`this should pass for ${photo}`} />' },
    { code: '<img alt={`this should pass for ${image}`} />' },
    { code: '<img alt={`this should pass for ${picture}`} />' },
    { code: '<img alt={`${photo}`} />' },
    { code: '<img alt={`${image}`} />' },
    { code: '<img alt={`${picture}`} />' },
    { code: '<img alt={"undefined"} />' },
    { code: '<img alt={() => {}} />' },
    { code: '<img alt={function(e){}} />' },
    { code: '<img aria-hidden={false} alt="Doing cool things." />' },
    { code: '<UX.Layout>test</UX.Layout>' },
    { code: '<img alt />' },
    { code: '<img alt={imageAlt} />' },
    { code: '<img alt={imageAlt.name} />' },
    semver.satisfies(eslintVersion, '>= 6') ? [
      { code: '<img alt={imageAlt?.name} />', languageOptions: { ecmaVersion: 2020 } },
      { code: '<img alt="Doing cool things" aria-hidden={foo?.bar}/>', languageOptions: { ecmaVersion: 2020 } },
    ] : [],
    { code: '<img alt="Photography" />;' },
    { code: '<img alt="ImageMagick" />;' },
    { code: '<Image alt="Photo of a friend" />' },
    { code: '<Image alt="Foo" />', settings: componentsSettings },
    { code: '<img alt="画像" />', options: [{ words: ['イメージ'] }] },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<img alt="Photo of friend." />;', errors: [expectedError] },
    { code: '<img alt="Picture of friend." />;', errors: [expectedError] },
    { code: '<img alt="Image of friend." />;', errors: [expectedError] },
    { code: '<img alt="PhOtO of friend." />;', errors: [expectedError] },
    { code: '<img alt={"photo"} />;', errors: [expectedError] },
    { code: '<img alt="piCTUre of friend." />;', errors: [expectedError] },
    { code: '<img alt="imAGE of friend." />;', errors: [expectedError] },
    {
      code: '<img alt="photo of cool person" aria-hidden={false} />',
      errors: [expectedError],
    },
    {
      code: '<img alt="picture of cool person" aria-hidden={false} />',
      errors: [expectedError],
    },
    {
      code: '<img alt="image of cool person" aria-hidden={false} />',
      errors: [expectedError],
    },
    { code: '<img alt="photo" {...this.props} />', errors: [expectedError] },
    { code: '<img alt="image" {...this.props} />', errors: [expectedError] },
    { code: '<img alt="picture" {...this.props} />', errors: [expectedError] },
    {
      code: '<img alt={`picture doing ${things}`} {...this.props} />',
      errors: [expectedError],
    },
    {
      code: '<img alt={`photo doing ${things}`} {...this.props} />',
      errors: [expectedError],
    },
    {
      code: '<img alt={`image doing ${things}`} {...this.props} />',
      errors: [expectedError],
    },
    {
      code: '<img alt={`picture doing ${picture}`} {...this.props} />',
      errors: [expectedError],
    },
    {
      code: '<img alt={`photo doing ${photo}`} {...this.props} />',
      errors: [expectedError],
    },
    {
      code: '<img alt={`image doing ${image}`} {...this.props} />',
      errors: [expectedError],
    },
    { code: '<Image alt="Photo of a friend" />', errors: [expectedError], settings: componentsSettings },

    // TESTS FOR ARRAY OPTION TESTS
    { code: '<img alt="Word1" />;', options: array, errors: [expectedError] },
    { code: '<img alt="Word2" />;', options: array, errors: [expectedError] },
    { code: '<Image alt="Word1" />;', options: array, errors: [expectedError] },
    { code: '<Image alt="Word2" />;', options: array, errors: [expectedError] },

    { code: '<img alt="イメージ" />', options: [{ words: ['イメージ'] }], errors: [expectedError] },
    { code: '<img alt="イメージです" />', options: [{ words: ['イメージ'] }], errors: [expectedError] },
  )).map(parserOptionsMapper),
});
