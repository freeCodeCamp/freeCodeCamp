---
id: 694648acde178bb8202d9517
title: Step 10
challengeType: 20
dashedName: step-10
---

# --description--

The output is `True`, confirming that `score` is a `float`.

Complete the report card by printing the `score` value along with its data type using a single `print()` statement.

# --hints--

You should print `score` and `type(score)` using a comma separator.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(score, type(score))")`) })
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
print(isinstance(score, float))
--fcc-editable-region--

--fcc-editable-region--

```

# --solutions--

```py
name = 'Alice'
print(name, type(name))

is_student = True
print(is_student, type(is_student))

age = 20
print(age, type(age))

score = 80.5
print(isinstance(score, float))
print(score, type(score))
```
