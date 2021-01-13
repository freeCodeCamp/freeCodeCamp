---
id: 5900f37d1000cf542c50fe90
title: 问题17：数字字母计数
challengeType: 5
videoUrl: ''
dashedName: problem-17-number-letter-counts
---

# --description--

如果数字1到5用文字写出：一，二，三，四，五，则总共使用3 + 3 + 5 + 4 + 4 = 19个字母。如果从1到包含`limit`所有数字都用文字写出，那么会使用多少个字母？ **注意：** 不要计算空格或连字符。例如，342（三百四十二）包含23个字母，115（一百一十五）包含20个字母。在写出数字时使用“和”符合英国的用法。

# --hints--

`numberLetterCounts(5)`应返回19。

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)`应该返回1903。

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)`应该返回21124。

```js
assert.strictEqual(numberLetterCounts(1000), 21124);
```

# --seed--

## --seed-contents--

```js
function numberLetterCounts(limit) {

  return true;
}

numberLetterCounts(5);
```

# --solutions--

```js
function numberLetterCounts(limit) {
  const dictionary = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'onethousand'
  };

  let numString = '';

  function convertToString(num) {
    // check dictionary for number
    if (dictionary[num]) {
      return dictionary[num];
    } else {
      const hundreds = Math.floor(num / 100);
      const tens =  Math.floor((num / 10) % 10) * 10;
      const remainder = num % 10;

      let tempStr = '';

      if (hundreds === 0) {
        tempStr += dictionary[tens] + dictionary[remainder];
      } else {
        tempStr += dictionary[hundreds] + 'hundred';

        if (tens !== 0 || remainder !== 0) {
          tempStr += 'and';
        }

        if (tens < 20) {
          const lessThanTwenty = tens + remainder;
          tempStr += dictionary[lessThanTwenty];
        } else {
          tempStr += dictionary[tens] + dictionary[remainder];
        }
      }
      return tempStr;
    }
  }

  for (let i = 1; i <= limit; i++) {
    numString += convertToString(i);
  }
  return numString.length;
}
```
