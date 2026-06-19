/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { navigate, withPrefix } from 'gatsby';

import ShowDailyCodingChallenge from '../../../client-only-routes/show-daily-coding-challenge';
import RedirectToArchive from '../../../components/redirect-daily-challenge-archive';
import {
  isValidDateOrMonthDayString,
  isValidDateString,
  toMonthDay
} from '../../../components/daily-coding-challenge/helpers';

interface Props {
  params: {
    '*': string;
  };
}

function DailyCodingChallengeAll(props: Props): JSX.Element | null {
  const param = props.params['*'];

  if (!isValidDateOrMonthDayString(param)) {
    return <RedirectToArchive />;
  }

  // Redirect "YYYY-MM-DD" params to their "MM-DD" equivalent
  if (isValidDateString(param)) {
    if (typeof window !== 'undefined') {
      void navigate(
        withPrefix(`/learn/daily-coding-challenge/${toMonthDay(param)}`),
        { replace: true }
      );
    }
    return null;
  }

  return <ShowDailyCodingChallenge date={param} />;
}

DailyCodingChallengeAll.displayName = 'DailyCodingChallengeAll';
export default DailyCodingChallengeAll;
