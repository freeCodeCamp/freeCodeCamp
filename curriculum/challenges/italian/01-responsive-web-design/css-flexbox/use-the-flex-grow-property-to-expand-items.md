---
id: 587d78ae367417b2b2512afc
title: Usare la proprietà flex-grow per espandere gli elementi
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

L'opposto di `flex-shrink` è la proprietà `flex-grow`. Ricorda che `flex-shrink` controlla la dimensione degli oggetti quando il contenitore si restringe. La proprietà `flex-grow` controlla la dimensione degli oggetti quando il contenitore genitore si espande.

Usando un esempio simile a quello dell'ultima sfida, se un oggetto ha un valore `flex-grow` di `1` e l'altro ha un valore `flex-grow`di `3`, quello con valore di `3` crescerà tre volte più dell'altro.

# --instructions--

Aggiungi la proprietà CSS `flex-grow` sia a `#box-1` che a `#box-2`. Dai a `#box-1` un valore di `1` e a `#box-2` un valore di `2`.

# --hints--

L'elemento `#box-1` dovrebbe avere la proprietà `flex-grow` impostata su un valore di `1`.

```js
assert($('#box-1').css('flex-grow') == '1');
```

L'elemento `#box-2` dovrebbe avere la proprietà `flex-grow` impostata su un valore di `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
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

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
