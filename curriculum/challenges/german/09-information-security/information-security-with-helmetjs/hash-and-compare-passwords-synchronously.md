---
id: 58a25bcff9fc0f352b528e7e
title: Passwörter synchron hashen und vergleichen
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Das synchrone Hashing ist ebenso einfach, kann aber zu Verzögerungen führen, wenn es auf der Serverseite mit hohen Kosten verwendet wird oder wenn das Hashing sehr oft durchgeführt wird. Das Hashing mit dieser Methode ist so einfach wie der Aufruf

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Add this method of hashing to your code and then log the result to the console. Again, the variables used are already defined in the server so you won't need to adjust them. You may notice even though you are hashing the same password as in the async function, the result in the console is different- this is due to the salt being randomly generated each time as seen by the first 22 characters in the third string of the hash. Now to compare a password input with the new sync hash, you would use the compareSync method:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

with the result being a boolean true or false.

# --instructions--

Füge die Funktion ein und protokolliere das Ergebnis in der Konsole, um zu sehen, ob sie funktioniert.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben.

# --hints--

Der Sync-Hash sollte generiert und korrekt verglichen werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
