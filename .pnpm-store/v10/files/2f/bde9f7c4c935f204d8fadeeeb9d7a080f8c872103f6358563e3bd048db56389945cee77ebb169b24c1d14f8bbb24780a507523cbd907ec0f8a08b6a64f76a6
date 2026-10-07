/**
 * @fileoverview <audio> and <video> elements must have a <track> for captions.
 * @author Ethan Cohen
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import parsers from '../../__util__/helpers/parsers';
import rule from '../../../src/rules/media-has-caption';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'Media elements such as <audio> and <video> must have a <track> for captions.',
  type: 'JSXOpeningElement',
};

const customSchema = [
  {
    audio: ['Audio'],
    video: ['Video'],
    track: ['Track'],
  },
];

const componentsSettings = {
  'jsx-a11y': {
    polymorphicPropName: 'as',
    components: {
      Audio: 'audio',
      Video: 'video',
      Track: 'track',
    },
  },
};

ruleTester.run('media-has-caption', rule, {
  valid: parsers.all([].concat(
    { code: '<div />;' },
    { code: '<MyDiv />;' },
    { code: '<audio><track kind="captions" /></audio>' },
    { code: '<audio><track kind="Captions" /></audio>' },
    {
      code: '<audio><track kind="Captions" /><track kind="subtitles" /></audio>',
    },
    { code: '<video><track kind="captions" /></video>' },
    { code: '<video><track kind="Captions" /></video>' },
    {
      code: '<video><track kind="Captions" /><track kind="subtitles" /></video>',
    },
    {
      code: '<audio muted={true}></audio>',
    },
    {
      code: '<video muted={true}></video>',
    },
    {
      code: '<video muted></video>',
    },
    {
      code: '<Audio><track kind="captions" /></Audio>',
      options: customSchema,
    },
    {
      code: '<audio><Track kind="captions" /></audio>',
      options: customSchema,
    },
    {
      code: '<Video><track kind="captions" /></Video>',
      options: customSchema,
    },
    {
      code: '<video><Track kind="captions" /></video>',
      options: customSchema,
    },
    {
      code: '<Audio><Track kind="captions" /></Audio>',
      options: customSchema,
    },
    {
      code: '<Video><Track kind="captions" /></Video>',
      options: customSchema,
    },
    {
      code: '<Video muted></Video>',
      options: customSchema,
    },
    {
      code: '<Video muted={true}></Video>',
      options: customSchema,
    },
    {
      code: '<Audio muted></Audio>',
      options: customSchema,
    },
    {
      code: '<Audio muted={true}></Audio>',
      options: customSchema,
    },
    {
      code: '<Audio><track kind="captions" /></Audio>',
      settings: componentsSettings,
    },
    {
      code: '<audio><Track kind="captions" /></audio>',
      settings: componentsSettings,
    },
    {
      code: '<Video><track kind="captions" /></Video>',
      settings: componentsSettings,
    },
    {
      code: '<video><Track kind="captions" /></video>',
      settings: componentsSettings,
    },
    {
      code: '<Audio><Track kind="captions" /></Audio>',
      settings: componentsSettings,
    },
    {
      code: '<Video><Track kind="captions" /></Video>',
      settings: componentsSettings,
    },
    {
      code: '<Video muted></Video>',
      settings: componentsSettings,
    },
    {
      code: '<Video muted={true}></Video>',
      settings: componentsSettings,
    },
    {
      code: '<Audio muted></Audio>',
      settings: componentsSettings,
    },
    {
      code: '<Audio muted={true}></Audio>',
      settings: componentsSettings,
    },
    {
      code: '<Box as="audio" muted={true}></Box>',
      settings: componentsSettings,
    },
  )).map(parserOptionsMapper),
  invalid: parsers.all([].concat(
    { code: '<audio><track /></audio>', errors: [expectedError] },
    {
      code: '<audio><track kind="subtitles" /></audio>',
      errors: [expectedError],
    },
    { code: '<audio />', errors: [expectedError] },
    { code: '<video><track /></video>', errors: [expectedError] },
    {
      code: '<video><track kind="subtitles" /></video>',
      errors: [expectedError],
    },
    {
      code: '<Audio muted={false}></Audio>',
      options: customSchema,
      errors: [expectedError],
    },
    {
      code: '<Video muted={false}></Video>',
      options: customSchema,
      errors: [expectedError],
    },
    {
      code: '<Audio muted={false}></Audio>',
      settings: componentsSettings,
      errors: [expectedError],
    },
    {
      code: '<Video muted={false}></Video>',
      settings: componentsSettings,
      errors: [expectedError],
    },
    { code: '<video />', errors: [expectedError] },
    { code: '<audio>Foo</audio>', errors: [expectedError] },
    { code: '<video>Foo</video>', errors: [expectedError] },
    { code: '<Audio />', options: customSchema, errors: [expectedError] },
    { code: '<Video />', options: customSchema, errors: [expectedError] },
    { code: '<Audio />', settings: componentsSettings, errors: [expectedError] },
    { code: '<Video />', settings: componentsSettings, errors: [expectedError] },
    { code: '<audio><Track /></audio>', options: customSchema, errors: [expectedError] },
    { code: '<video><Track /></video>', options: customSchema, errors: [expectedError] },
    {
      code: '<Audio><Track kind="subtitles" /></Audio>',
      options: customSchema,
      errors: [expectedError],
    },
    {
      code: '<Video><Track kind="subtitles" /></Video>',
      options: customSchema,
      errors: [expectedError],
    },
    {
      code: '<Audio><Track kind="subtitles" /></Audio>',
      settings: componentsSettings,
      errors: [expectedError],
    },
    {
      code: '<Video><Track kind="subtitles" /></Video>',
      settings: componentsSettings,
      errors: [expectedError],
    },
    {
      code: '<Box as="audio"><Track kind="subtitles" /></Box>',
      settings: componentsSettings,
      errors: [expectedError],
    },
  )).map(parserOptionsMapper),
});
