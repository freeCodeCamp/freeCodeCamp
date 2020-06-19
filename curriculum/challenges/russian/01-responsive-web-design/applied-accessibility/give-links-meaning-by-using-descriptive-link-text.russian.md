---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: https://scrimba.com/c/c437DcV
forumTopicId: 301013
localeTitle: Определите ссылку при помощи описания
---

## Description
<section id='description'>
У аудиоинтерфейсов (читалок), предназначенных для озвучивания текста на экране, есть разные опции в зависимости от типа контента. Они могут включать пропуск отдельных элементов, переход к основному содержимому или выдачу краткой выжимки содержания страницы только из заголовков. Или например, может быть выбрана озвучивание только ссылок, находящихся на странице. Когда мы просматриваем веб-страницу на экране, мы  получаем информацию о том, куда ведет ссылка, из ее названия или того текста, который находится между тэгами anchor ( <code>a</code> ). Поэтому ссылки вида "продолжение здесь", "читать дальше" или "нажмите здесь" - это плохое решение. Вместо этого вы должны использовать короткий, но емкое описание между тегами <code>a</code>. Так вы не потеряете пользователей, которые используют аудиоинтерфейс.
</section>

## Instructions
<section id='instructions'>
Текст ссылки, который использует Camper Cat, не очень понятен вне контекста страницы. Переместите теги ( <code>a</code> ) так, чтобы они выдавали описание "information about batteries"(«информация об аккумуляторах») вместо "Click here"(«Нажмите здесь»).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".
    testString: assert($('a').text().match(/^(information about batteries)$/g));
  - text: Make sure your <code>a</code> element has a closing tag.
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length);

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
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
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

</section>
