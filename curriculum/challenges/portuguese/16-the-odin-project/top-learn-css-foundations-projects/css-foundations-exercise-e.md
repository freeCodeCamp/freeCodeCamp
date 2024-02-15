---
id: 63ee3ff8381756f9716727f3
title: Exercício E de Introdução ao CSS
challengeType: 14
dashedName: css-foundations-exercise-e
---

# --description--

Compreender como os combinadores funcionam pode se tornar muito mais fácil quando você começa a brincar com eles e ver o que exatamente é afetado por eles em comparação com o que não é.

O objetivo deste exercício é aplicar estilos aos elementos que são descendentes de outro elemento, deixando elementos que não são descendentes desse elemento sem estilização.

1. Você deve ver um segundo plano na cor `yellow` para elementos `p` que são descendentes do elemento `div`.
1. Você deve ver uma cor de texto `red` para elementos que são descendentes do elemento `div`.
1. Você deve ver um tamanho de fonte de `20px` para os elementos que são descendentes do elemento `div`.
1. Você deve ver o texto alinhado ao centro para elementos que são descendentes do elemento `div`.

# --hints--

Você deve ter um segundo plano na cor `yellow` em seus descendentes.

```js
const styleOne = new __helpers.CSSHelp(document).getStyle('.container .text');
const styleTwo =  new __helpers.CSSHelp(document).getStyle('div p');
const styleThree =  new __helpers.CSSHelp(document).getStyle('div .text');
const styleFour =  new __helpers.CSSHelp(document).getStyle('.container p');

const styles = [styleOne, styleTwo, styleThree, styleFour];

function getCorrectStyle(){
    for(let i = 0; i < styles.length; i++){
        if(styles[i] != undefined){
            return styles[i];
        }
    }
}

assert(getCorrectStyle()?.backgroundColor === 'yellow');

```

Você deve ter a cor do texto `red` em seus descendentes.

```js
const styleOne = new __helpers.CSSHelp(document).getStyle('.container .text');
const styleTwo =  new __helpers.CSSHelp(document).getStyle('div p');
const styleThree =  new __helpers.CSSHelp(document).getStyle('div .text');
const styleFour =  new __helpers.CSSHelp(document).getStyle('.container p');

const styles = [styleOne, styleTwo, styleThree, styleFour];

function getCorrectStyle(){
    for(let i = 0; i < styles.length; i++){
        if(styles[i] != undefined){
            return styles[i];
        }
    }
}

assert(getCorrectStyle()?.color === 'red');

```

Você deve ter um tamanho de fonte de `20px` em seus descendentes.

```js
const styleOne = new __helpers.CSSHelp(document).getStyle('.container .text');
const styleTwo =  new __helpers.CSSHelp(document).getStyle('div p');
const styleThree =  new __helpers.CSSHelp(document).getStyle('div .text');
const styleFour =  new __helpers.CSSHelp(document).getStyle('.container p');

const styles = [styleOne, styleTwo, styleThree, styleFour];

function getCorrectStyle(){
    for(let i = 0; i < styles.length; i++){
        if(styles[i] != undefined){
            return styles[i];
        }
    }
}

assert(getCorrectStyle()?.fontSize === '20px');

```

Você deve ter o texto alinhado ao centro em seus descendentes.

```js
const styleOne = new __helpers.CSSHelp(document).getStyle('.container .text');
const styleTwo =  new __helpers.CSSHelp(document).getStyle('div p');
const styleThree =  new __helpers.CSSHelp(document).getStyle('div .text');
const styleFour =  new __helpers.CSSHelp(document).getStyle('.container p');

const styles = [styleOne, styleTwo, styleThree, styleFour];

function getCorrectStyle(){
    for(let i = 0; i < styles.length; i++){
        if(styles[i] != undefined){
            return styles[i];
        }
    }
}

assert(getCorrectStyle()?.textAlign === 'center');

```

# --seed--

## --seed-contents--
```css
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Descendant Combinator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <p class="text">This should be styled.</p>
    </div>
    <p class="text">This should be unstyled.</p>
    <p class="text">This should be unstyled.</p>
    <div class="container">
      <p class="text">This should be styled.</p>
      <p class="text">This should be styled.</p>
    </div>
  </body>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Descendant Combinator</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <p class="text">This should be styled.</p>
    </div>
    <p class="text">This should be unstyled.</p>
    <p class="text">This should be unstyled.</p>
    <div class="container">
      <p class="text">This should be styled.</p>
      <p class="text">This should be styled.</p>
    </div>
  </body>
</html>
```

```css
.container .text {
  background-color: yellow;
  color: red;
  font-size: 20px;
  text-align: center;
}
```
