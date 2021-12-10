---
id: bad87fee1348bd9aed808826
title: Вимкнення елементу за допомогою jQuery
challengeType: 6
forumTopicId: 17563
dashedName: disable-an-element-using-jquery
---

# --description--

Ви також можете змінити non-CSS властивості елементів HTML за допомогою jQuery. Наприклад, ви можете вимкнути кнопки.

Коли ви вимикаєте кнопку, вона стає сірою і її більше не можна натиснути.

jQuery має функцію `.prop()`, яка дозволяє підлаштовувати властивості елементів.

Ось як ви можете вимкнути усі кнопки:

```js
$("button").prop("disabled", true);
```

Відключіть тільки кнопку `target1`.

# --hints--

Ваша кнопка `target1` буде відключена.

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

Ніякі інші кнопки не слід вимикати.

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

Щоб додавати ці класи до елементу, використовуйте лише jQuery.

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
