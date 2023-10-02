---
id: 5895f700f9fc0f352b528e63
title: Set up a Template Engine
challengeType: 2
forumTopicId: 301564
dashedName: set-up-a-template-engine
---

# --description--

Working on these challenges will involve you writing your code using one of the following methods:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete these challenges locally.
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-advancednode" target="_blank" rel="noopener noreferrer nofollow">our Replit starter project</a> to complete these challenges.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit. 
-   Next, you will see a `.replit` window. 
-   Select `Use run command` and click the `Done` button. 

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field.

A template engine enables you to use static template files (such as those written in *Pug*) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.

`pug@~3.0.0` has already been installed, and is listed as a dependency in your `package.json` file.

Express needs to know which template engine you are using. Use the `set` method to assign `pug` as the `view engine` property's value:

```javascript
app.set('view engine', 'pug');
```

After that, add another `set` method that sets the `views` property of your `app` to point to the `./views/pug` directory. This tells Express to render all views relative to that directory.

Finally, use `res.render()` in the route for your home page, passing `index` as the first argument. This will render the `pug` template.

If all went as planned, your app home page will no longer be blank. Instead, it will display a message indicating you've successfully rendered the Pug template!

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-a-template-engine-1" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

Pug should be a dependency.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'pug',
    'Your project should list "pug" as a dependency'
  );
}
```

View engine should be Pug.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.['view engine'], "pug");
}
```

You should set the `views` property of the application to `./views/pug`.

```js
async (getUserInput) => {
  const url = new URL("/_api/app", getUserInput("url"));
  const res = await fetch(url);
  const app = await res.json();
  assert.equal(app?.settings?.views, "./views/pug");
}
```

Use the correct ExpressJS method to render the index page from the response.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /FCC Advanced Node and Express/gi,
        'You successfully rendered the Pug template!'
      );
    }
```

Pug should be working.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
      assert.match(
        data,
        /pug-success-message/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
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
