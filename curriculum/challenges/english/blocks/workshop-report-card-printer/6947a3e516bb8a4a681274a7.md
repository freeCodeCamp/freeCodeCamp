---
id: 6947a3e516bb8a4a681274a7
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

The `print()` function can display more than one value at a time. Separate values with a comma (`,`) to print them on the same line.

```py
subject = 'Python'
print(subject, type(subject)) # Output: Python <class 'str'>
```

Print both `is_student` and `type(is_student)` on the same line using a comma `,` as shown in the example. Then, check the output in the terminal that shows the value of `is_student`, and its type as `bool` (boolean).

# --hints--

You should print `is_student` and `type(is_student)` using a comma separator.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(is_student, type(is_student))")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
print(name)
print(type(name))

is_student = True
--fcc-editable-region--

--fcc-editable-region--
```
