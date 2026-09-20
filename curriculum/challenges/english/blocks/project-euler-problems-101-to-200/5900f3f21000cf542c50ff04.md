---
id: 5900f3f21000cf542c50ff04
title: 'Problem 133: Repunit nonfactors'
challengeType: 1
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

A number consisting entirely of ones is called a repunit. We shall define $R(k)$ to be a repunit of length $k$; for example, $R(6) = 111111$.

Let us consider repunits of the form $R({10}^n)$.

Although $R(10)$, $R(100)$, or $R(1000)$ are not divisible by 17, $R(10000)$ is divisible by 17. Yet there is no value of n for which $R({10}^n)$ will divide by 19. Remarkably, 11, 17, 41, and 73 are the only four primes below one-hundred that can be a factor of $R({10}^n)$.

Find the sum of all the primes below one-hundred thousand that will never be a factor of $R({10}^n)$.

# --hints--

`repunitNonfactors()` should return `453647705`.

```js
assert.strictEqual(repunitNonfactors(), 453647705);
```

# --seed--

## --seed-contents--

```js
function repunitNonfactors() {

  return true;
}

repunitNonfactors();
```

# --solutions--

```js
// solution required
```
