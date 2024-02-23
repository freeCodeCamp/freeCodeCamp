---
id: 587d781c367417b2b2512ac2
title: Die Schriftgröße mehrerer Überschriften festlegen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

Die `font-size`-Eigenschaft wird verwendet, um die Schriftgröße eines Elements festzulegen. Dieselbe Regel kann für mehrere Elemente verwendet werden, um innerhalb einer Seite ein einheitliches Schriftbild zu kreieren. In dieser Aufgabe wirst du die Schriftgrößen aller Überschriften-Tags (`h1` bis `h6`) definieren, um sie einheitlich und ausgeglichen zu proportionieren.

# --instructions--

  <p>Lege innerhalb der <code>style</code>-Tags folgende <code>font-size</code> fest:</p>

  <ul>
    <li><code>h1</code>-Tag auf 68px.</li>
    <li><code>h2</code>-Tag auf 52px.</li>
    <li><code>h3</code>-Tag auf 40px.</li>
    <li><code>h4</code>-Tag auf 32px.</li>
    <li><code>h5</code>-Tag auf 21px.</li>
    <li><code>h6</code>-Tag auf 14px.</li>
  </ul>

# --hints--

Dein Code sollte die Eigenschaft `font-size` für das Tag `h1` auf 68 Pixel setzen.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

Dein Code sollte die Eigenschaft `font-size` für das Tag `h2` auf 52 Pixel setzen.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

Dein Code sollte die Eigenschaft `font-size` für das Tag `h3` auf 40 Pixel setzen.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

Dein Code sollte die Eigenschaft `font-size` für das Tag `h4` auf 32 Pixel setzen.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

Dein Code sollte die Eigenschaft `font-size` für das Tag `h5` auf 21 Pixel setzen.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

Dein Code sollte die Eigenschaft `font-size` für das Tag `h6` auf 14 Pixel setzen.

```js
 const fontSizeOfh6 = new __helpers.CSSHelp(document).getStyle('h6')?.getPropertyValue('font-size');
 assert(fontSizeOfh6 === '14px');
```

# --seed--

## --seed-contents--

```html
<style>






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
