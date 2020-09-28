---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: https://scrimba.com/c/cGJDQug
forumTopicId: 18253
localeTitle: Переопределить стили, записав их ниже в последующем CSS
---

## Description
<section id='description'>
Наш класс <code>pink-text</code> переопределил декларацию CSS в <code>body</code> элементе! Мы просто доказали, что наши классы переопределяют CSS элемента <code>body</code> . Итак, следующий логический вопрос: что мы можем сделать, чтобы переопределить наш класс <code>pink-text</code> ?
</section>

## Instructions
<section id='instructions'>
Создайте дополнительный класс CSS <code>blue-text</code>, который задает элементу синий цвет. Убедитесь, что оно ниже вашего объявления класса <code>pink-text</code>. Примените класс <code>blue-text</code> к вашему элементу <code>h1</code> в дополнение к вашему классу <code>pink-text</code>, и давайте посмотрим, какой из них выиграет. Применение нескольких атрибутов класса к элементу HTML выполняется с пространством между ними следующим образом: <code>class=&quot;class1 class2&quot;</code> Примечание. Не имеет значения, какой порядок классов указан в элементе HTML. Тем не менее, порядок объявлений <code>class</code> в разделе <code>&lt;style&gt;</code> - это то, что важно. Вторая декларация всегда будет иметь приоритет над первой. Поскольку <code>.blue-text</code> объявлен вторым, он переопределяет атрибуты <code>.pink-text</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the class <code>pink-text</code>.
    testString: assert($("h1").hasClass("pink-text"));
  - text: Your <code>h1</code> element should have the class <code>blue-text</code>.
    testString: assert($("h1").hasClass("blue-text"));
  - text: Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.
    testString: assert($(".pink-text").hasClass("blue-text"));
  - text: Your <code>h1</code> element should be blue.
    testString: assert($("h1").css("color") === "rgb(0, 0, 255)");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

</section>
