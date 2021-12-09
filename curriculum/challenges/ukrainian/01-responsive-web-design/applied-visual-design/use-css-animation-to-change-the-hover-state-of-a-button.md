---
id: 587d78a7367417b2b2512ae0
title: Використовуйте анімацію CSS, щоб змінити положення клавіші при наведенні
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Ви можете використати CSS `@keyframes`, щоб змінити колір клавіші при наведенні.

Ось приклад зміни ширини зображення на курсорі:

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

Зверніть увагу, що `ms` означає мілісекунди, де 1000 мілісекунд дорівнює одній секунді.

Використовуйте CSS `@keyframes`, щоб змінити `background-color` елемента `button`, так щоб він став `#4791d0`, коли користувач наводить на нього курсор. Правило `@keyframes` повинне мати лише запис на `100%`.

# --hints--

Правило @keyframes повинне використовувати колір фону `animation-name`.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Повинна бути лише одна умова під `@keyframes`, яка змінює `background-color` до `#4791d0` на 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
