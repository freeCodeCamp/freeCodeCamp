---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
isHidden: false
forumTopicId: 301549
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-advancednode">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a>.
Right now everything you have is in your server.js file. This can lead to hard to manage code that isn't very expandable.
Create 2 new files: routes.js and auth.js
Both should start with the following code:

```js
module.exports = function (app, db) {

}
```

Now in the top of your server file, require these files like such: <code>const routes = require('./routes.js');</code>
Right after you establish a successful connect with the database instantiate each of them like such: <code>routes(app, db)</code>
Finally, take all of the routes in your server and paste them into your new files and remove them from your server file. Also take the ensureAuthenticated since we created that middleware function for routing specifically. You will have to now correctly add the dependencies in that are used, such as <code>const passport = require('passport');</code>, at the very top above the export line in your routes.js file.
Keep adding them until no more errors exist, and your server file no longer has any routing!
Now do the same thing in your auth.js file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Be sure to add the dependencies in and call <code>auth(app,db)</code> in the server in the same spot. Be sure to have <code>auth(app, db)</code> before <code>routes(app, db)</code> since our registration route depends on passport being initiated!
Congratulations- you're at the end of this section of Advanced Node and Express and have some beautiful code to show for it! Submit your page when you think you've got it right. If you're running into errors, you can check out an example of the completed project <a href='https://glitch.com/#!/project/delicious-herring'>here</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Modules should be present.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /mongo.connect[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

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
