---
id: 5900f4251000cf542c50ff38
title: '问题185：数字思维'
challengeType: 1
forumTopicId: 301821
dashedName: problem-185-number-mind
---

# --description--

The game Number Mind is a variant of the well known game Master Mind.

而不是彩色钉，你必须猜测一个秘密的数字序列。 在每次猜测之后，你只会告诉你猜对了多少个正确的数字。 所以，如果序列是1234并且你猜到了2036，那么你会被告知你有一个正确的数字;但是，你不会被告知你在错误的地方也有另一个数字。

For instance, given the following guesses for a 5-digit secret sequence,

$$\begin{align}   & 90342 ;2\\;\text{correct}\\\\
  & 70794 ;0\\;\text{correct}\\\\   & 39458 ;2\\;\text{correct}\\\\
  & 34109 ;1\\;\text{correct}\\\\   & 51545 ;2\\;\text{correct}\\\\
  & 12531 ;1\\;\text{correct} \end{align}$$

The correct sequence 39542 is unique.

Based on the following guesses,

$$\begin{align}   & 5616185650518293 ;2\\;\text{correct}\\\\
  & 3847439647293047 ;1\\;\text{correct}\\\\   & 5855462940810587 ;3\\;\text{correct}\\\\
  & 9742855507068353 ;3\\;\text{correct}\\\\   & 4296849643607543 ;3\\;\text{correct}\\\\
  & 3174248439465858 ;1\\;\text{correct}\\\\   & 4513559094146117 ;2\\;\text{correct}\\\\
  & 7890971548908067 ;3\\;\text{correct}\\\\   & 8157356344118483 ;1\\;\text{correct}\\\\
  & 2615250744386899 ;2\\;\text{correct}\\\\   & 8690095851526254 ;3\\;\text{correct}\\\\
  & 6375711915077050 ;1\\;\text{correct}\\\\   & 6913859173121360 ;1\\;\text{correct}\\\\
  & 6442889055042768 ;2\\;\text{correct}\\\\   & 2321386104303845 ;0\\;\text{correct}\\\\
  & 2326509471271448 ;2\\;\text{correct}\\\\   & 5251583379644322 ;2\\;\text{correct}\\\\
  & 1748270476758276 ;3\\;\text{correct}\\\\   & 4895722652190306 ;1\\;\text{correct}\\\\
  & 3041631117224635 ;3\\;\text{correct}\\\\   & 1841236454324589 ;3\\;\text{correct}\\\\
  & 2659862637316867 ;2\\;\text{correct} \end{align}$$

Find the unique 16-digit secret sequence.

# --hints--

`numberMind()` should return `4640261571849533`.

```js
assert.strictEqual(numberMind(), 4640261571849533);
```

# --seed--

## --seed-contents--

```js
function numberMind() {

  return true;
}

numberMind();
```

# --solutions--

```js
// solution required
```
