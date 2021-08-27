---
id: 587d78ae367417b2b2512aff
title: Usare la proprietà order per riorganizzare gli elementi
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

La proprietà `order` è usata per dire al CSS con che ordine gli elementi flex appaiono nel contenitore flex. Per impostazione predefinita, gli elementi appariranno nello stesso ordine con cui arrivano nell'HTML sorgente. La proprietà prende i numeri come valori, e possono essere usati anche i numeri negativi.

# --instructions--

Aggiungere la proprietà CSS `order` sia a `#box-1` che a `#box-2`. Dare a `#box-1` un valore di `2` e dare a `#box-2` un valore di `1`.

# --hints--

L'elemento `#box-1` dovrebbe avere la proprietà `order` impostata su un valore di `2`.

```js
assert($('#box-1').css('order') == '2');
```

L'elemento `#box-2` dovrebbe avere la proprietà `order` impostata su un valore di `1`.

```js
assert($('#box-2').css('order') == '1');
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
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
