---
id: 587d78ad367417b2b2512afa
title: Verwende die flex-wrap Eigenschaft, um Zeilen oder Spalten umzubrechen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS-Flexbox bietet die Möglichkeit einen Flex-Container in mehrere Zeilen (oder Spalten) aufzuteilen. Standardmäßig wird ein Flex-Container alle Elemente zusammensetzen. Zum Beispiel würde eine "row" eine einzige Zeile bilden.

Die `flex-wrap` Eigenschaft hingegen sorgt dafür, dass Elemente umgebrochen werden. Das bedeutet, dass extra Element in eine neue Zeile oder Spalte wandern. Der Punkt an dem umgebrochen wird, hängt von der Größe der Elemente und der des Containers ab.

In CSS gibt es auch Einstellungsmöglichkeiten für die Richtung des Umbruchs:

<ul><li><code>nowrap</code>: ist der Standardwert und bricht die Elemente nicht um.</li><li><code>wrap</code>: bricht Elemente auf mehrere Zeilen von oben nach unten um, wenn sie in Zeilen stehen und von links nach rechts, wenn sie in Spalten stehen.</li><li><code>wrap-reverse</code>: bricht Elemente auf mehrere Zeilen von unten nach oben um, wenn sie in Zeilen stehen, und von rechts nach links, wenn sie in Spalten stehen.</li></ul>

# --instructions--

Das aktuelle Layout hat zu viele Boxen in einer Zeile. Füge die CSS-Eigenschaft `flex-wrap` zum `#box-container` Element hinzu und gib ihm einen Wert von `wrap`.

# --hints--

Das `#box-container` Element sollte eine `flex-wrap` Eigenschaft mit einem Wert von `wrap` haben.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
