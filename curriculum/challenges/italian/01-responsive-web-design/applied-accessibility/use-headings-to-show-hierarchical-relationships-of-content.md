---
id: 587d774d367417b2b2512a9e
title: Utilizzare le intestazioni per mostrare le relazioni gerarchiche tra i contenuti
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Le intestazioni (da `h1` a `h6`) sono il cavallo di battaglia per fornire una struttura e dei titoli ai tuoi contenuti. Gli screen reader possono essere impostati per leggere solo le intestazioni di una pagina in modo che l'utente abbia un riepilogo. Questo significa che è importante che i tag di intestazione nella tua struttura abbiano un significato semantico e si relazionino l'uno con l'altro, e non che siano scelti solo per i loro valori dimensionali.

*Significato semantico* vuol dire che il tag usato intorno ad un contenuto indica il tipo di informazioni che contiene.

Se stai scrivendo un articolo con un'introduzione, un corpo, e una conclusione, non ha molto senso mettere la conclusione come sottosezione del corpo. Dovrebbe piuttosto essere una sezione a parte. Allo stesso modo, i tag di intestazione in una pagina web devono andare in ordine e indicare le relazioni gerarchiche del tuo contenuto.

Le intestazioni di rango uguale (o superiore) iniziano nuove sezioni implicite, intestazioni di rango minore iniziano sottosezioni di quella precedente.

Ad esempio, una pagina con un elemento `h2` seguito da diverse sottosezioni etichettate con elementi `h4` confonderebbe un utente di screen reader. Con sei scelte, è allettante utilizzare un tag perché appare meglio nel browser, ma ricorda che puoi utilizzare CSS per modificarne la dimensione.

Un ultimo punto: ogni pagina dovrebbe avere sempre uno (e uno solo) elemento `h1`, relativo al tema principale del tuo contenuto. Questa e le altre intestazioni sono utilizzate in parte dai motori di ricerca per capire l'argomento della pagina.

# --instructions--

Camper Cat vuole una pagina sul suo sito dedicata a come diventare un ninja. Aiutarlo a sistemare le intestazioni in modo che la formattazione dia significato semantico al contenuto, e mostri le corrette relazioni genitore-figlio delle sue sezioni. Sostituisci tutti i tag `h5` con il livello di intestazione corretto per indicare che sono sottosezioni di quelli `h2`. Usa i tag `h3` per lo scopo.

# --hints--

Il tuo codice dovrebbe avere 6 elementi `h3`.

```js
assert($('h3').length === 6);
```

Il tuo codice dovrebbe avere 6 tag di chiusura `h3`.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

Il tuo codice non dovrebbe avere alcun elemento `h5`.

```js
assert($('h5').length === 0);
```

Il tuo codice non dovrebbe avere alcun tag di chiusura `h5`.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```
