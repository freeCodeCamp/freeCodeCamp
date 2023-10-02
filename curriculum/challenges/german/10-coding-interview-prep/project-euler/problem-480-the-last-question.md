---
id: 5900f54c1000cf542c51005f
title: 'Problem 480: Die letzte Frage'
challengeType: 1
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

Überlege dir alle Wörter, die durch die Auswahl von Buchstaben, in beliebiger Reihenfolge, aus dem Satz gebildet werden können:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Nehmen wir an, dass diejenigen, die 15 Buchstaben oder weniger haben, in alphabetischer Reihenfolge aufgelistet und von 1 an fortlaufend nummeriert sind.

Die Liste würde Folgendes umfassen:

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

Definiere $P(w)$ als die Position des Wortes $w$.

Definiere $W(p)$ als das Wort an der Position $p$.

Wir können sehen, dass $P(w)$ und $W(p)$ invers sind: $P(W(p)) = p$ und $W(P(w)) = w$.

Beispiele:

$$\begin{align}   & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\   & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\ \end{align}$$

Finde $$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Gib deine Antwort in Kleinbuchstaben (ohne Satzzeichen oder Leerzeichen).

# --hints--

`euler480()` sollte einen String zurückgeben.

```js
assert(typeof euler480() === 'string');
```

`euler480()` sollte die Zeichenfolge `turnthestarson` zurückgeben.

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
