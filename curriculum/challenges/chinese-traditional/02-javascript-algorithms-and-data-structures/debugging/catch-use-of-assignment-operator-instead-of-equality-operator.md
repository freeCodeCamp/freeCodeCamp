---
id: 587d7b85367417b2b2512b38
title: 捕獲使用賦值運算符而不是相等運算符
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

分支程序，即在滿足某些條件時執行不同操作的程序，依賴於 JavaScript 中的`if`，`else if`、`else`語句。 條件有時採取測試一個結果是否等於一個值的形式。

這種邏輯可以表述爲“如果 x 等於 y ，則......”，聽起來像是可以使用 `=`（即賦值運算符）。 然而，這會導致程序中流程出問題。

如前面的挑戰所述，JavaScript 中的賦值運算符 (`=`) 是用來爲變量名賦值的。 並且 `==` 和 `===` 運算符檢查相等性（三等號 `===` 是用來測試是否嚴格相等的，嚴格相等的意思是值和類型都必須相同）。

下面的代碼將 `x` 賦值爲 2，表達式會在執行後得到 `true`。 JavaScript 會把大部分的值都視爲 `true`，除了所謂的 “falsy”值，即：`false`、`0`、`""`（空字符串）、`NaN`、`undefined` 和 `null`。

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

在這個示例中，除非 `y` 值是假值，否則當 `y` 爲任何值時，`if` 語句中的代碼塊都會運行。 我們期望運行的 `else` 代碼塊實際上將不會運行。

# --instructions--

修復條件語句，以便程序運行正確的分支，並給 `result` 賦正確的值。

# --hints--

應該修復條件語句，使其判斷是否相等，而不是賦值。

```js
assert(result == 'Not equal!');
```

條件語句可以使用 `==` 或 `===` 來測試是否相等。

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
