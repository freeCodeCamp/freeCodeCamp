---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Zur Erinnerung: Dieses Projekt baut auf dem folgenden Starterprojekt auf: <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a> oder geklont von <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Hashing synchronously is just as easy to do but can cause lag if using it server side with a high cost or with hashing done very often. Hashing with this method is as easy as calling

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Add this method of hashing to your code and then log the result to the console. Again, the variables used are already defined in the server so you won't need to adjust them. You may notice even though you are hashing the same password as in the async function, the result in the console is different- this is due to the salt being randomly generated each time as seen by the first 22 characters in the third string of the hash. Now to compare a password input with the new sync hash, you would use the compareSync method:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

with the result being a boolean true or false.

# --instructions--

Add the function in and log the result to the console to see it working.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben.

# --hints--

Sync hash should be generated and correctly compared.

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
