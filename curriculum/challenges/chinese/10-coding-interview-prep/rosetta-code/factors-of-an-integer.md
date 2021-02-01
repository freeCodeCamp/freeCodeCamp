---
id: 597f1e7fbc206f0e9ba95dc4
title: 整数因子
challengeType: 5
videoUrl: ''
dashedName: factors-of-an-integer
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

# --seed--

## --after-user-code--

```js
const ans=[[1,3,5,9,15,45],[1,53],[1,2,4,8,16,32,64]];
```

## --seed-contents--

```js
function factors(num) {

}
```

# --solutions--

```js
function factors(num)
{
 let n_factors = [], i, sqr=Math.floor(Math.sqrt(num));

 for (i = 1; i <=sqr ; i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});
 return n_factors;
}
```
