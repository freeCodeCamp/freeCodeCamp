---
id: bad87fee1348bd9aed608826
title: Використайте appendTo, щоб перемістити елементи за допомогою jQuery
challengeType: 6
forumTopicId: 18340
dashedName: use-appendto-to-move-elements-with-jquery
---

# --description--

Спробуємо перемістити елементи з одного `div` до іншого.

jQuery має функцію `appendTo()`, яка дозволяє вибрати елементи HTML та додати їх до іншого елемента.

Наприклад, якщо потрібно перемістити `target4` із правої стіни до лівої, то використаємо:

```js
$("#target4").appendTo("#left-well");
```

Перемістіть елемент `target2` з `left-well` до `right-well`.

# --hints--

Елемент `target2` не повинен бути всередині `left-well`.

```js
assert($('#left-well').children('#target2').length === 0);
```

Елемент `target2` повинен бути всередині `right-well`.

```js
assert($('#right-well').children('#target2').length > 0);
```

Для переміщення цих елементів використовуйте лише jQuery.

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
