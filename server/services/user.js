import _ from 'lodash';
// import debug from 'debug';
// use old rxjs
import { Observable } from 'rx';

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

  'isLocked',
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
  'challengeMap'
];

// const log = debug('fcc:services:user');

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
                  ..._.pick(user, publicUserProps),
                  isEmailVerified: !!user.emailVerified,
                  isTwitter: !!user.twitter,
                  isLinkedIn: !!user.linkedIn,
                  isWebsite: !!user.website
                }
              }
            },
            result: user.username
          }))
      )
        .subscribe(
          user => cb(null, user),
          cb
        );
    }
  };
}
