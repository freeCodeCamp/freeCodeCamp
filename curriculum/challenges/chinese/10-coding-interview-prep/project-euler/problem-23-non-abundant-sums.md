---
id: 5900f3831000cf542c50fe96
title: 问题23：非丰富的总和
challengeType: 5
videoUrl: ''
---

# --description--

完美数字是一个数字，其正确除数的总和恰好等于数字。例如，28的适当除数之和为1 + 2 + 4 + 7 + 14 = 28，这意味着28是一个完美数。如果`n`的适当除数之和小于`n` ，则`n`被称为不足，如果该和超过`n`则称为`n` 。由于12是最小的有限数，1 + 2 + 3 + 4 + 6 = 16，可以写成两个有限数之和的最小数是24.通过数学分析，可以看出所有整数都大于28123可以写成两个数字的总和。然而，即使已知不能表示为两个充裕数的总和的最大数小于该限制，也不能通过分析进一步减小该上限。找出所有正整数&lt;= `n`的总和，它不能写成两个丰富数字的总和。

# --hints--

`sumOfNonAbundantNumbers(10000)`应返回3731004。

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)`应该返回4039939。

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)`应返回4159710。

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)`应该返回4179871。

```js
assert(sumOfNonAbundantNumbers(28123) === 4179871);
```

# --solutions--

