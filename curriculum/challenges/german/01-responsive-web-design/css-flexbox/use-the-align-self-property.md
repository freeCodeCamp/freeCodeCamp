---
id: 587d78af367417b2b2512b00
title: Verwende die Eigenschaft align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

Die letzte Eigenschaft für Flex-Elemente ist `align-self`. Diese Eigenschaft erlaubt dir, die Ausrichtung für jedes Element individuell festzulegen, anstatt sie alle auf einmal zu definieren. Dies ist nützlich, da andere übliche Anpassungstechniken mit den CSS-Eigenschaften `float`, `clear`, und `vertical-align` nicht auf Flex-Elemente funktionieren.

`align-self` akzeptiert die gleichen Werte wie `align-items` und wird jegliche Werte überschreiben, die von der `align-items` Eigenschaft gesetzt wurden.

# --instructions--

Füge die CSS-Eigenschaft `align-self` sowohl zur `#box-1` als auch zur `#box-2` hinzu. Gib `#box-1` einen Wert von `center` und `#box-2` den Wert `flex-end`.

# --hints--

Das `#box-1` Element sollte eine `align-self` Eigenschaft mit einem Wert von `center` haben.

```js
assert($('#box-1').css('align-self') == 'center');
```

Auf dem `#box-2` Element sollte die `align-self` Eigenschaft auf `flex-end` gesetzt sein.

```js
assert($('#box-2').css('align-self') == 'flex-end');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
