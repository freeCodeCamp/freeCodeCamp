---
id: bad87fee1348bd9aed208826
title: Націлення на дочірні елементи за допомогою jQuery
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

Коли елементи HTML розташовані таким чином, коли один рівень знаходиться нижче іншого, їх називають <dfn>дочірніми</dfn> елементами. Наприклад, у цьому завданні текстові елементи кнопки `#target1`, `#target2` і `#target3` - дочірні до елементу `<div class="well" id="left-well">`.

jQuery має функцію під назвою `children()`, що надає доступ до дочірніх чи будь-яких інших обраних елементів.

Ось приклад того, як можна використовувати функцію `children()` для того, щоб змінити колір дочірніх елементів елементу `left-well` на `blue`:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

Змініть колір усіх дочірніх елементів елементу`right-well` на оранжевий.

# --hints--

Усі дочірні елементи `#right-well` повинні мати текст помаранчевого кольору.

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

Використайте функцію `children()`, щоб змінити ці елементи.

```js
assert(code.match(/\.children\(\)\.css/g));
```

Користуйтесь лише jQuery, щоб додати ці класи до елементу.

```js
assert(code.match(/<div class="well" id="right-well">/g));
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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
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
