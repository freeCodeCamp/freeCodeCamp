import React from 'react';
import TestRenderer from 'react-test-renderer';
import { vi, describe, it, expect } from 'vitest';
import HTML from './html';

vi.mock('../config/env.json', () => ({
  clientLocale: 'arabic'
}));

vi.mock('@freecodecamp/shared/config/i18n', () => ({
  rtlLangs: ['arabic']
}));

describe('<HTML />', () => {
  it('should apply dir="rtl" to the html tag when an RTL language is selected', () => {
    const testRenderer = TestRenderer.create(
      <HTML body="<div>Test Body</div>" />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('html').props.dir).toEqual('rtl');
  });
});
