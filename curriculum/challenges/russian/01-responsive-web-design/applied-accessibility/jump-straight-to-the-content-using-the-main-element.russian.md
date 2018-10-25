---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: Перейти непосредственно к контенту Используя элемент main
---

## Description
<section id="description"> В HTML5 появилось несколько новых элементов, которые предоставляют разработчикам больше выбора, а также включают функции доступности. Среди прочих, эти теги включают в себя <code>main</code> , <code>header</code> , <code>footer</code> , <code>nav</code> , <code>article</code> и <code>section</code>. По умолчанию браузер отображает эти элементы аналогично простому <code>div</code> . Однако использование их в соответствующих случаях дает дополнительный смысл вашей разметке. Имя тега может указывать просто тип информации, который он содержит, что добавляет семантический смысл такому контенту. Вспомогательные технологии могут получить доступ к этой информации, чтобы предоставить пользователям более подробные сведения о странице или варианты навигации. <code>main</code> элемент используется для обертывания (как вы уже догадались) основного содержимого, и на странице он должен быть только один. Он используется для того, чтобы окружать информацию, связанную с главной темой вашей страницы. Он не должен включать элементы, которые повторяются на разных страницах, например, ссылки на навигацию или баннеры. <code>main</code> тег также имеет встроенную ориентирную функцию, которую вспомогательные технологии могут использовать для быстрого перехода к основному контенту. Если вы когда-либо видели ссылку «Перейти к основному контенту» в верхней части страницы, то использование тега main автоматически предоставляет вспомогательным устройствам такую функциональность. </section>

## Instructions
<section id="instructions"> Camper Cat имеет некоторые большие идеи для своей страницы об оружии ниндзи. Помогите ему настроить свою разметку, добавив открывающие и закрывающие <code>main</code> теги между <code>header</code> и <code>footer</code> (рассмотренные в других задачах). Пока что оставьте <code>main</code> теги пустыми. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: В вашем коде должен быть один <code>main</code> тег.
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: <code>main</code> теги должны быть между закрывающим тегом <code>header</code> и открывающим тегом <code>footer</code>.
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
