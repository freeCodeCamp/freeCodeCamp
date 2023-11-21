---
id: 6551eebe6cbb2e6cadf9b468
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

In Python, you can use variables of different types. You've just used an integer value, but if you want to represent some text you need to use a string. Strings are sequences of characters enclosed by single or double quotes like this:

```py
string_1 = "I am a string"
string_2 = 'I am also a string'
```

You can use either single or double quotes to surround the text, the important thing is that you cannot use both together. For example, this is not a valid code:

```py
string_3 = 'This is not valid"
```

Now delete your `number` variable and its value. Then, create another variable called `text` and assign it the string `Hello World`.

# --hints--

You should declare a variable called `text`.

```js
({ test: () => assert(__userGlobals.has("text")) })
```

You should assign the string `Hello World` to your `text` variable.

```js
({ test: () => assert.equal(__userGlobals.get("text"), "Hello World") })
```

You should delete the `number` variable and its value.

```js
({ test: () => assert.isFalse(/number\s*=\s*5/.test(code)) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
number = 5
--fcc-editable-region--
```
