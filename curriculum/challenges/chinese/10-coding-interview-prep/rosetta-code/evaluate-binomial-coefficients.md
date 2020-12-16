---
id: 598de241872ef8353c58a7a2
title: 评估二项式系数
challengeType: 5
videoUrl: ''
---

# --description--

<p>写一个函数来计算给定n和k值的二项式系数。 </p><p>推荐这个公式： </p> $ \\ binom {n} {k} = \\ frac {n！} {（nk）！k！} = \\ frac {n（n-1）（n-2）\\ ldots（n-k + 1）} { k（k-1）（k-2）\\ ldots 1} $ 

# --hints--

`binom`是一个功能。

```js
assert(typeof binom === 'function');
```

`binom(5,3)`应该返回10。

```js
assert.equal(binom(5, 3), 10);
```

`binom(7,2)`应该返回21。

```js
assert.equal(binom(7, 2), 21);
```

`binom(10,4)`应该返回210。

```js
assert.equal(binom(10, 4), 210);
```

`binom(6,1)`应该返回6。

```js
assert.equal(binom(6, 1), 6);
```

`binom(12,8)`应该返回495。

```js
assert.equal(binom(12, 8), 495);
```

# --solutions--

