---
id: 587d78a8367417b2b2512ae7
title: Cambiare il tempo di animazione con le keyword
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

Nelle animazioni CSS, la proprietà `animation-timing-function` controlla quanto velocemente un elemento animato cambia durante l'animazione. Se l'animazione è un'auto che si sposta dal punto A al punto B in un dato tempo (la tua `animation-duration`), la `animation-timing-function` dice come l'auto accelera e decelera durante la guida.

Esiste un certo numero di parole chiave (keyword) predefinite disponibili per le opzioni più comuni. Ad esempio, il valore predefinito è `ease`, che inizia lentamente, accelera nel mezzo, e poi rallenta di nuovo alla fine. Altre opzioni includono `ease-out`, che è veloce all'inizio e poi rallenta, `ease-in`, che è lento all'inizio e accelera alla fine, o `linear`, che applica una velocità di animazione costante per tutta la durata.

# --instructions--

Per gli elementi con id `ball1` e `ball2`, aggiungi una proprietà `animation-timing-function` ad ognuno e imposta `#ball1` a `linear` e `#ball2` a `ease-out`. Nota la differenza tra il modo in cui gli elementi si muovono durante l'animazione ma terminano insieme, poiché condividono la stessa `animation-duration` di 2 secondi.

# --hints--

Il valore della proprietà `animation-timing-function` per l'elemento con id `ball1` dovrebbe essere `linear`.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

Il valore della proprietà `animation-timing-function` per l'elemento con id `ball2` dovrebbe essere `ease-out`.

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

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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
  .balls {
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
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
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
