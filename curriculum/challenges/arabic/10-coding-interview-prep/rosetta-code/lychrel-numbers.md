---
id: 5ea2815a8640bcc6cb7dab3c
title: Lychrel numbers
challengeType: 1
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>Form the next number <code>n</code> of the series by reversing <code>n₀</code> and adding it to <code>n₀</code></li>
  <li>Stop when <code>n</code> becomes palindromic - i.e. the digits of <code>n</code> in reverse order == <code>n</code>.</li>
</ol>

The above recurrence relation when applied to most starting numbers `n` = 1, 2, ... terminates in a palindrome quite quickly.

For example if `n₀` = 12 we get:

```bash
12
12 + 21 = 33,  a palindrome!
```

And if `n₀` = 55 we get:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

Notice that the check for a palindrome happens *after* an addition.

Some starting numbers seem to go on forever; the recurrence relation for 196 has been calculated for millions of repetitions forming numbers with millions of digits, without forming a palindrome. These numbers that do not end in a palindrome are called **Lychrel numbers**.

For the purposes of this task a Lychrel number is any starting number that does not form a palindrome within 500 (or more) iterations.

**Seed and related Lychrel numbers:**

Any integer produced in the sequence of a Lychrel number is also a Lychrel number.

In general, any sequence from one Lychrel number *might* converge to join the sequence from a prior Lychrel number candidate; for example the sequences for the numbers 196 and then 689 begin:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

So we see that the sequence starting with 689 converges to, and continues with the same numbers as that for 196.

Because of this we can further split the Lychrel numbers into true **Seed** Lychrel number candidates, and **Related** numbers that produce no palindromes but have integers in their sequence seen as part of the sequence generated from a lower Lychrel number.

# --instructions--

Write a function that takes a number as a parameter. Return true if the number is a Lynchrel number. Otherwise, return false. Remember that the iteration limit is 500.

# --hints--

`isLychrel` should be a function.

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` should return a boolean.

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` should return `false`.

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` should return `false`.

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` should return `true`.

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` should return `true`.

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` should return `false`.

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` should return `true`.

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
