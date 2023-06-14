---
id: 63ee3ff8381756f9716727f3
title: Fondamenti di CSS Esercizio E
challengeType: 14
dashedName: css-foundations-exercise-e
---

# --description--

Capire come funzionano i combinatori può diventare molto più facile quando si inizia a giocare con loro e vedere esattamente cosa è influenzato da loro e ciò che non lo è.

L'obiettivo di questo esercizio è applicare stili agli elementi che sono discendenti di un altro elemento, lasciando gli elementi che non sono discendenti di quell'elemento senza stile.

1. Dovresti vedere uno sfondo `yellow` per gli elementi `p` che sono discendenti degli elementi `div`.
1. Dovresti vedere un testo di colore `red` per gli elementi che sono discendenti dell'elemento `div`.
1. Dovresti vedere una dimensione del font di `20px` per gli elementi che sono discendenti dell'elemento `div`.
1. Dovresti allineare al centro il testo degli elementi che sono discendenti dell'elemento `div`.

# --hints--

Dovresti avere un colore di sfondo `yellow` sui discendenti.

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

Dovresti avere del testo di colore `red` sui discendenti.

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

Dovresti avere un font di `20px` sui discendenti.

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

Dovresti allineare al centro il testo sui discendenti.

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
