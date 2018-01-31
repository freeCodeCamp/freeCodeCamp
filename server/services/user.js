import { Observable } from 'rx';
import _ from 'lodash';

import {
  prepUniqueDaysByHours,
  calcCurrentStreak,
  calcLongestStreak
} from '../utils/user-stats';
import { addPlaceholderImage } from '../utils/index';

const publicUserProps = [
  'id',
  'name',
  'username',
  'about',
  'location',
  'theme',
  'points',
  'email',
  'website',
  'languageTag',

  'isCheater',
  'isGithubCool',

  'projects',
  'isLocked',
  'isHonest',
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

export default function userServices(app) {
  return {
    name: 'user',
    read: async function readUserService(
      req,
      resource,
      { otherUser },
      config,
      cb) {
      const { User } = app.models;
      let queryUser;
      if (!otherUser) {
        queryUser = req.user;
      } else {
        try {
          queryUser = await User.findOne$(
            { where: { username: otherUser } }
          ).toPromise();
        } catch (err) {
          queryUser = null;
        }
      }
      const source = queryUser && Observable.forkJoin(
        queryUser.getChallengeMap$(),
        queryUser.getPoints$(),
        (challengeMap, progressTimestamps) => ({
          challengeMap,
          progress: getProgress(progressTimestamps, queryUser.timezone)
        })
      );
      Observable.if(
        () => !queryUser,
        Observable.of({}),
        Observable.defer(() => source)
          .map(({ challengeMap, progress }) => ({
            ...queryUser.toJSON(),
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
                    isWebsite: !!user.website,
                    picture: user.picture || addPlaceholderImage(user.username)
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

