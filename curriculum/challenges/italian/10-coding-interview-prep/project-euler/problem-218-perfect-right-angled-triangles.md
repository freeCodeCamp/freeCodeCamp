---
id: 5900f4461000cf542c50ff59
title: 'Problema 218: triangoli rettangoli perfetti'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

Considera il triangolo rettangolo con lati $a=7$, $b=24$ e $c=25$.

L'area di questo triangolo è 84, che è divisibile per i numeri perfetti 6 e 28.

In più è un triangolo rettangolo primitivo visto che $gcd(a,b) = 1$ e $gcd(b,c) = 1$.

In più $c$ è un triangolo perfetto.

Chiamiamo un triangolo rettangolo perfetto se:

- è un triangolo rettangolo positivo
- l'ipotenusa è un quadrato perfetto

Chiamiamo un triangolo rettangolo super-perfetto se:

- è un triangolo rettangolo perfetto
- la sua zona è un multiplo dei numeri perfetti 6 e 28.

Quanti triangoli rettangoli perfetti con $c ≤ {10}^{16}$ esistono che non sono super-perfetti?

# --hints--

`perfectRightAngledTriangles()` dovrebbe restituire `0`.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
