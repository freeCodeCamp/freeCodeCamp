---
id: 5e601c775ac9d0ecd8b94aff
title: Sicheres Echtzeit-Multiplayer-Spiel
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Entwickle ein 2D-Echtzeit-Multiplayer-Spiel mit der HTML-Canvas-API und Socket.io, das eine ähnliche Funktion besitzt wie diese: <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a>. Bei der Arbeit an diesem Projekt musst du deinen Code mit einer der folgenden Methoden schreiben:

-   Klone <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">dieses GitHub repo</a> und vervollständige dein Projekt lokal.
-   Benutze <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">unser Replit-Starter-Projekt</a>, um dein Projekt zu vervollständigen.
-   Verwende einen Site-Builder deiner Wahl, um das Projekt abzuschließen. Achte darauf, alle Dateien von unserem GitHub-Repo zu integrieren.

Wenn du Replit verwendest, folge diesen Schritten, um das Projekt einzurichten:

-   Beginne mit dem Importieren des Projekts in Replit.
-   Daraufhin wird ein `.replit`-Fenster angezeigt.
-   Wähle `Use run command` und klicke auf die `Done`-Schaltfläche.

Wenn du fertig bist, stelle sicher, dass eine funktionierende Demo deines Projekts irgendwo öffentlich gehostet wird. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

Erstelle ein sicheres Multiplayer-Spiel, in dem jeder Spieler seinen Avatar bewegen kann, es mindestens einen Sammelgegenstand gibt und der Rang der Spieler auf der Grundlage ihrer Punktzahl berechnet wird.

Einzelheiten findest du in den nachstehenden Tests.

Stell sicher, dass dein Spiel sicher ist! Berücksichtige diese Sicherheitsmaßnahmen:

- Der Client sollte nicht in der Lage sein, den MIME-Typ zu erraten/schnüffeln
- Verhindere XSS-Angriffe
- Speichere nichts von der Website im Client
- In den Kopfzeilen steht, dass die Website mit `PHP 7.4.3` betrieben wird

**Hinweis**: `helmet@^3.21.3` wird für die User Stories benötigt. Das bedeutet, dass du die frühere Version der Helmet-Dokumente verwenden musst, um zu erfahren, wie du die User Stories erreichen kannst.

# --hints--

Du kannst dein eigenes Projekt angeben, nicht die Beispiel-URL.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Mehrere Spieler können sich mit einem Server verbinden und spielen.

```js

```

Jeder Spieler hat einen Avatar.

```js

```

Jeder Spieler wird durch ein Objekt dargestellt, das von der `Player`-Klasse in `Player.mjs` erstellt wurde.

```js

```

Jedes Spielerobjekt sollte mindestens eine einzigartige `id`, einen `score`, und `x`- und `y`-Koordinaten enthalten, die die aktuelle Position des Spielers darstellen.

```js

```

Das Spiel enthält mindestens eine Art von Sammelgegenstand. Vervollständige die `Collectible`-Klasse in `Collectible.mjs`, um dies zu implementieren.

```js

```

Jedes Sammelobjekt, das von der `Collectible`-Klasse erstellt wurde, sollte mindestens eine einzigartige `id`, eine `value` und `x`- und `y`-Koordinate enthalten, die die aktuelle Position des Objekts darstellen.

```js

```

Die Spieler können die WASD- und/oder Pfeiltasten verwenden, um ihren Avatar zu bewegen. Vervollständige die `movePlayer`-Methode in `Player.mjs`, um dies zu implementieren.

```js

```

Die Methode `movePlayer` sollte zwei Argumente akzeptieren: eine Zeichenkette "up", "down", "left" oder "right" und eine Zahl für die Anzahl der Pixel, die die Position des Spielers ändern soll. `movePlayer` sollte die `x`- und `y`-Koordinaten des Spielerobjekts anpassen, von dem es aufgerufen wurde.

```js

```

Die Punktzahl des Spielers sollte verwendet werden, um seinen Rang unter den anderen Spielern zu berechnen. Vervollständige die `calculateRank`-Methode in der `Player`-Klasse, um dies zu implementieren.

```js

```

Die `calculateRank`-Methode sollte ein Array von Objekten akzeptieren, die alle verbundenen Spieler repräsentieren, und den String `Rank: currentRanking/totalPlayers` zurückgeben. Zum Beispiel in einem Spiel mit zwei Spielern, wenn Spieler A eine Punktzahl von 3 und Spieler B eine Punktzahl von 5 hat, sollte `calculateRank` für Spieler A `Rank: 2/2` zurückgeben.

```js

```

Die Spieler können mit einem Sammelgegenstand zusammenstoßen. Vervollständige die `collision`-Methode in `Player.mjs`, um dies zu implementieren.

```js

```

Die `collision`-Methode sollte ein Sammelobjekt als Argument akzeptieren. If the player's avatar intersects with the item, the `collision` method should return `true`.

```js

```

Alle Spieler werden synchronisiert.

```js

```

Die Spieler können die Verbindung zum Spiel jederzeit unterbrechen.

```js

```

Prevent the client from trying to guess / sniff the MIME type.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Prevent cross-site scripting (XSS) attacks.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Auf dem Client wird nichts von der Website zwischengespeichert.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

The headers say that the site is powered by "PHP 7.4.3" even though it isn't (as a security measure).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
