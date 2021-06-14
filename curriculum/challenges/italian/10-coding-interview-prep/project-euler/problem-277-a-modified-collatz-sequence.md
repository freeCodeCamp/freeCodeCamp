---
id: 5900f4811000cf542c50ff94
title: 'Problem 277: A Modified Collatz sequence'
challengeType: 5
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

A modified Collatz sequence of integers is obtained from a starting value a1 in the following way:

an+1 = an/3 if an is divisible by 3. We shall denote this as a large downward step, "D".

an+1 = (4an + 2)/3 if an divided by 3 gives a remainder of 1. We shall denote this as an upward step, "U".

an+1 = (2an - 1)/3 if an divided by 3 gives a remainder of 2. We shall denote this as a small downward step, "d".

The sequence terminates when some an = 1.

Given any integer, we can list out the sequence of steps. For instance if a1=231, then the sequence {an}={231,77,51,17,11,7,10,14,9,3,1} corresponds to the steps "DdDddUUdDD".

Of course, there are other sequences that begin with that same sequence "DdDddUUdDD....". For instance, if a1=1004064, then the sequence is DdDddUUdDDDdUDUUUdDdUUDDDUdDD. In fact, 1004064 is the smallest possible a1 > 106 that begins with the sequence DdDddUUdDD.

What is the smallest a1 > 1015 that begins with the sequence "UDDDUdddDDUDDddDdDddDDUDDdUUDd"?

# --hints--

`euler277()` should return 1125977393124310.

```js
assert.strictEqual(euler277(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function euler277() {

  return true;
}

euler277();
```

# --solutions--

```js
// solution required
```
