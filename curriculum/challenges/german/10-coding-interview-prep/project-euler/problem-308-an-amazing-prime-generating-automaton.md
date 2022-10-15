---
id: 5900f4a11000cf542c50ffb3
title: 'Problem 308: An amazing Prime-generating Automaton'
challengeType: 1
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

A program written in the programming language Fractran consists of a list of fractions.

The internal state of the Fractran Virtual Machine is a positive integer, which is initially set to a seed value. Each iteration of a Fractran program multiplies the state integer by the first fraction in the list which will leave it an integer.

For example, one of the Fractran programs that John Horton Conway wrote for prime-generation consists of the following 14 fractions:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

Starting with the seed integer 2, successive iterations of the program produce the sequence:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

The powers of 2 that appear in this sequence are $2^2, 2^3, 2^5, \ldots$.

It can be shown that all the powers of 2 in this sequence have prime exponents and that all the primes appear as exponents of powers of 2, in proper order!

If someone uses the above Fractran program to solve Project Euler Problem 7 (find the ${10001}^{\text{st}}$ prime), how many iterations would be needed until the program produces $2^{10001^{\text{st}}\text{ prime}}$?

# --hints--

`primeGeneratingAutomation()` should return `1539669807660924`.

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
