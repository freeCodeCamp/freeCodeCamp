---
id: cf1111c1c12feddfaeb2bdef
title: ある範囲内の整数の乱数を生成する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

You'll call your minimum number `min` and your maximum number `max`.

This formula gives a random whole number in the range from `min` to `max`. このコードの動作を理解して確かめてみてください。

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Create a function called `randomRange` that takes a range `myMin` and `myMax` and returns a random whole number that's greater than or equal to `myMin` and less than or equal to `myMax`.

# --hints--

`randomRange` によって生成される最小の乱数は、最小値 `myMin` と等しくなる必要があります。

```js
assert(calcMin === 5);
```

`randomRange` によって生成される最大の乱数は、最大値 `myMax` と等しくなる必要があります。

```js
assert(calcMax === 15);
```

`randomRange` によって生成される乱数は小数ではなく、整数である必要があります。

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` では `myMax` と `myMin` の両方を使用して、範囲内の乱数を返す必要があります。

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
