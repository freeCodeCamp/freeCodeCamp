---
id: 597f1e7fbc206f0e9ba95dc4
title: 整数の因数
challengeType: 1
forumTopicId: 302265
dashedName: factors-of-an-integer
---

# --description--

正の整数の因数を配列として返す関数を作成します。

これらの因数は正の整数であり、因数分解される数値を除算して、正の整数の結果を得ることができます。

# --hints--

`factors` という関数です。

```js
assert(typeof factors === 'function');
```

`factors(45)` は `[1,3,5,9,15,45]` を返します。

```js
assert.deepEqual(factors(45), ans[0]);
```

`factors(53)` は `[1,53]` を返します。

```js
assert.deepEqual(factors(53), ans[1]);
```

`factors(64)` は `[1,2,4,8,16,32,64]` を返します。

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
