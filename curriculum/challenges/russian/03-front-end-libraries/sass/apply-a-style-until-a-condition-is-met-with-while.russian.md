---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
forumTopicId: 301454
localeTitle: Применить стиль до тех пор, пока условие не встретится с @while
---

## Description
<section id='description'>
<code>@while</code> директива является вариантом с аналогичной функциональностью на JavaScript в <code>while</code> цикл. Он создает правила CSS до тех пор, пока не будет выполнено условие. Задача <code>@for</code> привела пример создания простой сетки. Это также может работать с <code>@while</code> . <blockquote> $ x: 1; <br> @while $ x &lt;13 { <br> .col - # {$ x} {width: 100% / 12 * $ x;} <br> $ x: $ x + 1; <br> } </blockquote> Сначала определите переменную <code>$x</code> и установите ее в 1. Затем используйте директиву <code>@while</code> для создания сетки, <i>а</i> <code>$x</code> меньше 13. После установки правила CSS для <code>width</code> <code>$x</code> увеличивается на 1, чтобы избежать бесконечная петля.
</section>

## Instructions
<section id='instructions'>
Используйте <code>@while</code> для создания серии классов с разными <code>font-sizes</code> . Должно быть 10 разных классов из <code>text-1</code> в <code>text-10</code> . Затем установите <code>font-size</code> в 5px, умноженный на текущий номер индекса. Обязательно избегайте бесконечного цикла!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@while</code> directive.
    testString: assert(code.match(/@while /g));
  - text: Your code should use an index variable which starts at an index of 1.
    testString: assert(code.match(/\$.*:\s*?1;/gi));
  - text: Your code should increment the counter variable.
    testString: assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
  - text: Your <code>.text-1</code> class should have a <code>font-size</code> of 15px.
    testString: assert($('.text-1').css('font-size') == '15px');
  - text: Your <code>.text-2</code> class should have a <code>font-size</code> of 30px.
    testString: assert($('.text-2').css('font-size') == '30px');
  - text: Your <code>.text-3</code> class should have a <code>font-size</code> of 45px.
    testString: assert($('.text-3').css('font-size') == '45px');
  - text: Your <code>.text-4</code> class should have a <code>font-size</code> of 60px.
    testString: assert($('.text-4').css('font-size') == '60px');
  - text: Your <code>.text-5</code> class should have a <code>font-size</code> of 75px.
    testString: assert($('.text-5').css('font-size') == '75px');

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
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</section>
