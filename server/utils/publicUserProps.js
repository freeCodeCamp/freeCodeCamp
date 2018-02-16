import { isURL } from 'validator';

import { addPlaceholderImage } from '../utils';
import {
  prepUniqueDaysByHours,
  calcCurrentStreak,
  calcLongestStreak
} from '../utils/user-stats';

export const publicUserProps = [
  'about',
  'calendar',
  'challengeMap',
  'githubURL',
  'isApisMicroservicesCert',
  'isBackEndCert',
  'isCheater',
  'isDataVisCert',
  'isFrontEndCert',
  'isFullStackCert',
  'isFrontEndLibsCert',
  'isGithubCool',
  'isHonest',
  'isInfosecQaCert',
  'isJsAlgoDataStructCert',
  'isLocked',
  'isRespWebDesignCert',
  'linkedin',
  'location',
  'name',
  'points',
  'portfolio',
  'projects',
  'streak',
  'twitter',
  'username',
  'website'
];

export const userPropsForSession = [
  ...publicUserProps,
  'currentChallengeId',
  'email',
  'id',
  'languageTag',
  'sendQuincyEmail',
  'theme'
];

export function normaliseUserFields(user) {
  const about = user.bio && !user.about ? user.bio : user.about;
  const picture = user.picture || addPlaceholderImage(user.username);
  const twitter = user.twitter && isURL(user.twitter) ?
    user.twitter :
    user.twitter && `https://www.twitter.com/${user.twitter.replace(/^@/, '')}`;
  return { about, picture, twitter };
}

export function getProgress(progressTimestamps, timezone = 'EST') {
  const calendar = progressTimestamps
  .map((objOrNum) => {
    return typeof objOrNum === 'number' ?
    objOrNum :
      objOrNum.timestamp;
    })
    .filter((timestamp) => {
      return !!timestamp;
    })
    .reduce((data, timeStamp) => {
      data[Math.floor(timeStamp / 1000)] = 1;
      return data;
  }, {});
  const timestamps = progressTimestamps
    .map(objOrNum => {
      return typeof objOrNum === 'number' ?
        objOrNum :
        objOrNum.timestamp;
    });
  const uniqueHours = prepUniqueDaysByHours(timestamps, timezone);
  const streak = {
    longest: calcLongestStreak(uniqueHours, timezone),
    current: calcCurrentStreak(uniqueHours, timezone)
  };
  return { calendar, streak };
}
