---
id: 694648acde178bb8202d9515
title: Step 8
challengeType: 20
dashedName: step-8
---

# --description--

Now, add the student's score.

Declare a variable named `score` and assign it the value `80.5`.

Although both `age` and `score` are numbers, they may not be the same kind. Python provides a function called `isinstance()` to check this.

```py
x = 10
print(isinstance(x, int)) # Output: True
```

Use `isinstance()` to check whether `score` is an `int`, and print the result to the terminal as shown in the example above.

# --hints--

You should have a `score` variable.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("score")`) })
```

The variable `score` should store the value `80.5`. Do not surround the value with quotes.

```js
({ test: () => runPython(`assert _Node(_code).find_variable("score").is_equivalent("score = 80.5")`) })
```

You should print the result of `isinstance(score, int)`.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(isinstance(score, int))")`) })
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

--fcc-editable-region--

--fcc-editable-region--

```
