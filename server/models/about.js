import { createActiveUsers } from '../utils/about.js';


module.exports = function(About) {
  const activeUsers = createActiveUsers();
  About.getActiveUsers = function getActiveUsers() {
    // converting to promise automatically will subscribe to Observable
    // initiating the sequence above
    return activeUsers.toPromise();
  };

  About.remoteMethod(
    'getActiveUsers',
    {
      http: {
        path: '/get-active-users',
        verb: 'get'
      },
      returns: {
        type: 'number',
        arg: 'activeUsers'
      }
    }
  );
};
