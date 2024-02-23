---
id: 5cfa3679138e7d9595b9d9d4
title: 使用遞歸代替循環
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

遞歸是函數調用自身的操作。 爲了便於理解，有如下任務：計算數組內元素前 `n` 的元素乘積。 使用 `for` 循環， 可以這樣做：

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

下面是遞歸寫法，注意代碼裏的 `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]`。 這意味着可以重寫 `multiply` 以調用自身而無需依賴循環。

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

遞歸版本的 `multiply` 詳述如下。 在 <dfn>base case</dfn> 裏，也就是 `n <= 0` 時，返回 1。 在 `n` 比 0 大的情況裏，函數會調用自身，參數 n 的值爲 `n - 1`。 函數以相同的方式持續調用 `multiply`，直到 `n <= 0` 爲止。 所以，所有函數都可以返回，原始的 `multiply` 返回結果。

**注意：** 遞歸函數在沒有函數調用時（在這個例子是，是當 `n <= 0` 時）必需有一個跳出結構，否則永遠不會執行完畢。

# --instructions--

寫一個遞歸函數，`sum(arr, n)`，返回遞歸調用數組 `arr` 從前 `n` 個元素和。

# --hints--

`sum([1], 0)` 應該返回 0 。

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` 應該返回 2 。

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` 應該等於 9。

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
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
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
