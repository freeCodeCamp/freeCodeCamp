---
id: 694648acde178bb8202d9513
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

The student name should follow the same format as the other details.

Remove the earlier outputs of the `name` variable. Then, print `name` and `type(name)` together on one line separated by a comma like the previous step.

# --hints--

You should not have `print(name)` in your code.

```js
({ test: () => runPython(`assert not _Node(_code).has_call("print(name)")`)})
```

You should not have `print(type(name))` in your code.

```js
({ test: () => runPython(`assert not _Node(_code).has_call("print(type(name))")`)})
```

You should print `name` and `type(name)` in the same `print()` call using a comma separator.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(name, type(name))")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
--fcc-editable-region--
print(name)
print(type(name))
--fcc-editable-region--

is_student = True
print(is_student, type(is_student))
```
