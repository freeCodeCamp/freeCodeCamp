---
id: 5900f38a1000cf542c50fe9d
title: 问题30：数字n次方
challengeType: 5
videoUrl: ''
---

# --description--

令人惊讶的是，只有三个数字可以写为它们的数字的四次幂之和：

1634 = 1 <sup>4</sup> + 6 <sup>4</sup> + 3 <sup>4</sup> + 4 <sup>4</sup>

8208 = 8 <sup>4</sup> + 2 <sup>4</sup> + 0 <sup>4</sup> + 8 <sup>4</sup>

9474 = 9 <sup>4</sup> + 4 <sup>4</sup> + 7 <sup>4</sup> + 4 <sup>4</sup>

由于1 = 1 <sup>4</sup>不是总和，因此不包括在内。

这些数字的总和为1634 + 8208 + 9474 = 19316。

找出所有可以写为数字n次幂的数字之和。

# --hints--

`digitnPowers(2)`应该返回0。

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)`应该返回1301。

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)`应该返回19316。

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)`应该返回443839。

```js
assert(digitnPowers(5) == 443839);
```

# --solutions--

