---
id: 587d78ae367417b2b2512aff
title: Bestellungseigenschaft verwenden, um Artikel neu zu ordnen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

Die Eigenschaft `order` wird verwendet, um CSS mitzuteilen, wie Flex-Elemente im Flex-Container dargestellt werden. Standardmäßig werden die Elemente in der gleichen Reihenfolge angezeigt, in der sie im HTML-Quelltext erscheinen. Die Eigenschaft nimmt Zahlen als Werte an, und es können auch negative Zahlen verwendet werden.

# --instructions--

Füge die CSS-Eigenschaft `order` sowohl zu `#box-1` als auch zu `#box-2` hinzu. Gib' `#box-1` den Wert `2` und `#box-2` den Wert `1`.

# --hints--

Das `#box-1` Element sollte eine `order` Eigenschaft mit einem Wert von `2` besitzen.

```js
assert($('#box-1').css('order') == '2');
```

Das `#box-2`-Element sollte eine `order` Eigenschaft mit einem Wert von `1` besitzen.

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
