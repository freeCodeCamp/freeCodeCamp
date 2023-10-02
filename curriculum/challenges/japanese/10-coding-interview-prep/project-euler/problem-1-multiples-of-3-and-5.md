---
id: 5900f36e1000cf542c50fe80
title: '問題 1: 3 と 5 の倍数'
challengeType: 1
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

3 または 5 の倍数である 10 未満の自然数をすべて並べると、3, 5, 6, 9 になります。 これらの倍数の和は 23 です。

与えられたパラメータ値 `number` 未満である、3 または 5 の倍数の総和を求めなさい。

# --hints--

`multiplesOf3and5(10)` は数値を返す必要があります。

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` は 543 を返す必要があります。

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` は 233168 を返す必要があります。

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` は 16687353 を返す必要があります。

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` は 89301183 を返す必要があります。

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```
