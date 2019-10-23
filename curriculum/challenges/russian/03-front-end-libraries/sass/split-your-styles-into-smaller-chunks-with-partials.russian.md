---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
forumTopicId: 301459
localeTitle: Разделите свои стили на мелкие куски с частицами
---

## Description
<section id='description'>
<code>Partials</code> в Sass - это отдельные файлы, содержащие сегменты кода CSS. Они импортируются и используются в других файлах Sass. Это отличный способ группировать аналогичный код в модуль, чтобы поддерживать его. Имена <code>partials</code> начинаются с символа подчеркивания ( <code>_</code> ), который сообщает Sass, что это небольшой сегмент CSS, а не для преобразования его в файл CSS. Кроме того, файлы Sass заканчиваются расширением <code>.scss</code> . Чтобы привести код в <code>partial</code> файле в другой файл Sass, используйте директиву <code>@import</code> . Например, если все ваши <code>mixins</code> сохранены в <code>partial</code> имени «_mixins.scss», и они необходимы в файле «main.scss», так их можно использовать в основном файле: <blockquote> // В файле main.scss <br><br> @import &#39;mixins&#39; </blockquote> Обратите внимание, что подчеркивание не требуется в операторе <code>import</code> - Сасс понимает, что он является <code>partial</code> . После <code>partial</code> импортирования в файл доступны все переменные, <code>mixins</code> и другой код.
</section>

## Instructions
<section id='instructions'>
Напишите оператор <code>@import</code> для импорта <code>partial</code> имени <code>_variables.scss</code> в файл main.scss.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@import</code> directive, and should not include the underscore in the file name.
    testString: assert(code.match(/@import\s+?('|")variables\1/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
// The main.scss file

```

</div>

</section>

## Solution
<section id='solution'>

```html
// The main.scss file
@import 'variables'
```

</section>
