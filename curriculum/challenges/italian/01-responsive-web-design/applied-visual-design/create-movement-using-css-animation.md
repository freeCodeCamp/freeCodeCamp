---
id: 587d78a7367417b2b2512ae1
title: Creare movimento usando l'animazione CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Quando gli elementi hanno una `position` specificata, come `fixed` o `relative`, le proprietà di offset CSS `right`, `left`, `top`e `bottom` possono essere utilizzate nelle regole di animazione per creare il movimento.

Come mostrato nell'esempio qui sotto, puoi spingere l'elemento verso il basso e poi verso l'alto impostando la proprietà `top` del keyframe `50%` a 50px, ma settandola a 0px per il primo (`0%`) e l'ultimo (`100%`) keyframe.

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Aggiungi un movimento orizzontale all'animazione del `div`. Utilizzando la proprietà offset `left`, aggiungila alla regola `@keyframes` in modo che l'arcobaleno inizi a 0 pixel allo `0%`, si sposti a 25 pixel al `50%` e termini a -25 pixel al `100%`. Non sostituire la proprietà `top` nell'editor - l'animazione dovrebbe avere un movimento sia verticale che orizzontale.

# --hints--

La regola `@keyframes` per `0%` dovrebbe utilizzare l'offset `left` a 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

La regola `@keyframes` per `50%` dovrebbe utilizzare l'offset `left` di 25 px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

La regola `@keyframes` per `100%` dovrebbe utilizzare l'offset `left` di -25px.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
