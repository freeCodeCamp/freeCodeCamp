/* eslint-disable filenames-simple/naming-convention */
import React from 'react';

import ShowDailyCodingChallenge from '../../../client-only-routes/show-daily-coding-challenge';
import RedirectToArchive from '../../../components/redirect-daily-challenge-archive';
import { isValidDateString } from '../../../components/daily-coding-challenge/helpers';

interface Props {
  params: {
    '*': string;
  };
}

function DailyCodingChallengeAll(props: Props): JSX.Element {
  if (!isValidDateString(props.params['*'])) {
    return <RedirectToArchive />;
  }

  return <ShowDailyCodingChallenge date={props.params['*']} />;
}

DailyCodingChallengeAll.displayName = 'DailyCodingChallengeAll';
export default DailyCodingChallengeAll;
