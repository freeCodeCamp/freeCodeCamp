---
id: 5900f3ee1000cf542c50ff00
title: 问题130：具有主要repunit属性的复合材料
challengeType: 5
videoUrl: ''
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

完全由1组成的数字称为repunit。我们将R（k）定义为长度k的重新定位;例如，R（6）= 111111.假设n是正整数且GCD（n，10）= 1，则可以证明总是存在一个值k，其中R（k）可被n整除让A（n）成为k的最小值;例如，A（7）= 6和A（41）= 5.对于所有素数，p> 5，p-1可以被A（p）整除。例如，当p = 41时，A（41）= 5，并且40可被5整除。但是，也有罕见的复合值，这也是正确的;前五个例子是91,259,451,481和703.找到n的前25个复合值之和，其中GCD（n，10）= 1，n-1可被A（n）整除。

# --hints--

`euler130()`应返回149253。

```js
assert.strictEqual(euler130(), 149253);
```

# --seed--

## --seed-contents--

```js
function euler130() {

  return true;
}

euler130();
```

# --solutions--

```js
// solution required
```
