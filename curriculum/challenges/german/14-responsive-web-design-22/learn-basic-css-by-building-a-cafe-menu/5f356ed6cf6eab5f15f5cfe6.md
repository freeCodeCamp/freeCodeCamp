---
id: 5f356ed6cf6eab5f15f5cfe6
title: Schritt 20
challengeType: 0
dashedName: step-20
---

# --description--

Das `div`-Element wird im Gegensatz zu anderen Inhaltselementen, die du bisher verwendet hast, hauptsächlich für Layoutzwecke verwendet. Füge ein `div`-Element im `body`-Element hinzu und verschiebe dann alle anderen Elemente innerhalb des neuen `div`.

# --hints--

Du solltest einen einleitenden `<div>`-Tag haben.

```js
assert(code.match(/<div>/i));
```

Du solltest ein abschließendes `</div>`-Tag haben.

```js
assert(code.match(/<\/div>/i));
```

Du solltest dein vorhandenes `body`-Element nicht verändern. Stelle sicher, dass du das abschließende Tag nicht gelöscht hast.

```js
assert($('body').length === 1);
```

Dein `div`-Tag sollte innerhalb deines `body`-Elements verschachtelt sein.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

