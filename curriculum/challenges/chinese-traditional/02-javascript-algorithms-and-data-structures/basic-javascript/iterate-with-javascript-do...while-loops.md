---
id: 5a2efd662fb457916e1fe604
title: do...while 循環
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

下一種循環叫作 `do...while` 循環。 它被稱爲 `do...while` 循環，是因爲不論什麼情況，它都會首先 `do`（運行）循環裏的第一部分代碼，然後 `while`（當）規定的條件被評估爲 `true`（真）的時候，它會繼續運行循環。

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

上面的示例行爲類似於其他類型的循環，由此產生的數組將看起來像 `[0, 1, 2, 3, 4]`。 然而，`do...while` 不同於其他循環的地方，是第一次循環檢查失敗時的行爲。 讓我們看看代碼示例。 這裏是一個常規的 `while` 循環，只要 `i < 5`，就會在循環中運行代碼：

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

這個例子中，定義了一個空數組 `ourArray` 以及一個值爲 5 的 `i` 。 當執行 `while` 循環時，因爲 `i` 不小於 5，所以循環條件爲 `false`，循環內的代碼將不會執行。 `ourArray` 最終沒有添加任何內容，因此示例中的所有代碼執行完時，ourArray 仍然是`[]`。 現在，看一下 `do...while` 循環。

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

在這裏，和使用 `while` 循環一樣，將 `i` 的值初始化爲 5。 執行下一行時，沒有執行循環檢查，直接執行花括號內的代碼。 數組會添加一個元素，並在進行條件檢查之前遞增 `i`。 然後，在條件檢查時因爲 `i` 等於 6 不符合條件 `i < 5`，所以退出循環。 最終 `ourArray` 的值是 `[5]`。 本質上，`do...while` 循環確保循環內的代碼至少運行一次。 讓我們通過 `do...while` 循環將值添加到數組中。

# --instructions--

將代碼中的 `while` 循環更改爲 `do...while` 循環，將數字 `10` 添加到 `myArray` 中，代碼執行完時，`i` 等於 `11`。

# --hints--

你應該使用 `do...while` 循環。

```js
assert(code.match(/do/g));
```

`myArray` 應該等於 `[10]`。

```js
assert.deepEqual(myArray, [10]);
```

`i` 應該等於 `11`。

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
