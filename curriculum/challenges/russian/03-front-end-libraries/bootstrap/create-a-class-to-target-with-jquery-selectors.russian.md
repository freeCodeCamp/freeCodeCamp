---
id: bad87fee1348bd9aec908852
title: Create a Class to Target with jQuery Selectors
challengeType: 0
forumTopicId: 16815
localeTitle: Создание класса для цели с помощью селекторов jQuery
---

## Description
<section id='description'>
Не каждый класс должен иметь соответствующий CSS. Иногда мы создаем классы только с целью более простого выбора этих элементов с помощью jQuery. Создайте класс для каждого из ваших элементов <code>button</code> <code>target</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Apply the <code>target</code> class to each of your <code>button</code> elements.
    testString: assert($(".target").length > 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
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
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```

</section>
