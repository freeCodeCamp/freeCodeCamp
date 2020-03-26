---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
forumTopicId: 16639
localeTitle: Добавление атрибутов идентификатора к элементам начальной загрузки
---

## Description
<section id='description'>
Напомним, что помимо атрибутов класса вы можете указать каждому из ваших элементов атрибут <code>id</code>. Каждый идентификатор должен быть уникальным для определенного элемента и использоваться только один раз на странице. Давайте дадим уникальный идентификатор для каждого из наших <code>div</code> элементов класса <code>well</code>. Помните, что вы можете указать элемент id следующим образом: <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code> Дайте элементу well слева идентификатор <code>left-well</code>. Дайте элементу well справа идентификатор <code>right-well</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Дайте элементу  <code>well</code> слева id <code>left-well</code>.
    testString: assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0);
  - text: Дайте элементу <code>well</code> справа id <code>right-well</code>.
    testString: assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0);

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
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
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
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

</section>
