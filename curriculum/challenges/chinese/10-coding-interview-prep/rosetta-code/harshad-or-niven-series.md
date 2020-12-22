---
id: 595668ca4cfe1af2fb9818d4
title: Harshad或Niven系列
challengeType: 5
videoUrl: ''
---

# --description--

<p> <a href='http://mathworld.wolfram.com/HarshadNumber.html' title='链接：http：//mathworld.wolfram.com/HarshadNumber.html'>Harshad</a>或Niven数是正整数≥1，可以被它们的数字之和整除。 </p><p>例如，42是<a href='http://rosettacode.org/wiki/oeis:A005349' title='OEIS：A005349'>Harshad数，</a>因为42可以被（4 + 2）整除而没有余数。 </p>假设系列被定义为按递增顺序排列的数字。任务： <p>实现一个函数来生成Harshad序列的连续成员。 </p><p>使用它列出序列的前20个成员并列出第一个大于1000的Harshad数。 </p>

# --hints--

`isHarshadOrNiven`是一个函数。

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven()`应该返回`{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}`

```js
assert.deepEqual(isHarshadOrNiven(), res);
```

# --solutions--

