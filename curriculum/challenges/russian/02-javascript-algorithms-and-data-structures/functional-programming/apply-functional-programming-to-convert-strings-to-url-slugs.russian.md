---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
forumTopicId: 301227
localeTitle: Применить функциональное программирование для преобразования строк в URL-адреса
---

## Description
<section id='description'>
Последние несколько проблем охватывали ряд полезных методов массивов и строк, которые следуют принципам функционального программирования. Мы также узнали о <code>reduce</code> , который является мощным методом, используемым для уменьшения проблем в более простых формах. От вычисления средних значений до сортировки любая операция массива может быть достигнута путем ее применения. Напомним, что <code>map</code> и <code>filter</code> являются особыми случаями <code>reduce</code> . Давайте объединим то, что мы узнали, чтобы решить практическую проблему. На многих сайтах управления контентом (CMS) заголовки сообщения добавлены в часть URL для простых целей закладок. Например, если вы пишете средний пост под названием «Stop Using Reduce», вероятно, URL-адрес будет иметь в нем какую-то форму заголовка («... / stop-using-reduce»). Возможно, вы уже это заметили на сайте freeCodeCamp.
</section>

## Instructions
<section id='instructions'>
Заполните функцию <code>urlSlug</code> чтобы она преобразует <code>title</code> строки и возвращает переносимую версию для URL-адреса. Вы можете использовать любой из методов, описанных в этом разделе, и не использовать <code>replace</code> . Вот требования: Вход представляет собой строку с пробелами и заглавными словами. Вывод представляет собой строку с пробелами между словами, замененными дефис ( <code>-</code> ). Вывод должен быть все буквы с нижним окошком. На выходе не должно быть пробелов
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>globalTitle</code> variable should not change.
    testString: assert(globalTitle === "Winter Is Coming");
  - text: Your code should not use the <code>replace</code> method for this challenge.
    testString: assert(!code.match(/\.replace/g));
  - text: <code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.
    testString: assert(urlSlug("Winter Is Coming") === "winter-is-coming");
  - text: <code>urlSlug(" Winter Is  &nbsp;Coming")</code> should return <code>"winter-is-coming"</code>.
    testString: assert(urlSlug(" Winter Is  Coming") === "winter-is-coming");
  - text: <code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.
    testString: assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone");
  - text: <code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.
    testString: assert(urlSlug("Hold The Door") === "hold-the-door");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

```

</div>

</section>

## Solution
<section id='solution'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

</section>
