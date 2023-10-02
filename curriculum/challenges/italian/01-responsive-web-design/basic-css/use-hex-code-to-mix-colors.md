---
id: bad87fee1348bd9aedf08721
title: Usare il codice esadecimale per mescolare i colori
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

Per ripassare, i codici esadecimali utilizzano 6 cifre esadecimali per rappresentare i colori, due ciascuna per le componenti rossa (R), verde (G) e blu (B).

Da questi tre colori puri (rosso, verde e blu), possiamo variare la quantità di ciascuno per creare oltre 16 milioni di altri colori!

Ad esempio, l'arancione è rosso puro, mescolato con un po' di verde e niente blu. In codice esadecimale, questo si traduce in `#FFA500`.

La cifra `0` è il numero più basso in codice esadecimale e rappresenta una completa assenza di quel colore.

La cifra `F` è il numero più alto in codice esadecimale e rappresenta la massima luminosità possibile.

# --instructions--

Sostituisci i nomi dei colori nel nostro elemento `style` con i codici esadecimali corretti.

<table class='table table-striped'><tbody><tr><th>Colore</th><th>Codice esadecimale</th></tr><tr><td>Blu Dodger</td><td><code>#1E90FF</code></td></tr><tr><td>Verde</td><td><code>#00FF00</code></td></tr><tr><td>Arancione</td><td><code>#FFA500</code></td></tr><tr><td>Rosso</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

Il tuo elemento `h1` con il testo `I am red!` dovrebbe ricevere un `color` rosso.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

L'`hex code` per il colore rosso dovrebbe essere utilizzato al posto della parola `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

Al tuo elemento `h1` con il testo `I am green!` dovrebbe essere assegnato un `color` verde.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

L'`hex code` per il colore verde dovrebbe essere utilizzato al posto della parola `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

Al tuo elemento `h1` con il testo `I am dodger blue!` dovrebbe essere assegnato un `color` dodger blue.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

L'`hex code` per il colore blu dodger dovrebbe essere usato al posto della parola `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

Il tuo elemento `h1` con il testo `I am orange!` dovrebbe ricevere il `color` arancione.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

L'`hex code` per il colore arancione dovrebbe essere utilizzato al posto della parola `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
