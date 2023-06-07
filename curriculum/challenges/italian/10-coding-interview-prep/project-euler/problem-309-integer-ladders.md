---
id: 5900f4a11000cf542c50ffb4
title: 'Problema 309: Scale Intere'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

Nel classico problema delle "scale incrociate", ci sono date le lunghezze $x$ e $y$ di due scale che poggiano sulle pareti opposte di una strada stretta e livellata. Ci viene anche data l'altezza $h$ sopra la strada dove le due scale si incrociano e ci viene chiesto di trovare la larghezza della strada ($w$).

<img class="img-responsive center-block" alt="scale x e y, attraversando all'altezza h, e poggiando su pareti opposte della strada di larghezza w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

Qui ci occupiamo solo di casi in cui tutte e quattro le variabili sono intere positive. Ad esempio, se $x = 70$, $y = 119$ e $h = 30$, possiamo calcolare che $w = 56$.

Infatti, per valori interi $x$, $y$, $h$ e $0 &lt; x &lt; y &lt; 200$, ci sono solo cinque triplette ($x$, $y$, $h$) cje producono soluzioni intere per $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) e (119, 175, 40).

Per valori interi $x$, $y$, $h$ e $0 &lt; x &lt; y &lt; 1\\,000\\,000$, quante triplette ($x$, $y$, $h$) producono soluzioni intere per $w$?

# --hints--

`integerLadders()` dovrebbe restituire `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
