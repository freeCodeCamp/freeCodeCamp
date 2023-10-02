---
id: 5900f4521000cf542c50ff64
title: 'Problema 229: quattro rappresentazioni usando quadrati'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Considera il numero 3600. È molto speciale, perché

$$\begin{align}   & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\   & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\ \end{align}$$

In maniera simile troviamo che $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

Nel 1747, Eulero ha provato quali numeri sono rappresentabili come somma di due quadrati. Siamo interessati nel numero $n$ che ammette le rappresentazioni di tutti i seguenti quattro tipi:

$$\begin{align}   & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\   & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\ \end{align}$$

dove i numeri $a_k$ e $b_k$ sono numeri interi positivi.

Ci sono 75373 di questi numeri che non eccedono ${10}^7$.

Quanti di questi numeri ci sono che non eccedono $2 × {10}^9$?

# --hints--

`representationsUsingSquares()` dovrebbe restituire `11325263`.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
