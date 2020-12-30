// this exists purely to redirect legacy challenge paths to /learn
import React from 'react';
import { Router } from '@reach/router';
import { navigate, withPrefix } from 'gatsby';

const Redirect = props => {
  if (typeof window !== 'undefined') {
    navigate(toLearnPath(props));
  }
  return null;
};

const Challenges = () => (
  <Router basepath={withPrefix('/challenges')}>
    <Redirect path='/:superBlock/' />
    <Redirect path='/:superBlock/:block/' />
    <Redirect path='/:superBlock/:block/:challenge' />
    <Redirect default={true} />
  </Router>
);

Challenges.displayName = 'Challenges';

export function toLearnPath({ superBlock, block, challenge }) {
  let path = withPrefix('/learn');
  if (superBlock) path += `/${superBlock}`;
  if (block) path += `/${block}`;
  if (challenge) path += `/${challenge}`;
  return path;
}

export default Challenges;
