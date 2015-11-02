import debugFactory from 'debug';
import assign from 'object.assign';

const censor = '**********************:P********';
const debug = debugFactory('freecc:services:user');
const protectedUserFields = {
  id: censor,
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
          cb(null, assign({}, user.toJSON(), protectedUserFields));
        });
      }
      debug('user is not signed in');
      return process.nextTick(() => {
        cb(null, {});
      });
    }
  };
}
