---
id: bad87fee1348bd9bedc08826
title: Цільові HTML елементи з селекторами jQuery
challengeType: 6
forumTopicId: 18319
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

Тепер у нас є функція `document ready`.

Тепер напишемо нашу першу команду у jQuery. Усі функції jQuery починаються з `$`, який називають символом долара, або блінг.

jQuery часто обирає HTML елемент з <dfn>селектором</dfn>, потім робить щось з цим елементом.

Наприклад, надамо усім елементам `button` ефект bounce. Просто додайте цей код у ваш документ:

```js
$("button").addClass("animated bounce");
```

Зверніть увагу, ми вже додали обидві бібліотеки jQuery і бібліотеку Animate.css, щоб ви могли скористатися ними в редакторі. Таким чином, ви використовуєте jQuery, щоб застосувати клас `bounce` з бібліотеки Animate.css до елементів `button`.

# --hints--

Використовуйте jQuery функцію `addClass()`, щоб застосувати класи `animated` й `bounce` до елементів `button`.

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

Використовуйте jQuery тільки щоб додати класи до елементів.

```js
assert(!code.match(/class.*animated/g));
```

Ваш код jQuery має бути в функції `$(document).ready();`.

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
