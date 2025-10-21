---
id: 68da6138d70960c197ec5ef2
title: Step 10
challengeType: 20
dashedName: step-10
---

# --description--

If the current string isn't complete yet, you need to explore the next possible states. Add an `else` clause to your `if` statement.

Inside the `else` block, you'll handle adding opening parentheses. Add an `if` statement to check if `opens_used < pairs`. This ensures you don't use more opening parentheses than allowed.

If this condition is true, append a new tuple to the `queue`: `(current + '(', opens_used + 1, closes_used)`. This represents the state after adding an opening parenthesis.

# --hints--

You should have an `else` clause for your `if` statement inside the `while` loop.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0].tree.orelse
`) })
```

You should have an `if` statement inside the `else` block checking if `opens_used < pairs`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0].find_conditions()[1].is_equivalent("opens_used < pairs")
`) })
```

You should append `(current + '(', opens_used + 1, closes_used)` to the queue when the condition is true.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0].find_bodies()[1].has_call("queue.append((current + '(', opens_used + 1, closes_used))")
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
        current, opens_used, closes_used = queue.pop(0)
        if len(current) == 2 * pairs:
            result.append(current)
        
--fcc-editable-region--
    return result

print(gen_parentheses(1))
```
