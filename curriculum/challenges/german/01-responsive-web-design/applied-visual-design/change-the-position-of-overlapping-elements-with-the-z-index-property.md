---
id: 587d78a3367417b2b2512acf
title: Ändern der Position von überlappenden Elementen mit der Eigenschaft z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Wenn Elemente so positioniert werden, dass sie sich überlappen (d. h. mit `position: absolute | relative | fixed | sticky`), erscheint das Element, das im HTML-Markup später kommt, standardmäßig über den anderen Elementen. Mit der Eigenschaft `z-index` kann jedoch die Reihenfolge festgelegt werden, in der die Elemente übereinander gestapelt werden. Er muss eine Integerzahl sein (d. h. eine ganze Zahl und keine Dezimalzahl). Höhere Werte für die `z-index`-Eigenschaft eines Elements verschieben es im Stapel höher als solche mit niedrigeren Werten.

# --instructions--

Füge dem Element mit dem Klassennamen `first` (das rote Rechteck) eine Eigenschaft `z-index` hinzu und setze sie auf den Wert 2, damit sie das andere Element (blaues Rechteck) überdeckt.

# --hints--

Das Element mit der Klasse `first` sollte einen `z-index`-Wert von 2 besitzen.

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
