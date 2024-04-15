---
id: 6579fc66adaabbca6ceddb1f
title: Hatua ya 1
challengeType: 0
dashedName: step-1
---

# --description--

In this project, you will learn algorithmic thinking by building a dice game. There are a total of 6 rounds and for each round, the player can roll the dice up to 3 times and collect a score.

The HTML and CSS have been provided for you. Feel free to explore them.

When you are ready, use the `querySelectorAll()` method to target all elements with the `class` of `die`, and assign that to a constant called `listOfAllDice`.

# --hints--

You should have a `const` variable called `listOfAllDice`.

```js
assert.match(code, /const\s+listOfAllDice\s*/);
```

You should assign the `document.querySelectorAll()` method to the `listOfAllDice` variable.

```js
assert.match(code, /const\s+listOfAllDice\s*=\s*document\.querySelectorAll\s*\(.*\)\s*;?/);
```

You should target all elements with the `class` of `die` inside the `querySelectorAll` method.

```js
assert.match(code, /const\s+listOfAllDice\s*=\s*document\.querySelectorAll\s*\(\s*('|")\.die\1\s*\)/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Advanced Dice Game</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <header>
    <h1>Advanced Dice Game</h1>
    <button class="btn" id="rules-btn" type="button">Show rules</button>
    <div class="rules-container">
      <h2>Rules</h2>
      <ul>
        <li>There are total of six rounds</li>
        <li>You can only roll the dice three times per round</li>
        <li>To start the game, roll the dice</li>
        <li>
          Then, choose from one of the selected scores or roll the dice again
        </li>
        <li>
          If you choose a selected score, then you will move to the next round
        </li>
        <li>
          If you decline to choose a selected score, then you can roll the
          dice again two more times
        </li>
      </ul>
      <h2 class="points">Points</h2>
      <ul>
        <li>Three of a kind: Sum of all five dice</li>
        <li>Four of a kind: Sum of all five dice</li>
        <li>Full house: Three of a kind and a pair - 25 points</li>
        <li>
          Small straight: Four of the dice have consecutive values - 30 points
        </li>
        <li>
          Large straight: All five dice have consecutive values - 40 points
        </li>
      </ul>
    </div>
  </header>

  <main>
    <form id="game">
      <div id="dice">
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
        <div class="die"></div>
      </div>

      <p class="rounds-text">
        <strong>Rolls:</strong> <span id="current-round-rolls">0</span> |
        <strong>Round:</strong> <span id="current-round">1</span>
      </p>

      <div id="score-options">
        <div>
          <input type="radio" name="score-options" id="three-of-a-kind" value="three-of-a-kind" disabled />
          <label for="three-of-a-kind">Three of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="four-of-a-kind" value="four-of-a-kind" disabled />
          <label for="four-of-a-kind">Four of a kind<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="full-house" value="full-house" disabled />
          <label for="full-house">Full house<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="small-straight" value="small-straight" disabled />
          <label for="small-straight">Small straight<span></span></label>
        </div>
        <div>
          <input type="radio" name="score-options" id="large-straight" value="large-straight" disabled />
          <label for="large-straight">Large straight<span></span></label>
        </div>

        <div>
          <input type="radio" name="score-options" id="none" value="none" disabled />
          <label for="none">None of the above<span></span></label>
        </div>
      </div>

      <button class="btn" id="keep-score-btn" type="button">
        Keep the above selected score
      </button>
      <button class="btn" id="roll-dice-btn" type="button">
        Roll the dice
      </button>
    </form>

    <div id="scores">
      <h3>Score history (Total score: <span id="total-score">0</span>)</h3>
      <ol id="score-history"></ol>
    </div>
  </main>
  <script src="./script.js"></script>
</body>

</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --dark-grey: #1b1b32;
  --light-grey: #f5f6f7;
  --black: #000;
  --white: #fff;
  --grey: #3b3b4f;
  --golden-yellow: #fecc4c;
  --yellow: #ffcc4c;
  --gold: #feac32;
  --orange: #ffac33;
  --dark-orange: #f89808;
}

body {
  background-color: var(--dark-grey);
}

header {
  color: var(--light-grey);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin: 25px 0;
}

.rules-container {
  display: none;
  background-color: var(--light-grey);
  color: var(--black);
  width: 50%;
  margin: 20px auto;
  height: 300px;
  border-radius: 10px;
  overflow-y: scroll;
}

.rules-container ul {
  list-style-type: none;
}

.points {
  margin-top: 15px;
}

main {
  background-color: var(--light-grey);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1rem;
  margin: auto;
  justify-items: center;
  width: 50%;
  border-radius: 10px;
}

#dice {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.die {
  width: 40px;
  height: 40px;
  text-align: center;
  margin-right: 15px;
  border: 4px solid var(--black);
  padding: 10px;
}

.rounds-text {
  text-align: center;
}

input[type="radio"]:disabled + label {
  color: var(--grey);
}

#score-history {
  margin-top: 15px;
  text-align: center;
  list-style-position: inside;
}

.btn {
  cursor: pointer;
  width: 200px;
  margin: 10px 0 10px 0.5rem;
  color: var(--black);
  background-color: var(--gold);
  background-image: linear-gradient(var(--golden-yellow), var(--orange));
  border-color: var(--gold);
  border-width: 3px;
}

.btn:hover:enabled {
  background-image: linear-gradient(var(--yellow), var(--dark-orange));
}

@media (max-width: 992px) {
  main {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .btn {
    width: 120px;
  }
}

```

```js

--fcc-editable-region--

--fcc-editable-region--
```
