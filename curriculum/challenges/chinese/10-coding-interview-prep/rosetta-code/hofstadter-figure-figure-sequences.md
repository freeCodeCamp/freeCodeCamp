---
id: 59622f89e4e137560018a40e
title: Hofstadter图 - 图序列
challengeType: 5
videoUrl: ''
---

# --description--

<p>这两个正整数序列定义为： </p><p> <big>$$ R（1）= 1 \; \ S（1）= 2 \\ R（n）= R（n-1）+ S（n-1），\ quad n> 1. $$</big> </p><p>序列<big>$ S（n）$</big>进一步定义为<big>$ R（n）$中</big>不存在的正整数序列。 </p><p>序列<big>$ R $</big>开始： </p><p> 1,3,7,12,18 ...... </p><p>序列<big>$ S $</big>开始： </p><p> 2,4,5,6,8 ...... </p>任务：创建两个名为ffr和ffs的函数，当给定n分别返回R（n）或S（n）时（注意R（1）= 1且S（1）= 2以避免逐个错误） 。不应假设n的最大值。 Sloane的<a href='http://oeis.org/A005228' title='链接：http：//oeis.org/A005228'>A005228</a>和<a href='http://oeis.org/A030124' title='链接：http：//oeis.org/A030124'>A030124</a> 。 <a href='http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html' title='链接：http：//mathworld.wolfram.com/HofstadterFigure-FigureSequence.html'>Wolfram MathWorld</a>维基百科： <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' title='wp：Hofstadter_sequence＃Hofstadter_Figure-Figure_sequences'>Hofstadter图 - 图序列</a> 。 

# --hints--

`ffr`是一个功能。

```js
assert(typeof ffr === 'function');
```

`ffs`是一个函数。

```js
assert(typeof ffs === 'function');
```

`ffr`应该返回整数。

```js
assert(Number.isInteger(ffr(1)));
```

`ffs`应该返回整数。

```js
assert(Number.isInteger(ffs(1)));
```

`ffr()`应该返回`69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr()`应返回`1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr()`应返回`5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr()`应返回`526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs()`应该返回`14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs()`应该返回`59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs()`应该返回`112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs()`应该返回`1041`

```js
assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);
```

# --solutions--

