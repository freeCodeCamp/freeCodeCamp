---
id: 65ef1a1fcb527bba0ca82ccf
title: Крок 6
challengeType: 20
dashedName: step-6
---

# --description--

Якщо `square_target` дорівнює `1`, то оголосіть змінну `root` та призначте до неї значення `1` . Також надрукуйте повідомлення `'The square root of {square_target} is 1'`. Не забудьте відформатувати повідомлення за допомогою f-рядка.

# --hints--

Видаліть ключове слово `pass`.

```js
({
     test: () => 
     {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[0].has_pass()`))
    }
})
```

Призначте значення `1` до змінної `root` та надрукуйте повідомлення `'The square root of {square_target} is 1'` в межах тіла `if`.

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
