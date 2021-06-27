---
id: 587d78af367417b2b2512b00
title: Usare la proprietà align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

L'ultima proprietà per gli oggetti flex è `align-self`. Questa proprietà consente di regolare l'allineamento di ogni elemento singolarmente, invece di impostarli tutti contemporaneamente. Questo è utile in quanto altre tecniche di regolazione comuni che utilizzano le proprietà CSS `float`, `clear`e `vertical-align` non funzionano su elementi flex.

`align-self` accetta gli stessi valori di `align-items` e sovrascriverà qualsiasi valore impostato dalla proprietà `align-items`.

# --instructions--

Aggiungi la proprietà CSS `align-self` sia a `#box-1` che a `#box-2`. Dai a `#box-1` un valore di `center` e a `#box-2` un valore di `flex-end`.

# --hints--

L'elemento `#box-1` dovrebbe avere la proprietà `align-self` impostata su un valore di `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

L'elemento `#box-2` dovrebbe avere la proprietà `align-self` impostata su un valore di `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
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

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
