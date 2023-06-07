---
id: 5f356ed6cf6eab5f15f5cfe6
title: Step 20
challengeType: 0
dashedName: step-20
---

# --description--

A differenza degli altri elementi di contenuto che hai utilizzato finora, l'elemento `div` è utilizzato principalmente per il design del layout. Aggiungi un elemento `div` all'interno dell'elemento `body` e poi sposta tutti gli altri elementi all'interno del nuovo elemento `div`.

# --hints--

Dovresti avere un tag di apertura `<div>`.

```js
assert(code.match(/<div>/i));
```

Dovresti avere un tag di chiusura `</div>`.

```js
assert(code.match(/<\/div>/i));
```

Non dovresti cambiare l'elemento `body` esistente. Assicurati di non aver eliminato il tag di chiusura.

```js
assert($('body').length === 1);
```

Il tag `div` dovrebbe essere annidato nell'elemento `body`.

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

