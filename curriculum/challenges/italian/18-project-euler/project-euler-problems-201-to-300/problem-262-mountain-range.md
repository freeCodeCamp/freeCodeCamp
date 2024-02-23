---
id: 5900f4731000cf542c50ff85
title: 'Problema 262: catena montuosa'
challengeType: 1
forumTopicId: 301911
dashedName: problem-262-mountain-range
---

# --description--

La seguente equazione rappresenta la topografia continua di una regione montuosa, con l'altitudine $h$ in qualsiasi punto ($x$,$y$):

$$h = \left(5000 - \frac{x^2 + y^2 + xy}{200} + \frac{25(x + y)}{2}\right) \times e^{-\left|\frac{x^2 + y^2}{1\\,000\\,000} - \frac{3(x + y)}{2000} + \frac{7}{10}\right|}$$

Una zanzara intende volare da A(200,200) a B(1400,1400), senza lasciare l'area data da $0 ≤ x$, $y ≤ 1600$.

A causa delle montagne, si alza prima fino a un punto A', con altitudine $f$. Poi, rimanendo alla stessa altitudine $f$, vola intorno a qualsiasi ostacolo fino a quando non arriva a un punto B' direttamente sopra B.

Per prima cosa, determina $f_{min}$ che è l'altitudine costante minima che consente un tale viaggio da A a B, rimanendo nell'area specificata. Quindi, trova la lunghezza del percorso più breve tra A' e B', volando a quell'altitudine costante $f_{min}$.

Dai quella lunghezza come risposta, arrotondata al terzo decimale.

**Nota:** Per comodità, la funzione di altitudine mostrata sopra viene ripetuta qui sotto, in una forma adatta alla maggior parte dei linguaggi di programmazione: `h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) )* exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )`.

# --hints--

`mountainRange()` dovrebbe restituire `2531.205`.

```js
assert.strictEqual(mountainRange(), 2531.205);
```

# --seed--

## --seed-contents--

```js
function mountainRange() {

  return true;
}

mountainRange();
```

# --solutions--

```js
// solution required
```
