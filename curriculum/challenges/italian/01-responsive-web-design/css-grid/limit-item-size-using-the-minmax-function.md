---
id: 5a94fe4469fb03452672e460
title: Limitare la dimensione dell'elemento usando la funzione minmax
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

C'è un'altra funzione integrata che è possibile usare con `grid-template-columns` e `grid-template-rows` chiamata `minmax`. Essa viene utilizzata per limitare la dimensione degli oggetti quando il contenitore della griglia cambia dimensione. Per fare questo è necessario specificare l'intervallo delle dimensioni accettabili per il tuo oggetto. Ecco un esempio:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

Nel codice sopra, `grid-template-columns` è impostato per creare due colonne; la prima è larga 100px, la seconda ha una larghezza minima di 50px e una larghezza massima di 200px.

# --instructions--

Utilizzando la funzione `minmax`, sostituisci `1fr` nella funzione `repeat` con una dimensione della colonna che abbia una larghezza minima di `90px` e una larghezza massima di `1fr`, e ridimensiona il pannello di anteprima per vedere l'effetto.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-columns` impostata in modo da ripetere 3 colonne con una larghezza minima di `90px` e una larghezza massima di `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
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
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
