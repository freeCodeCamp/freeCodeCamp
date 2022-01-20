---
id: cf1111c1c12feddfaeb2bdef
title: ある範囲内の整数の乱数を生成する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

前回は、ゼロから指定した数値までの整数の乱数を生成しましたが、2 つの特定の数値の範囲内で整数の乱数を生成することができます。

それには最小値 `min` と最大値 `max` を定義します。

ここでは次のような式を使用します。 このコードの動作を理解して確かめてみてください。

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

`myMin` から `myMax` までを範囲とする `randomRange` という関数を作成し、`myMin` 以上 `myMax` 以下の整数の乱数を返してください。

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
  // Only change code below this line
  return 0;
  // Only change code above this line
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
