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

命名常量的常見做法是全部使用大寫字母，單詞之間用下劃線分隔。

**注意：** 對於不可變值，開發人員通常使用大寫變量標識符，對可變值（對象和數組）使用小寫或駝峯式標識符。 你將在後面的挑戰中瞭解有關對象、數組以及不可變和可變值的更多信息。 同樣在後面的挑戰中，你將看到大寫、小寫或駝峯式變量標識符的示例。

# --instructions--

更改代碼，以便使用 `let` 或 `const` 聲明所有變量。 當你希望變量改變時使用 `let`，而當你希望變量保持不變時使用 `const`。 此外，重命名用 `const` 聲明的變量以符合常見做法，這意味着常量應該全部大寫。

# --hints--

`var` 不應存在於你的代碼中。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

你應該將 `fCC` 更改爲全部大寫。

```js
(getUserInput) => {
  assert(getUserInput('index').match(/(FCC)/));
  assert(!getUserInput('index').match(/fCC/));
}
```

`FCC` 應該是一個用 `const` 聲明的常量變量。

```js
assert.equal(FCC, 'freeCodeCamp');
assert.match(code, /const\s+FCC/);
```

`fact` 應該用 `let` 聲明。

```js
(getUserInput) => assert(getUserInput('index').match(/(let fact)/g));
```

`console.log` 應該更改爲打印 `FCC` 和 `fact` 變量。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g));
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
