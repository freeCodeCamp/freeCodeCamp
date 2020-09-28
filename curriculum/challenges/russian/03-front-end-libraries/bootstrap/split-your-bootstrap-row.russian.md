---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
forumTopicId: 18306
localeTitle: Разделите строку Bootstrap
---

## Description
<section id='description'>
После того, как мы создали строку Bootstrap, давайте разделим её на две колонки, чтобы хранить в них наши элементы.

Создайте два `div` элемента, оба с классом `col-xs-6`, внутри вашей строки.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest two <code>div class="col-xs-6"</code> elements within your <code>div class="row"</code> element.
    testString: assert($("div.row > div.col-xs-6").length > 1);
  - text: Make sure all your <code>div</code> elements have closing tags.
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


  </div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```

</section>
