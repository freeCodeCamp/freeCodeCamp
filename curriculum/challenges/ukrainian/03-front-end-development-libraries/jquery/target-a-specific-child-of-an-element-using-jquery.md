---
id: bad87fee1348bd9aed108826
title: Націльте певний дочірній елемент за допомогою jQuiery
challengeType: 6
forumTopicId: 18315
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-a-specific-child-of-an-element-using-jquery
---

# --description--

Ви вже бачили, чому атрибути id такі зручні для націлювання селекторами jOuery. Але не всі id, з якими ви працюватимете, будуть такими лаконічними.

На щастя, jQuery має деякі інші хитрощі для націлювання на правильні елементи.

jQuery використовує селектори CSS для націлювання на елементи. Селектор `target:nth-child(n)` дозволяє вибрати певні елементи з цільовим класом чи типом.

Ось приклад, як надати клас bounce третьому елементу кожної стіни:

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

Зробіть другий дочірній елемент кожної стіни стрибучим. Виберіть дочірні елементи з класом `target`.

# --hints--

Другий елемент в елементах `target` має стрибати.

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

Лише два елементи мають стрибати.

```js
assert($('.animated.bounce').length === 2);
```

Використайте селектор `:nth-child()`, щоб змінити ці елементи.

```js
assert(code.match(/\:nth-child\(/g));
```

Для додавання цих класів використовуйте лише jQuery.

```js
assert(
  code.match(/\$\(".target:nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target:nth-child\(2\)'\)/g) ||
    code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g)
);
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
    $(".target:nth-child(2)").addClass("animated bounce");
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
