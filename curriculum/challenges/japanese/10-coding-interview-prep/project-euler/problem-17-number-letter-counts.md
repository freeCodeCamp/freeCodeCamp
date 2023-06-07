---
id: 5900f37d1000cf542c50fe90
title: '問題 17: 数を表す単語の文字数'
challengeType: 1
forumTopicId: 301804
dashedName: problem-17-number-letter-counts
---

# --description--

1 から 5 までの数を単語で表すと、one, two, three, four, five であり、使われている文字数の合計は 3 + 5 + 4 + 4 = 19 です。

数字 1 から始め、与えられた `limit` までの数をすべて単語で書いた場合、何文字が使用されますか。

**注:** スペースやハイフンは数えません。 例えば、342 (three hundred and forty-two) には 23 文字、115 (one hundred and fifteen) には20 文字が使われています。 数を単語に書き出す際の "and" の使用は、英国での使用法に従ったものです。

# --hints--

`numberLetterCounts(5)` は数値を返す必要があります。

```js
assert(typeof numberLetterCounts(5) === 'number');
```

`numberLetterCounts(5)` は 19 を返す必要があります。

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)` は 1903 を返す必要があります。

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)` は 21124 を返す必要があります。

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
