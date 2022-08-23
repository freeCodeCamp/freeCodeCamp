---
id: bad87fee1248bd9aedf08824
title: Füge unterschiedliche Außenabstände zu jeder Seite eines Elementes hinzu
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

Manchmal willst du ein Element so anpassen, dass es auf jeder seiner Seiten einen anderen `margin` hat.

Mit CSS kannst du den `margin` aller vier einzelnen Seiten eines Elements mit den Eigenschaften `margin-top`, `margin-right`, `margin-bottom` und `margin-left` steuern.

# --instructions--

Gib der blauen Box einen `margin` von `40px` an ihrer oberen und linken Seite, aber nur `20px` an ihrer unteren und rechten Seite.

# --hints--

Deine `blue-box`-Klasse sollte der oberen Seite der Elemente `40px` `margin` zuweisen.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Deine `blue-box`-Klasse sollte der rechten Seite der Elemente `20px` `margin` zuweisen.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Deine `blue-box`-Klasse sollte der unteren Seite der Elemente `20px` `margin` zuweisen.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Deine `blue-box`-Klasse sollte der linken Seite der Elemente `40px` `margin` zuweisen.

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
