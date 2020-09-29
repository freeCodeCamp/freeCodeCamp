---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
forumTopicId: 301561
---

## Description
<section id='description'>

Now we need to allow a new user on our site to register an account. On the <code>res.render</code> for the home page add a new variable to the object passed along--<code>showRegistration: true</code>. When you refresh your page, you should then see the registration form that was already created in your <code>index.pug</code> file! This form is set up to <b>POST</b> on <code>/register</code>, so this is where we should set up to accept the <b>POST</b> and create the user object in the database.

The logic of the registration route should be as follows: Register the new user > Authenticate the new user > Redirect to /profile

The logic of step 1, registering the new user, should be as follows: Query database with a findOne command > if user is returned then it exists and redirect back to home <em>OR</em> if user is undefined and no error occurs then 'insertOne' into the database with the username and password, and, as long as no errors occur, call <em>next</em> to go to step 2, authenticating the new user, which we've already written the logic for in our POST <em>/login</em> route.

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
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

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e' target='_blank'>here</a>.

**NOTE:** From this point onwards, issues can arise relating to the use of the _picture-in-picture_ browser. If you are using an online IDE which offers a preview of the app within the editor, it is recommended to open this preview in a new tab.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should register route and display on home.
    testString: "getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showRegistration:( |)true/gi, 'You should be passing the variable showRegistration as true to your render function for the homepage'); assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, 'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'); }, xhr => { throw new Error(xhr.statusText); })"
  - text: Registering should work.
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const user = `freeCodeCampTester${Date.now()}`;
      const xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          test(this);
        } else {
          throw new Error(`${this.status} ${this.statusText}`);
        }
      };
      xhttp.open('POST', url+'/register', true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(`username=${user}&password=${user}`);  

      function test(xhttpRes) {
        const data = xhttpRes.responseText;
        assert.match(data, /Profile/gi, 'Register should work, and redirect successfully to the profile.');
      }
    }
    "
  - text: Login should work.
    testString: "async getUserInput => {
      const url = getUserInput('url');
      const user = `freeCodeCampTester${Date.now()}`;
      const xhttpReg = new XMLHttpRequest();
      xhttpReg.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          login();
        } else {
          throw new Error(`${this.status} ${this.statusText}`);
        }
      };
      xhttpReg.open('POST', url+'/register', true);
      xhttpReg.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttpReg.send(`username=${user}&password=${user}`);

      function login() {
        const xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            test(this);
          } else {
            throw new Error(`${this.status} ${this.statusText}`);
          }
        };
        xhttp.open('POST', url+'/login', true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(`username=${user}&password=${user}`);  
      }
      function test(xhttpRes) {
        const data = xhttpRes.responseText;
        assert.match(data, /Profile/gi, 'Login should work if previous test was done successfully and redirect successfully to the profile.');
        assert.match(data, new RegExp(user, 'g'), 'The profile should properly display the welcome to the user logged in');
      }
    }
    "
  - text: Logout should work.
    testString: "getUserInput => $.ajax({url: getUserInput('url')+ '/logout', type: 'GET', xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, 'Logout should redirect to home'); }, xhr => { throw new Error(xhr.statusText); })"
  - text: Profile should no longer work after logout.
    testString: "getUserInput => $.ajax({url: getUserInput('url')+ '/profile', type: 'GET', crossDomain: true, xhrFields: { withCredentials: true }}) .then(data => { assert.match(data, /Home/gi, 'Profile should redirect to home when we are logged out now again'); }, xhr => { throw new Error(xhr.statusText); })"

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
