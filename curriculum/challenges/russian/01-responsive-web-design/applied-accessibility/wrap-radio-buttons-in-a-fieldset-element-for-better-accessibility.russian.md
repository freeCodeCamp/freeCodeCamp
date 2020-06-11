---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: https://scrimba.com/c/cVJVefw
forumTopicId: 301030
localeTitle: Обтекание переключателей в элементе Fieldset для лучшей доступности
---

## Description
<section id='description'>
Следующая тема охватывает доступность переключателей. Каждый выбор дается <code>label</code> с <code>for</code> атрибутом привязки к <code>id</code> соответствующего пункта, как рассматривалось в последней задаче. Поскольку радиокнопки часто входят в группу, где пользователь должен выбрать одну, есть способ семантически показать, что выбор является частью набора. Тег <code>fieldset</code> окружает всю группу переключателей для достижения этого. Он часто использует тег <code>legend</code> чтобы предоставить описание для группировки, которое считывается программами чтения с экрана для каждого выбора в элементе <code>fieldset</code>. <code>fieldset</code> и тег <code>legend</code> не нужны, если выбор не требует пояснений, например, гендерный выбор. Использование <code>label</code> с <code>for</code> атрибута для каждого переключателя достаточно. Вот пример: <blockquote> &lt;form&gt; <br> &lt;fieldset&gt; <br> &lt;legend&gt; Выберите один из этих трех элементов: &lt;/ legend&gt; <br> &lt;input id = &quot;one&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;one&quot;&gt; <br> &lt;label for = &quot;one&quot;&gt; Выбор 1 &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;two&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;two&quot;&gt; <br> &lt;label for = &quot;two&quot;&gt; Выбор 2 &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;three&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;three&quot;&gt; <br> &lt;label for = &quot;three&quot;&gt; Choice Three &lt;/ label&gt; <br> &lt;/ fieldset&gt; <br> &lt;/ form&gt; <br></blockquote>
</section>

## Instructions
<section id='instructions'>
Camper Cat хочет получить информацию о уровне ниндзя своих пользователей, когда они регистрируются в его списке электронной почты. Он добавил набор переключателей и узнал из нашего последнего урока, чтобы использовать метки меток <code>for</code> атрибутов для каждого выбора. Вперед Camper Cat! Однако его код по-прежнему нуждается в некоторой помощи. Измените тег <code>div</code> окружающий радиокнопки, на тег <code>fieldset</code> и измените тег <code>p</code> внутри него на <code>legend</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have a <code>fieldset</code> tag around the radio button set.
    testString: assert($('fieldset').length == 1);
  - text: Make sure your <code>fieldset</code> element has a closing tag.
    testString: assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length);
  - text: Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.
    testString: assert($('legend').length == 1);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);
  - text: Your code should no longer have a <code>p</code> tag around the text asking what level ninja a user is.
    testString: assert($('p').length == 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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


      <!-- Add your code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Add your code above this line -->


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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

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


      <!-- Add your code below this line -->
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>
      <!-- Add your code above this line -->


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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
