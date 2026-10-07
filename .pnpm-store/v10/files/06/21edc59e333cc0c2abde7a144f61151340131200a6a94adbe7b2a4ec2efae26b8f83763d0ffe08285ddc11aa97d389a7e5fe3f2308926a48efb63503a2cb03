/**
 * @fileoverview Enforce all elements that require alternative text have it.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/alt-text';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const missingPropError = (type) => ({
  message: `${type} elements must have an alt prop, either with meaningful text, or an empty string for decorative images.`,
  type: 'JSXOpeningElement',
});

const altValueError = (type) => ({
  message: `Invalid alt value for ${type}. \
Use alt="" for presentational images.`,
  type: 'JSXOpeningElement',
});

const ariaLabelValueError = {
  message: 'The aria-label attribute must have a value. The alt attribute is preferred over aria-label for images.',
};
const ariaLabelledbyValueError = {
  message: 'The aria-labelledby attribute must have a value. The alt attribute is preferred over aria-labelledby for images.',
};

const preferAltError = () => ({
  message: 'Prefer alt="" over a presentational role. First rule of aria is to not use aria if it can be achieved via native HTML.',
  type: 'JSXOpeningElement',
});

const objectError = {
  message: 'Embedded <object> elements must have alternative text by providing inner text, aria-label or aria-labelledby props.',
};

const areaError = {
  message: 'Each area of an image map must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.',
};

const inputImageError = {
  message: '<input> elements with type="image" must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.',
};

const componentsSettings = {
  'jsx-a11y': {
    polymorphicPropName: 'as',
    components: {
      Input: 'input',
    },
  },
};

const array = [{
  img: ['Thumbnail', 'Image'],
  object: ['Object'],
  area: ['Area'],
  'input[type="image"]': ['InputImage'],
}];

ruleTester.run('alt-text', rule, {
  valid: parsers.all([].concat(
    // DEFAULT ELEMENT 'img' TESTS
    { code: '<img alt="foo" />;' },
    { code: '<img alt={"foo"} />;' },
    { code: '<img alt={alt} />;' },
    { code: '<img ALT="foo" />;' },
    { code: '<img ALT={`This is the ${alt} text`} />;' },
    { code: '<img ALt="foo" />;' },
    { code: '<img alt="foo" salt={undefined} />;' },
    { code: '<img {...this.props} alt="foo" />' },
    { code: '<a />' },
    { code: '<div />' },
    { code: '<img alt={function(e) {} } />' },
    { code: '<div alt={function(e) {} } />' },
    { code: '<img alt={() => void 0} />' },
    { code: '<IMG />' },
    { code: '<UX.Layout>test</UX.Layout>' },
    { code: '<img alt={alt || "Alt text" } />' },
    { code: '<img alt={photo.caption} />;' },
    { code: '<img alt={bar()} />;' },
    { code: '<img alt={foo.bar || ""} />' },
    { code: '<img alt={bar() || ""} />' },
    { code: '<img alt={foo.bar() || ""} />' },
    { code: '<img alt="" />' },
    { code: '<img alt={`${undefined}`} />' },
    { code: '<img alt=" " />' },
    { code: '<img alt="" role="presentation" />' },
    { code: '<img alt="" role="none" />' },
    { code: '<img alt="" role={`presentation`} />' },
    { code: '<img alt="" role={"presentation"} />' },
    { code: '<img alt="this is lit..." role="presentation" />' },
    { code: '<img alt={error ? "not working": "working"} />' },
    { code: '<img alt={undefined ? "working": "not working"} />' },
    { code: '<img alt={plugin.name + " Logo"} />' },
    { code: '<img aria-label="foo" />' },
    { code: '<img aria-labelledby="id1" />' },

    // DEFAULT <object> TESTS
    { code: '<object aria-label="foo" />' },
    { code: '<object aria-labelledby="id1" />' },
    { code: '<object>Foo</object>' },
    { code: '<object><p>This is descriptive!</p></object>' },
    { code: '<Object />' },
    { code: '<object title="An object" />' },

    // DEFAULT <area> TESTS
    { code: '<area aria-label="foo" />' },
    { code: '<area aria-labelledby="id1" />' },
    { code: '<area alt="" />' },
    { code: '<area alt="This is descriptive!" />' },
    { code: '<area alt={altText} />' },
    { code: '<Area />' },

    // DEFAULT <input type="image"> TESTS
    { code: '<input />' },
    { code: '<input type="foo" />' },
    { code: '<input type="image" aria-label="foo" />' },
    { code: '<input type="image" aria-labelledby="id1" />' },
    { code: '<input type="image" alt="" />' },
    { code: '<input type="image" alt="This is descriptive!" />' },
    { code: '<input type="image" alt={altText} />' },
    { code: '<InputImage />' },
    { code: '<Input type="image" alt="" />', settings: componentsSettings },
    { code: '<SomeComponent as="input" type="image" alt="" />', settings: componentsSettings },

    // CUSTOM ELEMENT TESTS FOR ARRAY OPTION TESTS
    { code: '<Thumbnail alt="foo" />;', options: array },
    { code: '<Thumbnail alt={"foo"} />;', options: array },
    { code: '<Thumbnail alt={alt} />;', options: array },
    { code: '<Thumbnail ALT="foo" />;', options: array },
    { code: '<Thumbnail ALT={`This is the ${alt} text`} />;', options: array },
    { code: '<Thumbnail ALt="foo" />;', options: array },
    { code: '<Thumbnail alt="foo" salt={undefined} />;', options: array },
    { code: '<Thumbnail {...this.props} alt="foo" />', options: array },
    { code: '<thumbnail />', options: array },
    { code: '<Thumbnail alt={function(e) {} } />', options: array },
    { code: '<div alt={function(e) {} } />', options: array },
    { code: '<Thumbnail alt={() => void 0} />', options: array },
    { code: '<THUMBNAIL />', options: array },
    { code: '<Thumbnail alt={alt || "foo" } />', options: array },
    { code: '<Image alt="foo" />;', options: array },
    { code: '<Image alt={"foo"} />;', options: array },
    { code: '<Image alt={alt} />;', options: array },
    { code: '<Image ALT="foo" />;', options: array },
    { code: '<Image ALT={`This is the ${alt} text`} />;', options: array },
    { code: '<Image ALt="foo" />;', options: array },
    { code: '<Image alt="foo" salt={undefined} />;', options: array },
    { code: '<Image {...this.props} alt="foo" />', options: array },
    { code: '<image />', options: array },
    { code: '<Image alt={function(e) {} } />', options: array },
    { code: '<div alt={function(e) {} } />', options: array },
    { code: '<Image alt={() => void 0} />', options: array },
    { code: '<IMAGE />', options: array },
    { code: '<Image alt={alt || "foo" } />', options: array },
    { code: '<Object aria-label="foo" />', options: array },
    { code: '<Object aria-labelledby="id1" />', options: array },
    { code: '<Object>Foo</Object>', options: array },
    { code: '<Object><p>This is descriptive!</p></Object>', options: array },
    { code: '<Object title="An object" />', options: array },
    { code: '<Area aria-label="foo" />', options: array },
    { code: '<Area aria-labelledby="id1" />', options: array },
    { code: '<Area alt="" />', options: array },
    { code: '<Area alt="This is descriptive!" />', options: array },
    { code: '<Area alt={altText} />', options: array },
    { code: '<InputImage aria-label="foo" />', options: array },
    { code: '<InputImage aria-labelledby="id1" />', options: array },
    { code: '<InputImage alt="" />', options: array },
    { code: '<InputImage alt="This is descriptive!" />', options: array },
    { code: '<InputImage alt={altText} />', options: array },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    // DEFAULT ELEMENT 'img' TESTS
    { code: '<img />;', errors: [missingPropError('img')] },
    { code: '<img alt />;', errors: [altValueError('img')] },
    { code: '<img alt={undefined} />;', errors: [altValueError('img')] },
    { code: '<img src="xyz" />', errors: [missingPropError('img')] },
    { code: '<img role />', errors: [missingPropError('img')] },
    { code: '<img {...this.props} />', errors: [missingPropError('img')] },
    { code: '<img alt={false || false} />', errors: [altValueError('img')] },
    { code: '<img alt={undefined} role="presentation" />;', errors: [altValueError('img')] },
    { code: '<img alt role="presentation" />;', errors: [altValueError('img')] },
    { code: '<img role="presentation" />;', errors: [preferAltError()] },
    { code: '<img role="none" />;', errors: [preferAltError()] },
    { code: '<img aria-label={undefined} />', errors: [ariaLabelValueError] },
    { code: '<img aria-labelledby={undefined} />', errors: [ariaLabelledbyValueError] },
    { code: '<img aria-label="" />', errors: [ariaLabelValueError] },
    { code: '<img aria-labelledby="" />', errors: [ariaLabelledbyValueError] },
    { code: '<SomeComponent as="img" aria-label="" />', settings: componentsSettings, errors: [ariaLabelValueError] },

    // DEFAULT ELEMENT 'object' TESTS
    { code: '<object />', errors: [objectError] },
    { code: '<object><div aria-hidden /></object>', errors: [objectError] },
    { code: '<object title={undefined} />', errors: [objectError] },
    { code: '<object aria-label="" />', errors: [objectError] },
    { code: '<object aria-labelledby="" />', errors: [objectError] },
    { code: '<object aria-label={undefined} />', errors: [objectError] },
    { code: '<object aria-labelledby={undefined} />', errors: [objectError] },

    // DEFAULT ELEMENT 'area' TESTS
    { code: '<area />', errors: [areaError] },
    { code: '<area alt />', errors: [areaError] },
    { code: '<area alt={undefined} />', errors: [areaError] },
    { code: '<area src="xyz" />', errors: [areaError] },
    { code: '<area {...this.props} />', errors: [areaError] },
    { code: '<area aria-label="" />', errors: [areaError] },
    { code: '<area aria-label={undefined} />', errors: [areaError] },
    { code: '<area aria-labelledby="" />', errors: [areaError] },
    { code: '<area aria-labelledby={undefined} />', errors: [areaError] },

    // DEFAULT ELEMENT 'input type="image"' TESTS
    { code: '<input type="image" />', errors: [inputImageError] },
    { code: '<input type="image" alt />', errors: [inputImageError] },
    { code: '<input type="image" alt={undefined} />', errors: [inputImageError] },
    { code: '<input type="image">Foo</input>', errors: [inputImageError] },
    { code: '<input type="image" {...this.props} />', errors: [inputImageError] },
    { code: '<input type="image" aria-label="" />', errors: [inputImageError] },
    { code: '<input type="image" aria-label={undefined} />', errors: [inputImageError] },
    { code: '<input type="image" aria-labelledby="" />', errors: [inputImageError] },
    { code: '<input type="image" aria-labelledby={undefined} />', errors: [inputImageError] },

    // CUSTOM ELEMENT TESTS FOR ARRAY OPTION TESTS
    {
      code: '<Thumbnail />;',
      errors: [missingPropError('Thumbnail')],
      options: array,
    },
    {
      code: '<Thumbnail alt />;',
      errors: [altValueError('Thumbnail')],
      options: array,
    },
    {
      code: '<Thumbnail alt={undefined} />;',
      errors: [altValueError('Thumbnail')],
      options: array,
    },
    {
      code: '<Thumbnail src="xyz" />',
      errors: [missingPropError('Thumbnail')],
      options: array,
    },
    {
      code: '<Thumbnail {...this.props} />',
      errors: [missingPropError('Thumbnail')],
      options: array,
    },
    { code: '<Image />;', errors: [missingPropError('Image')], options: array },
    { code: '<Image alt />;', errors: [altValueError('Image')], options: array },
    {
      code: '<Image alt={undefined} />;',
      errors: [altValueError('Image')],
      options: array,
    },
    {
      code: '<Image src="xyz" />',
      errors: [missingPropError('Image')],
      options: array,
    },
    {
      code: '<Image {...this.props} />',
      errors: [missingPropError('Image')],
      options: array,
    },
    { code: '<Object />', errors: [objectError], options: array },
    { code: '<Object><div aria-hidden /></Object>', errors: [objectError], options: array },
    { code: '<Object title={undefined} />', errors: [objectError], options: array },
    { code: '<Area />', errors: [areaError], options: array },
    { code: '<Area alt />', errors: [areaError], options: array },
    { code: '<Area alt={undefined} />', errors: [areaError], options: array },
    { code: '<Area src="xyz" />', errors: [areaError], options: array },
    { code: '<Area {...this.props} />', errors: [areaError], options: array },
    { code: '<InputImage />', errors: [inputImageError], options: array },
    { code: '<InputImage alt />', errors: [inputImageError], options: array },
    { code: '<InputImage alt={undefined} />', errors: [inputImageError], options: array },
    { code: '<InputImage>Foo</InputImage>', errors: [inputImageError], options: array },
    { code: '<InputImage {...this.props} />', errors: [inputImageError], options: array },
    { code: '<Input type="image" />', errors: [inputImageError], settings: componentsSettings },
  )).map(parserOptionsMapper),
});
