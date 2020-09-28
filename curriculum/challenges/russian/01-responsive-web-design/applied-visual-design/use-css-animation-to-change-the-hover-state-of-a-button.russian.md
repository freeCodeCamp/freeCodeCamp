---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: https://scrimba.com/c/cg4vZAa
forumTopicId: 301073
localeTitle: Использование анимации CSS для изменения состояния наведения кнопки
---

## Description
<section id='description'>
Вы можете использовать CSS <code>@keyframes</code> для изменения цвета кнопки в состоянии зависания. Ниже приведен пример изменения ширины изображения при наведении: <blockquote> &lt;Стиль&gt; <br> img: hover { <br> animation-name: width; <br> продолжительность анимации: 500 мс; <br> } <br><br> Ширина @keyframes { <br> 100% { <br> ширина: 40 пикселей; <br> } <br> } <br> &lt;/ Стиль&gt; <br><br> &lt;img src = &quot;https://bit.ly/smallgooglelogo&quot; alt = &quot;Логотип Google&quot; /&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
Обратите внимание, что <code>ms</code> обозначает миллисекунды, где 1000 мс равно 1 с. Используйте CSS <code>@keyframes</code> чтобы изменить <code>background-color</code> элемента <code>button</code> чтобы он стал <code>#4791d0</code> когда пользователь <code>#4791d0</code> на него курсор. Правило <code>@keyframes</code> должно содержать только запись на <code>100%</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The @keyframes rule should use the <code>animation-name</code> background-color.
    testString: assert(code.match(/@keyframes\s+?background-color\s*?{/g));
  - text: There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));

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
