---
id: 58a25bcef9fc0f352b528e7c
title: BCrypt Hashes verstehen
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

For the following challenges, you will be working with a new starter project that is different from the previous one. You can find the new starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or clone it from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

BCrypt-Hashes sind sehr sicher. Ein Hash ist im Grunde ein Fingerabdruck der ursprünglichen Daten - immer einzigartig. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, you can also *salt* your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

BCrypt hashes will always look like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. Das erste kleine Datenbit `$2a` gibt an, welche Art von Hash-Algorithmus verwendet wurde. Der nächste Teil `$13` definiert die *Kosten*. Bei den Kosten geht es darum, wie viel Energie für die Berechnung des Hashwerts benötigt wird. Sie liegt auf einer logarithmischen Skala von 2^cost und bestimmt, wie oft die Daten durch den Hash-Algorithmus geschickt werden. Bei einem Preis von 10 kann man zum Beispiel 10 Passwörter pro Sekunde auf einem durchschnittlichen Computer hacken, bei einem Preis von 15 braucht man 3 Sekunden pro Hash... und bei einem Preis von 31 würde es mehrere Tage dauern, einen Hash zu erstellen. Ein Aufwand von 12 gilt zur Zeit als sehr sicher. The last portion of your hash `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm`, looks like one large string of numbers, periods, and letters but it is actually two separate pieces of information. The first 22 characters is the salt in plain text, and the rest is the hashed password!

# --instructions--

Add all your code for these lessons in the `server.js` file between the code we have started you off with. Ändere oder lösche nicht den Code, den wir für dich hinzugefügt haben.

BCrypt has already been added as a dependency, so require it as `bcrypt` in your server.

Reiche deine Seite ein, wenn du davon ausgehst, alles richtig gemacht zu haben.

# --hints--

BCrypt sollte eine Abhängigkeit sein.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt sollte ordnungsgemäß angefordert werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
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
