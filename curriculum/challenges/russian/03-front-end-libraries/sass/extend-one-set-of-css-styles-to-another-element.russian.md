---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
forumTopicId: 301456
localeTitle: Расширение одного набора стилей CSS для другого элемента
---

## Description
<section id='description'>
У Sass есть функция, называемая <code>extend</code> которая упрощает заимствование правил CSS из одного элемента и построение на них в другом. Например, <code>.panel</code> блок правил CSS <code>.panel</code> класс <code>.panel</code> . Он имеет <code>background-color</code> , <code>height</code> и <code>border</code> . <blockquote> .panel { <br> background-color: red; <br> высота: 70px; <br> граница: 2px сплошной зеленый; <br> } </blockquote> Теперь вам нужна другая панель под названием <code>.big-panel</code> . Он имеет те же базовые свойства, что и <code>.panel</code> , но также требует <code>width</code> и <code>font-size</code> . Можно скопировать и вставить исходные правила CSS из <code>.panel</code> , но код становится повторяющимся, когда вы добавляете больше типов панелей. Директива <code>extend</code> - это простой способ повторного использования правил, написанных для одного элемента, а затем добавить другое для другого: <blockquote> .big панели { <br> @extend .panel; <br> ширина: 150 пикселей; <br> font-size: 2em; <br> } </blockquote> <code>.big-panel</code> будет иметь те же свойства, что и <code>.panel</code> в дополнение к новым стилям.
</section>

## Instructions
<section id='instructions'>
Создайте класс <code>.info-important</code> который расширяет <code>.info</code> а также имеет <code>background-color</code> установленный на пурпурный.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>info-important</code> class should have a <code>background-color</code> set to <code>magenta</code>.
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi));
  - text: Your <code>info-important</code> class should use <code>@extend</code> to inherit the styling from the <code>info</code> class.
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

</section>
