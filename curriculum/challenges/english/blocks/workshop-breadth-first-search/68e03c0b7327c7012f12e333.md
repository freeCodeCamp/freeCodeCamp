---
id: 68e03c0b7327c7012f12e333
title: Step 14
challengeType: 20
dashedName: step-14
---

# --description--

Finally, call `gen_parentheses` with `3` as its argument to generate all five valid combinations of three pairs of parentheses and print the result to the console. With that the workshop is complete.

# --hints--

You should print `gen_parentheses(3)`.

```js
({ test: () => runPython(`
assert _Node(_code).has_call("print(gen_parentheses(3))")
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
        current, opens_used, closes_used = queue.pop(0)
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            if opens_used < pairs:
                queue.append((current + '(', opens_used + 1, closes_used))
            if closes_used < opens_used:
                queue.append((current + ')', opens_used, closes_used + 1))
    
    return result
--fcc-editable-region--
print(gen_parentheses(2))

--fcc-editable-region--
```

# --solutions--

```py
def gen_parentheses(pairs):
    if not isinstance(pairs, int):
        return 'The number of pairs should be an integer'
    if pairs < 1:
        return 'The number of pairs should be at least 1'
    
    queue = [('', 0, 0)]
    result = []
    while queue:
        current, opens_used, closes_used = queue.pop(0)
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            if opens_used < pairs:
                queue.append((current + '(', opens_used + 1, closes_used))
            if closes_used < opens_used:
                queue.append((current + ')', opens_used, closes_used + 1))
    
    return result

print(gen_parentheses(2))
print(gen_parentheses(3))
```
