---
id: 69461e4f98594012939bc1c6
title: Step 1
challengeType: 20
dashedName: step-1
---

# --description--

In this workshop, you will practice Python data types by building a simple report card printer.

As you learned in previous lessons, variables are assigned in this way:

```py
greeting = 'Hello World'
```

In the example above, the variable `greeting` has the value of a string, which is a sequence of characters surrounded by quotes.

Create a variable called `name` and assign it the string `Alice`. Remember to surround the value with either single or double quotes as shown in the example.

**Important:** Python uses indentation (the spaces at the beginning of a line) to organize code. For this workshop, make sure there are no extra spaces at the start of each line of code. Adding extra spaces will cause an `IndentationError` and prevent your code from running.

# --hints--

You should have a `name` variable.

```js
({ test: () => runPython(`assert _Node(_code).has_variable('name')`) })
```

The variable `name` should store the value `'Alice'`.

```js
({ test: () => runPython(`assert _Node(_code).find_variable("name").is_equivalent("name = 'Alice'")`) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--

--fcc-editable-region--
```
