---
id: 661a6d0eded4cf42e594bd3c
title: Start with Your First Loop
challengeType: 1
dashedName: start-with-first-loop
---

# --description--

You are tasked with creating a JavaScript function called printNameMultipleTimes that takes two inputs: a number and a name. The function should print the given name the specified number of times.

# --instructions--

Write a JavaScript function called `printNameMultipleTimes` that takes two `inputs:` a `number` and a `name`. Your function should print the given `name` the specified `number` of `times`.

For `example`, if the number is `3` and the name is `"john"`, your function should print `"john"` three times.

# --hints--

output should be `["Bedanti", "Bedanti"]`.

```js
assert(printNameMultipleTimes(2, "Bedanti").toString() === ["Bedanti", "Bedanti"].toString());

```

Use a loop to print the name the specified number of times.

```js

assert(printNameMultipleTimes(3, "john").toString() === ["john", "john", "john"].toString(), "Name not printed the correct number of times.");

```


# --seed--
## --seed-contents--

```js

function printNameMultipleTimes(number, name) {
   // Only change code below this line

    return
    // Only change code above this line
}

printNameMultipleTimes(2, "Bedanti");

```

# --solutions--

```js

function printNameMultipleTimes(number, name) {
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push(name);
    }
    return result;
}

```


