---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

A strategy is a way of authenticating a user. You can use a strategy for allowing users to authenticate based on locally saved information (if you have them register first) or from a variety of providers such as Google or GitHub. For this project, we will set up a local strategy. To see a list of the hundreds of strategies, visit Passport's site [here](http://passportjs.org/).

Add `passport-local` as a dependency and add it to your server as follows: `const LocalStrategy = require('passport-local');`

Now you will have to tell passport to **use** an instantiated LocalStrategy object with a few settings defined. Make sure this (as well as everything from this point on) is encapsulated in the database connection since it relies on it!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

This is defining the process to use when we try to authenticate someone locally. First, it tries to find a user in our database with the username entered, then it checks for the password to match, then finally, if no errors have popped up that we checked for, like an incorrect password, the `user`'s object is returned and they are authenticated.

Many strategies are set up using different settings, but generally it is easy to set it up based on the README in that strategy's repository. A good example of this is the GitHub strategy where we don't need to worry about a username or password because the user will be sent to GitHub's auth page to authenticate. As long as they are logged in and agree then GitHub returns their profile for us to use.

In the next step, we will set up how to actually call the authentication strategy to validate a user based on form data!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b).

# --hints--

Passport-local should be a dependency.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Passport-local should be correctly required and setup.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
