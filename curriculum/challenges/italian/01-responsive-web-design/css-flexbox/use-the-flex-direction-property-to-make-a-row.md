---
id: 587d78ab367417b2b2512af2
title: Usare la proprietà flex-direction per creare una riga
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

Aggiungendo `display: flex` a un elemento, questo diventa un contenitore flex. Questo permette di allineare tutti i figli di quell'elemento in righe o colonne. Puoi farlo aggiungendo la proprietà `flex-direction` al genitore e impostandola su row o column. La creazione di una riga allineerà i figli orizzontalmente e la creazione di una colonna allineerà i figli verticalmente.

Altre opzioni per `flex-direction` sono `row-reverse` e `column-reverse`.

**Nota:** Il valore predefinito per la proprietà `flex-direction` è `row`.

# --instructions--

Aggiungi la proprietà CSS `flex-direction` all'elemento `#box-container` e dagli un valore di `row-reverse`.

# --hints--

L'elemento `#box-container` dovrebbe avere una proprietà `flex-direction` impostata su `row-reverse`.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
