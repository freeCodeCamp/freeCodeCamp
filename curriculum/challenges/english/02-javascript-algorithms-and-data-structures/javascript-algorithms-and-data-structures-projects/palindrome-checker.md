---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A <dfn>palindrome</dfn> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note:** You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `racecar`, `RaceCar`, and `race CAR` among others.

We'll also pass strings with special symbols, such as `2A3*3a2`, `2A3 3a2`, and `2_A3*3#A2`.

# --hints--

`palindrome("eye")` should return a boolean.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` should return `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` should return `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` should return `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` should return `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` should return `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` should return `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` should return `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` should return `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` should return `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` should return `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` should return `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` should return `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}



palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
