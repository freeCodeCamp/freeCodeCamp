---
id: 697a7f71ebfcd9e4cacd69c2
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

The bill is split, but division often results in long decimal numbers. Since money is typically represented with two decimal places, you should round the final result.

Python provides a built-in `round()` function for this. It takes two arguments: the number you want to round and the number of decimal places to keep.

Use the `round()` function to round `each_pays` to 2 decimal places and assign the result back to `each_pays`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```py
running_total = 0

num_of_friends = 4

benjis_bill = 37.89
mortys_bill = 57.34
marcys_bill = 39.39
my_bill = 64.21

running_total = benjis_bill + mortys_bill + marcys_bill + my_bill

tip = running_total * 0.25

running_total += tip

each_pays = running_total / num_of_friends
--fcc-editable-region--

--fcc-editable-region--
print("Each person pays:", each_pays)
```

# --solutions--

```py
running_total = 0

num_of_friends = 4

benjis_bill = 37.89
mortys_bill = 57.34
marcys_bill = 39.39
my_bill = 64.21

running_total = benjis_bill + mortys_bill + marcys_bill + my_bill

tip = running_total * 0.25

running_total += tip

each_pays = running_total / num_of_friends

each_pays = round(each_pays, 2)

print("Each person pays:", each_pays)
```
