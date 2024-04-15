---
id: 63ee3ff1381756f9716727f2
title: CSS-Grundlagen Übung D
challengeType: 14
dashedName: css-foundations-exercise-d
---

# --description--

With this exercise, we've provided you a completed HTML file, so you will only have to edit the CSS file. Bei dieser Übung ist es wichtiger zu verstehen, wie die Verkettung verschiedener Selektoren funktioniert, als zu wissen, wie man die Attribute tatsächlich hinzufügt.

1. Du solltest eine `width` von `300px` auf dem `avatar` und der `proportioned`-Klasse sehen.
1. Du solltest ihm eine Höhe geben, damit es seine ursprünglichen quadratischen Proportionen beibehält (gib für die Höhe keinen Hardcode-Pixelwert ein!).
1. Du solltest den Elementen mit den beiden `avatar`- und `distorted`-Klassen eine `width` von `200px` geben.
1. Du solltest ihm eine `height` geben, die doppelt so groß ist wie seine Breite.

# --hints--

Du solltest eine `width` von `300px` auf dem `avatar` und der `proportioned`-Klasse haben.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style?.width === '300px');
```

Du solltest eine Höhe von `auto` auf dem `avatar` und der `proportioned`-Klasse haben.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`)
assert(style?.height === 'auto');
```

Du solltest einen Ketten-Selektor für den `avatar` und die `proportioned`-Klasse verwenden.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style);
```

Du solltest eine `width` von `200px` auf dem `avatar` und der `distorted`-Klasse haben.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.width === '200px');
```

Du solltest einen Ketten-Selektor für den `avatar` und die `distorted`-Klasse verwenden.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style);
```

Du solltest eine `height` haben, die zweimal so breit ist wie der `avatar` und die `distorted`-Klasse.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.height === '400px');
```

# --seed--

## --seed-contents--

```css

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="original proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="original distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
  </body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
  </body>
</html>
```

```css
.avatar.proportioned {
  height: auto;
  width: 300px;
}

.avatar.distorted {
  height: 400px;
  width: 200px;
}
```

