---
id: bad82fee1348bd9aedf08721
title: Mische Farben mit RGB
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Genau wie bei Hex-Code, kannst du Farben in RGB durch Kombinationen unterschiedlicher Werte mischen.

# --instructions--

Ersetze die Hex-Codes in unserem `style`-Element mit entsprechenden RGB-Werten.

<table class='table table-striped'><tbody><tr><th>Farbe</th><th>RGB</th></tr><tr><td>Blau</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Rot</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchideen-Lila</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Siena-Braun</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

Dein `h1`-Element mit dem Text `I am red!` sollte einen roten `color`-Wert besitzen.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Du solltest `rgb` für die Farbe Rot verwenden.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

Dein `h1`-Element mit dem Text `I am orchid!` sollte einen `color`-Wert von Orchideen-Lila besitzen.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Du solltest einen `rgb` Wert für die Farbe Orchidee verwenden.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

Dein `h1`-Element mit dem Text `I am blue!` sollte einen blauen `color`-Wert besitzen.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Du solltest `rgb` für die Farbe Blau verwenden.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

Dein `h1` Element mit dem Text `I am sienna!` sollte einen `color` Wert von Siena Ocker haben.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Du solltest einen `rgb`-Wert für die Farbe Siena Ocker verwenden.

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
