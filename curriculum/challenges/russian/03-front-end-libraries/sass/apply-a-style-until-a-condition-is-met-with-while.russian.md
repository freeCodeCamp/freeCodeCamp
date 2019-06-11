---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: 'Применить стиль до тех пор, пока условие не встретится с @while'
---

## Description
<section id="description"> <code>@while</code> директива является вариантом с аналогичной функциональностью на JavaScript в <code>while</code> цикл. Он создает правила CSS до тех пор, пока не будет выполнено условие. Задача <code>@for</code> привела пример создания простой сетки. Это также может работать с <code>@while</code> . <blockquote> $ x: 1; <br> @while $ x &lt;13 { <br> .col - # {$ x} {width: 100% / 12 * $ x;} <br> $ x: $ x + 1; <br> } </blockquote> Сначала определите переменную <code>$x</code> и установите ее в 1. Затем используйте директиву <code>@while</code> для создания сетки, <i>а</i> <code>$x</code> меньше 13. После установки правила CSS для <code>width</code> <code>$x</code> увеличивается на 1, чтобы избежать бесконечная петля. </section>

## Instructions
<section id="instructions"> Используйте <code>@while</code> для создания серии классов с разными <code>font-sizes</code> . Должно быть 10 разных классов из <code>text-1</code> в <code>text-10</code> . Затем установите <code>font-size</code> в 5px, умноженный на текущий номер индекса. Обязательно избегайте бесконечного цикла! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать директиву <code>@while</code> .
    testString: 'assert(code.match(/@while /g), "Your code should use the <code>@while</code> directive.");'
  - text: Ваш код должен установить индексную переменную в 1 для запуска.
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "Your code should set an index variable to 1 to start.");'
  - text: Ваш код должен увеличивать счетчик.
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "Your code should increment the counter variable.");'
  - text: Класс <code>.text-1</code> должен иметь <code>font-size</code> 5 пикселей.
    testString: 'assert($(".text-1").css("font-size") == "5px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.");'
  - text: Класс <code>.text-2</code> должен иметь <code>font-size</code> 10px.
    testString: 'assert($(".text-2").css("font-size") == "10px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.");'
  - text: Класс <code>.text-3</code> должен иметь <code>font-size</code> 15px.
    testString: 'assert($(".text-3").css("font-size") == "15px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.");'
  - text: Класс <code>.text-4</code> должен иметь <code>font-size</code> 20px.
    testString: 'assert($(".text-4").css("font-size") == "20px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.");'
  - text: Класс <code>.text-5</code> должен иметь <code>font-size</code> 25px.
    testString: 'assert($(".text-5").css("font-size") == "25px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.");'
  - text: Класс <code>.text-6</code> должен иметь <code>font-size</code> 30px.
    testString: 'assert($(".text-6").css("font-size") == "30px", "Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.");'
  - text: Класс <code>.text-7</code> должен иметь <code>font-size</code> 35 пикселей.
    testString: 'assert($(".text-7").css("font-size") == "35px", "Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.");'
  - text: Класс <code>.text-8</code> должен иметь <code>font-size</code> 40 пикселей.
    testString: 'assert($(".text-8").css("font-size") == "40px", "Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.");'
  - text: Класс <code>.text-9</code> должен иметь <code>font-size</code> 45 пикселей.
    testString: 'assert($(".text-9").css("font-size") == "45px", "Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.");'
  - text: Класс <code>.text-10</code> должен иметь <code>font-size</code> 50 пикселей.
    testString: 'assert($(".text-10").css("font-size") == "50px", "Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.");'

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
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
