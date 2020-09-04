---
id: 5895f70cf9fc0f352b528e65
title: Set up Passport
challengeType: 2
forumTopicId: 301565
---

## Description
<section id='description'>

It's time to set up <em>Passport</em> so we can finally start allowing a user to register or login to an account! In addition to Passport, we will use Express-session to handle sessions. Using this middleware saves the session id as a cookie in the client and allows us to access the session data using that id on the server. This way we keep personal account information out of the cookie used by the client to verify to our server they are authenticated and just keep the <em>key</em> to access the data stored on the server.

To set up Passport for use in your project, you will need to add it as a dependency first in your package.json. <code>"passport": "^0.3.2"</code>

In addition, add Express-session as a dependency now as well. Express-session has a ton of advanced features you can use but for now we're just going to use the basics! <code>"express-session": "^1.15.0"</code>

You will need to set up the session settings now and initialize Passport. Be sure to first create the variables 'session' and 'passport' to require 'express-session' and 'passport' respectively.

To set up your express app to use the session we'll define just a few basic options. Be sure to add 'SESSION_SECRET' to your .env file and give it a random value. This is used to compute the hash used to encrypt your cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

As well you can go ahead and tell your express app to <b>use</b> 'passport.initialize()' and 'passport.session()'. (For example, <code>app.use(passport.initialize());</code>)

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Passport and Express-session should be dependencies.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'passport', 'Your project should list "passport" as a dependency'); assert.property(packJson.dependencies, 'express-session', 'Your project should list "express-session" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Dependencies should be correctly required.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')passport("|')/gi, 'You should have required passport'); assert.match(data, /require.*("|')express-session("|')/gi, 'You should have required express-session'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Express app should use new dependencies.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.initialize/gi, 'Your express app should use "passport.initialize()"'); assert.match(data, /passport.session/gi, 'Your express app should use "passport.session()"'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Session and session secret should be correctly set up.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, 'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'); }, xhr => { throw new Error(xhr.statusText); })

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
