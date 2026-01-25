---
id: 694648acde178bb8202d9514
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

Now you need to add the student's age to the report card. For that you'll use an integer, one of the numeric data types in Python.

Declare a variable named `age` and assign it the integer value `20`.

Then, print the value and data type of `age` together separated by a comma. Check the output in the terminal that shows the value of `age`, and its type as `int` (integer).

# --hints--

You should have an `age` variable.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("age")`) })
```

The variable `age` should store the value `20`. Do not surround the value with quotes.

```js
({ test: () => runPython(`assert _Node(_code).find_variable("age").is_equivalent("age = 20")`) })
```

You should print `age` and `type(age)` using a comma separator.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(age, type(age))")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
print(name, type(name))

is_student = True
print(is_student, type(is_student))

--fcc-editable-region--

--fcc-editable-region--

```
