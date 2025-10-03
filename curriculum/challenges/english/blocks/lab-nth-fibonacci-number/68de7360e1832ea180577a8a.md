---
id: 68de7360e1832ea180577a8a
title: Build an Nth Fibonacci Number Calculator
challengeType: 27
dashedName: build-an-nth-fibonacci-number-calculator
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `fibonacci`.
2. You should define a list named `sequence` within the `fibonacci` function, and it should be initialized with the values `[0, 1]`.
3. The `fibonacci` function should accept one parameter, a positive integer `n`.  
4. Calling `fibonacci(n)` should use a dynamic programming approach to compute and return the `n`-th number from the Fibonacci sequence, where each number is the sum of the two preceding numbers.
5. Each computed number at the position `n` in the Fibonacci sequence should be stored in the `sequence` list at index `n - 1`.

# --hints--

You should have a function named `fibonacci`.

```js
({ test: () => runPython(`assert _Node(_code).has_function("fibonacci")`) })
```

Your `fibonacci` function should take a single parameter.

```js
({ test: () => runPython(`
from inspect import signature
sig = signature(fibonacci)
assert len(sig.parameters) == 1
`) })
```

You should have a list named `sequence` within the `fibonacci` function initialized to `[0, 1]`.

```js
({ test: () => runPython(`assert _Node(_code).find_function("fibonacci").has_stmt("sequence = [0, 1]")`) })
```

`fibonacci(0)` should return `0`.

```js
({ test: () => runPython(`assert fibonacci(0) == 0`) })
```

`fibonacci(1)` should return `1`.

```js
({ test: () => runPython(`assert fibonacci(1) == 1`) })
```

`fibonacci(2)` should return `1`.

```js
({ test: () => runPython(`assert fibonacci(2) == 1`) })
```

`fibonacci(3)` should return `2`.

```js
({ test: () => runPython(`assert fibonacci(3) == 2`) })
```

`fibonacci(5)` should return `5`.

```js
({ test: () => runPython(`assert fibonacci(5) == 5`) })
```

`fibonacci(10)` should return `55`.

```js
({ test: () => runPython(`assert fibonacci(10) == 55`) })
```

`fibonacci(15)` should return `610`.

```js
({ test: () => runPython(`assert fibonacci(15) == 610`) })
```

You should not use recursion in your code.

```js
({ test: () => runPython(`
assert not _Node(_code).find_function("fibonacci").find_body().block_has_call("fibonacci")
`) })
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def fibonacci(n):
    sequence = [0, 1]
    
    if n < 2:
        return sequence[n]
    
    for i in range(2, n + 1):
        sequence.append(sequence[i - 1] + sequence[i - 2])
    
    return sequence[n]
```

