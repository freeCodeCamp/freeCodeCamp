---
id: 63ee3f71381756f9716727ef
title: Exercício A sobre a Introdução ao CSS
challengeType: 14
dashedName: css-foundations-exercise-a
---

# --description--

**Objetivo:** neste exercício, você vai praticar adicionar o CSS a um arquivo HTML usando os três métodos: CSS externo, CSS interno e CSS em linha. Você deve usar apenas seletores de tipo para este exercício ao adicionar estilos através dos métodos externo e interno. Você também deve usar palavras-chave para cores (por exemplo, "blue") em vez de usar valores `RGB` ou `HEX`.

## Histórias de usuário

1. Você deve ver um elemento `div` com um fundo com a cor `red`, texto com a cor `white` e tamanho da fonte de `32px`, alinhada ao centro e `bold`.

1. O CSS do elemento `div` deve ser adicionado externamente usando um seletor de tipo.

1. Você deve ver um elemento `p` com um fundo na cor `green`, texto da cor `white` e um tamanho de fonte de `18px`.

1. O CSS do elemento `p` deve ser adicionado internamente usando um seletor de tipo.

1. Você deve ver um elemento `button` com um fundo da cor `orange` e um tamanho de fonte de `18px`.

1. O CSS do elemento `button` deve estar em um estilo em linha.

# --hints--

Deve haver um elemento `div`. Ele deve conter algum texto e estar alinhado no centro.

```js
const aligned = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('text-align');

assert(aligned === 'center');
assert(document.getElementsByTagName('DIV')?.length == 1);
assert(document.getElementsByTagName('DIV')?.[0]?.innerText.length > 0)
```

O elemento `div` deve ter a propriedade `background-color` definida como `red` e uma cor de texto no valor `white`.

```js

const bgc = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('background-color');

const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(bgc === 'red');
assert(color === 'white');
```

O elemento `div` deve ter a propriedade `font-weight` definida como `bold` e um `font-size` de `32px`.

```js
const fontSize = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-size');
const fontWeight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('font-weight');

assert(fontSize === '32px');
assert(fontWeight === 'bold');
```

O elemento `div` deve ter o CSS adicionado externamente.

```js
assert(!document.getElementsByTagName('style')?.[0]?.innerText.includes('div'));
assert(!document.getElementsByTagName('div')?.[0]?.hasAttribute('style'));
```

Deve haver um elemento `p` e ele deve conter algum texto.

```js
assert(document.getElementsByTagName('P')?.length == 1);
assert(document.getElementsByTagName('P')?.[0]?.innerText.length > 0)
```

O elemento `p` deve ter `color` definido como `white`.

```js
const color = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('color');

assert(color == 'white');
```

O elemento `p` deve ter `font-size` com o valor de `18px`.

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

O elemento `p` deve ter o seu estilo adicionado internamente.

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

O elemento `button` deve ter a propriedade `background-color` definida como `orange`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.backgroundColor === 'orange')
```

O elemento `button` deve ter a propriedade `font-size` definida como `18px`.

```js
assert(document.getElementsByTagName('button')?.[0]?.style.fontSize === '18px')
```

O elemento `button` deve estar em um estilo em linha.

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
/* style.css */
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
