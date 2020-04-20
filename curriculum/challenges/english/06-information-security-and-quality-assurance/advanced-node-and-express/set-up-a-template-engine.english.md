---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
---

## Description

<section id='description'>
As a reminder, this project is built upon the following starter project on <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-advancednode/'>Glitch</a>, or clone from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
A template engine enables you to use static template files (such as those written in <em>Pug</em>) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.
To set up <em>Pug</em> for use in your project, you will need to add it as a dependency in your package.json. Don't forget to add the name of the package and the version. Use the package.json for some examples of the correct syntax.

Express needs to know which template engine you are using. We will use the <b>set</b> method to assign 'pug' as the <b>'view-engine'</b>. <code>app.set('view engine', 'pug')</code>

Your page will not load until you correctly <em>render</em> the index file in our <em>'views/pug'</em> directory. Using the "Show" menu at the top of the Glitch page will allow you to view your app next to your code. This is helpful to see if your page is loading as expected. If you are seeing the page with a message "Pug template is not defined.", this indicates your routing is incomplete on the root path ('/'). You can get a <em>response</em> using a relative path to point the root ('/') to the index file.

If all went as planned, you should refresh your apps home page and see a small message saying you've successfully rendered the Pug template! Submit your page when you think you've got it right.

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
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /res\.(r\w{5})\(('|")((\.)\/)?(\w{3})\/(\w{5})('|")\)(;)?/gi, 'You successfully rendered the Pug template!'); }, xhr => { throw new Error(xhr.statusText); })
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
