---
id: bad82fee1348bd9aedf08721
title: Використовуйте RGB модель для поєднання кольорів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Так само, як і з шістнадцятковим кодом, ви можете поєднувати кольори за допомогою моделі RGB, використовуючи комбінації різних значень.

# --instructions--

Замініть шістнадцяткові коди на наш елемент `style` з правильними значеннями моделі RGB.

<table class='table table-striped'><tbody><tr><th>Колір</th><th>RGB модель</th></tr><tr><td>Синій</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Червоний</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Рожевий</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Коричневий</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

Ваш елемент `h1` з текстом `I am red!` повинен бути червоним кольором `color`.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Вам потрібно використовувати `rgb` для червоного кольору.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

Ваш елемент `h1` з текстом `I am orchid!` повинен бути рожевого кольору `color`.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Вам потрібно використовувати `rgb` для рожевого кольору.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

Ваш елемент `h1` з текстом `I am blue!` повинен бути синім кольором `color`.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Вам слід використовувати `rgb` для синього кольору.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

Ваш елемент `h1` з текстом `I am sienna!` повинен бути коричневого кольору `color`.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Вам слід використовувати `rgb` для коричневого кольору.

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
