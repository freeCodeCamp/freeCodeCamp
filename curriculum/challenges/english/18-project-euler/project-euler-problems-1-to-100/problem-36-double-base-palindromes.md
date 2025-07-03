---
id: 5900f3901000cf542c50fea3
title: 'Problem 36: Double-base palindromes'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

The decimal number, 585 = 1001001001<sub>2</sub> (binary), is palindromic in both bases.

Find the sum of all numbers, less than `n`, whereas 1000 ≤ `n` ≤ 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

# --hints--

`doubleBasePalindromes(1000)` should return a number.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` should return 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` should return 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` should return 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` should return 872187.

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
