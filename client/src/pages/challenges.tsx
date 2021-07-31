// this exists purely to redirect legacy challenge paths to /learn
import React from 'react';
import { Router } from '@reach/router';
import { navigate, withPrefix } from 'gatsby';

import toLearnPath from '../utils/to-learn-path';

// interface RedirectProps1 {
//   superBlock: string;
//   block: string;
//   challenge: string;
// }

// interface RedirectProps2 {
//   path?: string;
//   default?: boolean;
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function Redirect(props) {
  if (typeof window !== 'undefined') {
    void navigate(toLearnPath(props));
  }
  return null;
}
// Unsure about Redirect props shape:
// toLearnPath() takes required superBlock, block, and challenge props
// but usage below has optional path and default props

function Challenges(): JSX.Element {
  return (
    <Router basepath={withPrefix('/challenges')}>
      <Redirect path='/:superBlock/' />
      <Redirect path='/:superBlock/:block/' />
      <Redirect path='/:superBlock/:block/:challenge' />
      <Redirect default={true} />
    </Router>
  );
}

Challenges.displayName = 'Challenges';

export default Challenges;
