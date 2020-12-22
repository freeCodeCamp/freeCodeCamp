---
id: 594810f028c0303b75339acd
title: 丰富，不足和完善的数字分类
challengeType: 5
videoUrl: ''
---

# --description--

<p>它们根据<a href='http://rosettacode.org/wiki/Proper divisors' title='适当的除数'>适当的除数</a>定义了三个正整数分类。 </p><p>设$ P（n）$是n的适当除数的总和，其中适当的除数都是n本身以外的正整数。 </p><p>如果<code>P(n) &#x3C; n</code>那么n被归类为“缺陷” </p><p>如果<code>P(n) === n</code>那么n被归类为“完美” </p><p>如果<code>P(n) > n</code>则n被归类为“丰富” </p><p>例： </p><p> 6具有1,2和3的适当除数。 </p><p> 1 + 2 + 3 = 6，因此6被归类为完美数字。 </p><p>实现一个函数，计算三个类中每个类中1到20,000（包括）的整数。以下列格式将结果输出为数组<code>[deficient, perfect, abundant]</code> 。 </p>

# --hints--

`getDPA`是一个功能。

```js
assert(typeof getDPA === 'function');
```

`getDPA`应该返回一个数组。

```js
assert(Array.isArray(getDPA(100)));
```

`getDPA`返回值的长度应为3。

```js
assert(getDPA(100).length === 3);
```

`getDPA(20000)`应该等于[15043,4,4953]

```js
assert.deepEqual(getDPA(20000), solution);
```

# --solutions--

