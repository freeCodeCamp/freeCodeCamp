---
id: 587d78a7367417b2b2512adf
title: Imparare come funzionano i @keyframes CSS e le proprietà delle animazioni
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Per animare un elemento, devi conoscere le proprietà dell'animazione e la regola `@keyframes`. Le proprietà dell'animazione controllano come si comporta l'animazione e la regola `@keyframes` controlla cosa succede durante quell'animazione. Ci sono otto proprietà di animazione in totale. Questa sfida sarà semplice e coprirà prima le due più importanti:

`animation-name` imposta il nome dell'animazione, che viene successivamente utilizzato da `@keyframes` per dire al CSS quali regole vanno seguite con quali animazioni.

`animation-duration` imposta la durata dell' animazione.

`@keyframes` specifica cosa succede esattamente all'interno dell'animazione per tutta la durata. Questo viene fatto dando proprietà CSS per specifici "frame" durante l'animazione, con percentuali comprese tra 0% e 100%. Se si confronta questo con un film, le proprietà CSS per 0% è come l'elemento viene mostrato nella scena di apertura. Le proprietà CSS per il 100% sono come l'elemento appare alla fine, proprio prima dei titoli di coda. Quindi il CSS applica la magia per trasferire l'elemento durante la durata data fino all'uscita di scena. Ecco un esempio per illustrare l'utilizzo di `@keyframes` e le proprietà dell'animazione:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Per l'elemento con l'id `anim`, lo snippet di codice qui sopra imposta l'`animation-name` a `colorful` e imposta l'`animation-duration` a 3 secondi. Quindi la regola `@keyframes` si lega alla proprietà di animazione con il nome `colorful`. Imposta il colore a blu all'inizio dell'animazione (0%) e fai in modo che passi a giallo alla fine dell'animazione (100%). Non sei limitato alle transizioni iniziali, puoi impostare le proprietà per l'elemento per qualsiasi percentuale compresa tra 0% e 100%.

# --instructions--

Crea un'animazione per l'elemento con l'id `rect`, impostando l'`animation-name` su `rainbow` e la `animation-duration` a 4 secondi. Successivamente, dichiara una regola `@keyframes`, e imposta il `background-color` all'inizio dell'animazione (`0%`) a blu, al centro dell'animazione (`50%`) a verde, e alla fine dell'animazione (`100%`) a giallo.

# --hints--

L'elemento con id di `rect` dovrebbe avere una proprietà `animation-name` con un valore di `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

L'elemento con id di `rect` dovrebbe avere una proprietà `animation-duration` con un valore di 4s.

```js
assert($('#rect').css('animation-duration') == '4s');
```

La regola `@keyframes` dovrebbe usare l'`animation-name` di `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

La regola `@keyframes` per `rainbow` dovrebbe usare un `background-color` di `blue` allo 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

La regola `@keyframes` per `rainbow` dovrebbe usare un `background-color` di `green` al 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

La regola `@keyframes` per l'arcobaleno dovrebbe usare un `background-color` di `yellow` al 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
