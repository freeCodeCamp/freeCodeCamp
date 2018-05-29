import { Observable } from 'rx';
import _ from 'lodash';

import {
  getProgress,
  normaliseUserFields,
  userPropsForSession
} from '../utils/publicUserProps';

export default function userServices() {
  return {
    name: 'user',
    read: function readUserService(
      req,
      resource,
      params,
      config,
      cb) {
      const queryUser = req.user;
      const source = queryUser && Observable.forkJoin(
        queryUser.getCompletedChallenges$(),
        queryUser.getPoints$(),
        (completedChallenges, progressTimestamps) => ({
          completedChallenges,
          progress: getProgress(progressTimestamps, queryUser.timezone)
        })
      );
      Observable.if(
        () => !queryUser,
        Observable.of({}),
        Observable.defer(() => source)
          .map(({ completedChallenges, progress }) => ({
            ...queryUser.toJSON(),
            ...progress,
            completedChallenges
          }))
          .map(
            user => ({
              entities: {
                user: {
                  [user.username]: {
                    ..._.pick(user, userPropsForSession),
                    isEmailVerified: !!user.emailVerified,
                    isGithub: !!user.githubProfile,
                    isLinkedIn: !!user.linkedIn,
                    isTwitter: !!user.twitter,
                    isWebsite: !!user.website,
                    ...normaliseUserFields(user)
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
