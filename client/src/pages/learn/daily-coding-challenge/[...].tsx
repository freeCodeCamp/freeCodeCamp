/* eslint-disable filenames-simple/naming-convention */
import React, { useEffect } from 'react';
import { withPrefix } from 'gatsby';

import ShowDailyCodingChallenge from '../../../client-only-routes/show-daily-coding-challenge';
import RedirectToArchive from '../../../components/redirect-daily-challenge-archive';
import {
  isValidDateOrMonthDayString,
  toMonthDay
} from '../../../components/daily-coding-challenge/helpers';

interface Props {
  params: {
    '*': string;
  };
}

function DailyCodingChallengeAll(props: Props): JSX.Element | null {
  const param = props.params['*'];
  const isValid = isValidDateOrMonthDayString(param);
  const monthDay = isValid ? toMonthDay(param) : param;

  // Swap "YYYY-MM-DD" links to their "MM-DD" equivalent in the address bar
  useEffect(() => {
    if (isValid && monthDay !== param) {
      window.history.replaceState(
        null,
        '',
        withPrefix(`/learn/daily-coding-challenge/${monthDay}`)
      );
    }
  }, [isValid, monthDay, param]);

  if (!isValid) {
    return <RedirectToArchive />;
  }

  return <ShowDailyCodingChallenge date={monthDay} />;
}

DailyCodingChallengeAll.displayName = 'DailyCodingChallengeAll';
export default DailyCodingChallengeAll;
