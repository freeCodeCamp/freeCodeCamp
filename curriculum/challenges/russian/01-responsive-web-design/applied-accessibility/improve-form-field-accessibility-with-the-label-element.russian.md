---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: https://scrimba.com/c/cGJMMAN
forumTopicId: 301016
localeTitle: Улучшить доступность поля формы с помощью элемента Element
---

## Description
<section id='description'>
Улучшение доступности с семантической разметкой HTML применяется к использованию как соответствующих имен тегов, так и атрибутов. Следующие несколько проблем охватывают некоторые важные сценарии с использованием атрибутов в формах. <code>label</code> метки обертывают текст для определенного элемента управления формой, как правило это имя или ярлык для выбора. Это связывает смысл с элементом и делает форму более читаемой. <code>for</code> атрибут на <code>label</code> теге явно связывает этот <code>label</code> с контролем формы и используется для чтения с экрана. Вы узнали о переключателях и их ярлыках в уроке в разделе «Основы HTML». В этом уроке мы завернули элемент ввода переключателя внутри элемента <code>label</code> вместе с текстом ярлыка, чтобы сделать текст кликабельным. Другой способ добиться этого - использовать атрибут <code>for</code> как объяснено в этом уроке. Значение атрибута <code>for</code> должно быть таким же, как значение атрибута <code>id</code> элемента управления формой. Вот пример: <blockquote> &lt;Форма&gt; <br> &lt;label for = &quot;name&quot;&gt; Имя: &lt;/ label&gt; <br> &lt;input type = &quot;text&quot; id = &quot;name&quot; name = &quot;name&quot;&gt; <br> &lt;/ Форма&gt; <br></blockquote>
</section>

## Instructions
<section id='instructions'>
Camper Cat рассчитывает на большой интерес к его вдумчивым сообщениям в блоге и хочет включить форму для регистрации электронной почты. Добавьте <code>for</code> атрибут к <code>label</code> электронной почты, которая соответствует <code>id</code> на его <code>input</code> поле.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have a <code>for</code> attribute on the <code>label</code> tag that is not empty.
    testString: assert($('label').attr('for'));
  - text: Your <code>for</code> attribute value should match the <code>id</code> value on the email <code>input</code>.
    testString: assert($('label').attr('for') == 'email');

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
