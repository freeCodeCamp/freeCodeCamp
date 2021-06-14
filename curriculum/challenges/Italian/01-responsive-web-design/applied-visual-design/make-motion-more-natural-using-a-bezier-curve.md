---
id: 587d78a9367417b2b2512aea
title: Rendere il movimento più naturale utilizzando una curva di Bezier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

Questa sfida anima un elemento per replicare il movimento di una palla da giocoliere. Le sfide precedenti hanno riguardato le curve di Bezier cubiche `linear` e `ease-out`, ma nessuna raffigura il movimento di giocoleria con precisione. Per questo devi personalizzare una curva di Bezier.

La funzione `animation-timing-function` effettua automaticamente un'iterazione ad ogni keyframe quando l'`animation-iteration-count` è impostato su infinito. Dato che c'è una regola keyframe impostata nel mezzo della durata dell'animazione (al `50%`), questo si traduce in due identiche progressioni di animazione con movimento verso l'alto e verso il basso della palla.

La seguente curva cubica di Bezier simula un movimento di giocoliera:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Nota che il valore di y2 è maggiore di 1. Sebbene la curva di Bezier cubica sia mappata su un sistema di coordinate 1 per 1, e possa accettare valori x solo tra 0 a 1, il valore y può essere impostato su numeri più grandi di uno. Questo si traduce in un movimento rimbalzante che è ideale per simulare la pallina del giocoliere.

# --instructions--

Cambia il valore della funzione `animation-timing-function` dell'elemento con l'id di `green` a una funzione `cubic-bezier` con valori x1, y1, x2, y2 fissati rispettivamente a 0.311, 0.441, 0.444, 1.649.

# --hints--

Il valore della proprietà `animation-timing-function` per l'elemento con id `green` dovrebbe essere una funzione `cubic-bezier` con valori x1, y1, x2, y2 impostati come specificato.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
