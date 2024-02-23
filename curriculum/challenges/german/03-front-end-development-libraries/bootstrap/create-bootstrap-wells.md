---
id: bad87fee1348bd9aec908848
title: Erstelle Bootstrap Wells
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap hat eine Klasse namens `well`, die deinen Spalten visuelle Tiefe verleihen kann.

Verschachtle ein `div`-Element mit der Klasse `well` in jedem deiner `col-xs-6` `div`-Elemente.

# --hints--

Du solltest ein `div` Element mit der Klasse `well` in jedem deiner `div` Elemente mit der Klasse `col-xs-6` hinzufügen

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

Deine beiden `div`-Elemente der Klasse `col-xs-6` sollten in deinem `div`-Element der Klasse `row` eingebettet sein.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

All deine `div`-Elemente sollen abschließende Tags enthalten.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
