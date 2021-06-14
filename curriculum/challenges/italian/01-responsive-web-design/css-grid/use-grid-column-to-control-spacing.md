---
id: 5a90372638fddaf9a66b5d38
title: Usare grid-column per controllare la spaziatura
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cnzkDSr'
forumTopicId: 301136
dashedName: use-grid-column-to-control-spacing
---

# --description--

Fino a questo punto, tutte le proprietà che sono state discusse sono per i contenitori griglia. La proprietà `grid-column` è la prima da usare sugli elementi della griglia stessi.

Le ipotetiche linee orizzontali e verticali che creano la griglia sono indicate come <dfn>lines</dfn>. Queste linee sono numerate a partire da 1 nell'angolo in alto a sinistra della griglia incrementando verso destra per le colonne e verso il basso per le righe.

Ecco come appaiono le linee di una griglia 3x3:

<div style='position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;'><p style='left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;'>linee delle colonne</p><p style='left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>1</p><p style='left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>2</p><p style='left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>3</p><p style='left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>4</p><p style='left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;'>linee delle righe</p><p style='left:-10%;top:-10%;font-size:130%;position:absolute;'>1</p><p style='left:-10%;top:21%;font-size:130%;position:absolute;'>2</p><p style='left:-10%;top:53%;font-size:130%;position:absolute;'>3</p><p style='left:-10%;top:85%;font-size:130%;position:absolute;'>4</p><div style='left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;'></div></div>

Per controllare il numero di colonne che un elemento consumerà, è possibile utilizzare la proprietà `grid-column` in combinazione con i numeri ai quali desideri avviare e fermare l'elemento.

Ecco un esempio:

```css
grid-column: 1 / 3;
```

Questo farà iniziare l'oggetto dalla prima linea verticale della griglia a sinistra e lo estenderà fino alla terza linea della griglia, occupando due colonne.

# --instructions--

Fai in modo che l'elemento di classe `item5` occupi le ultime due colonne della griglia.

# --hints--

La classe `item5` dovrebbe avere una proprietà `grid-column`.

```js
assert(
  __helpers
    .removeWhiteSpace($('style').text())
    .match(/\.item5{.*grid-column:.*}/g)
);
```

La classe `item5` dovrebbe avere una proprietà `grid-column` che produca l'occupazione delle ultime due colonne della griglia.

```js
const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
const result = colStart.toString() + colEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
