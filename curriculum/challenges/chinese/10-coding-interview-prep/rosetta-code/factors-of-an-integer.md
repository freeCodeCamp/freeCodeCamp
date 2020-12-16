---
id: 597f1e7fbc206f0e9ba95dc4
title: 整数因子
challengeType: 5
videoUrl: ''
---

# --description--

<p>编写一个返回正整数因子的函数。 </p><p>这些因子是正整数，通过该正整数可以将被分解的数量除以产生正整数结果。 </p> /// 

# --hints--

`factors`是一种功能。

```js
assert(typeof factors === 'function');
```

`factors(45)`应该返回`[1,3,5,9,15,45]` 。

```js
assert.deepEqual(factors(45), ans[0]);
```

`factors(53)`应该返回`[1,53]` 。

```js
assert.deepEqual(factors(53), ans[1]);
```

`factors(64)`应该返回`[1,2,4,8,16,32,64]` 。

```js
assert.deepEqual(factors(64), ans[2]);
```

# --solutions--

