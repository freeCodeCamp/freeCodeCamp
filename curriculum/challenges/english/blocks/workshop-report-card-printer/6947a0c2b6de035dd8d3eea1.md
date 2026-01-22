---
id: 6947a0c2b6de035dd8d3eea1
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

You can print the value of a variable using the `print()` function.

```py
greeting = 'Hello World'
print(greeting) # Output: Hello World
```

You will learn more about functions in upcoming lessons. For now, know that a function is a reusable block of code that can be called, or invoked, to run its code, and arguments can be passed to it.

In the example above, `print(greeting)` is a function call, and `greeting` is the argument of the function.

Refer to the example and print the `name` variable. Check the output in the terminal.

# --hints--

You should call `print()` with `name` as its argument.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(name)")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
--fcc-editable-region--

--fcc-editable-region--
```
