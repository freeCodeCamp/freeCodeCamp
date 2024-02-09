---
id: 5900f4f71000cf542c510009
title: 'Problem 394: Eating pie'
challengeType: 1
forumTopicId: 302059
dashedName: problem-394-eating-pie
---

# --description--

Jeff eats a pie in an unusual way.

The pie is circular. Er beginnt damit, einen ersten Schnitt entlang des Radius in den Kuchen zu schneiden.

Solange noch mindestens ein bestimmter Bruchteil $F$ an Kuchen übrig ist, führt er das folgende Verfahren durch:

- He makes two slices from the pie centre to any point of what is remaining of the pie border, any point on the remaining pie border equally likely. This will divide the remaining pie into three pieces.
- Gegen den Uhrzeigersinn nimmt er die ersten beiden Kuchenstücke und isst sie.

Wenn weniger als ein Bruchteil $F$ des Kuchens übrig bleibt, wiederholt er diesen Vorgang nicht. Stattdessen isst er den ganzen restlichen Kuchen auf.

<img class="img-responsive center-block" alt="Animation des Schneidevorgangs für Kuchen" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;" />

Für $x ≥ 1$ sei $E(x)$ die erwartete Anzahl von Wiederholungen des obigen Verfahrens durch Jeff mit $F = \frac{1}{x}$. It can be verified that $E(1) = 1$, $E(2) ≈ 1.2676536759$, and $E(7.5) ≈ 2.1215732071$.

Find $E(40)$ rounded to 10 decimal places behind the decimal point.

# --hints--

`eatingPie()` should return `3.2370342194`.

```js
assert.strictEqual(eatingPie(), 3.2370342194);
```

# --seed--

## --seed-contents--

```js
function eatingPie() {

  return true;
}

eatingPie();
```

# --solutions--

```js
// solution required
```
