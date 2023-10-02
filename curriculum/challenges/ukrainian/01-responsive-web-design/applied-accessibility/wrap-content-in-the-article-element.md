---
id: 587d774e367417b2b2512aa0
title: Перенесення вмісту в тег елементу статті
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` це ще один з нових елементів в HTML5 та додає семантичного значення до Вашої розмітки. `article` - це елемент розділення, який використовується для обгортання незалежного, автономного контенту. Даний тег добре застосовувати для блогів, повідомлень на форумах або новин.

Визначення того, чи вміст може бути поданий окремо, зазвичай є власним суб'єктивним рішенням, але ви можете скористатися парою простих тестів. Запитайте себе, чи мав би цей контент все ще сенс, якби ви видалили весь контекст? Аналогічно і з текстом, чи збережеться контент, якщо він знаходиться у RSS-каналі?

Пам'ятайте, що люди, які використовують допоміжні технології, покладаються на організовану, семантично значущу розмітку, щоб краще зрозуміти вашу роботу.

**Note:** Елемент `section` є також новим у HTML5 і має дещо інше смислове значення, ніж `article`. Елемент `article` призначений для автономного контенту, а `section` для групування тематично пов’язаного контенту. За необхідності їх можна використовувати всередині один одного. Наприклад, якщо книга - це `article`, то кожен розділ - `section`. Якщо між групами контенту немає зв’язку, використовуйте `div`.

`<div>` - вміст груп `<section>` - вміст, пов'язаний з групами `<article>` - незалежний, автономний вміст груп

# --instructions--

Camper Cat використовував теги `article`, щоб обгортати публікації на своїй сторінці блогу, але він забув використати їх навколо верхнього блоку. Змініть тег `div`, щоб замість нього використовувати `article`.

# --hints--

Ваш код повинен мати три теги `article`.

```js
assert($('article').length == 3);
```

Ваш код не повинен містити жодних тегів `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
