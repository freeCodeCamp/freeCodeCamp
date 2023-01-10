---
id: 5900f5101000cf542c510022
title: 'Problem 419: Look and say sequence'
challengeType: 1
forumTopicId: 302088
dashedName: problem-419-look-and-say-sequence
---

# --description--

The look and say sequence goes 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

The sequence starts with 1 and all other members are obtained by describing the previous member in terms of consecutive digits.

It helps to do this out loud:

1 is 'one one' $→ 11$

11 is 'two ones' $→ 21$

21 is 'one two and one one' $→ 1211$

1211 is 'one one, one two and two ones' $→ 111221$

111221 is 'three ones, two twos and one one' $→ 312211$

...

Define $A(n)$, $B(n)$ and $C(n)$ as the number of ones, twos and threes in the $n$'th element of the sequence respectively. One can verify that $A(40) = 31\\,254$, $B(40) = 20\\,259$ and $C(40) = 11\\,625$.

Find $A(n)$, $B(n)$ and $C(n)$ for $n = {10}^{12}$. Give your answer modulo $2^{30}$ as a string and separate your values for $A$, $B$ and $C$ by a comma. E.g. for $n = 40$ the answer would be `31254,20259,11625`.

# --hints--

`lookAndSaySequence()` should return a string.

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` should return the string `998567458,1046245404,43363922`.

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

# --seed--

## --seed-contents--

```js
function lookAndSaySequence() {

  return true;
}

lookAndSaySequence();
```

# --solutions--

```js
// solution required
```
