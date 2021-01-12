---
id: 5900f48a1000cf542c50ff9c
title: 问题285：毕达哥拉斯赔率
challengeType: 5
videoUrl: ''
dashedName: problem-285-pythagorean-odds
---

# --description--

Albert选择一个正整数k，然后在区间\[0,1]中以均匀分布随机选择两个实数a，b。

然后计算和（k·a + 1）2 +（k·b + 1）2的平方根并四舍五入为最接近的整数。 如果结果等于k，他得分为k分； 否则他什么也没得分。

例如，如果k ＝ 6，a ＝ 0.2，b ＝ 0.85，则（k·a + 1）2 ＋+（k·b + 1）2 ＝ 42.05。 42.05的平方根是6.484 ...，四舍五入到最接近的整数后，它变为6。 这等于k，因此他得到6分。

可以看出，如果他以k = 1，k = 2，...，k = 10进行10圈，则他的总得分的期望值四舍五入到小数点后五位。

如果他以k = 1，k = 2，k = 3，...，k = 105进行105转，他的总得分的期望值是多少，四舍五入到小数点后五位？

# --hints--

`euler285()`应该返回157055.80999。

```js
assert.strictEqual(euler285(), 157055.80999);
```

# --seed--

## --seed-contents--

```js
function euler285() {

  return true;
}

euler285();
```

# --solutions--

```js
// solution required
```
