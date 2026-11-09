---
id: 697a7f71ebfcd9e4cacd69c2
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

The f-strings you've been using only change how numbers are displayed. The values themselves still have all their decimal places. To get a number that is actually rounded and can be used in further calculations, you can use the `round()` function.

In an earlier lesson, you learned that the `round()` function takes two arguments: the number you want to round and the number of decimal places to keep. Here's an example:

```py
num = 4.815162342
round(num, 3) # 4.815
```

Use the `round()` function to round `final_bill` to two decimal places and assign the result to a new variable named `each_pays`.

Then, use `print()` to display the string `Each person pays:` followed by a space and your `each_pays` variable. Don't use an f-string this time.

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
```

You should use `print()` to display the string `Each person pays:` followed by a space and your `each_pays` variable.

```js
({
    test: () => runPython(`
        import io, contextlib, re
        buffer = io.StringIO()
        with contextlib.redirect_stdout(buffer):
            exec(_code)
        assert re.search(r"^Each person pays: 62\\.1$", buffer.getvalue(), re.M)
    `)
})
```

# --seed--

## --seed-contents--

```py
running_total = 0

num_of_friends = 4

appetizers = 37.89
main_courses = 57.34
desserts = 39.39
drinks = 64.11

running_total += appetizers + main_courses + desserts + drinks
print(f'Total bill so far: {running_total:.2f}')

tip = running_total * 0.25
print(f'Tip amount: {tip:.2f}')

running_total += tip
print(f'Total with tip: {running_total:.2f}')

final_bill = running_total / num_of_friends
print(f'Bill per person: {final_bill:.2f}')

--fcc-editable-region--

--fcc-editable-region--
```
