---
id: 5895f70ef9fc0f352b528e6b
title: How to Put a Profile Together
challengeType: 2
isHidden: false
forumTopicId: 301554
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Now that we can ensure the user accessing the <em>/profile</em> is authenticated, we can use the information contained in 'req.user' on our page!
Go ahead and pass the object containing the variable <em>username</em> equaling 'req.user.username' into the render method of the profile view. Then go to your 'profile.pug' view and add the line <code>h2.center#welcome Welcome, #{username}!</code> creating the h2 element with the class 'center' and id 'welcome' containing the text 'Welcome, ' and the username!
Also in the profile, add a link to <em>/logout</em>. That route will host the logic to unauthenticate a user. <code>a(href='/logout') Logout</code>
Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should correctly add a Pug render variable to /profile.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /\/views\/pug\/profile[^]*username:( |)req.user.username/gi, 'You should be passing the variable username with req.user.username into the render function of the profile page'); }, xhr => { throw new Error(xhr.statusText); })

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
