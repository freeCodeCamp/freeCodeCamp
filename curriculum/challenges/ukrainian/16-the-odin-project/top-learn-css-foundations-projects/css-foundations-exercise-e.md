---
id: 63ee3ff8381756f9716727f3
title: Основи CSS. Вправа E
challengeType: 14
dashedName: css-foundations-exercise-e
---

# --description--

Роботу комбінаторів простіше зрозуміти, як тільки ви почнете працювати з ними та побачите, на що саме вони впливають.

Мета цієї вправи — застосувати стилі до елементів, які є нащадками іншого елемента, тим часом залишаючи без стилю елементи, які не є нащадками цього елемента.

1. Ви повинні бачити фон зі значенням `yellow` для елементів `p`, які є нащадками елемента `div`.
1. Ви повинні бачити колір тексту зі значенням `red` для елементів, які є нащадками елемента `div`.
1. Ви повинні бачити розмір шрифту зі значенням `20px` для елементів, які є нащадками елемента `div`.
1. Ви повинні вирівняти за центром текст елементів, які є нащадками елемента `div`.

# --hints--

Нащадки повинні мати колір фону зі значенням `yellow`.

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

Нащадки повинні мати колір тексту зі значенням `red`.

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

Нащадки повинні мати розмір шрифту зі значенням `20px`.

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

Ви повинні вирівняти текст нащадків за центром.

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
