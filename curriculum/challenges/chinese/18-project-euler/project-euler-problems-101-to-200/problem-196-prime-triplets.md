---
id: 5900f4301000cf542c50ff42
title: '问题196：Prime三胞胎'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

Build a triangle from all positive integers in the following way:

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

每个正整数在三角形中最多有八个邻居。

如果三个素数中的一个具有另外两个作为三角形中的邻居，则一组三个素数被称为素数三元组。

例如，在第二行中，素数2和3是某些素数三元组的元素。

如果考虑第8行，它包含两个素数，它们是某些素数三元组的元素，即29和31.如果考虑第9行，它只包含一个素数，它是某个素数三元组的元素：37。 If row 9 is considered, it contains only one prime which is an element of some prime triplet: 37.

Define $S(n)$ as the sum of the primes in row $n$ which are elements of any prime triplet. Then $S(8) = 60$ and $S(9) = 37$.

You are given that $S(10000) = 950007619$.

Find $S(5678027) + S(7208785)$.

# --hints--

`primeTriplets()` should return `322303240771079940`.

```js
assert.strictEqual(primeTriplets(), 322303240771079940);
```

# --seed--

## --seed-contents--

```js
function primeTriplets() {

  return true;
}

primeTriplets();
```

# --solutions--

```js
// solution required
```
