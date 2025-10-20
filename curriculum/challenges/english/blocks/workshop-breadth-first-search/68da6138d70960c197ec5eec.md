---
id: 68da6138d70960c197ec5eec
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

Before implementing the core algorithm, you need to validate the input. The `pairs` parameter should be an integer, as it represents the number of parentheses pairs to generate.

Add an `if` statement at the beginning of your function to check if `pairs` is not an integer. Use the `isinstance()` function for that.

If the condition is true, return the string `The number of pairs should be an integer`.

# --hints--

You should have an `if` statement in your `gen_parentheses` function.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_ifs()[0]
`) })
```

Your `if` statement should check if `pairs` is not an integer using `not isinstance(pairs, int)`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").find_ifs()[0].find_conditions()[0].is_equivalent("not isinstance(pairs, int)")
`) })
```

You should return the string `The number of pairs should be an integer` when the input is not an integer.

```js
({ test: () => runPython(`
msg = 'The number of pairs should be an integer'
args = [1.1, "1", [1, 2], {}]
assert  all(gen_parentheses(arg) == msg for arg in args)
`) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def gen_parentheses(pairs):
    
    return []
--fcc-editable-region--
```
