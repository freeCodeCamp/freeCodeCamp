---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
forumTopicId: 301462
localeTitle: Используйте @ для создания петли Sass
---

## Description
<section id='description'>
Директива <code>@for</code> добавляет стили в цикле, очень похожие <code>for</code> цикл <code>for</code> в JavaScript. <code>@for</code> используется двумя способами: «начать с конца» или «начать с конца». Основное различие заключается в том, что «начало к концу» <em>исключает</em> конечный номер, а «начало через конец» <em>включает</em> конечный номер. Вот начало <b>через</b> конец , например: <blockquote> @for $ i от 1 до 12 { <br> .col - # {$ i} {width: 100% / 12 * $ i; } <br> } </blockquote> Часть <code>#{$i}</code> - это синтаксис для объединения переменной ( <code>i</code> ) с текстом для создания строки. Когда файл Sass преобразуется в CSS, он выглядит так: <blockquote> .col-1 { <br> ширина: 8,33333%; <br> } <br><br> .col-2 { <br> ширина: 16,66667%; <br> } <br><br> ... <br><br> .col-12 { <br> ширина: 100%; <br> } </blockquote> Это мощный способ создания сетки. Теперь у вас есть двенадцать вариантов ширины столбцов, доступных как классы CSS.
</section>

## Instructions
<section id='instructions'>
Напишите директиву <code>@for</code> которая принимает переменную <code>$j</code> которая идет от 1 <b>до</b> 6. Она должна создать 5 классов с именем <code>.text-1</code> to <code>.text-5</code> где каждый имеет <code>font-size</code> установленный в 10px, умноженный на индекс.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@for</code> directive.
    testString: assert(code.match(/@for /g));
  - text: Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.
    testString: assert($('.text-1').css('font-size') == '10px');
  - text: Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.
    testString: assert($('.text-2').css('font-size') == '20px');
  - text: Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.
    testString: assert($('.text-3').css('font-size') == '30px');
  - text: Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.
    testString: assert($('.text-4').css('font-size') == '40px');
  - text: Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.
    testString: assert($('.text-5').css('font-size') == '50px');

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

```html
<style type='text/sass'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 10px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</section><section id='solution'>

```html
<style type='text/sass'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 10px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</section>
