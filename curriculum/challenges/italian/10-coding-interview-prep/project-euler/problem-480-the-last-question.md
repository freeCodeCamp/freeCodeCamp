---
id: 5900f54c1000cf542c51005f
title: 'Problema 480: L''ultima domanda'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Considera tutte le parole che possono essere formate selezionando lettere, in qualsiasi ordine, dalla frase:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Supponi che quelle con 15 lettere o meno sono elencate in ordine alfabetico e numerate sequenzialmente iniziando da 1.

La lista includerebbe:

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

Sia $P(w)$ la posizione della parola $w$.

Sia $W(p)$ la parola in posizione $p$.

Possiamo vedere che $P(w)$ e $W(p)$ sono operazioni inverse: $P(W(p)) = p$ e $W(P(w)) = w$.

Esempi:

$$\begin{align}   & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\   & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\ \end{align}$$

Trova $$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Dai la tua risposta usando caratteri minuscoli (senza punteggiatura o spazi).

# --hints--

`euler480()` dovrebbe restituire una stringa.

```js
assert(typeof euler480() === 'string');
```

`euler480()` dovrebbe restituire la stringa `turnthestarson`.

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
