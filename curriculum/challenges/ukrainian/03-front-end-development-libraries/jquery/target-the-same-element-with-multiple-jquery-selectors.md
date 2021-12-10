---
id: bad87fee1348bd9aed908626
title: Позначення одного й того ж елемента за допомогою декількох селекторів jQuery
challengeType: 6
forumTopicId: 18322
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

Тепер вам відомі 3 шляхи позначення елементів: за типом - `$("button")`, за класом `$(".btn")` і за id `$("#target1")`.

Хоча можливо і додати декілька класів в одному виклику `.addClass()`. Додаймо їх до одного елементу * трьома різними шляхами*.

Використовуючи `.addClass()`, додавайте тільки один клас за раз до одного елемента трьома різними способами:

Додайте клас `animated` до всіх елементів із типом `button`.

Додайте клас `shake` до всіх кнопок із класом `.btn`.

Додайте клас `btn-primary` до кнопок з id `#target1`.

**Примітка:** Позначайте тільки один елемент і додавайте тільки один клас за раз. Загалом всі три окремих селектори додадуть три класи `shake`, `animated` та `btn-primary` до `#target1`.

# --hints--

Використовуйте в своєму коді селектор `$("button")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

Використовуйте в своєму коді селектор `$(".btn")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

Використовуйте в своєму коді селектор `$("#target1")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

Додавайте лише один клас до кожного із трьох ваших селекторів.

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

Елемент `#target1` повинен мати класи `animated`‚ `shake` та `btn-primary`.

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

Щоб додавати ці класи до елемента, використовуйте лише jQuery.

```js
assert(!code.match(/class.*animated/g));
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
