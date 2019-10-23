---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
videoUrl: ''
localeTitle: كيفية استخدام استراتيجيات جوازات السفر
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: ' getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /showLogin:( |)true/gi, "You should be passing the variable "showLogin" as true to your render function for the homepage"); assert.match(data, /failureRedirect:( |)("|")\/("|")/gi, "Your code should include a failureRedirect to the "/" route"); assert.match(data, /login[^]*post[^]*local/gi, "You should have a route for login which accepts a POST and passport.authenticates local"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: ''
    testString: 'getUserInput => $.post(getUserInput("url")+ "/login") .then(data => { assert.match(data, /Looks like this page is being rendered from Pug into HTML!/gi, "A login attempt at this point should redirect to the homepage since we do not have any registered users"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
