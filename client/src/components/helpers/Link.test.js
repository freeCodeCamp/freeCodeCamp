/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Link';

describe('<Link />', () => {
  const externalLink = renderer
    .create(<Link external={true} to='/home' />)
    .toJSON();
  const gatsbyLink = renderer.create(<Link to='/home' />).toJSON();

  it('renders to the DOM', () => {
    expect(gatsbyLink).toBeTruthy();
  });

  it('sets target for external links', () => {
    expect(externalLink.props.target).toEqual('_blank');
  });

  it('does not specify target in gatsbyLink', () => {
    expect(gatsbyLink.props.target).toBeFalsy();
  });
});
