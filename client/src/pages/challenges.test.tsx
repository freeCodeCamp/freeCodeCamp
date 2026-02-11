import { render } from '@testing-library/react';
import { navigate, withPrefix } from 'gatsby';
import React from 'react';
import { describe, it, expect } from 'vitest';

import Challenges from './challenges/index';
import ChallengesRedirect from './challenges/[...]';

describe('Challenges', () => {
  const learn = withPrefix('/learn');

  it('should handle redirect to /learn', () => {
    render(<Challenges />);

    expect(navigate).toHaveBeenLastCalledWith(learn);
  });

  it('should handle redirect to /learn/:super-block', () => {
    render(<ChallengesRedirect params={{ '*': 'super-block' }} />);

    expect(navigate).toHaveBeenLastCalledWith(`${learn}/super-block`);
  });

  it('should handle redirect to /learn/:super-block/:block', () => {
    render(<ChallengesRedirect params={{ '*': 'super-block/block' }} />);

    expect(navigate).toHaveBeenLastCalledWith(`${learn}/super-block/block`);
  });

  it('should handle redirect to /learn/:super-block/:block/:challenge', () => {
    render(
      <ChallengesRedirect params={{ '*': 'super-block/block/challenge' }} />
    );

    expect(navigate).toHaveBeenLastCalledWith(
      `${learn}/super-block/block/challenge`
    );
  });
});
