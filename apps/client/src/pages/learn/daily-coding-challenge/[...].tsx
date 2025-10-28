/* eslint-disable filenames-simple/naming-convention */
import { Router } from '@gatsbyjs/reach-router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowDailyCodingChallenge from '../../../client-only-routes/show-daily-coding-challenge';
import RedirectToArchive from '../../../components/redirect-daily-challenge-archive';

const inlineStyles = {
  minHeight: 0,
  height: '100%'
};

function DailyCodingChallengeAll(): JSX.Element {
  return (
    // Router adds an element around the editor, messing with the layout because the editor is a flex item
    // These few inline styles fix it.
    <Router style={inlineStyles}>
      <ShowDailyCodingChallenge
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        path={withPrefix('/learn/daily-coding-challenge/:date')}
      />

      <RedirectToArchive default />
    </Router>
  );
}

DailyCodingChallengeAll.displayName = 'DailyCodingChallengeAll';
export default DailyCodingChallengeAll;
