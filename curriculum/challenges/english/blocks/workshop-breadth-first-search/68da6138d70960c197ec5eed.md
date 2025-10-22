---
id: 68da6138d70960c197ec5eed
title: Step 3
challengeType: 20
dashedName: step-3
---

# --description--

Next, you need to validate that the number of pairs is at least one, since you can't generate parentheses combinations with zero or negative pairs.

Add another `if` statement to check if `pairs` is less than `1`. If this condition is true, return the string `The number of pairs should be at least 1`.

# --hints--

You should have a second `if` statement in your `gen_parentheses` function.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_ifs()[1]
`) })
```

Your second `if` statement should check if `pairs` is less than `1`.

```js
({ test: () => runPython(`
cond = _Node(_code).find_function("gen_parentheses").find_ifs()[1].find_conditions()[0]
assert cond.is_equivalent("pairs < 1") or cond.is_equivalent("1 > pairs")
`) })
```

You should return the string `The number of pairs should be at least 1` when `pairs` is less than `1`.

```js
({ test: () => runPython(`
msg = 'The number of pairs should be at least 1'
assert gen_parentheses(0) == msg and gen_parentheses(-1) == msg
`) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def gen_parentheses(pairs):
    if not isinstance(pairs, int):
        return 'The number of pairs should be an integer'
    
    return []
--fcc-editable-region--
```
