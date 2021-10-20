---
id: 587d78a3367417b2b2512acf
title: Cambiare la posizione degli elementi sovrapposti con la proprietà z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Quando gli elementi sono posizionati in sovrapposizione (ad es. usando `position: absolute | relative | fixed | sticky`), l'elemento che viene dopo nel markup HTML apparirà, per impostazione predefinita, in cima agli altri elementi. Tuttavia, la proprietà `z-index` può specificare l'ordine di come gli elementi sono impilati l'uno sull'altro. Deve essere un numero intero (non un decimale quindi), e valori superiori per la proprietà `z-index` di un elemento lo spostano più in alto nella pila rispetto a quelli con valori inferiori.

# --instructions--

Aggiungi una proprietà `z-index` all'elemento con la classe di nome `first` (il rettangolo rosso) e impostalo su un valore di 2 in modo che copra l'altro elemento (rettangolo blu).

# --hints--

L'elemento con classe `first` dovrebbe avere un valore `z-index` pari a 2.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
