---
id: 5a51eabcad78bf416f316e2a
title: 问题22：命名分数
challengeType: 5
videoUrl: ''
---

# --description--

使用`names` ，包含超过五千个名字的数组，首先按字母顺序排序。然后计算每个名称的字母值，将该值乘以列表中的字母位置以获得名称分数。例如，当列表按字母顺序排序时，值为3 + 15 + 12 + 9 + 14 = 53的COLIN是列表中的第938个名称。因此，COLIN将获得938×53 = 49714的分数。文件中所有名称分数的总和是多少？

# --hints--

`namesScores(test1)`应该返回791。

```js
assert.strictEqual(namesScores(test1), 791);
```

`namesScores(test2)`应该返回1468。

```js
assert.strictEqual(namesScores(test2), 1468);
```

`namesScores(names)`应返回871198282。

```js
assert.strictEqual(namesScores(names), 871198282);
```

# --solutions--

