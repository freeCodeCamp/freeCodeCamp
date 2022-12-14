---
id: 5e46f8d6ac417301a38fb92d
title: Rock Paper Scissors
challengeType: 10
forumTopicId: 462376
dashedName: rock-paper-scissors
---

# --description--

For this challenge, you will create a program to play Rock, Paper, Scissors. A program that picks at random will usually win 50% of the time. To pass this challenge your program must play matches against four different bots, winning at least 60% of the games in each match.

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-rock-paper-scissors" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.

We are still developing the interactive instructional part of the machine learning curriculum. For now, you will have to use other resources to learn how to pass this challenge.

# --instructions--

In the file `RPS.py` you are provided with a function called `player`. The function takes an argument that is a string describing the last move of the opponent ("R", "P", or "S"). The function should return a string representing the next move for it to play ("R", "P", or "S").

A player function will receive an empty string as an argument for the first game in a match since there is no previous play.

The file `RPS.py` shows an example function that you will need to update. The example function is defined with two arguments (`player(prev_play, opponent_history = [])`). The function is never called with a second argument so that one is completely optional. The reason why the example function contains a second argument (`opponent_history = []`) is because that is the only way to save state between consecutive calls of the `player` function. You only need the `opponent_history` argument if you want to keep track of the opponent_history.

*Hint: To defeat all four opponents, your program may need to have multiple strategies that change depending on the plays of the opponent.*

## Development

Do not modify `RPS_game.py`. Write all your code in `RPS.py`. For development, you can use `main.py` to test your code.

`main.py` imports the game function and bots from `RPS_game.py`.

To test your code, play a game with the `play` function. The `play` function takes four arguments:

- two players to play against each other (the players are actually functions)
- the number of games to play in the match
- an optional argument to see a log of each game. Set it to `True` to see these messages.

```py
play(player1, player2, num_games[, verbose])
```

For example, here is how you would call the function if you want `player` and `quincy` to play 1000 games against each other and you want to see the results of each game:

```py
play(player, quincy, 1000, verbose=True)
```

Click the "run" button and `main.py` will run.

## Testing

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience. If you uncomment the last line in `main.py`, the tests will run automatically whenever you hit the "run" button.

## Submitting

Copy your project's URL and submit it below.

# --hints--

It should pass all Python tests.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
