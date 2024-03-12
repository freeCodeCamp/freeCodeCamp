---
id: 63ee3ff1381756f9716727f2
title: Exercício D sobre a Introdução ao CSS
challengeType: 14
dashedName: css-foundations-exercise-d
---

# --description--

Com este exercício, fornecemos um arquivo HTML completo. Então, você só precisará editar o arquivo CSS. Para este exercício, é mais importante entender como funciona o encadeamento de diferentes seletores do que como adicionar de fato os atributos.

1. Você deve ver uma `width` de `300px` na classe `avatar` e na classe `proportioned`.
1. Você deve dar uma altura para que ele mantenha suas proporções quadradas originais (não coloque diretamente no código um valor de pixel para a altura).
1. Você deve dar aos elementos com as classes `avatar` e `distorted` uma `width` de `200px`.
1. Você deve dar a eles uma `height` duas vezes maior que a largura (width).

# --hints--

Você deve ter uma `width` de `300px` na classe `avatar` e na classe `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style?.width === '300px');
```

Você deve ter uma altura de `auto` nas classes `avatar` e `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`)
assert(style?.height === 'auto');
```

Você deve usar um seletor de encadeamento nas classes `avatar` e `proportioned`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style);
```

Você deve ter uma `width` de `200px` na classe `avatar` e na classe `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.width === '200px');
```

Você deve usar um seletor de encadeamento nas classes `avatar` e `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style);
```

Você deve ter uma `height` duas vezes maior que a largura nas classes `avatar` e `distorted`.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.height === '400px');
```

# --seed--

## --seed-contents--

```css

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="original proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="original distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
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
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
  </body>
</html>
```

```css
.avatar.proportioned {
  height: auto;
  width: 300px;
}

.avatar.distorted {
  height: 400px;
  width: 200px;
}
```

