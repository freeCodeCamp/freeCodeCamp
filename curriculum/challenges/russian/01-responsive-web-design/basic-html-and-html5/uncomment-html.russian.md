---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: ''
localeTitle: Раскомментирование в HTML
---

## Описание
<section id="description"> Комментирование - это способ, с помощью которого вы можете оставлять комментарии для других разработчиков в своем коде, не влияя на итоговый вывод, который отображается конечному пользователю. Комментирование также является удобным способом сделать код неактивным, не удаляя его целиком. Комментарии в HTML начинаются с <code>&lt;!--</code> , и заканчиваются с <code>--&gt;</code> </section>

## Инструкции
<section id="instructions"> Раскомментируйте свои элементы <code>h1</code> , <code>h2</code> и <code>p</code> . </section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: 'Раскомментируйте элемент <code>h1</code>, чтобы он стал видимым на странице.'
    testString: 'assert($("h1").length > 0, "Make your <code>h1</code> element visible on your page by uncommenting it.");'
  - text: 'Раскомментируйте элемент <code>h2</code>, чтобы он стал видимым на странице.'
    testString: 'assert($("h2").length > 0, "Make your <code>h2</code> element visible on your page by uncommenting it.");'
  - text: 'Раскомментируйте элемент <code>p</code>, чтобы он стал видимым на странице.'
    testString: 'assert($("p").length > 0, "Make your <code>p</code> element visible on your page by uncommenting it.");'
  - text: 'Проверьте, удалили ли вы все комментирующие теги, т. е. <code>--&gt;</code> .'
    testString: 'assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,"")), "Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.");'

```

</section>

## Исходной код
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

## Решение
<section id='solution'>

```js
// solution required
```
</section>
