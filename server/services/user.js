import { Observable } from 'rx';
import _ from 'lodash';

import {
  prepUniqueDaysByHours,
  calcCurrentStreak,
  calcLongestStreak
} from '../utils/user-stats';

const publicUserProps = [
  'id',
  'name',
  'username',
  'bio',
  'location',
  'theme',
  'picture',
  'points',
  'email',
  'website',
  'languageTag',

  'isCheater',
  'isGithubCool',

  'projects',
  'isLocked',
  'isHonest',
  'isAvailableForHire',
  'isFrontEndCert',
  'isBackEndCert',
  'isDataVisCert',
  'isFullStackCert',
  'isRespWebDesignCert',
  'isFrontEndLibsCert',
  'isJsAlgoDataStructCert',
  'isApisMicroservicesCert',
  'isInfosecQaCert',

  'twitter',
  'linkedin',
  'website',
  'portfolio',
  'githubURL',
  'sendMonthlyEmail',
  'sendNotificationEmail',
  'sendQuincyEmail',
  'isPublicEmail',

  'currentChallengeId',
  'challengeMap',
  'calendar',
  'streak'
];

function getProgress(progressTimestamps, timezone = 'EST') {
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

export default function userServices() {
  return {
    name: 'user',
    read: (req, resource, params, config, cb) => {
      const { user } = req;
      const source = Observable.forkJoin(
        user.getChallengeMap$(),
        user.getPoints$(),
        (challengeMap, progressTimestamps) => ({
          challengeMap,
          progress: getProgress(progressTimestamps, user.timezone)
        })
      );
      Observable.if(
        () => !user,
        Observable.of({}),
        Observable.defer(() => source)
          .map(({ challengeMap, progress }) => ({
            ...user.toJSON(),
            ...progress,
            challengeMap
          }))
          .map(
            user => ({
              entities: {
                user: {
                  [user.username]: {
                    ..._.pick(user, publicUserProps),
                    isEmailVerified: !!user.emailVerified,
                    isGithub: !!user.githubURL,
                    isLinkedIn: !!user.linkedIn,
                    isTwitter: !!user.twitter,
                    isWebsite: !!user.website
                  }
                }
              },
              result: user.username
            })
          )
        )
        .subscribe(
          user => cb(null, user),
          cb
        );
    }
  };
}

