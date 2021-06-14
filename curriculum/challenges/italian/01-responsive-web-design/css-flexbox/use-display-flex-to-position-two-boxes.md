---
id: 587d78ab367417b2b2512af0
title: 'Usare display: flex per posizionare due riquadri'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Questa sezione utilizza stili di sfida alternativi per mostrare come usare il CSS per posizionare gli elementi in modo flessibile. In primo luogo, una sfida spiegherà la teoria, quindi una sfida pratica, utilizzando un semplice componente tweet, applicherà il concetto flexbox.

Posizionando su un elemento la proprietà CSS `display: flex;` potrai utilizzare altre proprietà flex per creare una pagina responsiva.

# --instructions--

Aggiungi la proprietà CSS `display` a `#box-container` e imposta il suo valore a `flex`.

# --hints--

`#box-container` dovrebbe avere la proprietà `display` impostata su un valore di `flex`.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
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
    height: 500px;
    display: flex;
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
