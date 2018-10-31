---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: Uncomment HTML
---

## Description
<section id="description"> Комментирование - это способ, которым вы можете оставлять комментарии для других разработчиков в своем коде, не влияя на итоговый вывод, который отображается конечному пользователю. Комментирование также является удобным способом сделать код неактивным, не удаляя его целиком. Комментарии в HTML начинаются с <code>&lt;!--</code> , и заканчивается на <code>--&gt;</code> </section>

## Instructions
<section id="instructions"> Раскомментируйте свои элементы <code>h1</code> , <code>h2</code> и <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Сделайте свой элемент <code>h1</code> видимым на своей странице, раскомментируя его.'
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: 'Сделайте свой элемент <code>h2</code> видимым на своей странице, раскомментируя его.'
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: 'Сделайте свой элемент <code>p</code> видимым на своей странице, раскомментируя его.'
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: 'Обязательно удалите все трейлинг-теги комментариев, т. Е. <code>--&gt;</code> .'
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
