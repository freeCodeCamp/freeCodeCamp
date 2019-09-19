/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';

import Header from './';
import NavLinks from './components/NavLinks';

describe('<Header />', () => {
  it('renders to the DOM', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<Header />);
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

  const expectedLinks = ['/', '/portfolio'];

  it('renders to the DOM', () => {
    expect(root).toBeTruthy();
  });
  it('has 3 a tags', () => {
    expect(aTags.length === 3).toBeTruthy();
  });

  it('has link to portfolio', () => {
    // checks if all links in expected links exist in links
    expect(expectedLinks.every(elem => links.indexOf(elem) > -1)).toBeTruthy();
  });
});
