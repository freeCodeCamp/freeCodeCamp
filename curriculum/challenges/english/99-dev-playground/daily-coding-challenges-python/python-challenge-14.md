---
id: 6821ec98237de8297eaee79c
title: "Python Challenge 14: Character Battle"
challengeType: 29
dashedName: python-challenge-14
---

# --description--

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

- Characters `a-z` have a strength of `1-26`, respectively.
- Characters `A-Z` have a strength of `27-52`, respectively.
- Digits `0-9` have a strength of their face value.
- All other characters have a value of zero.
- Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

- `"Opponent retreated"` if your army has more characters than the opposing army.
- `"We retreated"` if the opposing army has more characters than yours.
- `"We won"` if your army won more battles.
- `"We lost"` if the opposing army won more battles.
- `"It was a tie"` if both armies won the same number of battles.

# --hints--

`battle("Hello", "World")` should return `"We lost"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("Hello", "World"), "We lost")`)
}})
```

`battle("pizza", "salad")` should return `"We won"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("pizza", "salad"), "We won")`)
}})
```

`battle("C@T5", "D0G$")` should return `"We won"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("C@T5", "D0G$"), "We won")`)
}})
```

`battle("kn!ght", "orc")` should return `"Opponent retreated"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("kn!ght", "orc"), "Opponent retreated")`)
}})
```

`battle("PC", "Mac")` should return `"We retreated"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("PC", "Mac"), "We retreated")`)
}})
```

`battle("Wizards", "Dragons")` should return `"It was a tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("Wizards", "Dragons"), "It was a tie")`)
}})
```

`battle("Mr. Smith", "Dr. Jones")` should return `"It was a tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(battle("Mr. Smith", "Dr. Jones"), "It was a tie")`)
}})
```

# --seed--

## --seed-contents--

```py
def battle(my_army, opposing_army):

    return my_army
```

# --solutions--

```py
def get_strength(soldier):
    letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if soldier.isdigit():
        return int(soldier)
    elif soldier in letters:
        return letters.index(soldier) + 1
    else:
        return 0

def battle(my_army, opposing_army):
    if len(my_army) > len(opposing_army):
        return 'Opponent retreated'
    if len(opposing_army) > len(my_army):
        return 'We retreated'

    my_wins = 0
    their_wins = 0

    for my_soldier, their_soldier in zip(my_army, opposing_army):
        my_strength = get_strength(my_soldier)
        their_strength = get_strength(their_soldier)

        if my_strength > their_strength:
            my_wins += 1
        elif their_strength > my_strength:
            their_wins += 1

    if my_wins > their_wins:
        return 'We won'
    elif their_wins > my_wins:
        return 'We lost'
    else:
        return 'It was a tie'
```
