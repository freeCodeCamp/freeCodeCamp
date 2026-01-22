---
id: 68e00c5349cbddfef6dbc053
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

Inside your `while` loop, use `queue.pop(0)` to remove and get the first element from the queue. This implements the first-in-first-out (FIFO) behavior characteristic of BFS.

Unpack this tuple into three variables: `current`, `opens_used`, and `closes_used`.

# --hints--

You should use `queue.pop(0)` to get the first element from the queue.

```js
({ test: () => runPython(`
assert "queue.pop(0)" in str(_Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0])
`) })
```

You should unpack the result into three variables: `current`, `opens_used`, and `closes_used`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].has_stmt("current, opens_used, closes_used = queue.pop(0)")
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
--fcc-editable-region--
    while queue:
        print(queue)
        
--fcc-editable-region--
    return result
```
