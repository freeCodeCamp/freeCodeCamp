---
id: 587d78ac367417b2b2512af4
title: Verwende die flex-direction Eigenschaft, um eine Spalte zu erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

Die letzten beiden Aufgaben verwendeten die `flex-direction`-Eigenschaft mit dem Wert `row`. Diese Eigenschaft kann auch Spalten erstellen, indem sie die Unterelemente eines Flex-Containers vertikal stapelt.

# --instructions--

Füge die CSS-Eigenschaft `flex-direction` zum `#box-container` Element hinzu und gib ihm einen Wert von `column`.

# --hints--

Das `#box-container` Element sollte eine `flex-direction` Eigenschaft mit Wert `column` besitzen.

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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
    flex-direction: column;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
