---
id: 587d7790367417b2b2512aaf
title: Створіть навігаційні посилання з клавішами доступу HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML пропонує атрибут `accesskey` для встановлення гарячої клавіші, що активує елемент або зосереджується на ньому. Додавання атрибута `accesskey` може покращити ефективність навігації для користувачів, здатних послуговуватися лише клавіатурою.

HTML5 дозволяє використовувати цей атрибут на будь-якому елементі, але він особливо корисний з інтерактивними елементами. Включає лінки, кнопки та керування формами.

Наприклад:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat хоче додати клавіші доступу до посилань поряд з заголовками двох статей у блозі, щоб користувачі могли швидко перейти до повного тексту. Додайте атрибут `accesskey` до обох посилань і встановіть перший на `g` (for Garfield), а другий - на `c` (for Chuck Norris).

# --hints--

Ваш код має додати атрибут `accesskey` до теґа `a` зі значенням `id` встановленим на `first`.

```js
assert($('#first').attr('accesskey'));
```

Ваш код має додати атрибут `accesskey` до теґа `a` зі значенням `id`, встановленим на `second`.

```js
assert($('#second').attr('accesskey'));
```

Ваш код має налаштувати атрибут `accesskey` на тезі `a` зі значенням `id`, встановленим на `first`, на `g`. Зауважте, що написання з великої чи маленької літери має значення.

```js
assert($('#first').attr('accesskey') == 'g');
```

Ваш код має налаштувати атрибут `accesskey` на тезі `a` зі значенням `id`, встановленим на `second`, на `c`. Зауважте, що написання з великої чи маленької літери має значення.

```js
assert($('#second').attr('accesskey') == 'c');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
