---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
isHidden: false
forumTopicId: 301551
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
As in, any user can just go to /profile whether they authenticated or not by typing in the url. We want to prevent this by checking if the user is authenticated first before rendering the profile page. This is the perfect example of when to create a middleware.
The challenge here is creating the middleware function <code>ensureAuthenticated(req, res, next)</code>, which will check if a user is authenticated by calling passports isAuthenticated on the <em>request</em> which in turn checks for <em>req.user</em> is to be defined. If it is then <em>next()</em> should be called, otherwise we can just respond to the request with a redirect to our homepage to login. An implementation of this middleware is:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Now add <em>ensureAuthenticated</em> as a middleware to the request for the profile page before the argument to the get request containing the function that renders the page.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
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
  - text: Middleware ensureAuthenticated should be implemented and on our /profile route.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'); assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'Your ensureAuthenticated middleware should be attached to the /profile route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: A Get request to /profile should correctly redirect to / since we are not authenticated.
    testString: getUserInput => $.get(getUserInput('url')+ '/profile') .then(data => { assert.match(data, /Home page/gi, 'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'); }, xhr => { throw new Error(xhr.statusText); })

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
