---
id: bad87fee1348bd9aede08718
title: Färbe Elemente mit RGB-Werten
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

Eine andere Möglichkeit, wie du Farben in CSS darstellen kannst, ist die Verwendung von `RGB` Werten.

Der `RGB` Wert für schwarz sieht folgendermaßen aus:

```css
rgb(0, 0, 0)
```

Der `RGB` Wert für weiß sieht folgendermaßen aus:

```css
rgb(255, 255, 255)
```

Anstatt Hexadezimalstellen zu verwenden, wie man das bei Hex-Codes tut, definiert man bei `RGB` die Helligkeit der einzelnen Farben mit einer Zahl zwischen 0 und 255.

Wenn man das durchrechnet, entsprechen die zwei Stellen einer Farbe 16 mal 16, was uns insgesamt 256 Werte liefert. Somit bietet `RGB`, bei dem man mit 0 zu zählen beginnt, die gleiche Anzahl möglicher Werte wie Hex-Code.

Hier ist ein Beispiel, wie du die Hintergrundfarbe von `body` mit einem RGB-Code auf Orange ändern kannst.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

Lass uns den Hex-Code der Hintergrundfarbe unseres `body` Elements mit einem RGB-Wert auf Schwarz ändern: `rgb(0, 0, 0)`

# --hints--

Dein `body` Element sollte einen schwarzen Hintergrund haben.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Du solltest `rgb` verwenden, um deinem `body` Element einen schwarzen Hintergrund zu geben.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
