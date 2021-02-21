---
id: 5e601c775ac9d0ecd8b94aff
title: Secure Real Time Multiplayer Game
challengeType: 4
dashedName: secure-real-time-multiplayer-game
---

# --description--

Develop a 2D real time multiplayer game using the HTML Canvas API and [Socket.io](https://socket.io/) that is functionally similar to this: <https://secure-real-time-multiplayer-game.freecodecamp.rocks/>. Working on this project will involve you writing your code using one of the following methods:

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/) and complete your project locally.
-   Use [our repl.it starter project](https://repl.it/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game) to complete your project.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

# --instructions--

**Note**: `helmet@^3.21.3` is needed for the user stories. This means you will need to use the previous version of Helmet's docs, for information on how to achieve the user stories.

# --hints--

You can provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Multiple players can connect to a server and play.

```js

```

Each player has an avatar.

```js

```

Each player is represented by an object created by the `Player` class in `Player.mjs`.

```js

```

At a minimum, each player object should contain a unique `id`, a `score`, and `x` and `y` coordinates representing the player's current position.

```js

```

The game has at least one type of collectible item. Complete the `Collectible` class in `Collectible.mjs` to implement this.

```js

```

At a minimum, each collectible item object created by the `Collectible` class should contain a unique `id`, a `value`, and `x` and `y` coordinates representing the item's current position.

```js

```

Players can use the WASD and/or arrow keys to move their avatar. Complete the `movePlayer` method in `Player.mjs` to implement this.

```js

```

The `movePlayer` method should accept two arguments: a string of "up", "down", "left", or "right", and a number for the amount of pixels the player's position should change. `movePlayer` should adjust the `x` and `y` coordinates of the player object it's called from.

```js

```

The player's score should be used to calculate their rank among the other players. Complete the `calculateRank` method in the `Player` class to implement this.

```js

```

The `calculateRank` method should accept an array of objects representing all connected players and return the string `Rank: currentRanking/totalPlayers`. For example, in a game with two players, if Player A has a score of 3 and Player B has a score of 5, `calculateRank` for Player A should return `Rank: 2/2`.

```js

```

Players can collide with a collectible item. Complete the `collision` method in `Player.mjs` to implement this.

```js

```

The `collision` method should accept a collectible item's object as an argument. If the player's avatar intersects with the item, the `collision` method should return `true`.

```js

```

All players are kept in sync.

```js

```

Players can disconnect from the game at any time.

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

Nothing from the website is cached in the client.

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
