---
id: bad87fee1348bd9aed918626
title: Видалити класи з елементу за допомогою jQuery
challengeType: 6
forumTopicId: 18264
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: remove-classes-from-an-element-with-jquery
---

# --description--

Видаляти класи за допомогою функції jQuery `removeClass()` можна так само, як додавати класи до елементу, скориставшись функцією `addClass()`.

Для певної кнопки ви можете зробити це таким чином:

```js
$("#target2").removeClass("btn-default");
```

Видаліть клас `btn-default` з усіх елементів `button`.

# --hints--

Клас `btn-default` варто видалити з усіх елементів `button`.

```js
assert($('.btn-default').length === 0);
```

Використовуйте тільки jQuery, щоб видалити цей клас з елементу.

```js
assert(code.match(/btn btn-default/g));
```

Ви маєте лише видалити клас `btn-default`.

```js
assert(
  code.match(
    /\.[\v\s]*removeClass[\s\v]*\([\s\v]*('|")\s*btn-default\s*('|")[\s\v]*\)/gm
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
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
