---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: https://scrimba.com/c/cRkpDhB
forumTopicId: 18251
localeTitle: Переопределить объявления классов с помощью атрибутов идентификатора стилизации
---

## Description
<section id='description'>
Мы просто доказали, что браузеры читают CSS сверху вниз. Это означает, что в случае конфликта браузер будет использовать любую декларацию CSS. Но мы еще не закончили. Существуют и другие способы переопределения CSS. Вы помните атрибуты id? Давайте переопределим ваши классы с <code>pink-text</code> и <code>blue-text</code> и сделаем ваш элемент <code>h1</code> оранжевым, предоставив элементу <code>h1</code> идентификатор, а затем стиль этого идентификатора.
</section>

## Instructions
<section id='instructions'>
Дайте элементу <code>h1</code> атрибут <code>id</code> <code>orange-text</code> . Помните, что стили id выглядят следующим образом: <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code> Оставьте классы <code>blue-text</code> и <code>pink-text</code> на вашем элементе <code>h1</code> . Создайте объявление CSS для вашего <code>orange-text</code> в элементе <code>style</code> . Вот пример того, как это выглядит: <blockquote> # brown-text { <br> коричневый цвет; <br> } </blockquote> Примечание. Неважно, объявляете ли вы этот CSS выше или ниже класса розового текста, поскольку атрибут id всегда будет иметь приоритет.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the class <code>pink-text</code>.
    testString: assert($("h1").hasClass("pink-text"));
  - text: Your <code>h1</code> element should have the class <code>blue-text</code>.
    testString: assert($("h1").hasClass("blue-text"));
  - text: Give your <code>h1</code> element the id of <code>orange-text</code>.
    testString: assert($("h1").attr("id") === "orange-text");
  - text: There should be only one <code>h1</code> element.
    testString: assert(($("h1").length === 1));
  - text: Create a CSS declaration for your <code>orange-text</code> id
    testString: assert(code.match(/#orange-text\s*{/gi));
  - text: Do not give your <code>h1</code> any <code>style</code> attributes.
    testString: assert(!code.match(/<h1.*style.*>/gi));
  - text: Your <code>h1</code> element should be orange.
    testString: assert($("h1").css("color") === "rgb(255, 165, 0)");

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
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>

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
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```

</section>
