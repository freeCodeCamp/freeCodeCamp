---
id: 587d7fb0367417b2b2512bed
title: Lerne Node console kennen
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

Bei der Arbeit an diesen Aufgaben wirst du deinen Code mithilfe folgender Methoden schreiben:

- Klone <a href="https://github.com/freeCodeCamp/boilerplate-express/" target="_blank" rel="noopener noreferrer nofollow">dieses GitHub-Repo</a> und schließe dein Projekt lokal ab.
- Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-express" target="_blank" rel="noopener noreferrer nofollow">unser Replit-Starterprojekt</a>, um die Aufgaben abzuschließen.
- Verwende einen Site Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien aus unserem GitHub Repo zu integrieren.

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field.

During the development process, it is important to be able to check what’s going on in your code.

Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see console output in a terminal. On Replit, a terminal is open in the right pane by default.

We recommend to keep the terminal open while working at these challenges. By reading the output in the terminal, you can see any errors that may occur.

# --instructions--

Modify the `myApp.js` file to log "Hello World" to the console.

# --hints--

`"Hello World"` should be in the console

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
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
