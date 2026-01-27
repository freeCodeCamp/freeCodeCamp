---
id: 694648acde178bb8202d9512
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

The report card should also show whether the student is currently enrolled. This can be represented using a boolean value.

Boolean values represent a yes-or-no condition, and they are often used to make decisions in code. There are only two boolean values: `True` and `False`.

Declare a variable named `is_student` and assign it the value `True`.

# --hints--

You should have an `is_student` variable.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("is_student")`) })
```

The variable `is_student` should store the value `True`. Do not surround the value with quotes.

```js
({ test: () => runPython(`assert _Node(_code).find_variable("is_student").is_equivalent("is_student = True")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
print(name)
print(type(name))

--fcc-editable-region--

--fcc-editable-region--
```
