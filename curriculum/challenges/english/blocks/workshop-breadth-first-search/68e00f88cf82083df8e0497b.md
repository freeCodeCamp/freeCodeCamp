---
id: 68e00f88cf82083df8e0497b
title: Step 8
challengeType: 20
dashedName: step-8
---

# --description--

Before you keep working on the BFS logic, call `gen_parentheses(1)` and print the result to the console.

# --hints--

You should print `gen_parentheses(1)` to the console.

```js
({ test: () => runPython(`
assert _Node(_code).has_call('print(gen_parentheses(1))')
`) })
```

# --seed--

## --seed-contents--

```py
def gen_parentheses(pairs):
    if not isinstance(pairs, int):
        return 'The number of pairs should be an integer'
    if pairs < 1:
        return 'The number of pairs should be at least 1'
    
    queue = [('', 0, 0)]
    result = []

    while queue:
        print(queue)
        current, opens_used, closes_used = queue.pop(0)

    return result
--fcc-editable-region--

--fcc-editable-region--
```
