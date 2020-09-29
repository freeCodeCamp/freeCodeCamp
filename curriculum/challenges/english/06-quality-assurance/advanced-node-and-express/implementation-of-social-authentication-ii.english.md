---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
forumTopicId: 301557
---

## Description
<section id='description'>

The last part of setting up your GitHub authentication is to create the strategy itself. For this, you will need to add the dependency of 'passport-github' to your project and require it in your <code>auth.js</code> as <code>GithubStrategy</code> like this: <code>const GitHubStrategy = require('passport-github').Strategy;</code>. Do not forget to require and configure <code>dotenv</code> to use your environment variables.

To set up the GitHub strategy, you have to tell Passport to use an instantiated <code>GitHubStrategy</code>, which accepts 2 arguments: an object (containing <code>clientID</code>, <code>clientSecret</code>, and <code>callbackURL</code>) and a function to be called when a user is successfully authenticated, which will determine if the user is new and what fields to save initially in the user's database object. This is common across many strategies, but some may require more information as outlined in that specific strategy's GitHub README. For example, Google requires a <em>scope</em> as well which determines what kind of information your request is asking to be returned and asks the user to approve such access. The current strategy we are implementing has its usage outlined <a href='https://github.com/jaredhanson/passport-github/' target='_blank'>here</a>, but we're going through it all right here on freeCodeCamp!

Here's how your new strategy should look at this point:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

Your authentication won't be successful yet, and it will actually throw an error without the database logic and callback, but it should log your GitHub profile to your console if you try it!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: passport-github dependency should be added.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport-github', 'Your project should list "passport-github" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: passport-github should be required.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/auth.js') .then(data => { assert.match(data, /require.*("|')passport-github("|')/gi, 'You should have required passport-github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: GitHub strategy should be setup correctly thus far.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/auth.js') .then(data => { assert.match(data, /passport\.use.*new GitHubStrategy/gi, 'Passport should use a new GitHubStrategy'); assert.match(data, /callbackURL:\s*("|').*("|')/gi, 'You should have a callbackURL'); assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, 'You should use process.env.GITHUB_CLIENT_SECRET'); assert.match(data, /process.env.GITHUB_CLIENT_ID/g, 'You should use process.env.GITHUB_CLIENT_ID'); }, xhr => { throw new Error(xhr.statusText); })

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
