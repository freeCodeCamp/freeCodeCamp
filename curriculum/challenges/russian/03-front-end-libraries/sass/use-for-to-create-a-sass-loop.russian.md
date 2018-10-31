---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Используйте @ для создания петли Sass
---

## Description
<section id="description"> Директива <code>@for</code> добавляет стили в цикле, очень похожие <code>for</code> цикл <code>for</code> в JavaScript. <code>@for</code> используется двумя способами: «начать с конца» или «начать с конца». Основное различие заключается в том, что «начало к концу» <em>исключает</em> конечный номер, а «начало через конец» <em>включает</em> конечный номер. Вот начало <b>через</b> конец , например: <blockquote> @for $ i от 1 до 12 { <br> .col - # {$ i} {width: 100% / 12 * $ i; } <br> } </blockquote> Часть <code>#{$i}</code> - это синтаксис для объединения переменной ( <code>i</code> ) с текстом для создания строки. Когда файл Sass преобразуется в CSS, он выглядит так: <blockquote> .col-1 { <br> ширина: 8,33333%; <br> } <br><br> .col-2 { <br> ширина: 16,66667%; <br> } <br><br> ... <br><br> .col-12 { <br> ширина: 100%; <br> } </blockquote> Это мощный способ создания сетки. Теперь у вас есть двенадцать вариантов ширины столбцов, доступных как классы CSS. </section>

## Instructions
<section id="instructions"> Напишите директиву <code>@for</code> которая принимает переменную <code>$j</code> которая идет от 1 <b>до</b> 6. Она должна создать 5 классов с именем <code>.text-1</code> to <code>.text-5</code> где каждый имеет <code>font-size</code> установленный в 10px, умноженный на индекс. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать директиву <code>@for</code> .
    testString: 'assert(code.match(/@for /g), "Your code should use the <code>@for</code> directive.");'
  - text: Класс <code>.text-1</code> должен иметь <code>font-size</code> 10px.
    testString: 'assert($(".text-1").css("font-size") == "10px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.");'
  - text: Класс <code>.text-2</code> должен иметь <code>font-size</code> 20 пикселей.
    testString: 'assert($(".text-2").css("font-size") == "20px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.");'
  - text: Класс <code>.text-3</code> должен иметь <code>font-size</code> 30 пикселей.
    testString: 'assert($(".text-3").css("font-size") == "30px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.");'
  - text: ''
    testString: 'assert($(".text-4").css("font-size") == "40px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.");'
  - text: Класс <code>.text-5</code> должен иметь <code>font-size</code> 50 пикселей.
    testString: 'assert($(".text-5").css("font-size") == "50px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
