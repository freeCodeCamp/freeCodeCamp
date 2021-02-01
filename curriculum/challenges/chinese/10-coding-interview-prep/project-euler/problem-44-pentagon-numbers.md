---
id: 5900f3981000cf542c50feab
title: 问题44：五角大楼数字
challengeType: 5
videoUrl: ''
dashedName: problem-44-pentagon-numbers
---

# --description--

五边形数由公式P <sub>n</sub> = `n`（3 `n` -1）/ 2生成。 前十个五边形数字是：

1，5，12，22，35，51，70，92，117，145，...

可以看出，P <sub>4</sub> + P <sub>7</sub> = 22 + 70 = 92 = P <sub>8</sub>。 但是，它们的差70-22 = 48不是五边形。

找出一对五边形数P <sub>j</sub>和P <sub>k</sub>，它们的和与差为五角形，并且D = | P <sub>k</sub>-P <sub>j</sub> | 最小化； D的值是多少？

# --hints--

`pentagonNumbers()`应该返回5482660。

```js
assert.strictEqual(pentagonNumbers(), 5482660);
```

# --seed--

## --seed-contents--

```js
function pentagonNumbers() {

  return true;
}

pentagonNumbers();
```

# --solutions--

```js
function pentagonNumbers() {
  function isPentagonal(num) {
  // Formula found by solving pentagonal number
  // equation for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
  }

  function pentagonal(num) {
    return (num * ((3 * num) - 1)) / 2;
  }
  let result;
  let i = 1;
  while (!result) {
  i++;
  const num1 = (i * ((3 * i) - 1)) / 2; // Pentagonal num formula
  const minDiff = num1 - (((i - 1) * ((3 * (i - 1)) - 1)) / 2);
  let j = i - 1;
  while (j > 0 && !result) {
  const num2 = (j * ((3 * j) - 1)) / 2;
  if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
        result = num1 - num2;
      }
      j--;
    }
  }
  return result;
  }
```
