---
id: 587d78ad367417b2b2512afb
title: Verwende die flex-shrink Eigenschaft um Elemente zu schrumpfen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

Bisher gelten alle Eigenschaften in den Aufgaben für den Flex-Container (das übergeordnete Element der Flex-Elemente). Es gibt jedoch mehrere nützliche Eigenschaften für Flex-Elemente.

Die erste ist die `flex-shrink` Eigenschaft. Wenn man sie verwendet, erlaubt es einem Element zu schrumpfen, falls der Flex-Container zu klein ist. Elemente schrumpfen, wenn die Breite des übergeordneten Containers kleiner ist als die kombinierte Breite aller Flex-Elemente in diesem Container.

Die `flex-shrink` Eigenschaft akzeptiert Zahlen als Werte. Umso größer die Zahl, desto stärker wird das Element schrumpfen, verglichen mit anderen Elementen im selben Container. Hat zum Beispiel ein Element einen `flex-shrink` Wert von `1` und ein anderes einen `flex-shrink` Wert von `3`, dann wird das mit dem Wert von `3` dreimal so viel schrumpfen wie das andere.

# --instructions--

Füge die CSS-Eigenschaft `flex-shrink` zu `#box-1` und `#box-2` hinzu. Gib `#box-1` einen Wert von `1` und `#box-2` einen Wert von `2`.

# --hints--

Das `#box-1` Element sollte eine `flex-shrink` Eigenschaft mit Wert `1` haben.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

Das `#box-2` Element sollte eine `flex-shrink` Eigenschaft mit einem Wert von `2` haben.

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
