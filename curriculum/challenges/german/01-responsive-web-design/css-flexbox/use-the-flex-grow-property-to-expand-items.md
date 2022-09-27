---
id: 587d78ae367417b2b2512afc
title: Verwende die flex-grow Eigenschaft, um Elemente auszudehnen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

Das Gegenteil von `flex-shrink` ist die `flex-grow` Eigenschaft. Du erinnerst dich, dass `flex-shrink` die Größe von Elementen kontrolliert, wenn der Container schrumpft. Die `flex-grow` Eigenschaft kontrolliert die Größe von Elementen, wenn sich der Elterncontainer ausdehnt.

Ein Beispiel ähnlich dem aus der letzten Aufgabe wäre, wenn ein Element einen `flex-grow`-Wert von `1` und das andere einen `flex-grow`-Wert von `3` hat, wächst das Element mit dem Wert `3` dreimal so stark wie das andere.

# --instructions--

Füge die CSS-Eigenschaft `flex-grow` zur `#box-1` und zu `#box-2` hinzu. Gib `#box-1` einen Wert von `1` und `#box-2` einen Wert von `2`.

# --hints--

Das `#box-1` Element sollte eine `flex-grow` Eigenschaft mit Wert `1` haben.

```js
assert($('#box-1').css('flex-grow') == '1');
```

Das `#box-2` Element sollte eine `flex-grow` Eigenschaft mit Wert `2` haben.

```js
assert($('#box-2').css('flex-grow') == '2');
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

  }

  #box-2 {
    background-color: orangered;
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
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
