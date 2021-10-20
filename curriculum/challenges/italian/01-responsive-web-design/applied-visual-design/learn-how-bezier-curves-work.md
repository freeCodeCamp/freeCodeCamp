---
id: 587d78a9367417b2b2512ae8
title: Imparare il funzionamento delle curve di Bezier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

L'ultima sfida ha introdotto la proprietà `animation-timing-function` e alcune keywords che cambiano la velocità di un'animazione nel corso della sua durata. CSS offre un'opzione diversa dalle keywords che fornisce un controllo ancora più preciso su come viene riprodotta l'animazione, attraverso l'uso delle curve di Bezier.

Nelle animazioni CSS, le curve di Bezier vengono utilizzate con la funzione `cubic-bezier`. La forma della curva rappresenta lo svolgimento dell'animazione. La curva vive su un sistema cartesiano 1x1. L'asse X di questo sistema di coordinate è la durata dell'animazione (pensala come scala temporale), e l'asse Y è il cambiamento nell'animazione.

La funzione `cubic-bezier` è costituita da quattro punti principali che si appoggiano su una griglia 1x1: `p0`, `p1`, `p2` e `p3`. `p0` e `p3` sono impostati per te - sono i punti di inizio e di fine che sono sempre situati rispettivamente sull'origine (0, 0) e su (1, 1). Imposta i valori x e y per gli altri due punti, e quando li posizioni nella griglia questi determinano la forma della curva per l'animazione da seguire. Questo viene fatto in CSS dichiarando i valori x e y dei punti "di ancoraggio" `p1` e `p2` nella forma: `(x1, y1, x2, y2)`. Mettendo tutto insieme, ecco un esempio di una curva di Bezier nel codice CSS:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

Nell'esempio precedente, i valori x e y sono equivalenti per ogni punto (x1 = 0.25 = y1 e x2 = 0.75 = y2) che - se ricordi lo studio della geometria - risulta in una linea che va dall'origine al punto (1, 1). Questa animazione è un cambiamento lineare di un elemento durante la lunghezza di un'animazione, ed è la stessa che usa la parola chiave `linear`. In altre parole, cambia ad una velocità che è costante.

# --instructions--

Per l'elemento con l'id di `ball1`, cambia il valore della proprietà `animation-timing-function` da `linear` al suo valore funzione equivalente `cubic-bezier`. Usa i valori dei punti forniti nell'esempio precedente.

# --hints--

Il valore della proprietà `animation-timing-function` per l'elemento con id `ball1` dovrebbe essere la funzione equivalente lineare `cubic-bezier`.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

Il valore della proprietà `animation-timing-function` per l'elemento con id `ball2` non dovrebbe cambiare.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
