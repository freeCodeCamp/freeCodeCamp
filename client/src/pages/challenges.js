// this exists purely to redirect legacy challenge paths to /learn
import React from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';

import createRedirect from '../components/createRedirect';

const RedirectToLearn = createRedirect('/learn');

const Redirect = props => {
  if (typeof window !== 'undefined') {
    navigate(toLearnPath(props));
  }
  return null;
};

const Challenges = () => (
  <Router basepath='/challenges'>
    <Redirect path='/:superBlock/' />
    <Redirect path='/:superBlock/:block/' />
    <Redirect path='/:superBlock/:block/:challenge' />
    <RedirectToLearn default={true} />
  </Router>
);

Challenges.displayName = 'Challenges';

export function toLearnPath({ superBlock, block, challenge }) {
  let path = '/learn';
  if (superBlock) path += `/${superBlock}`;
  if (block) path += `/${block}`;
  if (challenge) path += `/${challenge}`;
  return path;
}

export default Challenges;
