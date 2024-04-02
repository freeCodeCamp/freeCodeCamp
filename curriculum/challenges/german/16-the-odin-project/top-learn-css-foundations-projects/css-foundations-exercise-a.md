---
id: 63ee3f71381756f9716727ef
title: CSS-Grundlagen Übung A
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Objective:** In dieser Übung wirst du üben, CSS zu einer HTML-Datei hinzuzufügen, und zwar mit allen drei Methoden: externes CSS, internes CSS und Inline-CSS. In dieser Übung solltest du nur Typselektoren verwenden, wenn du Stile über die externen und internen Methoden hinzufügst. Du solltest auch Schlüsselwörter für Farben verwenden (z.B. "blau"), anstatt `RGB`- oder `HEX`-Werte zu verwenden.

## User Stories

1. Du solltest ein `div`-Element mit einem `red` -Hintergrund, `white`-Text, einer Schriftgröße von `32px`, zentriert ausgerichtet und `bold` sehen.

1. Das CSS des `div`-Elements sollte extern mit Hilfe eines Typ-Selektors hinzugefügt werden.

1. Du solltest ein `p`-Element mit einem `green`-Hintergrund, `white`-Text und einer Schriftgröße von `18px` sehen.

1. Das CSS des `p`-Elements sollte intern unter Verwendung eines Typ-Selektors hinzugefügt werden.

1. Du solltest ein `button`-Element mit einem `orange` Hintergrund und einer Schriftgröße von `18px` sehen.

1. Das CSS des `button`-Elements sollte einen Inline-Stil haben.

# --hints--

Es sollte ein `div`-Element geben. Es sollte etwas Text enthalten und in der Mitte ausgerichtet sein.

```js
const aligned = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('text-align');

assert(aligned === 'center');
assert(document.getElementsByTagName('DIV')?.length == 1);
assert(document.getElementsByTagName('DIV')?.[0]?.innerText.length > 0)
```

The `div` element should have a `background-color` of `red` and a text color of `white`.

```js

const bgc = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');

const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(bgc === 'red');
assert(color === 'white');
```

Das `div`-Element sollte eine `bold` `font-weight` und eine `font-size` von `32px` haben.

```js
const fontSize = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-size');
const fontWeight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-weight');

assert(fontSize === '32px');
assert(fontWeight === 'bold');
```

Das `div`-Element sollte sein CSS extern hinzugefügt bekommen.

```js
assert(!document.getElementsByTagName('style')?.[0]?.innerText.includes('div'));
assert(!document.getElementsByTagName('div')?.[0]?.hasAttribute('style'));
```

Es sollte ein `p`-Element geben und einen Text enthalten.

```js
assert(document.getElementsByTagName('P')?.length == 1);
assert(document.getElementsByTagName('P')?.[0]?.innerText.length > 0)
```

Dein `p`-Element sollte seine `color` auf `white` gesetzt haben.

```js
const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(color == 'white');
```

Dein `p`-Element sollte eine `font-size` von `18px` haben.

```js
const styleTag = document.getElementsByTagName('style')?.[0];
let pHasFontSize18 = false;

const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p' && rule.style.fontSize === '18px') {
      pHasFontSize18 = true;
      break;
    }
  }
}

assert(pHasFontSize18);
```

Das `p`-Element sollte seinen Stil intern hinzugefügt bekommen.

```js

const styleTag = document.getElementsByTagName('style')?.[0];
let pIsStyled = false;


const rules = styleTag?.sheet?.cssRules || styleTag?.sheet?.rules;
if (rules) {
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];
    if (rule.selectorText === 'p') {
      pIsStyled = true;
      break;
    }
  }
}

assert(pIsStyled);
```

Dein `button`-Element sollte seine `background-color` auf `orange` gesetzt haben.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.backgroundColor === 'orange')
```

Dein `button`-Element sollte seine `font-size` auf `18px` gesetzt haben.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.fontSize === '18px')
```

Das `button`-Element sollte einen Inline-Stil haben.

```js
assert(document.getElementsByTagName('button')?.[0]?.hasAttribute('style'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exercise A</title>
  </head>
  <body>

  </body>
</html>
```

```css
/* styles.css */
```

# --solutions--

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Styling Example</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <style>
    p {
      background-color: green;
      color: white;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div>Hello World!</div>
  <p>This is a paragraph.</p>
  <button style="background-color: orange; font-size: 18px;">Click Me</button>
</body>
</html>
```

```css
div {
  background-color: red;
  color: white;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
```
