---
id: 587d78b2367417b2b2512b10
title: 使用 splice() 刪除元素
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

在之前的挑戰中，我們已經學習瞭如何用 `shift()` 和 `pop()` 從數組的開頭或末尾移除元素。 但如果我們想刪除數組中間的一個元素， 或者想一次刪除多個元素，該如何操作呢？ 這時候我們就需要使用 `splice()` 方法了， `splice()` 可以讓我們從數組中的任意位置**連續刪除任意數量的元素**。

`splice()` 最多可以接受 3 個參數，但現在我們先關注前兩個。 `splice()` 的前兩個參數是整數，表示數組中調用 `splice()` 的項的索引或位置。 別忘了，數組的索引是*從 0 開始的*，所以我們要用 `0` 來表示數組中的第一個元素。 `splice()` 的第一個參數代表從數組中的哪個索引開始移除元素，而第二個參數表示要從數組中的這個位置開始刪除多少個元素。 例如：

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

這裏我們移除 2 個元素，首先是第三個元素（索引爲 2）。 `array` 會有值 `['today', 'was', 'great']`。

`splice()` 不僅會修改調用該方法的數組，還會返回一個包含被移除元素的數組：

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` 值爲 `['really', 'happy']`。

# --instructions--

我們已經定義了數組 `arr`。 請使用 `splice()` 從 `arr` 裏移除元素，使剩餘的元素之和爲 `10`。

# --hints--

不應修改這一行 `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` 的剩餘元素之和應爲 `10`。

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

應對 `arr` 調用 `splice()` 方法。

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

splice 應只刪除 `arr` 裏面的元素，不能給 `arr` 添加元素。

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
