---
id: 66629f407d679d3105e8317f
title: Build a Rock Paper Scissors Game
challengeType: 14
dashedName: top-build-a-rock-paper-scissors-game
---

# --description--
Your game will be played against the computer. You will write a function that randomly returns `"rock"`, `"paper"` or `"scissors"`.

You do not need to worry about the front-end part of the game. You will only write the logic for the game. Open the `script.js` and start following the instructions.

**User stories:**

1. You should have a function named `getComputerChoice`.

1. Your `getComputerChoice` function should return `"rock"`, `"paper"`, or `"scissors"` at random.

**Hint:** The [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

Your game will be played by a human player. You will write a function that takes the user's choice and returns it.

1. Create a function named `getHumanChoice`.

1. Write the code so that `getHumanChoice` will return one of the valid choices depending on what the user inputs.

**Hint:** Use the [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method to get the user’s input.

Your game will keep track of the player's score. You will write variables to keep track of the player's score.

1. Create two new variables named `humanScore` and `computerScore` in the global scope.

1. Initialize those variables with the value of `0`.

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

1. Create a new function named `playRound`.

1. Define two parameters for `playRound`. Parameter one `humanChoice` and parameter two `computerChoice`. Use these two parameters to take the human and computer choices as arguments.

1. Make your function’s `humanChoice` parameter case-insensitive so that players can input `"rock"`, `"ROCK"`, `"RocK"`, or other variations.

1. Write the code for your `playRound` function that returns a string value representing the round winner.

- If it is a tie, it should return `"It's a tie!"`.

- If the player wins, it should return `"You win! [player choice] beats [computer choice]"`.

- If the computer wins, it should return `"You lose! [computer choice] beats [player choice]"`.

1. Increment the `humanScore` or `computerScore` variable based on the round winner.

Your game will play 3 rounds. You will write a function named `playGame` that calls `playRound` to play 3 rounds, keeps track of the scores, and declares a winner at the end.

1. Create a new function named `playGame`.

1. Create a loop that plays 3 rounds and calls the `playRound` function each time with the human's choice and the computer's choice functions as arguments.

1. At the end of the game, return the winner of the game based on who won the most rounds.

- If the human player wins more rounds than the computer player, return a message that says `"You win the game!"`.

- If the computer player wins more rounds than the human player, return a message that says `"You lose the game!"`.

# --hints--

You should have a function called `getComputerChoice`

```js
assert.isFunction(getComputerChoice);
```

Your `getComputerChoice` function should return `"rock"`, `"paper"`, or `"scissors"` at random.

```js
const counts = {}
for (let i = 0; i < 100; i++) {
  const result = getComputerChoice();
  counts[result] = (counts[result] ?? 0) + 1;
}
assert.lengthOf(Object.keys(counts), 3);
assert.include(Object.keys(counts), "rock");
assert.include(Object.keys(counts), "paper"); 
assert.include(Object.keys(counts), "scissors");
```

You should have a function called `getHumanChoice`

```js
assert.isFunction(getHumanChoice);
```

You should have two variables named `humanScore` and `computerScore` in the global scope.

```js
assert.exists(humanScore);
assert.exists(computerScore);
```

You should have a function called `playRound`

```js
assert.isFunction(playRound);
```

Your `playRound` function should take the human and computer player choices as arguments with the parameters `humanChoice` and `computerChoice`.

```js
assert.match(playRound.toString(), /\s*(?:\bhumanChoice\b\s*,\s*\bcomputerChoice\b)/);
```

Your `playRound` function should be case-insensitive so that players can input `"rock"`, `"ROCK"`, `"RocK"`, or other variations.

```js
assert.match(playRound.toString(), /\bhumanChoice\s*\.toLowerCase\(\)/);
```

Your `playRound` function should return the string `"It's a tie!"` if the human and computer choices are the same.

```js
assert.equal(playRound("rock", "rock"), "It's a tie!");
```

Your `playRound` function should return the string `"You win! [player choice] beats [computer choice]"` if the player wins.

```js
assert.equal(playRound("rock", "scissors"), "You win! rock beats scissors");
```

Your `playRound` function should return the string `"You lose! [computer choice] beats [player choice]"` if the computer wins.

```js
assert.equal(playRound("rock", "paper"), "You lose! paper beats rock");
```

Your `playRound` function should increment the `humanScore` or `computerScore` variable based on the round winner.

```js
humanScore = 0;
computerScore = 0;
playRound("rock", "scissors");
assert.equal(humanScore, 1);
```

You should have a function called `playGame`.

```js
assert.isFunction(playGame);
```

You should use a loop to play 3 rounds.

```js
assert.match(playGame.toString(), /\bfor\s*\(/);
```

You should return the winner of the game based on who won the most rounds.

```js
window.prompt = () => "rock";
assert.match(playGame(), /You (win|lose) the game!/);
```

# --seed--

## --seed-contents--

```js
const hand = ['rock', 'paper', 'scissor'];
```

```html
<html lang="en">
<head>
  <script src="script.js"></script>
</head>
</html>
```

# --solutions--

```html
<html lang="en">
<head>
  <script src="script.js"></script>
</head>
</html>
```

```js
const hand = ['rock', 'paper', 'scissors'];


let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
  return hand[Math.floor(Math.random() * hand.length)];
}

const getHumanChoice = () => {
  return prompt();
}

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase()

  const tie = "It's a tie!"
  const win = `You win! ${humanChoice} beats ${computerChoice}`
  const lose = `You lose! ${computerChoice} beats ${humanChoice}`


  if (humanChoice == 'rock') {
    if (computerChoice == 'rock') {
      computerScore++;
      humanScore++;
      return tie;
    } else if (computerChoice == 'paper') {
      computerScore++;
      return lose;
    } else {
      humanScore++;
      return win;
    }
  } else if (humanChoice == 'paper') {
    if (computerChoice == 'rock') {
      humanScore++;
      return win;
    } else if (computerChoice == 'paper') {
      computerScore++;
      humanScore++;
      return tie;
    } else {
      computerScore++;
      return lose;
    }
  } else if (humanChoice == 'scissors') {
    if (computerChoice == 'rock') {
      computerScore++;
      return lose;
    } else if (computerChoice == 'paper') {
      humanScore++;
      return win;
    } else {
      computerScore++;
      humanScore++;
      return tie;
    }
  }
}

const playGame = () => {
  for(let i = 0; i < 3; i++){
    playRound(getHumanChoice(), getComputerChoice())
  }

  return humanScore > computerScore ? "You win the game!" : "You lose the game!"
}

```

