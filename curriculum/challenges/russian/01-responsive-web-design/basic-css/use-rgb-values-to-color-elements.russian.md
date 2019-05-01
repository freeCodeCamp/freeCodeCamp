---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: ''
localeTitle: Используйте значения RGB для цветных элементов
---

## Description
<section id="description"> Еще один способ отображения цветов в CSS - использование значений <code>RGB</code> . Значение RGB для черного выглядит так: <code>rgb(0, 0, 0)</code> Значение RGB для белого выглядит следующим образом: <code>rgb(255, 255, 255)</code> Вместо того, чтобы использовать шесть шестнадцатеричных цифр, например, с шестнадцатеричным кодом, с <code>RGB</code> вы укажете яркость каждого цвета числом от 0 до 255. Если вы правильно посчитаете, две цифры для одного цвета равные 16 на 16, что дает нам всего 256 значений. Таким образом, <code>RGB</code> , начинает отсчет с нуля, и имеет то же количество возможных значений, что и шестнадцатеричный код. Вот пример того, как изменить фон тела на оранжевый, используя его код RGB. <blockquote> body { <br> background-color: rgb (255, 165, 0); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Давайте заменим шестнадцатеричный код в цвете фона нашего <code>body</code> на значение RGB для черного: <code>rgb(0, 0, 0)</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Элемент вашего <code>body</code> должен иметь черный фон.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Your <code>body</code> element should have a black background.");'
  - text: Используйте <code>rgb</code> чтобы дать вашему <code>body</code> черный цвет.
    testString: 'assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), "Use <code>rgb</code> to give your <code>body</code> element a color of black.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
  }
</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
