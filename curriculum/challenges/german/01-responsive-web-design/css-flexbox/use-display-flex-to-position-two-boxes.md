---
id: 587d78ab367417b2b2512af0
title: 'Verwende display: flex um zwei Boxen anzuordnen'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Dieser Abschnitt verwendet wechselnde Übungsarten, um zu zeigen, wie flexibel man mit CSS Elemente platzieren kann. Im ersten Teil einer Aufgabe wird je Theorie erklärt, dann folgt eine praktische Übung mit einer Tweet-Komponente, auf die wir das Flexbox-Konzept anwenden.

Nachdem du einem Element die Eigenschaft `display: flex;` zuweist, hast du die Möglichkeit, mit weiteren Flex-Eigenschaften Seiten responsive zu gestalten.

# --instructions--

Füge die CSS-Eigenschaft `display` zu `#box-container` hinzu und setze seinen Wert auf `flex`.

# --hints--

`#box-container` sollte eine `display` Eigenschaft mit einem Wert von `flex` besitzen.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
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
    height: 500px;
    display: flex;
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
