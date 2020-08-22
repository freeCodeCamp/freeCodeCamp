---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
localeTitle: Создать многоразовый CSS с помощью Mixins
---

## Description
<section id='description'>
В Sass <code>mixin</code> представляет собой группу объявлений CSS, которые можно использовать повторно в таблице стилей. Новые функции CSS требуют времени, прежде чем они будут полностью приняты и готовы к использованию во всех браузерах. По мере добавления функций в браузеры, правила CSS, использующие их, могут потребоваться префиксы поставщиков. Рассмотрим «box-shadow»: <blockquote> div { <br> -webkit-box-shadow: 0px 0px 4px #fff; <br> -moz-box-shadow: 0px 0px 4px #fff; <br> -ms-box-shadow: 0px 0px 4px #fff; <br> box-shadow: 0px 0px 4px #fff; <br> } </blockquote> Очень много нужно переписать это правило для всех элементов, у которых есть <code>box-shadow</code> , или изменить каждое значение для проверки различных эффектов. <code>Mixins</code> похожи на функции CSS. Вот как написать один: <blockquote> @mixin box-shadow ($x, $y, $blur, $c) { <br> -webkit-box-shadow: $x $y $blur $c; <br> -moz-box-shadow: $x $y $blur $c; <br> -ms-box-shadow: $x $y $blur $c; <br> box-shadow: $x $y $blur $c; <br> } </blockquote> Определение начинается с <code>@mixin</code> за которым следует пользовательское имя. Параметры ( <code>$x</code> , <code>$y</code> , <code>$blur</code> и <code>$c</code> в приведенном выше примере) являются необязательными. Теперь, когда требуется правило <code>box-shadow</code> , только одна строка, вызывающая <code>mixin</code> заменяет необходимость вводить все префиксы поставщика. <code>mixin</code> вызывается с директивой <code>@include</code> : <blockquote> div { <br> @include box-shadow (0px, 0px, 4px, #fff); <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Напишите <code>mixin</code> для <code>mixin</code> <code>border-radius</code> и дайте ему параметр <code>$radius</code> . Он должен использовать все префиксы поставщика из примера. Затем используйте <code>#awesome</code> <code>border-radius</code> <code>mixin</code> чтобы придать <code>#awesome</code> элементам радиус границы 15px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.
    testString: assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
  - text: Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-moz-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-ms-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4);
  - text: Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.
    testString: assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style type='text/sass'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

</section>
