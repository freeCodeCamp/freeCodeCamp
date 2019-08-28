---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: https://scrimba.com/c/cVJDmcE
forumTopicId: 301064
localeTitle: Изменить режим заполнения анимации
---

## Description
<section id='description'>
Это здорово, но пока это не работает. Обратите внимание, как сбрасывается анимация после <code>500ms</code> , и кнопка возвращается к исходному цвету. Вы хотите, чтобы кнопка оставалась подсвеченной. Это можно сделать, установив свойство <code>animation-fill-mode</code> <code>forwards</code> . Режим <code>animation-fill-mode</code> задает стиль, применяемый к элементу, когда анимация завершена. Вы можете установить его так: <code>animation-fill-mode: forwards;</code>
</section>

## Instructions
<section id='instructions'>
Задайте свойство <code>animation-fill-mode</code> <code>button:hover</code> <code>forwards</code> чтобы кнопка оставалась выделенной, когда пользователь наводил на нее курсор.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>button:hover</code> should have a <code>animation-fill-mode</code> property with a value of <code>forwards</code>.
    testString: assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    /* add your code below this line */

    /* add your code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>

```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
