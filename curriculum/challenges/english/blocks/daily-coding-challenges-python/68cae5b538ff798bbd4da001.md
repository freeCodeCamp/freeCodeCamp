---
id: 68cae5b538ff798bbd4da001
title: "Challenge 63: Battle of Words"
challengeType: 29
dashedName: challenge-63
---

# --description--

Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

- The given sentences will always contain the same number of words.
- Words are separated by a single space and will only contain letters.
- The value of each word is the sum of its letters.
- Letters `a` to `z` correspond to the values `1` through `26`. For example, `a` is `1`, and `z` is `26`.
- A capital letter doubles the value of the letter. For example, `A` is `2`, and `Z` is `52`.
- Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
- A word wins if its value is greater than the opposing word's value.
- The team with more winning words is the winner.

Return `"We win"` if your team is the winner, `"We lose"` if your team loses, and `"Draw"` if both teams have the same number of wins.

# --hints--

`battle("hello world", "hello word")` should return `"We win"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("hello world", "hello word"), "We win")`)
}})
```

`battle("Hello world", "hello world")` should return `"We win"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("Hello world", "hello world"), "We win")`)
}})
```

`battle("lorem ipsum", "kitty ipsum")` should return `"We lose"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("lorem ipsum", "kitty ipsum"), "We lose")`)
}})
```

`battle("hello world", "world hello")` should return `"Draw"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("hello world", "world hello"), "Draw")`)
}})
```

`battle("git checkout", "git switch")` should return `"We win"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("git checkout", "git switch"), "We win")`)
}})
```

`battle("Cheeseburger with fries", "Cheeseburger with Fries")` should return `"We lose"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("Cheeseburger with fries", "Cheeseburger with Fries"), "We lose")`)
}})
```

`battle("We must never surrender", "Our team must win")` should return `"Draw"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("We must never surrender", "Our team must win"), "Draw")`)
}})
```

# --seed--

## --seed-contents--

```py
def battle(our_team, opponent):

    return our_team
```

# --solutions--

```py
def get_word_value(word):
    value = 0
    for char in word:
        val = ord(char.lower()) - ord('a') + 1
        if char.isupper():
            val *= 2
        value += val
    return value

def battle(our_team, opponent):
    my_wins = 0
    opp_wins = 0

    for my_word, opp_word in zip(our_team.split(), opponent.split()):
        my_val = get_word_value(my_word)
        opp_val = get_word_value(opp_word)

        if my_val > opp_val:
            my_wins += 1
        elif opp_val > my_val:
            opp_wins += 1

    if my_wins > opp_wins:
        return "We win"
    elif opp_wins > my_wins:
        return "We lose"
    else:
        return "Draw"
```
