---
id: 5900f4bd1000cf542c50ffce
title: 'Problem 335: Die Bohnen sammeln'
challengeType: 1
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

Whenever Peter feels bored, he places some bowls, containing one bean each, in a circle. After this, he takes all the beans out of a certain bowl and drops them one by one in the bowls going clockwise. He repeats this, starting from the bowl he dropped the last bean in, until the initial situation appears again. For example with 5 bowls he acts as follows:

<img class="img-responsive center-block" alt="Animation von bewegten Bohnen in 5 Schalen" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;" />

Bei 5 Schalen braucht Peter also 15 Züge, um zur Ausgangssituation zurückzukehren.

Lasse $M(x)$ die Anzahl der Züge sein, die erforderlich sind, um ausgehend von $x$ Schalen zur Ausgangssituation zurückzukehren. Thus, $M(5) = 15$. Es kann auch nachgewiesen werden, dass $M(100) = 10920$.

Find $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Give your answer modulo $7^9$.

# --hints--

`gatheringTheBeans()` should return `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```
