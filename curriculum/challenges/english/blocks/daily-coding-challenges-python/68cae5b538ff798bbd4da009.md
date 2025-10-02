---
id: 68cae5b538ff798bbd4da009
title: "Challenge 71: Tip Calculator"
challengeType: 29
dashedName: challenge-71
---

# --description--

Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

- Prices will be given in the format: `"$N.NN"`.
- Custom tip percents will be given in this format: `"25%"`.
- Return amounts in the same `"$N.NN"` format, rounded to two decimal places.

For example, given a `"$10.00"` meal price, and a `"25%"` custom tip value, return `["$1.50", "$2.00", "$2.50"]`.

# --hints--

`calculate_tips("$10.00", "25%")` should return `["$1.50", "$2.00", "$2.50"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_tips("$10.00", "25%"), ["$1.50", "$2.00", "$2.50"])`)
}})
```

`calculate_tips("$89.67", "26%")` should return `["$13.45", "$17.93", "$23.31"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_tips("$89.67", "26%"), ["$13.45", "$17.93", "$23.31"])`)
}})
```

`calculate_tips("$19.85", "9%")` should return `["$2.98", "$3.97", "$1.79"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_tips("$19.85", "9%"), ["$2.98", "$3.97", "$1.79"])`)
}})
```

# --seed--

## --seed-contents--

```py
def calculate_tips(meal_price, custom_tip):

    return meal_price
```

# --solutions--

```py
def calculate_tips(meal_price, custom_tip):
    meal = float(meal_price[1:])
    custom_percent = float(custom_tip[:-1])

    tips_percent = [15, 20, custom_percent]
    tips = [f"${meal * p / 100:.2f}" for p in tips_percent]

    return tips
```
