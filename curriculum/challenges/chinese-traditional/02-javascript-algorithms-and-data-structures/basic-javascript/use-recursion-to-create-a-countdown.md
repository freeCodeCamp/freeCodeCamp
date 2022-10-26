---
id: 5cd9a70215d3c4e65518328f
title: 使用遞歸創建一個倒計時
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

在上一個<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">挑戰</a>中，你學習了怎樣用遞歸來代替 `for` 循環。 現在來學習一個更復雜的函數，函數返回一個從 `1` 到傳遞給函數的指定數字的連續數字數組。

正如上一個挑戰提到的，會有一個 <dfn>base case</dfn>。 base case 告訴遞歸函數什麼時候不再需要調用其自身。 這是簡單 情況，返回得到的值。 還有 <dfn>recursive call</dfn>，繼續用不同的參數調用自身。 如果函數無誤，一直執行直到 base case 爲止。

比如，如果想寫一個遞歸函數，返回一個數字 `1` 到 `n` 的連續數組。 這個函數需要接收一個參數 `n` 代表最終數字。 然後會持續的調用自身，傳入一個比 `n` 更小的值一直到傳入的值是 `1` 爲止。 函數如下：

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

值 `[1, 2, 3, 4, 5]` 將顯示在控制檯中。

起初，這似乎是違反直覺的，因爲 `n` 的值*遞減*，但是最終數組中的值卻*遞增*。 之所以發生這種情況，是因爲在遞歸調用返回之後，才調用 push。 在將 `n` pushed 進數組時，`countup(n - 1)` 已經調用賦值成功並返回了 `[1, 2, ..., n - 1]`。

# --instructions--

已經定義了一個函數 `countdown`，函數有一個參數（`n`）。 函數應該基於參數 `n` 遞歸調用返回 `n` 到 `1` 的連續數字的數組。 如果函數以小於 1 的參數調用，函數應該返回空數組。 比如，用 `n = 5` 調用函數應該返回數組 `[5, 4, 3, 2, 1]`。 函數必需使用遞歸函數調用自身，不能使用任何形式的循環。

# --hints--

`countdown(-1)` 應該返回一個空數組。

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` 應該返回 `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`。

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` 應該返回 `[5, 4, 3, 2, 1]`。

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

代碼不能包含任意形式的循環（`for`、`while` 或者高階函數如：`forEach`、`map`、`filter` 以及 `reduce`）。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

應該用遞歸解決這個問題。

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

不應使用全局變量來緩存數組。

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
