---
id: 5900f5381000cf542c51004b
title: 'Problem 460: An ant on the move'
challengeType: 1
forumTopicId: 302135
dashedName: problem-460-an-ant-on-the-move
---

# --description--

On the Euclidean plane, an ant travels from point $A(0, 1)$ to point $B(d, 1)$ for an integer $d$.

In each step, the ant at point ($x_0$, $y_0$) chooses one of the lattice points ($x_1$, $y_1$) which satisfy $x_1 ≥ 0$ and $y_1 ≥ 1$ and goes straight to ($x_1$, $y_1$) at a constant velocity $v$. The value of $v$ depends on $y_0$ and $y_1$ as follows:

- If $y_0 = y_1$, the value of $v$ equals $y_0$.
- If $y_0 ≠ y_1$, the value of $v$ equals $\frac{y_1 - y_0}{\ln y_1 - \ln y_0}$.

The left image is one of the possible paths for $d = 4$. First the ant goes from $A(0, 1)$ to $P_1(1, 3)$ at velocity $\frac{3 - 1}{\ln 3 - \ln 1} ≈ 1.8205$. Then the required time is $\frac{\sqrt{5}}{1.820} ≈ 1.2283$.

From $P_1(1, 3)$ to $P_2(3, 3)$ the ant travels at velocity 3 so the required time is $\frac{2}{3} ≈ 0.6667$. From $P_2(3, 3)$ to $B(4, 1)$ the ant travels at velocity $\frac{1 - 3}{\ln 1 - \ln 3} ≈ 1.8205$ so the required time is $\frac{\sqrt{5}}{1.8205} ≈ 1.2283$.

Thus the total required time is $1.2283 + 0.6667 + 1.2283 = 3.1233$.

The right image is another path. The total required time is calculated as $0.98026 + 1 + 0.98026 = 2.96052$. It can be shown that this is the quickest path for $d = 4$.

<img class="img-responsive center-block" alt="two possible paths for d = 4" src="https://cdn.freecodecamp.org/curriculum/project-euler/an-ant-on-the-move.jpg" style="background-color: white; padding: 10px;" />

Let $F(d)$ be the total required time if the ant chooses the quickest path. For example, $F(4) ≈ 2.960\\,516\\,287$. We can verify that $F(10) ≈ 4.668\\,187\\,834$ and $F(100) ≈ 9.217\\,221\\,972$.

Find $F(10\\,000)$. Give your answer rounded to nine decimal places.

# --hints--

`antOnTheMove()` should return `18.420738199`.

```js
assert.strictEqual(antOnTheMove(), 18.420738199);
```

# --seed--

## --seed-contents--

```js
function antOnTheMove() {

  return true;
}

antOnTheMove();
```

# --solutions--

```js
// solution required
```
