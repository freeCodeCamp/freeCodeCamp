---
id: 587d7b87367417b2b2512b3f
title: 探索 var 和 let 关键字之间的差异
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

使用 `var` 关键字声明变量的最大问题之一是你可以轻松覆盖变量声明：

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

在上面的代码中，`camper` 变量最初声明为 `James`，然后被覆盖为 `David`。 然后控制台显示字符串 `David`。

在小型应用程序中，你可能不会遇到此类问题。 但是随着你的代码库变大，你可能会意外地覆盖一个你不打算覆盖的变量。 由于此行为不会引发错误，因此搜索和修复错误变得更加困难。

ES6 中引入了一个名为 `let` 的关键字，这是对 JavaScript 的一次重大更新，以解决与 `var` 关键字有关的潜在问题。 你将在后面的挑战中了解其他 ES6 特性。

如果将上面代码中的 `var` 替换为 `let` ，则会导致错误：

```js
let camper = "James";
let camper = "David";
```

该错误可以在你的浏览器控制台中看到。

所以不像 `var`，当你使用 `let` 时，同名的变量只能声明一次。

# --instructions--

更新代码，使其仅使用 `let` 关键字。

# --hints--

`var` 不应存在于代码中。

```js
assert.notMatch(code, /var/g);
```

`catName` 应该是字符串 `Oliver`。

```js
assert.equal(catName, 'Oliver');
```

`catSound` 应该是字符串 `Meow!`

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
