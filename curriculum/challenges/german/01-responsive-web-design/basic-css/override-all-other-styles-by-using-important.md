---
id: bad87fee1348bd9aedf07756
title: Alle anderen Stile mithilfe des Schlüsselworts important überschreiben
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

Juhu! Wir haben gerade bewiesen, dass Inline-Stile alle CSS-Deklarationen in deinem `style`-Element überschreiben.

Aber warte. Es gibt noch eine letzte Möglichkeit, um CSS zu überschreiben. Dies ist die mächtigste Methode von allen. Aber bevor wir beginnen, gehen wir noch kurz durch, wozu es überhaupt gut sein könnte, CSS zu überschreiben.

In vielen Situationen wirst du CSS-Bibliotheken verwenden. Diese können versehentlich dein eigenes CSS überschreiben. Wenn du also unbedingt sicher sein musst, dass auf ein Element bestimmtes CSS angewandt wird, kannst du `!important` verwenden.

Erinnern wir uns noch einmal an unsere `pink-text`-Klassendeklaration. Erinnere dich, dass unsere `pink-text`-Klasse durch nachfolgende Klassendeklarationen, Id-Deklarationen und Inline-Stile überschrieben wurde.

# --instructions--

Fügen wir nun das Schlüsselwort `!important` zur Farbdeklaration deines pink-text-Elements hinzu, um völlig sicherzustellen, dass dein `h1`-Element pink sein wird.

Hier ist ein Beispiel dazu:

```css
color: red !important;
```

# --hints--

Dein `h1`-Element sollte die Klasse `pink-text` haben.

```js
assert($('h1').hasClass('pink-text'));
```

Dein `h1`-Element sollte die Klasse `blue-text` haben.

```js
assert($('h1').hasClass('blue-text'));
```

Dein `h1`-Element sollte eine `id` namens `orange-text` haben.

```js
assert($('h1').attr('id') === 'orange-text');
```

Dein `h1`-Element sollte den Inline-Stil `color: white` haben.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

Deine `pink-text`-Klassendeklaration sollte das Schlüsselwort `!important` verwenden, um alle anderen Deklarationen zu überschreiben.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Dein `h1`-Element sollte pink sein.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
