import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShareTemplate } from './share-template';

const redirectURL = 'string';

describe('Share Template Testing', () => {
  render(
    <ShareTemplate
      xRedirectURL={redirectURL}
      blueSkyRedirectURL={redirectURL}
    />
  );
  test('Testing share template Click Redirect Event', () => {
    const links = screen.queryAllByRole('link', {
      name: 'buttons.tweet aria.opens-new-window'
    });
    expect(links[0]).toBeInTheDocument();
    expect(links[0]).toHaveAttribute('href', 'string');
    expect(links[1]).toBeInTheDocument();
    expect(links[1]).toHaveAttribute('href', 'string');
  });
});
