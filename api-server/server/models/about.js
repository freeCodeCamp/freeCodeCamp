import { createActiveUsers } from '../utils/about.js';

module.exports = function(About) {
  const activeUsers = createActiveUsers();
  let activeUsersForRendering = 0;
  About.getActiveUsers = async function getActiveUsers() {
    // converting to promise automatically will subscribe to Observable
    // initiating the sequence above
    const usersActive = await activeUsers.toPromise();
    activeUsersForRendering = usersActive;
    return usersActive;
  };

  About.getActiveUsersForRendering = () => activeUsersForRendering;

  About.remoteMethod('getActiveUsers', {
    http: {
      path: '/get-active-users',
      verb: 'get'
    },
    returns: {
      type: 'number',
      arg: 'activeUsers'
    }
  });
};
