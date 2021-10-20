---
id: bad82fee1348bd9aedf08721
title: Usare RGB per mescolare i colori
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Proprio come con il codice esadecimale, puoi mescolare i colori in RGB utilizzando combinazioni di valori diversi.

# --instructions--

Sostituisci i codici esadecimali nel nostro elemento `style` con i loro valori RGB corretti.

<table class='table table-striped'><tbody><tr><th>Colore</th><th>RGB</th></tr><tr><td>Blu</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Rosso</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchidea</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Siena</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

Il tuo elemento `h1` con il testo `I am red!` dovrebbe avere un `color` rosso.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Dovresti usare `rgb` per il colore rosso.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

Il tuo elemento `h1` con il testo `I am orchid!` dovrebbe avere un `color` orchidea.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Dovresti usare `rgb` per il colore orchidea.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

Il tuo elemento `h1` con il testo `I am blue!` dovrebbe avere un `color` blu.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Dovresti usare `rgb` per il colore blu.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

Il tuo elemento `h1` con il testo `I am sienna!` dovrebbe avere un `color` siena.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Dovresti usare `rgb` per il colore siena.

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
