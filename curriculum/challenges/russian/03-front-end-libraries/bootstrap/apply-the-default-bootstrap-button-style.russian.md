---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
forumTopicId: 16657
localeTitle: Применить стиль кнопки Bootstrap по умолчанию
---

## Description
<section id='description'>
В Bootstrap есть еще один класс кнопок <code>btn-default</code> . Примените оба <code>btn</code> и <code>btn-default</code> к каждому из ваших элементов <code>button</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Apply the <code>btn</code> class to each of your <code>button</code> elements.
    testString: assert($(".btn").length > 5);
  - text: Apply the <code>btn-default</code> class to each of your <code>button</code> elements.
    testString: assert($(".btn-default").length > 5);

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
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
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

</section>
