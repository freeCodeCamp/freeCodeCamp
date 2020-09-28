---
id: bad87fee1348bd9aec908855
title: Give Each Element a Unique id
challengeType: 0
forumTopicId: 18191
localeTitle: Дайте каждому элементу уникальный идентификатор
---

## Description
<section id='description'>
Мы также хотим иметь возможность использовать jQuery для ориентации каждой кнопки по ее уникальному идентификатору. Дайте каждой из ваших кнопок уникальный идентификатор, начиная с <code>target1</code> и заканчивая <code>target6</code> . Убедитесь, что <code>target1</code> для <code>target3</code> находится в <code>#left-well</code> , а <code>target4</code> - <code>target6</code> находятся в <code>#right-well</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: One <code>button</code> element should have the id <code>target1</code>.
    testString: assert($("#left-well").children("#target1") && $("#left-well").children("#target1").length > 0);
  - text: One <code>button</code> element should have the id <code>target2</code>.
    testString: assert($("#left-well").children("#target2") && $("#left-well").children("#target2").length > 0);
  - text: One <code>button</code> element should have the id <code>target3</code>.
    testString: assert($("#left-well").children("#target3") && $("#left-well").children("#target3").length > 0);
  - text: One <code>button</code> element should have the id <code>target4</code>.
    testString: assert($("#right-well").children("#target4") && $("#right-well").children("#target4").length > 0);
  - text: One <code>button</code> element should have the id <code>target5</code>.
    testString: assert($("#right-well").children("#target5") && $("#right-well").children("#target5").length > 0);
  - text: One <code>button</code> element should have the id <code>target6</code>.
    testString: assert($("#right-well").children("#target6") && $("#right-well").children("#target6").length > 0);

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
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```

</section>
