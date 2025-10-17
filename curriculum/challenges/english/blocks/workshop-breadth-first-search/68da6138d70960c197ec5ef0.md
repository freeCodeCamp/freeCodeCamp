---
id: 68da6138d70960c197ec5ef0
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

Now you'll implement the main BFS loop. Create a `while` loop that continues as long as the `queue` is not empty (while `queue` evaluates to `True`).

Inside the loop, print `queue`.

# --hints--

You should have a `while` loop in your `gen_parentheses` function.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0]
`) })
```

Your `while` loop should have the condition `queue`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_conditions()[0].is_equivalent("queue")
`) })
```

You should print `queue` inside your `while` loop.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].has_call("print(queue)")
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
    queue = [('', 0, 0)]
    result = []
    
    
    return result
--fcc-editable-region--
```
