---
id: 587d78a7367417b2b2512adf
title: Дізнайтеся, як працюють CSS @keyframames і властивості анімації
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Щоб анімувати елемент, потрібно знати про властивості анімації і правило `@keyframes`. Властивості анімації визначають поведінку анімації і правило `@keyframes` контролює, що відбувається під час цієї анімації. Загалом, існує вісім властивостей анімації. Ми не будемо ускладнювати це завдання і розглянемо спершу дві найважливіші:

`animation-name` встановлює назву анімації, яка пізніше використовується `@keyframes`, щоб вказати CSS, які правила використовуються з якими анімаціями.

`animation-duration` встановлює тривалість анімації.

`@keyframes` це спосіб точно вказати, що відбувається в анімації протягом цієї тривалості. Це робиться надавши властивості CSS певним "кадрам" під час анімації, з відсотками в межах від 0% до 100%. Якщо порівняти це з фільмом, властивості CSS для 0% - це те, як елемент відображається на початковій сцені. Властивості CSS для 100% - це те, як цей елемент виглядає в кінці прямо саме перед тим, як починаються титри. Тоді CSS використовує магію заміни елемента за вказану тривалість для відтворення сцени. Ось приклад, що ілюструє використання `@keyframes` та властивостей анімації:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Для елемента з id `anim` фрагмент коду вище встановлює `animation-name` на `colorful` і встановлює `animation-duration` на 3 секунди. Тоді правило `@keyframes` посилається на властивості анімації з назвою `colorful`. Він встановлює синій колір на початку анімації (0%), який перейде в жовтий до кінця анімації (100%). Ви не обмежені лише початковим та кінцевим переходами, ви можете встановити властивості елементу в будь-яких межах між 0% і 100%.

# --instructions--

Створіть анімацію для елемента з id `rect`, встановивши `animation-name` на `rainbow` та `animation-duration` на 4 секунди. Далі, задайте правило `@keyframes` і встановіть голубий `background-color` на початку анімації (`0%`), зелений посередині анімації (`50%`) та жовтий в кінці анімації (`100%`).

# --hints--

Елемент з id `rect` повинен мати властивість `animation-name` зі значенням `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

Елемент з id `rect` повинен мати `animation-duration` 4 секунд.

```js
assert($('#rect').css('animation-duration') == '4s');
```

Правило `@keyframes` повинно використовувати `animation-name` `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

Правило `@keyframes` повинно використовувати для `rainbow` `blue` `background-color` при 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

Правило `@keyframes` повинно використовувати для `rainbow` `green` `background-color` при 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

Правило `@keyframes` повинно використовувати для `rainbow` `yellow` `background-color` при 100%.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
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
  }

  #rect {


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
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
