---
id: 694648abde178bb8202d9511
title: Step 3
challengeType: 20
dashedName: step-3
---

# --description--

You should now see the student name printed in the terminal.

Python provides a function named `type()` that you can use to check the type of a value.

```py
platform = 'freeCodeCamp'
print(type(platform)) # Output: <class 'str'>
```

In the example above, the output `<class 'str'>` means that the variable passed to the `type()` function is a string.

Use the `type()` function with `name` as its argument and print the output like the example. Check the output in the terminal that shows `name` is of the type `str` (string).

# --hints--

You should print the result of calling `type(name)`.

```js
({ test: () => runPython(`assert _Node(_code).has_call("print(type(name))")`) })
```

# --seed--

## --seed-contents--

```py
name = 'Alice'
print(name)
--fcc-editable-region--

--fcc-editable-region--
```
