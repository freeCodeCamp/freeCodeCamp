---
id: 5900f4f11000cf542c510003
title: 问题387：Harshad数字
challengeType: 5
videoUrl: ''
dashedName: problem-387-harshad-numbers
---

# --description--

Harshad或Niven数字是可以被其数字之和整除的数字。 201是一个Harshad数，因为它可以被3整数（它的数字之和）。当我们截断201的最后一个数字时，我们得到20，这是一个Harshad数。当我们截断20的最后一位数时，我们得到2，这也是一个Harshad数。让我们调用一个Harshad数字，在递归截断最后一个数字的同时，总是会产生一个Harshad数字，一个正可截断的Harshad数字。

另外：201/3 = 67这是素数。让我们称一个Harshad数，当它除以它的数字之和时，得到一个强Harshad数的素数。

现在取2011年的数字。当我们截断它的最后一位数时，我们得到201，一个强大的Harshad数也是可以截断的。让我们称这样的素数强大，正确的可截断的哈尔沙德素数。

你得到的是，强度小，可截断的Harshad素数小于10000的总和是90619。

找到小于1014的强可，可截断的Harshad素数的总和。

# --hints--

`euler387()`应该返回696067597313468。

```js
assert.strictEqual(euler387(), 696067597313468);
```

# --seed--

## --seed-contents--

```js
function euler387() {

  return true;
}

euler387();
```

# --solutions--

```js
// solution required
```
