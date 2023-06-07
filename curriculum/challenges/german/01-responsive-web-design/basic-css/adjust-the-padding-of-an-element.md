---
id: bad88fee1348bd9aedf08825
title: Das Padding eines Elements anpassen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Jetzt legen wir unsere Cat Photo App für eine Weile beiseite und lernen mehr über das Styling von HTML.

Du hast es vielleicht schon bemerkt, aber alle HTML-Elemente sind im Wesentlichen kleine Rechtecke.

Drei wichtige Eigenschaften steuern den Raum, der jedes HTML-Element umgibt: `padding`, `border` und `margin`.

Das `padding` eines Elements bestimmt den Abstand zwischen dem Inhalt eines Elements und dessen `border`.

Hier können wir sehen, dass die blaue Box und die rote Box in der gelben Box verschachtelt sind. Beachte, dass die rote Box mehr `padding` als die blaue hat.

Wenn man das `padding` der blauen Box erhöht, wird der Abstand (`padding`) zwischen dem Text und dem Rand darum erhöht.

# --instructions--

Ändere das `padding` deiner blauen Box so, dass es dem deiner roten Box entspricht.

# --hints--

Deine `blue-box`-Klasse sollte den Elementen `20px` `padding` geben.

```js
assert($('.blue-box').css('padding-top') === '20px');
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
