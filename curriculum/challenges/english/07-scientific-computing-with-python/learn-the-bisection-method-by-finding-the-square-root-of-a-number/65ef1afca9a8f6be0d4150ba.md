---
id: 65ef1afca9a8f6be0d4150ba
title: Step 10
challengeType: 20
dashedName: step-10
---

# --description--

Set the value of `root` to `None` as at this point, you don't have an approximate value yet.

# --hints--

The value of `root` should be `None`.

```js
({
    test: () => 
    {
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].is_equivalent("low = 0\\nhigh = max(1, square_target)\\nroot = None")`));
    }
})

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
        low = 0
        high = max(1, square_target)

--fcc-editable-region--
```
