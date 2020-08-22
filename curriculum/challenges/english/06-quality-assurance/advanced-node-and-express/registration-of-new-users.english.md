---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
isHidden: false
forumTopicId: 301561
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Now we need to allow a new user on our site to register an account. On the res.render for the home page add a new variable to the object passed along- <code>showRegistration: true</code>. When you refresh your page, you should then see the registration form that was already created in your index.pug file! This form is set up to <b>POST</b> on <em>/register</em> so this is where we should set up to accept the POST and create the user object in the database.
The logic of the registration route should be as follows: Register the new user > Authenticate the new user > Redirect to /profile
The logic of step 1, registering the new user, should be as follows: Query database with a findOne command > if user is returned then it exists and redirect back to home <em>OR</em> if user is undefined and no error occurs then 'insertOne' into the database with the username and password and as long as no errors occur then call <em>next</em> to go to step 2, authenticating the new user, which we've already written the logic for in our POST /login route.

```js
app.route('/register')
  .post((req, res, next) => {
    db.collection('users').findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        db.collection('users').insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              next(null, user);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/JosephLivengood/6c47bee7df34df9f11820803608071ed'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should register route and display on home.
    testString: 'getUserInput => $.get(getUserInput(''url'')+ ''/_api/server.js'') .then(data => { assert.match(data, /showRegistration:( |)true/gi, ''You should be passing the variable "showRegistration" as true to your render function for the homepage''); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, ''You should have a route accepted a post request on register that querys the db with findone and the query being "username: req.body.username"''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Registering should work.
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/register'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''},crossDomain: true, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Login should work.
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/login'',data: {username: ''freeCodeCampTester'', password: ''freeCodeCampTester''}, type: ''POST'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Profile/gi, ''Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB''); assert.match(data, /freeCodeCampTester/gi, ''The profile should properly display the welcome to the user logged in''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Logout should work.
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/logout'', type: ''GET'', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Logout should redirect to home''); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Profile should no longer work after logout.
    testString: 'getUserInput => $.ajax({url: getUserInput(''url'')+ ''/profile'', type: ''GET'', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, ''Profile should redirect to home when we are logged out now again''); }, xhr => { throw new Error(xhr.statusText); })'

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
