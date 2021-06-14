---
id: bad87fee1248bd9aedf08824
title: Aggiungere margini differenti ad ogni lato di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

A volte si vuole personalizzare un elemento in modo che abbia un `margin` diverso su ciascuno dei suoi lati.

CSS consente di controllare il `margin` di tutti e quattro i lati di un elemento con le proprietà `margin-top`, `margin-right`, `margin-bottom`e `margin-left`.

# --instructions--

Dài al riquadro blu un `margin` di `40px` sul lato superiore e sinistro, ma di soli `20px` sul lato inferiore e destro.

# --hints--

La tua classe `blue-box` dovrebbe dare alla parte superiore degli elementi `40px` di `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

La tua classe `blue-box` dovrebbe dare alla parte destra degli elementi `20px` di `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte inferiore degli elementi `20px` di `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte sinistra degli elementi `40px` di `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
