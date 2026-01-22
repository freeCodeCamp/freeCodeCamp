---
id: 5e4ce2f5ac708cc68c1df261
title: Linear congruential generator
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

A linear congruential generator (LCG) is an <em>algorithm</em> that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. All linear congruential generators use this formula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Where:

<ul>
<li>$ r_0 $ is a seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., are the random numbers.</li>
<li>$a$, $c$, $m$ are constants.</li>
</ul>

If one chooses the values of $a$, $c$ and $m$ with care, then the generator produces a uniform distribution of integers from $0$ to $m - 1$.

<abbr title="linear congruential generator">LCG</abbr> numbers have poor quality. $r_n$ and $r\_{n + 1}$ are not independent, as true random numbers would be. Anyone who knows $r_n$ can predict $r\_{n + 1}$, therefore <abbr title="linear congruential generator">LCG</abbr> is not cryptographically secure. The <abbr title="linear congruential generator">LCG</abbr> is still good enough for simple tasks like Miller-Rabin primality test, or FreeCell deals. Among the benefits of the <abbr title="linear congruential generator">LCG</abbr>, one can easily reproduce a sequence of numbers, from the same $r_0$. One can also reproduce such sequence with a different programming language, because the formula is so simple.

# --instructions--

Write a function that takes $r_0,a,c,m,n$ as parameters and returns $r_n$.

# --hints--

`linearCongGenerator` should be a function.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` should return a number.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` should return `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` should return `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` should return `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` should return `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` should return `1406932606`.

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
