---
id: 618a0b2befb143baefab632b
title: Passo 37
challengeType: 0
dashedName: step-37
---

# --description--

Observe que as cores vermelho e ciano estão muito brilhantes perto uma da outra. No entanto, o forte contraste visual pode ser chocante se for usado demais em um site e, às vezes, pode tornar o texto mais difícil de ler se for colocado em um fundo de cores complementares.

É uma prática melhor escolher uma cor como a cor dominante e usar sua cor complementar como um destaque para chamar a atenção para certos conteúdos na página.

Primeiro, na regra `h1`, use a função `rgb` para definir `background-color` como ciano.

# --hints--

Você não deve remover ou modificar a propriedade `text-align` ou seu valor.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

A regra do CSS `h1` deve ter uma propriedade `background-color` definida para `rgb(0, 255, 255)`.

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
