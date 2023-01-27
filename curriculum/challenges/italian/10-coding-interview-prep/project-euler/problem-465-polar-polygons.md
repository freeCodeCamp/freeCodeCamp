---
id: 5900f53d1000cf542c510050
title: 'Problema 465: Poligoni polari'
challengeType: 1
forumTopicId: 302140
dashedName: problem-465-polar-polygons
---

# --description--

Il nucleo di un poligono è definito dall'insieme di punti da cui è visibile l'intero confine del poligono. Definiamo un poligono polare come un poligono per il quale l'origine è rigorosamente contenuta all'interno del suo nucleo.

Per questo problema, un poligono può avere vertici collineari consecutivi. Inoltre un poligono non può comunque avere auto-intersezione e non può avere area zero.

Per esempio, solo il primo dei seguenti è un poligono polare (i nuclei del secondo, terzo, e quarto non contengono rigorosamente l'origine, e il quinto non ha affatto un nucleo):

<img class="img-responsive center-block" alt="cinque poligoni di esempio" src="https://cdn.freecodecamp.org/curriculum/project-euler/polar-polygons.png" style="background-color: white; padding: 10px;" />

Nota che il primo poligono ha tre vertici collineari consecutivi.

Sia $P(n)$ il numero di poligoni polari in modo che i vertici $(x, y)$ abbiano coordinate intere i cui valori assoluti non sono maggiori di $n$.

Nota che i poligoni devono essere conteggiati come diversi se hanno un insieme diverso di lati, anche se racchiudono la stessa area. Ad esempio, il poligono con vertici [(0,0), (0,3), (1,1), (3,0)] è distinto dal poligono con vertici [(0,0), (0,3), (1,1), (3,0), (1,0)].

Ad esempio, $P(1) = 131$, $P(2) = 1\\,648\\,531$, $P(3) = 1\\,099\\,461\\,296\\,175$ e $P(343)\bmod 1\\,000\\,000\\,007 = 937\\,293\\,740$.

Trova $P(7^{13})\bmod 1\\,000\\,000\\,007$.

# --hints--

`polarPolygons()` dovrebbe restituire `585965659`.

```js
assert.strictEqual(polarPolygons(), 585965659);
```

# --seed--

## --seed-contents--

```js
function polarPolygons() {

  return true;
}

polarPolygons();
```

# --solutions--

```js
// solution required
```
