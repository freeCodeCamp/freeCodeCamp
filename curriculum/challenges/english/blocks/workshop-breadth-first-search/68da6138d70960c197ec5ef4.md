---
id: 68da6138d70960c197ec5ef4
title: Step 12
challengeType: 20
dashedName: step-12
---

# --description--

Your function is now complete. Test it again by printing `gen_parentheses(2)` instead of `gen_parentheses(1)`.

# --hints--

You should print `gen_parentheses(2)`.

```js
({ test: () => runPython(`
assert _Node(_code).has_call("print(gen_parentheses(2))")
`) })
```

You should not have `print(gen_parentheses(1))` in your code

```js
({ test: () => runPython(`
assert not _Node(_code).has_call("print(gen_parentheses(1))")
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
        
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            if opens_used < pairs:
                queue.append((current + '(', opens_used + 1, closes_used))
            if closes_used < opens_used:
                queue.append((current + ')', opens_used, closes_used + 1))
    
    return result
--fcc-editable-region--
print(gen_parentheses(1))
--fcc-editable-region--
```
