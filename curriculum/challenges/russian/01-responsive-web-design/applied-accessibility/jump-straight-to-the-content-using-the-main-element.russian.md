---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: Перейти прямо к контенту Используя основной элемент
---

## Description
<section id="description"> В HTML5 появилось несколько новых элементов, которые предоставляют разработчикам больше опций, а также включают функции доступности. Эти теги включают в себя <code>main</code> , <code>header</code> , <code>footer</code> , <code>nav</code> , <code>article</code> и <code>section</code> , среди прочих. По умолчанию браузер отображает эти элементы аналогично смиренному <code>div</code> . Однако использование их в соответствующих случаях дает дополнительный смысл в вашей разметке. Имя тега может указывать только тип информации, который он содержит, что добавляет семантический смысл этому контенту. Вспомогательные технологии могут получить доступ к этой информации, чтобы предоставить пользователям более подробные сведения о странице или варианты навигации. <code>main</code> элемент используется для обертывания (вы уже догадались) основного содержимого, и на странице должно быть только одно. Он предназначен для того, чтобы окружать информацию, связанную с центральной темой вашей страницы. Он не должен включать элементы, которые повторяются на разных страницах, например, ссылки на навигацию или баннеры. <code>main</code> тег также имеет встроенную ориентирную функцию, которую вспомогательные технологии могут использовать для быстрого перехода к основному контенту. Если вы когда-либо видели ссылку «Перейти к основному контенту» в верхней части страницы, использование основного тега автоматически предоставляет вспомогательные устройства, которые имеют функциональность. </section>

## Instructions
<section id="instructions"> Camper Cat имеет некоторые большие идеи для своей страницы оружия ниндзя. Помогите ему настроить свою разметку, добавив открывающие и закрывающие <code>main</code> теги между <code>header</code> и <code>footer</code> (в других задачах). Пока не оставляйте <code>main</code> теги пустыми. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: В вашем коде должен быть один <code>main</code> тег.
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: <code>main</code> теги должны быть между тегом закрывающего <code>header</code> тегом нижнего <code>footer</code> открытия.
    testString: 'assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi), "The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
