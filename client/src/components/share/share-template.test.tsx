import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ShareTemplate } from './share-template';

const redirectURL = 'string';

describe('Share Template Testing', () => {
  render(
    <ShareTemplate
      xRedirectURL={redirectURL}
      blueSkyRedirectURL={redirectURL}
      threadsRedirectURL={redirectURL}
      facebookRedirectURL={redirectURL}
      linkedInRedirectURL={redirectURL}
    />
  );
  test('Testing share template Click Redirect Event', () => {
    const twitterLink = screen.queryByRole('link', {
      name: 'buttons.share-on-x aria.opens-new-window'
    });

    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'string');

    const blueSkyLink = screen.queryByRole('link', {
      name: 'buttons.share-on-bluesky aria.opens-new-window'
    });

    expect(blueSkyLink).toBeInTheDocument();
    expect(blueSkyLink).toHaveAttribute('href', 'string');

    const threadsLink = screen.queryByRole('link', {
      name: 'buttons.share-on-threads aria.opens-new-window'
    });

    expect(threadsLink).toBeInTheDocument();
    expect(threadsLink).toHaveAttribute('href', 'string');

    const facebookLink = screen.queryByRole('link', {
      name: 'buttons.share-on-facebook aria.opens-new-window'
    });

    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'string');

    const linkedInLink = screen.queryByRole('link', {
      name: 'buttons.share-on-linkedin aria.opens-new-window'
    });

    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'string');
  });
});
