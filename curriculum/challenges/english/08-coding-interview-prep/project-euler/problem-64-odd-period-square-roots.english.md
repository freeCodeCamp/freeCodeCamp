---
id: 5900f3ac1000cf542c50febf
challengeType: 5
title: 'Problem 64: Odd period square roots'
---

## Description
<section id='description'>
All square roots are periodic when written as continued fractions and can be written in the form:

√N = a0 +
1

a1 +
1


a2 +
1



a3 + ...

For example, let us consider √23:

√23 = 4 + √23 — 4 = 4 + 
1
 = 4 + 
1

1√23—4

1 + 
√23 – 37

If we continue we would get the following expansion:

√23 = 4 +
1

1 +
1


3 +
1



1 +
1




8 + ...

The process can be summarised as follows:

a0 = 4,

1√23—4
 = 
√23+47
 = 1 + 
√23—37
a1 = 1,

7√23—3
 = 
7(√23+3)14
 = 3 + 
√23—32
a2 = 3,

2√23—3
 = 
2(√23+3)14
 = 1 + 
√23—47
a3 = 1,

7√23—4
 = 
7(√23+4)7
 = 8 + 
√23—4
a4 = 8,

1√23—4
 = 
√23+47
 = 1 + 
√23—37
a5 = 1,

7√23—3
 = 
7(√23+3)14
 = 3 + 
√23—32
a6 = 3,

2√23—3
 = 
2(√23+3)14
 = 1 + 
√23—47
a7 = 1,

7√23—4
 = 
7(√23+4)7
 = 8 + 
√23—4

It can be seen that the sequence is repeating. For conciseness, we use the notation √23 = [4;(1,3,1,8)], to indicate that the block (1,3,1,8) repeats indefinitely.

The first ten continued fraction representations of (irrational) square roots are:
√2=[1;(2)], period=1
√3=[1;(1,2)], period=2
√5=[2;(4)], period=1
√6=[2;(2,4)], period=2
√7=[2;(1,1,1,4)], period=4
√8=[2;(1,4)], period=2
√10=[3;(6)], period=1
√11=[3;(3,6)], period=2
√12= [3;(2,6)], period=2
√13=[3;(1,1,1,1,6)], period=5
Exactly four continued fractions, for N ≤ 13, have an odd period.
How many continued fractions for N ≤ 10000 have an odd period?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler64()</code> should return 1322.
    testString: 'assert.strictEqual(euler64(), 1322, ''<code>euler64()</code> should return 1322.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler64() {
  // Good luck!
  return true;
}

euler64();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
