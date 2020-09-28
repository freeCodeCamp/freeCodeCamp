---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cBmG9T7
forumTopicId: 18329
localeTitle: Раскомментирование в HTML
---

## Description
<section id='description'>
Комментирование - это способ, с помощью которого вы можете оставлять комментарии для других разработчиков в своем коде, не влияя на итоговый вывод, который отображается конечному пользователю. Комментирование также является удобным способом сделать код неактивным, не удаляя его целиком. Комментарии в HTML начинаются с <code>&lt;!--</code> , и заканчиваются с <code>--&gt;</code>
</section>

## Instructions
<section id='instructions'>
Раскомментируйте свои элементы <code>h1</code> , <code>h2</code> и <code>p</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make your <code>h1</code> element visible on your page by uncommenting it.
    testString: assert($("h1").length > 0);
  - text: Make your <code>h2</code> element visible on your page by uncommenting it.
    testString: assert($("h2").length > 0);
  - text: Make your <code>p</code> element visible on your page by uncommenting it.
    testString: assert($("p").length > 0);
  - text: Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.
    testString: assert(!/[^fc]-->/gi.test(code.replace(/ *<!--[^fc]*\n/g,'')));

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

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</section>
