---
id: 587d778e367417b2b2512aab
title: Migliorare la leggibilità con il testo ad alto contrasto
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

Il basso contrasto tra i colori di primo piano e di sfondo può rendere il testo difficile da leggere. Un contrasto sufficiente migliora la leggibilità del tuo contenuto, ma cosa significa esattamente "sufficiente"?

Le linee guida di accessibilità dei contenuti Web (WCAG) raccomandano almeno un rapporto di contrasto di 4.5 a 1 per il testo normale. Il rapporto viene calcolato confrontando i valori relativi di luminanza di due colori. Questo varia da 1:1 per lo stesso colore, o nessun contrasto, a 21:1 per il bianco contro il nero, il contrasto più sostanziale. Esistono molti strumenti di controllo del contrasto disponibili online che calcolano questo rapporto per te.

# --instructions--

La scelta di Camper Cat di un testo grigio chiaro su uno sfondo bianco per il suo recente post sul blog ha un rapporto di contrasto di 1,5:1, che lo rende difficile da leggere. Cambia il `color` del testo dal grigio corrente (`#D3D3D3`) a un grigio più scuro (`#636363`) per migliorare il rapporto di contrasto a 6:1.

# --hints--

Il tuo codice dovrebbe cambiare il valore di `color` per il `body` al grigio più scuro.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

Il tuo codice non dovrebbe cambiare il `background-color` del `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
