import debugFactory from 'debug';

const censor = '**********************:P********';
const debug = debugFactory('fcc:services:user');
const protectedUserFields = {
  password: censor,
  profiles: censor
};

export default function userServices() {
  return {
    name: 'user',
    read: (req, resource, params, config, cb) => {
      let { user } = req;
      if (user) {
        debug('user is signed in');
        // Zalgo!!!
        return process.nextTick(() => {
          cb(
            null,
            {
              ...user.toJSON(),
              ...protectedUserFields
            }
          );
        });
      }
      debug('user is not signed in');
      return process.nextTick(() => {
        cb(null, {});
      });
    }
  };
}
