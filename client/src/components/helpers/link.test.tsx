/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { create } from 'react-test-renderer';

import Link from './link';

describe('<Link />', () => {
  const externalLink = create(<Link external={true} to='/home' />).toJSON();
  const gatsbyLink = create(<Link to='/home' />).toJSON();

  it('renders to the DOM', () => {
    expect(gatsbyLink).toBeTruthy();
  });

  it('sets target for external links', () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(externalLink.props.target).toEqual('_blank');
  });

  it('does not specify target in gatsbyLink', () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(gatsbyLink.props.target).toBeFalsy();
  });
});
