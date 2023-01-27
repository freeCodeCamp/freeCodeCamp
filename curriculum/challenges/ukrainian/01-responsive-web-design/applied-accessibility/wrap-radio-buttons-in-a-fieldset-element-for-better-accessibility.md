---
id: 587d778b367417b2b2512aa7
title: Зберігайте радіокнопки в елементі fieldset для кращої доступності
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

Наступна тема стосується доступності радіокнопок. Кожній опції надається мітка `label` з атрибутом `for`, прив'язаним до `id` відповідного об'єкта, як пояснюється в останньому завданні. Оскільки радіокнопки часто знаходяться в групі, де користувач має обрати лише одну, існує спосіб семантично продемонструвати, що вибір є частиною набору.

Для цього всю групу радіокнопок оточує теґ `fieldset`. Він часто використовує теґ `legend`, щоб забезпечити наявність опису групи кнопок, який фіксують зчитувачі з екрана для кожної опції в елементі `fieldset`.

Обгортання `fieldset` і теґ `legend` не є обов'язковими у використанні, коли опції зрозумілі самі по собі, наприклад, як вибір статі. Достатньо використовувати `label` з атрибутом `for` для кожної радіокнопки.

Наприклад:

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

Camper Cat хоче отримувати інформацію про рівень ніндзя користувачів на його сайті, коли вони підписуються на електронну розсилку. Він уже додав набір радіокнопок, а на попередньому уроці навчився використовувати теґи `label` з атрибутами `for` для кожної опції. Вперед, Camper Cat! Однак його код усе ще потребує допомоги. Замініть теґ `div`, що оточує радіокнопки, на теґ `fieldset`, а потім замініть теґ `p` усередині нього на `legend`.

# --hints--

Ваш код має містити теґ `fieldset` навколо набору радіокнопок.

```js
assert($('fieldset').length == 1);
```

Елемент `fieldset` повинен мати кінцевий теґ.

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

Ваш код має містити теґ `legend` навколо тексту із запитанням про рівень ніндзя.

```js
assert($('legend').length == 1);
```

Ваш код не повинен містити жодних тегів `div`.

```js
assert($('div').length == 0);
```

Ваш код уже не має містити теґ `p` навколо тексту з запитанням про рівень ніндзя.

```js
assert($('p').length == 4);
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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->


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

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>

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
