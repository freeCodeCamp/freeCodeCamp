/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import { UniversalNav } from './components/UniversalNav';
import NavLinks from './components/NavLinks';

import { forumLocation } from '../../../config/env.json';

describe('<UniversalNav />', () => {
  it('renders to the DOM', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<UniversalNav {...UniversalNavProps} />);
    const result = shallow.getRenderOutput();
    expect(result).toBeTruthy();
  });
});
describe('<NavLinks />', () => {
  const root = TestRenderer.create(<NavLinks />).root;
  const aTags = root.findAllByType('a');

  // reduces the aTags to href links
  const links = aTags.reduce((acc, item) => {
    acc.push(item._fiber.pendingProps.href);
    return acc;
  }, []);

  const expectedLinks = ['/learn', '/news', forumLocation];

  it('renders to the DOM', () => {
    expect(root).toBeTruthy();
  });
  it('has 3 links', () => {
    expect(aTags.length === 3).toBeTruthy();
  });

  it('has links to news, forum, learn and portfolio', () => {
    // checks if all links in expected links exist in links
    expect(expectedLinks.every(elem => links.indexOf(elem) > -1)).toBeTruthy();
  });
});

const UniversalNavProps = {
  displayMenu: false,
  menuButtonRef: {},
  searchBarRef: {},
  toggleDisplayMenu: function() {}
};
