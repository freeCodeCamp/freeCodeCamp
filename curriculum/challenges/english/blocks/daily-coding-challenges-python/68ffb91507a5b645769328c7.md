---
id: 68ffb91507a5b645769328c7
title: "Challenge 104: Recipe Scaler"
challengeType: 29
dashedName: challenge-104
---

# --description--

Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

- Each item in the given array will be a string in the format: `"quantity unit ingredient"`. For example `"2 C Flour"`.
- Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
- Return the scaled items in the same order they are given.

# --hints--

`scale_recipe(["2 C Flour", "1.5 T Sugar"], 2)` should return `["4 C Flour", "3 T Sugar"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(scale_recipe(["2 C Flour", "1.5 T Sugar"], 2), ["4 C Flour", "3 T Sugar"])`)
}})
```

`scale_recipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5)` should return `["6 T Flour", "1.5 C Milk", "3 T Oil"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(scale_recipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5), ["6 T Flour", "1.5 C Milk", "3 T Oil"])`)
}})
```

`scale_recipe(["3 C Milk", "2 C Oats"], 0.5)` should return `["1.5 C Milk", "1 C Oats"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(scale_recipe(["3 C Milk", "2 C Oats"], 0.5), ["1.5 C Milk", "1 C Oats"])`)
}})
```

`scale_recipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5)` should return `["5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(scale_recipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5), ["5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"])`)
}})
```

# --seed--

## --seed-contents--

```py
def scale_recipe(ingredients, scale):

    return ingredients
```

# --solutions--

```py
def scale_recipe(ingredients, scale):
    scaled = []

    for item in ingredients:
        parts = item.split(" ")
        quantity = float(parts[0]) * scale
        unit = parts[1]
        ingredient_name = " ".join(parts[2:])

        if quantity.is_integer():
            quantity_str = str(int(quantity))
        else:
            quantity_str = str(quantity)
        
        scaled.append(f"{quantity_str} {unit} {ingredient_name}")

    return scaled
```
