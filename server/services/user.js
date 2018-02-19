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
                    ..._.pick(user, userPropsForSession),
                    isEmailVerified: !!user.emailVerified,
                    isGithub: !!user.githubURL,
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
