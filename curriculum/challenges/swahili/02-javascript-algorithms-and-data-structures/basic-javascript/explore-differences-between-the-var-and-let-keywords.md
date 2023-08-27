---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

One of the biggest problems with declaring variables with the `var` keyword is that you can easily overwrite variable declarations:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

In the code above, the `camper` variable is originally declared as `James`, and is then overridden to be `David`. The console then displays the string `David`.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called `let` was introduced in ES6, a major update to JavaScript, to solve this potential issue with the `var` keyword. You'll learn about other ES6 features in later challenges.

If you replace `var` with `let` in the code above, it results in an error:

```js
let camper = "James";
let camper = "David";
```

The error can be seen in your browser console.

So unlike `var`, when you use `let`, a variable with the same name can only be declared once.

# --instructions--

Update the code so it only uses the `let` keyword.

# --hints--

`var` should not exist in the code.

```js
assert.notMatch(code, /var/g);
```

`catName` should be the string `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` should be the string `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
