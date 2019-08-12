---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
videoUrl: ''
localeTitle: Применить стиль кнопки Bootstrap по умолчанию
---

## Description
<section id="description"> В Bootstrap есть еще один класс кнопок <code>btn-default</code> . Примените оба <code>btn</code> и <code>btn-default</code> к каждому из ваших элементов <code>button</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Примените класс <code>btn</code> к каждому из ваших элементов <code>button</code> .
    testString: 'assert($(".btn").length > 5, "Apply the <code>btn</code> class to each of your <code>button</code> elements.");'
  - text: Примените <code>btn-default</code> к каждому из ваших элементов <code>button</code> .
    testString: 'assert($(".btn-default").length > 5, "Apply the <code>btn-default</code> class to each of your <code>button</code> elements.");'

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

```js
// solution required
```
</section>
