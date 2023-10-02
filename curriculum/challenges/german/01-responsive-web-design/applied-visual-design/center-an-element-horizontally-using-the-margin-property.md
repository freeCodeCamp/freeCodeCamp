---
id: 587d78a3367417b2b2512ad0
title: Ein Element mithilfe der Margin-Eigenschaft horizontal zentrieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Eine weitere Positionierungstechnik ist es, ein Block-Element horizontal zu zentrieren. Beispielsweise, in dem man seine `margin` auf einen Wert 'auto' setzt.

Diese Methode funktioniert auch für Bilder. Sie sind standardmäßig Inline-Elemente, die in Block-Elemente geändert werden können, indem man die `display`-Eigenschaft auf `block` setzt.

# --instructions--

Zentriere das `div` auf dieser Seite, indem du eine `margin`-Eigenschaft mit einem Wert von `auto` hinzufügst.

# --hints--

Das `div` sollte eine `margin` mit einem Wert von `auto` haben.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
