---
id: bad87fee1348bd9aedf08826
title: Verwende die Notation im Uhrzeigersinn, um das Padding eines Elements zu definieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

Anstatt die Eigenschaften `padding-top`, `padding-right`, `padding-bottom` und `padding-left` eines Elements einzeln anzugeben, kannst du sie alle in einer Zeile angeben, wie hier:

```css
padding: 10px 20px 10px 20px;
```

Diese vier Werte funktionieren wie der Uhrzeigersinn: oben, rechts, unten, links und erzeugen genau das gleiche Ergebnis wie die seitenspezifische Padding-Anweisungen.

# --instructions--

Verwende die Uhrzeigersinnnotation um dem Element mit der `.blue-box`-Klasse einen `padding` von `40px` auf der oberen und linken Seite zu geben aber nur `20px` auf der unteren und rechten Seite.

# --hints--

Deine `blue-box`-Klasse sollte der oberen Seite der Elemente `40px` `padding` zuweisen.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Deine `blue-box`-Klasse sollte der rechten Seite der Elemente `20px` `padding` zuweisen.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Deine `blue-box`-Klasse sollte der unteren Seite der Elemente `20px` `padding` zuweisen.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Deine `blue-box`-Klasse sollte der linken Seite der Elemente `40px` `padding` zuweisen.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

Du solltest die Uhrzeigersinnnotation verwenden, um das Padding der `blue-box`-Klasse festzulegen.

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
