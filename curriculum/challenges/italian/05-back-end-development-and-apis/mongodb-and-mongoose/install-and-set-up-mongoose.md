---
id: 587d7fb6367417b2b2512c06
title: Installare e configurare Mongoose
challengeType: 2
forumTopicId: 301540
dashedName: install-and-set-up-mongoose
---

# --description--

Lavorare su queste sfide ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

- Clonare <a href="https://github.com/freeCodeCamp/boilerplate-mongomongoose/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare queste sfide localmente.
- Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-mongomongoose" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare queste sfide.
- Usare un costruttore di siti di tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field.

In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.

Follow <a href='https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/' target="_blank" rel="noopener noreferrer nofollow">this tutorial</a> to set up a hosted database on MongoDB Atlas.

# --instructions--

`mongoose@^5.11.15` has been added to your project’s `package.json` file. First, require mongoose as `mongoose` in `myApp.js`. Next, create a `.env` file and add a `MONGO_URI` variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the `=` in environment variables. For example, `MONGO_URI='VALUE'`.

**Note:** If you are using Replit, you cannot create a `.env` file. Instead, use the built-in <dfn>SECRETS</dfn> tab to add the variable. <em>Do not</em> surround the values with quotes when using the <em>SECRETS</em> tab.

When you are done, connect to the database using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

# --hints--

"mongoose version ^5.11.15" dependency should be in package.json

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/file/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(packJson.dependencies, 'mongoose');
      assert.match(
        packJson.dependencies.mongoose,
        /^\^5\.11\.15/,
        'Wrong version of "mongoose". It should be ^5.11.15'
      );
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
