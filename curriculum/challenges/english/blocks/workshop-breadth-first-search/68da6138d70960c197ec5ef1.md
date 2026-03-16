---
id: 68da6138d70960c197ec5ef1
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

Now you need to identify when you've built a complete parentheses combination. A complete combination has a length equal to twice the number of pairs (since each pair contributes one opening and one closing parenthesis).

Inside your `while` loop, add an `if` statement to check if `len(current) == 2 * pairs`. When this condition is true, append `current` to the `result` list.

# --hints--

You should have an `if` statement inside your `while` loop.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0]
`) })
```

Your `if` statement should check if `len(current) == 2 * pairs`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0].find_conditions()[0].is_equivalent("len(current) == 2 * pairs")
`) })
```

You should append `current` to the `result` list inside your new `if` statement.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_whiles()[0].find_bodies()[0].find_ifs()[0].find_bodies()[0].has_call("result.append(current)")
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
    return result

print(gen_parentheses(1))
```
