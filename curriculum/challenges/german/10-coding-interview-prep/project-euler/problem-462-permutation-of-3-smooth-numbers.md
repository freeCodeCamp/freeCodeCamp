---
id: 5900f53b1000cf542c51004d
title: 'Problematik 462: Permutation von 3 gleichmäßigen Zahlen'
challengeType: 1
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

Eine glatte 3er-Zahl ist eine ganze Zahl, die keinen Primfaktor größer als 3 hat. Für einen Integer $N$ definieren wir $S(N)$ als die Menge der 3 glatten Zahlen kleiner oder gleich $N$. Zum Beispiel: $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$.

Wir definieren $F(N)$ als die Anzahl der Permutationen von $S(N)$, in denen jedes Element nach allen seinen eigenen Teilern kommt.

Dies ist eine der möglichen Permutationen für $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

Dies ist keine gültige Permutation, da 12 vor ihrem Teiler 6 steht.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

Wir können überprüfen, dass $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ und $F(1000) ≈ 8,8521816557e\\,21$.

Finde $F({10}^{18})$. Gib deine Antwort als String in wissenschaftlicher Notation an, gerundet auf zehn Stellen nach dem Komma. Wenn du deine Antwort gibst, benutze ein kleingeschriebenes `e`, um Mantisse und Exponent zu trennen. Z.B. wenn die Antwort $112\\,233\\,445\\,566\\,778\\,899$ lautet, würde das Antwortformat `1.1223344557e17` lauten.

# --hints--

`permutationOf3SmoothNumbers()` sollte einen String zurückgeben.

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` sollte den String `5.5350769703e1512` zurückgeben.

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
