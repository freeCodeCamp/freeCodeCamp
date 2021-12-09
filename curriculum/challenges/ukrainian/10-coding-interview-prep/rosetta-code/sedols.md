---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs (списки ідентифікаційних кодів цінних паперів)
challengeType: 5
forumTopicId: 302305
dashedName: sedols
---

# --description--

Для кожного списку чисел з 6-цифрових [SEDOL](https://en.wikipedia.org/wiki/SEDOL "wp: SEDOL")s, порахуйте та додайте цифру контрольної суми. Тобто, враховуючи вхідний рядок зліва, ваша функція повинна повернутися відповідним рядком справа:

<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>

Перевірте, щоб кожне введення було правильно сформовано, особливо стосовно допустимих символів, дозволених у рядку SEDOL. Ваша функція повинна повернути `null` на недопустиме введення.

# --hints--

`sedol` має бути функцією.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` має повернутись нулем.

```js
assert(sedol('a') === null);
```

`sedol('710889')` має повернути '7108899'.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` має повернутись нулем.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` має повернути '2282765'.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {

  return true;
}
```

# --solutions--

```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const check = (10 - (sum % 10)) % 10;
  return check.toString();
}
```
