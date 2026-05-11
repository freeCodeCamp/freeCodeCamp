---
id: 6976cc0b0c135686a4620b94
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

Next, you need to account for the number of people sharing the bill. Store this value in a variable, as you did in the previous step.

Create a variable named `num_of_friends` and assign it the value of `4`. This will be used later in the workshop to calculate the final split.

# --hints--

You should have a variable named `num_of_friends`.

```js
({ 
    test: () => assert(runPython(`
    _Node(_code).has_variable('num_of_friends')
    `))
})
```

You should assign the integer `4` to your `num_of_friends` variable.

```js
({
    test: () => assert(runPython(`
    _Node(_code).find_variable('num_of_friends').is_equivalent('num_of_friends = 4')
    `))
})
```

# --seed--

## --seed-contents--

```py
running_total = 0

--fcc-editable-region--

--fcc-editable-region--
```
