---
id: 587d78a7367417b2b2512ae1
title: Створення руху за допомогою CSS анімації
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Коли елементи мають певну `position`, наприклад `fixed` або `relative`, `right`, `left`, `top`, і `bottom` CSS офсет властивості зміщення можуть застосовуватись до анімацій, щоб створювати рух.

Як показано на прикладі нижче, ви можете перемістити об'єкт вниз, а потім вгору, якщо встановити його на 50px `50%` властивості `top`, але спочатку встановити 0px (`0%`), і останнє — (`100%`).

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Додавання горизонтального руху до `div` анімації. Використовуючи властивість `left`, додайте до правила `@keyframes`, щоб веселка починалась на 0 pixels в `0%`, рухалась до 25 pixels в `50%` і закінчилась на -25 pixels в `100%`. Не переміщайте властивість `top` у редактор - анімація повинна мати як вертикальний, так і горизонтальний рух.

# --hints--

0px офсет `left` повинен використовуватись з правилом `@keyframes` для `0%`.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

25px офсет `left` повинен використовуватись з правилом `@keyframes` для `50%`.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

-25px офсет `left` повинен використовуватись з правилом `@keyframes` для `100%`.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
