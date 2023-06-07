---
id: 618a0b2befb143baefab632b
title: Step 37
challengeType: 0
dashedName: step-37
---

# --description--

Nota che i colori rosso e ciano sono molto luminosi uno accanto all'altro. Questo contrasto può distrarre se viene utilizzato in modo eccessivo su un sito web e può rendere difficile la lettura del testo se posizionato su uno sfondo del colore complementare.

È bene scegliere un unico colore dominante e utilizzare il suo colore complementare come contrasto per attirare l'attenzione su determinati contenuti della pagina.

Nella regola `h1`, utilizza la funzione `rgb` per impostare `background-color` sul colore ciano.

# --hints--

Non dovresti rimuovere o modificare la proprietà `text-align` o il suo valore.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

La regola CSS `h1` dovrebbe avere una proprietà `background-color` con il valore `rgb(0, 255, 255)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
