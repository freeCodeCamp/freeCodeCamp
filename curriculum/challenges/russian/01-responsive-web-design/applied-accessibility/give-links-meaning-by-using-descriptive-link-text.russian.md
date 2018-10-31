---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: 'Дать ссылку, используя текст описательной ссылки'
---

## Description
<section id="description"> У пользователей экранного считывателя есть разные опции для того, какой тип содержимого их устройство читает. Это включает в себя пропуск элементов (или над ними), переход к основному содержимому или получение сводки страниц из заголовков. Другой вариант - только слышать ссылки, доступные на странице. Экранные читатели делают это, читая текст ссылки, или то, что находится между тэгами anchor ( <code>a</code> ). Наличие списка ссылок «нажмите здесь» или «прочитать больше» не поможет. Вместо этого вы должны использовать короткий, но описательный текст в тегах <code>a</code> чтобы предоставить больше смысла для этих пользователей. </section>

## Instructions
<section id="instructions"> Текст ссылки, который использует Camper Cat, не очень описателен без окружающего контекста. Переместите метки привязки ( <code>a</code> ), чтобы они обернули текст «информация об аккумуляторах» вместо «Нажмите здесь». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш код должен переместить якорь тега вокруг слов «Нажмите здесь» , чтобы обернуть вокруг слов «информация о батареях». <code>a</code>'
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: 'Убедитесь , что ваш элемент имеет закрывающий тег. <code>a</code>'
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

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
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
