---
id: 5900f3901000cf542c50fea3
title: 'Завдання 36: двоосновні паліндроми'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

Десяткове число 585 = 1001001001<sub>2</sub> (бінарне) є паліндромним в обох основах.

Знайдіть суму всіх чисел, менших за `n`, де 1000 ≤ `n` ≤ 1000000, які є паліндромними в основах 10 та 2.

(Зверніть увагу, що паліндромне число не може починатися з нуля в основі.)

# --hints--

`doubleBasePalindromes(1000)` має повернути число.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` має повернути 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` має повернути 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` має повернути 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` має повернути 872187.

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
