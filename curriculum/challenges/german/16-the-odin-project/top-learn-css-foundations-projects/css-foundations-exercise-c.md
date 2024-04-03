---
id: 63ee3fe9381756f9716727f1
title: CSS-Grundlagen Übung C
challengeType: 14
dashedName: css-foundations-exercise-c
---

# --description--

Wir wollen ein wenig auf der vorherigen Übung aufbauen, in der du mehrere Klassen zu einem einzigen Element hinzugefügt hast, um zwei verschiedene Regeln auf dieses anzuwenden.

1. Auf dem ersten `button`-Element solltest du einen schwarzen Hintergrund und weißen Text sehen.
1. Auf dem zweiten `button`-Element solltest du einen gelben Hintergrund sehen.
1. Du solltest eine Schriftgröße von `28px` einstellen, indem du einen Gruppierungsselektor benutzt.
1. Du solltest eine Liste von Schriftarten haben, die `Helvetica` und `Times New Roman` mit `sans-serif` als Fallback enthält.
1. You should see a unique class name on each element.
1. Du solltest einen Gruppierungsselektor für Stile haben, die beide Elemente miteinander teilen.

# --hints--

Du solltest einen `black` Hintergrund für das erste Element haben.

```js
const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.backgroundColor, 'black');

```

Dein erstes Element sollte eine Textfarbe von `white` haben.

```js

const classes = document.querySelectorAll('button')?.[0].classList;

const style = new __helpers.CSSHelp(document).getStyle(`.${classes[0]}`);

assert.equal(style?.color, 'white');

```

Du solltest den `font-size` für beide Elemente auf `28px` setzen, unter Verwendung eines Gruppierungsselektors.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.equal(eitherOr()?.fontSize, '28px');
```

Du hast einen individuellen Klassennamen für jedes Element.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

for(let i = 0; i < elementOneClasses.length; i++){
    assert(![...elementTwoClasses].includes(elementOneClasses[i]));
}

```

Du solltest einen Gruppierungsselektor für Stile haben, die beide Elemente miteinander teilen.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}
assert.exists(eitherOr());
```

Du solltest eine Liste von Schriftarten haben, die `Helvetica` und `Times New Roman` mit `sans-serif` als Fallback enthält.

```js
const classOne = document.querySelectorAll('button')?.[0].classList?.[0];
const classTwo = document.querySelectorAll('button')?.[1].classList?.[0];

function eitherOr() {
  const a = new __helpers.CSSHelp(document)
  return a.getStyle(`.${classOne}, .${classTwo}`) ?? a.getStyle(`.${classTwo}, .${classOne}`);
}

assert.equal(eitherOr()?.fontFamily, 'Helvetica, "Times New Roman", sans-serif');
```

Jedes Element sollte nur eine Klasse haben.

```js
const elementOneClasses = document.querySelectorAll('button')?.[0].classList;
const elementTwoClasses = document.querySelectorAll('button')?.[1].classList;

assert(elementOneClasses.length === 1 && elementTwoClasses.length === 1);
```


# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Grouping Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <button>Click Me!</button>
    <button>No, Click Me!</button>
  </body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grouping Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <button class="inverted">Click Me!</button>
    <button class="fancy">No, Click Me!</button>
  </body>
</html>
```

```css
.inverted,
.fancy {
  font-family: Helvetica, "Times New Roman", sans-serif;
  font-size: 28px;
}

.inverted {
  background-color: black;
  color: white;
}

.fancy {
  background-color: yellow;
}
```
