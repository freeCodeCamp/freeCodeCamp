---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 1
forumTopicId: 302305
dashedName: sedols
---

# --description--

<abbr title="Stock Exchange Daily Official List">SEDOL</abbr> is a list of securities identification numbers issued by the London Stock Exchange.

對於每個由 6 位數字組成的 <abbr title="Stock Exchange Daily Official List">SEDOL</abbr> 編號，計算並追加校驗位。 也就是說，給定左側的輸入字符串，函數應該返回相應的右側字符串：

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

檢查每個輸入是否正確，特別是與 SEDOL 字符串中允許的有效字符有關。 如果輸入無效，函數應返回 `null`。

# --hints--

`sedol` 應該是一個函數。

```js
assert(typeof sedol === 'function');
```

`sedol('a')` 應該返回 null。

```js
assert(sedol('a') === null);
```

`sedol('710889')` 應該返回 '7108899'。

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` 應該返回 null。

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` 應該返回 '2282765'。

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
