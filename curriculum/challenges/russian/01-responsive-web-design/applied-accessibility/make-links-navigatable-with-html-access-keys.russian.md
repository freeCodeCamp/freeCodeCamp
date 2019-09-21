---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: Сделать ссылки навигационными с ключами доступа к HTML
---

## Description
<section id='description'>
HTML предлагает атрибут <code>accesskey</code> для указания сочетания клавиш для активации или приведения фокуса к элементу. Это может сделать навигацию более эффективной для пользователей только для клавиатуры. HTML5 позволяет использовать этот атрибут для любого элемента, но особенно полезен, когда он используется с интерактивными. Сюда входят ссылки, кнопки и элементы управления формой. Вот пример: <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat хочет, чтобы ссылки вокруг двух названий статей в блогах имели быстрые клавиши, чтобы пользователи сайта могли быстро перейти к полной истории. Добавьте атрибут <code>accesskey</code> к обоим ссылкам и установите первый для «g» (для Гарфилда), а второй - «c» (для Chuck Norris).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен добавить атрибут <code>accesskey</code> к тегу <code>a</code> с <code>id</code> «first».
    testString: assert($('#first').attr('accesskey'));
  - text: Ваш код должен добавить атрибут <code>accesskey</code> к тегу <code>a</code> с <code>id</code> «второй».
    testString: assert($('#second').attr('accesskey'));
  - text: 'Ваш код должен установить атрибут <code>accesskey</code> в теге <code>a</code> с <code>id</code> «first» до «g». Обратите внимание, что дело имеет значение.'
    testString: assert($('#first').attr('accesskey') == 'g');
  - text: 'Ваш код должен установить атрибут <code>accesskey</code> в теге <code>a</code> с <code>id</code> «second» до «c». Обратите внимание, что дело имеет значение.'
    testString: assert($('#second').attr('accesskey') == 'c');
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
  <article>


    <h2><a id="first" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Is Chuck Norris a Cat Person?</a></h2>


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
// solution required
```

</section>
