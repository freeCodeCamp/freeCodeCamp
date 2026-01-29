---
id: 686ccc2c8b967e17ab18d593
title: Implement the Bisection Method
challengeType: 27
dashedName: implement-the-bisection-method
---

# --description--

The bisection method, also known as the binary search method, uses a binary search to find the roots of a real-valued function. It works by narrowing down an interval where the square root lies until it converges to a value within a specified tolerance.

For example, if the tolerance is `0.01`, the bisection method will keep halving the interval until the difference between the upper and lower bounds is less than or equal to `0.01`.

In this lab, you will implement a function that uses the bisection method to find the square root of a number.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `square_root_bisection` with three parameters:
    - The number for which you want to find the square root.
    - The tolerance being the acceptable error margin for the result. You should set a default tolerance value.
    - The maximum number of iterations to perform. You should set a default number of iterations.

1. The `square_root_bisection` function should:
    - Raise a `ValueError` with the message `Square root of negative number is not defined in real numbers` if the number passed to the function is negative.
    - For numbers `0` and `1`, print the message: `The square root of [number] is [number]` and return the number itself as the square root.
    - For any other positive number, print the approximate square root with the message: `The square root of [square_target] is approximately [root]` and return the computed root value.
    - If no value meets the tolerance condition, print a failure message: `Failed to converge within [maximum] iterations` and return `None`.

**Note**: You cannot import any module for this lab.

# --hints--

You should not import any module.

```js
({ test: () => assert(runPython(`len(_Node(_code).find_imports()) == 0`)) })
```

You should have a function named `square_root_bisection`.

```js
({ test: () => assert(runPython(`_Node(_code).has_function("square_root_bisection")`)) })
```

Your `square_root_bisection` function should have three parameters.

```js
({ test: () => runPython(`
    import inspect 
    sig = inspect.signature(square_root_bisection)
    assert len(sig.parameters) == 3
`) })
```

You should set a default value for the tolerance and the maximum number of iterations.

```js
({ test: () => runPython(`
try:
  import inspect 
  sig = inspect.signature(square_root_bisection)
  assert len(sig.parameters) == 3
  square_root_bisection(4)
except TypeError:
  assert False
`) })
```

Your `square_root_bisection` function should raise a `ValueError` with the message `Square root of negative number is not defined in real numbers` when the number passed to the function is negative.

```js
({ test: () => runPython(`
try:
  square_root_bisection(-6)
except ValueError as e:
  assert str(e) == "Square root of negative number is not defined in real numbers"
else:
  assert False
`) })
```

`square_root_bisection(0)` should return `0`.

```js
({ test: () => runPython(`assert square_root_bisection(0) == 0`) })
```

`square_root_bisection(0)` should print `The square root of 0 is 0`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print
square_root_bisection(0)
assert "The square root of 0 is 0" in _out
`) })
```

`square_root_bisection(0.001, 1e-7, 50)` should return a number between `0.03162267660168379` and `0.031622876601683794`.

```js
({ test: () => runPython(`assert 0.03162267660168379 <= square_root_bisection(0.001, 1e-7, 50) <= 0.031622876601683794`) })
```

`square_root_bisection(0.001, 1e-7, 50)` should print `The square root of 0.001 is approximately X`, where `X` is a number between `0.03162267660168379` and `0.031622876601683794`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(0.001, 1e-7, 50)

assert 0.03162267660168379 <= _root <= 0.031622876601683794
assert f"The square root of 0.001 is approximately {_root}" in _out
`) })
```

`square_root_bisection(0.25, 1e-7, 50)` should return a number between `0.4999999` and `0.5000001`.

```js
({ test: () => runPython(`assert 0.4999999 <= square_root_bisection(0.25, 1e-7, 50) <= 0.5000001`) })
```

`square_root_bisection(0.25, 1e-7, 50)` should print `The square root of 0.25 is approximately X`, where `X` is a number between `0.4999999` and `0.5000001`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(0.25, 1e-7, 50)

assert 0.4999999 <= _root <= 0.5000001
assert f"The square root of 0.25 is approximately {_root}" in _out
`) })
```

`square_root_bisection(1)` should return `1`.

```js
({ test: () => runPython(`assert square_root_bisection(1) == 1`) })
```

`square_root_bisection(1)` should print `The square root of 1 is 1`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print
square_root_bisection(1)
assert "The square root of 1 is 1" in _out
`) })
```

`square_root_bisection(81, 1e-3, 50)` should return a number between `8.999` and `9.001`.

```js
({ test: () => runPython(`assert 8.999 <= square_root_bisection(81, 1e-3, 50) <= 9.001`) })
```

`square_root_bisection(81, 1e-3, 50)` should print `The square root of 81 is approximately X`, where `X` is a number between `8.999` and `9.001`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(81, 1e-3, 50)

assert 8.999 <= _root <= 9.001
assert f"The square root of 81 is approximately {_root}" in _out
`) })
```

`square_root_bisection(225, 1e-3, 100)` should return a number between `14.999` and `15.001`.

```js
({ test: () => runPython(`assert 14.999 <= square_root_bisection(225, 1e-3, 100) <= 15.001`) })
```

`square_root_bisection(225, 1e-3, 100)` should print `The square root of 225 is approximately X`, where `X` is a number between `14.999` and `15.001`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(225, 1e-3, 100)

assert 14.999 <= _root <= 15.001
assert f"The square root of 225 is approximately {_root}" in _out
`) })
```

`square_root_bisection(225, 1e-5, 100)` should return a number between `14.99999` and `15.00001`.

```js
({ test: () => runPython(`assert 14.99999 <= square_root_bisection(225, 1e-5, 100) <= 15.00001`) })
```

`square_root_bisection(225, 1e-5, 100)` should print `The square root of 225 is approximately X`, where `X` is a number between `14.99999` and `15.00001`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(225, 1e-5, 100)

assert 14.99999 <= _root <= 15.00001
assert f"The square root of 225 is approximately {_root}" in _out
`) })
```

`square_root_bisection(225, 1e-7, 100)` should return a number between `14.9999999` and `15.0000001`.

```js
({ test: () => runPython(`assert 14.9999999 <= square_root_bisection(225, 1e-7, 100) <= 15.0000001`) })
```

`square_root_bisection(225, 1e-7, 100)` should print `The square root of 225 is approximately X`, where `X` is a number between `14.9999999` and `15.0000001`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print

_root = square_root_bisection(225, 1e-7, 100)

assert 14.9999999 <= _root <= 15.0000001
assert f"The square root of 225 is approximately {_root}" in _out
`) })
```

`square_root_bisection(225, 1e-7, 10)` should return `None`.

```js
({ test: () => runPython(`assert square_root_bisection(225, 1e-7, 10) is None`) })
```

`square_root_bisection(225, 1e-7, 10)` should print `Failed to converge within 10 iterations`.

```js
({ test: () => runPython(`
built_in_print = print
_out = []

def custom_print(*args, **kwargs):
  call_args = [arg for arg in args]
  _out.extend(call_args)

print = custom_print
square_root_bisection(225, 1e-7, 10)
assert "Failed to converge within 10 iterations" in _out
`) })
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
    if square_target == 1:
        root = 1
        print(f'The square root of {square_target} is 1')
    elif square_target == 0:
        root = 0
        print(f'The square root of {square_target} is 0')

    else:
        low = square_target if square_target < 1 else 1
        high = 1 if square_target < 1 else square_target
        root = None

        for _ in range(max_iterations):
            mid = (low + high) / 2
            square_mid = mid**2

            if high - low <= tolerance:
                root = mid
                break

            elif square_mid < square_target:
                low = mid
            else:
                high = mid

        if root is None:
            print(f"Failed to converge within {max_iterations} iterations")

        else:   
            print(f'The square root of {square_target} is approximately {root}')

    return root
```
