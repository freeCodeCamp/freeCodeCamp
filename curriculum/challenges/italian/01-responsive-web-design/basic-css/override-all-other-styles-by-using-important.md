---
id: bad87fee1348bd9aedf07756
title: Sovrascrivere tutti gli altri stili usando Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

Sì! Abbiamo appena dimostrato che gli stili in linea sovrascrivono tutte le dichiarazioni CSS del tuo elemento `style`.

Ma aspetta... C'è un ultimo modo per sovrascrivere CSS. Questo è il metodo più potente di tutti. Prima di farlo però parliamo del perché mai vorresti sovrascrivere i CSS.

In molte situazioni, utilizzerai delle librerie CSS. Queste possono accidentalmente sovrascrivere il CSS scritto da te. Quindi, quando hai assolutamente bisogno di essere sicuro che un elemento abbia un CSS specifico, puoi usare `!important`.

Ritorniamo alla nostra dichiarazione di classe `pink-text`. Ricorda che la nostra classe `pink-text` è stata sovrascritta da successive dichiarazioni di classe, dichiarazioni id e stili in linea.

# --instructions--

Aggiungi la parola chiave `!important` alla dichiarazione del colore dell'elemento pink-text per avere la certezza che il tuo elemento `h1` diventi rosa.

Un esempio di come farlo è il seguente:

```css
color: red !important;
```

# --hints--

Il tuo elemento `h1` dovrebbe avere la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Il tuo elemento `h1` dovrebbe avere la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Il tuo elemento `h1` dovrebbe avere l'`id` di `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Il tuo elemento `h1` dovrebbe avere lo stile inline di `color: white`.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

La tua dichiarazione di classe `pink-text` dovrebbe avere la parola chiave `!important` per sovrascrivere tutte le altre dichiarazioni.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Il tuo elemento `h1` dovrebbe essere rosa.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
