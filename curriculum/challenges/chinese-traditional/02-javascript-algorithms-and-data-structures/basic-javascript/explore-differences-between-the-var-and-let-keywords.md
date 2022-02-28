---
id: 587d7b87367417b2b2512b3f
title: 探索 var 和 let 關鍵字之間的差異
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

使用 `var` 關鍵字聲明變量的最大問題之一是你可以輕鬆覆蓋變量聲明：

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

在上面的代碼中，`camper` 變量最初聲明爲 `James`，然後被覆蓋爲 `David`。 然後控制檯顯示字符串 `David`。

在小型應用程序中，你可能不會遇到此類問題。 但是隨着你的代碼庫變大，你可能會意外地覆蓋一個你不打算覆蓋的變量。 由於此行爲不會引發錯誤，因此搜索和修復錯誤變得更加困難。

ES6 中引入了一個名爲 `let` 的關鍵字，這是對 JavaScript 的一次重大更新，以解決與 `var` 關鍵字有關的潛在問題。 你將在後面的挑戰中瞭解其他 ES6 特性。

如果將上面代碼中的 `var` 替換爲 `let` ，則會導致錯誤：

```js
let camper = "James";
let camper = "David";
```

該錯誤可以在你的瀏覽器控制檯中看到。

所以不像 `var`，當你使用 `let` 時，同名的變量只能聲明一次。

# --instructions--

更新代碼，使其僅使用 `let` 關鍵字。

# --hints--

`var` 不應存在於代碼中。

```js
assert.notMatch(code, /var/g);
```

`catName` 應該是字符串 `Oliver`。

```js
assert.equal(catName, 'Oliver');
```

`catSound` 應該是字符串 `Meow!`

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
