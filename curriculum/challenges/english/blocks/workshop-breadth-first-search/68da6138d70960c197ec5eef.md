---
id: 68da6138d70960c197ec5eef
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

For the breadth-first search approach, you'll use a queue to track different states as you build the parentheses combinations. Each state will be represented as a tuple containing three elements:

- The current string being built
- The number of opening parentheses used so far
- The number of closing parentheses used so far

Create a variable named `queue` and initialize it with a list containing one tuple: `('', 0, 0)`. This represents the starting state with an empty string and zero parentheses used.

# --hints--

You should declare a variable named `queue` in your `gen_parentheses` function.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").has_variable("queue")
`) })
```

You should initialize `queue` with a list containing the tuple `('', 0, 0)`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_variable("queue").is_equivalent("queue = [('', 0, 0)]")
`) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def gen_parentheses(pairs):
    if not isinstance(pairs, int):
        return 'The number of pairs should be an integer'
    if pairs < 1:
        return 'The number of pairs should be at least 1'
    
    result = []
    return result
--fcc-editable-region--
```
