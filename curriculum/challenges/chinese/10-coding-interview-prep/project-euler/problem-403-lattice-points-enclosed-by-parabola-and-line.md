---
id: 5900f5001000cf542c510013
title: 问题403：由抛物线和直线包围的格点
challengeType: 5
videoUrl: ''
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

对于整数a和b，我们将D（a，b）定义为由抛物线y = x2包围的域，并且线y = a·x + b：D（a，b）= {（x，y）| x2≤y≤a·x + b}。

L（a，b）定义为D（a，b）中包含的晶格点数。例如，L（1,2）= 8并且L（2，-1）= 1。

我们还将S（N）定义为所有对（a，b）的L（a，b）之和，使得D（a，b）的面积是有理数并且| a |，| b | ≤N。我们可以验证S（5）= 344和S（100）= 26709528。

找到S（1012）。给你的答案mod 108。

# --hints--

`euler403()`应该返回18224771。

```js
assert.strictEqual(euler403(), 18224771);
```

# --seed--

## --seed-contents--

```js
function euler403() {

  return true;
}

euler403();
```

# --solutions--

```js
// solution required
```
