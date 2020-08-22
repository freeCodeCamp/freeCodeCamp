---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
isHidden: false
forumTopicId: 301560
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Creating the logout logic is easy. The route should just unauthenticate the user and redirect to the home page instead of rendering any view.
In passport, unauthenticating a user is as easy as just calling <code>req.logout();</code> before redirecting.

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

You may have noticed that we're not handling missing pages (404), the common way to handle this in Node is with the following middleware. Go ahead and add this in after all your other routes:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>req.Logout</code> should be called in your <code>/logout</code> route.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /req.logout/gi, 'You should be calling req.logout() in your /logout route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Logout should redirect to the home page.
    testString: getUserInput => $.get(getUserInput('url')+ '/logout') .then(data => { assert.match(data, /Home page/gi, 'When a user logs out they should be redirected to the homepage'); }, xhr => { throw new Error(xhr.statusText); })

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
