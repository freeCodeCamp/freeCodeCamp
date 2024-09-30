---
id: 5900f54c1000cf542c51005f
title: 'Problem 480: The Last Question'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Consider all the words which can be formed by selecting letters, in any order, from the phrase:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Suppose those with 15 letters or less are listed in alphabetical order and numbered sequentially starting at 1.

The list would include:

$$\begin{align}
  & 1: \text{a} \\\\
  & 2: \text{aa} \\\\
  & 3: \text{aaa} \\\\
  & 4: \text{aaaa} \\\\
  & 5: \text{aaaaa} \\\\
  & 6: \text{aaaaaa} \\\\
  & 7: \text{aaaaaac} \\\\
  & 8: \text{aaaaaacd} \\\\
  & 9: \text{aaaaaacde} \\\\
  & 10: \text{aaaaaacdee} \\\\
  & 11: \text{aaaaaacdeee} \\\\
  & 12: \text{aaaaaacdeeee} \\\\
  & 13: \text{aaaaaacdeeeee} \\\\
  & 14: \text{aaaaaacdeeeeee} \\\\
  & 15: \text{aaaaaacdeeeeeef} \\\\
  & 16: \text{aaaaaacdeeeeeeg} \\\\
  & 17: \text{aaaaaacdeeeeeeh} \\\\
  & \ldots \\\\
  & 28: \text{aaaaaacdeeeeeey} \\\\
  & 29: \text{aaaaaacdeeeeef} \\\\
  & 30: \text{aaaaaacdeeeeefe} \\\\
  & \ldots \\\\
  & 115246685191495242: \text{euleoywuttttsss} \\\\
  & 115246685191495243: \text{euler} \\\\
  & 115246685191495244: \text{eulera} \\\\
  & ... \\\\
  & 525069350231428029: \text{ywuuttttssssrrr} \\\\
\end{align}$$

Define $P(w)$ as the position of the word $w$.

Define $W(p)$ as the word in position $p$.

We can see that $P(w)$ and $W(p)$ are inverses: $P(W(p)) = p$ and $W(P(w)) = w$.

Examples:

$$\begin{align}
  & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\
  & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\
\end{align}$$

Find
$$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Give your answer using lowercase characters (no punctuation or space).

# --hints--

`euler480()` should return a string.

```js
assert(typeof euler480() === 'string');
```

`euler480()` should return the string `turnthestarson`.

```js
assert.strictEqual(euler480(), 'turnthestarson');
```

# --seed--

## --seed-contents--

```js
function euler480() {

  return true;
}

euler480();
```

# --solutions--

```js
// solution required
```
