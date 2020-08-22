---
id: 5895f70df9fc0f352b528e68
title: Authentication Strategies
challengeType: 2
isHidden: false
forumTopicId: 301547
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
A strategy is a way of authenticating a user. You can use a strategy for allowing users to authenticate based on locally saved information (if you have them register first) or from a variety of providers such as Google or GitHub. For this project we will set up a local strategy. To see a list of the 100's of strategies, visit Passports site <a href='http://passportjs.org/'>here</a>.
Add <em>passport-local</em> as a dependency and add it to your server as follows: <code>const LocalStrategy = require('passport-local');</code>
Now you will have to tell passport to <b>use</b> an instantiated LocalStrategy object with a few settings defined. Make sure this as well as everything from this point on is encapsulated in the database connection since it relies on it!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.collection('users').findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

This is defining the process to take when we try to authenticate someone locally. First it tries to find a user in our database with the username entered, then it checks for the password to match, then finally if no errors have popped up that we checked for, like an incorrect password, the users object is returned and they are authenticated.
Many strategies are set up using different settings, general it is easy to set it up based on the README in that strategies repository though. A good example of this is the GitHub strategy where we don't need to worry about a username or password because the user will be sent to GitHub's auth page to authenticate and as long as they are logged in and agree then GitHub returns their profile for us to use.
In the next step we will set up how to actually call the authentication strategy to validate a user based on form data! Submit your page when you think you've got it right up to this point.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passport-local should be a dependency.
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-local', 'Your project should list "passport-local " as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Passport-local should be correctly required and setup.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport-local("|')/gi, 'You should have required passport-local'); assert.match(data, /new LocalStrategy/gi, 'You should have told passport to use a new strategy'); assert.match(data, /findOne/gi, 'Your new local strategy should use the findOne query to find a username based on the inputs'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
