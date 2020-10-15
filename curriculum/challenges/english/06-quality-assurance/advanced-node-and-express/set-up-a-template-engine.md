---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
---

## Description

<section id='description'>

As a reminder, this project is built upon the following starter project on <a href='https://repl.it/github/freeCodeCamp/boilerplate-advancednode' target='_blank'>Repl.it</a>, or clone from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/' target='_blank'>GitHub</a>.

A template engine enables you to use static template files (such as those written in _Pug_) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.

Add `pug@~3.0.0` as a dependency in your `package.json` file.

Express needs to know which template engine you are using. We will use the `set` method to assign `pug` as the `view engine` property's value: `app.set('view engine', 'pug')`

Your page will not load until you correctly render the index file in the `views/pug` directory.

Change the argument of the `res.render()` declaration in the `/` route to be the file path to the `views/pug` directory. The path can be a relative path (relative to views), or an absolute path, and does not require a file extension.

If all went as planned, your app home page will stop showing the message "`Pug template is not defined.`" and will now display a message indicating you've successfully rendered the Pug template!

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point <a href='https://gist.github.com/camperbot/3515cd676ea4dfceab4e322f59a37791' target='_blank'>here</a>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Pug should be a dependency.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'pug', 'Your project should list "pug" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: View engine should be Pug.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /('|")view engine('|"),( |)('|")pug('|")/gi, 'Your project should set Pug as a view engine'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Use the correct ExpressJS method to render the index page from the response.
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /FCC Advanced Node and Express/gi, 'You successfully rendered the Pug template!'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Pug should be working.
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-success-message/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })
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
