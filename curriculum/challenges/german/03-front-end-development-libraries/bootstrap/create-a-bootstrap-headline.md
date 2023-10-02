---
id: bad87fee1348bd9aec908846
title: Erstelle eine Bootstrap-Überschrift
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

Lasst uns jetzt etwas von Grund auf neu bauen, um unsere HTML-, CSS- und Bootstrap-Kenntnisse zu verbessern.

Wir werden einen jQuery-Playground bauen, den wir dann in unseren jQuery-Aufgaben verwenden werden.

Erstelle für den Anfang ein `h3`-Element mit dem Text `jQuery Playground`.

Gib deinem `h3`-Element mit der `text-primary` Bootstrap-Klasse eine Farbe und zentriere es mit der `text-center` Bootstrap-Klasse.

# --hints--

Du solltest deiner Seite ein `h3`-Element hinzufügen.

```js
assert($('h3') && $('h3').length > 0);
```

Dein `h3`-Element sollte ein abschließendes Tag enthalten.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

Du solltest deinem `h3`-Element mithilfe der Klasse `text-primary` Farbe verliehen haben

```js
assert($('h3').hasClass('text-primary'));
```

Dein `h3` Element sollte mit Hilfe der Klasse `text-center` zentriert werden

```js
assert($('h3').hasClass('text-center'));
```

Dein `h3`-Element soll den Text `jQuery Playground` enthalten.

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
