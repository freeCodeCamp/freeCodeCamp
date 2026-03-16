---
id: 68f1196f0fedc6f6ecc9aba6
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

In Python, a return type hint indicates the expected return type of a function or method. You do this by adding `-> return_type` after the parameter list in the method definition.

Here is an example of a method with both parameter and return type hints whose return type is `bool`:

```py
def example_method(self, value: int) -> bool:
  pass
```

Other return type hints you might use include `str`, `None`, `float` and more.

In the existing `__init__` method, add a return type hint of `None` since constructors do not return a value.

# --hints--

Your `__init__` method should have a return type hint of `None`.

```js
({
  test: () => runPython(`assert _Node(_code).find_class("Product").find_function("__init__").has_returns("None")`)
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price
--fcc-editable-region--
    def __str__(self):
        return f'{self.name} - ${self.price}'
```
