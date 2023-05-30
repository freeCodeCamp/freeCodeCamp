---
id: 616d47bc9eedc4bc7f621bec
title: Schritt 10
challengeType: 0
dashedName: step-10
---

# --description--

Füge als Nächstes ein weiteres `div`-Element innerhalb des `div`-Elements hinzu und weise ihm die Klasse `marker` zu.

# --hints--

Dein neues `div`-Element sollte ein öffnendes Tag haben.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

Dein neues `div`-Element sollte ein schließendes Tag haben.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Du solltest dein neues `div`-Element innerhalb des `div`-Elements mit der Klasse `container` einbetten.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

You should give your new `div` element a class of `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
--fcc-editable-region--
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
    </div>
  </body>
--fcc-editable-region--
</html>
```

```css
h1 {
  text-align: center;
}
```
