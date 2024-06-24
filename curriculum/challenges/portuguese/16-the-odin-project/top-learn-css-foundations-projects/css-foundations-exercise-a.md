---
id: 63ee3f71381756f9716727ef
title: Exercício A sobre a Introdução ao CSS
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Objetivo:** neste exercício, você vai praticar adicionar o CSS a um arquivo HTML usando os três métodos: CSS externo, CSS interno e CSS em linha. Você deve usar apenas seletores de tipo para este exercício ao adicionar estilos através dos métodos externo e interno. Você também deve usar palavras-chave para cores (por exemplo, "blue") em vez de usar valores `RGB` ou `HEX`.

## Histórias de usuário

- Você deve ver um elemento `div` com algum texto.
  - Ele deve ter um fundo `red`, um texto `white`, tamanho de fonte de `32px`, texto alinhado ao centro e `bold`.
  - O CSS para o elemento `div` deve ser adicionado externamente e usando um seletor de tipos.
- Você deve ver um elemento `p` com algum texto.
  - Ele deve ter um fundo `green`, texto `white` e tamanho de fonte `18px`.
  - O CSS para o elemento `p` deve ser adicionado internamente e usando um seletor de tipos.
- Você deve ver um elemento `button` com algum texto.
  - O elemento `button` deve ter um fundo `orange` e um tamanho de fonte de `18px`.
  - O CSS para o elemento `button` deve ser adicionado usando estilos inline.

# --hints--

Você deve ter um elemento `div` contendo algum texto.

```js
const divElement = document.querySelector('div');

assert.isNotNull(divElement);
assert.isAtLeast(divElement?.innerText.length, 1);
```

Você deve ter uma folha de estilos externa contendo o estilo dos elementos `div`.

```js
const styleSheet = new __helpers.CSSHelp(document).getStyleSheet();
const isExternal = styleSheet?.ownerNode.classList.contains('fcc-injected-styles');
const divStyle = new __helpers.CSSHelp(document).getStyle('div');

assert.isTrue(isExternal);
assert.isNotNull(divStyle);
```

O elemento `div` não deve ter seu CSS adicionado usando estilos internos ou inline.

```js
const styleElement = document.querySelector('style:not([class])');

assert.isNotTrue(styleElement?.innerText.includes('div'));
assert.isNotTrue(document.querySelector('div')?.hasAttribute('style'));
```

O elemento `div` deve ter uma `background-color` com o valor `red` e uma `color` com o valor `white`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const divBGColor = divStyle?.getPropertyValue('background-color');
const divColor = divStyle?.getPropertyValue('color');

assert.equal(divBGColor, 'red');
assert.equal(divColor, 'white');
```

O elemento `div` deve ter `font-weight` definido como `bold`, `font-size` definido como `32px` e `text-align` definido como `center`.

```js
const divStyle = new __helpers.CSSHelp(document).getStyle('div');
const textAlign = divStyle?.getPropertyValue('text-align');
const fontSize = divStyle?.getPropertyValue('font-size');
const fontWeight = divStyle?.getPropertyValue('font-weight');

assert.equal(textAlign, 'center');
assert.equal(fontSize, '32px');
assert.equal(fontWeight,'bold');
```

Você deve ter um elemento `p` e ele deve conter algum texto.

```js
const pElement = document.querySelector('p');

assert.isNotNull(pElement);
assert.isAtLeast(pElement?.innerText.length, 1)
```

O elemento `p` deve ter seus estilos adicionados internamente usando um elemento `style`.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let isStyled = false;

if (rules && rules.selectorText === 'p') {
  isStyled = true;
}

assert.isTrue(isStyled);
```

O elemento `p` deve ter um `font-size` de `18px` e ter `color` definida como `white`.

```js
const styleElement = document.querySelector('style:not([class])');
const rules = styleElement?.sheet?.cssRules?.[0] || styleElement?.sheet?.rules?.[0];
let fontSize, color;

if (rules && rules.selectorText === 'p') {
  fontSize = rules.style.fontSize;
  color = rules.style.color;
}

assert.equal(fontSize, "18px");
assert.equal(color, 'white');
```

Você deve ter um elemento `button` contendo algum texto.

```js
const btnElement = document.querySelector('button');

assert.isNotNull(btnElement);
assert.isAtLeast(btnElement?.innerText.length, 1);
```

O elemento `button` deve ter um estilo inline.

```js
assert.isTrue(document.querySelector('button')?.hasAttribute('style'));
```

O elemento `button` deve ter a `background-color` definida como `orange`.

```js
assert.equal(document.querySelector('button')?.style.backgroundColor, 'orange')
```

O elemento `button` deve ter `font-size` definido como `18px`.

```js
assert.equal(document.querySelector('button')?.style.fontSize, '18px')
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
