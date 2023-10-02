---
id: 5900f54c1000cf542c51005f
title: '問題 480: 最後の質問'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

次のフレーズから任意の順序で文字を選んで作ることができる、すべての単語を考えます。

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

15 個以下の文字がアルファベット順に列挙され、1 から順に番号が振られているとします。

そのリストには以下が含まれるでしょう。

$$\begin{align}   & 1: \text{a} \\\\
  & 2: \text{aa} \\\\   & 3: \text{aaa} \\\\
  & 4: \text{aaaa} \\\\   & 5: \text{aaaaa} \\\\
  & 6: \text{aaaaaa} \\\\   & 7: \text{aaaaaac} \\\\
  & 8: \text{aaaaaacd} \\\\   & 9: \text{aaaaaacde} \\\\
  & 10: \text{aaaaaacdee} \\\\   & 11: \text{aaaaaacdeee} \\\\
  & 12: \text{aaaaaacdeeee} \\\\   & 13: \text{aaaaaacdeeeee} \\\\
  & 14: \text{aaaaaacdeeeeee} \\\\   & 15: \text{aaaaaacdeeeeeef} \\\\
  & 16: \text{aaaaaacdeeeeeeg} \\\\   & 17: \text{aaaaaacdeeeeeeh} \\\\
  & \ldots \\\\   & 28: \text{aaaaaacdeeeeeey} \\\\
  & 29: \text{aaaaaacdeeeeef} \\\\   & 30: \text{aaaaaacdeeeeefe} \\\\
  & \ldots \\\\   & 115246685191495242: \text{euleoywuttttsss} \\\\
  & 115246685191495243: \text{euler} \\\\   & 115246685191495244: \text{eulera} \\\\
  & ... \\\\   & 525069350231428029: \text{ywuuttttssssrrr} \\\\
\end{align}$$

$P(w)$ を、単語 $w$ の位置とします。

$W(p)$ を、位置 $p$ にある単語とします。

$P(w)$ と $W(p)$ は逆元であることがわかります。つまり、$P(W(p)) = p$ および $W(P(w)) = w$ です。

例:

$$\begin{align}   & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\   & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\ \end{align}$$

$$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering}))$$ を求めなさい。

回答は、 (句読点やスペースを含めずに) 小文字で書くこと 。

# --hints--

`euler480()` は文字列を返す必要があります。

```js
assert(typeof euler480() === 'string');
```

`euler480()` は文字列 `turnthestarson` を返す必要があります。

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
