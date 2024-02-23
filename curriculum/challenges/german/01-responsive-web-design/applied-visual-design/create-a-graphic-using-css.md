---
id: 587d78a6367417b2b2512add
title: Erstelle eine Grafik mit CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

Durch die Bearbeitung verschiedener Selektoren und Eigenschaften kannst du interessante Formen erzeugen. Eine der Einfacheren ist eine Mondsichelform. Für diese Aufgabe musst du mit der Eigenschaft `box-shadow` arbeiten, die den Schatten eines Elements festlegt, zusammen mit der Eigenschaft `border-radius`, die die Rundheit der Ecken steuert.

Du erstellst ein rundes, transparentes Objekt mit einem scharfen Schatten, der leicht zur Seite versetzt ist. Der Schatten wird die tatsächliche Mondform ergeben, die du siehst.

Um ein rundes Objekt zu erzeugen, sollte die Eigenschaft `border-radius` auf einen Wert von 50 % gesetzt werden.

Vielleicht erinnerst du dich aus einer früheren Aufgabe daran, dass die `box-shadow` Eigenschaft Werte in folgender Reihenfolge `offset-x`, `offset-y`, `blur-radius`, `spread-radius` und `color` annehmen kann. Die Werte `blur-radius` und `spread-radius` sind optional.

# --instructions--

Verändere das quadratische Element im Editor, um die Mondform zu erzeugen. Ändere zunächst die `background-color` auf `transparent` und setze dann die Eigenschaft `border-radius` auf 50 %, um die Kreisform zu erzeugen. Anschließend änderst du noch die `box-shadow` Eigenschaft und setzt `offset-x` auf 25px, `offset-y` auf 10px, `blur-radius` auf 0, `spread-radius` auf 0, und `color` auf `blue`.

# --hints--

Der Wert der Eigenschaft `background-color` sollte auf `transparent` gesetzt werden.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

Der Wert der Eigenschaft `border-radius` sollte auf `50%` gesetzt werden.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

Der Wert der `box-shadow` Eigenschaft sollte 25px für `offset-x`, 10px für `offset-y`, 0 für `blur-radius`, 0 für `spread-radius`, und schließlich `blue` für `color` betragen.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
