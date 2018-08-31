/**
 *
 * Any ref to fixCompletedChallengesItem should be removed post
 * a db migration to fix all completedChallenges
 *
 */

import { Observable } from 'rx';
import _ from 'lodash';

import {
  getProgress,
  normaliseUserFields,
  userPropsForSession
} from '../utils/publicUserProps';
import { fixCompletedChallengeItem } from '../../common/utils';

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
      console.log(queryUser.completedChallengeCount)
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
            completedChallenges: completedChallenges.map(
              fixCompletedChallengeItem
            )
          }))
          .map(
            user => ({
              entities: {
                user: {
                  [user.username]: {
                    ..._.pick(user, userPropsForSession),
                    isEmailVerified: !!user.emailVerified,
                    isGithub: !!user.githubProfile,
                    isLinkedIn: !!user.linkedin,
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
