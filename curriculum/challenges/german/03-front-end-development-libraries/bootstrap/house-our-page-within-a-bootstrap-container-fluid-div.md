---
id: bad87fee1348bd9aec908746
title: Platziere unserer Seite in einem Bootstrap Container-Fluid-Div
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

Nun müssen wir sicherstellen, dass alle Inhalte auf deiner Seite für Mobilgeräte geeignet sind.

Lass uns dein `h3` Element innerhalb eines `div` Elements mit der Klasse `container-fluid` einbetten.

# --hints--

Dein `div` Element sollte die Klasse `container-fluid` haben.

```js
assert($('div').hasClass('container-fluid'));
```

Jedes deiner `div` Elemente sollte geschlossene Tags haben.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

Dein `h3` Element sollte in einem `div` Element eingebettet sein.

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```
