---
id: cf1111c1c12feddfaeb2bdef
title: 生成某個範圍內的隨機整數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

你可以在從零到給定數字的範圍內生成隨機整數。 你也可以爲此範圍選擇一個不同的較小數字。

你將把最小的數字定義爲 `min`，把最大的數字定義爲 `max`。

這個公式將生成一個從 `min` 到 `max` 的隨機整數。 仔細看看並嘗試理解這行代碼到底在幹嘛：

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

創建一個函數 `randomRange`，參數爲 `myMin` 和 `myMax`，返回一個在 `myMin`（包括 myMin）和 `myMax`（包括 myMax）之間的隨機整數。

# --hints--

`randomRange` 返回的隨機數應該大於或等於 `myMin`。

```js
assert(calcMin === 5);
```

`randomRange` 返回的隨機數應該小於或等於 `myMax`。

```js
assert(calcMax === 15);
```

`randomRange` 應該返回一個隨機整數，而不是小數。

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` 應該使用 `myMax` 和 `myMin`，並且返回兩者之間的隨機數。

```js
assert(
  (function () {
    if (
      __helpers.removeJSComments(code).match(/myMax/g).length > 1 &&
      __helpers.removeJSComments(code).match(/myMin/g).length > 2 &&
      __helpers.removeJSComments(code).match(/Math.floor/g) &&
      __helpers.removeJSComments(code).match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
