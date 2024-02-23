---
id: 587d7dbd367417b2b2512bb4
title: Daten mit Sass-Variablen speichern
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Eine Eigenschaft von Sass, die sich von CSS unterscheidet, ist die Verwendung von Variablen. Sie werden deklariert und festgelegt, um Daten zu speichern, ähnlich wie bei JavaScript.

In JavaScript werden Variablen mit den Schlüsselwörtern `let` und `const` definiert. In Sass beginnen Variablen mit einem `$`, gefolgt von dem Variablennamen.

Hier sind ein paar Beispiele:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

Und um die Variablen zu nutzen:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

Ein Beispiel, bei dem Variablen nützlich sind, ist, wenn mehrere Elemente die gleiche Farbe haben müssen. Wenn diese Farbe geändert wird, kann der Code nur am Variablenwert bearbeitet werden.

# --instructions--

Erstelle eine Variable `$text-color` und setze sie auf `red`. Dann ändere den Wert der Eigenschaft `color` für den `.blog-post` und `h2` auf die Variable `$text-color`.

# --hints--

In deinem Code sollte eine Sass-Variable für `$text-color` mit einem Wert von `red` deklariert sein.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

Dein Code sollte die Variable `$text-color` verwenden, um die Farbe (`color`) für die Elemente `.blog-post` und `h2` zu ändern.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

Dein Element `.blog-post` sollte `color` gleich red sein.

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

Deine `h2`-Elemente sollten `color` gleich red sein.

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
