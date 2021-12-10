---
id: bad87fee1348bd9aedc08826
title: Позначення елементів за класом з використанням jQuery
challengeType: 6
forumTopicId: 18316
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

Ви помітили, як ми надали всім нашим елементам `button` ефект bounce? Ми обрали їх з `$("button")`, тоді ми додали до них деякі класи CSS з `.addClass("animated bounce");`.

Ви щойно використали функцію `.addClass()`, що дозволяє додавати класи до елементів.

Для початку, нумо оберемо ваші елементи `div` з класом `well`, використовуючи селектор `$(".well")`.

Зверніть увагу, що, як і у випадку з деклараціями CSS, ви вводите `.` перед назвою класу.

Тоді використовуйте функцію jQuery's `.addClass()`, щоб додати класи `animated` та `shake`.

Наприклад, ви можете змусити всі елементи класу `text-primary` тремтіти, додаючи наступне до вашого `document ready function`:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

Використовуйте функцію jQuery `addClass()`, щоб додати класи `animated` та `shake` до всіх ваших елементів з класом `well`.

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

Ви повинні використовувати лише jQuery, щоб додавати ці класи до елементу.

```js
assert(!code.match(/class\.\*animated/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
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
