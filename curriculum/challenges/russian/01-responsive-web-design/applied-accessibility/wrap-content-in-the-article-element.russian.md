---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: https://scrimba.com/c/cPp79S3
forumTopicId: 301029
localeTitle: Оборачивание контента в элемент article
---

## Description
<section id='description'>
<code>article</code> является еще одним из новых элементов HTML5, который добавляет семантический смысл вашей разметке. <code>article</code> является секционирующим элементом и используется для обертывания независимого, автономного содержимого. Тег хорошо работает с записями блога, сообщениями на форуме или новостями.
Определение того, может ли контент быть автономным, обычно является личным выбором, но есть несколько простых тестов, которые вы можете использовать. Спросите себя, если вы удалите весь окружающий контекст, будет ли этот контент по-прежнему иметь смысл? Точно так же для текста сохранялось бы содержимое, если оно было в RSS-канале?
Помните, что люди, использующие вспомогательные технологии, полагаются на организованную, семантически значимую разметку, чтобы лучше понять вашу работу.
<strong>Заметка про элементы <code>section</code> и <code>div</code></strong><br>Элемент <code>section</code> также является новым с HTML5 и имеет несколько иной семантический смысл, чем <code>article</code>. Элемент <code>article</code> для автономного контента, а <code>section</code> для группировки тематически связанных материалов. Они могут использоваться вместе. Например, если книга является <code>article</code>, то каждая глава является <code>section</code>. Когда между группами контента нет никакой связи, используйте <code>div</code>.
<blockquote>&lt;div&gt; - сгруппированный контент<br>&lt;section&gt; - группы связанные контентом<br>&lt;article&gt; - независимые группы, автономный контент<br></blockquote>
</section>

## Instructions
<section id='instructions'>
Camper Cat использовал теги <code>article</code> для обертывания сообщений на своей странице блога, но он забыл использовать их в верхней части. Измените тег <code>div</code> чтобы вместо этого использовать тег <code>article</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have three <code>article</code> tags.
    testString: assert($('article').length == 3);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

</section>
