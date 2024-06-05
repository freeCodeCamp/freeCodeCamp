---
id: cf1111c1c12feddfaeb2bdef
title: 生成某个范围内的随机整数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

你可以在从零到给定数字的范围内生成随机整数。 你也可以为此范围选择一个不同的较小数字。

你将把最小的数字定义为 `min`，把最大的数字定义为 `max`。

这个公式将生成一个从 `min` 到 `max` 的随机整数。 仔细看看并尝试理解这行代码到底在干嘛：

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

创建一个函数 `randomRange`，参数为 `myMin` 和 `myMax`，返回一个在 `myMin`（包括 myMin）和 `myMax`（包括 myMax）之间的随机整数。

# --hints--

`randomRange` 返回的随机数应该大于或等于 `myMin`。

```js
assert(calcMin === 5);
```

`randomRange` 返回的随机数应该小于或等于 `myMax`。

```js
assert(calcMax === 15);
```

`randomRange` 应该返回一个随机整数，而不是小数。

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` 应该使用 `myMax` 和 `myMin`，并且返回两者之间的随机数。

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
