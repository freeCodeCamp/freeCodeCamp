---
id: 587d7b87367417b2b2512b41
title: 使用 const 關鍵字聲明只讀變量
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

關鍵字 `let` 並不是聲明變量的唯一新方法。 在 ES6 中，你還可以使用 `const` 關鍵字聲明變量。

`const` 具有 `let` 的所有出色功能，另外還有一個額外的好處，即使用 `const` 聲明的變量是隻讀的。 它們是一個常量值，這意味着一旦一個變量被賦值爲 `const`，它就不能被重新賦值：

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

由於重新分配 `FAV_PET` 的值，控制檯將顯示錯誤。

你應該始終使用 `const` 關鍵字命名不想重新分配的變量。 這有助於避免給一個常量進行額外的再次賦值。

**注意：** 通常，開發者會用大寫字母作爲常量標識符，用小寫字母或者駝峯命名作爲變量（對象或數組）標識符。 你將在後面的挑戰中瞭解有關對象、數組以及不可變和可變值的更多信息。 同樣在後面的挑戰中，你將看到大寫、小寫或駝峯式變量標識符的示例。

# --instructions--

更改代碼，以便使用 `let` 或 `const` 聲明所有變量。 當你想要改變變量時使用 `let`，當你想要變量保持不變時使用 `const`。 此外，重命名使用 `const` 聲明的變量以符合慣例。 請勿更改分配給變量的字符串。

# --hints--

代碼中不應有 `var`。

```js
assert.notMatch(code, /var/g);
```

你應該將 `fCC` 更改爲全部大寫。

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` 應該是一個用 `const` 聲明的常量。

```js
assert.match(code, /const\s+FCC/);
```

分配給 `FCC` 的字符串不應更改。

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` 應該用 `let` 聲明。

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` 應該更改爲打印 `FCC` 和 `fact` 變量。

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
