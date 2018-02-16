import { Observable } from 'rx';
import _ from 'lodash';

import {
  userPropsForSession,
  normaliseUserFields
} from '../utils/publicUserProps';

export default function userServices() {
  return {
    name: 'user',
    read: (req, resource, params, config, cb) => {
      const { user } = req;
      Observable.if(
        () => !user,
        Observable.of({}),
        Observable.defer(() => user.getChallengeMap$())
          .map(challengeMap => ({ ...user.toJSON(), challengeMap }))
          .map(user => ({
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
