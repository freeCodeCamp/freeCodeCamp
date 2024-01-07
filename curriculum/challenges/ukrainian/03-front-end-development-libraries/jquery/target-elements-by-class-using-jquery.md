---
id: bad87fee1348bd9aedc08826
title: Націльте елементи за класом за допомогою jQuiery
challengeType: 6
forumTopicId: 18316
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

Зрозуміли, як ми змусили всі елементи `button` стрибати? Ми вибрали їх за допомогою `$("button")`, а потім додали декілька класів CSS за допомогою `.addClass("animated bounce");`.

Ви щойно використали функцію `.addClass()`, яка дозволяє додавати класи до елементів.

Спочатку націлимо елементи `div` з класом `well`, використавши селектор `$(".well")`.

Зверніть увагу: як і в оголошеннях CSS, перед назвою класу потрібно ставити `.`.

Потім використайте функцію `.addClass()`, щоб додати класи `animated` та `shake`.

Наприклад, ви можете змусити всі елементи з класом `text-primary` тремтіти, додавши до `document ready function` такий код:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

Використайте функцію `addClass()`, щоб надати класи `animated` та `shake` до всіх елементів з класом `well`.

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

Для додавання цих класів використовуйте лише jQuery.

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
