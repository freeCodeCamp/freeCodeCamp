---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
forumTopicId: 301549
dashedName: clean-up-your-project-with-modules
---

# --description--

Right now, everything you have is in your `server.js` file. This can lead to hard to manage code that isn't very expandable. Create 2 new files: `routes.js` and `auth.js`

Both should start with the following code:

```js
module.exports = function (app, myDataBase) {

}
```

Now, in the top of your server file, require these files like so: `const routes = require('./routes.js');` Right after you establish a successful connection with the database, instantiate each of them like so: `routes(app, myDataBase)`

Finally, take all of the routes in your server and paste them into your new files, and remove them from your server file. Also take the `ensureAuthenticated` function, since it was specifically created for routing. Now, you will have to correctly add the dependencies in which are used, such as `const passport = require('passport');`, at the very top, above the export line in your `routes.js` file.

Keep adding them until no more errors exist, and your server file no longer has any routing (**except for the route in the catch block**)!

Do the same thing in your `auth.js` file with all of the things related to authentication such as the serialization and the setting up of the local strategy and erase them from your server file. Be sure to add the dependencies in and call `auth(app, myDataBase)` in the server in the same spot.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#clean-up-your-project-with-modules-2" target="_blank" rel="noopener noreferrer nofollow">check out an example of the completed project</a>.

# --hints--

Modules should be present.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require\s*\(('|")\.\/routes(\.js)?\1\)/gi,
    'You should have required your new files'
  );
  assert.match(
    data,
    /client\s*\.db[^]*routes/gi,
    'Your new modules should be called after your connection to the database'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
