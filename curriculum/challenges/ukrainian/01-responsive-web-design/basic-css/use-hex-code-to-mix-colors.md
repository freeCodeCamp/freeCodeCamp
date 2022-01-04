---
id: bad87fee1348bd9aedf08721
title: Використовувати шістнадцятковий код для змішаних кольорів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

Для перегляду, використовуйте 6 шістнадцяткових цифр для відображення кольорів, по дві для червоного (R), зеленого (G) та синього (B) компонентів.

З цих трьох чистих кольорів ( червоного, зеленого та синього), ми можемо варіювати кількість кожного з них, для того, щоб створити більше 16 мільйонів інших кольорів!

Наприклад, оранжевий - це чистий червоний, змішаний із невеликою кількістю зеленого та зовсім без синього. У шістнадцятковому коді це означатиме `#FFA500`.

Цифра `0` є найменшим числом в шістнадцятковому коді і являє собою повну відсутність кольору.

Цифра `F` є найбільшим числом в шістнадцятковому коді, що відображає максимально можливу яскравість.

# --instructions--

Замініть слово колір в нашому `style` елементом на їх правильні шістнадцяткові коди.

<table class='table table-striped'><tbody><tr><th>Колір</th><th>Шістнадцятковий код кольору</th></tr><tr><td>Синьо-волошковий</td><td><code>#1E90FF</code></td></tr><tr><td>Зелений</td><td><code>#00FF00</code></td></tr><tr><td>Оранжевий</td><td><code>#FFA500</code></td></tr><tr><td>Червоний</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

Ваш `h1` елемент з текстом `I am red!` має демонструватися `color` червоним.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Замість слова `hex code` для чорного кольору варто використовувати слово `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

Ваш `h1` елемент з текстом `I am green!` має демонструватися `color` зеленим.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Замість слова `hex code` для чорного кольору варто використовувати слово `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

Вашому `h1` елементу з текстом `I am dodger blue!` варто надати `color` синьо-волошкового.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

Замість слова `hex code` для синьо-волошкового кольору варто використовувати слово `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

Вашому `h1` елементу з текстом `I am orange!` варто надати `color` оранжевого.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

Замість `hex code` для оранжевого кольору варто використовувати слово `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
