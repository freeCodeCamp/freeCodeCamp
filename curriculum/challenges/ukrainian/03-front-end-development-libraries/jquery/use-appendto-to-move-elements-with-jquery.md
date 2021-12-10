---
id: bad87fee1348bd9aed608826
title: Використання appendTo для переміщення елементів за допомогою jQuery
challengeType: 6
forumTopicId: 18340
dashedName: use-appendto-to-move-elements-with-jquery
---

# --description--

Тепер спробуймо перемістити елементи з одного `div` до іншого.

jQuery має функцію `appendTo()`, яка дозволяє вибирати HTML елементи та додавати їх до іншого елемента.

Наприклад, якщо ми хочемо змістити `target4` із правої комірки у ліву, то використовуємо:

```js
$("#target4").appendTo("#left-well");
```

Змістіть елемент `target2` із `left-well` до вашого `right-well`.

# --hints--

Ваш елемент `target2` не повинен бути всередині вашого `left-well`.

```js
assert($('#left-well').children('#target2').length === 0);
```

Ваш елемент `target2` повинен бути всередині вашого `right-well`.

```js
assert($('#right-well').children('#target2').length > 0);
```

Щоб перемістити ці елементи, використовуйте лише jQuery.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();

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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
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
