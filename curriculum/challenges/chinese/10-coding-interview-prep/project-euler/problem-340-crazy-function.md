---
id: 5900f4c21000cf542c50ffd4
title: 问题340：疯狂的功能
challengeType: 5
videoUrl: ''
dashedName: problem-340-crazy-function
---

# --description--

对于固定整数a，b，c，定义疯狂函数F（n）如下：F（n）= n - c表示所有n> b F（n）= F（a + F（a + F（a +）所有n≤b的F（a + n））））。

另外，定义S（a，b，c）=。

例如，如果a = 50，b = 2000且c = 40，则F（0）= 3240并且F（2000）= 2040.此外，S（50,2000,40）= 5204240。

找到S（217,721,127）的最后9位数。

# --hints--

`euler340()`应返回291504964。

```js
assert.strictEqual(euler340(), 291504964);
```

# --seed--

## --seed-contents--

```js
function euler340() {

  return true;
}

euler340();
```

# --solutions--

```js
// solution required
```
