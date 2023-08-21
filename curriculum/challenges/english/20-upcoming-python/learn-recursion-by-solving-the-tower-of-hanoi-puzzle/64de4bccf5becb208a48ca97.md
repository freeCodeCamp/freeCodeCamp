---
id: 64de4bccf5becb208a48ca97
title: Step 13
challengeType: 20
dashedName: step-13
---

# --description--

In the Tower of Hanoi puzzle, you can identify the three rods according to their purpose:

- The first rod is the source, where all the disks are stacked on top of each other at the beginning of the game.
- The second rod is an auxiliary rod, it helps in moving the disks to the target rod.
- The third rod is the target, where all the disks should be placed in order at the end of the game.

Currently, the `move` function does not take any parameters. Change the function declaration to take 4 parameters: `n`, `source`, `target`, and `auxiliary`. Then, pass `NUMBER_OF_DISKS` and the strings `'A'`, `'C'`, and `'B'` as arguments to your function call. The order matters.

# --hints--

Your `move` function should have `n`, `source`, `target`, and `auxiliary` as the parameters. The order matters.

```js
({ test: () => assert(__pyodide.runPython(`
      import inspect
      str(inspect.signature(__locals.get('move'))) == '(n, source, target, auxiliary)'    
  `))
})
```

You should pass `NUMBER_OF_DISKS` and the strings `'A'`, `'C'`, and `'B'` to `move()`. The order matters.

```js
({test: () => assert.match(code, /(?<!def\s+)move\(\s*NUMBER_OF_DISKS\s*,\s*('|")A\1\s*,\s*('|")C\2\s*,\s*('|")B\3\s*\)/)
})
```

# --seed--

## --seed-contents--

```py
NUMBER_OF_DISKS = 3
number_of_moves = 2 ** NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

--fcc-editable-region--
def move():
    print(rods)

move()
--fcc-editable-region--
```
