---
id: 694648acde178bb8202d9516
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

The output is `False`, which shows that `score` is not an `int`.

Another common kind of number in Python is `float`, which represents a number with decimals. Replace `int` with `float` in the existing `isinstance()` call to confirm this.

# --hints--

You should replace `int` with `float` in the existing `isinstance(score, int)` call.

```js
({ test: () => runPython(`
  assert not _Node(_code).has_call("print(isinstance(score, int))")
  assert _Node(_code).has_call("print(isinstance(score, float))")
`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
print(name, type(name))

is_student = True
print(is_student, type(is_student))

age = 20
print(age, type(age))

score = 80.5
--fcc-editable-region--
print(isinstance(score, int))
--fcc-editable-region--

```
