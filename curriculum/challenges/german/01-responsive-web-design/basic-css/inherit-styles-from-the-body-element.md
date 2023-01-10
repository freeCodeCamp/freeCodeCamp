---
id: bad87fee1348bd9aedf08746
title: Vererbung von Stilen aus dem Body-Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Jetzt haben wir bewiesen, dass jede HTML-Seite ein `body`-Element hat, und dass das `body`-Element auch mit CSS gestylt werden kann.

Denke daran, dass du dein `body`-Element wie jedes andere HTML-Element stylen kannst, und alle anderen Elemente die Stile deines `body`-Elements erben werden.

# --instructions--

Erstelle zuerst ein `h1`-Element mit dem Text `Hello World`

Dann geben wir allen Elementen auf deiner Seite die Farbe `green` (grün), indem wir `color: green;` zur Style-Deklaration deines `body`-Elements hinzufügen.

Zum Schluss gibst du deinem `body`-Element die Schriftart `monospace`, indem du `font-family: monospace;` zur Style-Deklaration deines `body`-Elements hinzufügst.

# --hints--

Du solltest ein `h1`-Element erstellen.

```js
assert($('h1').length > 0);
```

Dein `h1`-Element sollte den Text `Hello World` haben.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Dein `h1`-Element sollte ein schließenden Tag haben.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Dein `body`-Element sollte den Wert `green` in der Eigenschaft `color` haben.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Dein `body`-Element sollte den Wert `monospace` in der Eigenschaft `font-family` haben.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Dein `h1`-Element sollte die Schriftart `monospace` von deinem `body`-Element erben.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Dein `h1`-Element sollte die Farbe `green` deines `body`-Elements übernehmen.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

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
