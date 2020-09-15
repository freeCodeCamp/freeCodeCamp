---
id: 5900f3ac1000cf542c50febf
challengeType: 5
title: 'Problem 64: Odd period square roots'
forumTopicId: 302176
---

## Description
<section id='description'>

All square roots are periodic when written as continued fractions and can be written in the form:

$\displaystyle \quad \quad \sqrt{N}=a_0+\frac 1 {a_1+\frac 1 {a_2+ \frac 1 {a3+ \dots}}}$

For example, let us consider $\sqrt{23}:$:

$\quad \quad \sqrt{23}=4+\sqrt{23}-4=4+\frac 1 {\frac 1 {\sqrt{23}-4}}=4+\frac 1  {1+\frac{\sqrt{23}-3}7}$

If we continue we would get the following expansion:

$\displaystyle \quad \quad \sqrt{23}=4+\frac 1 {1+\frac 1 {3+ \frac 1 {1+\frac 1 {8+ \dots}}}}$

The process can be summarized as follows:

$\quad \quad a_0=4, \frac 1 {\sqrt{23}-4}=\frac {\sqrt{23}+4} 7=1+\frac {\sqrt{23}-3} 7$

$\quad \quad a_1=1, \frac 7 {\sqrt{23}-3}=\frac {7(\sqrt{23}+3)} {14}=3+\frac {\sqrt{23}-3} 2$

$\quad \quad a_2=3, \frac 2 {\sqrt{23}-3}=\frac {2(\sqrt{23}+3)} {14}=1+\frac {\sqrt{23}-4} 7$

$\quad \quad a_3=1, \frac 7 {\sqrt{23}-4}=\frac {7(\sqrt{23}+4)} 7=8+\sqrt{23}-4$

$\quad \quad a_4=8, \frac 1 {\sqrt{23}-4}=\frac {\sqrt{23}+4} 7=1+\frac {\sqrt{23}-3} 7$

$\quad \quad a_5=1, \frac 7 {\sqrt{23}-3}=\frac {7 (\sqrt{23}+3)} {14}=3+\frac {\sqrt{23}-3} 2$

$\quad \quad a_6=3, \frac 2 {\sqrt{23}-3}=\frac {2(\sqrt{23}+3)} {14}=1+\frac {\sqrt{23}-4} 7$

$\quad \quad a_7=1, \frac 7 {\sqrt{23}-4}=\frac {7(\sqrt{23}+4)} {7}=8+\sqrt{23}-4$

It can be seen that the sequence is repeating. For conciseness, we use the notation $\sqrt{23}=[4;(1,3,1,8)]$, to indicate that the block (1,3,1,8) repeats indefinitely.

The first ten continued fraction representations of (irrational) square roots are:

$\quad \quad \sqrt{2}=[1;(2)]$, period = 1

$\quad \quad \sqrt{3}=[1;(1,2)]$, period = 2

$\quad \quad \sqrt{5}=[2;(4)]$, period = 1

$\quad \quad \sqrt{6}=[2;(2,4)]$, period = 2

$\quad \quad \sqrt{7}=[2;(1,1,1,4)]$, period = 4

$\quad \quad \sqrt{8}=[2;(1,4)]$, period = 2

$\quad \quad \sqrt{10}=[3;(6)]$, period = 1

$\quad \quad \sqrt{11}=[3;(3,6)]$, period = 2

$\quad \quad \sqrt{12}=[3;(2,6)]$, period = 2

$\quad \quad \sqrt{13}=[3;(1,1,1,1,6)]$, period = 5

Exactly four continued fractions, for $N \le 13$, have an odd period.

How many continued fractions for $N \le 10\,000$ have an odd period?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>oddPeriodSqrts()</code> should return a number.
    testString: assert(typeof oddPeriodSqrts() === 'number');
  - text: <code>oddPeriodSqrts()</code> should return 1322.
    testString: assert.strictEqual(oddPeriodSqrts(), 1322);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function oddPeriodSqrts() {

  return true;
}

oddPeriodSqrts();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
