---
id: bad87fee1348bd9bec908846
title: Erstelle eine Bootstrap Zeile
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

Jetzt erstellen wir eine Bootstrap Zeile für unsere Inline-Elemente.

Erstelle ein `div` Element unter dem `h3` Tag mit der Klasse `row`.

# --hints--

Du solltest ein `div` Element unter deinem `h3` Element hinzufügen.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

Dein `div` Element soll die Klasse `row` haben

```js
assert($('div').hasClass('row'));
```

Dein `row div` soll innerhalb des `container-fluid div` verschachtelt sein

```js
assert($('div.container-fluid div.row').length > 0);
```

Dein `div` Element sollte einen abschließenden Tag haben.

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

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```
