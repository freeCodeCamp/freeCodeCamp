---
id: 587d778a367417b2b2512aa6
title: Як покращити доступність поля форми за допомогою Елементу Label
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

Покращення доступності за допомогою семантичної розмітки HTML стосується використання як відповідних назв тегів, так і атрибутів. Наступні декілька завдань охоплюють деякі важливі сценарії використання атрибутів у формах.

Тег `label`, який огортає текст певного елемента керування формою, зазвичай це ім'я або мітка на вибору. Це додає більше змісту елементу і робить форму більш читабельною. Атрибут `for` тегу `label` явно пов'язує `label` з елементом керування формою і використовується програмами зчитування з екрану.

Ви ознайомилися з радіокнопками та їхніми мітками на уроці в розділі "База HTML". На цьому уроку, ми згорнули елемент введення радіокнопки всередині елемента `label` разом з текстом мітки для того, щоб зробити текст активним на екрані. Інший варіант — це використати атрибут `for`, про що йдеться у цьому уроці.

Значення атрибута `for` має збігатися зі значенням атрибута `id` елемента керування формою. Приклад:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat очікує великого інтересу до своїх продуманих публікацій у блозі і хоче включити форму реєстрації електронною поштою. Додайте атрибут `for` до `label` електронної пошти, яка збігається з `id` на полі `input`.

# --hints--

Ваш код має містити атрибут `for` у не пустому тезі `label`.

```js
assert($('label').attr('for'));
```

Ваше значення атрибута `for` має співпадати зі значенням `id` у полі `input` електронної адреси.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
