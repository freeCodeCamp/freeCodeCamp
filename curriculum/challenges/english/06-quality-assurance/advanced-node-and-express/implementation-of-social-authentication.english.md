---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
isHidden: false
forumTopicId: 301559
---

## Description
<section id='description'>
For the following challenges, you will be working with a new starter project that is different from the previous one. You can find the new starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-socialauth">Repl.it</a>, or clone it from <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a>.
The basic path this kind of authentication will follow in your app is: <ol><li>User clicks a button or link sending them to our route to authenticate using a specific strategy (EG. GitHub)</li><li>Your route calls <code>passport.authenticate('github')</code> which redirects them to GitHub.</li><li>The page the user lands on, on GitHub, allows them to login if they aren't already. It then asks them to approve access to their profile from our app.</li><li>The user is then returned to our app at a specific callback url with their profile if they are approved.</li><li>They are now authenticated and your app should check if it is a returning profile, or save it in your database if it is not.</li></ol>
Strategies with OAuth require you to have at least a <em>Client ID</em> and a <em>Client Secret</em> which is a way for them to verify who the authentication request is coming from and if it is valid. These are obtained from the site you are trying to implement authentication with, such as GitHub, and are unique to your app- <b>THEY ARE NOT TO BE SHARED</b> and should never be uploaded to a public repository or written directly in your code. A common practice is to put them in your <em>.env</em> file and reference them like: <code>process.env.GITHUB_CLIENT_ID</code>. For this challenge we're going to use the GitHub strategy.
Obtaining your <em>Client ID and Secret</em> from GitHub is done in your account profile settings under 'developer settings', then '<a href='https://github.com/settings/developers'>OAuth applications</a>'. Click 'Register a new application', name your app, paste in the url to your Repl.it homepage (<b>Not the project code's url</b>), and lastly for the callback url, paste in the same url as the homepage but with '/auth/github/callback' added on. This is where users will be redirected to for us to handle after authenticating on GitHub. Save the returned information as 'GITHUB_CLIENT_ID' and 'GITHUB_CLIENT_SECRET' in your .env file.
On your remixed project, create 2 routes accepting GET requests: /auth/github and /auth/github/callback. The first should only call passport to authenticate 'github' and the second should call passport to authenticate 'github' with a failure redirect to '/' and then if that is successful redirect to '/profile' (similar to our last project).
An example of how '/auth/github/callback' should look is similar to how we handled a normal login in our last project:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point <a href='https://gist.github.com/JosephLivengood/28ea2cae7e1dc6a53d7f0c42d987313b'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Route /auth/github should be correct.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github('|")[^]*get.*passport.authenticate.*github/gi, 'Route auth/github should only call passport.authenticate with github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Route /auth/github/callback should be correct.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")\/auth\/github\/callback('|")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)("|')\/("|')/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'); }, xhr => { throw new Error(xhr.statusText); })

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
