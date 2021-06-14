---
id: bad87fee1348bd9aedf08824
title: Aggiungere un padding diverso su ogni lato di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

A volte si vuole personalizzare un elemento in modo che abbia un diverso `padding` (imbottitura) su ciascuno dei suoi lati.

CSS consente di controllare il `padding` di tutti e quattro i lati di un elemento con le proprietà `padding-top`, `padding-right`, `padding-bottom`e `padding-left`.

# --instructions--

Assegna al riquadro blu un `padding` di `40px` sul lato superiore e sinistro, ma di soli `20px` sul lato inferiore e destro.

# --hints--

La tua classe `blue-box` dovrebbe dare alla parte superiore degli elementi `40px` di `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

La tua classe `blue-box` dovrebbe dare alla parte destra degli elementi `20px` di `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte inferiore degli elementi `20px` di `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte sinistra degli elementi `40px` di `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
