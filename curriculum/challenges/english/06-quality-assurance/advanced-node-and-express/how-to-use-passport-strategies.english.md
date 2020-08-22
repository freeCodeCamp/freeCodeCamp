---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
isHidden: false
forumTopicId: 301555
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
In the index.pug file supplied there is actually a login form. It has previously been hidden because of the inline JavaScript <code>if showLogin</code> with the form indented after it. Before <code>showLogin</code> as a variable was never defined, it never rendered the code block containing the form. Go ahead and on the <code>res.render</code> for that page add a new variable to the object <code>showLogin: true</code>. When you refresh your page, you should then see the form! This form is set up to <b>POST</b> on <em>/login</em> so this is where we should set up to accept the POST and authenticate the user.
For this challenge you should add the route /login to accept a POST request. To authenticate on this route you need to add a middleware to do so before then sending a response. This is done by just passing another argument with the middleware before your <code>function(req,res)</code> with your response! The middleware to use is <code>passport.authenticate('local')</code>.
<em>passport.authenticate</em> can also take some options as an argument such as: <code>{ failureRedirect: '/' }</code> which is incredibly useful so be sure to add that in as well. As a response after using the middleware (which will only be called if the authentication middleware passes) should be to redirect the user to <em>/profile</em> and that route should render the view 'profile.pug'.
If the authentication was successful, the user object will be saved in <em>req.user</em>.
Now at this point if you enter a username and password in the form, it should redirect to the home page <em>/</em> and in the console of your server should be 'User {USERNAME} attempted to log in.' since we currently cannot login a user who isn't registered.
Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/JosephLivengood/8a335d1a68ed9170da02bb9d8f5b71d5'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All steps should be correctly implemented in the server.js.
    testString:  getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /showLogin:( |)true/gi, 'You should be passing the variable "showLogin" as true to your render function for the homepage'); assert.match(data, /failureRedirect:( |)('|")\/('|")/gi, 'Your code should include a failureRedirect to the "/" route'); assert.match(data, /login[^]*post[^]*local/gi, 'You should have a route for login which accepts a POST and passport.authenticates local'); }, xhr => { throw new Error(xhr.statusText); })
  - text: A POST request to /login should correctly redirect to /.
    testString: getUserInput => $.post(getUserInput('url')+ '/login') .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, 'A login attempt at this point should redirect to the homepage since we do not have any registered users'); }, xhr => { throw new Error(xhr.statusText); })

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
