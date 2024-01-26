---
id: 6551eebe6cbb2e6cadf9b468
title: Schritt 2
challengeType: 20
dashedName: step-2
---

# --description--

Variables can store values of different data types. You just assigned an integer value, but if you want to represent some text, you need to assign a string. Strings are sequences of characters enclosed by single or double quotes, but you cannot start a string with a single quote and end it with a double quote or vice versa:

```py
string_1 = "I am a string"
string_2 = 'I am also a string'
string_3 = 'This is not valid"
```

Delete your `number` variable and its value. Then, declare another variable called `text` and assign the string `Hello World` to this variable.

# --hints--

You should delete the `number` variable and its value.

```js
({ test: () => assert.isFalse(/number\s*=\s*5/.test(code)) })
```

You should declare a variable called `text`.

```js
({ test: () => assert(__userGlobals.has("text")) })
```

You should assign the string `Hello World` to your `text` variable.

```js
({ test: () => assert.equal(__userGlobals.get("text"), "Hello World") })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
number = 5
--fcc-editable-region--
```
