---
id: 5a94fe3669fb03452672e45f
title: Ridurre le ripetizioni usando la funzione repeat
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Quando hai usato `grid-template-columns` e `grid-template-rows` per definire la struttura di una griglia, hai inserito un valore per ogni riga o colonna che hai creato.

Diciamo che tu voglia una griglia con 100 righe della stessa altezza. Non è molto pratico inserire 100 valori singolarmente. Fortunatamente, c'è un modo migliore - usando la funzione `repeat` per specificare il numero di volte che vuoi che la colonna o la riga venga ripetuta, seguito da una virgola e dal valore che vuoi ripetere.

Ecco un esempio di come creare una griglia di 100 righe, ognuna alta 50px.

```css
grid-template-rows: repeat(100, 50px);
```

Puoi anche ripetere più valori con la funzione repeat e inserire la funzione tra gli altri valori nella definizione della struttura per una griglia. Ecco come si presenta:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Questo si traduce in:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Nota:** `1fr 50px` viene ripetuto due volte seguito da 20px.

# --instructions--

Usa `repeat` per rimuovere la ripetizione dalla proprietà `grid-template-columns`.

# --hints--

La classe `container` dovrebbe avere una proprietà `grid-template-columns` impostata per ripetere 3 colonne con la larghezza di `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: 1fr 1fr 1fr;

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
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
