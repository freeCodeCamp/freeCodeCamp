---
id: 587d78a3367417b2b2512ad1
title: Scoprire di più sui colori complementari
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

La teoria del colore e il suo impatto sul design sono un argomento vasto e nelle seguenti sfide ne vedremo solo le basi. In un sito web, il colore può attirare l'attenzione sul contenuto, evocare emozioni o creare armonia visiva. Usando diverse combinazioni di colori si può davvero cambiare l'aspetto di un sito web, e devi pensare bene alla scelta di una tavolozza di colori che sia adatta al tuo contenuto.

La ruota del colore è uno strumento utile per visualizzare come i colori si relazionano tra loro - è un cerchio in cui le tonalità simili sono vicine e le tonalità diverse sono più lontane. Quando due colori sono opposti sulla ruota, sono chiamati colori complementari. Essi hanno la caratteristica che se sono combinati, si "annullano" l'un l'altro e creano un colore grigio. Tuttavia, quando posizionati fianco a fianco, questi colori appaiono più vibranti e producono un forte contrasto visivo.

Alcuni esempi di colori complementari con i loro codici esadecimali sono:

<blockquote>rosso (#FF0000) e ciano (#00FFFF)<br>verde (#00FF00) e magenta (#FF00FF)<br>blu (#0000FF) e giallo (#FFFF00)</blockquote>

Questo è diverso dal modello di colore superato RYB (Rosso Giallo Blu) che hanno insegnato a molti di noi a scuola, che ha diversi colori primari e complementari. La teoria dei colori moderna utilizza il modello RGB additivo (come su uno schermo del computer) e il modello CMY(K) sottrattivo (come nella stampa).

Ci sono molti strumenti di selezione del colore disponibili online che hanno un'opzione per trovare il complementare di un colore.

**Nota:** L'utilizzo del colore può essere un modo potente per aggiungere interesse visivo a una pagina. Tuttavia, il colore da solo non dovrebbe essere usato come l'unico modo per trasmettere informazioni importanti perché gli utenti con disabilità visive potrebbero non capire il contenuto. La questione sarà trattata in modo più dettagliato nelle sfide relative all'accessibilità applicata.

# --instructions--

Cambia la proprietà `background-color` delle classi `blue` e `yellow` con i rispettivi colori. Nota come i colori sembrano diversi uno accanto all'altro rispetto a quando sono comparati sullo sfondo bianco.

# --hints--

L'elemento `div` con classe `blue` dovrebbe avere un `background-color` blu.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

L'elemento `div` con classe `yellow` dovrebbe avere un `background-color` giallo.

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```
