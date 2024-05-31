---
id: 65ef1aacca094bbcc2e2a3c8
title: Крок 9
challengeType: 20
dashedName: step-9
---

# --description--

Функція `max()` у Python повертає найбільше вхідне значення.

```python
max(1, 2, 3) # Output: 3
```

Змінні `low` та `high` будуть використовуватися для визначення початкового інтервалу, де знаходиться квадратний корінь.

В межах умови `else` ініціалізуйте змінну `low` як `0`, а змінну `high` — як максимум `1` або `square_target`, оскільки квадратний корінь числа завжди менший або дорівнює самому числу.

# --hints--

Видаліть ключове слово `pass`.

```js
({
    test: () => 
    {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].has_pass()`))
    }
})
```

Оголосіть змінну `low` та призначте до неї `0`.

```js
({
    test: () => 
    {
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].find_variable("low").is_equivalent("low = 0")`));    }
})

```

Оголосіть змінну `high` і використайте функцію `max()`, щоб призначити до неї максимальне значення між `1` та `square_target`.

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
