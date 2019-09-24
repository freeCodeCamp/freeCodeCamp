---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
forumTopicId: 16636
localeTitle: Добавить элементы внутри ваших бутстрапов
---

## Description
<section id='description'>
Теперь у нас есть несколько элементов <code>div</code> на каждом столбце нашей строки. Это достаточная глубина для нашей цели. Теперь мы можем добавить элементы <code>button</code> . Гнездо три <code>button</code> элементы внутри каждого из <code>well</code> <code>div</code> элементов.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest three <code>button</code> elements within each of your <code>div</code> elements with class <code>well</code>.
    testString: assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3);
  - text: You should have a total of 6 <code>button</code> elements.
    testString: assert($("button") && $("button").length > 5);
  - text: Make sure all your <code>button</code> elements have closing tags.
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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

</section>
