---
id: 63ee3fe4381756f9716727f0
title: Exercício B sobre a Introdução ao CSS
challengeType: 14
dashedName: css-foundations-exercise-b
---

# --description--

**Objetivo:** existem vários elementos no arquivo HTML fornecido, aos quais você terá que adicionar atributos de classe ou ID. Você terá que adicionar regras no arquivo CSS fornecido usando a sintaxe correta do seletor.

## Histórias de usuário

1. Você deve ver um fundo na cor `yellow` para todos os elementos ímpares da lista.

1. Você deve ver um seletor `class` para todos os elementos ímpares da lista.

1. Você deve ver que o segundo elemento na lista tem o texto na cor `blue` e um `font-size` de `36px`.

1. O `font-size` e a cor do texto no segundo elemento devem ser definidos usando um atributo de `id`.

1. Você deve ver que o terceiro elemento na lista tem um `font-size` de `24px`.

1. O `font-size` e a cor do texto no terceiro elemento devem ser definidos usando um atributo `class`.

1. Você deve ver que o quarto elemento da lista tem um fundo na cor `red`, um `font-size` de `24px` e um `font-weight` com o valor `bold`.

1. The `font-size` of the fourth element should be set with a `class` attribute. The `font-weight` and the color should be set with an `id` attribute.

# --hints--

Todo elemento ímpar deve ter o atributo `class`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPHasClass = p?.every((paragraph) => paragraph.classList.length > 0);

assert(everyPHasClass);
```

Os elementos ímpares devem ter a propriedade `background-color` com o valor `yellow`.

```js
const p = Array.from(document.querySelectorAll('P'));

const everyPhasBackgroundColor = p?.every((paragraph) => {

  const style = getComputedStyle(paragraph);

  return style?.backgroundColor === 'rgb(255, 255, 0)';
})
```

Your second element should have `blue` text and a `font-size` of `36px`.

```js
const secondElementId = document.querySelectorAll('div')?.[0]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${secondElementId}`);

assert.equal(style?.color, 'rgb(0, 0, 255)')
assert.equal(style?.fontSize, '36px');
```

O terceiro elemento deve ter o texto e o `font-size` com o valor de `24px`.

```js
const thirdElement = document.querySelectorAll('p')?.[1];

assert(thirdElement?.innerText?.length > 0);

const thirdElementClasses = Array.from(thirdElement?.classList?.values());

assert(thirdElementClasses.some(thirdElementClass => {

  const style = new __helpers.CSSHelp(document).getStyle(`.${thirdElementClass}`);

  return style?.fontSize === '24px';

}))

```

O quarto elemento deve ter `font-size` com o valor de `24px`.

```js
const fourthElementClass = document.querySelectorAll('div')?.[1]?.classList[0];

const style = new __helpers.CSSHelp(document).getStyle(`.${fourthElementClass}`);

assert(style?.fontSize === '24px');
```

The fourth element should have a `red` `background-color`.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.backgroundColor === 'red');
```

O quarto elemento deve ter `font-weight` com o valor de `bold`.

```js
const fourthElement = document.querySelectorAll('div')?.[1]?.id;

const style = new __helpers.CSSHelp(document).getStyle(`#${fourthElement}`);

assert(style?.fontWeight === 'bold');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class and ID Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>Number 1 - I'm a class!</p>
    <div>Number 2 - I'm one ID.</div>
    <p>Number 3 - I'm a class, but cooler!</p>
    <div>Number 4 - I'm another ID.</div>
    <p>Number 5 - I'm a class!</p>
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
    <title>Class and ID Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p class="odd">Number 1 - I'm a class!</p>
    <div id="two">Number 2 - I'm one ID.</div>
    <p class="odd adjust-font-size">Number 3 - I'm a class, but cooler!</p>
    <div id="four" class="adjust-font-size">Number 4 - I'm another ID.</div>
    <p class="odd">Number 5 - I'm a class!</p>
  </body>
</html>
```

```css
.odd {
  background-color: rgb(255, 167, 167);
  font-family: Verdana, "DejaVu Sans", sans-serif;
}

.adjust-font-size {
  font-size: 24px;
}

#two {
  color: #0000ff;
  font-size: 36px;
}

#four {
  background-color: red;
  font-weight: bold;
}
```
