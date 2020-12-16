---
id: 5900f3861000cf542c50fe99
title: 问题26：互惠周期
challengeType: 5
videoUrl: ''
---

# --description--

单位分数在分子中包含1。给出分母2到10的单位分数的十进制表示：

<sup><sub>二分之一</sub></sup>

 = 0.5

<sup><sub>三分之一</sub></sup>

 = 0（3）

<sup><sub>四分之一</sub></sup>

 = 0.25

<sup>的<sub>1/5</sub></sup>

 = 0.2

<sup><sub>六分之一</sub></sup>

 = 0.1（6）

<sup><sub>七分之一</sub></sup>

 = 0（142857）

<sup><sub>八分之一</sub></sup>

 = 0.125

<sup><sub>九分之一</sub></sup>

 = 0（1）

<sup><sub>一十分之一</sub></sup>

 = 0.1

其中0.1（6）表示0.166666 ...，并具有1位循环周期。可以看出， 

<sup>1</sup>

 / 

<sub>7</sub>

具有6位循环周期。找到`d` &lt; `n`的值，其中

<sup>1</sup>

 / 

<sub>d</sub>

包含其小数部分中最长的循环周期。

# --hints--

`reciprocalCycles(700)`应该返回659。

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)`应该返回743。

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)`应该返回887。

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)`应该返回983。

```js
assert(reciprocalCycles(1000) == 983);
```

# --solutions--

