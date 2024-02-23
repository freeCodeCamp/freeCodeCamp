---
id: bad87fee1348bd9aedf08822
title: Regolare il margine di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

Il `margin` di un elemento controlla la quantità di spazio tra il suo `border` e gli elementi circostanti.

Qui possiamo vedere che il riquadro blu e quello rosso sono annidati all'interno del riquadro giallo. Nota che il riquadro rosso ha un `margin` più grande di quello blu, e questo fa sì che appaia più piccolo.

Quando si aumenta il `margin` del riquadro blu, esso aumenta la distanza tra il suo bordo e gli elementi circostanti.

# --instructions--

Cambia il `margin` del riquadro blu per farlo corrispondere a quello del riquadro rosso.

# --hints--

La tua classe `blue-box` dovrebbe dare agli elementi `20px` di `margin`.

```js
assert($('.blue-box').css('margin-top') === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
