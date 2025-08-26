---
id: 65ef1aacca094bbcc2e2a3c8
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

In Python, the `max()` function returns the largest of the input values.

```python
max(1, 2, 3) # Output: 3
```

The variables `low` and `high` will be used to define the initial interval where the square root lies.

Inside the `else` clause, initialize the `low` variable to `0` and the `high` variable to be the maximum of either `1` or `square_target` as the square root of a number is always less than or equal to the number itself.

# --hints--

You should remove the `pass` keyword.

```js
({
    test: () => 
    {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].has_pass()`))
    }
})
```

You should declare a variable `low` and assign it `0`.

```js
({
    test: () => 
    {
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].find_variable("low").is_equivalent("low = 0")`));    }
})

```

You should declare a variable `high` and use the `max()` function to assign it the maximum value between `1` and `square_target`.

```js

({ test: () => assert(runPython(`
node = _Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].find_variable("high")
values = ["high = max(1, square_target)", "high = max(square_target, 1)"]
any(node.is_equivalent(val) for val in values)
`)) })
```

# --seed--

## --seed-contents--

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
--fcc-editable-region--
    else:
        pass
--fcc-editable-region--
```
