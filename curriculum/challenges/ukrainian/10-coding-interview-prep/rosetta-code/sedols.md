---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs (списки ідентифікаційних кодів цінних паперів)
challengeType: 1
forumTopicId: 302305
dashedName: sedols
---

# --description--

<abbr title="Stock Exchange Daily Official List">SEDOL</abbr> is a list of securities identification numbers issued by the London Stock Exchange.

For each number list of 6-digit <abbr title="Stock Exchange Daily Official List">SEDOL</abbr>s, calculate and append the checksum digit. That is, given the input string on the left, your function should return the corresponding string on the right:

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

Check that each input is correctly formed, especially with respect to valid characters allowed in a SEDOL string. Your function should return `null` on an invalid input.

# --hints--

`sedol` має бути функцією.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` should return null.

```js
assert(sedol('a') === null);
```

`sedol('710889')` should return '7108899'.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` should return null.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` should return '2282765'.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {
  const checkSum = 0

  return checkSum;
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
  const checkSum = (10 - (sum % 10)) % 10;
  return checkSum.toString();
}
```
