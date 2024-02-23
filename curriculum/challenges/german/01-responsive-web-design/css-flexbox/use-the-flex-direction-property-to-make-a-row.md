---
id: 587d78ab367417b2b2512af2
title: Verwende die flex-direction Eigenschaft um eine Zeile zu bilden
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

Durch Hinzufügen von `display: flex` wird ein Element zu einem Flex-Container. Dies ermöglicht es Unterelemente dieses Elements in Zeilen oder Spalten auszurichten. Du erreichst dies, indem du eine `flex-direction` Eigenschaft zum Elternelement hinzufügst und sie auf "row" (engl. Zeile) oder "column" (engl. Spalte) setzt. Durch Erstellen einer "row" werden die Unterelemente horizontal ausgerichtet und eine "column" ordnet sie vertikal an.

Weitere Optionen für `flex-direction` sind `row-reverse` und `column-reverse`.

**Hinweis:** Der Defaultwert der `flex-direction` Eigenschaft ist `row`.

# --instructions--

Füge die CSS-Eigenschaft `flex-direction` zum Element `#box-container` hinzu und gib ihm einen Wert von `row-reverse`.

# --hints--

Das `#box-container` Element sollte eine `flex-direction` Eigenschaft mit Wert `row-reverse` haben.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
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
    flex-direction: row-reverse;
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
