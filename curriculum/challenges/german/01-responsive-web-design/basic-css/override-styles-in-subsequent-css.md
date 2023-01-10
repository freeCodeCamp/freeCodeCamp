---
id: bad87fee1348bd9aedf04756
title: Überschreibe Stile mit nachfolgendem CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

Unsere Klasse `pink-text` überschrieb die CSS-Deklaration unseres `body` Elements!

Wir haben gerade gezeigt, dass unsere Klassen das CSS unseres `body`-Elements überschreiben. Die nächste logische Frage ist also, was können wir tun, um unserem Klasse `pink-text` zu überschreiben?

# --instructions--

Schreibe eine weitere CSS-Klasse namens `blue-text`, die ein Element blau färbt. Pass auf, dass sie unter deiner `pink-text` Klassendeklaration steht.

Wende die Klasse `blue-text` auf dein `h1`-Element zusätzlich zu deiner Klasse `pink-text` an und lass uns sehen, wer gewinnt.

Man wendet mehrere Klassenattribute auf ein HTML-Element an, indem man sie mit einem Leerzeichen trennt:

```html
class="class1 class2"
```

**Hinweis:** Es ist egal, in welcher Reihenfolge die Klassen im HTML-Element aufgelistet werden.

Was hingegen wichtig ist, ist die Reihenfolge der `class`-Deklarationen im `<style>`-Abschnitt. Die zweite Deklaration wird immer die erste überschreiben. Da `.blue-text` als zweites deklariert wurde, überschreibt er die Attribute von `.pink-text`.

# --hints--

Dein `h1`-Element sollte die Klasse `pink-text` besitzen.

```js
assert($('h1').hasClass('pink-text'));
```

Dein `h1`-Element sollte die Klasse `blue-text` besitzen.

```js
assert($('h1').hasClass('blue-text'));
```

Sowohl `blue-text` als auch `pink-text` sollten zum selben `h1`-Element gehören.

```js
assert($('.pink-text').hasClass('blue-text'));
```

Dein `h1`-Element sollte blau sein.

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
</style>
<h1 class="pink-text">Hello World!</h1>
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
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
