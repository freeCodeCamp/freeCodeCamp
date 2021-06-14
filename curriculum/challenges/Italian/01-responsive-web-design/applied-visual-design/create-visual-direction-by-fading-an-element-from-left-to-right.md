---
id: 587d78a7367417b2b2512ae2
title: Creare una direzione visuale dissolvendo un elemento da sinistra a destra
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Per questa sfida, cambierai l'`opacity` di un elemento animato in modo che svanisca gradualmente mentre raggiunge il lato destro dello schermo.

Nell'animazione visualizzata, l'elemento circolare con lo sfondo gradiente si muove verso destra dal 50% dell'animazione per la regola `@keyframes`.

# --instructions--

Prendi l'elemento con l'id `ball` e aggiungi la proprietà `opacity` impostata a 0.1 al `50%`, per poi farlo svanire mentre si muove verso destra.

# --hints--

La regola `keyframes` per la dissolvenza deve impostare la proprietà `opacity` a 0.1 al 50%.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
