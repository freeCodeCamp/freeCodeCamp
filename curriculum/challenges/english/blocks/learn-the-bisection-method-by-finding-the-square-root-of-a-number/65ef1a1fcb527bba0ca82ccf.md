---
id: 65ef1a1fcb527bba0ca82ccf
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

If the `square_target` is equal to  `1`, declare a variable `root` and assign it the value `1` . Also, print the message `'The square root of {square_target} is 1'`. Remember to format the message using an f-string.

# --hints--

You should remove the `pass` keyword.

```js
({
     test: () => 
     {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[0].has_pass()`))
    }
})
```

You should assign the value `1` to the `root` variable and print the message `'The square root of {square_target} is 1'` inside the `if` body.

```js

({
    test: () => 
    {        
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[0].is_equivalent("root = 1\\nprint(f'The square root of {square_target} is 1')")`));
    }
})

```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
    if square_target == 1:
        pass

--fcc-editable-region--
```
