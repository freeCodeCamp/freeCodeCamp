---
id: cf1111c1c12feddfaeb2bdef
title: 生成某个范围内的随机整数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

You'll call your minimum number `min` and your maximum number `max`.

This formula gives a random whole number in the range from `min` to `max`. 仔细看看并尝试理解这行代码到底在干嘛：

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin` and less than or equal to `myMax`.

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
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
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
