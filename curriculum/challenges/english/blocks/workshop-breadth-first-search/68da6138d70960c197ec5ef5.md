---
id: 68da6138d70960c197ec5ef5
title: Step 13
challengeType: 20
dashedName: step-13
---

# --description--

Now you don't need to print the queue anymore. So remove `print(queue)` from your `while` loop.
# --hints--

You should not have `print(queue)` in your `while` loop.

```js
({ test: () => runPython(`
assert not _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].has_call("print(queue)")
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
--fcc-editable-region--
        if len(current) == 2 * pairs:
            result.append(current)
        else:
            if opens_used < pairs:
                queue.append((current + '(', opens_used + 1, closes_used))
            if closes_used < opens_used:
                queue.append((current + ')', opens_used, closes_used + 1))
    
    return result

print(gen_parentheses(2))
```
