---
id: 5900f39c1000cf542c50feaf
title: 问题48：自我权力
challengeType: 5
videoUrl: ''
---

# --description--

系列，1 <sup>1</sup> + 2 <sup>2</sup> + 3 <sup>3</sup> + ... + 10 <sup>10</sup> = 10405071317.查找该系列的最后十位数字，1 <sup>1</sup> + 2 <sup>2</sup> + 3 <sup>3</sup> + ... + 1000 <sup>1000</sup> 。

# --hints--

`selfPowers(10, 3)`应该返回317。

```js
assert.strictEqual(selfPowers(10, 3), 317);
```

`selfPowers(150, 6)`应返回29045。

```js
assert.strictEqual(selfPowers(150, 6), 29045);
```

`selfPowers(673, 7)`应该返回2473989。

```js
assert.strictEqual(selfPowers(673, 7), 2473989);
```

`selfPowers(1000, 10)`应该返回9110846700。

```js
assert.strictEqual(selfPowers(1000, 10), 9110846700);
```

# --solutions--

