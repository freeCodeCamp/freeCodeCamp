---
id: 6925e2068081f40f549ced1d
title: "Challenge 139: Rock, Paper, Scissors"
challengeType: 29
dashedName: challenge-139
---

# --description--

Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

- The input strings will always be `"Rock"`, `"Paper"`, or `"Scissors"`.
- `"Rock"` beats `"Scissors"`.
- `"Paper"` beats `"Rock"`.
- `"Scissors"` beats `"Paper"`.

Return:

- `"Player 1 wins"` if Player 1 wins.
- `"Player 2 wins"` if Player 2 wins.
- `"Tie"` if both players choose the same option.

# --hints--

`rock_paper_scissors("Rock", "Rock")` should return `"Tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Rock", "Rock"), "Tie")`)
}})
```

`rock_paper_scissors("Rock", "Paper")` should return `"Player 2 wins"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Rock", "Paper"), "Player 2 wins")`)
}})
```

`rock_paper_scissors("Scissors", "Paper")` should return `"Player 1 wins"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Scissors", "Paper"), "Player 1 wins")`)
}})
```

`rock_paper_scissors("Rock", "Scissors")` should return `"Player 1 wins"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Rock", "Scissors"), "Player 1 wins")`)
}})
```

`rock_paper_scissors("Scissors", "Scissors")` should return `"Tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Scissors", "Scissors"), "Tie")`)
}})
```

`rock_paper_scissors("Scissors", "Rock")` should return `"Player 2 wins"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rock_paper_scissors("Scissors", "Rock"), "Player 2 wins")`)
}})
```

# --seed--

## --seed-contents--

```py
def rock_paper_scissors(player1, player2):

    return player1
```

# --solutions--

```py
def rock_paper_scissors(player1, player2):
    if player1 == player2:
        return "Tie"
    
    if (player1 == "Rock" and player2 == "Scissors") or \
       (player1 == "Paper" and player2 == "Rock") or \
       (player1 == "Scissors" and player2 == "Paper"):
        return "Player 1 wins"
    else:
        return "Player 2 wins"
```
