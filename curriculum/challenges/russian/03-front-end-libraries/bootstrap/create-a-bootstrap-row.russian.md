---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
forumTopicId: 16813
localeTitle: Создать строку Bootstrap
---

## Description
<section id='description'>
Теперь мы создадим строку Bootstrap для наших встроенных элементов. Создайте элемент <code>div</code> под тегом <code>h3</code> с классом <code>row</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add a <code>div</code> element below your <code>h3</code> element.
    testString: assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0));
  - text: Your <code>div</code> element should have the class <code>row</code>
    testString: assert($("div").hasClass("row"));
  - text: Your <code>row div</code> should be nested inside the <code>container-fluid div</code>
    testString: assert($("div.container-fluid div.row").length > 0);
  - text: Make sure your <code>div</code> element has a closing tag.
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```

</section>
