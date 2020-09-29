---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
forumTopicId: 301549
---

## Description
<section id='description'>

Right now, everything you have is in your <code>server.js</code> file. This can lead to hard to manage code that isn't very expandable.
Create 2 new files: <code>routes.js</code> and <code>auth.js</code>

Both should start with the following code:

```js
module.exports = function (app, myDataBase) {

}
```

Now, in the top of your server file, require these files like so: <code>const routes = require('./routes.js');</code>
Right after you establish a successful connection with the database, instantiate each of them like so: <code>routes(app, myDataBase)</code>

Finally, take all of the routes in your server and paste them into your new files, and remove them from your server file. Also take the <code>ensureAuthenticated</code> function, since it was specifically created for routing. Now, you will have to correctly add the dependencies in which are used, such as <code>const passport = require('passport');</code>, at the very top, above the export line in your <code>routes.js</code> file.

Keep adding them until no more errors exist, and your server file no longer has any routing (**except for the route in the catch block**)!

Now do the same thing in your auth.js file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Be sure to add the dependencies in and call <code>auth(app, myDataBase)</code> in the server in the same spot.

Submit your page when you think you've got it right. If you're running into errors, you can check out an example of the completed project <a href='https://gist.github.com/camperbot/2d06ac5c7d850d8cf073d2c2c794cc92' target='_blank'>here</a>.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Modules should be present.
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /client.db[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

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
