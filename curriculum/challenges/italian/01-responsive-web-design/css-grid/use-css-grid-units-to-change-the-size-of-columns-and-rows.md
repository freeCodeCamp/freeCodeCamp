---
id: 5a9036ee38fddaf9a66b5d34
title: Usare unità di griglia CSS per cambiare la dimensione delle colonne e delle righe
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

Puoi utilizzare unità assolute e relative come `px` e `em` nelle griglie CSS per definire la dimensione di righe e colonne. Puoi utilizzare anche queste:

`fr`: imposta la colonna o la riga a una frazione dello spazio disponibile,

`auto`: imposta automaticamente la colonna o la riga alla larghezza o all'altezza del suo contenuto,

`%`: regola la colonna o la riga alla percentuale di larghezza del contenitore.

Ecco il codice che genera l'output nell'anteprima:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Questo snippet crea cinque colonne. La prima colonna è ampia quanto il suo contenuto, la seconda colonna è larga 50px, la terza colonna è pari al 10% del contenitore; lo spazio rimanente è diviso in tre sezioni, due assegnate alla quarta colonna, e una alla quinta.

# --instructions--

Crea una griglia con tre colonne le cui larghezze sono le seguenti: 1fr, 100px e 2fr.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-columns` che ha tre colonne con le seguenti larghezze: `1fr`, `100px`e `2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
