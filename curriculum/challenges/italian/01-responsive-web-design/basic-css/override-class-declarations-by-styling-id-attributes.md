---
id: bad87fee1348bd8aedf06756
title: Sovrascrivere le dichiarazioni di classe stilizzando gli attributi ID
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

Abbiamo appena dimostrato che i browser leggono CSS dall'alto al basso, in ordine di dichiarazione. Ciò significa che, in caso di conflitto, il browser utilizzerà la dichiarazione CSS che è arrivata per ultima. Nota che se avessimo messo `blue-text` prima di `pink-text` nelle classi dell'elemento `h1`, il browser rispetterebbe ancora l'ordine di dichiarazione e non l'ordine con cui vengono usate!

Però non abbiamo ancora finito. Ci sono altri modi in cui puoi sovrascrivere il CSS. Ti ricordi gli attributi id?

Sovrascrivi le tue classi `pink-text` e `blue-text`, e rendi il tuo elemento `h1` arancione, dando all'elemento `h1` un id e poi stilizzando questo id.

# --instructions--

Dai al tuo elemento `h1` l'attributo `id` di `orange-text`. Ricorda, gli id di stile appaiono così:

```html
<h1 id="orange-text">
```

Lascia le classi `blue-text` e `pink-text` sul tuo elemento `h1`.

Crea una dichiarazione CSS per il tuo id `orange-text` nel tuo elemento`style`. Ecco un esempio di come questo appare:

```css
#brown-text {
  color: brown;
}
```

**Nota:** Non importa se dichiari questo CSS sopra o sotto la classe `pink-text`, dato che l'attributo `id` avrà sempre la priorità.

# --hints--

Il tuo elemento `h1` dovrebbe avere la classe `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

L'elemento `h1` dovrebbe avere la classe `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Il tuo elemento `h1` dovrebbe avere l'id di `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Dovrebbe esserci un solo elemento `h1`.

```js
assert($('h1').length === 1);
```

Il tuo id `orange-text` dovrebbe avere una dichiarazione CSS.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Il tuo tag `h1` non dovrebbe avere alcun attributo `style`.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Il tuo elemento `h1` dovrebbe essere arancione.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
