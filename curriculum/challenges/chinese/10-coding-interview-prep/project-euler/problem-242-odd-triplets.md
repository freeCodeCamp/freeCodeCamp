---
id: 5900f45f1000cf542c50ff71
title: 问题242：奇数三胞胎
challengeType: 5
videoUrl: ''
dashedName: problem-242-odd-triplets
---

# --description--

给定集合{1,2，...，n}，我们将f（n，k）定义为具有奇数元素之和的k元素子集的数量。例如，f（5,3）= 4，因为集合{1,2,3,4,5}有四个3元素子集具有奇数元素，即：{1,2,4}，{ 1,3,5}，{2,3,4}和{2,4,5}。

当所有三个值n，k和f（n，k）都是奇数时，我们说它们产生奇数三元组\[n，k，f（n，k）]。

正好有五个奇数三元组，n≤10，即：\[1,1，f（1,1）= 1]，\[5,1，f（5,1）= 3]，\[5,5，f （5,5）= 1]，\[9,1，f（9,1）= 5]和\[9,9，f（9,9）= 1]。

n≤1012，有多少奇数三胞胎？

# --hints--

`euler242()`应该返回997104142249036700。

```js
assert.strictEqual(euler242(), 997104142249036700);
```

# --seed--

## --seed-contents--

```js
function euler242() {

  return true;
}

euler242();
```

# --solutions--

```js
// solution required
```
