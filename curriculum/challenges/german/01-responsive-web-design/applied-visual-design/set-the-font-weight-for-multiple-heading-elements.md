---
id: 587d781c367417b2b2512ac3
title: Die Schriftstärke für mehrere Überschriften-Tags festlegen
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

In der letzten Aufgabe hast du die Schriftgröße (`font-size`) für alle Überschriften-Tags definiert. Nun wirst du ihre Schriftstärke (`font-weight`) anpassen.

Die Eigenschaft `font-weight` legt fest, wie dick oder dünn Schriftzeichen in einem Textabschnitt sind.

# --instructions--

<ul><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h1</code>-Tags auf 800.</li><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h2</code>-Tags auf 600.</li><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h3</code>-Tags auf 500.</li><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h4</code>-Tags auf 400.</li><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h5</code>-Tags auf 300.</li><li>Setze die <code>font-weight</code>-Eigenschaft des <code>h6</code>-Tags auf 200.</li></ul>

# --hints--

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h1` auf 800 setzen.

```js
assert($('h1').css('font-weight') == '800');
```

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h2` auf 600 setzen.

```js
assert($('h2').css('font-weight') == '600');
```

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h3` auf 500 setzen.

```js
assert($('h3').css('font-weight') == '500');
```

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h4` auf 400 setzen.

```js
assert($('h4').css('font-weight') == '400');
```

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h5` auf 300 setzen.

```js
assert($('h5').css('font-weight') == '300');
```

Dein Code sollte die Eigenschaft `font-weight` für das Tag `h6` auf 200 setzen.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
