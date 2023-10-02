---
id: 5900f5481000cf542c51005b
title: 'Problema 476: Imballaggio del cerchio II'
challengeType: 1
forumTopicId: 302153
dashedName: problem-476-circle-packing-ii
---

# --description--

Sia $R(a, b, c)$ l'area massima coperta da tre cerchi non sovrapposti all'interno di un triangolo con lunghezze di bordo $a$, $b$ e $c$.

Sia $S(n)$ il valore medio di $R(a, b, c)$ su tutte le triplette intere $(a, b, c)$ tali che $1 ≤ a ≤ b ≤ c &lt; a + b ≤ n$.

Ti viene dato $S(2) = R(1, 1, 1) ≈ 0.31998$, $S(5) ≈ 1.25899$.

Trova $S(1803)$ arrotondato a 5 decimali dopo il punto decimale.

# --hints--

`circlePackingTwo()` dovrebbe restituire `110242.87794`.

```js
assert.strictEqual(circlePackingTwo(), 110242.87794);
```

# --seed--

## --seed-contents--

```js
function circlePackingTwo() {

  return true;
}

circlePackingTwo();
```

# --solutions--

```js
// solution required
```
