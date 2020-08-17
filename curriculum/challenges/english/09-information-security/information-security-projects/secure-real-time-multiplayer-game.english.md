---
id: 5e601c775ac9d0ecd8b94aff
title: Secure Real Time Multiplayer Game
challengeType: 4
isHidden: false
isRequired: true
---

## Description
<section id='description'>
Develop a 2D real time multiplayer game using the HTML Canvas API and <a href='https://socket.io/' target='_blank'>Socket.io</a> that is functionally similar to this: <a href="https://secure-real-time-multiplayer-game--freecodecamp.repl.co/" target="_blank">https://secure-real-time-multiplayer-game--freecodecamp.repl.co/</a>.

Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Multiple players can connect to a server and play.
    testString: ''
  - text: Each player has an avatar.
    testString: ''
  - text: Each player is represented by an object created by the <code>Player</code> class in <code>Player.mjs</code>.
    testString: ''
  - text: At a minimum, each player object should contain a unique <code>id</code>, a <code>score</code>, and <code>x</code> and <code>y</code> coordinates representing the player's current position.
    testString: ''
  - text: The game has at least one type of collectible item. Complete the <code>Collectible</code> class in <code>Collectible.mjs</code> to implement this.
    testString: ''
  - text: At a minimum, each collectible item object created by the <code>Collectible</code> class should contain a unique <code>id</code>, a <code>value</code>, and <code>x</code> and <code>y</code> coordinates representing the item's current position.
    testString: ''
  - text: Players can use the WASD and/or arrow keys to move their avatar. Complete the <code>movePlayer</code> method in <code>Player.mjs</code> to implement this.
    testString: ''
  - text: |
      The <code>movePlayer</code> method should accept two arguments: a string of "up", "down", "left", or "right", and a number for the amount of pixels the player's position should change. <code>movePlayer</code> should adjust the <code>x</code> and <code>y</code> coordinates of the player object it's called from.
    testString: ''
  - text: The player's score should be used to calculate their rank among the other players. Complete the <code>calculateRank</code> method in the <code>Player</code> class to implement this.
    testString: ''
  - text: |
      The <code>calculateRank</code> method should accept an array of objects representing all connected players and return the string <code>Rank: currentRanking/totalPlayers</code>. For example, in a game with two players, if Player A has a score of 3 and Player B has a score of 5, <code>calculateRank</code> for Player A should return <code>Rank: 2/2</code>.
    testString: ''
  - text: Players can collide with a collectible item. Complete the <code>collision</code> method in <code>Player.mjs</code> to implement this.
    testString: ''
  - text: The <code>collision</code> method should accept a collectible item's object as an argument. If the player's avatar intersects with the item, the <code>collision</code> method should return <code>true</code>.
    testString: ''
  - text: All players are kept in sync.
    testString: ''
  - text: Players can disconnect from the game at any time.
    testString: ''
  - text: Prevent the client from trying to guess / sniff the MIME type.
    testString: ''
  - text: Prevent cross-site scripting (XSS) attacks.
    testString: ''
  - text: Nothing from the website is cached in the client.
    testString: ''
  - text: The headers say that the site is powered by "PHP 7.4.3" even though it isn't (as a security measure).
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

</section>
