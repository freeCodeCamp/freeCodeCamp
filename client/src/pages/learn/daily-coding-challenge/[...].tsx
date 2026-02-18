/* eslint-disable filenames-simple/naming-convention */
import React from 'react';

import ShowDailyCodingChallenge from '../../../client-only-routes/show-daily-coding-challenge';

interface Props {
  params: {
    '*': string;
  };
}

function DailyCodingChallengeAll(props: Props): JSX.Element {
  return <ShowDailyCodingChallenge date={props.params['*']} />;
}

DailyCodingChallengeAll.displayName = 'DailyCodingChallengeAll';
export default DailyCodingChallengeAll;
