---
id: bad87fee1348bd9aed508826
title: Клонуйте елемент за допомогою jQuery
challengeType: 6
forumTopicId: 16780
dashedName: clone-an-element-using-jquery
---

# --description--

Ви можете не тільки переміщати елементи, але й копіювати їх з одного місця в інше.

У jQuery є функція `clone()`, яка створює копію елемента.

Наприклад, якщо потрібно скопіювати `target2` з `left-well` до `right-well`, то використовуємо:

```js
$("#target2").clone().appendTo("#right-well");
```

Ви помітили, що для цього потрібно з’єднати дві функції jQuery? Це називається <dfn>ланцюжком функцій</dfn>, що полегшує роботу з jQuery.

Клонуйте елемент `target5` та додайте його до `left-well`.

# --hints--

Елемент `target5` має бути всередині `right-well`.

```js
assert($('#right-well').children('#target5').length > 0);
```

Копія елемента `target5` має бути всередині `left-well`.

```js
assert($('#left-well').children('#target5').length > 0);
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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
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
