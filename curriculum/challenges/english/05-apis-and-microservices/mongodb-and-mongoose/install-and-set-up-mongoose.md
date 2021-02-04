---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.

Follow [this](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/) tutorial to set up a hosted database on MongoDB Atlas.

After you set up your hosted database, start this project on Repl.it using <a rel='noopener noreferrer' target='_blank' href='https://repl.it/github/freeCodeCamp/boilerplate-mongomongoose'>this link</a> or clone <a rel='noopener noreferrer' target='_blank' href='https://github.com/freeCodeCamp/boilerplate-mongomongoose/'>this repository</a> on GitHub. If you use Repl.it, remember to save the link to your project somewhere safe.

# --instructions--

Add `mongodb` and `mongoose` to the project’s `package.json`. Then, require mongoose as `mongoose` in `myApp.js`. Create a `.env` file and add a `MONGO_URI` variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the `=` in environment variables. For example, `MONGO_URI='VALUE'`. When you are done, connect to the database using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

"mongodb" dependency should be in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongodb');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" dependency should be in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

"mongoose" should be connected to a database

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(
    (data) => {
      assert.isTrue(data.isMongooseOk, 'mongoose is not connected');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
