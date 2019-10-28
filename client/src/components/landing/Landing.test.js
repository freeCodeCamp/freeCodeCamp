/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { IndexPage } from '../../pages';
import { Articles } from './Articles.json';
import isValidArticle from '../../utils/isValidArticle';

describe('<Landing />', () => {
  it('it renders', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<IndexPage />);
    const result = shallow.getRenderOutput();
    expect(result).toBeTruthy();
  });

  it('it has valid article objects', () => {
    let articlesAreValid = Articles.every(isValidArticle);
    expect(articlesAreValid).toBeTruthy();
  });
});
