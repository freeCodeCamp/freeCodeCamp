---
id: 587d78ad367417b2b2512afa
title: Usare la proprietà flex-wrap per avvolgere una riga o una colonna
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

Flexbox ha una funzione per dividere un contenitore flex in più righe (o colonne). Per impostazione predefinita, un contenitore flex si adatterà a tutti gli elementi flex insieme. Ad esempio, una riga sarà tutta su una riga.

Tuttavia, usando la proprietà `flex-wrap` potremo dire a CSS di mandare a capo gli oggetti. Questo significa che gli elementi extra si sposteranno in una nuova riga o colonna. Il punto di rottura in cui avviene il ritorno a capo dipende dalle dimensioni degli oggetti e dalle dimensioni del contenitore.

Il CSS ha anche opzioni per la direzione del wrap:

<ul><li><code>nowrap</code>: questa è l'impostazione predefinita, e non manda a capo gli oggetti.</li><li><code>wrap</code>: manda a capo gli oggetti su più righe dall'alto al basso se sono in righe e da sinistra a destra se sono in colonne.</li><li><code>wrap-reverse</code>: manda a capo gli elementi su più righe dal basso verso l'alto se sono in righe e da destra a sinistra se sono in colonne.</li></ul>

# --instructions--

Il layout corrente ha troppi riquadri per una riga. Aggiungi la proprietà CSS `flex-wrap` all'elemento `#box-container` e dagli un valore di `wrap`.

# --hints--

L'elemento `#box-container` dovrebbe avere la proprietà `flex-wrap` impostata su un valore `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
