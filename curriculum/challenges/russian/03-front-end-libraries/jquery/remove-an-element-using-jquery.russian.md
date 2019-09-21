---
id: bad87fee1348bd9aed708826
title: Remove an Element Using jQuery
challengeType: 6
forumTopicId: 18262
localeTitle: Удаление элемента с помощью jQuery
---

## Description
<section id='description'>
Теперь давайте удалим HTML-элемент с вашей страницы с помощью jQuery. Функция jQuery имеет функцию <code>.remove()</code> , которая полностью удалит элемент HTML. Удалите элемент <code>target4</code> со страницы с помощью функции <code>.remove()</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use jQuery to remove your <code>target4</code> element from your page.
    testString: assert($("#target4").length === 0 && code.match(/\$\(["']#target4["']\).remove\(\)/g));
  - text: Only use jQuery to remove this element.
    testString: assert(code.match(/id="target4/g) && !code.match(/<!--.*id="target4".*-->/g) && $("#right-well").length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

  });
</script>

<!-- Only change code above this line. -->

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

</div>

</section>

## Solution
<section id='solution'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
  });
</script>

<!-- Only change code above this line. -->

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

</section>
