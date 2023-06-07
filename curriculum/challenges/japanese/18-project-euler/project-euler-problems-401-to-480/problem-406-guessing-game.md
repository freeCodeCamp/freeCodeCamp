---
id: 5900f5021000cf542c510015
title: 'Problem 406: Guessing Game'
challengeType: 1
forumTopicId: 302074
dashedName: problem-406-guessing-game
---

# --description--

We are trying to find a hidden number selected from the set of integers {1, 2, ..., $n$} by asking questions. Each number (question) we ask, we get one of three possible answers:

- "Your guess is lower than the hidden number" (and you incur a cost of a), or
- "Your guess is higher than the hidden number" (and you incur a cost of b), or
- "Yes, that's it!" (and the game ends).

Given the value of $n$, $a$, and $b$, an optimal strategy minimizes the total cost <u>for the worst possible case</u>.

For example, if $n = 5$, $a = 2$, and $b = 3$, then we may begin by asking "<strong>2</strong>" as our first question.

If we are told that 2 is higher than the hidden number (for a cost of $b = 3$), then we are sure that "<strong>1</strong>" is the hidden number (for a total cost of <strong><span style="color: blue;">3</span></strong>).

If we are told that 2 is lower than the hidden number (for a cost of $a = 2$), then our next question will be "<strong>4</strong>".

If we are told that 4 is higher than the hidden number (for a cost of $b = 3$), then we are sure that "<strong>3</strong>" is the hidden number (for a total cost of $2 + 3 = \color{blue}{\mathbf{5}}$).

If we are told that 4 is lower than the hidden number (for a cost of $a = 2$), then we are sure that "<strong>5</strong>" is the hidden number (for a total cost of $2 + 2 = \color{blue}{\mathbf{4}}$).

Thus, the worst-case cost achieved by this strategy is <strong><span style="color: red">5</span></strong>. It can also be shown that this is the lowest worst-case cost that can be achieved. So, in fact, we have just described an optimal strategy for the given values of $n$, $a$, and $b$.

Let $C(n, a, b)$ be the worst-case cost achieved by an optimal strategy for the given values of $n$, $a$, and $b$.

Here are a few examples:

$$\begin{align}   & C(5, 2, 3) = 5 \\\\
  & C(500, \sqrt{2}, \sqrt{3}) = 13.220\\,731\\,97\ldots \\\\   & C(20\\,000, 5, 7) = 82 \\\\
  & C(2\\,000\\,000, √5, √7) = 49.637\\,559\\,55\ldots \\\\ \end{align}$$

Let $F_k$ be the Fibonacci numbers: $F_k = F_{k - 1} + F_{k - 2}$ with base cases $F_1 = F_2 = 1$.

Find $\displaystyle\sum_{k = 1}^{30} C({10}^{12}, \sqrt{k}, \sqrt{F_k})$, and give your answer rounded to 8 decimal places behind the decimal point.

# --hints--

`guessingGame()` should return `36813.12757207`.

```js
assert.strictEqual(guessingGame(), 36813.12757207);
```

# --seed--

## --seed-contents--

```js
function guessingGame() {

  return true;
}

guessingGame();
```

# --solutions--

```js
// solution required
```
