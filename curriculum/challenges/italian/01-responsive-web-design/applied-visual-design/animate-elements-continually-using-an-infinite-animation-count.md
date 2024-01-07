---
id: 587d78a8367417b2b2512ae3
title: Animare gli elementi ininterrottamente usando un numero di animazioni infinito
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

Le sfide precedenti hanno mostrato l'utilizzo di alcune proprietà di animazione e la regola `@keyframes`. Un'altra proprietà di animazione è la `animation-iteration-count`, che consente di controllare quante volte si desidera eseguire il ciclo di animazione. Ecco un esempio:

```css
animation-iteration-count: 3;
```

In questo caso l'animazione si fermerà dopo essere stata eseguita 3 volte, ma è possibile far eseguire continuamente l'animazione impostando quel valore a `infinite`.

# --instructions--

Per continuare a far rimbalzare la palla a destra in un ciclo continuo, porta la proprietà `animation-iteration-count` a `infinite`.

# --hints--

La proprietà `animation-iteration-count` dovrebbe avere un valore di `infinite`.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
