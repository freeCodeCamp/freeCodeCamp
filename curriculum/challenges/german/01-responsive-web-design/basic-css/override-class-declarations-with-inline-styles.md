---
id: bad87fee1348bd9aedf06756
title: Klassendeklarationen mit Inline-Stilen überschreiben
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

Wir haben vorhin gezeigt, dass Id-Deklarationen Klassendeklarationen überschreiben, unabhängig davon, wo sie im CSS eines `style`-Elements definiert werden.

Es gibt noch weitere Möglichkeiten, um CSS zu überschreiben. Erinnerst du dich an Inline-Stile?

# --instructions--

Verwende einen Inline-Stil, um unser `h1`-Element weiß zu machen. Erinnere dich, dass Inline-Stile so aussehen:

```html
<h1 style="color: green;">
```

Lass die `blue-text` und `pink-text`-Klassen auf deinem `h1`-Element.

# --hints--

Dein `h1`-Element sollte die Klasse `pink-text` haben.

```js
assert($('h1').hasClass('pink-text'));
```

Dein `h1`-Element sollte die Klasse `blue-text` haben.

```js
assert($('h1').hasClass('blue-text'));
```

Dein `h1`-Element sollte die Id `orange-text` haben.

```js
assert($('h1').attr('id') === 'orange-text');
```

Dein `h1`-Element sollte einen Inline-Stil haben.

```js
assert(document.querySelector('h1[style]'));
```

Dein `h1`-Element sollte weiß sein.

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
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
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
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
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
