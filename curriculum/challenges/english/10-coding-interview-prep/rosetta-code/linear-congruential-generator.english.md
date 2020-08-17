---
id: 5e4ce2f5ac708cc68c1df261
title: Linear congruential generator
challengeType: 5
isHidden: false
forumTopicId: 385266
---

## Description
<section id='description'>
The <a href="https://en.wikipedia.org/wiki/linear congruential generator">linear congruential generator</a> is a very simple example of a <a href="http://rosettacode.org/wiki/random number generator">random number generator</a>. All linear congruential generators use this formula:
$$r_{n + 1} = a \times r_n + c \pmod m$$
Where:
<ul>
<li>$ r_0 $ is a seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., are the random numbers.</li>
<li>$a$, $c$, $m$ are constants.</li>
</ul>
If one chooses the values of $a$, $c$ and $m$ with care, then the generator produces a uniform distribution of integers from $0$ to $m - 1$.
LCG numbers have poor quality. $r_n$ and $r_{n + 1}$ are not independent, as true random numbers would be. Anyone who knows $r_n$ can predict $r_{n + 1}$, therefore LCG is not cryptographically secure. The LCG is still good enough for simple tasks like <a href="http://rosettacode.org/wiki/Miller-Rabin primality test">Miller-Rabin primality test</a>, or <a href="http://rosettacode.org/wiki/deal cards for FreeCell">FreeCell deals</a>. Among the benefits of the LCG, one can easily reproduce a sequence of numbers, from the same $r_0$. One can also reproduce such sequence with a different programming language, because the formula is so simple.
</section>

## Instructions
<section id='instructions'>
Write a function that takes $r_0,a,c,m,n$ as parameters and returns $r_n$.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>linearCongGenerator</code> should be a function.
    testString: assert(typeof linearCongGenerator == 'function');
  - text: <code>linearCongGenerator(324, 1145, 177, 2148, 3)</code> should return a number.
    testString: assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
  - text: <code>linearCongGenerator(324, 1145, 177, 2148, 3)</code> should return <code>855</code>.
    testString: assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
  - text: <code>linearCongGenerator(234, 11245, 145, 83648, 4)</code> should return <code>1110</code>.
    testString: assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
  - text: <code>linearCongGenerator(85, 11, 1234, 214748, 5)</code> should return <code>62217</code>.
    testString: assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
  - text: <code>linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)</code> should return <code>12345</code>.
    testString: assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
  - text: <code>linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)</code> should return <code>1406932606</code>.
    testString: assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 2), 1406932606);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function linearCongGenerator(r0, a, c, m, n) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```

</section>
