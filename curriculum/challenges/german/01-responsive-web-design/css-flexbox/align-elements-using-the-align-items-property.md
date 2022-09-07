---
id: 587d78ad367417b2b2512af8
title: Ausrichten von Elementen mit der Eigenschaft align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

Die Eigenschaft `align-items` ähnelt `justify-content`. Erinnere dich daran, dass die Eigenschaft `justify-content` die Flex-Elemente entlang der Hauptachse ausrichtet. Bei Reihen ist die Hauptachse eine horizontale Linie und bei Spalten eine vertikale Linie.

Flex-Container haben auch eine **Querachse (cross axis)**, die der Hauptachse entgegengesetzt ist. Bei Zeilen ist die Querachse vertikal und bei Spalten horizontal.

CSS bietet die Eigenschaft `align-items`, um Flex-Elemente an der Querachse auszurichten. Für eine Zeile teilt sie CSS mit, wie die Elemente in der gesamten Zeile innerhalb des Containers nach oben oder unten verschoben werden sollen. Und bei einer Spalte, wie man alle Elemente innerhalb des Containers nach links oder rechts schiebt.

Die verschiedenen verfügbaren Werte für `align-items` beinhalten:

<ul><li><code>flex-start</code>: Richtet die Elemente am Anfang des Flex-Containers aus. Bei Reihen werden die Elemente am oberen Rand des Containers ausgerichtet. Bei Spalten werden die Elemente auf der linken Seite des Containers ausgerichtet.</li><li><code>flex-end</code>: Richtet Elemente am Ende des Flex-Containers aus. Bei Reihen werden die Elemente am unteren Rand des Containers ausgerichtet. Bei Spalten werden die Elemente auf der rechten Seite des Containers ausgerichtet.</li><li><code>center</code>: Richtet die Elemente in der Mitte aus. Bei Zeilen werden die Elemente vertikal ausgerichtet (gleicher Abstand über und unter den Elementen). Bei Spalten werden sie horizontal ausgerichtet (gleicher Abstand links und rechts von den Elementen).</li><li><code>stretch</code>: Streckt die Elemente, um den Flex-Container zu füllen. Zum Beispiel werden Zeilen so gestreckt, dass sie den Flex-Container von oben nach unten ausfüllen. Dies ist der Standardwert, wenn kein Wert für <code>align-items</code> angegeben wird.</li><li><code>baseline</code>: Richte die Gegenstände an ihren Grundlinien aus. Die Grundlinie ist ein Textkonzept. Stell sie dir als die Linie vor, auf der die Buchstaben stehen.</li></ul>

# --instructions--

Ein Beispiel hilft diese Eigenschaft in Aktion zu zeigen. Füge die CSS-Eigenschaft `align-items` zum Element `#box-container` hinzu und gib ihr den Wert `center`.

**Bonus**  
Probiere die anderen Optionen für die Eigenschaft `align-items` im Code-Editor aus, um ihre Unterschiede zu sehen. Beachte aber, dass der Wert `center` der einzige ist, der diese Aufgabe bestehen kann.

# --hints--

Das Element `#box-container` sollte eine Eigenschaft `align-items` besitzen, die auf den Wert `center` gesetzt ist.

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
