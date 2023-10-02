---
id: 587d78a5367417b2b2512ad7
title: Usare un gradiente lineare CSS per creare un elemento a strisce
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

La funzione `repeating-linear-gradient()` è molto simile a `linear-gradient()` con la differenza che ripete il motivo del gradiente specificato. `repeating-linear-gradient()` accetta una varietà di valori, ma per semplicità in questa sfida lavorerai solo con l'angolo e il punto finale del colore.

Il valore dell'angolo è la direzione del gradiente. Gli stop di colore sono come valori di larghezza che segnano dove avviene una transizione, e sono assegnati con una percentuale o un numero di pixel.

Nell'esempio mostrato nell'editor di codice, il gradiente inizia con un colore `yellow` a 0 pixel che si fonde nel secondo colore `blue` a 40 pixel di distanza dall'inizio. Dal momento che il prossimo stop di colore è anch'esso a 40 pixel, il gradiente cambia immediatamente al terzo colore `green`, che a sua volta si fonde nel quarto colore `red` quando è lontano 80 pixel dall'inizio del gradiente.

Per questo esempio, aiuta pensare gli stop di colore a coppie, dove due colori si fondono insieme.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

Se ogni due valori di stop abbiamo lo stesso colore, la miscelazione non è evidente perché è tra lo stesso colore, seguito da una transizione repentina verso il colore successivo, e questo produce le strisce.

# --instructions--

Crea le strisce cambiando il `repeating-linear-gradient()` per usare un angolo di gradiente di `45deg`, quindi imposta i primi due color stop a `yellow`, e infine i secondi due color stop a `black`.

# --hints--

L'angolo del `repeating-linear-gradient()` dovrebbe essere di 45 gradi.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

L'angolo del `repeating-linear-gradient()` dovrebbe essere di 90 gradi

```js
assert(!code.match(/90deg/gi));
```

La fermata del colore a 0 pixel dovrebbe essere `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

Il primo stop di colore a 40 pixel dovrebbe essere `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

Il secondo color stop a 40 pixel dovrebbe essere `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

L'ultimo color stop a 80 pixel dovrebbe essere `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
