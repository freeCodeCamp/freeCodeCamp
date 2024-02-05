---
id: 5900f3901000cf542c50fea3
title: '問題 36: 2 種類の基数の回文'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

10 進数 585 = 1001001001001<sub>2</sub> (2 進数) は、両方の基数で回文になります。

1000 ≤ `n` ≤ 1000000 のとき、10 進法と 2 進法で回文になる `n` 未満の数の総和を求めなさい。

(注: いずれの基数でも、回文数には先行ゼロを使えません。)

# --hints--

`doubleBasePalindromes(1000)` は数値を返す必要があります。

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` は 1772 を返す必要があります。

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` は 105795 を返す必要があります。

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` は 286602 を返す必要があります。

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` は 872187 を返す必要があります。

```js
assert(doubleBasePalindromes(1000000) == 872187);
```

# --seed--

## --seed-contents--

```js
function doubleBasePalindromes(n) {

  return n;
}

doubleBasePalindromes(1000000);
```

# --solutions--

```js
function buildPalindromesBase10(len) {
  // Base cases
  const palindromes = [];
  if (len > 0) {
    palindromes.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  }
  if (len > 1) {
    palindromes.push([11, 22, 33, 44, 55, 66, 77, 88, 99, 0]);
  }

  for (let i = 3; i <= len; i++) {
    const lengthIPalindromes = [];

    for (let j = 1; j < 10; j++) {
      const firstDigit = j * (10 ** (i - 1));
      const lastDigit = j;
      // Build off of palindromes 2 digits shorter
      {
        const shorterPalindromes = palindromes[i - 3];

        for (const palindrome of shorterPalindromes) {
          lengthIPalindromes.push(firstDigit + palindrome * 10 + lastDigit);
        }
      }
      // Build off of palindromes 4 digits shorter
      if (i > 4) {
        const shorterPalindromes = palindromes[i - 5];

        for (const palindrome of shorterPalindromes) {
          lengthIPalindromes.push(firstDigit + palindrome * 100 + lastDigit);
        }
      }
    }
    palindromes.push(lengthIPalindromes);
  }
  return palindromes.flat();
}

function isPalindrome(num) {
  const numAsString = num.toString();
  const numDigits = numAsString.length;
  for (let i = 0; i < numDigits / 2; i++) {
    if (numAsString[i] !== numAsString[numDigits - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindromeBase2(num) {
  return isPalindrome(num.toString(2));
}

function doubleBasePalindromes(n) {
  let palindromeSum = 0;
  const maxDigits = Math.ceil(Math.log10(n));
  const palindromesBase10 = buildPalindromesBase10(maxDigits);

  // Loop over all palindromes less than n
  for (let i = 0; i < palindromesBase10.length && palindromesBase10[i] < n; i++) {
    if (isPalindromeBase2(palindromesBase10[i])) {
      palindromeSum += palindromesBase10[i];
    }
  }
  return palindromeSum;
}
```
