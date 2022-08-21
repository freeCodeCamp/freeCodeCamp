---
id: 587d7dbf367417b2b2512bba
title: Verwende @each, um über Elemente in einer Liste zu iterieren
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

Die letzte Aufgabe hat gezeigt, wie die `@for`-Direktive einen Start- und Endwert verwendet, um eine Schleife eine bestimmte Anzahl von Malen zu durchlaufen. Sass bietet auch die `@each`-Direktive, die über jedes Element in einer Liste oder Map iteriert. Bei jeder Iteration wird der Variable der aktuelle Wert aus der Liste oder Map zugewiesen.

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

Eine Map hat eine etwas andere Syntax. Hier ist ein Beispiel:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

Beachte, dass die Variable `$key` benötigt wird, um die Schlüssel (Keys) in der Map zu referenzieren. Sonst würde das kompilierte CSS `color1`, `color2`... enthalten. Die beiden obigen Codebeispiele werden in das folgende CSS umgewandelt:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

Schreibe eine `@each`-Direktive, die durch eine Liste geht: `blue, black, red` und jede Variable einer Klasse `.color-bg` zuordnet, wobei sich der Teil `color` für jedes Element ändert. Jede Klasse sollte `background-color` auf die jeweilige Farbe setzen.

# --hints--

Dein Code sollte die `@each`-Direktive verwenden.

```js
assert(code.match(/@each /g));
```

Deine Klasse `.blue-bg` sollte `background-color` gleich Blau (blue) sein.

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

Deine Klasse `.black-bg` sollte `background-color` gleich Schwarz (black) sein.

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

Deine Klasse `.red-bg` sollte `background-color` gleich Rot (red) sein.

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
