---
id: bad87fee1348bd9afdf08726
title: Verwende die Notation im Uhrzeigersinn, um den Margin eines Elements festzulegen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Versuchen wir es noch einmal, aber diesmal mit `margin`.

Anstatt die Eigenschaften `margin-top`, `margin-right`, `margin-bottom` und `margin-left` eines Elements einzeln zu definieren, kannst du sie alle in einer Zeile angeben, etwa so:

```css
margin: 10px 20px 10px 20px;
```

Diese vier Werte funktionieren wie der Uhrzeigersinn: oben, rechts, unten, links und erzeugen genau das gleiche Ergebnis wie die seitenspezifische Margin-Anweisungen.

# --instructions--

Verwende im Uhrzeigersinnnotation um dem Element mit der `blue-box`-Klasse einen Rand von `40px` auf der oberen und linken Seite zu geben aber nur `20px` auf der unteren und rechten Seite.

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

Du solltest die Uhrzeigersinnnotation verwenden, um den Rand der `blue-box`-Klasse festzulegen.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
