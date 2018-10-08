---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
A template engine enables you to use static template files (such as those written in <em>Pug</em>) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server, and transforms the template into a static HTML file that is then sent to the client. This approach makes it easier to design an HTML page and allows for displaying of variables on the page without needing to make an API call from the client.
To set up <em>Pug</em> for use in your project, you will need to add it as a dependency first in your package.json. <code>"pug": "^0.1.0"</code>
Now to tell Node/Express to use the templating engine you will have to tell your express <b>app</b> to <b>set</b> 'pug' as the 'view-engine'. <code>app.set('view engine', 'pug')</code>
Lastly, you should change your response to the request for the index route to <code>res.render</code> with the path to the view <em>views/pug/index.pug</em>.
If all went as planned, you should refresh your apps home page and see a small message saying you're successfully rending the Pug from our Pug file! Submit your page when you think you've got it right.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug is a dependency
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "pug", "Your project should list "pug" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: View engine is Pug
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /("|")view engine("|"),( |)("|")pug("|")/gi, "Your project should set Pug as a view engine"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: Pug is working
    testString: 'getUserInput => $.get(getUserInput("url")+ "/") .then(data => { assert.match(data, /pug-success-message/gi, "Your projects home page should now be rendered by pug with the projects .pug file unaltered"); }, xhr => { throw new Error(xhr.statusText); })'

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
