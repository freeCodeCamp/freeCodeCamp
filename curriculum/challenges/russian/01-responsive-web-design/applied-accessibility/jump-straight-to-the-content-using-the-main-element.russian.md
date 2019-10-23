---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: https://scrimba.com/c/cPp7zuE
forumTopicId: 301018
localeTitle: Перейти прямо к контенту, используя элемент main
---

## Description
<section id='description'>
В HTML5 появилось несколько новых элементов, которые предоставляют разработчикам больше опций, а также включают функции доступности. Эти теги включают в себя <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>article</code> и <code>section</code>, среди прочих. По умолчанию браузер отображает эти элементы аналогично традиционному <code>div</code> . Однако использование их в соответствующих случаях дает дополнительный смысл в вашей разметке. Имя тега может указывать на тип информации, который он содержит, что добавляет семантический смысл этому контенту. Вспомогательные технологии могут получить доступ к этой информации, чтобы предоставить пользователям более подробные сведения о странице или вариантах навигации.
 Элемент <code>main</code> используется для обертывания (как вы уже догадались) основного содержимого, и на странице должно быть только один такой элемент. Он предназначен для того, чтобы обертывать информацию, связанную с центральной темой вашей страницы. Он не должен включать элементы, которые повторяются на разных страницах, например, ссылки на навигацию или баннеры. <code>main</code> тег также имеет встроенную ориентирную функцию, которую вспомогательные технологии могут использовать для быстрого перехода к основному контенту. Если вы когда-либо видели ссылку «Перейти к основному содержимому» в верхней части страницы, использование тега <code>main</code> автоматически предоставляет вспомогательные устройства, которые имеют функциональность.
</section>

## Instructions
<section id='instructions'>
Camper Cat имеет несколько больших идей для своей страницы оружия ниндзя. Помогите ему настроить свою разметку, добавив открывающие и закрывающие <code>main</code>-теги между <code>header</code> и <code>footer</code> (из других задач). Пока не оставляйте тег <code>main</code> пустым.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>main</code> tag.
    testString: assert($('main').length == 1);
  - text: The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.
    testString: assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));

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

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```

</section>
