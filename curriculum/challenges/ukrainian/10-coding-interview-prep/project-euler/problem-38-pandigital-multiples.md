---
id: 5900f3931000cf542c50fea5
title: 'Завдання 38: Панцифрові кратні числа'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

Візьміть число 192 і помножте його на 1, 2 і 3:

$$\begin{align}   192 × 1 = 192\\\\
  192 × 2 = 384\\\\   192 × 3 = 576\\\\
\end{align}$$

Об'єднавши кожний добуток, ми отримаємо панцифрове число від 1 до 9 - 192384576. Назвемо отримане число 192384576 об'єднаним добутком 192 і (1, 2, 3).

Те ж саме можна отримати, починаючи з числа 9 і перемноживши його на 1, 2, 3, 4 і 5, утворивши панцифрове число 918273645, яке є об'єднаним добутком цифр 9 та (1, 2, 3, 4, 5).

Яке найбільше `k`-не панцифрове число від 1 до `k` можна сформувати як об'єднаний добуток цілого числа з (1, 2, ..., `n`), де `n` > 1?

# --hints--

`pandigitalMultiples(8)` має повернути число.

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` має повернути `78156234`.

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` має повернути `932718654`.

```js
assert.strictEqual(pandigitalMultiples(9), 932718654);
```

# --seed--

## --seed-contents--

```js
function pandigitalMultiples(k) {

  return true;
}

pandigitalMultiples(8);
```

# --solutions--

```js
function pandigitalMultiples(k) {
  function getKDigitConcatenatedProduct(num, k) {
    // returns false if concatenated product is not k digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < k; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === k ? concatenatedProduct : false;
  }

  function is1toKPandigital(num, k) {
    const numStr = num.toString();

    // check if length is not k
    if (numStr.length !== k) {
      return false;
    }

    // check if pandigital
    for (let i = k; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 10 ** Math.floor(k / 2) + 1; i >= 1; i--) {
    const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
    if (is1toKPandigital(concatenatedProduct, k)) {
      const number = parseInt(concatenatedProduct, 10);
      if (number > largestNum) {
        largestNum = number;
      }
    }
  }
  return largestNum;
}
```
