---
id: 58a7a6ebf9a6318348e2d5aa
title: Змінюйте режим заповнення анімації
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

Усе чудово, але ще не все правильно працює. Зверніть увагу, як анімація починається з початку, коли проходить `500ms`, у результаті чого кнопка повертається до початкового кольору. Потрібно, щоб кнопка підсвічувалася.

Це можливо зробити налаштовуючи властивості `animation-fill-mode` до `forwards`. `animation-fill-mode` визначає стиль, застосований до елемента після завершення анімації. Ви можете налаштувати це так:

```css
animation-fill-mode: forwards;
```

# --instructions--

Налаштуйте властивості `animation-fill-mode` property of `button:hover` to `forwards`, щоб кнопка підсвічувалася, коли користувач наводить на неї.

# --hints--

`button:hover` повинна мати властивість `animation-fill-mode` зі значенням `forwards`.

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
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
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
