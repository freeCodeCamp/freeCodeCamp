---
id: 5900f4831000cf542c50ff95
title: 问题278：半正定的线性组合
challengeType: 5
videoUrl: ''
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

给定整数1 &lt;a1 &lt;a2 &lt;... &lt;an的值，考虑线性组合q1a1 + q2a2 + ... + qnan = b，仅使用整数值qk≥0。

注意，对于给定的ak集合，可能不是b的所有值都是可能的。例如，如果a1 = 5且a2 = 7，则没有q1≥0且q2≥0使得b可以是1,2,3,4,6,8,9,11,13,16,18或23 。

事实上，23是a1 = 5和a2 = 7的b的最大不可能值。因此，我们称f（5,7）= 23.同样，可以证明f（6,10,15）= 29和f（14,22,77）= 195。

找到Σf（p *q，p* r，q \* r），其中p，q和r是素数，p &lt;q &lt;r &lt;5000。

# --hints--

`euler278()`应该返回1228215747273908500。

```js
assert.strictEqual(euler278(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function euler278() {

  return true;
}

euler278();
```

# --solutions--

```js
// solution required
```
