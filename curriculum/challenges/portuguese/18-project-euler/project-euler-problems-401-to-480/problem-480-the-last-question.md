---
id: 5900f54c1000cf542c51005f
title: 'Problema 480: A última pergunta'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Considere todas as palavras que podem ser formadas selecionando letras, em qualquer ordem, a partir da frase:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Suponha que aquelas com 15 letras ou menos estão listadas em ordem alfabética e numeradas sequencialmente a partir de 1.

A lista incluiria:

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

Defina $P(w)$ como a posição da palavra $w$.

Defina $W(p)$ como a palavra na posição $p$.

Podemos ver que $P(w)$ e $W(p)$ são inversos: $P(W(p)) = p$ e $W(P(w)) = w$.

Exemplos:

$$\begin{align}   & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\   & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\ \end{align}$$

Encontre $$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Dê sua resposta usando caracteres em minúsculas (sem pontuação nem espaço).

# --hints--

`euler480()` deve retornar uma string.

```js
assert(typeof euler480() === 'string');
```

`euler480()` deve retornar a string `turnthestarson`.

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
