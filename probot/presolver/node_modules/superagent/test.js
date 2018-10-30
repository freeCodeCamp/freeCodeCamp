const request = require('./lib/node');

request.post('nevermind')
        .field({a:1,b:2})
        .attach('c', 'does-not-exist.txt')
        .then(() => assert.fail("It should not allow this"))
        .catch(() => true);
