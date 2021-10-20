---
id: 587d78a8367417b2b2512ae4
title: Creare un battito cardiaco CSS usando un'animazione infinita
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

Ecco un altro esempio di animazione continua con la proprietà `animation-iteration-count` che utilizza il cuore che hai progettato in una sfida precedente.

L'animazione del battito cardiaco della durata di un secondo consiste in due parti animate. Gli elementi `heart` (incluse le parti `:before` e `:after`) sono animati per cambiare la dimensione utilizzando la proprietà`transform`, e il `div` di sfondo è animato per cambiare il suo colore utilizzando la proprietà `background`.

# --instructions--

Fai continuare a battere il cuore aggiungendo la proprietà `animation-iteration-count` sia per la classe `back` che per la classe `heart` e impostando il valore a `infinite`. I selettori `heart:before` e `heart:after` non hanno bisogno di alcuna proprietà di animazione.

# --hints--

La proprietà `animation-iteration-count` per la classe `heart` dovrebbe avere un valore di `infinite`.

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

La proprietà `animation-iteration-count` per la classe `back` dovrebbe avere un valore `infinite`.

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```
