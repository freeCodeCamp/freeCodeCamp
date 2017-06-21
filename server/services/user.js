import debug from 'debug';
import _ from 'lodash';

const publicUserProps = [
  'id',
  'name',
  'username',
  'bio',
  'theme',
  'picture',
  'points',
  'email',
  'languageTag',

  'isCheater',
  'isGithubCool',

  'isLocked',
  'isAvailableForHire',
  'isFrontEndCert',
  'isBackEndCert',
  'isDataVisCert',
  'isFullStackCert',

  'githubURL',
  'sendMonthlyEmail',
  'sendNotificationEmail',
  'sendQuincyEmail',

  'currentChallengeId',
  'challengeMap'
];
const log = debug('fcc:services:user');

export default function userServices() {
  return {
    name: 'user',
    read: (req, resource, params, config, cb) => {
      let { user } = req;
      if (user) {
        log('user is signed in');
        return user.getChallengeMap$()
          .map(challengeMap => ({ ...user.toJSON(), challengeMap }))
          .subscribe(
            user => cb(
              null,
              {
                entities: {
                  user: {
                    [user.username]: {
                      ..._.pick(user, publicUserProps),
                      isTwitter: !!user.twitter,
                      isLinkedIn: !!user.linkedIn
                    }
                  }
                },
                result: user.username
              }
            ),
            cb
          );
      }
      debug('user is not signed in');
      // Zalgo!!!
      return process.nextTick(() => {
        cb(null, {});
      });
    }
  };
}
