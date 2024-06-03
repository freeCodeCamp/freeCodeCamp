---
id: bad87fee1348bd9bedc08826
title: Націльте елементи HTML селекторами за допомогою jQuiery
challengeType: 6
forumTopicId: 18319
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

Тепер у нас є функція `document ready`.

Напишемо першу інструкцію в jQuery. Усі функції jQuery починаються з `$`, який зазвичай називають доларом.

jQuery часто обирає елемент HTML за допомогою <dfn>селектора</dfn>, а потім робить щось з цим елементом.

Наприклад, змусимо всі елементи `button` стрибати. Просто додайте цей код до функції document ready:

```js
$("button").addClass("animated bounce");
```

Зверніть увагу, що ми вже додали бібліотеки jQuery та Animate.css, щоб ви могли скористатися ними в редакторі. Ви використовуєте jQuery, щоб додати клас Animate.css `bounce` до елементів `button`.

# --hints--

Використайте функцію `addClass()`, щоб надати класи `animated` та `bounce` до елементів `button`.

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

Для додавання цих класів використовуйте лише jQuery.

```js
assert(!code.match(/class.*animated/g));
```

Код jQuery має бути в межах функції `$(document).ready();`.

```js
assert(
  code.replace(/\s/g, '').match(/\$\(document\)\.ready\(function\(\)\{\$/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
