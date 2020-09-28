---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
forumTopicId: 301463
localeTitle: Используйте @if и @else, чтобы добавить логику в свои стили.
---

## Description
<section id='description'>
Директива <code>@if</code> в Sass полезна для проверки конкретного случая - она ​​работает так же, как и оператор <code>if</code> в JavaScript. <blockquote> @mixin make-bold ($ bool) { <br> @if $ bool == true { <br> font-weight: bold; <br> } <br> } </blockquote> И так же, как в JavaScript, <code>@else if</code> и <code>@else</code> test для получения дополнительных условий: <blockquote> @mixin text-effect ($ val) { <br> @if $ val == опасность { <br> красный цвет; <br> } <br> @else, если $ val == alert { <br> цвет: желтый; <br> } <br> @else, если $ val == success { <br> цвет: зеленый; <br> } <br> @else { <br> черный цвет; <br> } <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Создайте <code>mixin</code> называемый <code>border-stroke</code> который принимает параметр <code>$val</code> . <code>mixin</code> должен проверить следующие условия, используя <code>@if</code> , <code>@else if</code> и <code>@else</code> :
<blockquote>свет - 1px сплошной черный<br>средний - 3px сплошной черный<br>тяжелый - 6px сплошной черный</blockquote>
Если <code>$val</code> не является <code>light</code>, <code>medium</code>, или <code>heavy</code>, для границы должно быть установлено значение <code>none</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.
    testString: assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
  - text: Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.
    testString: assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.
    testString: assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));

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

```html
<style type='text/sass'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

</section>
