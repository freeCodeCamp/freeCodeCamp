---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: 'Используйте @if и @else, чтобы добавить логику в свои стили.'
---

## Description
<section id="description"> Директива <code>@if</code> в Sass полезна для проверки конкретного случая - она ​​работает так же, как и оператор <code>if</code> в JavaScript. <blockquote> @mixin make-bold ($ bool) { <br> @if $ bool == true { <br> font-weight: bold; <br> } <br> } </blockquote> И так же, как в JavaScript, <code>@else if</code> и <code>@else</code> test для получения дополнительных условий: <blockquote> @mixin text-effect ($ val) { <br> @if $ val == опасность { <br> красный цвет; <br> } <br> @else, если $ val == alert { <br> цвет: желтый; <br> } <br> @else, если $ val == success { <br> цвет: зеленый; <br> } <br> @else { <br> черный цвет; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions"> Создайте <code>mixin</code> называемый <code>border-stroke</code> который принимает параметр <code>$val</code> . <code>mixin</code> должен проверить следующие условия, используя <code>@if</code> , <code>@else if</code> и <code>@else</code> : <blockquote> свет - 1px сплошной черный <br> средний - 3px сплошной черный <br> тяжелый - 6px сплошной черный <br> none - нет границы </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен объявить <code>mixin</code> именем <code>border-stroke</code> который имеет параметр с именем <code>$val</code> .
    testString: 'assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.");'
  - text: 'Ваш <code>mixin</code> должен иметь инструкцию <code>@if</code> чтобы проверить, светло ли <code>$val</code> , и установить <code>border</code> в 1px сплошным черным.'
    testString: 'assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.");'
  - text: 'Ваш <code>mixin</code> должен иметь <code>@else if</code> чтобы проверить, является ли <code>$val</code> средним, и установить <code>border</code> на 3px сплошной черный.'
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.");'
  - text: ''
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.");'
  - text: Ваш <code>mixin</code> должен иметь инструкцию <code>@else</code> чтобы установить <code>border</code> в none.
    testString: 'assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
