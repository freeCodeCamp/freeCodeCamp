---
id: 587d78ae367417b2b2512afe
title: Usare le scorciatoie flex
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

Esiste una scorciatoia disponibile per impostare diverse proprietà flex contemporaneamente. Le proprietà `flex-grow`, `flex-shrink`, e `flex-basis` possono essere impostate tutte insieme utilizzando la proprietà `flex`.

Ad esempio, `flex: 1 0 10px;` imposterà l'elemento con `flex-grow: 1;`, `flex-shrink: 0;`, e `flex-basis: 10px;`.

Le impostazioni delle proprietà predefinite sono `flex: 0 1 auto;`.

# --instructions--

Aggiungi la proprietà CSS `flex` sia a `#box-1` che a `#box-2`. Imposta `#box-1` in modo che il suo `flex-grow` sia `2`, il suo `flex-shrink` sia `2`e la sua `flex-basis` sia `150px`. Imposta `#box-2` in modo che il suo `flex-grow` sia `1`, il suo `flex-shrink` sia `1`e la sua `flex-basis` sia `150px`.

Questi valori faranno crescere `#box-1` facendogli riempire lo spazio aggiuntivo al doppio della velocità di `#box-2` quando il contenitore è superiore a 300px e riducendolo al doppio della velocità di `#box-2` quando il contenitore è inferiore a 300px. 300px è la dimensione combinata dei valori `flex-basis` delle due caselle.

# --hints--

L'elemento `#box-1` dovrebbe avere la proprietà `flex` impostata su un valore di `2 2 150px`.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

L'elemento `#box-2` dovrebbe avere la proprietà `flex` impostata su un valore di `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

Il tuo codice dovrebbe utilizzare la proprietà `flex` per `#box-1` e `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
