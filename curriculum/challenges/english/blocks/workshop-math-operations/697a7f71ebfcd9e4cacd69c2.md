---
id: 697a7f71ebfcd9e4cacd69c2
title: Step 8
challengeType: 20
dashedName: step-8
---

# --description--

The bill is split, but division often results in long decimal numbers. Since money is typically represented with two decimal places, you should round the final result.

Python provides a built-in `round()` function for this. It takes two arguments: the number you want to round and the number of decimal places to keep. Here's an example:

```py
num = 4.815162342
round(num, 3) # 4.815
```

Use the `round()` function to round `final_bill` to two decimal places and assign the result to a new variable named `each_pays`.

Finally, use `print()` to display the string `Each person pays:` followed by a space and your `each_pays` variable.

# --hints--

You should define a variable named `each_pays`.

```js
({
    test: () => assert(runPython(`
    _Node(_code).has_variable('each_pays')
    `))
})
```

You should use the `round()` function to round `final_bill` to two decimal places and assign the result to your `each_pays` variable.

```js
({
    test: () => assert(runPython(`
    _Node(_code).find_variable('each_pays').is_equivalent('each_pays = round(final_bill, 2)')
    `))
})
You should use `print()` to display the string `Each person pays:` followed by a space and your `each_pays` variable.

```js
({
    test: () => assert(runPython(`
    _Node(_code).has_call("print('Each person pays:', each_pays)") or _Node(_code).has_call("print(f'Each person pays: {each_pays}')")`))
})
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
print('Total bill so far:', running_total)

tip = running_total * 0.25
print('Tip amount:', tip)

running_total += tip
print('Total with tip:', running_total)

final_bill = running_total / num_of_friends
print('Bill per person:', final_bill)

--fcc-editable-region--

--fcc-editable-region--
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
print('Total bill so far:', running_total)

tip = running_total * 0.25
print('Tip amount:', tip)

running_total += tip
print('Total with tip:', running_total)

final_bill = running_total / num_of_friends
print('Bill per person:', final_bill)

each_pays = round(final_bill, 2)
print('Each person pays:', each_pays)
```
