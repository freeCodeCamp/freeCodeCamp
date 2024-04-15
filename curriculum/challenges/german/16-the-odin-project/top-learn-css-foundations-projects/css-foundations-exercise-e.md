---
id: 63ee3ff8381756f9716727f3
title: CSS-Grundlagen Übung E
challengeType: 14
dashedName: css-foundations-exercise-e
---

# --description--

Die Wirkungsweise von Kombinatoren ist viel einfacher zu verstehen, wenn man mit ihnen herumspielt und sieht, was genau von ihnen beeinflusst wird und was nicht.

Das Ziel dieser Aufgabe ist es, Stile auf Elemente anzuwenden, die von einem anderen Element abstammen, während Elemente, die nicht von diesem Element abstammen, nicht gestyled werden.

1. Du solltest einen `yellow` Hintergrund für `p`-Elemente sehen, die Nachkommen des `div`-Elements sind.
1. Du solltest eine `red` Textfarbe für Elemente sehen, die von dem `div`-Element abstammen.
1. Du solltest eine Schriftgröße von `20px` für Elemente sehen, die Nachkommen des `div`-Elements sind.
1. Du solltest den Text für Elemente, die Nachkommen des `div`-Elements sind, zentriert ausrichten.

# --hints--

Du solltest eine Hintergrundfarbe von `yellow` auf deinen Nachkommen haben.

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

You should have a text color of `red` on your descendants.

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

Deine Nachkommen sollte eine Schriftgröße von `20px` haben.

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

Du solltest den Text auf deinen Nachkommen zentriert ausrichten.

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
