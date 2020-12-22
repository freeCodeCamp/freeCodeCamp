---
id: 594da033de4190850b893874
title: 平均值 - 均方根
challengeType: 5
videoUrl: ''
---

# --description--

<p>计算数字1到10（包括1和10）的<a href='https://en.wikipedia.org/wiki/Root mean square' title='wp：均方根'>均方根</a> 。 </p><p>均方根也以其首字母RMS（或rms）和二次均值来表示。 </p><p> RMS计算为数字平方的平均值，平方根： </p><p> <big>$$ x _ {\ mathrm {rms}} = \ sqrt {{{x_1} ^ 2 + {x_2} ^ 2 + \ cdots + {x_n} ^ 2} \ over n}。 $$</big> </p>

# --hints--

`rms`是一个功能。

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])`应等于`6.2048368229954285` 。

```js
assert.equal(rms(arr1), answer1);
```

# --solutions--

