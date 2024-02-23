---
id: bad87fee1348bd9aedf08756
title: Priorisiere einen Stil über einen anderen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

Manchmal werden deine HTML-Elemente mehrere Stile erhalten, die miteinander in Konflikt stehen.

Zum Beispiel kann dein `h1`-Element nicht grün und pink gleichzeitig sein.

Sehen wir mal was passiert, wenn wir eine Klasse erstellen die Text pink färbt und es auf ein Element anwenden. Wird unsere Klasse die CSS-Eigenschaft `color: green;` unseres `body`-Elements *überschreiben*?

# --instructions--

Erstelle eine CSS-Klasse namens `pink-text`, die einem Element die Farbe Pink gibt.

Weise deinem `h1`-Element die Klasse `pink-text` zu.

# --hints--

Dein `h1`-Element sollte die Klasse `pink-text` besitzen.

```js
assert($('h1').hasClass('pink-text'));
```

Dein `<style>` sollte eine `pink-text` CSS-Klasse haben, die `color` ändert.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
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
</style>
<h1>Hello World!</h1>
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
</style>
<h1 class="pink-text">Hello World!</h1>
```
