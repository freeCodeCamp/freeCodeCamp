---
id: 5900f5171000cf542c510029
title: 'Problem 426: Box-ball system'
challengeType: 1
forumTopicId: 302096
dashedName: problem-426-box-ball-system
---

# --description--

Consider an infinite row of boxes. Some of the boxes contain a ball. For example, an initial configuration of 2 consecutive occupied boxes followed by 2 empty boxes, 2 occupied boxes, 1 empty box, and 2 occupied boxes can be denoted by the sequence (2, 2, 2, 1, 2), in which the number of consecutive occupied and empty boxes appear alternately.

A turn consists of moving each ball exactly once according to the following rule: Transfer the leftmost ball which has not been moved to the nearest empty box to its right.

After one turn the sequence (2, 2, 2, 1, 2) becomes (2, 2, 1, 2, 3) as can be seen below; note that we begin the new sequence starting at the first occupied box.

<img class="img-responsive center-block" alt="animation showing one complete turn from (2, 2, 2, 1, 2) to (2, 2, 1, 2, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;">

A system like this is called a Box-Ball System or BBS for short.

It can be shown that after a sufficient number of turns, the system evolves to a state where the consecutive numbers of occupied boxes is invariant. In the example below, the consecutive numbers of occupied boxes evolves to [1, 2, 3]; we shall call this the final state.

<img class="img-responsive center-block" alt="four turns from occupied boxes [2, 2, 2] to final state [1, 2, 3]" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;">

We define the sequence $\\{t_i\\}$:

$$\begin{align}
  & s_0 = 290\\,797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50\\,515\\,093 \\\\
  & t_k = (s_k\bmod 64) + 1
\end{align}$$

Starting from the initial configuration $(t_0, t_1, \ldots, t_{10})$, the final state becomes [1, 3, 10, 24, 51, 75].

Starting from the initial configuration $(t_0, t_1, \ldots, t_{10\\,000\\,000})$, find the final state.

Give as your answer the sum of the squares of the elements of the final state. For example, if the final state is [1, 2, 3] then $14 (= 1^2 + 2^2 + 3^2)$ is your answer.

# --hints--

`boxBallSystem()` should return `31591886008`.

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

# --seed--

## --seed-contents--

```js
function boxBallSystem() {

  return true;
}

boxBallSystem();
```

# --solutions--

```js
// solution required
```
