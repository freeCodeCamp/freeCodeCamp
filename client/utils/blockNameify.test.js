/* global expect */
import { __nameifyHelper } from './blockNameify';

describe('__nameifyHelper', () => {
  it('uses a preformatted phrase if there is one', () => {
    expect(__nameifyHelper('css-grid', 'english')).toBe('CSS Grid');
  });
  it('falls back to the English title if translation is missing', () => {
    expect(__nameifyHelper('css-grid', 'cardassian')).toBe('CSS Grid');
    expect(__nameifyHelper('basic-css', 'cardassian')).toBe('Basic CSS');
  });
});
