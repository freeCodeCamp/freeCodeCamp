---
id: 5900f4f71000cf542c510009
title: 'Problema 394: Mangiare la torta'
challengeType: 1
forumTopicId: 302059
dashedName: problem-394-eating-pie
---

# --description--

Jeff mangia una torta in modo insolito.

La torta è circolare. Comincia con un taglio iniziale della torta lungo un raggio.

Finché c'è almeno una data frazione $F$ di torta sinistra, esegue la seguente procedura:

- Fa due fette dal centro della torta a qualsiasi punto di ciò che rimane del bordo della torta, qualsiasi punto sul confine rimanente della torta è ugualmente probabile. Questo dividerà la torta rimanente in tre parti.
- Andando in senso antiorario dal taglio iniziale, prende i primi due pezzi di torta e li mangia.

Quando rimane meno di una frazione $F$ di torta, non ripete questa procedura. Invece mangia tutta la torta rimanente.

<img class="img-responsive center-block" alt="animazione della procedura di affettatura della torta" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;" />

Per $x ≥ 1$, sia $E(x)$ il numero previsto di volte in cui Jeff ripete la procedura vista sopra con $F = \frac{1}{x}$. Si può verificare che $E(1) = 1$, $E(2) ≈ 1.2676536759$, e $E(7.5) ≈ 2.1215732071$.

Trova $E(40)$ arrotondato a 10 decimali dopo il punto decimale.

# --hints--

`eatingPie()` dovrebbe restituire `3.2370342194`.

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
