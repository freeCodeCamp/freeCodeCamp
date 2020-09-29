---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
---

## Description
<section id='description'>

The basic path this kind of authentication will follow in your app is: <ol><li>User clicks a button or link sending them to our route to authenticate using a specific strategy (e.g. GitHub).</li><li>Your route calls <code>passport.authenticate('github')</code> which redirects them to GitHub.</li><li>The page the user lands on, on GitHub, allows them to login if they aren't already. It then asks them to approve access to their profile from our app.</li><li>The user is then returned to our app at a specific callback url with their profile if they are approved.</li><li>They are now authenticated, and your app should check if it is a returning profile, or save it in your database if it is not.</li></ol>

Strategies with OAuth require you to have at least a <em>Client ID</em> and a <em>Client Secret</em> which is a way for the service to verify who the authentication request is coming from and if it is valid. These are obtained from the site you are trying to implement authentication with, such as GitHub, and are unique to your app--<b>THEY ARE NOT TO BE SHARED</b> and should never be uploaded to a public repository or written directly in your code. A common practice is to put them in your <code>.env</code> file and reference them like so: <code>process.env.GITHUB_CLIENT_ID</code>. For this challenge we're going to use the GitHub strategy.

Obtaining your <em>Client ID and Secret</em> from GitHub is done in your account profile settings under 'developer settings', then '<a href='https://github.com/settings/developers' target='_blank'>OAuth applications</a>'. Click 'Register a new application', name your app, paste in the url to your Repl.it homepage (<b>Not the project code's url</b>), and lastly, for the callback url, paste in the same url as the homepage but with <code>/auth/github/callback</code> added on. This is where users will be redirected for us to handle after authenticating on GitHub. Save the returned information as <code>'GITHUB_CLIENT_ID'</code> and <code>'GITHUB_CLIENT_SECRET'</code> in your <code>.env</code> file.

In your <code>routes.js</code> file, add <code>showSocialAuth: true</code> to the homepage route, after <code>showRegistration: true</code>. Now, create 2 routes accepting GET requests: <code>/auth/github</code> and <code>/auth/github/callback</code>. The first should only call passport to authenticate <code>'github'</code>. The second should call passport to authenticate <code>'github'</code> with a failure redirect to <code>/</code>, and then if that is successful redirect to <code>/profile</code> (similar to our last project).

An example of how <code>/auth/github/callback</code> should look is similar to how we handled a normal login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point <a href='https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Route /auth/github should be correct.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/routes.js') .then(data => { assert.match(data.replace(/\s/g,""), /('|")\/auth\/github\/?\1[^]*?get.*?passport.authenticate.*?github/gi, 'Route auth/github should only call passport.authenticate with github'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Route /auth/github/callback should be correct.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/routes.js') .then(data => { assert.match(data.replace(/\s/g,""), /('|")\/auth\/github\/callback\/?\1[^]*?get.*?passport.authenticate.*?github.*?failureRedirect:("|')\/\2/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'); }, xhr => { throw new Error(xhr.statusText); })

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
