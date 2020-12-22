---
id: 5e601c775ac9d0ecd8b94aff
challengeType: 4
---

# --description--

Develop a 2D real time multiplayer game using the HTML Canvas API and [Socket.io](https://socket.io/) that is functionally similar to this: <https://thread-valley-lipstick.glitch.me/>.

Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using [this link](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/) or clone [this repository](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game) on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

# --hints--

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

```

Prevent cross-site scripting (XSS) attacks.

```js

```

Nothing from the website is cached in the client.

```js

```

The headers say that the site is powered by "PHP 7.4.3" even though it isn't (as a security measure).

```js

```

# --solutions--

